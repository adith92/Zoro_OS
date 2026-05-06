import React, { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface Ripple {
  x: number;
  y: number;
  id: number;
}

export function useTouchRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = (e: MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as MouseEvent<HTMLElement>).clientX;
      clientY = (e as MouseEvent<HTMLElement>).clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    if (navigator.vibrate) {
      navigator.vibrate(8);
    }
  };

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  return { ripples, addRipple, removeRipple };
}

interface TouchRippleProps {
  ripples: Ripple[];
  onClear: (id: number) => void;
}

export function TouchRipple({ ripples, onClear }: TouchRippleProps) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none z-0">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ top: ripple.y, left: ripple.x, scale: 0, opacity: 0.3 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onAnimationComplete={() => onClear(ripple.id)}
            className="absolute -ml-4 -mt-4 w-8 h-8 rounded-full bg-white block"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
