import type { Metadata } from "next";
import {
  hero,
  tiers,
  agentFeatures,
  calculatorConfig,
  cta,
} from "@/data/for-agents";
import { HeroBanner } from "@/components/sections/hero-banner";
import { TierCards } from "@/components/sections/tier-cards";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { EarningsCalc } from "@/components/sections/earnings-calc";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "eVoucher — For Agents | Earn While You Sell",
};

export default function ForAgentsPage() {
  return (
    <>
      <HeroBanner {...hero} />
      <TierCards {...tiers} />
      <FeatureGrid {...agentFeatures} columns={2} />
      <EarningsCalc {...calculatorConfig} />
      <CtaBand {...cta} />
    </>
  );
}
