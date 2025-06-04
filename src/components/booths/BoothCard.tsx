'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

export default function BoothCard({ booth, index }: BoothCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,102,255,0.3)" }}
      className="h-full"
    >
      <Card className={cn("h-full flex flex-col overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl", booth.colorGradient)}>
        <CardHeader className="flex flex-row items-center space-x-4 p-6 text-primary-foreground">
          <DynamicLucideIcon iconName={booth.iconName} className="h-10 w-10" />
          <div>
            <CardTitle className="text-2xl font-headline">{booth.name}</CardTitle>
            <CardDescription className="text-primary-foreground/80">{booth.tagline}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between p-6 text-primary-foreground/90">
          <p className="mb-4 text-sm">{booth.description}</p>
          <div className="mt-auto flex justify-between items-center">
            <Badge variant="secondary" className="animate-pulse-badge bg-background/20 text-foreground backdrop-blur-sm">
              {booth.features.length} Features
            </Badge>
            <Link href={`/booths/${booth.id}`} className="flex items-center text-sm font-medium text-primary-foreground hover:underline">
              Explore Booth <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
