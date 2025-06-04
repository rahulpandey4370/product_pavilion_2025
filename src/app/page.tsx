import { booths } from '@/lib/booth-data';
import BoothGrid from '@/components/booths/BoothGrid';
import BoothSuggesterForm from '@/components/ai/BoothSuggesterForm';
import GradientButton from '@/components/shared/GradientButton';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 min-h-[calc(80vh-var(--header-height,4rem))] flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-deep-black to-accent opacity-30 animate-gradient-bg bg-400%"></div>
          <div className="absolute inset-0 bg-deep-black opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">ProductVerse</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Explore cutting-edge product showcases, discover innovative features, and find solutions tailored to your needs.
          </p>
          <GradientButton size="lg" asChild>
            <Link href="#booths">
              Explore Booths <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </GradientButton>
        </div>
      </section>

      {/* Booth Showcase Grid Section */}
      <section id="booths" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-headline">Our Product Pavilions</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Dive into our diverse range of product booths, each offering unique solutions and innovations.
          </p>
          <BoothGrid booths={booths} />
        </div>
      </section>

      {/* AI Booth Suggester Section */}
      <section id="ai-suggester" className="py-16 bg-card/30 rounded-lg">
        <div className="container mx-auto px-4">
           <h2 className="text-4xl font-bold text-center mb-12 font-headline">Need Guidance? Let AI Help!</h2>
          <BoothSuggesterForm />
        </div>
      </section>
    </div>
  );
}
