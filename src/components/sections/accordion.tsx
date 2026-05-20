"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/content";

interface AccordionProps {
  heading: string;
  subtitle?: string;
  items: FaqItem[];
}

export function Accordion({ heading, subtitle, items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="py-4xl px-md">
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

        <div className="max-w-[720px] mx-auto flex flex-col gap-md">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "bg-paper rounded-xl border transition-colors",
                  isOpen ? "border-primary" : "border-border"
                )}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center justify-between w-full text-left px-xl py-lg"
                  aria-expanded={isOpen}
                >
                  <span className="text-headline-sm text-white pr-md">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "text-on-surface-variant shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="text-body-md text-on-surface-variant px-xl pb-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
