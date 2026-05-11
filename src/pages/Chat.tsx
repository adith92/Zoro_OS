import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, Mic, MicOff, Copy, FileDown } from 'lucide-react';
import { useSettingsStore } from '@/store/useStore';
import { callVtechEndpoint } from '@/api/universalVtech';
import { VTECH_ENDPOINTS, getDefaultVtechChatEndpoint } from '@/data/vtechRegistry';
import { cn } from '@/lib/utils';
import Markdown from 'react-markdown';
import { PageTransition } from '@/components/ui/PageTransition';
import { GlowButton } from '@/components/ui/GlowButton';
import { ZoroMascot } from '@/components/mascot/ZoroMascot';
import { startZoroSpeechRecognition } from '@/lib/zoroSpeechRecognition';
import { speakAsZoro } from '@/lib/zoroVoice';
import { buildZoroSystemPrompt } from '@/lib/zoroPersonality';
import { toast } from 'sonner';
import { runLlmRouter } from '@/api/llmRouter';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  provider: 'vtech';
}

export function Chat() {
  const { 
    voiceSettings, selectedVtechAiEndpointId,
    zoroMascotState, setZoroMascotState, addZoroAction,
    personalitySettings, zoroRecentActions, currentRouteLabel,
    themeSettings, setSelectedVtechAiEndpointId
  } = useSettingsStore();
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleVoiceInput = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setZoroMascotState("idle");
    } else {
      const rec = startZoroSpeechRecognition({
        onStart: () => {
          setIsListening(true);
          setZoroMascotState("listening");
        },
        onResult: (text) => setInput((p) => p + ' ' + text),
        onError: (err) => {
          setIsListening(false);
          setZoroMascotState("error");
          toast.error(`Voice input error: ${err}`);
        },
        onEnd: () => {
          setIsListening(false);
          setZoroMascotState(isLoading ? "thinking" : "idle");
        }
      });
      recognitionRef.current = rec;
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }

    const currentInput = input.trim();
    setInput('');
    setIsLoading(true);
    setZoroMascotState("thinking");

    const userMessage: Message = {
      id: Date.now().toString() + Math.random().toString(),
      role: 'user',
      content: currentInput,
      provider: 'vtech'
    };

    setMessages(prev => [...prev, userMessage]);
    addZoroAction({ type: "chat_send", query: currentInput, timestamp: new Date().toISOString() });

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }));
      
      const sysPrompt = buildZoroSystemPrompt({
        basePrompt: "Kamu adalah asisten pintar bernama Zoro.",
        currentRoute: currentRouteLabel,
        currentTool: "",
        recentActions: zoroRecentActions,
        personalitySettings,
        themeMood: themeSettings.paletteId
      });

      const fullHistory = [{ role: 'system' as const, content: sysPrompt }, ...history, { role: 'user' as const, content: currentInput }];
      
      const response = await runLlmRouter({
        messages: fullHistory,
        endpointId: selectedVtechAiEndpointId,
      });

      const assistMsg: Message = {
        id: (Date.now() + 1).toString() + Math.random().toString(),
        role: 'assistant',
        content: response || 'No response',
        provider: 'vtech'
      };
      setMessages(prev => [...prev, assistMsg]);
      addZoroAction({ type: "chat_receive", timestamp: new Date().toISOString() });
      speakAsZoro(assistMsg.content);

    } catch (error: any) {
      setZoroMascotState("error");
      const errorMsg: Message = {
        id: (Date.now() + 1).toString() + Math.random().toString(),
        role: 'assistant',
        content: `Error: ${error.message || error}.`,
        provider: 'vtech'
      };
      setMessages(prev => [...prev, errorMsg]);
      speakAsZoro("Maaf Kapten, ada sedikit gangguan komunikasi antar galaksi.");
    } finally {
      setIsLoading(false);
      // zoro mascot state will be handled by speech synth onend
    }
  };

  let activeEp = VTECH_ENDPOINTS.find(e => e.id === selectedVtechAiEndpointId);
  if (!activeEp || !activeEp.safe || activeEp.id.includes('claude')) {
      activeEp = VTECH_ENDPOINTS.find(e => e.id === getDefaultVtechChatEndpoint());
  }
  const availableAiModels = VTECH_ENDPOINTS.filter(e => e.category === 'ai' && e.safe && e.enabledByDefault && !e.id.includes('simsimi') && e.id !== 'ai_claude');

  return (
    <PageTransition className="flex flex-col h-full relative">
      {/* Header */}
      <div className="glass-panel-cyan p-4 border-b border-space-cyan/30 flex justify-between items-center rounded-t-2xl z-10 shrink-0">
        <div className="flex items-center gap-4">
          <ZoroMascot size="sm" state={zoroMascotState} onClick={() => speakAsZoro("Zoro siap! Nya~")} className="cursor-pointer hover:scale-105 transition-transform" />
          <div>
            <h2 className="font-bold text-glow-cyan font-mono text-sm sm:text-base">Zoro Universe Chat</h2>
            <p className="text-xs text-space-cyan font-mono capitalize">
              VTECH AI [{activeEp?.label || selectedVtechAiEndpointId || "Claude"}]
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
            <select 
               value={activeEp?.id || getDefaultVtechChatEndpoint()}
               onChange={(e) => {
                  setSelectedVtechAiEndpointId(e.target.value);
                  const ep = VTECH_ENDPOINTS.find(ep => ep.id === e.target.value);
                  toast.success(`${ep?.label || e.target.value} dipakai sebagai model Chat`);
               }}
               className="bg-space-dark/80 border border-space-cyan/30 text-space-cyan text-xs font-mono rounded px-2 py-1 max-w-[120px] sm:max-w-[150px] truncate focus:outline-none"
            >
               {availableAiModels.map((model, idx) => (
                  <option key={`model_${model.id}_${idx}`} value={model.id}>
                     {model.label} {model.id.toLowerCase().includes('simsimi') ? '(Fun)' : ''}
                  </option>
               ))}
            </select>
            <button 
               onClick={() => {
                  const chatText = messages.map(m => `**${m.role === 'user' ? 'Kapten' : 'Zoro'}**:\n${m.content}`).join('\n\n');
                  navigator.clipboard.writeText(chatText);
                  toast.success("Misi percakapan disalin");
               }}
               className="p-1 px-2 text-space-cyan hover:bg-space-cyan/20 rounded font-mono text-xs border border-space-cyan/30 transition-colors hidden sm:block"
               title="Copy Chat"
            >
               COPY
            </button>
            <button 
               onClick={() => {
                  if (confirm("Hapus semua pesan?")) {
                     setMessages([]);
                  }
               }}
               className="p-1 px-2 text-red-400 hover:bg-red-400/20 rounded font-mono text-xs border border-red-400/30 transition-colors"
               title="Clear Chat"
            >
               CLEAR
            </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto cyber-scrollbar p-3 sm:p-6 space-y-6 z-10 scroll-smooth">
        <AnimatePresence>
          {messages.length === 0 && !isLoading && (
            <motion.div 
              key="chat-empty-state"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="h-full flex items-center justify-center text-gray-400 font-mono text-center px-4 sm:px-8 text-sm"
            >
              System ready. VTECH AI online. Pilih model dan mulai misi percakapan.
            </motion.div>
          )}

          {messages.map((msg, idx) => (
            <motion.div
              key={`msg_${msg.id}_${idx}`}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={cn(
                "flex max-w-[90%] sm:max-w-[80%] group",
                msg.role === 'user' ? "ml-auto" : "mr-auto"
              )}
            >
              {msg.role === 'assistant' && (
                  <div className="flex flex-col gap-1 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button 
                        onClick={() => {
                           navigator.clipboard.writeText(msg.content);
                           toast.success('Jawaban disalin');
                        }}
                        className="p-1 hover:bg-space-cyan/20 text-space-cyan rounded"
                        title="Copy text"
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                     </button>
                  </div>
              )}
              <div className={cn(
                "p-3 sm:p-4 rounded-2xl relative shadow-lg overflow-hidden",
                msg.role === 'user' 
                  ? "bg-space-violet/20 border border-space-violet/40 text-space-starlight rounded-tr-sm" 
                  : "bg-space-dark/80 border border-space-cyan/30 text-gray-200 rounded-tl-sm backdrop-blur-xl"
              )}>
                <div className="absolute -top-3 flex items-center justify-center w-6 h-6 rounded-full bg-space-dark border shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                     style={{ 
                       [msg.role === 'user' ? 'right' : 'left']: '-10px',
                       borderColor: msg.role === 'user' ? 'var(--zoro-secondary)' : 'var(--zoro-primary)'
                     }}>
                  {msg.role === 'user' ? <User size={12} className="text-space-violet" /> : <img src="/assets/zoro-logo.png" className="w-[80%] h-[80%] rounded-full object-cover"/>}
                </div>
                <div className="markdown-body font-sans text-sm leading-relaxed prose prose-invert overflow-hidden break-words">
                  <Markdown>{msg.content}</Markdown>
                </div>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div key="chat-loading-state" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex max-w-[80%] mr-auto">
              <div className="p-3 sm:p-4 rounded-2xl bg-space-dark/80 border border-space-violet/30 text-space-violet backdrop-blur-xl flex items-center gap-2 text-sm shadow-lg">
                <Loader2 className="animate-spin" size={16} /> <span className="animate-pulse">Zoro is thinking...</span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-2 sm:p-4 bg-space-dark/60 backdrop-blur-xl border-t border-white/10 z-10 shrink-0 rounded-b-2xl">
        <div className="flex gap-2 overflow-x-auto cyber-scrollbar pb-2 mb-2 items-center">
           {[
              { label: 'Explain', prompt: 'Jelaskan dengan bahasa sederhana: ' },
              { label: 'Summarize', prompt: 'Ringkas poin penting dari teks ini: ' },
              { label: 'Translate', prompt: 'Terjemahkan ke Bahasa Indonesia: ' },
              { label: 'Debug', prompt: 'Bantu debug masalah ini langkah demi langkah: ' },
              { label: 'Brainstorm', prompt: 'Brainstorm ide terbaik untuk: ' },
              { label: 'Generate Ideas', prompt: 'Berikan beberapa ide kreatif untuk: ' }
           ].map((preset, idx) => (
              <button
                 key={`preset_${preset.label}_${idx}`}
                 onClick={() => {
                    setInput(input ? input + '\n' + preset.prompt : preset.prompt);
                 }}
                 className="px-2 py-1 text-xs font-mono bg-space-cyan/10 hover:bg-space-cyan/20 border border-space-cyan/30 text-space-cyan rounded-full shrink-0 transition-colors"
              >
                 {preset.label}
              </button>
           ))}
        </div>
        <div className="flex items-end gap-2 relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={isListening ? "Listening..." : "Initialize sequence..."}
            className="w-full bg-black/40 border border-space-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-space-cyan focus:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all font-mono min-h-[44px] sm:min-h-[50px] max-h-[150px] cyber-scrollbar resize-none text-sm sm:text-base m-0"
            rows={1}
            disabled={isLoading}
          />
          <GlowButton 
            variant={isListening ? "purple" : "ghost"}
            size="icon"
            onClick={toggleVoiceInput}
            className={`shrink-0 ${isListening ? 'animate-pulse' : ''}`}
            title="Voice Input"
          >
            {isListening ? <MicOff size={18} className="sm:w-5 sm:h-5 text-red-400" /> : <Mic size={18} className="sm:w-5 sm:h-5" />}
          </GlowButton>
          <GlowButton 
            variant="cyan"
            size="icon"
            onClick={handleSend}
            disabled={isLoading || (!input.trim() && !isListening)}
            className="shrink-0"
          >
           {isLoading ? <Loader2 className="animate-spin w-4 h-4 sm:w-5 sm:h-5" /> : <Send className="w-4 h-4 sm:w-5 sm:h-5" />}
          </GlowButton>
        </div>
      </div>
    </PageTransition>
  );
}
