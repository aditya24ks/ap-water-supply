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
            href="https://wa.me/8557000423?text=Hello%20AP%20Water%20Supply!%20👋%20I%20have%20an%20inquiry."
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
                <a href="tel:+8557000423" className="hover:text-white transition-colors">
                  8557000423
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
                  href="https://wa.me/8557000423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  8557000423
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

            <div className="flex items-start gap-2.5">
              <svg className="w-4 h-4 fill-[#e1306c] shrink-0 mt-0.5" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <div>
                <span className="block font-semibold text-white">Instagram:</span>
                <a
                  href="https://www.instagram.com/apwatersupply?utm_source=qr&igsh=MWpwZDVnMHRzYnk2MQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @apwatersupply
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.google.com/maps/place/31%C2%B009'33.3%22N+75%C2%B012'48.3%22E/@31.1591079,75.2124374,783m/data=!3m1!1e3!4m4!3m3!8m2!3d31.1592483!4d75.2134269!5m1!1e2!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D"
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
