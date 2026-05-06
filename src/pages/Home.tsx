import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, Cpu, Box } from 'lucide-react';
import { useSettingsStore } from '@/store/useStore';
import { Link } from 'react-router-dom';
import { PageTransition } from '@/components/ui/PageTransition';
import { GlowButton } from '@/components/ui/GlowButton';
import { GlassCard } from '@/components/ui/GlassCard';

const stats = [
  { label: 'Multiverse Tools', value: '150+', icon: Box, color: 'text-space-cyan' },
  { label: 'AI Models', value: '50+', icon: Cpu, color: 'text-space-violet' },
  { label: 'Response Speed', value: '< 200ms', icon: Zap, color: 'text-gray-300' },
];

export function Home() {
  const { selectedProvider, vynaaApiStatus, endpointHistory } = useSettingsStore();

  return (
    <PageTransition className="flex-1 overflow-y-auto cyber-scrollbar p-4 sm:p-8">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Hero Section */}
        <div className="relative glass-panel-purple p-6 sm:p-10 rounded-2xl border border-space-violet/30 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-space-violet/10 to-transparent z-0" />
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 border-dashed border-space-cyan shadow-[0_0_30px_rgba(56,189,248,0.5)] flex items-center justify-center mb-6"
            >
              <span className="text-3xl sm:text-4xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">🐱</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase text-glow-cyan bg-clip-text text-transparent bg-gradient-to-r from-white to-space-cyan">
              ZORO OS
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 max-w-2xl font-light">
              The ultimate Soft Spaceship Cockpit experience. Powered by the precise energy of <span className="text-space-violet font-bold">Vynaa API</span> and the infinite intellect of <span className="text-space-cyan font-bold">SumoPod AI Gateway</span>.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <GlowButton asChild variant="purple" className="w-full sm:w-auto">
                <Link to="/chat">
                  Start Chatting
                </Link>
              </GlowButton>
              <GlowButton asChild variant="ghost" className="w-full sm:w-auto border border-white/20">
                <Link to="/hub">
                  Explore Multiverse
                </Link>
              </GlowButton>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.2 }}
            >
              <GlassCard className="p-4 sm:p-6 flex items-center gap-4 group">
                <div className={`p-3 sm:p-4 rounded-xl bg-black/50 border border-white/5 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-mono text-gray-400 capitalize tracking-widest">{stat.label}</div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* System Status and Recent Activity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* System Status */}
          <GlassCard className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 text-space-starlight">
              <Sparkles className="text-space-cyan" /> Core Systems Online
            </h2>
            <div className="space-y-4 font-mono text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-2 gap-2">
                <span className="text-gray-400">Current Provider</span>
                <span className={`px-2 py-1 rounded bg-black/50 border w-fit ${selectedProvider === 'vynaa' ? 'border-space-violet text-space-violet shadow-[0_0_5px_rgba(129,140,248,0.5)]' : 'border-space-cyan text-space-cyan shadow-[0_0_5px_rgba(56,189,248,0.5)]'}`}>
                  {selectedProvider.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-2 gap-2">
                <span className="text-gray-400">Vynaa API Engine</span>
                <span className={`px-2 py-0.5 rounded shadow-[0_0_5px_currentColor] w-fit ${vynaaApiStatus === 'success' ? 'text-green-400 bg-green-400/10' : vynaaApiStatus === 'failed' ? 'text-red-400 bg-red-400/10' : 'text-yellow-400 bg-yellow-400/10'}`}>
                  {vynaaApiStatus.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-2 gap-2">
                <span className="text-gray-400">Neural Network Sync</span>
                <span className="text-green-400 shadow-[0_0_5px_rgba(74,222,128,0.3)] px-2 py-0.5 rounded bg-green-400/10 w-fit">99.9% STABLE</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-2 gap-2">
                <span className="text-gray-400">Voice Synthesis Module</span>
                <span className="text-green-400 shadow-[0_0_5px_rgba(74,222,128,0.3)] px-2 py-0.5 rounded bg-green-400/10 w-fit">READY</span>
              </div>
            </div>
          </GlassCard>

          {/* Recent Activity */}
          <GlassCard className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 text-space-starlight">
              <Zap className="text-space-violet" /> Recent Activity
            </h2>
            <div className="space-y-3 font-mono text-xs sm:text-sm max-h-[220px] overflow-y-auto cyber-scrollbar pr-2">
              {endpointHistory.length === 0 ? (
                <div className="text-gray-500 italic text-center py-8">No recent activity</div>
              ) : (
                endpointHistory.slice(0, 5).map((log, idx) => (
                  <div key={idx} className="flex flex-col bg-black/30 rounded p-2 border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-space-cyan truncate font-semibold">{log.endpointLabel}</span>
                      <span className="text-gray-500 text-[10px]">{new Date(log.requestedAt).toLocaleTimeString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 truncate max-w-[200px] text-[10px]">{log.category.toUpperCase()}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${log.ok ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {log.ok ? 'SUCCESS' : 'FAILED'}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </GlassCard>
        </div>

      </div>
    </PageTransition>
  );
}
