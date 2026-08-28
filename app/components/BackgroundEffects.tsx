'use client';

import React from 'react';

interface BackgroundEffectsProps {
  variant?: 'default' | 'hero' | 'minimal';
}

export default function BackgroundEffects({ variant = 'default' }: BackgroundEffectsProps) {
  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-50 overflow-hidden select-none" 
      aria-hidden="true"
    >
      {/* Subtle tech dot grid with radial fade mask */}
      <div 
        className="absolute inset-0 bg-dot-pattern opacity-60 dark:opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_60%,transparent_100%)]" 
      />

      {/* Smooth, static GPU-accelerated ambient glows (no heavy CSS blurs or pulse repaints) */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-25 dark:opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(99, 102, 241, 0.25) 45%, transparent 70%)',
          willChange: 'transform',
          transform: 'translate3d(-50%, 0, 0)',
        }}
      />

      {variant === 'hero' && (
        <>
          <div 
            className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, transparent 65%)',
              willChange: 'transform',
            }}
          />
          <div 
            className="absolute top-[25%] -right-[10%] w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 65%)',
              willChange: 'transform',
            }}
          />
        </>
      )}

      {/* Subtle bottom edge gradient for smooth page flow */}
      <div 
        className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none"
      />
    </div>
  );
}
