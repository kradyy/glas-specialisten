import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Anpassat Glas', href: '#products' },
  { label: 'Glasdesign', href: '#stainless' },
  { label: 'Accessoarer', href: '#handrails' },
  { label: 'Speciella Projekt', href: '#balconies' },
  { label: 'Vindskydd', href: '#windscreens' },
  { label: 'Inspiration', href: '#inspiration' },
];

const CATEGORIES = ['Anpassat Glas', 'Rostfritt Glas', 'Glas Design', 'Alu Modern', 'Vindskydd'];
const ADJECTIVES = ['Premium', 'Nordic', 'Vista', 'Pure', 'Classic'];
const BADGES = ['Storsäljare', 'Nyhet', 'Kampanj', 'Lagerrensning'];

// Generate 30 mock products with Swedish names
export const PRODUCTS: Product[] = Array.from({ length: 30 }).map((_, i) => {
  const category = CATEGORIES[i % CATEGORIES.length];
  const adjective = ADJECTIVES[i % ADJECTIVES.length];
  return {
    id: `prod-${i}`,
    name: `${category} ${adjective} ${i + 100}`,
    category: category === 'Anpassat Glas' ? 'Aluminium & Glas' : category,
    priceStart: 1495 + (i * 150),
    // Use public path for shopping.png so it works in production
    image: '/shopping.png',
    badge: i % 5 === 0 ? BADGES[i % BADGES.length] : undefined,
    rating: 4.5 + (Math.random() * 0.5),
    reviews: Math.floor(Math.random() * 200) + 10,
  };
});

export const USP_FEATURES = [
  {
    title: "Svensk Kvalitet",
    desc: "Designat och tillverkat i Sverige för nordiskt klimat.",
    icon: "ShieldCheck"
  },
  {
    title: "Måttanpassat",
    desc: "Skräddarsys exakt efter dina mått i vår fabrik.",
    icon: "Ruler"
  },
  {
    title: "Enkel Montering",
    desc: "Förmonterade delar och tydliga videogruider ingår.",
    icon: "Hammer"
  },
  {
    title: "Fri Frakt",
    desc: "Gratis hemleverans på alla ordrar över 5 000 kr.",
    icon: "Truck"
  }
];