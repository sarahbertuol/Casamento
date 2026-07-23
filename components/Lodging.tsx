"use client";

import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function Lodging() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-5 py-12 text-center">
      <h2 className="section-title">{t.lodging.title}</h2>
      <p className="text-base text-ink-light">{t.lodging.description}</p>
      <ul className="w-full space-y-3">
        {weddingConfig.hotels.map((hotel) => (
          <li key={hotel.name}>
            <a
              href={hotel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md border border-gold/40 px-6 py-3 text-base font-medium text-ink transition-colors hover:border-gold hover:text-wine"
            >
              {hotel.name}
            </a>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
