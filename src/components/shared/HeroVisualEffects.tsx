
'use client';

import React, { useEffect, useRef } from 'react';

const NEON_COLORS = ['var(--neon-blue)', 'var(--neon-purple)', 'var(--neon-pink)', 'var(--neon-green)'];
const NUM_STARS = 20; // Increased for a "crazier" feel

const HeroVisualEffects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous effects
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    for (let i = 0; i < NUM_STARS; i++) {
      const star = document.createElement('div');
      star.className = 'shooting-star';

      const color = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
      const duration = Math.random() * 4 + 3; // Duration between 3s and 7s
      const delay = Math.random() * 7;       // Delay up to 7s
      const length = Math.random() * 150 + 75; // Length 75px to 225px
      const thickness = Math.random() * 2 + 1; // Thickness 1px to 3px

      // Initial position (randomly on screen, biased towards edges to shoot across)
      let initialX, initialY;
      if (Math.random() > 0.5) { // Start from left/right edge
        initialX = Math.random() > 0.5 ? '-5vw' : '105vw'; // Slightly off-screen
        initialY = Math.random() * 100 + 'vh';
      } else { // Start from top/bottom edge
        initialX = Math.random() * 100 + 'vw';
        initialY = Math.random() > 0.5 ? '-5vh' : '105vh'; // Slightly off-screen
      }
      
      // Travel distance and angle are now primarily handled by keyframes translating towards center/opposite side
      // We can set a general angle for orientation
      const angle = Math.random() * 360; // Random orientation

      // Determine random end translation factors for the keyframe
      // These make stars shoot towards somewhat opposite areas
      const translateXEndFactor = (Math.random() - 0.5) * 2; // -1 to 1
      const translateYEndFactor = (Math.random() - 0.5) * 2; // -1 to 1


      star.style.setProperty('--star-color', color);
      star.style.setProperty('--star-length', `${length}px`);
      star.style.setProperty('--star-thickness', `${thickness}px`);
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--delay', `${delay}s`);
      star.style.setProperty('--angle', `${angle}deg`);

      // Setting initial position via style.left and style.top
      star.style.left = initialX;
      star.style.top = initialY;
      
      // These are relative translations from its starting point for the animation
      star.style.setProperty('--translate-x-end', `${translateXEndFactor * 80}vw`); // Travel up to 80vw
      star.style.setProperty('--translate-y-end', `${translateYEndFactor * 80}vh`); // Travel up to 80vh


      container.appendChild(star);
    }
  }, []);

  return <div ref={containerRef} className="hero-effects-container" aria-hidden="true" />;
};

export default HeroVisualEffects;
