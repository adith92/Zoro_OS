import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface ZoroMascotProps {
  state?: "idle" | "listening" | "thinking" | "speaking" | "excited" | "sleepy" | "error";
  size?: "sm" | "md" | "lg";
  showSpeechBubble?: boolean;
  remark?: string | null;
  onClick?: () => void;
  className?: string;
}

export const ZoroMascot: React.FC<ZoroMascotProps> = React.memo(({
  state = "idle",
  size = "md",
  showSpeechBubble = false,
  remark,
  onClick,
  className = ""
}) => {

  const dimensions = useMemo(() => {
    switch(size) {
      case "sm": return { w: 48, h: 48, ring: 60 };
      case "lg": return { w: 96, h: 96, ring: 120 };
      case "md":
      default: return { w: 64, h: 64, ring: 80 };
    }
  }, [size]);

  const variants = {
    idle: { y: [0, -5, 0], opacity: 1, transition: { y: { repeat: Infinity, duration: 4 } } },
    listening: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } },
    thinking: { rotate: [0, -5, 5, 0], y: [0, -2, 0], transition: { repeat: Infinity, duration: 2.5 } },
    speaking: { scale: [1, 1.03, 1], y: [0, -2, 0], transition: { repeat: Infinity, duration: 0.3 } },
    excited: { scale: [1, 1.1, 1], y: [0, -10, 0], transition: { duration: 0.5 } },
    sleepy: { opacity: 0.7, y: [0, 2, 0], transition: { repeat: Infinity, duration: 5 } },
    error: { x: [0, -2, 2, -2, 2, 0], transition: { repeat: Infinity, duration: 0.5 } }
  };

  const ringVariants = {
    idle: { rotate: 360, transition: { repeat: Infinity, duration: 20 } },
    listening: { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5], transition: { repeat: Infinity, duration: 1.5 } },
    thinking: { rotate: -360, transition: { repeat: Infinity, duration: 10 } },
    speaking: { scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8], transition: { repeat: Infinity, duration: 0.3 } },
    excited: { scale: [1, 1.2, 1], rotate: 360, transition: { duration: 0.5 } },
    sleepy: { opacity: 0.3, transition: { duration: 1 } },
    error: { borderColor: "rgba(239, 68, 68, 0.8)", boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)" }
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`} onClick={onClick} role="button" tabIndex={0} aria-label="Zoro Assistant">
      {/* Speech Bubble */}
      {showSpeechBubble && remark && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 bg-space-dark/90 border border-space-cyan/50 backdrop-blur-md p-3 rounded-2xl rounded-br-none shadow-lg z-50 text-xs text-space-starlight"
          role="status"
        >
          {remark}
          <div className="absolute top-full right-4 w-4 h-4 bg-space-dark/90 border-r border-b border-space-cyan/50 transform rotate-45 -translate-y-2.5 z-[-1]" />
        </motion.div>
      )}

      {/* Mascot Container */}
      <motion.div 
        variants={variants}
        animate={state}
        style={{ width: dimensions.w, height: dimensions.h }}
        className="relative z-10 flex items-center justify-center rounded-full cursor-pointer group"
      >
        {/* Orbit Ring */}
        <motion.div
           variants={ringVariants}
           animate={state}
           className="absolute border border-space-cyan text-glow-cyan rounded-full pointer-events-none"
           style={{ width: dimensions.ring, height: dimensions.ring, borderColor: 'var(--zoro-primary)' }}
        />

        {/* Mascot Image or Fallback */}
        <div className="w-full h-full rounded-full overflow-hidden bg-space-dark/50 border border-white/10 flex items-center justify-center zoro-glow">
          <img 
            src="/assets/zoro-logo.png" 
            alt="Zoro Mascot" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div className="hidden w-full h-full items-center justify-center font-bold text-2xl text-space-cyan bg-space-dark/80 backdrop-blur">
            Z
          </div>
        </div>

        {/* State Overlays */}
        {state === 'speaking' && (
           <div className="absolute bottom-1 right-1 w-3 h-3 bg-space-cyan rounded-full animate-ping z-20" />
        )}
        {state === 'listening' && (
           <div className="absolute top-1 right-1 w-3 h-3 bg-space-violet rounded-full animate-pulse z-20" />
        )}
        {state === 'error' && (
           <div className="absolute top-1 left-1 w-3 h-3 bg-red-500 rounded-full animate-pulse z-20" />
        )}
      </motion.div>
    </div>
  );
});
