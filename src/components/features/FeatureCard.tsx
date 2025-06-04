
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
  index: number;
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
        "booth-card-base h-full flex flex-col overflow-hidden", 
        "glow-effect"
      )}>
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
        <CardHeader className="text-white z-10"> 
          <CardTitle className="text-xl font-headline gradient-text">{feature.name}</CardTitle>
          {feature.category && <CardDescription className="text-[var(--neon-blue)]">{feature.category}</CardDescription>}
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between text-white/90 z-10">
          <p className="text-sm mb-4">{feature.description}</p>
          <Button
            onClick={onViewDetails}
            size="sm"
            className={cn(
              "w-full mt-auto btn-glass-details" // Apply the new glassmorphic style
            )} 
          >
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

