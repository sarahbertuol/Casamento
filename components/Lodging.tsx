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
      <Image src="/inv/Textos-14.png" alt="Hospedagem" width={3017} height={799} className="mix-blend-multiply w-full max-w-[280px] md:max-w-[420px] h-auto" />
      <div className="divider" />
      <p className="text-sm text-ink-light">{t.lodging.description}</p>
      <ul className="w-full space-y-2.5">
        {weddingConfig.hotels.map((hotel) => (
          <li key={hotel.name}>
            <a
              href={hotel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-0.5 rounded border border-gold/40 px-6 py-3 text-base text-ink transition-all hover:border-wine hover:text-wine"
            >
              <span>{hotel.name}</span>
              {"stars" in hotel && typeof hotel.stars === "number" && (
                <span className="flex items-center gap-0.5 mt-0.5">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <Image key={i} src="/inv/estrela.png" alt="" width={52} height={52} className="w-3.5 h-3.5 opacity-80" />
                  ))}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
