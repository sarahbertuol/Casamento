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
          {/* Venue — inline: NTX illustration left, text right */}
          <div className="flex items-center justify-center gap-4 w-full">
            <Image
              src="/inv/NTX_1a.png"
              alt="Casa NTX"
              width={2187}
              height={1458}
              className="w-[100px] md:w-[160px] lg:w-[200px] h-auto mix-blend-multiply shrink-0"
            />
            <div className="flex flex-col gap-0.5 text-left">
              <dt><Image src="/inv/Textos-05.png" alt="o Local" width={3017} height={799} className="mix-blend-multiply w-full max-w-[140px] md:max-w-[200px] h-auto" /></dt>
              <dd className="text-base font-medium">{weddingConfig.venueName}</dd>
              <dd className="text-sm text-ink-light leading-snug mt-0.5">{weddingConfig.venueAddress}</dd>
            </div>
          </div>

          {/* Dress code — inline: text left, traje figures right */}
          <div className="flex items-center justify-center gap-4 w-full">
            <div className="flex flex-col gap-0.5 text-right">
              <dt className="label-caps text-gold">{t.event.dressCodeLabel}</dt>
              <dd><Image src="/inv/Textos-06.png" alt="Traje Social Completo" width={3017} height={799} className="mix-blend-multiply w-full max-w-[160px] md:max-w-[220px] h-auto ml-auto" /></dd>
            </div>
            <Image
              src="/inv/traje.png"
              alt="Traje Social Completo"
              width={1090}
              height={866}
              className="w-[100px] md:w-[160px] lg:w-[200px] h-auto mix-blend-multiply shrink-0"
            />
          </div>
        </dl>
      </div>
    </SectionReveal>
  );
}
