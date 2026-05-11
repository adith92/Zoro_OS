import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, Cpu, Box, Star, Activity, Link as LinkIcon, ShieldAlert } from 'lucide-react';
import { useSettingsStore } from '@/store/useStore';
import { Link, useNavigate } from 'react-router-dom';
import { PageTransition } from '@/components/ui/PageTransition';
import { GlowButton } from '@/components/ui/GlowButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { VTECH_ENDPOINTS, getSafeVtechEndpoints } from '@/data/vtechRegistry';

const stats = [
  { label: 'Multiverse Tools', value: '150+', icon: Box, color: 'text-space-cyan' },
  { label: 'AI Models', value: '50+', icon: Cpu, color: 'text-space-violet' },
  { label: 'Response Speed', value: '< 200ms', icon: Zap, color: 'text-gray-300' },
];

export function Home() {
  const { vtechApiKey, vtechApiStatus, selectedVtechAiEndpointId, zoroRecentActions, favoriteEndpointIds, useVtechProxy } = useSettingsStore();
  const navigate = useNavigate();
  
  const favoriteEndpoints = favoriteEndpointIds.map(id => VTECH_ENDPOINTS.find(e => e.id === id)).filter(Boolean);
  const totalSafeEndpoints = getSafeVtechEndpoints().length;
  const aiEndpointsCount = VTECH_ENDPOINTS.filter(e => e.category === 'ai' && e.safe).length;

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
              Zoro Universe
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 max-w-2xl font-light">
              The ultimate Soft Spaceship Cockpit experience. Powered by the precise energy of <span className="text-space-violet font-bold">VTECH</span> and the infinite intellect of <span className="text-space-cyan font-bold">Zoro LLM Router</span>.
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
              key={`stat_${idx}`}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* API Health Card */}
          <GlassCard className="p-6 sm:p-8 flex flex-col h-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 text-space-starlight">
              <Activity className="text-space-cyan" /> API Health
            </h2>
            <div className="space-y-4 font-mono text-xs sm:text-sm flex-1">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-2 gap-2">
                <span className="text-gray-400">VTECH API Key</span>
                <span className={`px-2 py-0.5 rounded shadow-[0_0_5px_currentColor] w-fit ${vtechApiKey ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                  {vtechApiKey ? 'SAVED' : 'MISSING'}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-2 gap-2">
                <span className="text-gray-400">API Status</span>
                <span className={`px-2 py-0.5 rounded shadow-[0_0_5px_currentColor] w-fit ${vtechApiStatus === 'success' ? 'text-green-400 bg-green-400/10' : vtechApiStatus === 'failed' ? 'text-red-400 bg-red-400/10' : 'text-yellow-400 bg-yellow-400/10'}`}>
                  {vtechApiStatus.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-2 gap-2">
                <span className="text-gray-400">Proxy Mode</span>
                <span className={`px-2 py-0.5 rounded w-fit ${useVtechProxy ? 'text-space-cyan bg-space-cyan/10' : 'text-gray-400 bg-white/5'}`}>
                  {useVtechProxy ? 'ON' : 'OFF'}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-2 gap-2">
                <span className="text-gray-400">Active Model</span>
                <span className="text-space-cyan bg-space-cyan/10 px-2 py-0.5 rounded w-fit max-w-[120px] truncate" title={selectedVtechAiEndpointId}>
                  {selectedVtechAiEndpointId}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center pt-2 gap-2 text-gray-500">
                <span>{totalSafeEndpoints} safe endpoints</span>
                <span>{aiEndpointsCount} AI models</span>
              </div>
            </div>
            {!vtechApiKey && (
              <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-xs text-red-200 flex items-start gap-2">
                 <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                 <span>VTECH API Key belum disimpan. Buka Settings untuk mengaktifkan cockpit.</span>
              </div>
            )}
          </GlassCard>

          {/* Recent Missions */}
          <GlassCard className="p-6 sm:p-8 flex flex-col h-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 text-space-starlight">
              <Zap className="text-space-violet" /> Recent Missions
            </h2>
            <div className="space-y-3 font-mono text-xs sm:text-sm flex-1 overflow-y-auto cyber-scrollbar pr-2 h-[220px]">
              {zoroRecentActions.length === 0 ? (
                <div className="text-gray-500 italic text-center py-8">Belum ada misi terbaru. Mulai chat atau jalankan tool untuk mengisi log aktivitas.</div>
              ) : (
                zoroRecentActions.slice(0, 10).map((action, idx) => (
                  <div key={`recent_${idx}`} className="flex flex-col bg-black/30 rounded p-2 border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-space-cyan truncate font-semibold capitalize">
                        {action.type.replace('_', ' ')}
                      </span>
                      <span className="text-gray-500 text-[10px]">{new Date(action.timestamp).toLocaleTimeString()}</span>
                    </div>
                    <div className="text-gray-400 text-[10px] truncate" title={action.query || action.toolLabel || action.toolId}>
                      {action.query || action.toolLabel || action.toolId || '-'}
                    </div>
                  </div>
                ))
              )}
            </div>
          </GlassCard>
          
          {/* Favorite Tools */}
          <GlassCard className="p-6 sm:p-8 flex flex-col h-full md:col-span-2 lg:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 text-space-starlight">
              <Star className="text-yellow-400" fill="currentColor" /> Favorite Tools
            </h2>
            <div className="space-y-3 font-mono text-xs sm:text-sm flex-1 overflow-y-auto cyber-scrollbar pr-2 h-[220px]">
              {favoriteEndpoints.length === 0 ? (
                <div className="text-gray-500 italic text-center py-8">Belum ada favorite tools. Tandai endpoint favorit dari AI Hub atau Tools Lab.</div>
              ) : (
                favoriteEndpoints.map((tool, idx) => (
                  <button 
                     key={`fav_${idx}`} 
                     onClick={() => navigate(`/${tool?.category === 'ai' ? 'hub' : tool?.category || 'tools'}`)}
                     className="flex flex-col bg-black/30 hover:bg-space-cyan/10 rounded p-2 border border-white/5 hover:border-space-cyan/30 text-left w-full transition-colors group"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-space-starlight group-hover:text-space-cyan truncate font-semibold">
                        {tool?.label}
                      </span>
                      <LinkIcon className="w-3 h-3 text-gray-500 group-hover:text-space-cyan" />
                    </div>
                    <div className="text-gray-400 text-[10px] truncate" title={tool?.description}>
                      {tool?.description}
                    </div>
                  </button>
                ))
              )}
            </div>
          </GlassCard>
        </div>

      </div>
    </PageTransition>
  );
}
