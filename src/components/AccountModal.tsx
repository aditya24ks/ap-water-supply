import React, { useState } from 'react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-sm bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 border border-black/5">
        <div className="flex justify-between items-center mb-6 pb-3 border-b border-[#e8e8e8]">
          <h3 className="font-['Manrope'] font-bold text-xl text-[#000f2b]">
            {isLoggedIn ? 'Customer Account' : 'Sign In'}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#44474f] hover:bg-black/5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {isLoggedIn ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-[#f3f3f4] rounded-2xl">
              <div className="w-12 h-12 bg-[#000f2b] text-white rounded-full flex items-center justify-center font-bold">
                AP
              </div>
              <div>
                <p className="font-bold text-[#000f2b] text-sm">Customer Member</p>
                <p className="text-xs text-[#44474f]">{email || 'apwatersupply7@gmail.com'}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2.5 bg-[#f9f9f9] rounded-xl">
                <span className="text-[#44474f]">Active Subscription</span>
                <span className="font-bold text-[#006685]">20L Can (Bi-weekly)</span>
              </div>
              <div className="flex justify-between p-2.5 bg-[#f9f9f9] rounded-xl">
                <span className="text-[#44474f]">Next Scheduled Refill</span>
                <span className="font-bold text-[#000f2b]">Tomorrow, 10:00 AM</span>
              </div>
            </div>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="w-full py-2.5 border border-red-200 text-red-600 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-red-50 transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#000f2b] uppercase mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-[#c4c6d0] text-xs focus:ring-2 focus:ring-[#006685] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#000f2b] uppercase mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-[#c4c6d0] text-xs focus:ring-2 focus:ring-[#006685] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#000f2b] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#001f5c] transition-colors shadow-md cursor-pointer"
            >
              Sign In to AP Water
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
