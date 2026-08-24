import React, { useState } from 'react';
import { CapsulePackSelector } from '../../components/capsules/CapsulePackSelector/CapsulePackSelector';
import type { Capsule, CapsulePackOption } from '../../types/capsule';
import { ShoppingCart, ArrowLeft, ShieldCheck, Sparkles, Box } from 'lucide-react';
import styles from './CapsuleDetailPage.module.css';

interface CapsuleDetailPageProps {
  capsule: Capsule;
  onBack?: () => void;
  onAddToCart?: (capsule: Capsule, pack: CapsulePackOption) => void;
}

export const CapsuleDetailPage: React.FC<CapsuleDetailPageProps> = ({
  capsule,
  onBack,
  onAddToCart,
}) => {
  const [selectedPack, setSelectedPack] = useState<CapsulePackOption>(
    capsule.packOptions[0]
  );

  const levelClass = styles[capsule.level] || styles.basic;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(capsule, selectedPack);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {/* Back navigation */}
        <button className={styles.backBtn} onClick={onBack}>
          <ArrowLeft size={18} />
          <span>VOLVER A CÁPSULAS</span>
        </button>

        <div className={`${styles.detailCard} ${levelClass}`}>
          {/* Left Column: Visual Artwork */}
          <div className={styles.visualCol}>
            <div className={styles.badgeTop}>
              <span className={styles.levelTag}>{capsule.level.toUpperCase()}</span>
              <span className={styles.badge}>{capsule.badge}</span>
            </div>

            <div className={styles.imageWrapper}>
              <svg className={styles.capsuleHeroSvg} viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="75" className={styles.glowBg} opacity="0.3" />
                <path d="M50 100 A50 50 0 0 1 150 100 Z" className={styles.capsuleTop} opacity="0.9" />
                <path d="M50 100 A50 50 0 0 0 150 100 Z" className={styles.capsuleBottom} opacity="0.85" />
                <rect x="44" y="96" width="112" height="8" rx="4" fill="#ffffff" />
                <circle cx="100" cy="100" r="6" fill="#ec4899" />
              </svg>
            </div>

            <div className={styles.guarantees}>
              <div className={styles.guaranteeItem}>
                <ShieldCheck size={16} />
                <span>100% Productos Oficiales</span>
              </div>
              <div className={styles.guaranteeItem}>
                <Sparkles size={16} />
                <span>Envío Protegido</span>
              </div>
              <div className={styles.guaranteeItem}>
                <Box size={16} />
                <span>Sin Duplicados en Packs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Pack Selector */}
          <div className={styles.infoCol}>
            <h1 className={styles.title}>{capsule.name}</h1>
            <p className={styles.tagline}>{capsule.tagline}</p>
            <p className={styles.description}>{capsule.description}</p>

            <div className={styles.valueBox}>
              <span className={styles.valueLabel}>RANGO DE VALOR CONTENIDO</span>
              <span className={styles.valueText}>{capsule.valueRange}</span>
            </div>

            {/* Pack Selector */}
            <CapsulePackSelector
              packOptions={capsule.packOptions}
              selectedPack={selectedPack}
              onSelectPack={setSelectedPack}
              rarityLevel={capsule.level}
            />

            {/* Summary & Price */}
            <div className={styles.priceSummary}>
              <div className={styles.priceBox}>
                <span className={styles.totalLabel}>TOTAL PACK ×{selectedPack.quantity}</span>
                <div className={styles.priceRow}>
                  <span className={styles.totalPrice}>{selectedPack.price.toFixed(2)}€</span>
                  {selectedPack.discountPercentage && (
                    <span className={styles.savingsText}>
                      ¡Ahorras un {selectedPack.discountPercentage}%!
                    </span>
                  )}
                </div>
              </div>

              <button className={styles.addToCartBtn} onClick={handleAddToCart}>
                <ShoppingCart size={18} />
                <span>AÑADIR AL CARRITO</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
