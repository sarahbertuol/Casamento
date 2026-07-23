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
          {/* Venue — vertical: title → NTX illustration → venue text */}
          <div className="flex flex-col items-center gap-2 w-full">
            <dt><Image src="/inv/Textos-05.png" alt="o Local" width={3017} height={799} className="mix-blend-multiply w-full max-w-[180px] md:max-w-[240px] h-auto mx-auto" /></dt>
            <Image
              src="/inv/NTX_1a.png"
              alt="Casa NTX"
              width={2187}
              height={1458}
              className="w-full max-w-[280px] md:max-w-[380px] h-auto mix-blend-multiply"
            />
            <dd className="text-base font-medium">{weddingConfig.venueName}</dd>
            <dd className="text-sm text-ink-light leading-snug">{weddingConfig.venueAddress}</dd>
          </div>

          {/* Dress code — flanking: traje_1 left | text center | traje_2 right */}
          <div className="flex items-center justify-center gap-3 w-full">
            <Image
              src="/inv/traje_1.png"
              alt=""
              width={494}
              height={803}
              className="w-[70px] md:w-[110px] h-auto mix-blend-multiply shrink-0"
            />
            <div className="flex flex-col gap-0.5 flex-1 text-center">
              <dt className="label-caps text-gold">{t.event.dressCodeLabel}</dt>
              <dd><Image src="/inv/Textos-06.png" alt="Traje Social Completo" width={3017} height={799} className="mix-blend-multiply w-full max-w-[160px] md:max-w-[220px] h-auto mx-auto" /></dd>
            </div>
            <Image
              src="/inv/traje_2.png"
              alt=""
              width={428}
              height={807}
              className="w-[70px] md:w-[110px] h-auto mix-blend-multiply shrink-0"
            />
          </div>
        </dl>
      </div>
    </SectionReveal>
  );
}
