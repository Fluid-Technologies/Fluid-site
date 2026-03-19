import { LucideIcon } from 'lucide-react';

export interface LocalizedString {
  en: string;
  fr: string;
  pt: string;
}

export interface Benefit {
  title: string;
  desc: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface HubLanguageContent {
  title: string;
  subtitle: string;
  cta: string;
  introTitle: string;
  introText: string[];
  discoveryText: string;
  categoriesTitle: string;
  whyTitle: string;
  benefits: Benefit[];
  processTitle: string;
  processSteps: ProcessStep[];
  pricingTitle: string;
  pricingText: string;
  pricingModels: string[];
  testimonials: Testimonial[];
  faqTitle: string;
  faqs: FAQ[];
  finalCta: string;
  finalCtaSub: string;
  finalCtaButton: string;
}

export interface CategoryLanguageContent {
  title: string;
  subtitle: string;
  desc: string;
}

export interface ServiceSummary {
  id: string;
  en: string;
  fr: string;
  pt: string;
}

export interface ConsultingCategory {
  icon: LucideIcon;
  en: CategoryLanguageContent;
  fr: CategoryLanguageContent;
  pt: CategoryLanguageContent;
  services: ServiceSummary[];
}

export interface ReviewArea {
  title: string;
  desc: string;
}

export interface ServiceLanguageContent {
  title: string;
  subtitle: string;
  desc: string;
  problemTitle: string;
  problemText: string;
  solutionTitle: string;
  reviewAreas: ReviewArea[];
  processSteps: ProcessStep[];
  pricingTitle: string;
  pricingModels: string[];
}

export interface ProductLink {
  en: string;
  fr: string;
  pt: string;
  href: string;
}

export interface ConsultingService {
  icon: LucideIcon;
  productLink?: ProductLink;
  en: ServiceLanguageContent;
  fr: ServiceLanguageContent;
  pt: ServiceLanguageContent;
}

export interface ConsultingData {
  hub: {
    en: HubLanguageContent;
    fr: HubLanguageContent;
    pt: HubLanguageContent;
  };
  categories: {
    [key: string]: ConsultingCategory;
  };
  services: {
    [key: string]: ConsultingService;
  };
}
