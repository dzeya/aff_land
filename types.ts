import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  age: number;
  role?: string;
  avatar?: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Persona {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}