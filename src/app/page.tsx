
'use client'; 

import { useEffect } from 'react'; 
import { booths } from '@/lib/booth-data';
import BoothGrid from '@/components/booths/BoothGrid';
import BoothSuggesterForm from '@/components/ai/BoothSuggesterForm';
import GradientButton from '@/components/shared/GradientButton';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import HeroVisualEffects from '@/components/shared/HeroVisualEffects'; 
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 xl:py-40 2xl:py-48 min-h-[calc(90vh-var(--header-height,4rem))] flex flex-col justify-center items-center overflow-hidden hero-section-2xl-expansive">
        <HeroVisualEffects /> {/* Add visual effects component */}
        <div className="container mx-auto px-4 z-10"> {/* Ensure content is above effects */}
          <h1 className={cn(
            "text-5xl md:text-7xl font-bold mb-8",
            "gradient-text" 
          )}>
            Epicor Product Pavilion 2025
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto"> 
            Explore cutting-edge product showcases, discover innovative features, and find solutions tailored to your needs.
          </p>
          <div> 
            <GradientButton size="lg" asChild>
              <Link href="#booths" className="magnetic-btn">
                <span className="btn-text">Explore Booths</span> <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Booth Showcase Grid Section */}
      <section id="booths" className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-filter backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-xl border border-border/20">
            <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Our Product Pavilions</h2>
            <p 
              className="text-xl text-foreground/80 text-center mb-12 max-w-2xl mx-auto"
            >
              Dive into our diverse range of product booths, each offering unique solutions and innovations.
            </p>
            <BoothGrid booths={booths} />
          </div>
        </div>
      </section>

      {/* AI Booth Suggester Section */}
      <section id="ai-suggester" className="py-16 bg-background/30 rounded-lg" style={{backdropFilter: 'blur(5px)'}}>
        <div className="container mx-auto px-4">
           <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Need Guidance? Let AI Help!</h2>
          <div>
            <BoothSuggesterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
