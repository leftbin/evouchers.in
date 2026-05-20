import { cn } from "@/lib/utils";
import { IconResolver } from "@/components/sections/icon-resolver";
import type { FeatureGridData } from "@/types/content";

export function FeatureGrid({
  heading,
  subtitle,
  features,
  columns = 3,
}: FeatureGridData) {
  const gridCols =
    columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-4xl px-md bg-paper">
      <div className="max-w-content mx-auto">
        {/* Section heading with decorative line */}
        <div className="text-center mb-3xl">
          <h2 className="text-headline-lg md:text-display-sm text-white">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-body-lg text-on-surface-variant mt-md max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-12 h-0.5 bg-primary mx-auto mt-lg" />
        </div>

        <div className={cn("grid grid-cols-1 gap-lg", gridCols)}>
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-canvas rounded-xl p-xl border border-white/5 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {feature.icon && (
                <div
                  className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-md",
                    feature.accentColor === "gold"
                      ? "bg-gold/15"
                      : "bg-primary-subtle"
                  )}
                >
                  <IconResolver
                    name={feature.icon}
                    size={24}
                    className={
                      feature.accentColor === "gold"
                        ? "text-gold"
                        : "text-primary"
                    }
                  />
                </div>
              )}

              <h3 className="text-headline-sm text-white mb-sm">
                {feature.title}
              </h3>
              <p className="text-body-sm text-on-surface-variant">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
