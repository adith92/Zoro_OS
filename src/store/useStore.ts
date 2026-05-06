import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  vynaaApiKey: string;
  sumoPodApiKey: string;
  voiceEnabled: boolean;
  selectedProvider: 'vynaa' | 'sumopod' | 'dual';
  setVynaaApiKey: (key: string) => void;
  setSumoPodApiKey: (key: string) => void;
  setVoiceEnabled: (enabled: boolean) => void;
  setSelectedProvider: (provider: 'vynaa' | 'sumopod' | 'dual') => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      vynaaApiKey: '',
      sumoPodApiKey: '',
      voiceEnabled: true,
      selectedProvider: 'vynaa',
      setVynaaApiKey: (key) => set({ vynaaApiKey: key }),
      setSumoPodApiKey: (key) => set({ sumoPodApiKey: key }),
      setVoiceEnabled: (enabled) => set({ voiceEnabled: enabled }),
      setSelectedProvider: (provider) => set({ selectedProvider: provider }),
    }),
    {
      name: 'zoro-universe-settings',
    }
  )
);
