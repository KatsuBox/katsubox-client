import React from 'react';
import { Twitch, Facebook, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const footerLinks = ['Home', 'Gachapon', 'Merch', 'App', 'Login', 'Cart'];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Side Logo */}
        <div className={styles.logoSection}>
          <span className={styles.logoText}>KATSU BOX</span>
        </div>

        {/* Center Links */}
        <nav className={styles.navLinks}>
          {footerLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={styles.link}>
              {link}
            </a>
          ))}
        </nav>

        {/* Right Side Social Icons & Copyright */}
        <div className={styles.rightSection}>
          <div className={styles.socialIcons}>
            <a href="#twitch" className={styles.iconLink} aria-label="Twitch">
              <Twitch size={16} />
            </a>
            <a href="#facebook" className={styles.iconLink} aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#instagram" className={styles.iconLink} aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#tiktok" className={styles.iconLink} aria-label="TikTok">
              <span className={styles.tiktokText}>d</span>
            </a>
          </div>

          <span className={styles.copyright}>© Copyright</span>
        </div>
      </div>
    </footer>
  );
};
