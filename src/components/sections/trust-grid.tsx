import { cn } from "@/lib/utils";
import { IconResolver } from "@/components/sections/icon-resolver";
import type { TrustGridData } from "@/types/content";

export function TrustGrid({
  heading,
  subtitle,
  items,
  columns = 3,
}: TrustGridData) {
  const gridCols =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-4xl px-md">
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
          <div className="w-12 h-0.5 bg-primary mx-auto mt-lg" />
        </div>

        <div className={cn("grid grid-cols-1 gap-lg", gridCols)}>
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-paper rounded-xl p-xl border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              {item.icon && (
                <div className="w-11 h-11 rounded-lg bg-primary-subtle flex items-center justify-center mb-md">
                  <IconResolver
                    name={item.icon}
                    size={22}
                    className="text-primary"
                  />
                </div>
              )}
              <h3 className="text-headline-sm text-white">{item.title}</h3>
              <p className="text-body-sm text-on-surface-variant mt-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
