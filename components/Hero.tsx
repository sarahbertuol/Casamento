"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { LanguageToggle } from "./LanguageToggle";

export function Hero() {
  const { t } = useLocale();

  return (
    <header className="flex flex-col items-center gap-6 pt-2 text-center">
      <div className="flex w-full justify-end">
        <LanguageToggle />
      </div>
      <Image src="/illustrations/crest.svg" alt="" width={120} height={90} />
      <h1 className="section-title text-5xl sm:text-6xl">
        {weddingConfig.bride} &amp; {weddingConfig.groom}
      </h1>
      <p className="label-caps text-sm text-wine">
        {t.hero.dateLabel} · {t.hero.locationLabel}
      </p>
    </header>
  );
}
