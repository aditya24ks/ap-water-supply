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
