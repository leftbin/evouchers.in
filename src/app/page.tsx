import type { Metadata } from "next";
import { hero, stats, howItWorks, benefits, gamification, cta } from "@/data/home";
import { HeroBanner } from "@/components/sections/hero-banner";
import { StatBar } from "@/components/sections/stat-bar";
import { StepFlow } from "@/components/sections/step-flow";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { Star, Gift, Target, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "eVoucher — Your Digital Wallet for India's Connected Economy",
};

const gameIcons = [Star, Gift, Target, Trophy];

export default function HomePage() {
  return (
    <>
      <HeroBanner {...hero} />
      <StatBar items={stats} />
      <StepFlow {...howItWorks} />
      <FeatureGrid {...benefits} />

      {/* Gamification teaser — gold-accented section */}
      <section className="relative py-4xl px-md overflow-hidden">
        {/* Gold ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-content mx-auto text-center">
          <h2 className="text-display-sm md:text-display-lg gradient-text-gold inline-block">
            {gamification.headline}
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-md max-w-2xl mx-auto">
            {gamification.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-md mt-2xl">
            {gamification.games.map((game, i) => {
              const Icon = gameIcons[i];
              return (
                <div
                  key={game}
                  className="rounded-xl border border-gold/20 bg-paper p-lg flex flex-col items-center gap-md hover:border-gold/40 hover:-translate-y-0.5 hover:rotate-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <span className="text-label-md text-gold">{game}</span>
                </div>
              );
            })}
          </div>

          <a
            href={gamification.ctaHref}
            className="inline-flex items-center gap-sm mt-2xl px-xl py-md rounded-lg bg-gold text-canvas text-label-md font-bold hover:bg-gold-light transition-colors"
          >
            {gamification.ctaLabel}
          </a>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
