export interface Plan {
  id: string;
  name: string;
  badge?: string;
  subtitle: string;
  priceMonthly: number;
  priceQuarterly?: number;
  periodText: string;
  isFeatured?: boolean;
  features: { text: string; included: boolean; highlight?: boolean }[];
  ctaText: string;
}

export interface Pillar {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
  details?: {
    overview: string;
    bulletPoints: string[];
    deliverable: string;
  };
}

export interface StudentResult {
  id: string;
  name: string;
  role: string;
  plan: string;
  category: 'emagrecimento' | 'hipertrofia' | 'reabilitacao';
  metric: string;
  metricColor: string;
  testimonial: string;
  image: string;
  rating: number;
  timeframe: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface AssessmentData {
  goal: string;
  experience: string;
  frequency: string;
  trainingLocation: string;
  injuries: string;
  name: string;
  whatsapp: string;
  email: string;
}
