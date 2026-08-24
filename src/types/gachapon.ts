/* ============================================
   KATSU BOX — TypeScript Type Definitions
   ============================================ */

/** Rarity tiers for gachapon items */
export type Rarity = 'common' | 'rare' | 'sr' | 'ssr' | 'mythic';

/** Color mapping for each rarity tier */
export const RARITY_COLORS: Record<Rarity, string> = {
  common: 'var(--color-text-muted)',
  rare: 'var(--color-cyan)',
  sr: 'var(--color-purple)',
  ssr: 'var(--color-pink)',
  mythic: 'var(--color-yellow)',
};

/** Display labels for rarity tiers */
export const RARITY_LABELS: Record<Rarity, string> = {
  common: 'C',
  rare: 'R',
  sr: 'SR',
  ssr: 'SSR',
  mythic: 'MYTHIC',
};

/** Individual item that can be obtained from a gachapon machine */
export interface GachaItem {
  id: string;
  name: string;
  series: string;
  rarity: Rarity;
  image: string;
  price: number;
}

/** A gachapon machine tier (Basic, Rare, SSR) */
export interface GachaMachine {
  id: string;
  name: string;
  tier: number;
  description: string;
  image: string;
  items: GachaItem[];
  tokenCost: number;
  tokenMultiplier: number;
  featured: boolean;
  accentColor: 'cyan' | 'purple' | 'pink';
  stars: number;
}

/** A recent pull by a user */
export interface RecentPull {
  id: string;
  username: string;
  item: GachaItem;
  timestamp: string;
  rarity: Rarity;
}

/** Merchandise item for sale */
export interface MerchItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  rarity: Rarity;
  inStock: boolean;
}

/** Navigation link for header/footer */
export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

/** Banner slide data */
export interface BannerSlide {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
  image: string;
  gradient: string;
}

/** Social media link */
export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
