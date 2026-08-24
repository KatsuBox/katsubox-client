import React from 'react';
import styles from './Banner.module.css';

export const Banner: React.FC = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        {/* Left Side Characters Decorative Image / Illustration */}
        <div className={styles.characterLeft}>
          <svg className={styles.svgPlaceholder} viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="80" fill="url(#leftGlow)" opacity="0.3"/>
            <path d="M60 140 Q100 40 140 140" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round" />
            <circle cx="80" cy="90" r="12" fill="#ec4899" />
            <circle cx="120" cy="90" r="12" fill="#a855f7" />
            <text x="50%" y="80%" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">SAILOR & GOKU</text>
            <defs>
              <radialGradient id="leftGlow">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Center Banner Content */}
        <div className={styles.centerContent}>
          <div className={styles.sparklesTop}>✦ ✧ ✦</div>
          <h1 className={styles.title}>
            SPIN & COLLECT<br />
            <span className={styles.highlightTitle}>ACROSS THE MULTIVERSE!</span>
          </h1>
          <div className={styles.sparklesBottom}>✦ ✧ ✦</div>
          
          <button className={styles.ctaButton}>
            START YOUR ADVENTURE!
          </button>
        </div>

        {/* Right Side Character Decorative Image / Illustration */}
        <div className={styles.characterRight}>
          <svg className={styles.svgPlaceholder} viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="80" fill="url(#rightGlow)" opacity="0.3"/>
            <path d="M50 150 Q100 30 150 150" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" />
            <circle cx="100" cy="85" r="16" fill="#eab308" />
            <text x="50%" y="80%" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">LUFFY</text>
            <defs>
              <radialGradient id="rightGlow">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};
