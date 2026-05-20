"use client";

import { useInView } from "@/lib/hooks/use-in-view";
import { useCountUp } from "@/lib/hooks/use-count-up";
import type { StatBarData, StatItem } from "@/types/content";

function AnimatedStat({ value, label, prefix, suffix }: StatItem) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: true,
  });
  const count = useCountUp(value, inView);

  return (
    <div ref={ref} className="flex flex-col items-center gap-sm">
      <span className="text-display-sm md:text-display-lg text-white tabular-nums">
        {prefix && <span className="text-primary">{prefix}</span>}
        {count.toLocaleString("en-IN")}
        {suffix && <span className="text-primary">{suffix}</span>}
      </span>
      <span className="text-label-sm text-on-surface-variant uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export function StatBar({ items }: StatBarData) {
  return (
    <section className="bg-paper py-2xl px-md">
      <div className="max-w-content mx-auto flex flex-row items-center justify-evenly gap-xl">
        {items.map((stat, i) => (
          <AnimatedStat key={i} {...stat} />
        ))}
      </div>
    </section>
  );
}
