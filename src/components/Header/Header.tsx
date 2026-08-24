import React, { useState } from 'react';
import { User, ShoppingCart, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Gachapon', href: '#gachapon' },
    { label: 'Merch', href: '#merch' },
    { label: 'App', href: '#app' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo area */}
        <div className={styles.logoSection}>
          <a href="#home" className={styles.logoLink}>
            <span className={styles.logoText}>KATSU BOX</span>
            <span className={styles.subLogoText}>カツボックス - アニメグッズ & ガチャ</span>
          </a>
        </div>

        {/* Desktop Navigation Navigation Pill */}
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${activeNav === item.label ? styles.active : ''}`}
                  onClick={() => setActiveNav(item.label)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button className={styles.loginBtn}>
            <User size={16} />
            <span>Login</span>
          </button>
          <button className={styles.cartBtn}>
            <ShoppingCart size={16} />
            <span>Cart</span>
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
                  href={item.href}
                  className={`${styles.mobileNavLink} ${activeNav === item.label ? styles.active : ''}`}
                  onClick={() => {
                    setActiveNav(item.label);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
