import React from 'react';
import type { Capsule } from '../../../types/capsule';
import styles from './CapsuleCard.module.css';

interface CapsuleCardProps {
  capsule: Capsule;
  onSelect?: (capsule: Capsule) => void;
}

export const CapsuleCard: React.FC<CapsuleCardProps> = ({ capsule, onSelect }) => {
  const { name, level, tagline, description, basePrice, valueRange, badge } = capsule;

  // Determine glow class by rarity
  const levelClass = styles[level] || styles.basic;

  return (
    <div className={`${styles.card} ${levelClass}`}>
      {/* Badge */}
      <div className={styles.badgeWrapper}>
        <span className={styles.badge}>{badge}</span>
        <span className={styles.levelBadge}>{level.toUpperCase()}</span>
      </div>

      {/* Visual Artwork Placeholder */}
      <div className={styles.imageContainer}>
        <svg className={styles.capsuleSvg} viewBox="0 0 160 160" fill="none">
          <circle cx="80" cy="80" r="60" className={styles.glowCircle} opacity="0.25" />
          <path d="M40 80 A40 40 0 0 1 120 80 Z" className={styles.capsuleTop} opacity="0.9" />
          <path d="M40 80 A40 40 0 0 0 120 80 Z" className={styles.capsuleBottom} opacity="0.8" />
          <rect x="36" y="77" width="88" height="6" rx="3" fill="#ffffff" />
          <circle cx="80" cy="80" r="5" fill="#ec4899" />
        </svg>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.description}>{description}</p>
        <span className={styles.valueRange}>{valueRange}</span>

        {/* Footer info & CTA */}
        <div className={styles.cardFooter}>
          <div className={styles.priceContainer}>
            <span className={styles.priceLabel}>Desde</span>
            <span className={styles.priceValue}>{basePrice.toFixed(2)}€</span>
          </div>

          <button
            className={styles.ctaButton}
            onClick={() => onSelect && onSelect(capsule)}
          >
            VER CÁPSULA
          </button>
        </div>
      </div>
    </div>
  );
};
