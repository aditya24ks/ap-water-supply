import React from 'react';

export const DeliveryProcess: React.FC = () => {
  const steps = [
    {
      icon: 'shopping_bag',
      title: 'Order',
      description: 'Choose your plan on the app or website.',
    },
    {
      icon: 'precision_manufacturing',
      title: 'Processing',
      description: 'Quality check and automated bottling.',
    },
    {
      icon: 'local_shipping',
      title: 'Delivery',
      description: 'Rapid dispatch to your precise location.',
    },
    {
      icon: 'celebration',
      title: 'Enjoy',
      description: 'Drink the purest water and stay healthy.',
    },
  ];

  return (
    <section id="delivery" className="py-16 md:py-28 bg-[#f3f3f4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-center">
        <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000f2b] mb-12 sm:mb-20 reveal active">
          Our Simple 4-Step Process
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12">
          {/* Connector Line (visible on md+) */}
          <div className="absolute top-10 left-12 right-12 h-1 bg-[#c4c6d0] -z-0 hidden md:block" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 relative z-10 reveal active w-full max-w-sm md:max-w-none bg-white md:bg-transparent p-6 md:p-0 rounded-3xl md:rounded-none border md:border-none border-black/5 shadow-sm md:shadow-none"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl border-4 border-[#006685] transition-transform duration-300 hover:scale-110">
                <span className="material-symbols-outlined text-[#006685] text-2xl sm:text-3xl">
                  {step.icon}
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-[#000f2b] mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#44474f] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
