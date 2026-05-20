import type { Metadata } from "next";
import {
  hero,
  integrationSteps,
  devFeatures,
  codeSnippet,
  settlement,
  cta,
} from "@/data/for-merchants";
import { HeroBanner } from "@/components/sections/hero-banner";
import { StepFlow } from "@/components/sections/step-flow";
import { CodeBlock } from "@/components/sections/code-block";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "eVoucher — For Merchants | Accept Payments. Grow Revenue.",
};

export default function ForMerchantsPage() {
  return (
    <>
      <HeroBanner {...hero} />
      <StepFlow {...integrationSteps} />
      <CodeBlock {...codeSnippet} features={devFeatures} />

      {/* Settlement & pricing — unique to for-merchants */}
      <section className="max-w-content mx-auto px-md md:px-xl py-4xl">
        <div className="grid md:grid-cols-2 gap-lg">
          <div className="rounded-2xl border border-outline-variant bg-surface-container p-xl">
            <span className="text-display-sm">🏦</span>
            <h3 className="text-title-lg text-white mt-sm">
              {settlement.bankTitle}
            </h3>
            <p className="text-body-md text-on-surface-variant mt-xs">
              {settlement.bankDescription}
            </p>
          </div>
          <div className="rounded-2xl border border-outline-variant bg-surface-container p-xl">
            <span className="text-display-sm">🏷️</span>
            <h3 className="text-title-lg text-white mt-sm">
              {settlement.pricingTitle}
            </h3>
            <p className="text-display-lg text-primary font-bold mt-sm">
              {settlement.pricingHighlight}
            </p>
            <p className="text-body-md text-on-surface-variant mt-xs">
              {settlement.pricingDescription}
            </p>
          </div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
