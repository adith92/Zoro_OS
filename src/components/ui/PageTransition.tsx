import React from 'react';
import { motion } from 'motion/react';

export function PageTransition({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -15, filter: 'blur(5px)' }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`flex-1 flex flex-col h-full overflow-hidden ${className || ''}`}
    >
      {children}
    </motion.div>
  );
}
