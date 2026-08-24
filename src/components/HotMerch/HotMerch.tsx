import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HotMerch.module.css';

interface MerchCardItem {
  id: string;
  name: string;
  price: string;
  rarity: 'SR' | 'R' | 'SSR';
  color: 'purple' | 'cyan' | 'pink';
}

const MOCK_MERCH: MerchCardItem[] = [
  { id: '1', name: 'Jujutsu Kaisen', price: '$59.99', rarity: 'SR', color: 'purple' },
  { id: '2', name: 'Nezuko Hoodie', price: '$44.50', rarity: 'R', color: 'cyan' },
  { id: '3', name: 'One Piece Poster', price: '$32.00', rarity: 'SSR', color: 'pink' },
];

export const HotMerch: React.FC = () => {
  return (
    <div className={styles.container} id="merch">
      <div className={styles.header}>
        <h3 className={styles.title}>HOT MERCHANDISE</h3>
        <div className={styles.controls}>
          <button className={styles.navBtn} aria-label="Previous">
            <ChevronLeft size={16} />
          </button>
          <button className={styles.navBtn} aria-label="Next">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className={styles.merchGrid}>
        {MOCK_MERCH.map((item) => (
          <div key={item.id} className={`${styles.merchCard} ${styles[item.color]}`}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.itemIcon}>👕</span>
            </div>

            <div className={styles.cardDetails}>
              <span className={styles.itemTitle}>
                <span className={`${styles.rarityTag} ${styles[`rarity${item.rarity}`]}`}>
                  [{item.rarity}]
                </span>{' '}
                {item.name}
              </span>
              <span className={styles.price}>{item.price}</span>
            </div>

            <button className={styles.viewBtn}>VIEW ITEM</button>
          </div>
        ))}
      </div>
    </div>
  );
};
