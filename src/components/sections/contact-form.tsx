"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import type { ContactFormField } from "@/types/content";

interface ContactFormProps {
  fields: ContactFormField[];
  heading: string;
  subtitle?: string;
}

export function ContactForm({ fields, heading, subtitle }: ContactFormProps) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""]))
  );
  const [submitted, setSubmitted] = useState(false);

  const update = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    void values;
    setSubmitted(true);
  };

  const inputClass = cn(
    "w-full bg-canvas border border-border rounded-lg px-md py-sm h-12",
    "text-on-surface placeholder:text-on-surface-muted",
    "focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none",
    "transition-colors"
  );

  if (submitted) {
    return (
      <section className="py-4xl px-md">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-headline-lg text-white mb-md">Thank you!</h2>
          <p className="text-body-md text-on-surface-variant">
            We&apos;ve received your message and will get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-4xl px-md">
      <div className="max-w-[600px] mx-auto">
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-sm">
              <label
                htmlFor={field.name}
                className="text-label-md text-on-surface"
              >
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name]}
                  onChange={(e) => update(field.name, e.target.value)}
                  rows={4}
                  className={cn(inputClass, "h-auto resize-none")}
                />
              ) : field.type === "select" && field.options ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={values[field.name]}
                  onChange={(e) => update(field.name, e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled>
                    {field.placeholder || "Select..."}
                  </option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={values[field.name]}
                  onChange={(e) => update(field.name, e.target.value)}
                  className={inputClass}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg py-md text-label-md hover:bg-primary-dark transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
