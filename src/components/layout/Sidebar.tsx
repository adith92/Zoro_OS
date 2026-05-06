import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, MessageSquare, Globe, Settings, PlayCircle, Download, Joystick, BookOpen, Smile } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSettingsStore } from '@/store/useStore';
import { GlowButton } from '@/components/ui/GlowButton';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: MessageSquare, label: 'Zoro AI Chat', path: '/chat' },
  { icon: Globe, label: 'Multiverse Hub', path: '/hub' },
  { icon: PlayCircle, label: 'Anime Realm', path: '/anime' },
  { icon: Download, label: 'Media Downloader', path: '/downloader' },
  { icon: Joystick, label: 'Zoro Adventures', path: '/games' },
  { icon: BookOpen, label: 'Islamic Corner', path: '/islamic' },
  { icon: Smile, label: 'Asupan & Fun', path: '/fun' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar({ onNavClick }: { onNavClick?: () => void }) {
  const { selectedProvider, setSelectedProvider } = useSettingsStore();
  const location = useLocation();

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-full max-w-[280px] md:w-64 h-full glass-panel-purple border-r border-[#818cf8]/20 flex flex-col pt-6 pb-4 cyber-scrollbar overflow-y-auto z-10"
    >
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-space-violet/20 border border-space-violet flex items-center justify-center relative overflow-hidden group min-w-[40px] shadow-[0_0_10px_rgba(129,140,248,0.5)]">
          <div className="absolute inset-0 bg-space-violet/40 animate-pulse group-hover:bg-space-cyan/40 transition-colors" />
          <span className="text-xl relative z-10">🐱</span>
        </div>
        <h1 className="text-xl font-bold font-mono text-glow-purple tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-space-violet to-space-cyan hidden md:block">
          ZORO_OS
        </h1>
        <h1 className="text-lg font-bold font-mono text-glow-purple tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-space-violet to-space-cyan md:hidden truncate">
          MENU
        </h1>
      </div>

      <div className="px-4 mb-6">
        <div className="text-xs font-mono text-gray-400 mb-2 tracking-widest pl-2">PROVIDER</div>
        <div className="flex bg-space-dark/60 rounded-xl p-1 border border-white/5 shadow-inner gap-1">
          {(['vynaa', 'sumopod', 'dual'] as const).map((provider) => (
            <GlowButton
              key={provider}
              onClick={() => setSelectedProvider(provider)}
              variant={selectedProvider === provider ? 'cyan' : 'ghost'}
              size="sm"
              className={cn(
                "flex-1 px-1 py-1.5 text-[10px] capitalize rounded-lg min-w-0"
              )}
            >
              <span className="truncate">{provider}</span>
            </GlowButton>
          ))}
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="text-xs font-mono text-gray-400 mb-2 mt-4 tracking-widest pl-2">SYSTEM MODULES</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path);
          return (
            <motion.div key={item.path} className="w-full">
              <GlowButton
                asChild
                variant={isActive ? "cyan" : "ghost"}
                className={cn(
                  "w-full justify-start text-left px-3 py-3 !font-medium group",
                  isActive ? "text-glow-cyan shadow-[0_0_15px_rgba(56,189,248,0.15)]" : ""
                )}
              >
                <Link
                  to={item.path}
                  onClick={onNavClick}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10 shrink-0" />
                  <span className="text-sm relative z-10 truncate">{item.label}</span>
                </Link>
              </GlowButton>
            </motion.div>
          );
        })}
      </nav>

      <div className="px-6 mt-auto">
        <div className="text-[10px] font-mono text-center text-space-violet/50 mt-6 border-t border-white/10 pt-4">
          STARSHIP v9.9.9
          <br />
          Systems Online
        </div>
      </div>
    </motion.aside>
  );
}
