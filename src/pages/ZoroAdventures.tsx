import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Send, ChevronRight, Activity, Cpu } from 'lucide-react';
import { useSettingsStore } from '@/store/useStore';
import { chatSumoPod } from '@/api/sumopod';
import Markdown from 'react-markdown';
import { PageTransition } from '@/components/ui/PageTransition';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowButton } from '@/components/ui/GlowButton';

interface GameState {
  id: string;
  scenario: string;
  choices: string[];
  health: number;
}

const SYSTEM_PROMPT = `You are a Sci-Fi Game Master. The protagonist is Zoro, a brilliant space-cat engineer on the starship Aegis.
Maintain a futuristic, suspenseful, yet humorous space-opera tone.
You must ALWAYS respond with ONLY valid JSON containing the following fields:
{
  "scenario": "string (The current situation, max 3 sentences)",
  "choices": ["string (Choice 1)", "string (Choice 2)", "string (Choice 3)"],
  "health": number (0-100, update based on the previous choice consequence)
}
CRITICAL: Do not wrap the response in markdown blocks (like \`\`\`json). Return purely the JSON object.
Ensure there are exactly 3 choices unless the game is over.`;

const INITIAL_PROMPT = "Initialize game. Describe Zoro waking up in the engineering deck with red alarms flashing. Health starts at 100.";

