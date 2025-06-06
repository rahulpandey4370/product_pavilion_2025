
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
  index: number;
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
    case 'cloud-enablers': return 'booth-cloud-enablers-theme';
    default: return '';
  }
};

export default function BoothCard({ booth, index }: BoothCardProps) {
  const themeClass = getBoothThemeClass(booth.id);

  return (
    <div
      className="h-full booth-card-border-wrap"
    >
      <Card className={cn(
        "booth-card-base booth-theme-card h-full flex flex-col overflow-hidden relative", // Added 'relative'
        themeClass,
        "glow-effect"
      )}>
        {/* Number Badge */}
        <div
          className={cn(
            "absolute top-2.5 right-2.5 z-20 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold shadow-lg",
            "bg-[var(--booth-accent-color)] text-[hsl(var(--primary-foreground-hsl))]"
          )}
          aria-hidden="true"
        >
          {index + 1}
        </div>

        <CardHeader className="flex flex-row items-center space-x-4 p-6 text-white z-10"> {/* Added z-10 */}
          <DynamicLucideIcon iconName={booth.iconName} className="h-10 w-10 text-[var(--booth-accent-color)]" />
          <div>
            <CardTitle className="text-2xl font-headline">{booth.name}</CardTitle>
            <CardDescription className="text-white/80">{booth.tagline}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between p-6 text-white/90 z-10"> {/* Added z-10 */}
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
