import { SUPPORT_EMAIL, MERCHANT_EMAIL } from "@/lib/constants";
import type { ContactFormField, FaqItem } from "@/types/content";

export const contactInfo = {
  headline: "Get in touch with our team",
  description:
    "Whether you have a question about features, pricing, integration, or anything else — our team is here to help.",
  channels: [
    { label: "General Support", icon: "✉️", value: SUPPORT_EMAIL },
    { label: "Merchant Inquiries", icon: "🏪", value: MERCHANT_EMAIL },
    { label: "Location", icon: "📍", value: "Bangalore, India" },
  ],
};

export const formFields: ContactFormField[] = [
  {
    type: "select",
    name: "inquiryType",
    label: "Inquiry Type",
    options: [
      "General Support",
      "Merchant Integration",
      "Agent Onboarding",
      "Technical Support",
    ],
  },
  {
    type: "text",
    name: "fullName",
    label: "Full Name",
    placeholder: "Your full name",
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "you@company.com",
  },
  {
    type: "tel",
    name: "phone",
    label: "Phone",
    placeholder: "+91 98765 43210",
  },
  {
    type: "textarea",
    name: "message",
    label: "Message",
    placeholder: "Tell us how we can help...",
  },
];

export const faq = {
  heading: "Frequently Asked Questions",
  subtitle: "Quick answers to common questions about eVoucher",
  items: [
    {
      question: "What is a digital voucher?",
      answer:
        "A digital voucher is a prepaid code — typically 16 digits — that holds a specific monetary value. You can purchase vouchers through our platform or receive them from agents. When you redeem a voucher code, the value is credited to your eVoucher wallet instantly, and you can use that balance to pay merchants, transfer to friends, or save for later.",
    },
    {
      question: "How do I add money to my wallet?",
      answer:
        "There are two ways to add money. First, you can use UPI: link any UPI-enabled bank account and transfer funds instantly to your wallet. Second, you can redeem a voucher code purchased from an authorized eVoucher agent or received as a gift. Both methods credit your wallet balance immediately.",
    },
    {
      question: "Is my money safe?",
      answer:
        "Yes. eVoucher operates under RBI's Prepaid Payment Instrument guidelines, which require us to safeguard user funds in escrow accounts with scheduled banks. All data is encrypted end-to-end using TLS 1.3 in transit and AES-256 at rest. Critical payment flows run on Temporal workflows with exactly-once execution guarantees, so your funds are never lost even if a system failure occurs mid-transaction.",
    },
    {
      question: "How do merchants integrate?",
      answer:
        "Merchants integrate through our RESTful JSON API. After creating a merchant account and receiving API keys, you can start testing in our sandbox environment with simulated wallets. The integration involves a single payment endpoint and a webhook listener for payment confirmations. Most merchants go live within a day. We provide detailed documentation, code samples, and a Postman collection to accelerate integration.",
    },
    {
      question: "How do I become an agent?",
      answer:
        "Sign up for an agent account on app.evouchers.in and complete business verification. Once approved, you can purchase vouchers at wholesale rates and sell them at face value, earning commissions on every sale. You start at the Bronze tier (1.5% commission) and can progress to Silver (3%) and Gold (5%) as your monthly sales volume grows. Payouts are processed weekly or bi-weekly depending on your tier.",
    },
  ] as FaqItem[],
};
