'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Shadcn Card
import { Badge } from '@/components/ui/badge';
import type { Booth } from '@/types';
import { ArrowRight } from 'lucide-react';
import DynamicLucideIcon from '@/components/shared/DynamicLucideIcon';
import { cn } from '@/lib/utils';

interface BoothCardProps {
  booth: Booth;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 }, // Adjusted for scroll animation
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15, // Slightly increased delay for stagger
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // cubic-bezier(0.4, 0, 0.2, 1)
    },
  }),
};

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
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible" // This will be controlled by parent IntersectionObserver or viewport entry
      variants={cardVariants}
      // whileHover is overridden by CSS :hover, but keep for potential JS interop
      className="h-full booth-card-border-wrap scroll-animate" // Added scroll-animate for individual control if needed
    >
      <Card className={cn(
        "booth-card-base booth-theme-card h-full flex flex-col overflow-hidden",
        themeClass, // Apply dynamic theme class
        "glow-effect" // Apply glow effect
      )}>
        <CardHeader className="flex flex-row items-center space-x-4 p-6 text-white"> {/* Ensure text is white for contrast */}
          <DynamicLucideIcon iconName={booth.iconName} className="h-10 w-10 text-[var(--booth-accent-color)]" />
          <div>
            <CardTitle className="text-2xl font-headline">{booth.name}</CardTitle>
            <CardDescription className="text-white/80">{booth.tagline}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between p-6 text-white/90">
          <p className="mb-4 text-sm">{booth.description}</p>
          <div className="mt-auto flex justify-between items-center">
            <Badge 
              variant="secondary" 
              className="bg-[var(--booth-accent-color)] text-black/80 font-semibold animate-pulse-badge" // Use booth accent for badge
            >
              {booth.features.length} Features
            </Badge>
            <Link href={`/booths/${booth.id}`} className="flex items-center text-sm font-medium text-[var(--booth-accent-color)] hover:underline">
              Explore Booth <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
