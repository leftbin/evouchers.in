import type { Metadata } from "next";
import { hero, features, security, downloadCta } from "@/data/for-users";
import { HeroBanner } from "@/components/sections/hero-banner";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { TrustGrid } from "@/components/sections/trust-grid";

export const metadata: Metadata = {
  title: "eVoucher — For Users | Your Wallet, Your Way",
};

export default function ForUsersPage() {
  return (
    <>
      <HeroBanner {...hero} />
      <FeatureGrid {...features} />
      <TrustGrid {...security} />

      {/* Download CTA — unique to for-users */}
      <section className="max-w-content mx-auto px-md md:px-xl py-4xl text-center">
        <h2 className="text-display-sm text-white">{downloadCta.headline}</h2>
        <p className="text-body-lg text-on-surface-variant mt-sm max-w-2xl mx-auto">
          {downloadCta.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-md mt-xl">
          <div className="rounded-lg border border-outline-variant bg-surface-container px-lg py-sm text-label-lg text-on-surface-variant">
            App Store — Coming Soon
          </div>
          <div className="rounded-lg border border-outline-variant bg-surface-container px-lg py-sm text-label-lg text-on-surface-variant">
            Google Play — Coming Soon
          </div>
        </div>
        <a
          href={downloadCta.webHref}
          className="inline-block mt-md text-primary hover:underline text-body-md"
        >
          {downloadCta.webLabel}
        </a>
      </section>
    </>
  );
}
