import { useSettingsStore } from '@/store/useStore';

const VYNAA_BASE_URL = 'https://vynaa.web.id';

export async function fetchVynaa<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const { vynaaApiKey } = useSettingsStore.getState();
  
  if (!vynaaApiKey) {
    throw new Error("Vynaa API Kunci tidak ditemukan! Set di Settings.");
  }

  const url = new URL(`${VYNAA_BASE_URL}${endpoint}`);
  url.searchParams.append('apikey', vynaaApiKey);
  
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString());
  
  if (!response.ok) {
    throw new Error(`Vynaa API error: ${response.status}`);
  }

  return response.json();
}

// Examples of specific endpoints based on documentation description
export async function chatSimSimi(text: string) {
  return fetchVynaa<any>('/api/ai/simsimi', { text });
}

export async function getAnimeRandom(type: string = 'waifu') {
  return fetchVynaa<any>(`/api/anime/${type}`);
}

export async function searchVunime(query: string) {
  return fetchVynaa<any>('/api/anime/vunime/search', { query });
}

export async function getRandomDoa() {
  return fetchVynaa<any>('/api/islam/doaharian');
}
