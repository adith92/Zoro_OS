import React from 'react';
import { motion } from 'motion/react';
import { Box, Wrench } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { GlassCard } from '@/components/ui/GlassCard';

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <PageTransition className="flex-1 flex items-center justify-center p-4 sm:p-8 relative z-10">
      <GlassCard className="p-8 sm:p-12 text-center max-w-xl w-full border-space-cyan/30 shadow-[0_0_30px_rgba(56,189,248,0.1)]">
        <div className="w-20 h-20 mx-auto bg-space-cyan/20 rounded-2xl flex items-center justify-center mb-6 border border-space-cyan shadow-[0_0_20px_rgba(56,189,248,0.4)]">
          <Wrench className="w-10 h-10 text-space-cyan" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black font-mono text-white mb-4 uppercase tracking-widest">{title}</h1>
        <p className="text-gray-400 font-mono text-sm sm:text-base leading-relaxed">
          System module is currently initializing. The power of the multiverse is being channeled. Check back soon for the full experience.
        </p>
        
        <div className="mt-8 relative h-2 bg-space-dark/80 rounded-full overflow-hidden border border-white/5">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-space-cyan shadow-[0_0_10px_rgba(56,189,248,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </GlassCard>
    </PageTransition>
  );
}
