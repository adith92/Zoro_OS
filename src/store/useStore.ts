import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemePaletteId =
  | "zoro-classic"
  | "deep-space"
  | "nebula-candy"
  | "emerald-orbit"
  | "solar-cat"
  | "custom";

export interface ZoroThemeSettings {
  paletteId: ThemePaletteId;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  bloomIntensity: number;
  glitchIntensity: number;
  scanlineIntensity: number;
  starDensity: number;
  motionIntensity: number;
  glassBlur: number;
}

export interface ZoroVoiceSettings {
  voiceEnabled: boolean;
  voiceProvider: "browser" | "vynaa";
  zoroVoiceVolume: number;
  zoroVoicePitch: number;
  zoroVoiceRate: number;
  zoroVoiceName?: string;
  zoroVocalizationsEnabled: boolean;
  voiceInputEnabled: boolean;
}

export interface ZoroPersonalitySettings {
  contextualRemarksEnabled: boolean;
  humorLevel: number;
  insightLevel: number;
  sassLevel: number;
  currentMood: "calm" | "curious" | "excited" | "sleepy" | "captain";
}

import { ZoroAppAction } from "@/lib/zoroContext";

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

  themeSettings: ZoroThemeSettings;
  voiceSettings: ZoroVoiceSettings;
  personalitySettings: ZoroPersonalitySettings;
  zoroMascotState: "idle" | "listening" | "thinking" | "speaking" | "excited" | "sleepy" | "error";
  zoroLastRemark: string | null;
  zoroRecentActions: ZoroAppAction[];
  currentRouteLabel: string;
  currentToolLabel: string;
  currentToolCategory: string;

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

  setThemePalette: (paletteId: ThemePaletteId, colors: Partial<ZoroThemeSettings>) => void;
  setCustomThemeColor: (key: keyof ZoroThemeSettings, color: string) => void;
  setEffectIntensity: (key: keyof ZoroThemeSettings, value: number) => void;
  resetThemeSettings: () => void;
  applyMobileFriendlyEffects: () => void;
  setVoiceSettings: (settings: Partial<ZoroVoiceSettings>) => void;
  setPersonalitySettings: (settings: Partial<ZoroPersonalitySettings>) => void;
  setZoroMascotState: (state: "idle" | "listening" | "thinking" | "speaking" | "excited" | "sleepy" | "error") => void;
  setZoroLastRemark: (remark: string | null) => void;
  addZoroAction: (action: ZoroAppAction) => void;
  setCurrentRouteLabel: (label: string) => void;
  setCurrentToolContext: (label: string, category: string) => void;
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
      
      themeSettings: {
        paletteId: "zoro-classic",
        primaryColor: "#7DF9FF",
        secondaryColor: "#A78BFA",
        accentColor: "#F0ABFC",
        bloomIntensity: 0.75,
        glitchIntensity: 0.12,
        scanlineIntensity: 0.15,
        starDensity: 0.65,
        motionIntensity: 0.75,
        glassBlur: 14,
      },
      voiceSettings: {
        voiceEnabled: true,
        voiceProvider: "browser",
        zoroVoiceVolume: 0.85,
        zoroVoicePitch: 1.25,
        zoroVoiceRate: 0.95,
        zoroVocalizationsEnabled: true,
        voiceInputEnabled: false,
      },
      personalitySettings: {
        contextualRemarksEnabled: true,
        humorLevel: 5,
        insightLevel: 7,
        sassLevel: 3,
        currentMood: "calm",
      },
      zoroMascotState: "idle",
      zoroLastRemark: null,
      zoroRecentActions: [],
      currentRouteLabel: "",
      currentToolLabel: "",
      currentToolCategory: "",

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

      setThemePalette: (paletteId, colors) => set((state) => ({
        themeSettings: { ...state.themeSettings, paletteId, ...colors }
      })),
      setCustomThemeColor: (key, color) => set((state) => ({
        themeSettings: { ...state.themeSettings, paletteId: "custom", [key]: color }
      })),
      setEffectIntensity: (key, value) => set((state) => ({
        themeSettings: { ...state.themeSettings, [key]: value }
      })),
      resetThemeSettings: () => set({
        themeSettings: {
          paletteId: "zoro-classic",
          primaryColor: "#7DF9FF",
          secondaryColor: "#A78BFA",
          accentColor: "#F0ABFC",
          bloomIntensity: 0.75,
          glitchIntensity: 0.12,
          scanlineIntensity: 0.15,
          starDensity: 0.65,
          motionIntensity: 0.75,
          glassBlur: 14,
        }
      }),
      applyMobileFriendlyEffects: () => set((state) => ({
        themeSettings: {
          ...state.themeSettings,
          bloomIntensity: Math.min(state.themeSettings.bloomIntensity, 0.4),
          glitchIntensity: 0,
          motionIntensity: Math.min(state.themeSettings.motionIntensity, 0.3),
          starDensity: Math.min(state.themeSettings.starDensity, 0.5),
        }
      })),
      setVoiceSettings: (settings) => set((state) => ({
        voiceSettings: { ...state.voiceSettings, ...settings }
      })),
      setPersonalitySettings: (settings) => set((state) => ({
        personalitySettings: { ...state.personalitySettings, ...settings }
      })),
      setZoroMascotState: (state) => set({ zoroMascotState: state }),
      setZoroLastRemark: (remark) => set({ zoroLastRemark: remark }),
      addZoroAction: (action) => set((state) => ({
        zoroRecentActions: [action, ...state.zoroRecentActions].slice(0, 30)
      })),
      setCurrentRouteLabel: (label) => set({ currentRouteLabel: label }),
      setCurrentToolContext: (label, category) => set({ currentToolLabel: label, currentToolCategory: category }),
    }),
    {
      name: 'zoro-os-settings',
      version: 2,
      migrate: (persistedState: any, version: number) => {
        if (version === 0 || version === 1 || !persistedState.themeSettings) {
          return {
            ...persistedState,
            themeSettings: {
              paletteId: "zoro-classic",
              primaryColor: "#7DF9FF",
              secondaryColor: "#A78BFA",
              accentColor: "#F0ABFC",
              bloomIntensity: 0.75,
              glitchIntensity: 0.12,
              scanlineIntensity: 0.15,
              starDensity: 0.65,
              motionIntensity: 0.75,
              glassBlur: 14,
            },
            voiceSettings: {
              voiceEnabled: true,
              voiceProvider: "browser",
              zoroVoiceVolume: 0.85,
              zoroVoicePitch: 1.25,
              zoroVoiceRate: 0.95,
              zoroVocalizationsEnabled: true,
              voiceInputEnabled: false,
            },
            personalitySettings: {
              contextualRemarksEnabled: true,
              humorLevel: 5,
              insightLevel: 7,
              sassLevel: 3,
              currentMood: "calm",
            },
            zoroMascotState: "idle",
            zoroLastRemark: null,
            zoroRecentActions: [],
            currentRouteLabel: "",
            currentToolLabel: "",
            currentToolCategory: "",
          } as SettingsState;
        }
        return persistedState;
      },
      partialize: (state) => Object.fromEntries(
        Object.entries(state).filter(([key]) => !['vynaaApiStatus', 'endpointHistory'].includes(key))
      ),
    }
  )
);

