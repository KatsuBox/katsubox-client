import React from 'react';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { GachaponMachineSection } from './components/GachaponMachine/GachaponMachine';
import { RecentPulls } from './components/RecentPulls/RecentPulls';
import { HotMerch } from './components/HotMerch/HotMerch';
import { Footer } from './components/Footer/Footer';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <Banner />
        <GachaponMachineSection />
        
        {/* Lower Row: Recent Pulls + Hot Merch */}
        <section className={styles.bottomRowSection}>
          <div className={styles.bottomRowContainer}>
            <div className={styles.recentPullsWrapper}>
              <RecentPulls />
            </div>
            <div className={styles.hotMerchWrapper}>
              <HotMerch />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
