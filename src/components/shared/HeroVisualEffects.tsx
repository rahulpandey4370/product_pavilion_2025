
'use client';

import React, { useEffect, useRef } from 'react';

const HeroVisualEffects: React.FC = () => {
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const floatingShapesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapesContainer = floatingShapesContainerRef.current;
    if (shapesContainer) {
      while (shapesContainer.firstChild) {
        shapesContainer.removeChild(shapesContainer.firstChild);
      }
      const numShapes = 15; 
      for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        
        const isHorizontal = Math.random() > 0.5;
        const length = Math.random() * 150 + 50; 
        const thickness = Math.random() * 2 + 1;

        shape.style.width = isHorizontal ? `${length}px` : `${thickness}px`;
        shape.style.height = isHorizontal ? `${thickness}px` : `${length}px`;
        
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Determine random start and end points for the drift animation
        // Ensure they can start/end slightly off-screen for smooth appearance/disappearance
        const startX = Math.random() * viewportWidth * 1.2 - viewportWidth * 0.1;
        const startY = Math.random() * viewportHeight;
        const endX = Math.random() * viewportWidth * 1.2 - viewportWidth * 0.1;
        const endY = Math.random() * viewportHeight;
        
        // Mid point for a change in trajectory or scale if desired by keyframes
        const midX = startX + (endX - startX) * (Math.random() * 0.4 + 0.3); // Somewhere between 30-70% of the path
        const midY = startY + (endY - startY) * (Math.random() * 0.4 + 0.3);

        shape.style.setProperty('--start-x', `${startX - parseFloat(shape.style.left || '0')}px`);
        shape.style.setProperty('--start-y', `${startY - parseFloat(shape.style.top || '0')}px`);
        shape.style.setProperty('--mid-x', `${midX - parseFloat(shape.style.left || '0')}px`);
        shape.style.setProperty('--mid-y', `${midY - parseFloat(shape.style.top || '0')}px`);
        shape.style.setProperty('--end-x', `${endX - parseFloat(shape.style.left || '0')}px`);
        shape.style.setProperty('--end-y', `${endY - parseFloat(shape.style.top || '0')}px`);
        shape.style.setProperty('--max-opacity', `${Math.random() * 0.3 + 0.2}`); // Max opacity between 0.2 and 0.5


        shape.style.left = `${Math.random() * 100}%`; 
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.animationDelay = `${Math.random() * 10}s`; 
        
        shapesContainer.appendChild(shape);
      }
    }

    const particleContainer = particleContainerRef.current;
    if (particleContainer) {
      while (particleContainer.firstChild) {
        particleContainer.removeChild(particleContainer.firstChild);
      }
      const numParticles = 70; 
      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 2 + 0.5; 
        const duration = Math.random() * 5 + 3; 
        const opacity = Math.random() * 0.5 + 0.2;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = ['var(--neon-blue)', 'var(--neon-purple)', 'var(--neon-pink)', 'var(--neon-green)'][Math.floor(Math.random() * 4)];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.setProperty('--particle-duration', `${duration}s`);
        particle.style.setProperty('--particle-opacity-start', `${opacity}`);
        particle.style.setProperty('--particle-translate-x', `${(Math.random() - 0.5) * 150}`); 
        particle.style.setProperty('--particle-translate-y', `${(Math.random() - 0.5) * 150}`); 
        
        particleContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <>
      <div ref={floatingShapesContainerRef} className="floating-shapes-container" aria-hidden="true"></div>
      <div ref={particleContainerRef} className="particle-container" aria-hidden="true"></div>
      {/* Morphing shapes are styled separately and can remain */}
      <div className="morphing-shape-bg absolute bottom-10 right-10 z-0" aria-hidden="true"></div>
      <div className="morphing-shape-bg absolute top-20 left-10 z-0" style={{width: '150px', height: '150px', animationDelay: '2s', opacity: 0.2}} aria-hidden="true"></div>
    </>
  );
};

export default HeroVisualEffects;
