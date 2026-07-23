"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-3 px-2 pt-10 md:pt-16 pb-24 text-center">
      {/* BF ornate heart crest + BRUNA FAGUNDES combined logo */}
      <Image
        src="/inv/LOGO_BF.png"
        alt={weddingConfig.personName}
        width={1699}
        height={1167}
        className="mix-blend-multiply w-[240px] sm:w-[280px] md:w-[340px] h-auto drop-shadow-sm"
        priority
      />

      {/* Convite text — calligraphy image from invitation */}
      <Image
        src="/inv/Textos-03.png"
        alt="Convida para celebrar sua Formatura em Direito"
        width={3922}
        height={987}
        className="mix-blend-multiply w-full max-w-[300px] md:max-w-[480px] h-auto"
      />

      {/* Marquise gem divider */}
      <Image src="/inv/joia_2.png" alt="" width={22} height={34} className="my-0.5 opacity-70" />

      {/* Date / time / location */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/inv/Textos-04.png"
          alt="19 de setembro de 2026, às 19:30"
          width={3017}
          height={799}
          className="mix-blend-multiply w-full max-w-[260px] md:max-w-[400px] h-auto"
        />
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
