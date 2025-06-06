
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Booth } from '@/types';
import { ArrowRight } from 'lucide-react';
import DynamicLucideIcon from '@/components/shared/DynamicLucideIcon';
import { cn } from '@/lib/utils';

interface BoothCardProps {
  booth: Booth;
  index: number; // Index is still useful for other things like staggered animations if needed
}

// Helper to get theme class based on booth ID
const getBoothThemeClass = (boothId: string) => {
  switch (boothId) {
    case 'prism-ai-use-cases': return 'booth-prism-ai-theme';
    case 'non-prism-ai-use-cases': return 'booth-non-prism-ai-theme';
    case 'ai-accelerated-development': return 'booth-ai-dev-theme';
    case 'cross-platform': return 'booth-cross-platform-theme';
    case 'manufacturing-erp': return 'booth-manufacturing-erp-theme';
    case 'integration': return 'booth-integration-theme';
    case 'cloud': return 'booth-cloud-theme';
    case 'cloud-enablers': return 'booth-cloud-enablers-theme'; // This will apply to "QA meets AI" as its ID is 'cloud-enablers'
    default: return '';
  }
};

export default function BoothCard({ booth }: BoothCardProps) { // Removed index from destructuring as it's not used for numbering
  const themeClass = getBoothThemeClass(booth.id);

  return (
    <div
      className="h-full booth-card-border-wrap"
    >
      <Card className={cn(
        "booth-card-base booth-theme-card h-full flex flex-col overflow-hidden relative",
        themeClass,
        "glow-effect"
      )}>
        {/* Animated Number using booth.boothNumber */}
        <div
          className={cn(
            "absolute top-3 right-4 z-20 text-4xl font-extrabold animated-booth-number",
          )}
          aria-hidden="true"
        >
          {booth.boothNumber}
        </div>

        <CardHeader className="flex flex-row items-center space-x-4 p-6 text-white z-10">
          <DynamicLucideIcon iconName={booth.iconName} className="h-10 w-10 text-[var(--booth-accent-color)]" />
          <div>
            <CardTitle className="text-2xl font-headline">{booth.name}</CardTitle>
            <CardDescription className="text-white/80">{booth.tagline}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between p-6 text-white/90 z-10">
          <p className="mb-4 text-sm">{booth.description}</p>
          <div className="mt-auto flex justify-between items-center">
            <Badge
              variant="secondary"
              className="bg-[var(--booth-accent-color)] text-black/80 font-semibold animate-pulse-badge"
            >
              {booth.features.length} Features
            </Badge>
            <Link href={`/booths/${booth.id}`} className="flex items-center text-sm font-medium text-[var(--booth-accent-color)] hover:underline">
              Explore Booth <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
