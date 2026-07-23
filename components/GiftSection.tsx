"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function GiftSection() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-6 py-14 text-center">
      <Image src="/inv/joia_1.png" alt="" width={52} height={52} className="opacity-80" />
      <h2 className="section-title">{t.gifts.title}</h2>
      <div className="divider" />
      <p className="text-sm text-ink-light leading-relaxed max-w-[260px]">
        {t.gifts.description}
      </p>

      <div className="grid w-full grid-cols-2 gap-3 mt-1">
        {weddingConfig.gifts.map((gift) => {
          const msg = `Oi Bruna! 🎓\nQuero presentear com: "${gift.name}" (R$ ${gift.price})\nMe manda o PIX? 💕`;
          const href = `https://wa.me/${weddingConfig.rsvpWhatsapp}?text=${encodeURIComponent(msg)}`;
          return (
            <a
              key={gift.name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-lg border border-gold/35 bg-background/55 px-3 py-4 text-center transition-all hover:border-wine/50 hover:bg-background/80"
            >
              <div className="relative h-14 w-full">
                <Image
                  src={gift.image}
                  alt=""
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <p className="text-xs font-semibold text-ink leading-tight">{gift.name}</p>
              <p className="text-[0.6rem] italic text-ink-light leading-tight">{gift.tagline}</p>
              <p className="label-caps mt-auto text-[0.7rem] text-wine">R$ {gift.price}</p>
            </a>
          );
        })}
      </div>
    </SectionReveal>
  );
}
