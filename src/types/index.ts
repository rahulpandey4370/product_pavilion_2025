
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
  iconName: string;
  heroImage?: string; // Placeholder image URL for booth detail page
  boothNumber: number; // Specific number to display on the card
}
