import React from 'react';
import type { CartItem as CartItemType } from '../../../types/cart';
import { Plus, Minus, Trash2 } from 'lucide-react';
import styles from './CartItem.module.css';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  const { id, capsule, packOption, quantity } = item;
  const itemTotal = packOption.price * quantity;
  const levelClass = styles[capsule.level] || styles.basic;

  return (
    <div className={`${styles.itemCard} ${levelClass}`}>
      {/* Visual Icon */}
      <div className={styles.iconWrapper}>
        <svg className={styles.miniSvg} viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="22" className={styles.glowBg} opacity="0.3" />
          <path d="M15 30 A15 15 0 0 1 45 30 Z" className={styles.capsuleTop} fill="#ffffff" />
          <path d="M15 30 A15 15 0 0 0 45 30 Z" className={styles.capsuleBottom} opacity="0.8" />
          <line x1="13" y1="30" x2="47" y2="30" stroke="#ffffff" strokeWidth="2" />
        </svg>
      </div>

      {/* Details */}
      <div className={styles.details}>
        <div className={styles.headerRow}>
          <h4 className={styles.title}>{capsule.name}</h4>
          <span className={styles.levelTag}>{capsule.level.toUpperCase()}</span>
        </div>
        <div className={styles.packTag}>Pack ×{packOption.quantity} cápsulas</div>
        <div className={styles.priceRow}>
          <span className={styles.unitPrice}>{packOption.price.toFixed(2)}€ / pack</span>
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className={styles.actions}>
        <div className={styles.quantityControls}>
          <button
            className={styles.qtyBtn}
            onClick={() => onUpdateQuantity(id, quantity - 1)}
            title="Disminuir"
          >
            <Minus size={12} />
          </button>
          <span className={styles.qtyText}>{quantity}</span>
          <button
            className={styles.qtyBtn}
            onClick={() => onUpdateQuantity(id, quantity + 1)}
            title="Aumentar"
          >
            <Plus size={12} />
          </button>
        </div>

        <div className={styles.itemTotal}>{itemTotal.toFixed(2)}€</div>

        <button
          className={styles.deleteBtn}
          onClick={() => onRemove(id)}
          title="Eliminar"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};
