
'use client'; // Mark as client component for useEffect and scroll animations

import { useEffect } from 'react';
import { booths } from '@/lib/booth-data';
import BoothGrid from '@/components/booths/BoothGrid';
import BoothSuggesterForm from '@/components/ai/BoothSuggesterForm';
import GradientButton from '@/components/shared/GradientButton';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import HeroVisualEffects from '@/components/shared/HeroVisualEffects'; // Import new component
import { cn } from '@/lib/utils';

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const elementsToAnimate = document.querySelectorAll('.scroll-animate');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => elementsToAnimate.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 xl:py-40 2xl:py-48 min-h-[calc(90vh-var(--header-height,4rem))] flex flex-col justify-center items-center overflow-hidden hero-section-2xl-expansive">
        <HeroVisualEffects /> {/* Add visual effects component */}
        <div className="container mx-auto px-4 z-10"> {/* Ensure content is above effects */}
          <h1 className={cn(
            "text-5xl md:text-7xl font-bold mb-8", // Adjusted margin
            "typewriter-container" // Container for typewriter
          )}>
            <span className="typewriter gradient-text">
              Epicor Product Pavilion 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto scroll-animate fade-in" style={{animationDelay: '3.6s'}}> {/* Increased text-foreground opacity */}
            Explore cutting-edge product showcases, discover innovative features, and find solutions tailored to your needs.
          </p>
          <div className="scroll-animate slide-in-up" style={{animationDelay: '3.8s'}}>
            <GradientButton size="lg" asChild>
              <Link href="#booths" className="magnetic-btn">
                <span className="btn-text">Explore Booths</span> <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Booth Showcase Grid Section */}
      <section id="booths" className="py-16 scroll-animate fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text scroll-animate slide-in-down">Our Product Pavilions</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto scroll-animate slide-in-up" style={{animationDelay: '0.2s'}}>
            Dive into our diverse range of product booths, each offering unique solutions and innovations.
          </p>
          <BoothGrid booths={booths} />
        </div>
      </section>

      {/* AI Booth Suggester Section */}
      <section id="ai-suggester" className="py-16 bg-background/30 rounded-lg scroll-animate fade-in" style={{backdropFilter: 'blur(5px)'}}>
        <div className="container mx-auto px-4">
           <h2 className="text-4xl font-bold text-center mb-12 gradient-text scroll-animate slide-in-down">Need Guidance? Let AI Help!</h2>
          <div className="scroll-animate slide-in-up" style={{animationDelay: '0.2s'}}>
            <BoothSuggesterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
