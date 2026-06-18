"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function WeddingCard() {
  const { t } = useLocale();

  return (
    <SectionReveal className="py-12">
      <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-wine-dark/80 p-8 text-center">
        <h2 className="section-title">{t.wedding.title}</h2>
        <Image src="/illustrations/heart-ribbon.svg" alt="" width={56} height={56} />
        <p className="label-caps text-sm text-wine">{t.wedding.subtitle}</p>
        <div className="space-y-1 text-lg">
          <p>{weddingConfig.ceremonyTime}</p>
          <p>{weddingConfig.ceremonyLocation}</p>
          <p>
            <a
              href={weddingConfig.receptionLocationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-sage"
            >
              {weddingConfig.receptionLocation}
            </a>
          </p>
          <p className="text-base text-ink/80">{weddingConfig.address}</p>
        </div>
        <p className="label-caps text-xs">
          {t.wedding.dressCodeLabel}: {weddingConfig.dressCode}
        </p>
      </div>
    </SectionReveal>
  );
}
