export interface Product {
  id: string;
  name: string;
  category: string;
  priceStart: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}