"use client";

import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function EventCard() {
  const { t } = useLocale();

  return (
    <SectionReveal className="py-10">
      <div className="flex flex-col items-center gap-5 rounded-lg border border-gold/40 px-8 py-10 text-center">
        <h2 className="section-title">{t.event.title}</h2>
        <div className="divider" />

        <dl className="w-full space-y-4 text-base">
          <div className="flex flex-col gap-0.5">
            <dt className="label-caps text-gold">{t.event.dateLabel}</dt>
            <dd className="text-lg">{t.hero.dateLabel}</dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="label-caps text-gold">{t.event.timeLabel}</dt>
            <dd className="text-lg">{weddingConfig.eventTime}</dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="label-caps text-gold">{t.event.venueLabel}</dt>
            <dd className="text-lg font-medium">{weddingConfig.venueName}</dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="label-caps text-gold">{t.event.addressLabel}</dt>
            <dd className="text-base text-ink-light leading-snug">{weddingConfig.venueAddress}</dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="label-caps text-gold">{t.event.dressCodeLabel}</dt>
            <dd className="text-lg italic">{weddingConfig.dressCode}</dd>
          </div>
        </dl>
      </div>
    </SectionReveal>
  );
}
