import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, Mic } from 'lucide-react';
import { useSettingsStore } from '@/store/useStore';
import { chatSumoPod } from '@/api/sumopod';
import { chatSimSimi } from '@/api/vynaa';
import { cn } from '@/lib/utils';
import Markdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  provider: 'vynaa' | 'sumopod' | 'dual';
}

export function Chat() {
  const { selectedProvider, voiceEnabled } = useSettingsStore();
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
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.pitch = 1.2; // Cat-like pitch tweak
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

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
        // Use SumoPod (OpenAI compatible)
        const history = messages.map(m => ({ role: m.role, content: m.content }));
        const response = await chatSumoPod([...history, { role: 'user', content: input }]);
        
        const assistMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response || 'No response',
          provider: 'sumopod'
        };
        setMessages(prev => [...prev, assistMsg]);
        speak(assistMsg.content);

      } else if (selectedProvider === 'vynaa') {
        // Use Vynaa SimSimi
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
        // Race them!
        const [sumoRes, vynaaRes] = await Promise.allSettled([
          chatSumoPod([{ role: 'user', content: input }]),
          chatSimSimi(input)
        ]);

        const sumoText = sumoRes.status === 'fulfilled' ? sumoRes.value : 'SumoPod Error';
        const vynaaText = vynaaRes.status === 'fulfilled' ? vynaaRes.value.result : 'Vynaa Error';

        const assistMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `**[🤖 SumoPod]**\n${sumoText}\n\n---\n\n**[🐱 Vynaa/SimSimi]**\n${vynaaText}`,
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
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Header */}
      <div className="glass-panel-cyan p-4 border-b border-cyber-cyan/30 flex justify-between items-center rounded-t-2xl z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyber-dark border border-cyber-cyan shadow-[0_0_10px_rgba(0,243,255,0.5)] flex items-center justify-center">
            🐱
          </div>
          <div>
            <h2 className="font-bold text-glow-cyan font-mono">ZORO AI CHAT</h2>
            <p className="text-xs text-cyber-cyan font-mono capitalize">Model: {selectedProvider}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto cyber-scrollbar p-6 space-y-6 z-10">
        <AnimatePresence>
          {messages.length === 0 && !isLoading && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="h-full flex items-center justify-center text-gray-500 font-mono text-center px-8"
            >
              System ready. Ask me anything, human. I am Zoro, the ultimate multiversal intelligence!
            </motion.div>
          )}

          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex max-w-[80%]",
                msg.role === 'user' ? "ml-auto" : "mr-auto"
              )}
            >
              <div className={cn(
                "p-4 rounded-2xl relative",
                msg.role === 'user' 
                  ? "bg-cyber-purple/20 border border-cyber-purple/40 text-white shadow-[0_0_15px_rgba(157,0,255,0.2)] rounded-tr-sm" 
                  : "bg-black/60 border border-cyber-cyan/30 text-gray-200 shadow-[0_0_15px_rgba(0,243,255,0.1)] rounded-tl-sm backdrop-blur-md"
              )}>
                <div className="absolute -top-3 flex items-center justify-center w-6 h-6 rounded-full bg-cyber-dark border shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                     style={{ 
                       [msg.role === 'user' ? 'right' : 'left']: '-10px',
                       borderColor: msg.role === 'user' ? '#9d00ff' : '#00f3ff'
                     }}>
                  {msg.role === 'user' ? <User size={12} className="text-cyber-purple" /> : <Bot size={12} className="text-cyber-cyan" />}
                </div>
                <div className="markdown-body font-mono text-sm leading-relaxed prose prose-invert">
                  <Markdown>{msg.content}</Markdown>
                </div>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex max-w-[80%] mr-auto">
              <div className="p-4 rounded-2xl bg-black/60 border border-cyber-pink/30 text-cyber-pink backdrop-blur-md flex items-center gap-2">
                <Loader2 className="animate-spin" size={16} /> Zoro is processing...
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-4 bg-black/40 backdrop-blur-lg border-t border-white/10 z-10 rounded-b-2xl">
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
            placeholder="Initialize command sequence..."
            className="w-full bg-black/50 border border-cyber-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all font-mono min-h-[50px] max-h-[150px] cyber-scrollbar resize-none"
            rows={1}
          />
          <button 
            className="p-3 bg-cyber-dark border border-gray-600 rounded-xl hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
            title="Voice Input (Coming soon to this demo)"
          >
            <Mic size={20} />
          </button>
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-3 bg-cyber-cyan/20 border border-cyber-cyan rounded-xl text-cyber-cyan hover:bg-cyber-cyan/40 hover:text-white hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all disabled:opacity-50 disabled:pointer-events-none"
          >
           <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
