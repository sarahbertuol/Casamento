"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function Lodging() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-5 py-14 text-center">
      <Image src="/inv/Chaves.png" alt="" width={56} height={76} className="opacity-85" />
      <h2 className="section-title">{t.lodging.title}</h2>
      <div className="divider" />
      <p className="text-sm text-ink-light">{t.lodging.description}</p>
      <ul className="w-full space-y-2.5">
        {weddingConfig.hotels.map((hotel) => (
          <li key={hotel.name}>
            <a
              href={hotel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded border border-gold/40 px-6 py-3 text-base text-ink transition-all hover:border-wine hover:text-wine"
            >
              {hotel.name}
            </a>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
