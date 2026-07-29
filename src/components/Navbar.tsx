import React, { useState, useEffect } from 'react';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenOrderModal: () => void;
  onOpenAccountModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenOrderModal,
  onOpenAccountModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section spy
      const sections = ['home', 'products', 'delivery', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Delivery', href: '#delivery', id: 'delivery' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#000f2b]/95 backdrop-blur-xl border-b border-white/15 shadow-lg py-3'
            : 'bg-[#000f2b]/90 backdrop-blur-xl border-b border-white/10 py-4'
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto">
          {/* Logo & Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img
              alt="AP Water Supply Logo"
              className="h-9 sm:h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHPMW2IZrXKZmsl12NPUia5JgOMv7ml9g98GZvIZEHsuZS2ivfOaruySzy_nVNxwoTnKjEYTXly1Qnjq7v5S_2xd4RQbgTvrCX95Z9VbBdBrOiwZH1kRcfGSqdLGW_bXumGJ4iC5NILlkrLmK8aNGICWUJ1PfZmHNEP7NAHmSYUMz5vNU7QdJ-X0en_W1p6fDsY4RTxkCcITHuCb7sE2F0t131SAHa5NqCyFGLXbrPoaRqM4Qr8vqHnZsqNZ-xDZsXiMzK6coY_nI7"
            />
            <span className="hidden sm:inline-block text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white font-['Manrope']">
              AP WATER SUPPLY
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs md:text-sm uppercase tracking-wider font-semibold transition-colors duration-200 pb-1 ${
                    isActive
                      ? 'text-[#38bdf8] border-b-2 border-[#38bdf8]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onOpenOrderModal}
              className="hidden sm:flex items-center gap-2 px-5 sm:px-6 py-2.5 bg-[#38bdf8] text-[#000f2b] hover:bg-white rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              Order Now
            </button>

            <div className="flex items-center gap-1 sm:gap-2">
              {/* Shopping Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2 rounded-full text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="View Shopping Cart"
              >
                <span className="material-symbols-outlined text-2xl leading-none">
                  shopping_cart
                </span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#38bdf8] text-[#000f2b] text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#000f2b] shadow-sm animate-pulse">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* User Account Button */}
              <button
                onClick={onOpenAccountModal}
                className="p-2 rounded-full text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="User Profile"
              >
                <span className="material-symbols-outlined text-2xl leading-none">
                  person
                </span>
              </button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-[65px] left-0 right-0 bg-[#000f2b] border-b border-white/20 shadow-2xl p-6 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`py-2 px-4 rounded-xl text-sm font-semibold tracking-wider uppercase transition-colors ${
                      isActive
                        ? 'bg-[#38bdf8]/20 text-[#38bdf8]'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-white/15 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrderModal();
                  }}
                  className="w-full py-3 bg-[#38bdf8] text-[#000f2b] rounded-full text-xs font-bold uppercase tracking-widest text-center shadow-md active:scale-98"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
