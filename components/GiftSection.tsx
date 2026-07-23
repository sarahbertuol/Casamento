"use client";

import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function GiftSection() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-4 py-12 text-center">
      <h2 className="section-title">{t.gifts.title}</h2>
      <p className="text-base text-ink-light max-w-xs leading-relaxed">{t.gifts.description}</p>
      <a
        href={weddingConfig.giftsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="label-caps rounded-full border-2 border-wine px-6 py-2 text-sm text-wine transition-colors hover:bg-wine hover:text-background"
      >
        {t.gifts.linkLabel}
      </a>
    </SectionReveal>
  );
}
