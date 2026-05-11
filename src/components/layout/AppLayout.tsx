import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { SpaceshipUniverseCanvas } from '../canvas/SpaceshipUniverseCanvas';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '@/components/ui/PageTransition';
import { ZoroAssistantDock } from '../mascot/ZoroAssistantDock';
import { useSettingsStore } from '@/store/useStore';
import { generateZoroRemark, shouldZoroSpeakNow, ZoroActionType } from '@/lib/zoroContext';
import { speakAsZoro } from '@/lib/zoroVoice';

export function AppLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { 
    addZoroAction, 
    setCurrentRouteLabel, 
    personalitySettings,
    setZoroLastRemark
  } = useSettingsStore();

  useEffect(() => {
    const label = pathname === '/' ? 'Home Dashboard' : pathname.replace('/', '').charAt(0).toUpperCase() + pathname.slice(2);
    setCurrentRouteLabel(label);

    const action = {
      type: "route_change" as ZoroActionType,
      route: pathname,
      timestamp: new Date().toISOString()
    };
    addZoroAction(action);

    const lastRemarkTime = localStorage.getItem('zoro_last_spoke_time');
    const lastTime = lastRemarkTime ? parseInt(lastRemarkTime, 10) : null;
    
    if (shouldZoroSpeakNow(lastTime, action.type)) {
      const remark = generateZoroRemark(action, { currentRoute: label }, personalitySettings);
      if (remark) {
        setZoroLastRemark(remark);
        speakAsZoro(remark);
        localStorage.setItem('zoro_last_spoke_time', Date.now().toString());
      }
    }
  }, [pathname]);

  return (
    <div className="flex h-[100dvh] w-screen overflow-hidden bg-space-dark relative">
      <div className="absolute inset-0 z-0">
        <SpaceshipUniverseCanvas />
      </div>
      
      <div className="crt-overlay" />
      
      {/* Mobile Top Bar */}
      <div className="md:hidden absolute top-0 left-0 w-full p-4 z-50 flex justify-between items-center pointer-events-none">
        <div className="glass-panel-purple px-4 py-2 rounded-full pointer-events-auto">
          <span className="font-bold font-mono text-glow-purple text-transparent bg-clip-text bg-gradient-to-r from-space-violet to-space-cyan">ZORO UNIVERSE</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="glass-panel-cyan p-2 rounded-full pointer-events-auto text-space-cyan shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-transform hover:scale-105 active:scale-95"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="relative z-10 flex h-full w-full pt-20 md:pt-0">
        {/* Desktop Sidebar */}
        <div className="hidden md:block h-full">
          <Sidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="absolute inset-y-0 left-0 z-50 md:hidden pb-16 h-[100dvh] w-full max-w-[280px]"
            >
              <Sidebar onNavClick={() => setIsMobileMenuOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Overlay to close sidebar on click outside */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden pointer-events-auto"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
        
        <main className="flex-1 h-full overflow-hidden flex flex-col p-2 sm:p-6 pb-4 md:pb-6 relative z-10">
          <div className="flex-1 rounded-2xl glass-panel relative overflow-hidden flex flex-col border-white/5">
              <Outlet />
          </div>
          
          <footer className="mt-2 sm:mt-4 text-center z-10 hidden sm:block">
            <p className="text-xs font-mono text-space-cyan/50 tracking-wider">
              Powered by VTECH × Zoro LLM Router × Zoro the Starship Cat 🐱🚀
            </p>
          </footer>
        </main>

        <ZoroAssistantDock />
      </div>
    </div>
  );
}
