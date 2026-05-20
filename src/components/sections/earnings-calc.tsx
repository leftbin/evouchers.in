"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { formatINR } from "@/lib/utils";

interface EarningsCalcProps {
  denominations: number[];
  defaultDenomination: number;
  defaultVolume: number;
  tiers: { name: string; rate: number }[];
}

export function EarningsCalc({
  denominations,
  defaultDenomination,
  defaultVolume,
  tiers,
}: EarningsCalcProps) {
  const [denomination, setDenomination] = useState(defaultDenomination);
  const [volume, setVolume] = useState(defaultVolume);
  const [tierIndex, setTierIndex] = useState(0);

  const rate = tiers[tierIndex]?.rate ?? 0;
  const monthly = denomination * volume * 30 * (rate / 100);

  return (
    <section className="py-4xl px-md">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-2xl">
          <h2 className="text-display-sm md:text-headline-lg text-white">
            Earnings Calculator
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* Inputs */}
          <div className="flex flex-col gap-xl">
            {/* Denomination */}
            <div className="flex flex-col gap-sm">
              <label className="text-label-md text-on-surface">
                Voucher Denomination
              </label>
              <select
                value={denomination}
                onChange={(e) => setDenomination(Number(e.target.value))}
                className={cn(
                  "bg-canvas border border-border rounded-lg px-md py-sm h-12",
                  "text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                )}
              >
                {denominations.map((d) => (
                  <option key={d} value={d}>
                    {formatINR(d)}
                  </option>
                ))}
              </select>
            </div>

            {/* Volume */}
            <div className="flex flex-col gap-sm">
              <label className="text-label-md text-on-surface">
                Daily Sales Volume
              </label>
              <input
                type="number"
                min={1}
                value={volume}
                onChange={(e) => setVolume(Math.max(1, Number(e.target.value)))}
                className={cn(
                  "bg-canvas border border-border rounded-lg px-md py-sm h-12",
                  "text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                )}
              />
            </div>

            {/* Tier */}
            <fieldset className="flex flex-col gap-sm">
              <legend className="text-label-md text-on-surface mb-sm">
                Commission Tier
              </legend>
              {tiers.map((t, i) => (
                <label
                  key={t.name}
                  className={cn(
                    "flex items-center gap-md p-md rounded-lg border cursor-pointer transition-colors",
                    tierIndex === i
                      ? "border-primary bg-primary-subtle"
                      : "border-border bg-paper hover:border-primary/30"
                  )}
                >
                  <input
                    type="radio"
                    name="tier"
                    checked={tierIndex === i}
                    onChange={() => setTierIndex(i)}
                    className="accent-primary w-4 h-4"
                  />
                  <span className="text-body-md text-white">{t.name}</span>
                  <span className="ml-auto text-label-sm text-on-surface-variant">
                    {t.rate}%
                  </span>
                </label>
              ))}
            </fieldset>
          </div>

          {/* Result card */}
          <div className="bg-paper rounded-xl border border-border p-xl flex flex-col items-center justify-center text-center gap-md">
            <span className="text-label-md text-on-surface-variant uppercase tracking-wider">
              Estimated Monthly Earnings
            </span>
            <span className="text-display-lg text-gold">
              {formatINR(monthly)}
            </span>
            <p className="text-body-sm text-on-surface-muted max-w-xs">
              Based on {volume} vouchers/day at {formatINR(denomination)} each
              with {rate}% commission
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
