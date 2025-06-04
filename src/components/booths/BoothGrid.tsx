'use client'; // Required if using Framer Motion for stagger directly here

import type { Booth } from '@/types';
import BoothCard from './BoothCard';
// No need for motion here if BoothCard handles its own animation via variants

interface BoothGridProps {
  booths: Booth[];
}

export default function BoothGrid({ booths }: BoothGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"> {/* Increased gap */}
      {booths.map((booth, index) => (
        // BoothCard now uses framer-motion variants with delay based on index
        // The scroll-animate class and IntersectionObserver on HomePage will trigger 'visible'
        <BoothCard key={booth.id} booth={booth} index={index} />
      ))}
    </div>
  );
}
