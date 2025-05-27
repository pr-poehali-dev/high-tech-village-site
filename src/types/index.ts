export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface House {
  title: string;
  price: string;
  image: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
}
