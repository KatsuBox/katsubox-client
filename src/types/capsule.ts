export type CapsuleLevel = 'basic' | 'rare' | 'ssr';

export type PackQuantity = 1 | 3 | 5 | 10;

export interface CapsulePackOption {
  quantity: PackQuantity;
  price: number;
  discountPercentage?: number;
}

export interface Capsule {
  id: string;
  name: string;
  level: CapsuleLevel;
  tagline: string;
  description: string;
  valueRange: string;
  basePrice: number;
  badge: string;
  imageUrl?: string;
  packOptions: CapsulePackOption[];
}
