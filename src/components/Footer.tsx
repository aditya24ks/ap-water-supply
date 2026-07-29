import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000f2b] w-full mt-auto text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-[1280px] mx-auto border-t border-white/10">
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <img
            alt="AP Water Supply Logo"
            className="h-10 sm:h-12 mb-6 grayscale invert object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHPMW2IZrXKZmsl12NPUia5JgOMv7ml9g98GZvIZEHsuZS2ivfOaruySzy_nVNxwoTnKjEYTXly1Qnjq7v5S_2xd4RQbgTvrCX95Z9VbBdBrOiwZH1kRcfGSqdLGW_bXumGJ4iC5NILlkrLmK8aNGICWUJ1PfZmHNEP7NAHmSYUMz5vNU7QdJ-X0en_W1p6fDsY4RTxkCcITHuCb7sE2F0t131SAHa5NqCyFGLXbrPoaRqM4Qr8vqHnZsqNZ-xDZsXiMzK6coY_nI7"
          />
          <p className="text-xl sm:text-2xl font-bold text-[#38bdf8] mb-3 font-['Manrope']">
            AP WATER SUPPLY
          </p>
          <p className="text-xs sm:text-sm text-[#b0c7f9] max-w-xs leading-relaxed">
            Dedicated to providing the highest quality natural mineral water to homes and offices with fast WhatsApp delivery.
          </p>
        </div>

        {/* Middle Links Grid */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-white text-sm uppercase tracking-wider mb-2 font-['Manrope']">
              Company
            </p>
            <a
              href="#about"
              className="text-xs sm:text-sm text-[#b0c7f9] hover:text-white hover:underline decoration-[#38bdf8] underline-offset-4 transition-all"
            >
              About Us
            </a>
            <a
              href="#why-us"
              className="text-xs sm:text-sm text-[#b0c7f9] hover:text-white hover:underline decoration-[#38bdf8] underline-offset-4 transition-all"
            >
              Purity Process
            </a>
            <a
              href="#products"
              className="text-xs sm:text-sm text-[#b0c7f9] hover:text-white hover:underline decoration-[#38bdf8] underline-offset-4 transition-all"
            >
              Water Catalog
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-white text-sm uppercase tracking-wider mb-2 font-['Manrope']">
              Support
            </p>
            <a
              href="#contact"
              className="text-xs sm:text-sm text-[#b0c7f9] hover:text-white hover:underline decoration-[#38bdf8] underline-offset-4 transition-all"
            >
              Express Delivery
            </a>
            <a
              href="#contact"
              className="text-xs sm:text-sm text-[#b0c7f9] hover:text-white hover:underline decoration-[#38bdf8] underline-offset-4 transition-all"
            >
              Bulk Orders
            </a>
            <a
              href="#contact"
              className="text-xs sm:text-sm text-[#b0c7f9] hover:text-white hover:underline decoration-[#38bdf8] underline-offset-4 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right WhatsApp Contact Section (Replaces Newsletter) */}
        <div className="flex flex-col items-start">
          <p className="font-bold text-white text-sm uppercase tracking-wider mb-4 font-['Manrope']">
            WhatsApp Contact
          </p>

          <a
            href="https://wa.me/919814601427?text=Hello%20AP%20Water%20Supply!%20👋%20I%20have%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#25D366] text-[#000f2b] font-extrabold rounded-full hover:bg-white transition-all shadow-md active:scale-95 text-xs uppercase tracking-wider mb-4 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            Chat on WhatsApp
          </a>

          <div className="space-y-3 text-xs text-[#b0c7f9]">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#38bdf8] text-base shrink-0 mt-0.5">
                call
              </span>
              <div>
                <span className="block font-semibold text-white">Phone Number:</span>
                <a href="tel:+919814601427" className="hover:text-white transition-colors">
                  +91 98146 01427
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#25D366] text-base shrink-0 mt-0.5">
                chat_bubble
              </span>
              <div>
                <span className="block font-semibold text-white">WhatsApp Number:</span>
                <a
                  href="https://wa.me/919814601427"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +91 98146 01427
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#38bdf8] text-base shrink-0 mt-0.5">
                location_on
              </span>
              <div>
                <span className="block font-semibold text-white">Business Address:</span>
                <p className="text-[#b0c7f9]">Jalandhar, Punjab, India</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#38bdf8] text-base shrink-0 mt-0.5">
                schedule
              </span>
              <div>
                <span className="block font-semibold text-white">Business Hours:</span>
                <p className="text-[#b0c7f9]">Mon - Sat: 7:00 AM - 9:00 PM</p>
                <p className="text-[#b0c7f9]">Sun: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=AP+Water+Supply+Jalandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#38bdf8] hover:text-white hover:underline transition-colors font-bold"
              >
                <span className="material-symbols-outlined text-base">map</span>
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 sm:py-8 text-center border-t border-white/5 px-4">
        <p className="text-xs sm:text-sm text-[#b0c7f9]">
          © 2024 AP Water Supply. Sourced naturally, delivered fresh on WhatsApp.
        </p>
      </div>
    </footer>
  );
};
