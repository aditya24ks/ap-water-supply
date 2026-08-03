import React, { useState } from 'react';
import { LOCATIONS } from '../data/waterData';

export const Contact: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 md:py-28 bg-[#e8e8e8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left Column: Contact details */}
          <div className="reveal active flex flex-col justify-between">
            <div>
              <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000f2b] mb-6">
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg text-[#44474f] mb-8 sm:mb-12 leading-relaxed">
                Have questions about bulk orders or custom plans? Our team is ready to assist you in choosing the best hydration path for your needs.
              </p>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="bg-[#000f2b] text-white p-3 sm:p-4 rounded-2xl group-hover:bg-[#006685] transition-colors duration-300">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-[#44474f] font-bold uppercase tracking-widest">
                      Call Us
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-[#000f2b]">
                      {selectedLocation.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="bg-[#000f2b] text-white p-3 sm:p-4 rounded-2xl group-hover:bg-[#006685] transition-colors duration-300">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-[#44474f] font-bold uppercase tracking-widest">
                      Email Us
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-[#000f2b]">
                      {selectedLocation.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="bg-[#000f2b] text-white p-3 sm:p-4 rounded-2xl group-hover:bg-[#006685] transition-colors duration-300">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-[#44474f] font-bold uppercase tracking-widest">
                      Visit Us
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-[#000f2b]">
                      {selectedLocation.address}
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/apwatersupply?utm_source=qr&igsh=MWpwZDVnMHRzYnk2MQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
                >
                  <div className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-3 sm:p-4 rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-[#44474f] font-bold uppercase tracking-widest">
                      Follow Us On Instagram
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-[#000f2b] group-hover:text-[#bc1888] transition-colors">
                      @apwatersupply
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Location Switcher */}
            <div className="mt-8 pt-6 border-t border-black/10">
              <p className="text-xs font-bold uppercase text-[#44474f] tracking-wider mb-3">
                Select Regional Branch:
              </p>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      selectedLocation.id === loc.id
                        ? 'bg-[#000f2b] text-white shadow-md'
                        : 'bg-white text-[#000f2b] hover:bg-black/5'
                    }`}
                  >
                    {loc.city}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map & Inquiry Form */}
          <div className="reveal active h-full min-h-[420px] flex flex-col gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] shadow-xl border border-black/5 flex-grow">
              <h3 className="text-xl font-bold text-[#000f2b] mb-4 font-['Manrope']">
                Send Us a Message
              </h3>

              {formSubmitted ? (
                <div className="bg-[#14c7fe]/20 text-[#000f2b] p-6 rounded-2xl text-center my-8">
                  <span className="material-symbols-outlined text-4xl text-[#006685] mb-2">
                    check_circle
                  </span>
                  <p className="font-bold text-lg">Thank You!</p>
                  <p className="text-sm text-[#44474f]">
                    Your message has been received. Our team in {selectedLocation.city} will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#44474f] uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#f9f9f9] border border-[#c4c6d0] text-sm focus:outline-none focus:ring-2 focus:ring-[#006685]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#44474f] uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#f9f9f9] border border-[#c4c6d0] text-sm focus:outline-none focus:ring-2 focus:ring-[#006685]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#44474f] uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#f9f9f9] border border-[#c4c6d0] text-sm focus:outline-none focus:ring-2 focus:ring-[#006685]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#44474f] uppercase mb-1">
                      Message / Inquiry
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="How can we assist you today?"
                      className="w-full px-4 py-3 rounded-xl bg-[#f9f9f9] border border-[#c4c6d0] text-sm focus:outline-none focus:ring-2 focus:ring-[#006685]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#000f2b] text-white rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-[#001f5c] transition-colors shadow-md cursor-pointer"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Map Visual Box */}
            <div className="w-full h-44 rounded-3xl overflow-hidden shadow-lg border border-black/5 relative bg-[#e2e2e2] flex items-center justify-center">
              <div className="text-center p-4">
                <span className="material-symbols-outlined text-3xl text-[#006685] mb-1">
                  map
                </span>
                <p className="font-bold text-[#000f2b] text-sm font-['Manrope']">
                  Interactive Service Map — {selectedLocation.city}
                </p>
                <p className="text-xs text-[#44474f]">
                  Serving {selectedLocation.city} & surrounding metro area within 30 miles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
