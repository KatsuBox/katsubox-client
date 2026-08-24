import React from 'react';
import type { CapsulePackOption } from '../../../types/capsule';
import styles from './CapsulePackSelector.module.css';

interface CapsulePackSelectorProps {
  packOptions: CapsulePackOption[];
  selectedPack: CapsulePackOption;
  onSelectPack: (pack: CapsulePackOption) => void;
  rarityLevel?: 'basic' | 'rare' | 'ssr';
}

export const CapsulePackSelector: React.FC<CapsulePackSelectorProps> = ({
  packOptions,
  selectedPack,
  onSelectPack,
  rarityLevel = 'basic',
}) => {
  return (
    <div className={styles.selectorContainer}>
      <span className={styles.label}>SELECCIONA TU PACK</span>
      <div className={styles.optionsGrid}>
        {packOptions.map((pack) => {
          const isSelected = selectedPack.quantity === pack.quantity;
          return (
            <button
              key={pack.quantity}
              type="button"
              className={`${styles.packOption} ${isSelected ? styles.selected : ''} ${styles[rarityLevel]}`}
              onClick={() => onSelectPack(pack)}
            >
              <div className={styles.quantity}>×{pack.quantity}</div>
              <div className={styles.unitText}>
                {pack.quantity === 1 ? 'Cápsula' : 'Cápsulas'}
              </div>
              {pack.discountPercentage && (
                <span className={styles.discountBadge}>
                  -{pack.discountPercentage}%
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
