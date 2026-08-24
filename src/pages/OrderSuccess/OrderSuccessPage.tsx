import React from 'react';
import { CheckCircle2, Package, MapPin, ArrowRight, User } from 'lucide-react';
import styles from './OrderSuccessPage.module.css';

interface OrderDetails {
  orderId: string;
  items: any[];
  total: number;
  shippingInfo: {
    fullName: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
  };
  paymentMethod: string;
}

interface OrderSuccessPageProps {
  orderDetails?: OrderDetails | null;
  onGoToShop?: () => void;
  onGoToProfile?: () => void;
}

export const OrderSuccessPage: React.FC<OrderSuccessPageProps> = ({
  orderDetails,
  onGoToShop,
  onGoToProfile,
}) => {
  // Fallback demo data if navigated directly
  const order = orderDetails || {
    orderId: 'KB-849201',
    total: 89.99,
    items: [
      {
        id: 'capsule-rare-pack-5',
        capsule: { name: 'RARE CAPSULE', level: 'rare' },
        packOption: { quantity: 5, price: 89.99 },
        quantity: 1,
      },
    ],
    shippingInfo: {
      fullName: 'Otaku Collector',
      email: 'collector@katsubox.com',
      address: 'Calle Akihabara 42, 2º A',
      city: 'Madrid',
      postalCode: '28002',
    },
    paymentMethod: 'credit_card',
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {/* Success Icon Header */}
        <div className={styles.header}>
          <div className={styles.iconCircle}>
            <CheckCircle2 size={64} className={styles.checkIcon} />
          </div>
          <h1 className={styles.title}>¡GRACIAS POR TU COMPRA!</h1>
          <p className={styles.subtitle}>
            Tu pedido ha sido confirmado y enviado a nuestro centro de preparación.
          </p>
        </div>

        {/* Main Info Card */}
        <div className={styles.orderCard}>
          <div className={styles.cardHeader}>
            <div className={styles.orderIdGroup}>
              <span className={styles.label}>Nº DE PEDIDO</span>
              <span className={styles.orderId}>{order.orderId}</span>
            </div>
            <div className={styles.statusBadge}>
              <Package size={16} />
              <span>EN PREPARACIÓN</span>
            </div>
          </div>

          <div className={styles.divider} />

          {/* Grid: Address & Summary */}
          <div className={styles.infoGrid}>
            {/* Address */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>
                <MapPin size={16} />
                <span>DIRECCIÓN DE ENTREGA</span>
              </h3>
              <div className={styles.addressBox}>
                <p className={styles.name}>{order.shippingInfo.fullName}</p>
                <p>{order.shippingInfo.address}</p>
                <p>
                  {order.shippingInfo.postalCode} {order.shippingInfo.city}
                </p>
                <p className={styles.email}>{order.shippingInfo.email}</p>
              </div>
            </div>

            {/* Items Purchased */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>
                <Package size={16} />
                <span>RESUMEN DEL PEDIDO</span>
              </h3>
              <div className={styles.itemsList}>
                {order.items.map((item, idx) => (
                  <div key={idx} className={styles.itemRow}>
                    <div>
                      <span className={styles.itemName}>
                        {item.capsule?.name || 'KATSU CAPSULE'}
                      </span>
                      <span className={styles.itemPack}>
                        Pack ×{item.packOption?.quantity || 1} ({item.quantity} {item.quantity === 1 ? 'pack' : 'packs'})
                      </span>
                    </div>
                    <span className={styles.itemPrice}>
                      {((item.packOption?.price || 0) * item.quantity).toFixed(2)}€
                    </span>
                  </div>
                ))}
              </div>

              <div className={styles.totalRow}>
                <span>TOTAL PAGADO</span>
                <span className={styles.totalAmount}>{order.total.toFixed(2)}€</span>
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          {/* CTAs */}
          <div className={styles.actions}>
            <button className={styles.secondaryBtn} onClick={onGoToProfile}>
              <User size={18} />
              <span>VER MI PERFIL</span>
            </button>
            <button className={styles.primaryBtn} onClick={onGoToShop}>
              <span>VOLVER A LA TIENDA</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
