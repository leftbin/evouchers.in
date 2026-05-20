import { EXTERNAL_LINKS } from "@/lib/constants";
import type {
  HeroData,
  StatItem,
  StepFlowData,
  FeatureGridData,
  CtaData,
} from "@/types/content";

export const hero: HeroData = {
  headline: "Your Digital Wallet for India's Connected Economy",
  subheadline:
    "Buy vouchers. Load your wallet. Pay merchants. Earn rewards. One platform for India's digital payment future.",
  primaryCta: { label: "Get Started Free", href: EXTERNAL_LINKS.signUp },
  secondaryCta: { label: "For Merchants", href: "/for-merchants" },
};

export const stats: StatItem[] = [
  { value: 10000, suffix: "+", label: "Active Users" },
  { value: 100, suffix: "+", label: "Merchants" },
  { value: 50, prefix: "₹", suffix: "Cr+", label: "Processed" },
];

export const howItWorks: StepFlowData = {
  heading: "How It Works",
  subtitle: "Get started in three simple steps",
  steps: [
    {
      number: 1,
      icon: "smartphone",
      title: "Create Account",
      description:
        "Sign up with your phone number and complete quick KYC verification powered by Decentro.",
    },
    {
      number: 2,
      icon: "landmark",
      title: "Load Your Wallet",
      description:
        "Add money instantly via UPI, redeem 16-digit voucher codes, or receive payments from friends.",
    },
    {
      number: 3,
      icon: "gamepad-2",
      title: "Pay & Play",
      description:
        "Pay merchants, transfer to friends, and earn Stars through free mini-games and daily missions.",
    },
  ],
};

export const benefits: FeatureGridData = {
  heading: "Why eVoucher?",
  subtitle: "Everything you need in a modern digital wallet",
  columns: 3,
  features: [
    {
      icon: "zap",
      title: "Instant UPI Funding",
      description:
        "Load your wallet in seconds using any UPI app. No waiting, no hassle — funds appear immediately.",
    },
    {
      icon: "ticket",
      title: "16-Digit Voucher Codes",
      description:
        "Purchase or receive prepaid voucher codes and redeem them directly into your wallet balance.",
    },
    {
      icon: "gamepad-2",
      title: "Free Mini-Games & Rewards",
      description:
        "Spin the wheel, scratch cards, and complete missions to earn Stars and unlock real rewards.",
      accentColor: "gold",
    },
    {
      icon: "code",
      title: "Merchant Payment API",
      description:
        "Developers can integrate our RESTful API to accept wallet payments with webhook notifications.",
    },
    {
      icon: "shield-check",
      title: "RBI PPI Compliant",
      description:
        "Fully compliant with RBI's Prepaid Payment Instrument guidelines for maximum regulatory safety.",
    },
    {
      icon: "lock",
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption, HMAC-signed webhooks, and FF1 voucher encryption protect every transaction.",
    },
  ],
};

export const gamification = {
  headline: "Play. Earn. Win.",
  description:
    "Every transaction earns you Stars. Collect Stars to climb reward tiers — from Bronze to Diamond. Unlock free scratch cards, spin the lucky wheel, and complete daily missions for bonus rewards.",
  games: [
    "Scratch Cards",
    "Spin the Wheel",
    "Daily Missions",
    "Star Rewards",
  ],
  ctaLabel: "Start Earning Stars",
  ctaHref: EXTERNAL_LINKS.signUp,
};

export const cta: CtaData = {
  headline: "Ready to transform your payments?",
  primaryCta: { label: "Get Started Free", href: EXTERNAL_LINKS.signUp },
  secondaryCta: { label: "Talk to Sales", href: "/contact" },
  variant: "gradient",
};
