import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { TouchRipple, useTouchRipple } from './TouchRipple';
import { Slot } from '@radix-ui/react-slot';

export interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'purple' | 'pink' | 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
}

export function GlowButton({ 
  variant = 'cyan', 
  size = 'md',
  className, 
  children, 
  asChild = false,
  onMouseDown,
  onTouchStart,
  ...props 
}: GlowButtonProps) {
  const { ripples, addRipple, removeRipple } = useTouchRipple();

  const handleMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    addRipple(e);
    if (onMouseDown) onMouseDown(e);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    addRipple(e);
    if (onTouchStart) onTouchStart(e);
  };

  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl font-mono transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-space-dark disabled:opacity-50 disabled:pointer-events-none active:scale-[0.96] hover:scale-[1.02]";
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
    icon: "p-2 sm:p-3",
  };

  const variants = {
    cyan: "bg-space-cyan/10 border border-space-cyan/30 text-space-cyan hover:bg-space-cyan/20 hover:border-space-cyan shadow-[0_0_15px_rgba(56,189,248,0.1)] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] focus-visible:ring-space-cyan",
    purple: "bg-space-violet/10 border border-space-violet/30 text-space-violet hover:bg-space-violet/20 hover:border-space-violet shadow-[0_0_15px_rgba(129,140,248,0.1)] hover:shadow-[0_0_20px_rgba(129,140,248,0.3)] focus-visible:ring-space-violet",
    pink: "bg-space-pink/10 border border-space-pink/30 text-space-pink hover:bg-space-pink/20 hover:border-space-pink shadow-[0_0_15px_rgba(236,72,153,0.1)] hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] focus-visible:ring-space-pink",
    primary: "bg-space-cyan/10 border border-space-cyan/30 text-space-cyan hover:bg-space-cyan/20 hover:border-space-cyan shadow-[0_0_15px_rgba(56,189,248,0.1)] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] focus-visible:ring-space-cyan",
    secondary: "bg-space-violet/10 border border-space-violet/30 text-space-violet hover:bg-space-violet/20 hover:border-space-violet shadow-[0_0_15px_rgba(129,140,248,0.1)] hover:shadow-[0_0_20px_rgba(129,140,248,0.3)] focus-visible:ring-space-violet",
    danger: "bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] focus-visible:ring-red-400",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent focus-visible:ring-gray-400",
  };

  const Component = asChild ? Slot : "button";

  const content = (
    <>
      <TouchRipple ripples={ripples} onClear={removeRipple} />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn("inline-flex w-fit", className)}
    >
      <Component
        className={cn(baseStyles, sizes[size], variants[variant], className, "w-full cursor-pointer m-0 border-solid")}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        {...props}
      >
        {asChild ? (
          React.isValidElement(children) ? (
            React.cloneElement(children as React.ReactElement, {}, (
              <>
                <TouchRipple ripples={ripples} onClear={removeRipple} />
                <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">{(children as React.ReactElement).props.children}</span>
              </>
            ))
          ) : content
        ) : content}
      </Component>
    </motion.div>
  );
}
