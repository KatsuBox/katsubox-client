import React from 'react';
import type { GachaMachine } from '../../types/gachapon';
import { GachaCard } from './GachaCard';
import styles from './GachaponMachine.module.css';

const MOCK_MACHINES: GachaMachine[] = [
  {
    id: 'm1',
    name: '1. BÁSICO',
    tier: 1,
    description: 'Tiradas básicas del multiverso',
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
    name: '2. RARO',
    tier: 2,
    description: 'Personaje raro garantizado',
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
    description: 'Botín legendario SSR',
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
          <h2 className={styles.title}>MÁQUINAS GACHAPON</h2>
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
