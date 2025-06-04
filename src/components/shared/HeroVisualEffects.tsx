'use client';

import React, { useEffect, useRef } from 'react';

const HeroVisualEffects: React.FC = () => {
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const floatingShapesContainerRef = useRef<HTMLDivElement>(null);
  const morphingShapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create Particles
    const particleContainer = particleContainerRef.current;
    if (particleContainer) {
      // Clear existing particles if any (for HMR or re-renders)
      while (particleContainer.firstChild) {
        particleContainer.removeChild(particleContainer.firstChild);
      }
      for (let i = 0; i < 30; i++) { // Reduced count for performance
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 2; // Slightly smaller
        const duration = Math.random() * 10 + 8; // Longer, varied duration
        const opacity = Math.random() * 0.6 + 0.1; // More subtle opacity

        particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          background: ${['var(--neon-blue)', 'var(--neon-purple)', 'var(--neon-pink)', 'var(--neon-green)'][Math.floor(Math.random() * 4)]};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          --particle-duration: ${duration}s;
          --particle-opacity-start: ${opacity};
        `;
        particleContainer.appendChild(particle);
      }
    }

    // Create Floating Shapes
    const shapesContainer = floatingShapesContainerRef.current;
    if (shapesContainer) {
      while (shapesContainer.firstChild) {
        shapesContainer.removeChild(shapesContainer.firstChild);
      }
      const numShapes = 5; // Reduced for performance
      for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        const size = Math.random() * 60 + 40; // Larger, more impactful shapes
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${Math.random() * 80 + 10}%`; // Avoid edges
        shape.style.top = `${Math.random() * 80 + 10}%`;
        shape.style.animationDelay = `${Math.random() * 5}s`;
        shape.style.animationDuration = `${Math.random() * 5 + 8}s`; // Varied duration
        shapesContainer.appendChild(shape);
      }
    }
  }, []);

  return (
    <>
      <div ref={floatingShapesContainerRef} className="floating-shapes-container" aria-hidden="true"></div>
      <div ref={particleContainerRef} className="particle-container" aria-hidden="true"></div>
      {/* Morphing shape as a distinct element */}
      <div ref={morphingShapeRef} className="morphing-shape-bg absolute bottom-10 right-10 z-0" aria-hidden="true"></div>
      <div className="morphing-shape-bg absolute top-20 left-10 z-0" style={{width: '150px', height: '150px', animationDelay: '2s', opacity: 0.2}} aria-hidden="true"></div>
    </>
  );
};

export default HeroVisualEffects;
