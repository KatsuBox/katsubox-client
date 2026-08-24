import React from 'react';
import { CapsuleCard } from '../CapsuleCard/CapsuleCard';
import { mockCapsules } from '../../../data/capsules.mock';
import type { Capsule } from '../../../types/capsule';
import styles from './CapsuleSection.module.css';

interface CapsuleSectionProps {
  onSelectCapsule?: (capsule: Capsule) => void;
}

export const CapsuleSection: React.FC<CapsuleSectionProps> = ({ onSelectCapsule }) => {
  return (
    <section className={styles.section} id="capsules">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subheading}>CATEGORÍAS DE COLECCIÓN</span>
          <h2 className={styles.title}>KATSU CAPSULES</h2>
          <p className={styles.description}>
            Elige el nivel de tu cápsula según el valor de los artículos en su interior. Cada cápsula contiene sorpresas exclusivas.
          </p>
        </div>

        {/* Capsule Grid */}
        <div className={styles.grid}>
          {mockCapsules.map((capsule) => (
            <CapsuleCard
              key={capsule.id}
              capsule={capsule}
              onSelect={onSelectCapsule}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
