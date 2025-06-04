import type { Booth } from '@/types';
import BoothCard from './BoothCard';

interface BoothGridProps {
  booths: Booth[];
}

export default function BoothGrid({ booths }: BoothGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {booths.map((booth, index) => (
        <BoothCard key={booth.id} booth={booth} index={index} />
      ))}
    </div>
  );
}
