'use client';

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import type { Feature } from '@/types';
import { ScrollArea } from '@/components/ui/scroll-area';

interface FeatureModalClientProps {
  feature: Feature | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FeatureModalClient({ feature, isOpen, onClose }: FeatureModalClientProps) {
  if (!feature) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-card text-card-foreground p-0">
        <ScrollArea className="max-h-[80vh]">
          <div className="p-6">
            {feature.image && (
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
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
              <DialogTitle className="text-3xl font-headline text-primary">{feature.name}</DialogTitle>
              {feature.category && (
                <DialogDescription className="text-muted-foreground text-sm">
                  Category: {feature.category}
                </DialogDescription>
              )}
            </DialogHeader>
            <div className="space-y-4 text-base text-foreground/90">
              <p className="font-semibold">Description:</p>
              <p>{feature.description}</p>
              {feature.longDescription && (
                <>
                  <p className="font-semibold mt-4">Detailed Overview:</p>
                  <p className="whitespace-pre-wrap">{feature.longDescription}</p>
                </>
              )}
            </div>
            {/* Placeholder for related features carousel if needed later */}
            {/* <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">Related Features:</h4>
              {/* Carousel component here *\/}
            {/* </div> */}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
