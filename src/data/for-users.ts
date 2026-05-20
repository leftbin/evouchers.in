import { EXTERNAL_LINKS } from "@/lib/constants";
import type {
  HeroData,
  FeatureGridData,
  TrustGridData,
} from "@/types/content";

export const hero: HeroData = {
  headline: "Your Wallet, Your Way",
  subheadline:
    "Load money via UPI, redeem vouchers, pay merchants, earn Stars, and play free games — all from one beautiful app.",
  primaryCta: { label: "Create Your Wallet", href: EXTERNAL_LINKS.signUp },
  secondaryCta: { label: "Learn More", href: "#features" },
};

export const features: FeatureGridData = {
  heading: "Everything in One App",
  subtitle: "A wallet experience designed for the way India pays",
  columns: 3,
  features: [
    {
      icon: "wallet",
      title: "Wallet Management",
      description:
        "View your balance, add money via UPI, and manage your wallet from a single dashboard. Real-time balance updates after every transaction.",
    },
    {
      icon: "ticket",
      title: "Voucher Redemption",
      description:
        "Enter a 16-digit voucher code to instantly credit your wallet. Buy vouchers for friends or redeem ones you've received.",
    },
    {
      icon: "history",
      title: "Transaction History",
      description:
        "Filter and search your complete payment history. Download statements and track every rupee in and out of your wallet.",
    },
    {
      icon: "star",
      title: "Star Rewards & Tiers",
      description:
        "Earn Stars on every transaction and climb from Bronze to Diamond tier. Higher tiers unlock better cashback rates and exclusive rewards.",
      accentColor: "gold",
    },
    {
      icon: "gamepad-2",
      title: "Free Mini-Games",
      description:
        "Play scratch cards and spin the lucky wheel to win bonus Stars. Complete daily missions and streaks for extra rewards.",
      accentColor: "gold",
    },
    {
      icon: "users",
      title: "Referral Bonuses",
      description:
        "Invite friends and earn Stars when they sign up and make their first transaction. Track your referrals on the leaderboard.",
    },
  ],
};

export const security: TrustGridData = {
  heading: "Your Money Is Safe",
  subtitle: "Enterprise-grade security for every user",
  columns: 4,
  items: [
    {
      icon: "shield",
      title: "RBI PPI Compliant",
      description:
        "We operate under RBI's Prepaid Payment Instrument guidelines, ensuring your funds are protected by regulation.",
    },
    {
      icon: "id-card",
      title: "Decentro KYC",
      description:
        "Quick and secure identity verification through our partnership with Decentro. Verify once, transact seamlessly.",
    },
    {
      icon: "lock",
      title: "End-to-End Encryption",
      description:
        "All data in transit and at rest is encrypted using industry-standard protocols. Your information stays private.",
    },
    {
      icon: "fingerprint",
      title: "Biometric Auth",
      description:
        "Use your fingerprint or face ID to secure your wallet. No one can access your funds without your biometric approval.",
    },
  ],
};

export const downloadCta = {
  headline: "Start using eVoucher today",
  description:
    "Native mobile apps coming soon. Use the full-featured web app at app.evouchers.in on any device.",
  webHref: EXTERNAL_LINKS.signUp,
  webLabel: "Or use the web version →",
};
