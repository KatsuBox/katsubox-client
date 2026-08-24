import React from 'react';
import styles from './Banner.module.css';

export const Banner: React.FC = () => {
  return (
    <section className={styles.bannerSection} id="home">
      <div className={styles.bannerContainer}>
        {/* Left Capsule Artwork */}
        <div className={styles.characterLeft}>
          <svg className={styles.svgPlaceholder} viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="80" fill="url(#capsuleCyanGlow)" opacity="0.3"/>
            {/* Capsule Shell */}
            <path d="M60 100 A40 40 0 0 1 140 100 Z" fill="#06b6d4" opacity="0.8" />
            <path d="M60 100 A40 40 0 0 0 140 100 Z" fill="#0891b2" opacity="0.9" />
            <rect x="55" y="96" width="90" height="8" rx="4" fill="#ffffff" />
            <circle cx="100" cy="100" r="6" fill="#ec4899" />
            <text x="50%" y="85%" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="bold" fontFamily="Audiowide">BASIC CAPSULE</text>
            <defs>
              <radialGradient id="capsuleCyanGlow">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Center Banner Content */}
        <div className={styles.centerContent}>
          <div className={styles.badge}>✦ KATSU CAPSULES MVP ✦</div>
          <h1 className={styles.title}>
            DISCOVER YOUR NEXT<br />
            <span className={styles.highlightTitle}>ANIME TREASURE</span>
          </h1>
          <p className={styles.subtitle}>
            Cápsulas de colección con figuras y merchandising de anime de valor exclusivo.
          </p>
          
          <a href="#capsules" className={styles.ctaButton}>
            DESCUBRIR CÁPSULAS
          </a>
        </div>

        {/* Right Capsule Artwork */}
        <div className={styles.characterRight}>
          <svg className={styles.svgPlaceholder} viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="80" fill="url(#capsulePurpleGlow)" opacity="0.3"/>
            {/* Capsule Shell */}
            <path d="M60 100 A40 40 0 0 1 140 100 Z" fill="#eab308" opacity="0.9" />
            <path d="M60 100 A40 40 0 0 0 140 100 Z" fill="#a855f7" opacity="0.8" />
            <rect x="55" y="96" width="90" height="8" rx="4" fill="#ffffff" />
            <circle cx="100" cy="100" r="6" fill="#06b6d4" />
            <text x="50%" y="85%" textAnchor="middle" fill="#eab308" fontSize="12" fontWeight="bold" fontFamily="Audiowide">SSR CAPSULE</text>
            <defs>
              <radialGradient id="capsulePurpleGlow">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};
