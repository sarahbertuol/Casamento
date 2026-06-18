"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { LanguageToggle } from "./LanguageToggle";

export function Hero() {
  const { t } = useLocale();

  return (
    <header className="relative flex flex-col items-center text-center">
      <div className="flex w-full justify-end pb-2">
        <LanguageToggle />
      </div>

      <div className="relative w-full">
        <Image
          src="/illustrations/hero-valance.svg"
          alt=""
          width={400}
          height={230}
          className="w-full"
          priority
        />
        <Image
          src="/illustrations/crest.svg"
          alt=""
          width={110}
          height={82}
          className="absolute left-1/2 top-[58px] -translate-x-1/2"
        />
      </div>

      <div className="flex flex-col items-center gap-4 pt-2">
        <h1 className="section-title text-5xl sm:text-6xl">
          {weddingConfig.bride} &amp; {weddingConfig.groom}
        </h1>
        <Image src="/illustrations/chapel.svg" alt="" width={56} height={70} />
        <p className="label-caps text-sm text-wine">{t.hero.dateLabel}</p>
        <p className="label-caps text-sm text-wine">{t.hero.locationLabel}</p>
      </div>

      <Image
        src="/illustrations/bird-wine.svg"
        alt=""
        width={40}
        height={30}
        className="absolute -bottom-2 right-0"
      />
    </header>
  );
}
