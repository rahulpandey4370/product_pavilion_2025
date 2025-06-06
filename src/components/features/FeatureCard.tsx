
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Feature } from '@/types';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  feature: Feature;
  onViewDetails: () => void;
  index: number; // Index is kept as it might be used for other purposes like animation delays in future, but not for numbering
  boothThemeClass: string;
}

export default function FeatureCard({ feature, onViewDetails, index, boothThemeClass }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "h-full booth-card-border-wrap"
      )}
    >
      <Card className={cn(
        "relative booth-card-base h-full flex flex-col overflow-hidden",
        "glow-effect",
        boothThemeClass // Apply booth theme class for its background and --booth-accent-color
      )}>
        {/* Number Badge - REMOVED
        <div
          className={cn(
            "absolute top-2.5 right-2.5 z-20 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold shadow-lg",
            "bg-[var(--booth-accent-color)] text-[hsl(var(--primary-foreground-hsl))]"
          )}
          aria-hidden="true"
        >
          {index + 1}
        </div>
        */}

        {feature.image && (
          <div className="relative w-full h-48">
            <Image
              src={feature.image}
              alt={feature.name}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint="technology abstract"
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
        )}
        <CardHeader className="z-10">
          <CardTitle className="text-xl font-headline gradient-text">{feature.name}</CardTitle>
          {feature.category && <CardDescription className="text-[var(--neon-blue)]">{feature.category}</CardDescription>}
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between z-10">
          <p className="text-sm mb-4">{feature.description}</p>
          <Button
            onClick={onViewDetails}
            size="sm"
            className={cn(
              "w-full mt-auto btn-glass-details"
            )}
            style={{
              '--btn-accent-color': 'var(--booth-accent-color)',
              'color': 'hsl(var(--primary-foreground-hsl))',
              'background': 'hsla(var(--booth-accent-color-hsl-values), 0.7)',
             } as React.CSSProperties}
          >
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
