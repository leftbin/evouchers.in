import { EXTERNAL_LINKS } from "@/lib/constants";
import type {
  HeroData,
  TrustGridData,
  CtaData,
  TechBadge,
} from "@/types/content";

export const hero: HeroData = {
  headline: "India's Next-Generation Payment Platform",
  subheadline:
    "We are building the most user-friendly digital voucher and wallet platform for India — combining secure prepaid instruments, gamified rewards, and a developer-first merchant API.",
  primaryCta: { label: "Get Started", href: EXTERNAL_LINKS.signUp },
  secondaryCta: { label: "Contact Us", href: "/contact" },
};

export const compliance: TrustGridData = {
  heading: "Regulatory Compliance",
  subtitle: "Built to meet India's highest financial standards",
  columns: 3,
  items: [
    {
      icon: "shield",
      title: "RBI PPI Compliance",
      description:
        "eVoucher operates as a Prepaid Payment Instrument under RBI guidelines. All user wallets adhere to KYC-tiered balance limits, transaction caps, and fund-safeguarding norms mandated by the Reserve Bank of India.",
    },
    {
      icon: "id-card",
      title: "Decentro KYC Partnership",
      description:
        "We partner with Decentro for seamless identity verification. Users complete minimum or full KYC through Aadhaar-based e-KYC, PAN validation, and video verification — fast, paperless, and fully auditable.",
    },
    {
      icon: "message-square",
      title: "TRAI DLT Compliance",
      description:
        "All transactional and promotional SMS are sent through TRAI-registered DLT routes. Our messaging infrastructure ensures template-approved delivery, consent management, and full regulatory traceability.",
    },
  ],
};

export const security: TrustGridData = {
  heading: "Security Architecture",
  subtitle: "Multiple layers of protection for every transaction",
  columns: 2,
  items: [
    {
      icon: "lock",
      title: "End-to-End Encryption",
      description:
        "All data in transit uses TLS 1.3. Sensitive data at rest is encrypted with AES-256. API keys, tokens, and credentials are stored in dedicated secret management infrastructure.",
    },
    {
      icon: "fingerprint",
      title: "HMAC-Signed Webhooks",
      description:
        "Every webhook payload is signed with HMAC-SHA256 using per-merchant secrets. Merchants can verify the signature to ensure payload authenticity and prevent replay attacks.",
    },
    {
      icon: "key",
      title: "FF1 Voucher Encryption",
      description:
        "Voucher codes are encrypted using the FF1 format-preserving encryption algorithm. Codes remain in a human-readable 16-digit format while being cryptographically secure at rest.",
    },
    {
      icon: "refresh-cw",
      title: "Temporal Workflow Durability",
      description:
        "Critical payment workflows run on Temporal, ensuring exactly-once execution semantics. If a step fails mid-process, it retries automatically without duplicate charges or lost funds.",
    },
  ],
};

export const techStack = {
  heading: "Built by Engineers, Not Committees",
  subtitle:
    "Our platform is built on a modern, cloud-native stack designed for reliability, scalability, and developer productivity.",
  badges: [
    { name: "Kubernetes" },
    { name: "PostgreSQL" },
    { name: "Temporal" },
    { name: "Auth0" },
    { name: "Next.js" },
    { name: "gRPC" },
  ] as TechBadge[],
};

export const cta: CtaData = {
  headline: "Get Started with eVoucher",
  primaryCta: { label: "Get Started", href: EXTERNAL_LINKS.signUp },
  secondaryCta: { label: "Contact Us", href: "/contact" },
  variant: "simple",
};
