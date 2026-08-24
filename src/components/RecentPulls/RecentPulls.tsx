import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './RecentPulls.module.css';

interface PullItem {
  id: string;
  name: string;
  rarity: 'R' | 'SR' | 'SSR';
  color: 'pink' | 'cyan' | 'purple';
}

const MOCK_PULLS: PullItem[] = [
  { id: '1', name: 'Astolfo', rarity: 'SSR', color: 'pink' },
  { id: '2', name: 'Naruto', rarity: 'R', color: 'cyan' },
  { id: '3', name: 'Rem', rarity: 'SR', color: 'purple' },
];

export const RecentPulls: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>RECENT PULLS</h3>
        <div className={styles.controls}>
          <button className={styles.navBtn} aria-label="Previous">
            <ChevronLeft size={16} />
          </button>
          <button className={styles.navBtn} aria-label="Next">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className={styles.pullsGrid}>
        {/* Left Arrow inside feed if scrollable */}
        <button className={styles.scrollArrowLeft} aria-label="Scroll left">
          <ChevronLeft size={16} />
        </button>

        {MOCK_PULLS.map((pull) => (
          <div key={pull.id} className={styles.pullCard}>
            <div className={`${styles.openCapsule} ${styles[pull.color]}`}>
              <div className={styles.characterPlaceholder}>
                <span className={styles.characterIcon}>👤</span>
              </div>
            </div>
            <div className={styles.pullInfo}>
              <span className={`${styles.rarityBadge} ${styles[`rarity${pull.rarity}`]}`}>
                [{pull.rarity}]
              </span>
              <span className={styles.itemName}>{pull.name}</span>
            </div>
          </div>
        ))}

        {/* Right Arrow inside feed */}
        <button className={styles.scrollArrowRight} aria-label="Scroll right">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
