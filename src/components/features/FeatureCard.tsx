'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Feature } from '@/types';
import GradientButton from '@/components/shared/GradientButton';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  feature: Feature;
  onViewDetails: () => void;
  index: number;
  boothThemeClass: string; // To inherit some styles or use accent colors
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function FeatureCard({ feature, onViewDetails, index, boothThemeClass }: FeatureCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className={cn(
        "h-full booth-card-border-wrap", // Use the border wrapper
        "scroll-animate fade-in" // For scroll animation
      )}
      style={{animationDelay: `${index * 0.1 + 0.5}s`}} // Stagger animation for feature cards
    >
      <Card className={cn(
        "booth-card-base h-full flex flex-col overflow-hidden", // Base glassmorphic card style
        "glow-effect" // General glow, could be themed by boothThemeClass if CSS supports it
        // boothThemeClass could be used here if features need to strongly reflect main booth theme
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
             {/* Optional overlay for text contrast if needed */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
        )}
        <CardHeader className="text-white z-10"> {/* Ensure text is white */}
          <CardTitle className="text-xl font-headline gradient-text">{feature.name}</CardTitle>
          {feature.category && <CardDescription className="text-[var(--neon-blue)]">{feature.category}</CardDescription>}
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between text-white/90 z-10">
          <p className="text-sm mb-4">{feature.description}</p>
          <GradientButton onClick={onViewDetails} size="sm" className="w-full mt-auto" icon={Eye}>
            View Details
          </GradientButton>
        </CardContent>
      </Card>
    </motion.div>
  );
}
