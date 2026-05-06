import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, Mic } from 'lucide-react';
import { useSettingsStore } from '@/store/useStore';
import { chatSumoPod } from '@/api/sumopod';
import { chatSimSimi } from '@/api/vynaa';
import { cn } from '@/lib/utils';
import Markdown from 'react-markdown';
import { PageTransition } from '@/components/ui/PageTransition';
import { GlowButton } from '@/components/ui/GlowButton';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  provider: 'vynaa' | 'sumopod' | 'dual';
}

export function Chat() {
  const { selectedProvider, voiceEnabled, selectedModel } = useSettingsStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const speak = (text: string) => {
    if (!voiceEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    
    // Clean up basic markdown and weird characters before speaking
    const cleanText = text.replace(/[*_#~]/g, '').replace(/```[\s\S]*?```/g, 'Code block omitted.');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'id-ID';
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      provider: selectedProvider
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      if (selectedProvider === 'sumopod') {
        const history = messages.map(m => ({ role: m.role, content: m.content }));
        const response = await chatSumoPod([...history, { role: 'user', content: input }], selectedModel);
        
        const assistMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response || 'No response',
          provider: 'sumopod'
        };
        setMessages(prev => [...prev, assistMsg]);
        speak(assistMsg.content);

      } else if (selectedProvider === 'vynaa') {
        const response = await chatSimSimi(input);
        const assistMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response.result || 'Miau! Vynaa error.',
          provider: 'vynaa'
        };
        setMessages(prev => [...prev, assistMsg]);
        speak(assistMsg.content);

      } else if (selectedProvider === 'dual') {
        const [sumoRes, vynaaRes] = await Promise.allSettled([
          chatSumoPod([{ role: 'user', content: input }], selectedModel),
          chatSimSimi(input)
        ]);

        const sumoText = sumoRes.status === 'fulfilled' ? sumoRes.value : 'SumoPod Error';
        const vynaaText = vynaaRes.status === 'fulfilled' ? vynaaRes.value.result : 'Vynaa Error';

        const assistMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `**[🤖 SumoPod (${selectedModel})]**\n${sumoText}\n\n---\n\n**[🐱 Vynaa/SimSimi]**\n${vynaaText}`,
          provider: 'dual'
        };
        setMessages(prev => [...prev, assistMsg]);
        speak("Ini dua jawaban dari multiversorku!");
      }

    } catch (error: any) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Error: ${error.message}. Please check API configurations in Settings.`,
        provider: selectedProvider
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition className="flex flex-col h-full relative">
      {/* Header */}
      <div className="glass-panel-cyan p-4 border-b border-space-cyan/30 flex justify-between items-center rounded-t-2xl z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-space-dark border border-space-cyan shadow-[0_0_10px_rgba(56,189,248,0.5)] flex items-center justify-center">
            🐱
          </div>
          <div>
            <h2 className="font-bold text-glow-cyan font-mono text-sm sm:text-base">ZORO AI CHAT</h2>
            <p className="text-xs text-space-cyan font-mono capitalize">
              {selectedProvider} {selectedProvider === 'sumopod' && `[${selectedModel}]`}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto cyber-scrollbar p-3 sm:p-6 space-y-6 z-10 scroll-smooth">
        <AnimatePresence>
          {messages.length === 0 && !isLoading && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="h-full flex items-center justify-center text-gray-400 font-mono text-center px-4 sm:px-8 text-sm"
            >
              System ready. Ask me anything, human. I am Zoro, the ultimate multiversal intelligence!
            </motion.div>
          )}

          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={cn(
                "flex max-w-[90%] sm:max-w-[80%]",
                msg.role === 'user' ? "ml-auto" : "mr-auto"
              )}
            >
              <div className={cn(
                "p-3 sm:p-4 rounded-2xl relative shadow-lg",
                msg.role === 'user' 
                  ? "bg-space-violet/20 border border-space-violet/40 text-space-starlight rounded-tr-sm" 
                  : "bg-space-dark/80 border border-space-cyan/30 text-gray-200 rounded-tl-sm backdrop-blur-xl"
              )}>
                <div className="absolute -top-3 flex items-center justify-center w-6 h-6 rounded-full bg-space-dark border shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                     style={{ 
                       [msg.role === 'user' ? 'right' : 'left']: '-10px',
                       borderColor: msg.role === 'user' ? '#818cf8' : '#38bdf8'
                     }}>
                  {msg.role === 'user' ? <User size={12} className="text-space-violet" /> : <Bot size={12} className="text-space-cyan" />}
                </div>
                <div className="markdown-body font-sans text-sm leading-relaxed prose prose-invert overflow-hidden break-words">
                  <Markdown>{msg.content}</Markdown>
                </div>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex max-w-[80%] mr-auto">
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
            placeholder="Initialize sequence..."
            className="w-full bg-black/40 border border-space-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-space-cyan focus:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all font-mono min-h-[44px] sm:min-h-[50px] max-h-[150px] cyber-scrollbar resize-none text-sm sm:text-base m-0"
            rows={1}
            disabled={isLoading}
          />
          <GlowButton 
            variant="ghost"
            size="icon"
            className="shrink-0"
            title="Voice Input (Coming soon to this demo)"
          >
            <Mic size={18} className="sm:w-5 sm:h-5" />
          </GlowButton>
          <GlowButton 
            variant="cyan"
            size="icon"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="shrink-0"
          >
           {isLoading ? <Loader2 className="animate-spin w-4 h-4 sm:w-5 sm:h-5" /> : <Send className="w-4 h-4 sm:w-5 sm:h-5" />}
          </GlowButton>
        </div>
      </div>
    </PageTransition>
  );
}
