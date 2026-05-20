import { IconResolver } from "@/components/sections/icon-resolver";
import type { StepFlowData } from "@/types/content";

export function StepFlow({ heading, subtitle, steps }: StepFlowData) {
  return (
    <section className="py-4xl px-md">
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

        <div className="relative flex flex-col md:flex-row items-start md:items-start justify-between gap-3xl md:gap-lg">
          {/* Horizontal connector line - desktop only */}
          <div className="hidden md:block absolute top-7 left-[15%] right-[15%] border-t-2 border-dashed border-border" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center flex-1"
            >
              {/* Numbered circle */}
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-label-md font-bold z-10 shadow-lg shadow-primary/20">
                {i + 1}
              </div>

              {/* Content card */}
              <div className="mt-xl bg-paper rounded-xl p-xl border border-white/5 w-full max-w-[280px]">
                {step.icon && (
                  <div className="w-12 h-12 rounded-lg bg-primary-subtle flex items-center justify-center mx-auto mb-md">
                    <IconResolver
                      name={step.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                )}
                <h3 className="text-headline-sm text-white">{step.title}</h3>
                <p className="text-body-sm text-on-surface-variant mt-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
