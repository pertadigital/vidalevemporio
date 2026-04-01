export interface Category {
  name: string;
  slug: string;
  emoji: string;
  description: string;
  gradient: string;
  count: number;
}

export const categories: Category[] = [
  {
    name: 'Chás',
    slug: 'chas',
    emoji: '🍵',
    description: 'Infusões naturais para corpo e mente',
    gradient: 'from-emerald-800 to-teal-900',
    count: 12,
  },
  {
    name: 'Temperos',
    slug: 'temperos',
    emoji: '🌿',
    description: 'Sabor e saúde na sua cozinha',
    gradient: 'from-amber-800 to-orange-900',
    count: 18,
  },
  {
    name: 'Suplementos',
    slug: 'suplementos',
    emoji: '💪',
    description: 'Reforço natural para o seu dia',
    gradient: 'from-blue-800 to-indigo-900',
    count: 8,
  },
  {
    name: 'Grãos',
    slug: 'graos',
    emoji: '🌾',
    description: 'Nutrição pura direto da natureza',
    gradient: 'from-yellow-800 to-amber-900',
    count: 15,
  },
];
