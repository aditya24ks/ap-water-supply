import React from 'react';

interface HeroProps {
  onStartSubscription: () => void;
  onViewProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartSubscription, onViewProducts }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#08244d]"
    >
      {/* Hero Water Splash Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        {/* Subtle dark gradient overlay to ensure crystal clear white text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000f2b]/60 via-[#000f2b]/25 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 w-full relative z-10 my-auto grid lg:grid-cols-12 gap-8 items-end min-h-[70vh]">
        {/* Left Hero Content */}
        <div className="lg:col-span-8 text-left my-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#000f2b]/40 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/30 shadow-sm">
            <span
              className="material-symbols-outlined text-[#38bdf8] text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
            <span className="text-xs sm:text-sm text-white font-bold uppercase tracking-widest font-['Work_Sans']">
              100% Natural Spring Water
            </span>
          </div>

          {/* Heading matching exact text layout - ALL WHITE */}
          <h1 className="font-['Manrope'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white drop-shadow-lg">
            <span>Pure Mineral Water</span>
            <br />
            <span>Delivered To Your</span>
            <br />
            <span>Doorstep</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/95 font-medium mb-8 sm:mb-10 max-w-xl leading-relaxed font-['Work_Sans'] drop-shadow">
            Experience the crisp, refreshing taste of premium hydration. Sourced from the purest underground springs and delivered with care to anywhere in Jalandhar, home or office.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center">
            <button
              onClick={onStartSubscription}
              className="px-8 sm:px-10 py-4 bg-[#000f2b] text-white rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#001f5c] active:scale-95 text-center cursor-pointer border border-white/20"
            >
              Start Subscription
            </button>
            <button
              onClick={onViewProducts}
              className="px-8 sm:px-10 py-4 border-2 border-white text-white bg-white/15 backdrop-blur-md rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-[#000f2b] text-center cursor-pointer shadow-md"
            >
              View Products
            </button>
          </div>

          {/* Customer Reviews & Avatars */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex -space-x-3 sm:-space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-[#e8e8e8] overflow-hidden shadow-md">
                <img
                  alt="Happy customer"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5WQMnSOsnCQEBX-hytGJ-Z8LC6WNrQLcvhqEEYgfE8jrZ9MONh5LM1Sll5DCAiLO1Jqa45nsUPLjEP-etDp6Bv--AEh6d11OB2NkhSMceRPtoCZPX5CxWtsbYsMadrtUVXFa83YrRiO7UQE8GFwGWPRSEBteua_jlyBLu3P2W6Rnjay5TIEQzTut495HlvgS1lHOUb0Bxdut7XHBXMXqAsZYSR2sYkKhys_gi5mRqDjnkrJ2w9BJeViW8Octhc1i5MzRJsSOxwMyO"
                />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-[#e8e8e8] overflow-hidden shadow-md">
                <img
                  alt="Female executive"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6SitpzuEMtpR9Tfq-F0sJan_mMTNhjWYMrsJtFIf4mUy1dfgFr7Evjy33sst0Lnj_5dp7AN_ZxArCt4Y-a6EBBkRM4AlBaQjJBVrzvT9VYtiyd1fW9H7bbulGhxw5KPCQ3D1zIA80I08Zh0qJ69ou4ECfADimB671CaVAKgZZwLpVqLKTYNBbCF7U12rNQ3v0hPBfvtRQLnXacIxt9OJ_w0tOH1x3sSmpDJ0blgLL_yfAGij4BxqO5Uz6hoxmJPvfwhLiPO3f4Y-"
                />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-[#e8e8e8] overflow-hidden shadow-md">
                <img
                  alt="Smiling customer"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb-PWcYvJY5ezTdVcsdhNYvigxen3M3gVATezdQBh9lCLwNRsrZaUGuM8_QMKYugGmKHVI2FFZ7WoyuMOidMJZ93aWpp9cXli-oMLqYh7DP3LmFDJhqBl0u1ElRkFt3kcShv5HVhb4lN4wnzfqqHCFk47OHopNIqQOBuhlzLjvO88YVPGcMF8zPCiwrG_B6LPdmIWJoX0I51-qYxprql0LKlS7MEoETXlkLeCqAGQudSipUo1IeuJslMJ-ZYeWM0ed7FW2KjhPKy3z"
                />
              </div>
            </div>

            <div>
              <div className="flex text-amber-300 drop-shadow">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-base sm:text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm font-bold text-white mt-0.5 drop-shadow">
                5000+ Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Bottom Floating Glass Card */}
        <div className="lg:col-span-4 flex justify-end items-end w-full mt-6 lg:mt-0">
          <div className="bg-white/60 backdrop-blur-xl p-6 sm:p-7 rounded-[28px] shadow-2xl border border-white/60 w-full sm:w-auto min-w-[280px]">
            <div className="flex items-center gap-4">
              <div className="bg-[#005f7d] p-3.5 rounded-2xl shadow-md text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl sm:text-3xl">
                  bolt
                </span>
              </div>
              <div>
                <p className="font-bold text-[#000f2b] text-base sm:text-lg font-['Manrope']">
                  Express Delivery
                </p>
                <p className="text-xs sm:text-sm text-[#44505c] font-medium">
                  Under 90 Minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


