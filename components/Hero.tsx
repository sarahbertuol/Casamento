"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative flex h-[100svh] flex-col items-center justify-center gap-8 px-2 pt-10 pb-10 text-center overflow-hidden">
      {/* BF ornate heart crest + BRUNA FAGUNDES combined logo */}
      <Image
        src="/inv/LOGO_BF.png"
        alt={weddingConfig.personName}
        width={1699}
        height={1167}
        className="mix-blend-multiply w-[240px] sm:w-[280px] md:w-[340px] h-auto drop-shadow-sm"
        priority
      />

      {/* Date / time / location */}
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/inv/Textos-04.png"
          alt="19 de setembro de 2026, às 19:30"
          width={3017}
          height={799}
          className="mix-blend-multiply w-full max-w-[280px] md:max-w-[420px] h-auto"
        />
        <p className="label-caps text-ink-light" style={{ fontSize: "0.65rem", letterSpacing: "0.18em" }}>
          {t.hero.locationLabel}
        </p>
      </div>

    </section>
  );
}
