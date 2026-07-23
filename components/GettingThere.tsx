"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function GettingThere() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-5 py-14 text-center">
      <Image src="/inv/joia_3_heart.png" alt="" width={46} height={46} className="opacity-75" />
      <h2 className="section-title">{t.gettingThere.title}</h2>
      <div className="divider" />
      <p className="text-sm text-ink-light leading-relaxed max-w-[240px]">
        {weddingConfig.venueAddress}
      </p>
      <div className="flex gap-3">
        <a
          href={weddingConfig.venueMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label-caps rounded-full border-2 border-wine px-5 py-2.5 text-[0.65rem] text-wine transition-colors hover:bg-wine hover:text-background"
        >
          {t.gettingThere.mapsButton}
        </a>
        <a
          href={weddingConfig.venueWazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label-caps rounded-full border-2 border-gold px-5 py-2.5 text-[0.65rem] text-gold transition-colors hover:bg-gold hover:text-background"
        >
          {t.gettingThere.wazeButton}
        </a>
      </div>
    </SectionReveal>
  );
}
