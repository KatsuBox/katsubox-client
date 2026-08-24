import React from 'react';
import type { GachaMachine } from '../../types/gachapon';
import { GachaCard } from './GachaCard';
import styles from './GachaponMachine.module.css';

const MOCK_MACHINES: GachaMachine[] = [
  {
    id: 'm1',
    name: '1. BASIC',
    tier: 1,
    description: 'Basic Multi-verse pulls',
    image: '',
    items: [],
    tokenCost: 1,
    tokenMultiplier: 1,
    featured: true,
    accentColor: 'cyan',
    stars: 6,
  },
  {
    id: 'm2',
    name: '2. RARE',
    tier: 2,
    description: 'Rare character guaranteed',
    image: '',
    items: [],
    tokenCost: 3,
    tokenMultiplier: 3,
    featured: true,
    accentColor: 'purple',
    stars: 5,
  },
  {
    id: 'm3',
    name: '3. SSR',
    tier: 3,
    description: 'SSR Legendary loot',
    image: '',
    items: [],
    tokenCost: 5,
    tokenMultiplier: 5,
    featured: true,
    accentColor: 'pink',
    stars: 6,
  },
];

export const GachaponMachineSection: React.FC = () => {
  return (
    <section className={styles.section} id="gachapon">
      <div className={styles.outerFrame}>
        {/* Frame UI Accents */}
        <div className={styles.frameDecorationLeft} />
        <div className={styles.frameDecorationRight} />

        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>GACHAPON MACHINE</h2>
        </div>

        <div className={styles.cardsGrid}>
          {MOCK_MACHINES.map((machine) => (
            <GachaCard key={machine.id} machine={machine} />
          ))}
        </div>
      </div>
    </section>
  );
};
