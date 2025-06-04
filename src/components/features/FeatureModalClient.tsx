
'use client';

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import type { Feature } from '@/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface FeatureModalClientProps {
  feature: Feature | null;
  isOpen: boolean;
  onClose: () => void;
  boothThemeClass?: string; // Optional: to theme the modal based on the booth
}

export default function FeatureModalClient({ feature, isOpen, onClose, boothThemeClass }: FeatureModalClientProps) {
  if (!feature) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={cn(
        "sm:max-w-[600px] p-0 border-2 border-[var(--glass-border)] shadow-2xl",
        "bg-[var(--glass-bg)] backdrop-blur-xl text-popover-foreground", // Changed text-white to text-popover-foreground
        boothThemeClass // Apply booth theme if provided, for accent colors primarily
      )}>
        <ScrollArea className="max-h-[80vh]">
          <div className="p-6">
            {feature.image && (
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden border border-[var(--glass-border)]">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 640px) 100vw, 600px"
                  data-ai-hint="technology detail"
                />
              </div>
            )}
            <DialogHeader className="mb-4">
              <DialogTitle className="text-3xl font-headline gradient-text">{feature.name}</DialogTitle>
              {feature.category && (
                 // DialogDescription will use popover-foreground. Neon color for category for theme.
                <DialogDescription className="text-[var(--neon-blue)] text-sm">
                  Category: {feature.category}
                </DialogDescription>
              )}
            </DialogHeader>
            {/* Text will use popover-foreground from DialogContent */}
            <div className="space-y-4 text-base opacity-90"> 
              <p className="font-semibold text-[var(--neon-purple)]">Description:</p>
              <p>{feature.description}</p>
              {feature.longDescription && (
                <>
                  <p className="font-semibold mt-4 text-[var(--neon-purple)]">Detailed Overview:</p>
                  <p className="whitespace-pre-wrap">{feature.longDescription}</p>
                </>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

    