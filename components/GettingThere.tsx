"use client";

import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function GettingThere() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-6 py-12 text-center">
      <h2 className="section-title">{t.gettingThere.title}</h2>
      <p className="text-base text-ink-light leading-snug max-w-xs">
        {weddingConfig.venueAddress}
      </p>
      <div className="flex gap-4">
        <a
          href={weddingConfig.venueMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label-caps rounded-full border-2 border-wine px-6 py-2 text-sm text-wine transition-colors hover:bg-wine hover:text-background"
        >
          {t.gettingThere.mapsButton}
        </a>
        <a
          href={weddingConfig.venueWazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label-caps rounded-full border-2 border-gold px-6 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-background"
        >
          {t.gettingThere.wazeButton}
        </a>
      </div>
    </SectionReveal>
  );
}
