import React from 'react';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: 'verified',
      title: 'ISO Certified',
      description: 'Exceeding international safety and quality standards in every batch.',
    },
    {
      icon: 'biotech',
      title: 'UV Purified',
      description: 'Advanced ultraviolet technology to ensure zero bacterial presence.',
    },
    {
      icon: 'schedule',
      title: 'Auto Refill',
      description: 'Smart subscription models that predict your water needs automatically.',
    },
    {
      icon: 'support_agent',
      title: '24/7 Support',
      description: 'A dedicated team ready to manage your bulk orders and inquiries.',
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-[#08244d] relative overflow-hidden">
      {/* Decorative SVG Blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.4,90.1,-15.8,88.4,-0.1C86.7,15.6,80.7,30.3,71.4,43.3C62.1,56.3,49.5,67.6,35.2,74.5C20.9,81.4,4.9,83.9,-11.2,81.4C-27.3,78.9,-43.5,71.4,-56.3,60.6C-69.1,49.8,-78.6,35.7,-82.7,20.4C-86.8,5.1,-85.5,-11.3,-79.8,-26.4C-74.1,-41.5,-64.1,-55.3,-51,-62.9C-37.9,-70.5,-21.8,-71.9,-6,-61.5C9.8,-51.1,44.7,-76.4,44.7,-76.4Z"
            fill="#ffffff"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal active">
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Why Global Leaders Trust Us
          </h2>
          <p className="text-base sm:text-lg text-[#768cbb] max-w-2xl mx-auto leading-relaxed">
            Providing a seamless hydration experience through technology, health-first filtration, and unmatched customer service.
          </p>
        </div>

        {/* Grid of 4 Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border border-white/10 hover:-translate-y-2 transition-all duration-300 group shadow-lg"
            >
              <span className="material-symbols-outlined text-[#14c7fe] text-4xl sm:text-5xl mb-4 sm:mb-6 block group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <h3 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#768cbb] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
