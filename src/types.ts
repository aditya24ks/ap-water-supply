export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  priceText?: string;
  image: string;
  badge?: string;
  category: string;
  volume: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image?: string;
  quote: string;
  rating: number;
}

export interface Location {
  id: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl?: string;
}
