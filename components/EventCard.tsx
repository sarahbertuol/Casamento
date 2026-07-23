"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function EventCard() {
  const { t } = useLocale();

  return (
    <SectionReveal className="py-12">
      <div className="flex flex-col items-center gap-5 rounded-lg border border-gold/40 px-8 py-10 text-center">
        <Image src="/inv/estrela.png" alt="" width={52} height={52} className="opacity-75" />
        <Image src="/inv/Textos-11.png" alt="o Evento" width={3017} height={799} className="mix-blend-multiply w-full max-w-[280px] md:max-w-[420px] h-auto" />
        <div className="divider" />

        <dl className="w-full space-y-5 text-base">
          <div className="flex flex-col gap-0.5">
            <dt className="label-caps text-gold">{t.event.dateLabel}</dt>
            <dd className="text-base">{t.hero.dateLabel}</dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="label-caps text-gold">{t.event.timeLabel}</dt>
            <dd className="text-base">{weddingConfig.eventTime}</dd>
          </div>
          {/* Venue — text centered; NTX illustration floats left via absolute */}
          <div className="relative flex flex-col gap-0.5">
            <Image
              src="/inv/NTX_1a.png"
              alt="Casa NTX"
              width={2187}
              height={1458}
              className="absolute top-1/2 -translate-y-[85%] md:-translate-y-1/2 right-full translate-x-[80px] md:translate-x-[64px] z-50 w-[120px] md:w-[280px] lg:w-[360px] h-auto mix-blend-multiply"
            />
            <dt><Image src="/inv/Textos-05.png" alt="o Local" width={3017} height={799} className="mix-blend-multiply w-full max-w-[180px] md:max-w-[240px] h-auto mx-auto" /></dt>
            <dd className="text-base font-medium">{weddingConfig.venueName}</dd>
            <dd className="text-sm text-ink-light leading-snug mt-0.5">{weddingConfig.venueAddress}</dd>
          </div>

          {/* Dress code — text centered; traje illustration floats right via absolute */}
          <div className="relative flex flex-col gap-0.5">
            <dt className="label-caps text-gold">{t.event.dressCodeLabel}</dt>
            <dd><Image src="/inv/Textos-06.png" alt="Traje Social Completo" width={3017} height={799} className="mix-blend-multiply w-full max-w-[220px] md:max-w-[300px] h-auto mx-auto" /></dd>
            <Image
              src="/inv/traje.png"
              alt="Traje Social Completo"
              width={1090}
              height={866}
              className="absolute top-1/2 -translate-y-1/2 left-full -translate-x-[90px] md:-translate-x-[64px] z-50 w-[130px] md:w-[240px] lg:w-[300px] h-auto mix-blend-multiply"
            />
          </div>
        </dl>
      </div>
    </SectionReveal>
  );
}
