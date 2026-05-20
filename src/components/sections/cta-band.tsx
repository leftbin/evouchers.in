import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { CtaData } from "@/types/content";

function CtaLink({
  href,
  label,
  primary,
  gradient,
}: {
  href: string;
  label: string;
  primary: boolean;
  gradient: boolean;
}) {
  const className = cn(
    "inline-flex items-center gap-sm rounded-lg px-xl py-md text-label-md transition-all duration-200",
    gradient
      ? primary
        ? "bg-white text-primary-dark font-bold hover:bg-white/90 hover:shadow-lg"
        : "text-white border border-white/30 hover:bg-white/10 hover:border-white/50"
      : primary
        ? "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
        : "text-primary hover:text-primary-light group"
  );

  const content = (
    <>
      {label}
      {!primary && !gradient && (
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export function CtaBand({
  headline,
  primaryCta,
  secondaryCta,
  variant,
}: CtaData) {
  const isGradient = variant === "gradient";

  return (
    <section
      className={cn(
        "py-3xl px-md relative overflow-hidden",
        isGradient && "bg-gradient-to-r from-primary-dark to-primary"
      )}
    >
      {/* Decorative pattern on gradient variant */}
      {isGradient && <div className="absolute inset-0 pattern-grid opacity-50" />}

      <div className="relative max-w-content mx-auto text-center">
        <h2 className="text-headline-lg md:text-display-sm text-white">
          {headline}
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-md mt-xl">
          <CtaLink
            href={primaryCta.href}
            label={primaryCta.label}
            primary
            gradient={isGradient}
          />
          {secondaryCta && (
            <CtaLink
              href={secondaryCta.href}
              label={secondaryCta.label}
              primary={false}
              gradient={isGradient}
            />
          )}
        </div>
      </div>
    </section>
  );
}
