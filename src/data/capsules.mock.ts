import type { Capsule } from '../types/capsule';

export const mockCapsules: Capsule[] = [
  {
    id: 'capsule-basic',
    name: 'BASIC CAPSULE',
    level: 'basic',
    tagline: 'Esenciales & Sorpresas Anime',
    description: 'Perfecta para iniciarse en la colección. Contiene figuras chibi, llaveros acrílicos, standees y merchandising oficial de sagas clásicas y de temporada.',
    valueRange: '15€ - 35€ valor estimado',
    basePrice: 19.99,
    badge: 'ACCESIBLE',
    packOptions: [
      { quantity: 1, price: 19.99 },
      { quantity: 3, price: 54.99, discountPercentage: 8 },
      { quantity: 5, price: 89.99, discountPercentage: 10 },
      { quantity: 10, price: 169.99, discountPercentage: 15 },
    ],
  },
  {
    id: 'capsule-rare',
    name: 'RARE CAPSULE',
    level: 'rare',
    tagline: 'Ediciones Especiales & Figuras de Colección',
    description: 'Para verdaderos otakus y coleccionistas exigentes. Incluye figuras articuladas escala 1/10, manga exclusivo y merchandising de edición limitada.',
    valueRange: '40€ - 85€ valor estimado',
    basePrice: 49.99,
    badge: 'POPULAR',
    packOptions: [
      { quantity: 1, price: 49.99 },
      { quantity: 3, price: 134.99, discountPercentage: 10 },
      { quantity: 5, price: 219.99, discountPercentage: 12 },
      { quantity: 10, price: 419.99, discountPercentage: 16 },
    ],
  },
  {
    id: 'capsule-ssr',
    name: 'SSR CAPSULE',
    level: 'ssr',
    tagline: 'Coleccionables Premium & Figuras Escala SSR',
    description: 'La máxima experiencia de lujo anime. Contiene estatuas escala 1/7 o 1/4, arte firmado, réplicas y piezas ultrararas de importación japonesa.',
    valueRange: '100€ - 250€ valor estimado',
    basePrice: 99.99,
    badge: 'LEGENDARIO',
    packOptions: [
      { quantity: 1, price: 99.99 },
      { quantity: 3, price: 279.99, discountPercentage: 7 },
      { quantity: 5, price: 449.99, discountPercentage: 10 },
      { quantity: 10, price: 849.99, discountPercentage: 15 },
    ],
  },
];
