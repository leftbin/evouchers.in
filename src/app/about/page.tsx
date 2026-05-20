import type { Metadata } from "next";
import { hero, compliance, security, techStack, cta } from "@/data/about";
import { HeroBanner } from "@/components/sections/hero-banner";
import { TrustGrid } from "@/components/sections/trust-grid";
import { TechBadges } from "@/components/sections/tech-badges";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "eVoucher — About | India's Next-Generation Payment Platform",
};

export default function AboutPage() {
  return (
    <>
      <HeroBanner {...hero} />
      <TrustGrid {...compliance} columns={3} />
      <TrustGrid {...security} columns={2} />
      <TechBadges {...techStack} />
      <CtaBand {...cta} />
    </>
  );
}
