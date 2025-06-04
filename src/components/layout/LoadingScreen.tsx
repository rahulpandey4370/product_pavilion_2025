'use client';

import { Sparkles } from 'lucide-react';

export default function LoadingScreen() {
  // HomePage controls the mounting of LoadingScreen based on its isLoading state.
  // This component is now purely presentational.
  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--loading-bg-start)]"
      // Ensure --loading-bg-start, --loading-logo-shadow, and --loading-spinner-color 
      // are defined in your globals.css and are suitable for the current theme.
    >
      <div className="relative">
        <Sparkles
          className="h-24 w-24 text-[var(--loading-logo-shadow)] opacity-50"
          style={{ filter: 'blur(8px)' }}
        />
        <Sparkles className="absolute top-0 left-0 h-24 w-24 text-[var(--loading-spinner-color)] animate-pulse" />
      </div>
      <p className="mt-8 text-xl font-medium text-[var(--loading-spinner-color)] animate-pulse">
        Initializing ProductVerse...
      </p>
      <div className="loading-spinner mt-8"></div>
    </div>
  );
}
