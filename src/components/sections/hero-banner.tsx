import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Wallet, Send, QrCode, Ticket } from "lucide-react";
import type { HeroData } from "@/types/content";

function CtaLink({
  href,
  label,
  primary,
}: {
  href: string;
  label: string;
  primary: boolean;
}) {
  const className = cn(
    "inline-flex items-center gap-sm rounded-lg text-label-md transition-all duration-200",
    primary
      ? "bg-primary text-white px-xl py-md hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
      : "text-primary hover:text-primary-light group"
  );

  const content = (
    <>
      {label}
      {!primary && (
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

function WalletCard() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-150" />

      {/* Card */}
      <div className="relative bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-xl shadow-2xl shadow-primary/10 w-[320px] md:w-[360px]">
        <p className="text-white/70 text-label-sm uppercase tracking-wider">
          Available Balance
        </p>
        <p className="text-white text-[32px] font-bold mt-xs tracking-tight font-[tabular-nums]">
          ₹1,23,456<span className="text-white/60">.78</span>
        </p>
        <p className="text-white/50 text-label-sm mt-xs">•••• 4829</p>

        {/* Quick actions */}
        <div className="flex gap-md mt-xl">
          {[
            { icon: Wallet, label: "Add" },
            { icon: Send, label: "Send" },
            { icon: QrCode, label: "Scan" },
            { icon: Ticket, label: "Voucher" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-xs">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Icon size={18} className="text-white" />
              </div>
              <span className="text-white/60 text-[10px]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroBanner({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroData) {
  return (
    <section className="relative pt-[160px] pb-4xl px-md overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 pattern-grid opacity-100" />

      <div className="relative max-w-content mx-auto flex flex-col md:flex-row items-center gap-3xl">
        {/* Text content - left aligned on desktop */}
        <div className="flex-1 text-center md:text-left">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-sm bg-primary/10 border border-primary/20 rounded-full px-md py-xs mb-xl">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-label-sm text-primary">
              Trusted by 10,000+ Indians
            </span>
          </div>

          <h1 className="text-display-sm md:text-display-lg text-white max-w-xl">
            {headline}
          </h1>

          {subheadline && (
            <p className="text-body-lg text-on-surface-variant max-w-lg mt-lg">
              {subheadline}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-md mt-xl">
            <CtaLink href={primaryCta.href} label={primaryCta.label} primary />
            {secondaryCta && (
              <CtaLink
                href={secondaryCta.href}
                label={secondaryCta.label}
                primary={false}
              />
            )}
          </div>
        </div>

        {/* Visual - wallet card on right */}
        <div className="flex-shrink-0 hidden md:block">
          <WalletCard />
        </div>
      </div>
    </section>
  );
}
