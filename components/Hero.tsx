"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { LanguageToggle } from "./LanguageToggle";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-3 px-2 pt-20 md:pt-28 pb-24 text-center">
      {/* Language toggle — centred at top on mobile, top-right on desktop */}
      <div className="absolute top-4 inset-x-0 z-30 flex justify-center md:inset-x-auto md:right-0 md:top-[108px] md:block">
        <LanguageToggle />
      </div>

      {/* BF ornate heart crest */}
      <Image
        src="/inv/LOGO.png"
        alt={weddingConfig.personName}
        width={300}
        height={300}
        className="w-[190px] sm:w-[220px] drop-shadow-sm"
        priority
      />

      {/* Name — Cinzel, matching the physical invitation */}
      <p
        className="tracking-[0.28em] text-ink uppercase"
        style={{
          fontFamily: "var(--font-cinzel)",
          fontSize: "clamp(1.05rem, 3vw, 1.6rem)",
          fontWeight: 400,
          letterSpacing: "0.28em",
        }}
      >
        {weddingConfig.personName}
      </p>

      {/* Lead-in */}
      <p className="text-sm italic text-ink-light">
        {t.hero.eventTypeLabel}
      </p>

      {/* "Direito" — large script centrepiece */}
      <h1
        className="section-title leading-none"
        style={{ fontSize: "clamp(3.5rem, 15vw, 5rem)", textWrap: "balance" }}
      >
        {t.hero.eventName}
      </h1>

      {/* Marquise gem divider */}
      <Image src="/inv/joia_2.png" alt="" width={22} height={34} className="my-0.5 opacity-70" />

      {/* Date / time / location */}
      <div className="flex flex-col items-center gap-1">
        <p className="label-caps text-sm text-gold">{t.hero.dateLabel}</p>
        <p className="label-caps text-sm text-gold">{t.hero.timeLabel}</p>
        <p className="label-caps mt-1 text-ink-light" style={{ fontSize: "0.65rem", letterSpacing: "0.18em" }}>
          {t.hero.locationLabel}
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 flex flex-col items-center gap-0.5 opacity-40 text-ink-light">
        <span className="label-caps" style={{ fontSize: "0.55rem", letterSpacing: "0.25em" }}>scroll</span>
        <span className="scroll-bob text-sm">↓</span>
      </div>

      <style>{`
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
        .scroll-bob { animation: scrollBob 2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .scroll-bob { animation: none; }
        }
      `}</style>
    </section>
  );
}
