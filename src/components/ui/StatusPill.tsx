import React from 'react';
import { cn } from '@/lib/utils';

interface StatusPillProps {
  status: 'idle' | 'checking' | 'success' | 'failed';
  label?: string;
  className?: string;
}

export function StatusPill({ status, label, className }: StatusPillProps) {
  const styles = {
    idle: "bg-gray-500/20 text-gray-400 border border-gray-500/30",
    checking: "bg-space-cyan/20 text-space-cyan border border-space-cyan/30 animate-pulse",
    success: "bg-green-500/20 text-green-400 border border-green-500/30",
    failed: "bg-red-500/20 text-red-500 border border-red-500/30",
  };

  return (
    <span className={cn("px-2 py-1 flex items-center gap-1.5 rounded-full text-xs font-mono w-fit", styles[status], className)}>
      {status === 'checking' && (
        <span className="w-1.5 h-1.5 rounded-full bg-space-cyan animate-ping" />
      )}
      {status === 'success' && (
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.5)]" />
      )}
      {status === 'failed' && (
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
      )}
      {label || status.toUpperCase()}
    </span>
  );
}
