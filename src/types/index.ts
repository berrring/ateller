export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  features: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  duration: string;
  indicativePrice: string;
  startingPrice: number;
  benefits: string[];
  recommendedFor: string;
  certifications?: string[];
  galleryImages: string[];
}

export interface Project {
  id: string;
  title: string;
  vehicle: string;
  year: number;
  category: 'ppf' | 'keramik' | 'lackkorrektur' | 'interior' | 'supercar';
  categoryLabel: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
  servicesPerformed: string[];
  duration: string;
  finish: string;
  clientFeedback?: {
    quote: string;
    author: string;
    location: string;
  };
  gallery: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  category: string;
  targetVehicles: string;
  priceFrom: number;
  duration: string;
  popular?: boolean;
  highlightText?: string;
  inclusions: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  vehicle: string;
  service: string;
  rating: number;
  date: string;
  verified: boolean;
}
