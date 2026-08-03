import React from 'react';

interface FloatingWhatsAppProps {
  onClick?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onClick }) => {
  const whatsappUrl =
    'https://wa.me/8557000423?text=Hello%20AP%20Water%20Supply!%20👋%20I%20want%20to%20place%20an%20order.';

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center p-3.5 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1ebf58] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-white/30"
        aria-label="Order on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10" />

        <div className="flex items-center gap-2 px-1">
          <span className="material-symbols-outlined text-2xl font-bold">chat</span>
          <span className="hidden sm:inline-block font-bold text-xs uppercase tracking-wider text-[#000f2b] bg-white/90 px-2.5 py-1 rounded-full shadow-sm">
            WhatsApp Order
          </span>
        </div>
      </button>
    </div>
  );
};
