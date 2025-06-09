
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

// Helper function to truncate description to a maximum number of sentences
const truncateDescription = (description: string, maxSentences: number = 2): string => { // Changed maxSentences to 2
  if (!description) {
    return '';
  }
  // This regex splits the text into sentences, capturing the sentence and its ending punctuation.
  const sentences = description.match(/[^.!?]+[.!?]+/g) || [];
  
  if (sentences.length > maxSentences) {
    return sentences.slice(0, maxSentences).join(' ').trim() + '...';
  }
  // If not enough sentences to truncate, or regex didn't split as expected but text is short, return original.
  // If regex fails and text is long, this will return original. A more robust tokenizer might be needed for complex cases.
  return description;
};

export default function FeatureCard({ feature, onViewDetails, index, boothThemeClass }: FeatureCardProps) {
  const shortDescription = truncateDescription(feature.description);

  return (
    <div
      className={cn(
        "h-full booth-card-border-wrap"
      )}
    >
      <Card className={cn(
        "relative booth-card-base h-full flex flex-col overflow-hidden",
        "glow-effect",
        boothThemeClass
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
        <CardHeader className="z-10">
          <CardTitle className="text-xl font-headline gradient-text">{feature.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between z-10">
          <p className="text-sm mb-4">{shortDescription}</p>
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
