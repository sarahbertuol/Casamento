"use client";

import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function ContactSection() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-3 py-12 text-center">
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="text-lg">{t.contact.description}</p>
      <p className="text-lg font-medium">{weddingConfig.contactName}</p>
      <p className="text-lg">{weddingConfig.contactPhone}</p>
    </SectionReveal>
  );
}
