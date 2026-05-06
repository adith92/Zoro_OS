import { useSettingsStore } from '@/store/useStore';

const SUMOPOD_BASE_URL = 'https://ai.sumopod.com/v1';

export async function chatSumoPod(messages: { role: string; content: string }[], model: string = 'gpt-3.5-turbo') {
  const { sumoPodApiKey } = useSettingsStore.getState();
  
  if (!sumoPodApiKey) {
    throw new Error("SumoPod API Kunci tidak ditemukan! Set di Settings.");
  }

  const response = await fetch(`${SUMOPOD_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sumoPodApiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      stream: false
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error?.message || `SumoPod API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// In a real scenario we could fetch from /v1/models, let's hardcode some popular ones for now
export const SUMOPOD_MODELS = [
  'gpt-4o',
  'gpt-3.5-turbo',
  'claude-3-5-sonnet-20240620',
  'gemini-1.5-pro',
];
