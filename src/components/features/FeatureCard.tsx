'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Feature } from '@/types';
import GradientButton from '@/components/shared/GradientButton';
import { Eye } from 'lucide-react';

interface FeatureCardProps {
  feature: Feature;
  onViewDetails: () => void;
  index: number;
  boothColorGradient: string;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function FeatureCard({ feature, onViewDetails, index, boothColorGradient }: FeatureCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-border/50">
        {feature.image && (
          <div className="relative w-full h-48">
            <Image
              src={feature.image}
              alt={feature.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint="technology abstract"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl font-headline">{feature.name}</CardTitle>
          {feature.category && <CardDescription className="text-primary">{feature.category}</CardDescription>}
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
          <GradientButton onClick={onViewDetails} size="sm" className="w-full mt-auto" icon={Eye}>
            View Details
          </GradientButton>
        </CardContent>
      </Card>
    </motion.div>
  );
}
