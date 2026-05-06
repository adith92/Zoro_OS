import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Provider = 'vynaa' | 'sumopod' | 'dual';
type ApiStatus = 'idle' | 'checking' | 'success' | 'failed';

interface SettingsState {
  vynaaApiKey: string;
  sumoPodApiKey: string;
  voiceEnabled: boolean;
  selectedProvider: Provider;
  selectedModel: string;
  selectedVynaaCategory: string;
  vynaaApiStatus: ApiStatus;
  vynaaUserProfile: any;
  vynaaLimit: any;
  endpointHistory: any[];
  developerUnsafeMode: boolean;
  useVynaaProxy: boolean;
  setVynaaApiKey: (key: string) => void;
  setSumoPodApiKey: (key: string) => void;
  setVoiceEnabled: (enabled: boolean) => void;
  setSelectedProvider: (provider: Provider) => void;
  setSelectedModel: (model: string) => void;
  setSelectedVynaaCategory: (cat: string) => void;
  setVynaaApiStatus: (status: ApiStatus) => void;
  setVynaaUserProfile: (profile: any) => void;
  setVynaaLimit: (limit: any) => void;
  addEndpointHistory: (entry: any) => void;
  setDeveloperUnsafeMode: (enabled: boolean) => void;
  setUseVynaaProxy: (enabled: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      vynaaApiKey: '',
      sumoPodApiKey: '',
      voiceEnabled: true,
      selectedProvider: 'vynaa',
      selectedModel: 'gpt-3.5-turbo',
      selectedVynaaCategory: 'ai',
      vynaaApiStatus: 'idle',
      vynaaUserProfile: null,
      vynaaLimit: null,
      endpointHistory: [],
      developerUnsafeMode: false,
      useVynaaProxy: false,
      
      setVynaaApiKey: (key) => set({ vynaaApiKey: key }),
      setSumoPodApiKey: (key) => set({ sumoPodApiKey: key }),
      setVoiceEnabled: (enabled) => set({ voiceEnabled: enabled }),
      setSelectedProvider: (provider) => set({ selectedProvider: provider }),
      setSelectedModel: (model) => set({ selectedModel: model }),
      setSelectedVynaaCategory: (cat) => set({ selectedVynaaCategory: cat }),
      setVynaaApiStatus: (status) => set({ vynaaApiStatus: status }),
      setVynaaUserProfile: (profile) => set({ vynaaUserProfile: profile }),
      setVynaaLimit: (limit) => set({ vynaaLimit: limit }),
      addEndpointHistory: (entry) => set((state) => ({ 
        endpointHistory: [entry, ...state.endpointHistory].slice(0, 50) 
      })),
      setDeveloperUnsafeMode: (enabled) => set({ developerUnsafeMode: enabled }),
      setUseVynaaProxy: (enabled) => set({ useVynaaProxy: enabled }),
    }),
    {
      name: 'zoro-settings-v3',
    }
  )
);

