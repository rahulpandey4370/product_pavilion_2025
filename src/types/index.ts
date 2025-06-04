import type { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  name: string;
  description: string;
  longDescription?: string; // For modal
  category?: string;
  priority?: number;
  image?: string; // Placeholder image URL
}

export interface Booth {
  id: string; // slug-like identifier
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  colorGradient: string; // Tailwind CSS class for gradient
  iconName: string; // Changed from icon: LucideIcon to iconName: string
  heroImage?: string; // Placeholder image URL for booth detail page
  pattern?: string; // class for bg pattern or url
}
