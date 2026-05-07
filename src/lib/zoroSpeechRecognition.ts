import { toast } from "sonner";

export interface ZoroSpeechRecognitionOptions {
  onResult: (text: string) => void;
  onError: (error: string) => void;
  onStart: () => void;
  onEnd: () => void;
}

export function startZoroSpeechRecognition(options: ZoroSpeechRecognitionOptions) {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
      toast.error("Voice input belum support di browser ini. Pakai ketik manual dulu ya.");
      options.onError("not_supported");
      return null;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "id-ID";
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onstart = () => {
      options.onStart();
  };

  recognition.onresult = (event: any) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
          }
      }
      if (finalTranscript) {
          options.onResult(finalTranscript);
      }
  };

  recognition.onerror = (event: any) => {
      options.onError(event.error);
  };

  recognition.onend = () => {
      options.onEnd();
  };

  try {
      recognition.start();
      return recognition;
  } catch (e: any) {
      options.onError(e.message);
      return null;
  }
}
