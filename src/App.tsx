import React from 'react';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { CapsuleSection } from './components/capsules/CapsuleSection/CapsuleSection';
import { Footer } from './components/Footer/Footer';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <Banner />
        <CapsuleSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
