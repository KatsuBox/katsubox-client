import React from 'react';
import type { GachaMachine } from '../../types/gachapon';
import styles from './GachaponMachine.module.css';

interface GachaCardProps {
  machine: GachaMachine;
}

export const GachaCard: React.FC<GachaCardProps> = ({ machine }) => {
  const getAccentClass = () => {
    switch (machine.accentColor) {
      case 'cyan':
        return styles.cyanTier;
      case 'purple':
        return styles.purpleTier;
      case 'pink':
        return styles.pinkTier;
      default:
        return styles.cyanTier;
    }
  };

  return (
    <div className={`${styles.card} ${getAccentClass()}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.tierName}>{machine.name}</h3>
        <div className={styles.stars}>
          {'★'.repeat(machine.stars)}
        </div>
      </div>

      <div className={styles.gachaOrbContainer}>
        {/* Sphere Gachapon Capsule Icon */}
        <div className={styles.orbSphere}>
          <div className={styles.orbBand}>
            <span className={styles.japaneseLabel}>
              {machine.tier === 1 ? 'ベーシック' : machine.tier === 2 ? 'レア' : 'SSR'}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.tokenCost}>
          <span className={styles.tokenIcon}>●</span>
          <span>{machine.tokenCost} Token x{machine.tokenMultiplier}</span>
        </div>

        <button className={styles.spinButton}>
          SPIN NOW
        </button>
      </div>
    </div>
  );
};
