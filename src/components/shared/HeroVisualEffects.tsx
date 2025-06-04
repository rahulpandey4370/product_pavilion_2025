
'use client';

import React, { useEffect, useRef } from 'react';

const NEON_COLORS = ['var(--neon-blue)', 'var(--neon-purple)', 'var(--neon-pink)', 'var(--neon-green)'];
const NUM_AURORA_BLOBS = 5;

const HeroVisualEffects: React.FC = () => {
  const auroraContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = auroraContainerRef.current;
    if (!container) return;

    // Clear previous blobs if any (e.g., on hot reload)
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    for (let i = 0; i < NUM_AURORA_BLOBS; i++) {
      const blob = document.createElement('div');
      blob.className = 'aurora-blob';

      const size = Math.random() * 300 + 200; // Size between 200px and 500px
      const duration = Math.random() * 20 + 15; // Duration between 15s and 35s
      const delay = Math.random() * 10; // Delay up to 10s
      const maxOpacity = Math.random() * 0.3 + 0.2; // Max opacity between 0.2 and 0.5

      blob.style.setProperty('--size', `${size}px`);
      blob.style.setProperty('--aurora-color', NEON_COLORS[i % NEON_COLORS.length]);
      
      // Blobs will start/end near edges and move across viewport
      blob.style.setProperty('--x-start', `${Math.random() * 80 - 40}vw`); // -40vw to 40vw
      blob.style.setProperty('--y-start', `${Math.random() * 80 - 40}vh`); // -40vh to 40vh
      blob.style.setProperty('--x-end', `${Math.random() * 80 - 40}vw`);
      blob.style.setProperty('--y-end', `${Math.random() * 80 - 40}vh`);
      
      blob.style.setProperty('--duration', `${duration}s`);
      blob.style.setProperty('--delay', `${delay}s`);
      blob.style.setProperty('--max-opacity', `${maxOpacity}`);

      container.appendChild(blob);
    }
  }, []);

  return (
    <div ref={auroraContainerRef} className="hero-aurora-bg" aria-hidden="true">
      {/* Aurora blobs will be dynamically added here by useEffect */}
    </div>
  );
};

export default HeroVisualEffects;
