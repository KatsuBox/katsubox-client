import React from 'react';
import { useCart } from '../../../context/useCart';
import { CartItem } from '../CartItem/CartItem';
import { CartSummary } from '../CartSummary/CartSummary';
import { X, ShoppingCart, Sparkles } from 'lucide-react';
import styles from './CartDrawer.module.css';

interface CartDrawerProps {
  onGoToCheckout?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onGoToCheckout }) => {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalCapsulesCount,
  } = useCart();

  if (!isOpen) return null;

  const handleProceedToCheckout = () => {
    closeCart();
    if (onGoToCheckout) {
      onGoToCheckout();
    }
  };

  return (
    <div className={styles.overlay} onClick={closeCart}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <ShoppingCart size={20} className={styles.cartIcon} />
            <h2>CARRITO DE CÁPSULAS</h2>
            {items.length > 0 && (
              <span className={styles.badgeCount}>{items.length}</span>
            )}
          </div>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Cerrar">
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        <div className={styles.body}>
          {items.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIconWrapper}>
                <Sparkles size={36} />
              </div>
              <h3>Tu carrito está vacío</h3>
              <p>Explora nuestras KATSU CAPSULES y añade tus packs preferidos.</p>
              <button className={styles.exploreBtn} onClick={closeCart}>
                DESCUBRIR CÁPSULAS
              </button>
            </div>
          ) : (
            <div className={styles.itemsList}>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary */}
        {items.length > 0 && (
          <CartSummary
            subtotal={subtotal}
            totalCapsulesCount={totalCapsulesCount}
            onCheckout={handleProceedToCheckout}
          />
        )}
      </div>
    </div>
  );
};
