import React, { useState } from 'react';
import { CartItem, Product } from '../types';
import { PRODUCTS } from '../data/waterData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems?: CartItem[];
  onOrderSuccess?: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  orderItems,
  onOrderSuccess,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMode, setPaymentMode] = useState<string>('Cash on Delivery');

  // Single item fallback if orderItems is not passed or empty
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [singleQuantity, setSingleQuantity] = useState<number>(1);

  if (!isOpen) return null;

  const currentItemsToOrder: CartItem[] =
    orderItems && orderItems.length > 0
      ? orderItems
      : [
          {
            product: PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0],
            quantity: singleQuantity,
          },
        ];

  const totalAmount = currentItemsToOrder.reduce(
    (sum, item) => sum + (item.product.price ? item.product.price * item.quantity : 0),
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !phoneNumber || !deliveryAddress) {
      alert('Please fill in all required fields.');
      return;
    }

    // Format items list: • {Product Name} ({Volume}) × {Quantity}
    const itemsList = currentItemsToOrder
      .map(
        (item) =>
          `• ${item.product.name} (${item.product.volume}) × ${item.quantity}` +
          (item.product.price ? ` – ₹${item.product.price * item.quantity}` : ' – Inquire Price on WhatsApp')
      )
      .join('\n');

    const totalStr = totalAmount > 0 ? `₹${totalAmount}` : 'Inquire via WhatsApp';

    const whatsappText = `Hello AP Water Supply! 👋

I want to place an order / inquiry.

Payment Mode: ${paymentMode}

Customer Name: ${customerName}

Phone Number: ${phoneNumber}

Delivery Address:
${deliveryAddress}

Items Requested:
${itemsList}

Pricing: ${totalStr}

Please confirm my order and share best pricing details. Thank you!`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/8557000423?text=${encodedText}`;

    // Open WhatsApp URL in new window/tab
    window.open(whatsappUrl, '_blank');

    if (onOrderSuccess) {
      onOrderSuccess();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 border border-black/5 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#e8e8e8]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl font-bold">chat</span>
            </div>
            <div>
              <h3 className="font-['Manrope'] font-bold text-xl text-[#000f2b]">
                Order on WhatsApp
              </h3>
              <p className="text-xs text-[#44474f]">Instant Order Confirmation via WhatsApp</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#44474f] hover:bg-black/5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Items Summary Preview */}
          <div className="bg-[#f3f3f4] p-4 rounded-2xl border border-[#c4c6d0]/40">
            <p className="text-xs font-bold text-[#000f2b] uppercase tracking-wider mb-2">
              Items Ordered
            </p>

            {(!orderItems || orderItems.length === 0) && (
              <div className="mb-3 space-y-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {PRODUCTS.map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => setSelectedProductId(p.id)}
                      className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedProductId === p.id
                          ? 'border-[#006685] bg-[#006685]/10 font-bold'
                          : 'border-[#c4c6d0] hover:bg-black/5'
                      }`}
                    >
                      <p className="text-[11px] text-[#000f2b] font-['Manrope'] truncate">
                        {p.name}
                      </p>
                      <p className="text-[10px] text-[#006685] font-semibold">
                        {p.volume} • {p.price ? `₹${p.price}` : 'Inquire'}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-semibold text-[#44474f]">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSingleQuantity(Math.max(1, singleQuantity - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-[#c4c6d0] font-bold text-sm hover:bg-[#e8e8e8] cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold w-5 text-center text-[#000f2b]">
                      {singleQuantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSingleQuantity(singleQuantity + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-[#c4c6d0] font-bold text-sm hover:bg-[#e8e8e8] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-1.5 text-xs">
              {currentItemsToOrder.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center text-[#1a1c1c]">
                  <span className="font-semibold truncate max-w-[220px]">
                    • {item.product.name} ({item.product.volume}) × {item.quantity}
                  </span>
                  <span className="font-bold text-[#006685]">
                    {item.product.price ? `₹${item.product.price * item.quantity}` : 'Inquire'}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2 border-t border-[#c4c6d0]/50 font-extrabold text-sm text-[#000f2b]">
                <span>Rate / Price:</span>
                <span className="text-[#006685]">
                  {totalAmount > 0 ? `₹${totalAmount}` : 'Inquire on WhatsApp'}
                </span>
              </div>
            </div>
          </div>

          {/* Customer Name */}
          <div>
            <label className="block text-xs font-bold text-[#000f2b] uppercase mb-1">
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-2.5 rounded-xl border border-[#c4c6d0] text-xs focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] outline-none transition-all"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold text-[#000f2b] uppercase mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. 8557000423"
              className="w-full px-4 py-2.5 rounded-xl border border-[#c4c6d0] text-xs focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] outline-none transition-all"
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-bold text-[#000f2b] uppercase mb-1">
              Delivery Address <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={2}
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="House/Flat No., Building Name, Street, Landmark, Pincode"
              className="w-full px-4 py-2.5 rounded-xl border border-[#c4c6d0] text-xs focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] outline-none transition-all resize-none"
            />
          </div>

          {/* Payment Mode */}
          <div>
            <label className="block text-xs font-bold text-[#000f2b] uppercase mb-1">
              Payment Mode
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Cash on Delivery', 'Cash', 'UPI'].map((mode) => (
                <button
                  type="button"
                  key={mode}
                  onClick={() => setPaymentMode(mode)}
                  className={`py-2 px-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer border ${
                    paymentMode === mode
                      ? 'bg-[#000f2b] text-white border-[#000f2b] shadow-sm'
                      : 'bg-[#f3f3f4] text-[#44474f] border-[#c4c6d0] hover:bg-[#e8e8e8]'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#25D366] text-[#000f2b] hover:bg-[#1ebf58] rounded-full font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Send Order on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
