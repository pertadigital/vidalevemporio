export interface Testimonial {
  name: string;
  text: string;
  product: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Maria Fernanda',
    text: 'Comecei a tomar o chá de camomila antes de dormir e minha qualidade de sono melhorou demais. Produto fresco e cheiroso!',
    product: 'Chá de Camomila Orgânico',
    stars: 5,
  },
  {
    name: 'Carlos Eduardo',
    text: 'A granola artesanal virou item obrigatório no café da manhã aqui em casa. As crianças adoram e eu fico tranquilo sabendo que é natural.',
    product: 'Granola Artesanal',
    stars: 5,
  },
  {
    name: 'Ana Beatriz',
    text: 'O mix de castanhas é perfeito pro lanche da tarde. Qualidade impecável e o atendimento pelo WhatsApp é super rápido.',
    product: 'Mix de Castanhas Premium',
    stars: 5,
  },
];
