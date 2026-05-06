import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Send, ChevronRight, Activity, Cpu } from 'lucide-react';
import { useSettingsStore } from '@/store/useStore';
import { chatSumoPod } from '@/api/sumopod';
import Markdown from 'react-markdown';

interface GameState {
  id: string;
  scenario: string;
  choices: string[];
  health: number;
}

const SYSTEM_PROMPT = `You are a Cyberpunk Game Master. The protagonist is Zoro, a high-tech hacker cat.
Maintain a dark, neon-lit, gritty yet humorous tone.
You must ALWAYS respond with ONLY valid JSON containing the following fields:
{
  "scenario": "string (The current situation, max 3 sentences)",
  "choices": ["string (Choice 1)", "string (Choice 2)", "string (Choice 3)"],
  "health": number (0-100, update based on the previous choice consequence)
}
CRITICAL: Do not wrap the response in markdown blocks (like \`\`\`json). Return purely the JSON object.
`;

const INITIAL_PROMPT = "Initialize game. Describe Zoro arriving at Neo-Alley. Health starts at 100.";

export function ZoroAdventures() {
  const { sumoPodApiKey, selectedProvider } = useSettingsStore();
  const [history, setHistory] = useState<GameState[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isLoading]);

  const parseAIResponse = (text: string): GameState | null => {
    try {
      // Find JSON bounds in case the AI wraps it anyway
      const start = text.indexOf('{');
      const end = text.lastIndexOf('}') + 1;
      if (start !== -1 && end !== -1) {
        const jsonStr = text.slice(start, end);
        const parsed = JSON.parse(jsonStr);
        return {
          id: Date.now().toString(),
          scenario: parsed.scenario || "An error occurred in the simulation.",
          choices: parsed.choices || ["Continue"],
          health: typeof parsed.health === 'number' ? parsed.health : 100
        };
      }
      return null;
    } catch {
      return null;
    }
  };

  const handleAction = async (actionPrompt: string, isInit = false) => {
    if (!sumoPodApiKey) return;
    setIsLoading(true);

    try {
      // Build conversation history
      const prevContext = isInit ? [] : history.map(h => ({
        role: "assistant",
        content: JSON.stringify({ scenario: h.scenario, choices: h.choices, health: h.health })
      }));

      if (!isInit) {
        prevContext.push({ role: "user", content: `Zoro chose: ${actionPrompt}` });
      }

      const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...prevContext,
        { role: 'user', content: isInit ? INITIAL_PROMPT : `Next step. Zoro chose: ${actionPrompt}` }
      ];

      // Assuming sumoPod supports standard chat completion
      const responseText = await chatSumoPod(messages, 'gpt-3.5-turbo');
      const newState = parseAIResponse(responseText);

      if (newState) {
        setHistory(prev => [...prev, newState]);
        if (newState.health <= 0) {
          setGameEnded(true);
        }
      } else {
        // Fallback if parsing fails
        setHistory(prev => [...prev, {
          id: Date.now().toString(),
          scenario: "Glitch in the matrix. The simulation fails to load properly.\n\nAI Output:\n" + responseText,
          choices: ["Restart System Sequence"],
          health: prev.length > 0 ? prev[prev.length - 1].health : 100
        }]);
      }
    } catch (err: any) {
      setHistory(prev => [...prev, {
        id: Date.now().toString(),
        scenario: `[SYSTEM ERROR]: ${err.message}`,
        choices: ["Retry"],
        health: 0
      }]);
    }

    setIsLoading(false);
  };

  const startGame = () => {
    setHistory([]);
    setGameEnded(false);
    setGameStarted(true);
    handleAction(INITIAL_PROMPT, true);
  };

  if (!sumoPodApiKey) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 z-10 relative">
        <div className="glass-panel p-8 rounded-3xl text-center max-w-md border-red-500/30">
          <Terminal className="w-16 h-16 mx-auto text-red-500 mb-4" />
          <h2 className="text-xl font-bold text-red-400 font-mono mb-2">SYSTEM LOCKED</h2>
          <p className="text-gray-400 font-mono text-sm mb-6">
            Requires SumoPod API Key for advanced Neural Game Generation. Configure this in Settings.
          </p>
        </div>
      </div>
    );
  }

  const currentHealth = history.length > 0 ? history[history.length - 1].health : 100;

  return (
    <div className="flex flex-col h-full relative z-10 p-2 sm:p-6 pb-0">
      {/* Header */}
      <div className="glass-panel-cyan p-4 border-b border-cyber-cyan/30 flex justify-between items-center rounded-t-2xl z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyber-dark border border-cyber-cyan shadow-[0_0_10px_rgba(0,243,255,0.5)] flex items-center justify-center">
            <Terminal className="w-5 h-5 text-cyber-cyan" />
          </div>
          <div>
            <h2 className="font-bold text-glow-cyan font-mono text-sm sm:text-base">ZORO'S ADVENTURES</h2>
            <p className="text-xs text-cyber-cyan font-mono flex items-center gap-1">
              <Cpu className="w-3 h-3" /> Neural Simulation
            </p>
          </div>
        </div>
        
        {gameStarted && (
          <div className="flex items-center gap-2 px-3 py-1 bg-black/50 border border-cyber-pink/30 rounded-lg">
            <Activity className={currentHealth > 20 ? 'text-green-400' : 'text-red-500'} size={16} />
            <span className={currentHealth > 20 ? 'text-green-400 font-mono' : 'text-red-500 font-mono animate-pulse'}>
              HP: {currentHealth}%
            </span>
          </div>
        )}
      </div>

      {!gameStarted ? (
        <div className="flex-1 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">🐱💻</div>
            <h1 className="text-3xl font-black font-mono text-white mb-4 tracking-widest text-glow-purple">ENTER THE MATRIX</h1>
            <p className="text-gray-400 font-mono max-w-md mx-auto mb-8 text-sm">
              An infinite, AI-generated cyberpunk text adventure. Your choices dynamically alter the narrative.
            </p>
            <button 
              onClick={startGame}
              className="px-8 py-4 bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/40 hover:text-white hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all rounded-xl font-bold font-mono tracking-widest"
            >
              INITIALIZE LINK
            </button>
          </motion.div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col overflow-hidden glass-panel rounded-b-2xl border-t-0 p-2 sm:p-4 gap-4">
          {/* Output Window */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto cyber-scrollbar bg-black/80 border border-white/10 rounded-xl p-4 font-mono text-sm leading-relaxed scroll-smooth"
          >
            <AnimatePresence>
              {history.map((step, idx) => (
                <motion.div 
                  key={step.id} 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-6 last:mb-0"
                >
                  <div className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-cyber-purple shrink-0 mt-0.5" />
                    <div className="text-gray-300">
                      <Markdown>{step.scenario}</Markdown>
                    </div>
                  </div>
                  {idx < history.length - 1 && (
                    <div className="ml-8 mt-2 text-cyber-cyan/50 italic">
                      &gt; Option selected.
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                   <ChevronRight className="w-5 h-5 text-cyber-purple shrink-0 animate-pulse" />
                   <span className="text-cyber-cyan animate-pulse">Generating neural pathways...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Panel */}
          <div className="shrink-0 space-y-2">
            {!gameEnded && !isLoading && history.length > 0 && (history[history.length - 1].choices || []).map((choice, i) => (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i}
                onClick={() => handleAction(choice)}
                className="w-full text-left p-3 sm:p-4 bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple hover:bg-cyber-purple/30 hover:border-cyber-purple rounded-xl font-mono text-xs sm:text-sm transition-all hover:shadow-[0_0_15px_rgba(157,0,255,0.3)] flex items-center gap-2 group"
              >
                <span className="opacity-50 group-hover:opacity-100">[{i + 1}]</span>
                {choice}
              </motion.button>
            ))}

            {gameEnded && (
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={startGame}
                className="w-full p-4 bg-red-500/20 border border-red-500 text-red-500 hover:bg-red-500/40 hover:text-white rounded-xl font-mono text-sm tracking-widest transition-all uppercase"
              >
                System Failure. Retry?
              </motion.button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
