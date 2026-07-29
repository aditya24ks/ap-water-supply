import React from 'react';
import { TESTIMONIALS } from '../data/waterData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-28 bg-[#f9f9f9] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal active">
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000f2b] mb-4">
            What Our Clients Say
          </h2>
          <div className="flex justify-center gap-1 text-[#14c7fe]">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-lg sm:text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 sm:p-10 rounded-[28px] sm:rounded-[40px] reveal active flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <div className="mb-6">
                  <h4 className="font-bold text-[#000f2b] font-['Manrope'] text-lg sm:text-xl">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#006685] font-semibold mt-0.5">
                    {item.role}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#44474f] italic leading-relaxed">
                  {item.quote}
                </p>
              </div>

              <div className="flex text-[#006685] mt-6 pt-4 border-t border-black/5">
                {[...Array(item.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
