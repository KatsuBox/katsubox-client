import React, { useState } from 'react';
import { User, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/useCart';
import styles from './Header.module.css';

interface HeaderProps {
  activePage?: string;
  onNavigate?: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage = 'home', onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, items } = useCart();

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { label: 'HOME', page: 'home' },
    { label: 'CAPSULES', page: 'capsules' },
  ];

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo area */}
        <div className={styles.logoSection}>
          <a
            href="#home"
            className={styles.logoLink}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            <span className={styles.logoText}>KATSU BOX</span>
            <span className={styles.subLogoText}>カツボックス - アニメカプセル</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.page}`}
                  className={`${styles.navLink} ${activePage === item.page ? styles.active : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.page);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button
            className={`${styles.profileBtn} ${activePage === 'profile' ? styles.active : ''}`}
            title="Profile"
            onClick={() => handleNavClick('profile')}
          >
            <User size={16} />
            <span>PROFILE</span>
          </button>
          <button className={styles.cartBtn} title="Shopping Cart" onClick={openCart}>
            <ShoppingCart size={16} />
            <span>CART</span>
            {totalItemsCount > 0 && (
              <span className={styles.cartBadge}>{totalItemsCount}</span>
            )}
          </button>
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className={styles.mobileDrawer}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.page}`}
                  className={`${styles.mobileNavLink} ${activePage === item.page ? styles.active : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.page);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#profile"
                className={`${styles.mobileNavLink} ${activePage === 'profile' ? styles.active : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('profile');
                }}
              >
                PROFILE
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

