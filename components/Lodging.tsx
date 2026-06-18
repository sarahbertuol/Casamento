"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function Lodging() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-4 py-12 text-center">
      <h2 className="section-title">{t.lodging.title}</h2>
      <Image src="/illustrations/key.svg" alt="" width={80} height={48} />
      <p className="text-lg">{t.lodging.description}</p>
      <a
        href={weddingConfig.hotelSuggestionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="label-caps rounded-full border-2 border-wine px-6 py-2 text-sm text-wine transition-colors hover:bg-wine hover:text-background"
      >
        {t.lodging.button}
      </a>
    </SectionReveal>
  );
}
