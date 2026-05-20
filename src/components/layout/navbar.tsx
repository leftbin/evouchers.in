"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND_NAME, EXTERNAL_LINKS } from "@/lib/constants";
import { navItems } from "@/data/navigation";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-canvas/80 backdrop-blur-md border-b border-white/5"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-md md:px-xl max-w-content mx-auto h-16">
        <Link href="/" className="text-headline-md text-primary font-bold">
          {BRAND_NAME}
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-body-sm transition-colors duration-200",
                    isActive
                      ? "text-white border-b-2 border-primary pb-1"
                      : "text-on-surface-variant hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={EXTERNAL_LINKS.signUp}
          className="hidden md:inline-flex items-center bg-primary text-white text-label-md px-lg py-sm rounded-lg hover:bg-primary-dark transition-colors"
        >
          Get Started
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-on-surface-variant hover:text-white p-sm"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-canvas z-40 flex flex-col p-xl">
          <ul className="flex flex-col gap-md flex-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block py-md text-body-lg transition-colors",
                      isActive ? "text-primary" : "text-on-surface-variant"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href={EXTERNAL_LINKS.signUp}
            className="block w-full text-center bg-primary text-white text-label-md py-md rounded-lg hover:bg-primary-dark transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
