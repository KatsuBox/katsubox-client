import React, { useState } from 'react';
import { Package, Award, Star, Settings, ShieldCheck, Clock, CheckCircle, Truck } from 'lucide-react';
import styles from './ProfilePage.module.css';

type ActiveTab = 'orders' | 'collection' | 'settings';

interface OrderHistoryItem {
  id: string;
  date: string;
  items: string;
  total: number;
  status: 'En preparación' | 'Enviado' | 'Entregado';
}

const mockOrders: OrderHistoryItem[] = [
  {
    id: 'KB-849201',
    date: '24 Ago 2026',
    items: 'RARE CAPSULE (Pack ×5)',
    total: 89.99,
    status: 'En preparación',
  },
  {
    id: 'KB-731902',
    date: '12 Ago 2026',
    items: 'SSR CAPSULE (Pack ×3)',
    total: 279.99,
    status: 'Enviado',
  },
  {
    id: 'KB-512093',
    date: '28 Jul 2026',
    items: 'BASIC CAPSULE (Pack ×10)',
    total: 169.99,
    status: 'Entregado',
  },
];

export const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('orders');

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {/* Profile Banner / Header */}
        <div className={styles.profileHeader}>
          <div className={styles.avatarWrapper}>
            <svg className={styles.avatarSvg} viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="46" fill="#1e1b2e" stroke="var(--color-pink)" strokeWidth="3" />
              <circle cx="50" cy="38" r="18" fill="var(--color-pink-light)" />
              <path d="M22 80 C22 62, 35 54, 50 54 C65 54, 78 62, 78 80" fill="var(--color-purple)" />
              <circle cx="50" cy="50" r="48" stroke="var(--color-cyan)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
            <span className={styles.levelBadge}>LVL 3</span>
          </div>

          <div className={styles.headerInfo}>
            <div className={styles.titleRow}>
              <h1 className={styles.userName}>Akari Tanaka</h1>
              <span className={styles.userTitle}>COLECCIONISTA SENIOR</span>
            </div>
            <p className={styles.userBio}>
              Fanática del anime cyberpunk, coleccionista de figuras SSR y cazadora de cápsulas raras desde 2025.
            </p>

            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <Package size={18} className={styles.statIconCyan} />
                <div className={styles.statInfo}>
                  <span className={styles.statNumber}>18</span>
                  <span className={styles.statLabel}>CÁPSULAS</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <Star size={18} className={styles.statIconYellow} />
                <div className={styles.statInfo}>
                  <span className={styles.statNumber}>1,250</span>
                  <span className={styles.statLabel}>KATSU POINTS</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <Award size={18} className={styles.statIconPurple} />
                <div className={styles.statInfo}>
                  <span className={styles.statNumber}>4 SSR</span>
                  <span className={styles.statLabel}>EDICIONES ULTRA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabNav}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'orders' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <Package size={18} />
            <span>MIS PEDIDOS</span>
          </button>

          <button
            className={`${styles.tabBtn} ${activeTab === 'collection' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('collection')}
          >
            <Award size={18} />
            <span>MI COLECCIÓN</span>
          </button>

          <button
            className={`${styles.tabBtn} ${activeTab === 'settings' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={18} />
            <span>AJUSTES</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>
          {activeTab === 'orders' && (
            <div className={styles.ordersSection}>
              <h2 className={styles.sectionTitle}>HISTORIAL DE PEDIDOS RECIENTES</h2>
              <div className={styles.ordersList}>
                {mockOrders.map((order) => (
                  <div key={order.id} className={styles.orderCard}>
                    <div className={styles.orderLeft}>
                      <div className={styles.orderId}>{order.id}</div>
                      <div className={styles.orderDate}>{order.date}</div>
                      <div className={styles.orderItems}>{order.items}</div>
                    </div>

                    <div className={styles.orderRight}>
                      <span className={styles.orderTotal}>{order.total.toFixed(2)}€</span>
                      <div
                        className={`${styles.statusBadge} ${
                          order.status === 'En preparación'
                            ? styles.statusPrep
                            : order.status === 'Enviado'
                            ? styles.statusShipped
                            : styles.statusDelivered
                        }`}
                      >
                        {order.status === 'En preparación' && <Clock size={14} />}
                        {order.status === 'Enviado' && <Truck size={14} />}
                        {order.status === 'Entregado' && <CheckCircle size={14} />}
                        <span>{order.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'collection' && (
            <div className={styles.collectionSection}>
              <h2 className={styles.sectionTitle}>CÁPSULAS Y TROFEOS ADQUIRIDOS</h2>
              <div className={styles.trophyGrid}>
                <div className={styles.trophyCard}>
                  <div className={styles.trophyIcon}>🔮</div>
                  <h3>SSR Cyber Valkyrie</h3>
                  <span className={styles.ssrBadge}>SSR LEGENDARIO</span>
                  <p>Obtenido en Pack SSR de Julio</p>
                </div>
                <div className={styles.trophyCard}>
                  <div className={styles.trophyIcon}>⚡</div>
                  <h3>Rare Neon Mecha</h3>
                  <span className={styles.rareBadge}>RARE</span>
                  <p>Obtenido en Pack RARE de Agosto</p>
                </div>
                <div className={styles.trophyCard}>
                  <div className={styles.trophyIcon}>🌸</div>
                  <h3>Basic Chibi Sakura</h3>
                  <span className={styles.basicBadge}>BASIC</span>
                  <p>Obtenido en Pack BASIC de Junio</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className={styles.settingsSection}>
              <h2 className={styles.sectionTitle}>CONFIGURACIÓN DE LA CUENTA</h2>
              <form className={styles.settingsForm} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Nombre de Usuario</label>
                    <input type="text" defaultValue="Akari Tanaka" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email de Coleccionista</label>
                    <input type="email" defaultValue="akari.tanaka@katsubox.com" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Dirección Predeterminada de Envío</label>
                  <input type="text" defaultValue="Calle Akihabara 42, 2º A, Madrid" />
                </div>

                <div className={styles.securityBox}>
                  <ShieldCheck size={20} className={styles.secIcon} />
                  <div>
                    <h4>Verificación Katsu ID Activa</h4>
                    <p>Tu cuenta cuenta con protección multifactor y encriptación de pedido.</p>
                  </div>
                </div>

                <button type="submit" className={styles.saveBtn}>
                  GUARDAR CAMBIOS
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
