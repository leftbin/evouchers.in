import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { BRAND_NAME, EXTERNAL_LINKS } from "@/lib/constants";
import { footerLinks } from "@/data/navigation";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "X (Twitter)" },
];

export function Footer() {
  return (
    <footer className="bg-paper section-divider">
      <div className="max-w-content mx-auto px-md md:px-xl py-3xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-xl">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-headline-md text-primary font-bold">
              {BRAND_NAME}
            </Link>
            <p className="text-body-sm text-on-surface-variant mt-md max-w-[280px]">
              India&apos;s digital prepaid voucher and wallet platform. Built
              for the connected economy.
            </p>

            {/* Social links */}
            <div className="flex gap-sm mt-lg">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-canvas border border-white/5 flex items-center justify-center text-on-surface-muted hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-label-sm text-on-surface-muted uppercase tracking-widest mb-md">
                {group.title}
              </h4>
              <ul className="space-y-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-body-sm text-on-surface-variant hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-body-sm text-on-surface-variant hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-2xl pt-xl flex flex-col md:flex-row items-center justify-between gap-md">
          <p className="text-label-sm text-on-surface-muted">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <a
            href={EXTERNAL_LINKS.signIn}
            className="inline-flex items-center gap-sm text-label-md text-primary border border-primary/30 px-lg py-sm rounded-lg hover:bg-primary/10 transition-colors"
          >
            Open Web App
          </a>
        </div>
      </div>
    </footer>
  );
}
