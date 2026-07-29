import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOrderWhatsApp: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderWhatsApp,
}) => {
  if (!isOpen) return null;

  const total = cartItems.reduce(
    (acc, item) => acc + (item.product.price ? item.product.price * item.quantity : 0),
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#f9f9f9] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 bg-[#000f2b] text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-2xl text-[#38bdf8]">
                shopping_bag
              </span>
              <div>
                <h2 className="font-['Manrope'] font-bold text-lg">Order Summary</h2>
                <p className="text-[11px] text-white/70">Review items before WhatsApp order</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 text-[#44474f]">
                <span className="material-symbols-outlined text-5xl text-[#c4c6d0] mb-3">
                  shopping_bag
                </span>
                <p className="font-bold text-[#000f2b] text-lg mb-1">Your summary is empty</p>
                <p className="text-xs text-[#74777f] mb-6">
                  Add 20L cans, 1L packs, or 5L pots to build your order.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#000f2b] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#001f5c] transition-colors cursor-pointer"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-[#e8e8e8]">
                  <span className="text-xs font-bold text-[#44474f] uppercase tracking-wider">
                    {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} Selected
                  </span>
                  <button
                    onClick={onClearCart}
                    className="text-xs text-red-600 font-semibold hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-white p-4 rounded-2xl border border-[#c4c6d0]/50 shadow-sm flex items-center gap-4"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain bg-[#f3f3f4] p-1 rounded-xl"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#000f2b] text-sm font-['Manrope'] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-[#006685] font-semibold mt-0.5">
                        {item.product.volume} • {item.product.price ? `₹${item.product.price} each` : 'Inquire on WhatsApp'}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 rounded-md bg-[#e8e8e8] text-[#000f2b] flex items-center justify-center font-bold text-xs hover:bg-[#c4c6d0] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 rounded-md bg-[#e8e8e8] text-[#000f2b] flex items-center justify-center font-bold text-xs hover:bg-[#c4c6d0] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-xs text-[#006685]">
                        {item.product.price ? `₹${item.product.price * item.quantity}` : 'Inquire'}
                      </p>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[10px] text-red-600 hover:underline mt-2 block cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Order Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-[#c4c6d0]">
              <div className="space-y-2 mb-4 text-xs">
                <div className="flex justify-between items-center text-sm font-extrabold text-[#000f2b] pt-1">
                  <span>Price / Rate</span>
                  <span className="text-base font-black text-[#006685]">
                    {total > 0 ? `₹${total}` : 'Inquire on WhatsApp'}
                  </span>
                </div>
              </div>

              <button
                onClick={onOrderWhatsApp}
                className="w-full py-3.5 bg-[#25D366] text-[#000f2b] hover:bg-[#1ebf58] rounded-full font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Order on WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
