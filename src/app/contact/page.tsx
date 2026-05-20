import type { Metadata } from "next";
import { contactInfo, formFields, faq } from "@/data/contact";
import { ContactForm } from "@/components/sections/contact-form";
import { Accordion } from "@/components/sections/accordion";

export const metadata: Metadata = {
  title: "eVoucher — Contact Us",
};

export default function ContactPage() {
  return (
    <>
      {/* Contact split layout */}
      <section className="max-w-content mx-auto px-md md:px-xl pt-3xl pb-4xl">
        <div className="grid md:grid-cols-2 gap-xl items-start">
          <div>
            <h1 className="text-display-sm text-white">
              {contactInfo.headline}
            </h1>
            <p className="text-body-lg text-on-surface-variant mt-sm">
              {contactInfo.description}
            </p>
            <ul className="mt-xl space-y-md">
              {contactInfo.channels.map((ch) => (
                <li
                  key={ch.label}
                  className="flex items-start gap-sm text-body-md text-on-surface-variant"
                >
                  <span className="text-primary text-lg">{ch.icon}</span>
                  <div>
                    <span className="text-label-md text-white">{ch.label}</span>
                    <br />
                    {ch.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm fields={formFields} heading="Send a Message" subtitle="We typically respond within 24 hours." />
        </div>
      </section>

      <Accordion {...faq} />
    </>
  );
}
