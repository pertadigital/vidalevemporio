export interface Product {
  name: string;
  price: number;
  oldPrice?: number;
  badge?: 'novo' | 'popular' | 'oferta';
  category: 'chas' | 'temperos' | 'suplementos' | 'graos';
  emoji: string;
  description: string;
}

export const products: Product[] = [
  {
    name: 'Chá de Camomila Orgânico',
    price: 18.90,
    badge: 'popular',
    category: 'chas',
    emoji: '🌼',
    description: 'Calmante natural para noites tranquilas',
  },
  {
    name: 'Cúrcuma em Pó',
    price: 24.90,
    oldPrice: 32.00,
    badge: 'oferta',
    category: 'temperos',
    emoji: '✨',
    description: 'Anti-inflamatório natural direto da terra',
  },
  {
    name: 'Óleo de Coco Extra Virgem',
    price: 38.90,
    badge: 'popular',
    category: 'suplementos',
    emoji: '🥥',
    description: 'Puro e prensado a frio, mil e uma utilidades',
  },
  {
    name: 'Granola Artesanal',
    price: 22.50,
    badge: 'novo',
    category: 'graos',
    emoji: '🥣',
    description: 'Castanhas, aveia e mel — sem conservantes',
  },
  {
    name: 'Spirulina em Cápsulas',
    price: 45.90,
    category: 'suplementos',
    emoji: '💊',
    description: 'Superalimento rico em proteínas e vitaminas',
  },
  {
    name: 'Mix de Castanhas Premium',
    price: 34.90,
    oldPrice: 42.00,
    badge: 'oferta',
    category: 'graos',
    emoji: '🌰',
    description: 'Castanha-do-pará, caju, amêndoa e nozes',
  },
  {
    name: 'Chá Verde Premium',
    price: 21.90,
    category: 'chas',
    emoji: '🍵',
    description: 'Energia natural e antioxidantes poderosos',
  },
  {
    name: 'Linhaça Dourada',
    price: 14.90,
    badge: 'novo',
    category: 'graos',
    emoji: '🌾',
    description: 'Fonte de ômega-3 e fibras para o dia a dia',
  },
];

export const categoryGradients: Record<Product['category'], string> = {
  chas: 'from-emerald-900/80 to-teal-800/60',
  temperos: 'from-amber-900/80 to-orange-800/60',
  suplementos: 'from-blue-900/80 to-indigo-800/60',
  graos: 'from-yellow-900/80 to-amber-800/60',
};
