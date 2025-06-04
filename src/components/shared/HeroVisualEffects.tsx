
'use client';

import React, { useEffect, useRef } from 'react';

const NEON_COLORS = ['var(--neon-blue)', 'var(--neon-purple)', 'var(--neon-pink)', 'var(--neon-green)'];
const NUM_STREAKS = 25; // Increased for more vibrancy

const HeroVisualEffects: React.FC = () => {
  const neonStreaksContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = neonStreaksContainerRef.current;
    if (container) {
      // Clear previous streaks if any
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      for (let i = 0; i < NUM_STREAKS; i++) {
        const streak = document.createElement('div');
        streak.className = 'neon-streak';

        const width = Math.random() * 150 + 50; // length of streak
        const height = Math.random() * 3 + 1; // thickness of streak
        streak.style.width = `${width}px`;
        streak.style.height = `${height}px`;

        streak.style.setProperty('--effect-color', NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)]);

        // Animation properties
        const duration = Math.random() * 5 + 5; // 5s to 10s
        streak.style.setProperty('--animation-duration', `${duration}s`);
        streak.style.setProperty('--animation-delay', `${Math.random() * duration}s`); // Staggered start

        const startX = Math.random() * 100 - 50; // vw, can start off-screen
        const startY = Math.random() * 100; // vh
        const endX = Math.random() * 100 + 50;   // vw, can end off-screen
        const endY = Math.random() * 100;     // vh
        
        streak.style.setProperty('--start-x', `${startX}vw`);
        streak.style.setProperty('--start-y', `${startY}vh`);
        streak.style.setProperty('--end-x', `${startX + (Math.random() - 0.5) * 150}vw`); // Travel distance
        streak.style.setProperty('--end-y', `${startY + (Math.random() - 0.5) * 100}vh`);


        const initialRotate = Math.random() * 360;
        streak.style.setProperty('--initial-rotate', `${initialRotate}deg`);
        streak.style.setProperty('--rotation-delta', `${(Math.random() - 0.5) * 90}deg`); // Rotate up to 45deg either way
        
        streak.style.setProperty('--initial-scale', `${Math.random() * 0.5 + 0.5}`); // Start slightly smaller
        streak.style.setProperty('--mid-scale', `${Math.random() * 0.3 + 1}`); // Can grow slightly

        container.appendChild(streak);
      }
    }
  }, []);

  return (
    <>
      <div ref={neonStreaksContainerRef} className="neon-streaks-container" aria-hidden="true"></div>
      {/* Morphing shapes remain as the deepest background layer */}
      <div className="morphing-shape-bg absolute bottom-10 right-10" aria-hidden="true" style={{ zIndex: -2 }}></div>
      <div 
        className="morphing-shape-bg absolute top-20 left-10" 
        style={{width: '150px', height: '150px', animationDelay: '2s', opacity: 0.2, zIndex: -2}} 
        aria-hidden="true">
      </div>
    </>
  );
};

export default HeroVisualEffects;
