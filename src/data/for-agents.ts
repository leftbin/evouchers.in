import { EXTERNAL_LINKS } from "@/lib/constants";
import type {
  HeroData,
  TierCardsData,
  FeatureGridData,
  CtaData,
} from "@/types/content";

export const hero: HeroData = {
  headline: "Earn While You Sell",
  subheadline:
    "Become a voucher reseller and earn commissions on every sale. Buy vouchers at wholesale rates, sell at face value, and build a recurring income stream.",
  primaryCta: { label: "Become an Agent", href: EXTERNAL_LINKS.signUp },
  secondaryCta: { label: "See Commission Tiers", href: "#tiers" },
};

export const tiers: TierCardsData = {
  heading: "Commission Tiers",
  subtitle: "The more you sell, the more you earn",
  tiers: [
    {
      name: "Bronze",
      badge: "0–500 vouchers/month",
      rate: "1.5%",
      rateLabel: "per voucher sold",
      features: [
        "Basic inventory dashboard",
        "Email support",
        "Weekly commission payout",
      ],
    },
    {
      name: "Silver",
      badge: "500–2,000 vouchers/month",
      rate: "3%",
      rateLabel: "per voucher sold",
      features: [
        "Priority inventory allocation",
        "Chat & email support",
        "Bi-weekly commission payout",
      ],
    },
    {
      name: "Gold",
      badge: "2,000+ vouchers/month",
      rate: "5%",
      rateLabel: "per voucher sold",
      features: [
        "Dedicated account manager",
        "Phone, chat & email support",
        "Weekly commission payout",
        "Early access to new denominations",
      ],
      highlighted: true,
      highlightLabel: "Most Popular",
    },
  ],
};

export const agentFeatures: FeatureGridData = {
  heading: "Tools to Grow Your Business",
  subtitle: "Everything you need to sell vouchers efficiently",
  columns: 3,
  features: [
    {
      icon: "package",
      title: "Inventory Management",
      description:
        "Track your voucher stock in real time. Set low-stock alerts and auto-replenish thresholds to never miss a sale.",
    },
    {
      icon: "zap",
      title: "Quick-Sell Flow",
      description:
        "Generate and deliver vouchers to customers in seconds with our streamlined point-of-sale interface.",
    },
    {
      icon: "banknote",
      title: "Direct Cashin",
      description:
        "Accept cash from customers and load their wallets directly. Perfect for serving users without UPI access.",
    },
    {
      icon: "bar-chart-3",
      title: "Commission Tracking",
      description:
        "Monitor your earnings with detailed commission reports. Filter by date, denomination, and transaction status.",
    },
    {
      icon: "activity",
      title: "Real-Time Earnings",
      description:
        "Watch your commission balance grow with every sale. View daily, weekly, and monthly earnings at a glance.",
    },
  ],
};

export const calculatorConfig = {
  denominations: [100, 200, 500, 1000, 2000, 5000],
  defaultDenomination: 500,
  defaultVolume: 20,
  tiers: [
    { name: "Bronze", rate: 1.5 },
    { name: "Silver", rate: 3 },
    { name: "Gold", rate: 5 },
  ],
};

export const cta: CtaData = {
  headline: "Ready to start earning?",
  primaryCta: { label: "Apply as Agent", href: EXTERNAL_LINKS.signUp },
  secondaryCta: { label: "Contact Us", href: "/contact" },
  variant: "gradient",
};
