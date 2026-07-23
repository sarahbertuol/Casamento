"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { LanguageToggle } from "./LanguageToggle";

export function Hero() {
  const { t } = useLocale();

  return (
    <header className="relative flex flex-col items-center gap-5 pt-16 pb-10 text-center">
      <div className="absolute top-4 right-0 z-30">
        <LanguageToggle />
      </div>

      {/* Logo BF — coloque o arquivo em public/logo-bf.png */}
      <Image
        src="/logo-bf.png"
        alt={weddingConfig.personName}
        width={300}
        height={200}
        className="w-[260px] sm:w-[300px] mix-blend-multiply"
        priority
      />

      <div className="divider" />

      <p className="label-caps text-xs tracking-widest">{t.hero.eventTypeLabel}</p>
      <h1 className="section-title text-4xl sm:text-5xl">{t.hero.eventName}</h1>

      <div className="divider" />

      <div className="flex flex-col items-center gap-1">
        <p className="label-caps text-sm text-gold">{t.hero.dateLabel}</p>
        <p className="label-caps text-sm text-gold">{t.hero.timeLabel}</p>
        <p className="label-caps text-xs mt-1">{t.hero.locationLabel}</p>
      </div>
    </header>
  );
}
