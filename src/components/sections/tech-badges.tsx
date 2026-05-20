import type { TechBadge } from "@/types/content";

interface TechBadgesProps {
  heading: string;
  subtitle?: string;
  badges: TechBadge[];
}

export function TechBadges({ heading, subtitle, badges }: TechBadgesProps) {
  return (
    <section className="py-4xl px-md bg-paper">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-2xl">
          <h2 className="text-display-sm md:text-headline-lg text-white mb-md">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-md">
          {badges.map((badge, i) => (
            <span
              key={i}
              className="bg-canvas rounded px-lg py-md text-label-md text-on-surface-variant"
            >
              {badge.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
