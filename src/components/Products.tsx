import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/waterData';

interface ProductsProps {
  onAddToCart: (product: Product, quantity: number) => void;
  onOrderWhatsApp: (product: Product, quantity: number) => void;
}

export const Products: React.FC<ProductsProps> = ({ onAddToCart, onOrderWhatsApp }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const categories = ['All', 'Can', 'Bottles', 'Pot', 'Cups'];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const getQuantity = (id: string) => quantities[id] || 1;

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleAddToCart = (product: Product) => {
    const qty = getQuantity(product.id);
    onAddToCart(product, qty);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  const handleOrderWhatsApp = (product: Product) => {
    const qty = getQuantity(product.id);
    onOrderWhatsApp(product, qty);
  };

  return (
    <section id="products" className="py-16 md:py-28 bg-[#f9f9f9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 reveal active gap-6">
          <div>
            <span className="text-xs sm:text-sm text-[#006685] font-bold uppercase tracking-widest mb-2 sm:mb-4 block">
              Our Catalog
            </span>
            <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000f2b] leading-tight">
              Hydration For Every Occasion
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#000f2b] text-white shadow-md'
                    : 'bg-[#e8e8e8] text-[#44474f] hover:bg-[#c4c6d0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product) => {
            const isJustAdded = addedProductId === product.id;
            const currentQty = getQuantity(product.id);

            return (
              <div key={product.id} className="group reveal active flex flex-col h-full">
                {/* Image Card Container */}
                <div className="bg-[#f3f3f4] rounded-[32px] sm:rounded-[40px] mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 relative overflow-hidden flex items-center justify-center border border-black/5 aspect-[4/3] sm:h-80">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    src={product.image}
                  />
                  {product.badge && (
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-[#000f2b] text-white px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md z-10">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Card Info */}
                <div className="px-2 sm:px-4 flex flex-col flex-grow">
                  <h3 className="font-['Manrope'] font-bold text-[#000f2b] text-xl sm:text-2xl mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474f] mb-4 sm:mb-6 leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  {/* Price & Quantity Selector */}
                  <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#e8e8e8]">
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-xs font-bold text-[#006685] uppercase tracking-wider mb-1">
                        {product.volume}
                      </span>
                      {product.price ? (
                        <span className="text-xl sm:text-2xl font-extrabold text-[#000f2b] font-['Manrope']">
                          ₹{product.price}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/15 text-[#000f2b] font-extrabold text-xs sm:text-sm rounded-full border border-[#25D366]/40">
                          <span className="material-symbols-outlined text-sm text-[#25D366]">chat</span>
                          {product.priceText || 'Inquire on WhatsApp'}
                        </span>
                      )}
                    </div>

                    {/* Quantity Selector +/- */}
                    <div className="flex items-center gap-2 bg-[#f3f3f4] p-1.5 rounded-2xl border border-[#c4c6d0]/40 shadow-inner">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="w-8 h-8 rounded-xl bg-white text-[#000f2b] flex items-center justify-center font-extrabold text-sm shadow-sm hover:bg-[#e8e8e8] active:scale-95 transition-all cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="text-sm font-bold w-6 text-center text-[#000f2b]">
                        {currentQty}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="w-8 h-8 rounded-xl bg-white text-[#000f2b] flex items-center justify-center font-extrabold text-sm shadow-sm hover:bg-[#e8e8e8] active:scale-95 transition-all cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2.5 items-center">
                    <button
                      onClick={() => handleOrderWhatsApp(product)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-[#25D366] text-[#000f2b] hover:bg-[#1ebf58] rounded-full font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer active:scale-95"
                    >
                      <span className="material-symbols-outlined text-lg">chat</span>
                      Order on WhatsApp
                    </button>

                    <button
                      onClick={() => handleAddToCart(product)}
                      title="Add to Order Summary"
                      className={`p-3.5 rounded-full font-semibold transition-all duration-300 shadow-md cursor-pointer shrink-0 ${
                        isJustAdded
                          ? 'bg-[#14c7fe] text-[#000f2b] scale-105'
                          : 'bg-[#000f2b] text-white hover:bg-[#001f5c]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg leading-none">
                        {isJustAdded ? 'check' : 'add_shopping_cart'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
