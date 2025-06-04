'use client'; // Required because of useState for modal

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { getBoothById, booths as allBooths } from '@/lib/booth-data';
import type { Booth, Feature } from '@/types';
import FeatureCard from '@/components/features/FeatureCard';
import FeatureModalClient from '@/components/features/FeatureModalClient';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import DynamicLucideIcon from '@/components/shared/DynamicLucideIcon';

export default function BoothDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params.id === 'string' ? params.id : '';
  
  const [booth, setBooth] = useState<Booth | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    if (id) {
      const foundBooth = getBoothById(id);
      if (foundBooth) {
        setBooth(foundBooth);
        setCurrentIndex(allBooths.findIndex(b => b.id === id));
      } else {
        // Handle booth not found, e.g., redirect to a 404 page or home
        router.push('/');
      }
    }
  }, [id, router]);

  const handleViewDetails = (feature: Feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };
  
  const navigateBooth = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    let nextIndex;
    if (direction === 'prev') {
      nextIndex = (currentIndex - 1 + allBooths.length) % allBooths.length;
    } else {
      nextIndex = (currentIndex + 1) % allBooths.length;
    }
    router.push(`/booths/${allBooths[nextIndex].id}`);
  };

  if (!booth) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ArrowPathIcon className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Breadcrumbs and Navigation */}
      <nav className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary flex items-center">
            <Home className="h-4 w-4 mr-1" /> Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">{booth.name}</span>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={() => navigateBooth('prev')} disabled={allBooths.length <=1}>
            <ArrowLeft className="h-4 w-4 mr-1" /> Prev
          </Button>
          <Button variant="outline" size="sm" onClick={() => navigateBooth('next')} disabled={allBooths.length <=1}>
            Next <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </nav>

      {/* Booth Header Section */}
      <section className={cn("relative py-16 md:py-24 rounded-lg overflow-hidden text-primary-foreground", booth.colorGradient)}>
        <div className={cn("absolute inset-0 opacity-10", booth.pattern)} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <DynamicLucideIcon iconName={booth.iconName} className="h-20 w-20 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">{booth.name}</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl mx-auto">{booth.tagline}</p>
          {booth.heroImage && (
            <div className="relative w-full max-w-4xl h-64 md:h-96 mx-auto mt-8 rounded-lg overflow-hidden shadow-2xl border-4 border-background/20">
              <Image
                src={booth.heroImage}
                alt={`${booth.name} hero image`}
                layout="fill"
                objectFit="cover"
                priority
                data-ai-hint="technology banner"
              />
            </div>
          )}
          <p className="mt-8 text-lg opacity-80 max-w-3xl mx-auto">{booth.description}</p>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Key Features</h2>
          {booth.features.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {booth.features.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  onViewDetails={() => handleViewDetails(feature)}
                  index={index}
                  boothColorGradient={booth.colorGradient}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No features listed for this booth yet.</p>
          )}
        </div>
      </section>

      <FeatureModalClient
        feature={selectedFeature}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

// Helper Icon for loading state
function ArrowPathIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}
