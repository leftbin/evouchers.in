export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroData {
  headline: string;
  subheadline: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface StatBarData {
  items: StatItem[];
}

export interface StepItem {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface StepFlowData {
  heading: string;
  subtitle?: string;
  steps: StepItem[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  accentColor?: string;
}

export interface FeatureGridData {
  heading: string;
  subtitle?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
}

export interface CtaData {
  headline: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  variant: "gradient" | "simple";
}

export interface TierItem {
  name: string;
  badge?: string;
  rate: string;
  rateLabel?: string;
  features: string[];
  highlighted?: boolean;
  highlightLabel?: string;
}

export interface TierCardsData {
  heading: string;
  subtitle?: string;
  tiers: TierItem[];
}

export interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

export interface TrustGridData {
  heading: string;
  subtitle?: string;
  items: TrustItem[];
  columns?: 2 | 3 | 4;
}

export interface TechBadge {
  name: string;
  icon?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormField {
  type: "text" | "email" | "tel" | "select" | "textarea";
  name: string;
  label: string;
  placeholder?: string;
  options?: string[];
}

export interface CodeSnippet {
  title?: string;
  language: string;
  code: string;
}
