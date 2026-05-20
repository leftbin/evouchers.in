import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import type { TierCardsData } from "@/types/content";

export function TierCards({ heading, subtitle, tiers }: TierCardsData) {
  return (
    <section className="py-4xl px-md bg-paper">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-3xl">
          <h2 className="text-headline-lg md:text-display-sm text-white">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body-lg text-on-surface-variant mt-md max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-12 h-0.5 bg-gold mx-auto mt-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg items-start">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={cn(
                "relative bg-canvas rounded-xl p-xl transition-all duration-300",
                tier.highlighted
                  ? "border-2 border-gold md:-translate-y-3 shadow-lg shadow-gold/10"
                  : "border border-white/5 hover:border-primary/20 hover:-translate-y-0.5"
              )}
            >
              {tier.highlighted && tier.highlightLabel && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-canvas text-label-sm font-bold px-md py-xs rounded-full whitespace-nowrap">
                  {tier.highlightLabel}
                </span>
              )}

              <h3
                className={cn(
                  "text-headline-md mb-xs",
                  tier.highlighted ? "text-gold" : "text-white"
                )}
              >
                {tier.name}
              </h3>

              {tier.badge && (
                <span className="inline-block text-label-sm text-on-surface-variant mb-md">
                  {tier.badge}
                </span>
              )}

              <p
                className={cn(
                  "text-display-sm mb-lg",
                  tier.highlighted ? "text-gold" : "text-primary"
                )}
              >
                {tier.rate}
                {tier.rateLabel && (
                  <span className="text-body-sm text-on-surface-variant ml-sm">
                    {tier.rateLabel}
                  </span>
                )}
              </p>

              <ul className="flex flex-col gap-sm border-t border-white/5 pt-lg">
                {tier.features.map((feat, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-sm text-body-sm text-on-surface-variant"
                  >
                    <CheckCircle
                      size={16}
                      className={cn(
                        "mt-[3px] shrink-0",
                        tier.highlighted ? "text-gold" : "text-primary"
                      )}
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
