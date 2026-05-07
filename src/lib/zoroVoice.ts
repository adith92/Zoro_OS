import { useSettingsStore } from "@/store/useStore";
import { callVynaaEndpoint } from "@/api/universalVynaa";

function cleanTextForSpeech(text: string): string {
  // Remove markdown, links, emojis, etc.
  let cleaned = text.replace(/\\*\\*/g, '');
  cleaned = cleaned.replace(/\\[(.*?)\\]\\(.*?\\)/g, '$1');
  cleaned = cleaned.replace(/<[^>]*>/g, '');
  cleaned = cleaned.replace(/http\\S+/g, 'tautan');
  
  if (cleaned.length > 400) {
    cleaned = cleaned.substring(0, 400) + '... (selengkapnya di layar)';
  }
  
  return cleaned;
}

export async function speakAsZoro(text: string, options?: { reaction?: boolean }) {
  const settings = useSettingsStore.getState();
  const voiceState = settings.voiceSettings;

  if (!voiceState.voiceEnabled) return;

  const setMascot = settings.setZoroMascotState;
  
  const cleaned = cleanTextForSpeech(text);
  if (!cleaned.trim()) return;

  setMascot("speaking");

  if (voiceState.voiceProvider === "vynaa") {
      // Find pollinations endpoint or use fallback for speaking
      // For now fallback to browser to ensure it works smoothly since some APIs might be slow.
      // Or actually do as requested:
      const vyRes = await fetch(`https://vynaa.web.id/pollinations/pollinations/audio?text=${encodeURIComponent(cleaned)}`, {
          method: "GET"
      }).catch(() => null);
      
      if (vyRes && vyRes.ok) {
          const blob = await vyRes.blob();
          const url = URL.createObjectURL(blob);
          const audio = new Audio(url);
          audio.volume = voiceState.zoroVoiceVolume;
          
          audio.onended = () => {
             setMascot("idle");
          };
          audio.onerror = () => {
             setMascot("idle");
             speakBrowserTTS(cleaned, voiceState, setMascot); // fallback
          };
          audio.play().catch(e => {
             console.warn("Autoplay prevented:", e);
             setMascot("idle");
          });
          return;
      }
      // If fails fallback
  }

  // Browser TTS
  speakBrowserTTS(cleaned, voiceState, setMascot);
}

function speakBrowserTTS(text: string, voiceState: any, setMascot: any) {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
     setMascot("idle");
     return;
  }

  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "id-ID";
  utterance.pitch = voiceState.zoroVoicePitch;
  utterance.rate = voiceState.zoroVoiceRate;
  utterance.volume = voiceState.zoroVoiceVolume;

  const voices = window.speechSynthesis.getVoices();
  const idVoice = voices.find(v => v.lang.includes("id") || v.lang.includes("ID"));
  if (idVoice) utterance.voice = idVoice;

  utterance.onend = () => {
     setMascot("idle");
  };
  utterance.onerror = () => {
     setMascot("idle");
  };

  window.speechSynthesis.speak(utterance);
}
