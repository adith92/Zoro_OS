export type ZoroChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

import { callVtechEndpoint } from "./universalVtech";
import { GENERATED_VTECH_ENDPOINTS } from "@/data/vtechEndpoints.generated";
import { FALLBACK_VTECH_ENDPOINTS } from "@/data/vtechEndpoints.fallback";

const ALL_ENDPOINTS = [...GENERATED_VTECH_ENDPOINTS, ...FALLBACK_VTECH_ENDPOINTS];

export async function runLlmRouter(params: {
  messages: ZoroChatMessage[];
  endpointId?: string;
}): Promise<string> {
  const { messages, endpointId } = params;

  let epId = endpointId;
  let ep = epId ? ALL_ENDPOINTS.find(e => e.id === epId) : undefined;
  
  if (!ep) {
    // fallback to ai_claude if not found, then first safe ai endpoint
    ep = ALL_ENDPOINTS.find(e => e.id === 'ai_claude') || ALL_ENDPOINTS.find(e => e.category === 'ai' && e.safe && !e.id.toLowerCase().includes('simsimi'));
    // Last resort fallback
    if (!ep) {
       ep = ALL_ENDPOINTS.find(e => e.category === 'ai' && e.safe);
    }
  }

  if (!ep) {
    throw new Error(`Model VTECH AI tidak ditemukan. Zoro akan mencoba kembali memakai Claude.`);
  }

  if (ep.category !== 'ai') {
    throw new Error(`Endpoint ini bukan endpoint AI Chat.`);
  }

  if (!ep.safe) {
    throw new Error(`Model ini belum diaktifkan untuk Chat.`);
  }

  // construct a prompt from messages since most REST endpoints just take 'text' or 'query'
  const lastUserMessage = messages.filter(m => m.role === 'user').pop()?.content || "";
  const systemMessage = messages.filter(m => m.role === 'system').pop()?.content || "";
  
  // If we want to send recent context, we can just prepend it or just send the last message
  const prePrompt = systemMessage ? `(${systemMessage})\n\n${lastUserMessage}` : lastUserMessage;
  
  let fetchParams: Record<string, string> = { text: prePrompt, query: prePrompt, prompt: prePrompt };
  
  if (ep.params && ep.params.length > 0) {
     const firstParam = ep.params.find(p => p.required) || ep.params[0];
     if (firstParam) {
        fetchParams[firstParam.name] = prePrompt;
     }
  }

  const response = await callVtechEndpoint(ep, fetchParams);
  
  if (response.error) {
     if (response.error.includes("API key belum diisi")) {
        throw new Error(response.error);
     }
     
     if (response.error.includes("404")) {
         throw new Error(`Model VTECH API tidak ditemukan ${response.status ? `(${response.status})` : '(404)'}. Path endpoint mungkin berubah: ${ep.endpoint}. Coba pilih model lain dari AI Hub.`);
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

  // Prioritize non-empty string
  if (typeof textRes === 'string' && textRes.trim() !== '') {
    return textRes;
  }
  
  if (typeof data === 'string' && data.trim() !== '') {
     return data;
  }

  return JSON.stringify(textRes || data);
}