export function ZoroAdventures() {
  const { sumoPodApiKey, selectedModel } = useSettingsStore();
  const [history, setHistory] = useState<GameState[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [retryPrompt, setRetryPrompt] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isLoading]);

  const parseAIResponse = (text: string): GameState | null => {
    try {
      const start = text.indexOf('{');
      const end = text.lastIndexOf('}') + 1;
      if (start !== -1 && end !== -1) {
        const jsonStr = text.slice(start, end);
        const parsed = JSON.parse(jsonStr);
        return {
          id: Date.now().toString() + Math.random().toString(),
          scenario: parsed.scenario || "An error occurred in the simulation.",
          choices: Array.isArray(parsed.choices) && parsed.choices.length > 0 ? parsed.choices : ["Continue"],
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
    setRetryPrompt(null);

    try {
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

      const responseText = await chatSumoPod(messages, selectedModel);
      const newState = parseAIResponse(responseText);

      if (newState) {
        setHistory(prev => [...prev, newState]);
        if (newState.health <= 0) {
          setGameEnded(true);
        }
      } else {
        setHistory(prev => [...prev, {
          id: Date.now().toString() + Math.random().toString(),
          scenario: "Glitch in the matrix. The neural simulation failed to sequence properly.\n\nRaw Output:\n" + responseText,
          choices: ["Retry Previous Action"],
          health: prev.length > 0 ? prev[prev.length - 1].health : 100
        }]);
        setRetryPrompt(actionPrompt);
      }
    } catch (err: any) {
      setHistory(prev => [...prev, {
        id: Date.now().toString() + Math.random().toString(),
        scenario: `[SYSTEM ERROR]: ${err.message}`,
        choices: ["Retry Neural Link"],
        health: prev.length > 0 ? prev[prev.length - 1].health : 100
      }]);
      setRetryPrompt(actionPrompt);
    } finally {
      setIsLoading(false);
    }
  };

  const startGame = () => {
    setHistory([]);
    setGameEnded(false);
    setGameStarted(true);
    handleAction(INITIAL_PROMPT, true);
  };

  if (!sumoPodApiKey) {
    return (
      <PageTransition className="flex-1 flex items-center justify-center p-4 sm:p-8 z-10 relative">
        <GlassCard className="p-8 sm:p-12 text-center max-w-md border-red-500/30">
          <Terminal className="w-16 h-16 mx-auto text-red-500 mb-4" />
          <h2 className="text-xl font-bold text-red-400 font-mono mb-2">SYSTEM LOCKED</h2>
          <p className="text-gray-400 font-mono text-sm mb-6">
            Requires SumoPod API Key for advanced Neural Game Generation. Configure this in Settings.
          </p>
        </GlassCard>
      </PageTransition>
    );
  }

  const currentHealth = history.length > 0 ? history[history.length - 1].health : 100;

  return (
    <PageTransition className="flex flex-col h-full relative z-10 p-2 sm:p-6 pb-0">
      {/* Header */}
      <div className="glass-panel-cyan p-4 border-b border-space-cyan/30 flex justify-between items-center rounded-t-2xl z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-space-dark border border-space-cyan shadow-[0_0_10px_rgba(56,189,248,0.5)] flex items-center justify-center">
            <Terminal className="w-5 h-5 text-space-cyan" />
          </div>
          <div>
            <h2 className="font-bold text-glow-cyan font-mono text-sm sm:text-base">ZORO'S ADVENTURES</h2>
            <p className="text-xs text-space-cyan font-mono flex items-center gap-1">
              <Cpu className="w-3 h-3" /> Neural Simulation
            </p>
          </div>
        </div>
        
        {gameStarted && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-space-dark/80 border border-space-pink/30 rounded-lg shadow-inner">
            <Activity className={currentHealth > 20 ? 'text-green-400' : 'text-red-500'} size={16} />
            <div className="relative w-20 sm:w-32 h-2 bg-black/60 rounded-full overflow-hidden border border-white/5 mx-2 hidden sm:block">
               <motion.div 
                 className={`absolute top-0 left-0 h-full ${currentHealth > 20 ? 'bg-green-400' : 'bg-red-500'}`}
                 initial={{ width: 0 }}
                 animate={{ width: `${currentHealth}%` }}
               />
            </div>
            <span className={currentHealth > 20 ? 'text-green-400 font-mono font-bold text-sm' : 'text-red-500 font-mono font-bold text-sm animate-pulse'}>
              {currentHealth}%
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
            <div className="text-6xl mb-6 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">🐱🚀</div>
            <h1 className="text-2xl sm:text-3xl font-black font-mono text-white mb-4 tracking-widest text-glow-purple uppercase">Aegis Protocol</h1>
            <p className="text-gray-400 font-mono max-w-md mx-auto mb-8 text-sm">
              An infinite, AI-generated space opera text adventure. Your choices dynamically alter the narrative and fate of the starship.
            </p>
            <GlowButton 
              onClick={startGame}
              className="font-bold font-mono tracking-widest px-8 py-4"
            >
              INITIALIZE LINK
            </GlowButton>
          </motion.div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col overflow-hidden glass-panel rounded-b-2xl border-t-0 p-3 sm:p-4 gap-4">
          {/* Output Window */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto cyber-scrollbar bg-space-dark/80 border border-white/10 rounded-xl p-4 font-mono text-sm leading-relaxed scroll-smooth shadow-inner"
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
                    <ChevronRight className="w-5 h-5 text-space-violet shrink-0 mt-0.5" />
                    <div className="text-gray-300">
                      <Markdown>{step.scenario}</Markdown>
                    </div>
                  </div>
                  {idx < history.length - 1 && (
                    <div className="ml-8 mt-2 text-space-cyan/50 italic">
                      &gt; Command executed.
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                   <ChevronRight className="w-5 h-5 text-space-violet shrink-0 animate-pulse" />
                   <span className="text-space-cyan animate-pulse">Calculating starlight trajectories...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Panel */}
          <div className="shrink-0 space-y-2">
            {!gameEnded && !isLoading && history.length > 0 && (history[history.length - 1].choices || []).map((choice, i) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i}
              >
                <GlowButton
                  variant="secondary"
                  onClick={() => handleAction(retryPrompt && choice.includes('Retry') ? retryPrompt : choice)}
                  className="w-full justify-start text-left p-3 sm:p-4 text-xs sm:text-sm group !font-normal"
                >
                  <span className="opacity-50 group-hover:opacity-100 text-space-violet font-bold">[{i + 1}]</span>
                  {choice}
                </GlowButton>
              </motion.div>
            ))}

            {gameEnded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <GlowButton
                  variant="danger"
                  onClick={startGame}
                  className="w-full p-4 text-sm tracking-widest uppercase !font-bold"
                >
                  System Failure. Reboot Sequence?
                </GlowButton>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </PageTransition>
  );
}
