import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-28 bg-[#f9f9f9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image with floating badge */}
          <div className="reveal active">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-[36px] sm:rounded-[48px] overflow-hidden shadow-2xl border border-black/5">
                <img
                  alt="Premium water spring and bottles"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb06dyGmn7L0mnaQsh2HSDqGJlNQFQtew-RwVm03X2viUx3IGMuO5A27lrRQd38VyALQz_oKLRrXN_HjwIYLuicPevRcSpf1XyYpCuXm3CVsxam0BZwv4Q-JXA7M-7e25IHDr9dA_FXY9KmoqSxi1O7v2lD15hBvvRoYR2jz7lIjfHE2-YrX8tvPHO2qRV0be-tX06vJnjG60aoQM2r7nl7c1UM506sU8gIRQbkZFe17PGS4zpbwKNU_GzWTfKe7oEep4PF1lG81qF"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-36 h-36 sm:w-44 sm:h-44 bg-[#000f2b] rounded-full flex flex-col items-center justify-center text-center p-3 sm:p-4 border-4 sm:border-8 border-[#f9f9f9] shadow-2xl">
                <span className="text-3xl sm:text-5xl font-extrabold text-white leading-none font-['Manrope']">
                  4
                </span>
                <span className="text-[10px] sm:text-xs text-white font-semibold uppercase tracking-wider mt-1">
                  Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy and Feature Cards */}
          <div className="reveal active mt-6 lg:mt-0">
            <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000f2b] mb-6 leading-tight">
              Purity Redefined, <br />
              <span className="text-[#006685]">Quality Guaranteed</span>
            </h2>

            <p className="text-base sm:text-lg text-[#44474f] mb-8 sm:mb-10 leading-relaxed">
              For 4 years, AP Water Supply has been at the forefront of providing pure hydration in Jalandhar, merging advanced purification technology with the natural goodness of mineral-rich sources. Our commitment to your health is as clear as our water.
            </p>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#c4c6d0] hover:border-[#006685] bg-white transition-all duration-300 hover:shadow-md group">
                <div className="bg-[#e8e8e8] p-3 sm:p-4 rounded-2xl group-hover:bg-[#006685] transition-colors duration-300 shrink-0">
                  <span
                    className="material-symbols-outlined text-[#000f2b] group-hover:text-white text-2xl sm:text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    water_drop
                  </span>
                </div>
                <div>
                  <h3 className="font-['Manrope'] font-bold text-lg sm:text-2xl text-[#000f2b] mb-1">
                    Pure Mineral Water
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474f] leading-relaxed">
                    Untouched by humans, enriched with essential minerals for your wellness journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#c4c6d0] hover:border-[#006685] bg-white transition-all duration-300 hover:shadow-md group">
                <div className="bg-[#e8e8e8] p-3 sm:p-4 rounded-2xl group-hover:bg-[#006685] transition-colors duration-300 shrink-0">
                  <span
                    className="material-symbols-outlined text-[#000f2b] group-hover:text-white text-2xl sm:text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    local_shipping
                  </span>
                </div>
                <div>
                  <h3 className="font-['Manrope'] font-bold text-lg sm:text-2xl text-[#000f2b] mb-1">
                    Fast Delivery
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474f] leading-relaxed">
                    Our logistics fleet ensures your hydration is never interrupted, no matter the time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#c4c6d0] hover:border-[#006685] bg-white transition-all duration-300 hover:shadow-md group">
                <div className="bg-[#e8e8e8] p-3 sm:p-4 rounded-2xl group-hover:bg-[#006685] transition-colors duration-300 shrink-0">
                  <span
                    className="material-symbols-outlined text-[#000f2b] group-hover:text-white text-2xl sm:text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    payments
                  </span>
                </div>
                <div>
                  <h3 className="font-['Manrope'] font-bold text-lg sm:text-2xl text-[#000f2b] mb-1">
                    Affordable Pricing
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474f] leading-relaxed">
                    Premium quality water should be accessible. We offer the best value in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
