import React, { useState } from 'react';
import { useCart } from '../../context/useCart';
import { CreditCard, Smartphone, DollarSign, Lock, ShieldCheck, ArrowLeft, Loader2 } from 'lucide-react';
import styles from './CheckoutPage.module.css';

type PaymentMethod = 'credit_card' | 'bizum' | 'paypal';

interface CheckoutPageProps {
  onBackToCart?: () => void;
  onOrderSuccess?: (orderData: {
    orderId: string;
    items: any[];
    total: number;
    shippingInfo: {
      fullName: string;
      email: string;
      address: string;
      city: string;
      postalCode: string;
    };
    paymentMethod: PaymentMethod;
  }) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  onBackToCart,
  onOrderSuccess,
}) => {
  const { items, subtotal, totalCapsulesCount, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit_card');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName || !formData.email || !formData.address || !formData.city || !formData.postalCode) {
      setErrorMsg('Por favor, completa todos los campos de envío.');
      return;
    }

    if (!acceptedTerms) {
      setErrorMsg('Debes aceptar los términos y condiciones para continuar.');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing (1.5 seconds)
    setTimeout(() => {
      setIsProcessing(false);
      const generatedOrderId = `KB-${Math.floor(100000 + Math.random() * 900000)}`;

      const orderData = {
        orderId: generatedOrderId,
        items: [...items],
        total: subtotal,
        shippingInfo: { ...formData },
        paymentMethod,
      };

      clearCart();

      if (onOrderSuccess) {
        onOrderSuccess(orderData);
      }
    }, 1500);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {/* Back link */}
        <button className={styles.backBtn} onClick={onBackToCart}>
          <ArrowLeft size={18} />
          <span>VOLVER AL CARRITO</span>
        </button>

        <h1 className={styles.pageTitle}>FINALIZAR PEDIDO</h1>

        <div className={styles.layoutGrid}>
          {/* Left Form: Shipping & Payment */}
          <form className={styles.formCol} onSubmit={handleSubmit}>
            {/* Section 1: Shipping */}
            <div className={styles.cardSection}>
              <h2 className={styles.sectionTitle}>1. DATOS DE ENVÍO</h2>
              
              <div className={styles.formGroup}>
                <label>Nombre y Apellidos</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Ej. Akari Tanaka"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  placeholder="ejemplo@katsubox.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Dirección de Entrega</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Calle Cyberpunk 2077, 4º B"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Ciudad</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Madrid"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Código Postal</label>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="28001"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Demo Payment */}
            <div className={styles.cardSection}>
              <h2 className={styles.sectionTitle}>2. MÉTODO DE PAGO (DEMO)</h2>
              
              <div className={styles.paymentMethods}>
                <label
                  className={`${styles.paymentRadio} ${paymentMethod === 'credit_card' ? styles.active : ''}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="credit_card"
                    checked={paymentMethod === 'credit_card'}
                    onChange={() => setPaymentMethod('credit_card')}
                  />
                  <CreditCard size={20} className={styles.paymentIcon} />
                  <div className={styles.paymentInfo}>
                    <span className={styles.paymentName}>Tarjeta de Crédito Demo</span>
                    <span className={styles.paymentSub}>Visa / Mastercard de prueba</span>
                  </div>
                </label>

                <label
                  className={`${styles.paymentRadio} ${paymentMethod === 'bizum' ? styles.active : ''}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="bizum"
                    checked={paymentMethod === 'bizum'}
                    onChange={() => setPaymentMethod('bizum')}
                  />
                  <Smartphone size={20} className={styles.paymentIcon} />
                  <div className={styles.paymentInfo}>
                    <span className={styles.paymentName}>Bizum Demo</span>
                    <span className={styles.paymentSub}>Pago instantáneo móvil</span>
                  </div>
                </label>

                <label
                  className={`${styles.paymentRadio} ${paymentMethod === 'paypal' ? styles.active : ''}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                  />
                  <DollarSign size={20} className={styles.paymentIcon} />
                  <div className={styles.paymentInfo}>
                    <span className={styles.paymentName}>PayPal Demo</span>
                    <span className={styles.paymentSub}>Checkout rápido simulación</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && <div className={styles.errorBanner}>{errorMsg}</div>}

            {/* Checkbox */}
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              <span>Acepto las condiciones de compra y la política de privacidad de KATSU BOX.</span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isProcessing || items.length === 0}
            >
              {isProcessing ? (
                <>
                  <Loader2 size={20} className={styles.spinner} />
                  <span>PROCESANDO PAGO SEGURA...</span>
                </>
              ) : (
                <>
                  <Lock size={18} />
                  <span>CONFIRMAR Y PAGAR ({subtotal.toFixed(2)}€)</span>
                </>
              )}
            </button>
          </form>

          {/* Right Column: Order Summary */}
          <div className={styles.summaryCol}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>RESUMEN DEL PEDIDO</h3>

              <div className={styles.itemsList}>
                {items.map((item) => (
                  <div key={item.id} className={styles.summaryItem}>
                    <div className={styles.itemInfo}>
                      <span className={styles.itemName}>{item.capsule.name}</span>
                      <span className={styles.itemPack}>
                        Pack ×{item.packOption.quantity} ({item.quantity} {item.quantity === 1 ? 'pack' : 'packs'})
                      </span>
                    </div>
                    <span className={styles.itemPrice}>
                      {(item.packOption.price * item.quantity).toFixed(2)}€
                    </span>
                  </div>
                ))}
              </div>

              <div className={styles.divider} />

              <div className={styles.costRow}>
                <span>Cápsulas totales:</span>
                <span>{totalCapsulesCount} uds.</span>
              </div>
              <div className={styles.costRow}>
                <span>Envío:</span>
                <span className={styles.freeText}>GRATIS</span>
              </div>

              <div className={styles.divider} />

              <div className={styles.totalRow}>
                <span>TOTAL A PAGAR:</span>
                <span className={styles.totalValue}>{subtotal.toFixed(2)}€</span>
              </div>

              <div className={styles.securityNote}>
                <ShieldCheck size={18} />
                <span>Transacción cifrada y protegida por KATSU SHIELD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
