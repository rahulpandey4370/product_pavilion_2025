
'use client'; 

import { booths } from '@/lib/booth-data';
import BoothGrid from '@/components/booths/BoothGrid';
// import BoothSuggesterForm from '@/components/ai/BoothSuggesterForm'; // Commented out as per request
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import HeroVisualEffects from '@/components/shared/HeroVisualEffects'; 
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function HomePage() {
  const subHeadingText = "Welcome to Manufacturing Bay";

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3, // Start animation shortly after page load
        staggerChildren: 0.05, // Time between each letter animation
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 xl:py-40 2xl:py-48 min-h-[calc(90vh-var(--header-height,4rem))] flex flex-col justify-center items-center overflow-hidden hero-section-2xl-expansive">
        <HeroVisualEffects /> {/* Add visual effects component */}
        <div className="px-4 z-10 w-full"> {/* Ensure content is above effects, removed container and mx-auto, added w-full */}
          <h1 className={cn(
            "text-5xl md:text-7xl font-bold mb-4", // Reduced mb from 8 to 4
            "gradient-text" 
          )}>
            Epicor Product Pavilion 2025
          </h1>
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-6"
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
          <p className="text-xl md:text-2xl text-foreground/80 mb-12"> {/* Removed max-w-3xl mx-auto */}
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

      {/* AI Booth Suggester Section - Removed as per request */}
      {/* 
      <section id="ai-suggester" className="py-16 bg-background/30 rounded-lg" style={{backdropFilter: 'blur(5px)'}}>
        <div className="container mx-auto px-4">
           <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Need Guidance? Let AI Help!</h2>
          <div>
            <BoothSuggesterForm />
          </div>
        </div>
      </section> 
      */}
    </div>
  );
}
