
'use client'; 

import React from 'react';
import { booths } from '@/lib/booth-data';
import BoothGrid from '@/components/booths/BoothGrid';
// import BoothSuggesterForm from '@/components/ai/BoothSuggesterForm'; // Commented out as per request
import FeedbackForm from '@/components/feedback/FeedbackForm'; // Added FeedbackForm import
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import HeroVisualEffects from '@/components/shared/HeroVisualEffects'; 
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useIsMobile } from '@/hooks/use-mobile'; // Import useIsMobile
import { Skeleton } from '@/components/ui/skeleton'; // For loading state

const SimpleWordGame = dynamic(() => import('@/components/shared/SimpleWordGame').then((mod) => mod.default), { 
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center p-8 min-h-[300px] bg-card/50 rounded-lg shadow-md">
      <Skeleton className="h-8 w-3/4 mb-4" />
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-8 w-1/2 mt-4" />
    </div>
  )
});


export default function HomePage() {
  const subHeadingText = "Welcome to Manufacturing Bay";
  const isMobile = useIsMobile();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.05, 
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      color: "hsla(var(--muted-foreground-hsl), 0.3)",
    },
    visible: {
      opacity: 1,
      y: 0,
      color: "hsla(var(--foreground-hsl), 0.9)",
      transition: {
        type: "spring",
        damping: 15, 
        stiffness: 100,
      },
    },
  };

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 xl:py-40 2xl:py-48 min-h-[calc(90vh-var(--header-height,4rem))] flex flex-col justify-center items-center overflow-hidden hero-section-2xl-expansive">
        <HeroVisualEffects />
        <div className="px-4 z-10 w-full">
          <h1 className={cn(
            "text-5xl md:text-7xl font-bold mb-4", 
            "gradient-text" 
          )}>
            Epicor Product Pavilion 2025
          </h1>
          <motion.h2 
            className={cn(
              "text-3xl md:text-4xl font-semibold mb-6"
            )}
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
          >
            {subHeadingText.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12">
          Step into the future of manufacturing. Explore our latest innovations designed to power your production floor—from smart automation and AI-driven insights to seamless integrations across your supply chain.
          </p>
          <div> 
            <Button size="lg" asChild>
              <Link href="#booths">
                Explore Booths <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Booth Showcase Grid Section */}
      <section id="booths" className="py-16">
        <div className="container mx-auto px-4">
          <div className="products-section-background">
            <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Our Products</h2>
            <p 
              className="text-xl text-foreground/80 text-center mb-12 max-w-2xl mx-auto"
            >
              Dive into our diverse range of product booths, each offering unique solutions and innovations.
            </p>
            <BoothGrid booths={booths} />
          </div>
        </div>
      </section>
      
      {/* Conditionally render Word Search Game Section */}
      {mounted && !isMobile && (
        <section id="word-search" className="pt-0 pb-16">
          <div className="container mx-auto px-4">
            <div className="products-section-background">
              <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Epicor Product Word Search</h2>
              <p className="text-xl text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
                Test your Epicor knowledge! Find our key products and solutions in this interactive word search puzzle.
              </p>
              <SimpleWordGame />
            </div>
          </div>
        </section>
      )}

      {/* Feedback Section */}
      <section id="feedback" className="py-16">
        <div className="container mx-auto px-4">
          <div className="products-section-background">
            <FeedbackForm />
          </div>
        </div>
      </section>
    </div>
  );
}
