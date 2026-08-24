import type { Capsule, CapsulePackOption } from './capsule';

export interface CartItem {
  id: string; // unique ID combining capsule.id and packOption.quantity
  capsule: Capsule;
  packOption: CapsulePackOption;
  quantity: number; // number of packs ordered
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}
