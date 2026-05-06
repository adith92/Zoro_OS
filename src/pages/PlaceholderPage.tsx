import React from 'react';
import { motion } from 'motion/react';
import { Box } from 'lucide-react';

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex-1 flex items-center justify-center p-8 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel p-12 rounded-3xl text-center max-w-xl border-cyber-pink/30 shadow-[0_0_30px_rgba(255,0,234,0.1)]"
      >
        <div className="w-20 h-20 mx-auto bg-cyber-pink/20 rounded-2xl flex items-center justify-center mb-6 border border-cyber-pink shadow-[0_0_20px_rgba(255,0,234,0.4)]">
          <Box className="w-10 h-10 text-cyber-pink" />
        </div>
        <h1 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-widest">{title}</h1>
        <p className="text-gray-400 font-mono">
          System module is currently initializing. The power of the multiverse is being channeled. Check back soon for the full experience.
        </p>
        
        <div className="mt-8 relative h-2 bg-black/50 rounded-full overflow-hidden border border-white/5">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-cyber-pink shadow-[0_0_10px_rgba(255,0,234,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
