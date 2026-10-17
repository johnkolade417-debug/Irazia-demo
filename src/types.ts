export interface Product {
  id: string;
  title: string;
  category: 'tights' | 'bottoms' | 'jumpsuits' | 'accessories';
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  tag?: string;
  images: string[];
  description: string;
  highlights: string[];
  colors?: { name: string; hex: string; imageIndex?: number }[];
  sizes?: string[];
  warmthLevels?: { id: string; label: string; temp: string; weight: string; desc: string }[];
}

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  selectedWarmth?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  shade?: string;
  size?: string;
  warmth?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
