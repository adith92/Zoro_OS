import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, MessageSquare, Globe, Settings, PlayCircle, Download, Joystick, BookOpen, Smile } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSettingsStore } from '@/store/useStore';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: MessageSquare, label: 'Zoro AI Chat', path: '/chat' },
  { icon: Globe, label: 'Multiverse Hub', path: '/hub' },
  { icon: PlayCircle, label: 'Anime Realm', path: '/anime' },
  { icon: Download, label: 'Media Downloader', path: '/downloader' },
  { icon: Joystick, label: 'Entertainment', path: '/games' },
  { icon: BookOpen, label: 'Islamic Corner', path: '/islamic' },
  { icon: Smile, label: 'Asupan & Fun', path: '/fun' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar({ onNavClick }: { onNavClick?: () => void }) {
  const { selectedProvider, setSelectedProvider } = useSettingsStore();

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-full max-w-[280px] md:w-64 h-full glass-panel-purple border-r border-[#9d00ff]/30 flex flex-col pt-6 pb-4 cyber-scrollbar overflow-y-auto z-10"
    >
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-cyber-purple/20 border border-cyber-purple flex items-center justify-center relative overflow-hidden group min-w-[40px]">
          <div className="absolute inset-0 bg-cyber-purple/40 animate-pulse group-hover:bg-cyber-cyan/40 transition-colors" />
          <span className="text-xl relative z-10">🐱</span>
        </div>
        <h1 className="text-xl font-bold font-mono text-glow-purple tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyber-purple to-cyber-cyan hidden md:block">
          ZORO_OS
        </h1>
        <h1 className="text-lg font-bold font-mono text-glow-purple tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyber-purple to-cyber-cyan md:hidden truncate">
          MENU
        </h1>
      </div>

      <div className="px-4 mb-6">
        <div className="text-xs font-mono text-gray-500 mb-2 tracking-widest pl-2">PROVIDER CORE</div>
        <div className="flex bg-black/50 rounded-lg p-1 border border-white/5">
          {(['vynaa', 'sumopod', 'dual'] as const).map((provider) => (
            <button
              key={provider}
              onClick={() => setSelectedProvider(provider)}
              className={cn(
                "flex-1 text-xs py-1.5 rounded-md font-mono capitalize transition-all",
                selectedProvider === provider
                  ? "bg-cyber-purple/20 text-cyber-cyan border border-cyber-cyan/30 shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              )}
            >
              {provider}
            </button>
          ))}
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="text-xs font-mono text-gray-500 mb-2 mt-4 tracking-widest pl-2">SYSTEM MODULES</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onNavClick}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 font-medium group",
                  isActive
                    ? "bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 text-glow-cyan"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )
              }
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="px-6 mt-auto">
        <div className="text-[10px] font-mono text-center text-gray-600 mt-6 border-t border-white/10 pt-4">
          v9.9.9 MULTIVERSE
          <br />
          System Online
        </div>
      </div>
    </motion.aside>
  );
}
