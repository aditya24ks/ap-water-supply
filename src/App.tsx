import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Products } from './components/Products';
import { DeliveryProcess } from './components/DeliveryProcess';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { OrderModal } from './components/OrderModal';
import { AccountModal } from './components/AccountModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartItem, Product } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [modalOrderItems, setModalOrderItems] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Intersection Observer for scroll animations (.reveal)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} × ${quantity} to Order Summary!`);
  };

  const handleOrderWhatsAppDirect = (product: Product, quantity: number) => {
    setModalOrderItems([{ product, quantity }]);
    setIsOrderModalOpen(true);
  };

  const handleOrderWhatsAppFromCart = () => {
    if (cartItems.length === 0) return;
    setModalOrderItems(cartItems);
    setIsCartOpen(false);
    setIsOrderModalOpen(true);
  };

  const handleOpenGeneralOrderModal = () => {
    setModalOrderItems(cartItems.length > 0 ? cartItems : []);
    setIsOrderModalOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderSuccess = () => {
    showToast('Redirecting to WhatsApp to send your order! 📱');
    handleClearCart();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] font-['Work_Sans'] selection:bg-[#25D366] selection:text-[#000f2b]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 bg-[#000f2b] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#25D366]/50 animate-bounce">
          <span className="material-symbols-outlined text-[#25D366]">chat</span>
          <p className="text-xs sm:text-sm font-semibold">{toastMessage}</p>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderModal={handleOpenGeneralOrderModal}
        onOpenAccountModal={() => setIsAccountModalOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="flex-grow">
        <Hero
          onStartSubscription={handleOpenGeneralOrderModal}
          onViewProducts={() => scrollToSection('products')}
        />
        <About />
        <WhyUs />
        <Products
          onAddToCart={handleAddToCart}
          onOrderWhatsApp={handleOrderWhatsAppDirect}
        />
        <DeliveryProcess />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp onClick={handleOpenGeneralOrderModal} />

      {/* Modals & Slide-over Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderWhatsApp={handleOrderWhatsAppFromCart}
      />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        orderItems={modalOrderItems}
        onOrderSuccess={handleOrderSuccess}
      />

      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
      />
    </div>
  );
}
