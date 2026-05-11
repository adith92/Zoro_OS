export type ZoroChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

// imports at the top
import { callVtechEndpoint } from "./universalVtech";
import { getEndpointById, getDefaultVtechChatEndpoint } from "@/data/vtechRegistry";

export async function runLlmRouter(params: {
  messages: ZoroChatMessage[];
  endpointId?: string;
  isRetry?: boolean;
}): Promise<string> {
  const { messages, endpointId, isRetry } = params;

  let epId = endpointId;
  let ep = epId ? getEndpointById(epId) : undefined;
  
  if (!ep || !ep.safe || ep.endpoint === '/ai/ai/claude') {
    // Override legacy claude or unsafe endpoints with default safe endpoint
    epId = getDefaultVtechChatEndpoint();
    ep = getEndpointById(epId);
  }

  if (!ep) {
    throw new Error(`Model VTECH AI tidak ditemukan. Zoro sudah mencoba mencari fallback model.`);
  }

  if (ep.category !== 'ai') {
    throw new Error(`Endpoint ini bukan endpoint AI Chat.`);
  }

  // construct a prompt from messages since most REST endpoints just take 'text' or 'query'
  const lastUserMessage = messages.filter(m => m.role === 'user').pop()?.content || "";
  const systemMessage = messages.filter(m => m.role === 'system').pop()?.content || "";
  
  let fetchParams: Record<string, string> = {};

  const epParams = ep.params || [];
  const paramNames = epParams.map(p => p.name);

  // Print debug log safely if we want later, but for now just construct accurate parameters
  const isGroqCompound = ep.endpoint === '/api/ai/groq-compound';

  if (isGroqCompound) {
    fetchParams['text'] = lastUserMessage;
    if (paramNames.includes('systemPrompt')) fetchParams['systemPrompt'] = systemMessage;
    if (paramNames.includes('sessionId')) fetchParams['sessionId'] = 'zoro-universe-session';
  } else if (paramNames.includes('prompt')) {
    fetchParams['prompt'] = lastUserMessage;
    if (paramNames.includes('system')) fetchParams['system'] = systemMessage;
    if (paramNames.includes('temperature')) fetchParams['temperature'] = '0.7';
  } else if (paramNames.includes('text')) {
    // Some endpoints simply concatenate system and user prompts if no explicit system param exists
    const prePrompt = (systemMessage && paramNames.length === 1 && paramNames[0] === 'text') 
      ? `(${systemMessage})\n\n${lastUserMessage}` 
      : lastUserMessage;
      
    fetchParams['text'] = prePrompt;
    if (paramNames.includes('systemPrompt')) fetchParams['systemPrompt'] = systemMessage;
    if (paramNames.includes('logic')) fetchParams['logic'] = systemMessage;
  } else if (paramNames.includes('q')) {
    fetchParams['q'] = lastUserMessage;
  } else if (paramNames.includes('question')) {
    fetchParams['question'] = lastUserMessage;
  } else if (epParams.length > 0) {
    const firstParam = epParams.find(p => p.required) || epParams[0];
    if (firstParam) {
       fetchParams[firstParam.name] = lastUserMessage;
    }
  } else {
     fetchParams['text'] = lastUserMessage;
  }

  const response = await callVtechEndpoint(ep, fetchParams);
  
  if (response.error) {
     if (response.error.includes("API key belum diisi")) {
        throw new Error(response.error);
     }
     
     if (response.error.includes("500") || response.status === 500) {
         if (!isRetry) {
             console.log(`Endpoint ${ep.id} returned 500. Retrying with fallback model...`);
             return runLlmRouter({
                 messages,
                 // fallback to ai4chat specifically if we failed
                 endpointId: ep.id.includes('groq') ? 'ZORO_ep_1' : getDefaultVtechChatEndpoint(), 
                 isRetry: true
             });
         }
         throw new Error(`VTECH API masih mengembalikan 500. Coba pilih model AI lain dari Chat atau AI Hub.`);
     }

     if (response.error.includes("404")) {
         // Auto retry once if 404 and we haven't retried yet
         if (!isRetry) {
             console.log(`Endpoint ${ep.id} returned 404. Retrying with fallback model...`);
             return runLlmRouter({
                 messages,
                 endpointId: ep.id.includes('groq') ? 'ZORO_ep_1' : getDefaultVtechChatEndpoint(),
                 isRetry: true
             });
         }
         throw new Error(`Model VTECH ini tidak tersedia atau path endpoint berubah ${response.status ? `(${response.status})` : '(404)'}. Zoro mencoba model fallback.`);
     } else if (response.error.includes("401") || response.error.includes("403")) {
         throw new Error(`Akses ke model VTECH AI ditolak ${response.status ? `(${response.status})` : ''}. Cek kembali API Key Anda di Settings.`);
     } else if (response.error.includes("Failed to fetch") || response.error.includes("NetworkError")) {
         throw new Error(`Koneksi ke VTECH API gagal. Cek internet, CORS, atau aktifkan proxy mode di Settings.`);
     }
     
     throw new Error(`Koneksi ke VTECH API gagal. Cek internet, API key, atau proxy mode di Settings. (${response.error})`);
  }

  const data = response.data as any;
  if (!data) {
     if (response.outputType === 'text' && typeof response.data === 'string') {
        return response.data;
     }
     throw new Error("VTECH API tidak mengembalikan jawaban. Coba ulangi pertanyaan atau pilih model lain.");
  }

  const textRes = data?.result 
      || data?.message 
      || data?.response 
      || data?.text 
      || data?.answer 
      || data?.reply
      || data?.generated_text
      || data?.data?.result
      || data?.data?.message
      || data?.data?.response
      || data?.data?.text
      || data?.data?.answer
      || data?.data?.output
      || data?.data?.content
      || data?.output 
      || data?.content 
      || (data?.choices && data.choices[0]?.message?.content) 
      || (data?.choices && data.choices[0]?.text) 
      || data?.data;

  if (typeof textRes === 'string' && textRes.trim() !== '') {
    return isRetry ? `*(Memakai VTECH Fallback Model)*\n\n${textRes}` : textRes;
  }
  
  if (typeof data === 'string' && data.trim() !== '') {
     return isRetry ? `*(Memakai VTECH Fallback Model)*\n\n${data}` : data;
  }

  return JSON.stringify(textRes || data);
}
