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
          {/* Venue — illustration on the left */}
          <div className="flex items-center gap-4 w-full">
            <div className="w-[130px] md:w-[180px] shrink-0">
              <Image
                src="/inv/NTX_1B.png"
                alt="Casa NTX"
                width={2000}
                height={1572}
                className="w-full h-auto mix-blend-multiply rounded"
              />
            </div>
            <div className="flex flex-col gap-0.5 flex-1 text-center">
              <dt><Image src="/inv/Textos-05.png" alt="o Local" width={3017} height={799} className="mix-blend-multiply w-full max-w-[160px] md:max-w-[220px] h-auto mx-auto" /></dt>
              <dd className="text-base font-medium">{weddingConfig.venueName}</dd>
              <dd className="text-sm text-ink-light leading-snug mt-1">{weddingConfig.venueAddress}</dd>
            </div>
          </div>

          {/* Dress code — illustration on the right */}
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col gap-0.5 flex-1 text-center">
              <dt className="label-caps text-gold">{t.event.dressCodeLabel}</dt>
              <dd><Image src="/inv/Textos-06.png" alt="Traje Social Completo" width={3017} height={799} className="mix-blend-multiply w-full max-w-[200px] md:max-w-[280px] h-auto mx-auto" /></dd>
            </div>
            <div className="w-[130px] md:w-[180px] shrink-0">
              <Image
                src="/inv/traje.png"
                alt="Traje Social Completo"
                width={1090}
                height={866}
                className="w-full h-auto mix-blend-multiply"
              />
            </div>
          </div>
        </dl>
      </div>
    </SectionReveal>
  );
}
