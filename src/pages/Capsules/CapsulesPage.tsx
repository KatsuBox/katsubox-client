import React, { useState } from 'react';
import { CapsuleCard } from '../../components/capsules/CapsuleCard/CapsuleCard';
import { mockCapsules } from '../../data/capsules.mock';
import type { Capsule, CapsuleLevel } from '../../types/capsule';
import styles from './CapsulesPage.module.css';

type FilterOption = 'ALL' | CapsuleLevel;

interface CapsulesPageProps {
  onSelectCapsule?: (capsule: Capsule) => void;
}

export const CapsulesPage: React.FC<CapsulesPageProps> = ({ onSelectCapsule }) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('ALL');

  const filterOptions: { label: string; value: FilterOption }[] = [
    { label: 'ALL', value: 'ALL' },
    { label: 'BASIC', value: 'basic' },
    { label: 'RARE', value: 'rare' },
    { label: 'SSR', value: 'ssr' },
  ];

  const filteredCapsules = mockCapsules.filter((capsule) => {
    if (activeFilter === 'ALL') return true;
    return capsule.level === activeFilter;
  });

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {/* Page Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>KATSU CAPSULES</h1>
          <p className={styles.subtitle}>Choose your capsule</p>
        </div>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          {filterOptions.map((option) => (
            <button
              key={option.label}
              className={`${styles.filterBtn} ${activeFilter === option.value ? styles.active : ''} ${styles[option.value]}`}
              onClick={() => setActiveFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Capsule Grid */}
        <div className={styles.grid}>
          {filteredCapsules.map((capsule) => (
            <CapsuleCard
              key={capsule.id}
              capsule={capsule}
              onSelect={onSelectCapsule}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
