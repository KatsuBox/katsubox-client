import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { CapsuleSection } from './components/capsules/CapsuleSection/CapsuleSection';
import { GachaponMachineSection } from './components/GachaponMachine/GachaponMachine';
import { RecentPulls } from './components/RecentPulls/RecentPulls';
import { HotMerch } from './components/HotMerch/HotMerch';
import { Footer } from './components/Footer/Footer';
import { CartDrawer } from './components/cart/CartDrawer/CartDrawer';
import { CartProvider } from './context/CartContext';
import { useCart } from './context/useCart';

import { CapsulesPage } from './pages/Capsules/CapsulesPage';
import { CapsuleDetailPage } from './pages/CapsuleDetail/CapsuleDetailPage';
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccess/OrderSuccessPage';
import { ProfilePage } from './pages/Profile/ProfilePage';

import type { Capsule, CapsulePackOption } from './types/capsule';
import styles from './App.module.css';

type PageView = 'home' | 'capsules' | 'detail' | 'checkout' | 'order-success' | 'profile';

const AppContent: React.FC = () => {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedCapsule, setSelectedCapsule] = useState<Capsule | null>(null);
  const [lastOrderDetails, setLastOrderDetails] = useState<any | null>(null);
  const { addToCart } = useCart();

  const handleSelectCapsule = (capsule: Capsule) => {
    setSelectedCapsule(capsule);
    setActivePage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: string) => {
    setActivePage(page as PageView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (capsule: Capsule, pack: CapsulePackOption) => {
    addToCart(capsule, pack, 1);
  };

  const handleOrderSuccess = (orderData: any) => {
    setLastOrderDetails(orderData);
    setActivePage('order-success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.appWrapper}>
      <Header activePage={activePage} onNavigate={handleNavigate} />

      <main className={styles.mainContent}>
        {activePage === 'home' && (
          <>
            <Banner />
            <CapsuleSection onSelectCapsule={handleSelectCapsule} />
            <GachaponMachineSection />
            <RecentPulls />
            <HotMerch />
          </>
        )}

        {activePage === 'capsules' && (
          <CapsulesPage onSelectCapsule={handleSelectCapsule} />
        )}

        {activePage === 'detail' && selectedCapsule && (
          <CapsuleDetailPage
            capsule={selectedCapsule}
            onBack={() => handleNavigate('capsules')}
            onAddToCart={handleAddToCart}
          />
        )}

        {activePage === 'checkout' && (
          <CheckoutPage
            onBackToCart={() => handleNavigate('capsules')}
            onOrderSuccess={handleOrderSuccess}
          />
        )}

        {activePage === 'order-success' && (
          <OrderSuccessPage
            orderDetails={lastOrderDetails}
            onGoToShop={() => handleNavigate('capsules')}
            onGoToProfile={() => handleNavigate('profile')}
          />
        )}

        {activePage === 'profile' && <ProfilePage />}
      </main>

      <CartDrawer onGoToCheckout={() => handleNavigate('checkout')} />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
