import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import styles from './CartSummary.module.css';

interface CartSummaryProps {
  subtotal: number;
  totalCapsulesCount: number;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  totalCapsulesCount,
  onCheckout,
}) => {

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.row}>
        <span className={styles.label}>Cápsulas totales:</span>
        <span className={styles.value}>
          <ShoppingBag size={14} className={styles.icon} />
          {totalCapsulesCount} {totalCapsulesCount === 1 ? 'unidad' : 'unidades'}
        </span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Gastos de envío:</span>
        <span className={styles.shippingFree}>GRATIS</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.totalRow}>
        <span className={styles.totalLabel}>TOTAL</span>
        <span className={styles.totalAmount}>{subtotal.toFixed(2)}€</span>
      </div>

      <button
        className={styles.checkoutBtn}
        onClick={onCheckout}
        disabled={subtotal === 0}
      >
        <span>PROCEDER AL CHECKOUT</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
};
