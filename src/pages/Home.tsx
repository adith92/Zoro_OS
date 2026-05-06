import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, Cpu, Box } from 'lucide-react';
import { useSettingsStore } from '@/store/useStore';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Multiverse Tools', value: '150+', icon: Box, color: 'text-cyber-cyan' },
  { label: 'AI Models', value: '50+', icon: Cpu, color: 'text-cyber-purple' },
  { label: 'Response Speed', value: '< 200ms', icon: Zap, color: 'text-cyber-pink' },
];

export function Home() {
  const { selectedProvider } = useSettingsStore();

  return (
    <div className="flex-1 overflow-y-auto cyber-scrollbar p-4 sm:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto space-y-8 sm:space-y-12"
      >
        {/* Hero Section */}
        <div className="relative glass-panel-purple p-6 sm:p-10 rounded-2xl border border-cyber-purple/30 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyber-purple/10 to-transparent z-0" />
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 border-dashed border-cyber-cyan shadow-[0_0_30px_rgba(0,243,255,0.5)] flex items-center justify-center mb-6"
            >
              <span className="text-3xl sm:text-4xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">🐱</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase text-glow-cyan bg-clip-text text-transparent bg-gradient-to-r from-white to-cyber-cyan">
              Welcome to Zoro Universe
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 max-w-2xl font-light">
              The ultimate ALL-IN-ONE Multiverse AI Portal. Powered by the chaotic energy of <span className="text-cyber-purple font-bold">Vynaa API</span> and the infinite intellect of <span className="text-cyber-pink font-bold">SumoPod AI Gateway</span>.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/chat" className="px-8 py-4 sm:py-3 bg-cyber-purple/20 border border-cyber-purple text-white rounded-xl sm:rounded-full font-bold hover:bg-cyber-purple/40 hover:shadow-[0_0_20px_rgba(157,0,255,0.5)] transition-all">
                Start Chatting
              </Link>
              <Link to="/hub" className="px-8 py-4 sm:py-3 bg-white/5 border border-white/20 text-white rounded-xl sm:rounded-full font-bold hover:bg-white/10 transition-all">
                Explore Multiverse
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="glass-panel p-4 sm:p-6 rounded-xl flex items-center gap-4 hover:border-cyber-cyan/30 transition-colors group"
            >
              <div className={`p-3 sm:p-4 rounded-lg bg-black/50 border border-white/5 group-hover:scale-110 transition-transform ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm font-mono text-gray-400 capitalize">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Status */}
        <div className="glass-panel-cyan p-6 sm:p-8 rounded-2xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="text-cyber-cyan" /> Core Systems Online
          </h2>
          <div className="space-y-4 font-mono text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-2 gap-2">
              <span className="text-gray-400">Current Provider Provider</span>
              <span className={`px-2 py-1 rounded bg-black border w-fit ${selectedProvider === 'vynaa' ? 'border-cyber-purple text-cyber-purple' : 'border-cyber-pink text-cyber-pink'}`}>
                {selectedProvider.toUpperCase()}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-2 gap-2">
              <span className="text-gray-400">Neural Network Sync</span>
              <span className="text-green-400 w-fit">99.9% STABLE</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-2 gap-2">
              <span className="text-gray-400">Voice Synthesis Module</span>
              <span className="text-green-400 w-fit">READY</span>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
