"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function GiftSection() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-5 py-14 text-center">
      <Image src="/inv/joia_1.png" alt="" width={52} height={52} className="opacity-80" />
      <h2 className="section-title">{t.gifts.title}</h2>
      <div className="divider" />
      <p className="text-sm text-ink-light leading-relaxed max-w-[260px]">
        {t.gifts.description}
      </p>
      <a
        href={weddingConfig.giftsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="label-caps rounded-full border-2 border-wine px-8 py-3 text-sm text-wine transition-colors hover:bg-wine hover:text-background"
      >
        {t.gifts.linkLabel}
      </a>
    </SectionReveal>
  );
}
