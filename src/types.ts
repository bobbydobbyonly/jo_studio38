export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  description: string;
  aspect: 'landscape' | 'portrait' | 'square' | 'panoramic';
  image: string;
  tags: string[];
  category: 'Environment' | 'Character' | 'Storytelling' | 'Stickers' | 'Concept Art';
  isFeatured?: boolean;
  client?: string;
  tools: string[];
  dimensions?: string;
  printAvailable?: boolean;
  printPrice?: number;
  story?: string;
  colorPalette?: string[];
}

export interface CommissionTier {
  id: string;
  name: string;
  tagline: string;
  price: number;
  turnaround: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
  sampleImage: string;
}

export interface ShopItem {
  id: string;
  title: string;
  type: 'Print' | 'Stickers' | 'Artbook' | 'Digital Brushes';
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  tags: string[];
  inStock: boolean;
  options?: string[];
  details: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  product: ShopItem;
  quantity: number;
  selectedOption?: string;
}
