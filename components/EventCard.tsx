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
          <div className="flex flex-col gap-0.5">
            <dt><Image src="/inv/Textos-05.png" alt="o Local" width={3017} height={799} className="mix-blend-multiply w-full max-w-[180px] md:max-w-[260px] h-auto mx-auto" /></dt>
            <dd className="text-base font-medium">{weddingConfig.venueName}</dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="label-caps text-gold">{t.event.addressLabel}</dt>
            <dd className="text-sm text-ink-light leading-snug">{weddingConfig.venueAddress}</dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="label-caps text-gold">{t.event.dressCodeLabel}</dt>
            <dd><Image src="/inv/Textos-06.png" alt="Traje Social Completo" width={3017} height={799} className="mix-blend-multiply w-full max-w-[260px] md:max-w-[360px] h-auto mx-auto" /></dd>
          </div>
        </dl>
      </div>
    </SectionReveal>
  );
}
