import { Product, Testimonial, Location } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-20l',
    name: 'Premium 20L Can',
    description: 'Perfect for home and corporate offices.',
    priceText: 'Inquire on WhatsApp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChcCzDsqrQXPD21w0kzTxoEXRl-6HtXnxfgEo5K99u9aWtvWqYrCB38mcnB6uUHXwP-5ThoSugwkds8N8a3VyqYouHBO_R_fTUVU3Hli2Vrj0PD3ouWcQxHs_x5y5veC1q59nf4TLsNiPJ-FxoJUEX6TiRXolfFUEnQof_F_4PXsdKklzyypCMXilBaiSkNW0APPH62jWJ5qGraRAucvNMYOll9tz7L3lNNbRYZ41cen5xRfAPcl3iAf2tiE-nt0qw-OlbTKl9PbtZ',
    badge: 'Most Popular',
    category: 'Can',
    volume: '20 Liters'
  },
  {
    id: 'prod-300ml-pack',
    name: 'Compact 300ml Bottle',
    description: 'Ideal size for events, conferences, parties & guest catering.',
    priceText: 'Inquire on WhatsApp',
    image: '/images/whatsapp-300ml-handheld.jpeg',
    badge: 'Event Favorite',
    category: 'Bottles',
    volume: '300 ml'
  },
  {
    id: 'prod-500ml-pack',
    name: 'Handy 500ml Bottle',
    description: 'Perfect for daily fitness, outdoor travel & personal hydration.',
    priceText: 'Inquire on WhatsApp',
    image: '/images/whatsapp-500ml-single.jpeg',
    badge: 'Best Seller',
    category: 'Bottles',
    volume: '500 ml'
  },
  {
    id: 'prod-1l-pack',
    name: 'Pack of 12 (1L)',
    description: 'On-the-go hydration for active lifestyles.',
    priceText: 'Inquire on WhatsApp',
    image: '/images/whatsapp-bottles-blue.jpeg',
    badge: 'Pack of 12',
    category: 'Bottles',
    volume: '12 x 1 Liter'
  },
  {
    id: 'prod-5l-pot',
    name: 'Family 5L Pot',
    description: 'The ultimate kitchen companion for cooking.',
    priceText: 'Inquire on WhatsApp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBuGTVW161LFTREbo_uJI5H1NS0F-e2gqF31eQNn4R9Z0vhtA7qKvFJn_j2OxumPpRI6bvSoWqu3MW95We99-dkw5BLjfstkSz7vbbu4Vgv49GKepHVLfMvW4_zdTVCu-n-Ltsyffm1r3IISblplPoWArfnHREXa42bVbIsz9xeZquRxHnwffgjX-co-gxBjcxfJEY5BSN4YKeK7yIQ4Bs6FonrdHTFu3X6A53UE7QEw1TRCZFuO3_vfseNO82YqB3ZCJHQ1jHJDF2',
    category: 'Pot',
    volume: '5 Liters'
  },
  {
    id: 'prod-disposable-cup',
    name: 'Disposable Water Glasses',
    description: 'Hygienic sealed water cups for meetings, functions & bulk catering.',
    priceText: 'Inquire on WhatsApp',
    image: '/images/disposable-water-cup.png',
    badge: 'Bulk Catering',
    category: 'Cups',
    volume: '200 ml Glasses'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sukhdeep Kaur',
    role: 'Operations Manager',
    quote: '"AP Water Supply has transformed our office culture. The water is consistently pure, and the delivery drivers are always professional and on time."',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Harshdeep Singh',
    role: 'Fitness Coach',
    quote: '"Hydration is key for my clients. I recommend AP Water Supply for its high mineral content and the convenience of their subscription model."',
    rating: 4
  },
  {
    id: 'test-3',
    name: 'Aditya Kumar',
    role: 'Homeowner',
    quote: '"Best service in the city. I\'ve used several suppliers over the years, but none match the purity and reliability of AP Water."',
    rating: 5
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'loc-main',
    city: 'Main Branch',
    address: 'Model Town, Jalandhar, Punjab',
    phone: '+91 98146 01427',
    email: 'contact@apwater.com'
  },
  {
    id: 'loc-north',
    city: 'North Sector',
    address: 'Rama Mandi, Jalandhar, Punjab',
    phone: '+91 98146 01427',
    email: 'north@apwater.com'
  },
  {
    id: 'loc-south',
    city: 'South Hub',
    address: 'Urban Estate Phase 2, Jalandhar, Punjab',
    phone: '+91 98146 01427',
    email: 'south@apwater.com'
  }
];
