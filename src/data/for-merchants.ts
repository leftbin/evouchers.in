import { EXTERNAL_LINKS } from "@/lib/constants";
import type {
  HeroData,
  StepFlowData,
  FeatureItem,
  CtaData,
  CodeSnippet,
} from "@/types/content";

export const hero: HeroData = {
  headline: "Accept Payments. Grow Revenue.",
  subheadline:
    "Integrate our payment API in minutes. Accept wallet payments from thousands of eVoucher users with simple REST endpoints and real-time webhook notifications.",
  primaryCta: {
    label: "Start Accepting Payments",
    href: EXTERNAL_LINKS.signUp,
  },
  secondaryCta: { label: "View API Docs", href: EXTERNAL_LINKS.apiDocs },
};

export const integrationSteps: StepFlowData = {
  heading: "Go Live in Three Steps",
  subtitle: "From sign-up to accepting payments in minutes",
  steps: [
    {
      number: 1,
      icon: "user-plus",
      title: "Sign Up",
      description:
        "Create a merchant account and complete business verification. We'll review and approve your application within 24 hours.",
    },
    {
      number: 2,
      icon: "key",
      title: "Get API Keys",
      description:
        "Access your sandbox and production API keys from the merchant dashboard. Start testing with our sandbox environment immediately.",
    },
    {
      number: 3,
      icon: "credit-card",
      title: "Accept Payments",
      description:
        "Integrate the payment endpoint, configure webhooks, and start accepting wallet payments from eVoucher users.",
    },
  ],
};

export const codeSnippet: { snippet: CodeSnippet } = {
  snippet: {
    title: "Create a Payment",
    language: "bash",
    code: `curl -X POST https://api.evouchers.in/v1/payments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 15000,
    "currency": "INR",
    "description": "Order #1234",
    "merchant_order_id": "ord_abc123",
    "webhook_url": "https://yoursite.com/webhooks/evoucher"
  }'`,
  },
};

export const devFeatures: FeatureItem[] = [
  {
    icon: "code",
    title: "RESTful JSON API",
    description:
      "Standard REST endpoints with JSON request and response bodies. Comprehensive error codes and pagination support.",
  },
  {
    icon: "bell",
    title: "Webhook Events",
    description:
      "Receive real-time notifications for payment confirmations, refunds, and settlement events via configurable webhooks.",
  },
  {
    icon: "fingerprint",
    title: "HMAC Signatures",
    description:
      "Every webhook is signed with HMAC-SHA256 so you can verify authenticity and prevent tampering.",
  },
  {
    icon: "flask-conical",
    title: "Sandbox Environment",
    description:
      "Full-featured sandbox with test wallets and simulated payments. Develop and test without touching real money.",
  },
  {
    icon: "key",
    title: "Test & Production Keys",
    description:
      "Separate API keys for sandbox and production. Switch environments with a single key change — no code modifications.",
  },
];

export const settlement = {
  bankTitle: "T+2 Settlement",
  bankDescription:
    "Funds are settled to your bank account within two business days. Track settlement status in real-time from your dashboard.",
  pricingTitle: "Transaction Fee",
  pricingHighlight: "2%",
  pricingDescription:
    "A flat 2% fee per successful transaction. No setup fees, no monthly charges, no minimum volume requirements.",
};

export const cta: CtaData = {
  headline: "Ready to accept payments?",
  primaryCta: {
    label: "Create Merchant Account",
    href: EXTERNAL_LINKS.signUp,
  },
  secondaryCta: { label: "Talk to Sales", href: "/contact" },
  variant: "gradient",
};
