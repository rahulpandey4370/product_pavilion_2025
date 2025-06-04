
'use client';

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

// Helper to get theme class based on booth ID
const getBoothThemeClass = (boothId?: string | null) => {
  if (!boothId) return '';
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

  const boothThemeClass = getBoothThemeClass(booth?.id);

  if (!booth) {
    return (
      <div className="flex justify-center items-center min-h-screen loading-spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Breadcrumbs and Navigation */}
      <nav className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-[var(--neon-blue)] flex items-center">
            <Home className="h-4 w-4 mr-1" /> Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground gradient-text">{booth.name}</span>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" onClick={() => navigateBooth('prev')} disabled={allBooths.length <=1}>
             <ArrowLeft className="mr-2 h-4 w-4" /> Prev
          </Button>
          <Button size="sm" onClick={() => navigateBooth('next')} disabled={allBooths.length <=1}>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Booth Header Section */}
      <section className={cn(
          "relative py-16 md:py-24 rounded-lg overflow-hidden text-white booth-theme-card glow-effect",
          boothThemeClass
        )}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <DynamicLucideIcon iconName={booth.iconName} className="h-20 w-20 mx-auto mb-6 text-[var(--booth-accent-color)]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{booth.name}</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl mx-auto">{booth.tagline}</p>
          {booth.heroImage && (
            <div className="relative w-full max-w-4xl h-64 md:h-96 mx-auto mt-8 rounded-lg overflow-hidden shadow-2xl border-2 border-[var(--glass-border)]">
              <Image
                src={booth.heroImage}
                alt={`${booth.name} hero image`}
                layout="fill"
                objectFit="cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                data-ai-hint="technology banner"
              />
            </div>
          )}
          <p className="mt-8 text-lg opacity-80 max-w-3xl mx-auto">{booth.description}</p>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="products-section-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Key Features</h2>
          {booth.features.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {booth.features.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  onViewDetails={() => handleViewDetails(feature)}
                  index={index}
                  boothThemeClass={boothThemeClass}
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
        boothThemeClass={boothThemeClass}
      />
    </div>
  );
}
