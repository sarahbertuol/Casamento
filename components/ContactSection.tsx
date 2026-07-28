"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function ContactSection() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-4 py-14 text-center">
      <Image src="/inv/ramo-divisor.png" alt="" width={443} height={68} className="opacity-80 w-[180px] md:w-[240px] h-auto" />
      <Image src="/inv/Textos-16.png" alt="Mais alguma dúvida?" width={3017} height={799} className="mix-blend-multiply w-full max-w-[280px] md:max-w-[420px] h-auto" />
      <div className="divider" />
      <p className="text-base text-ink-light leading-relaxed">
        {t.contact.description}
      </p>
      <p className="text-base font-medium text-ink">{weddingConfig.contactName}</p>
      <a
        href={`https://wa.me/${weddingConfig.rsvpWhatsapp}?text=ola%2C+sou+convidado+da+Bruna+Fagundes+e+tenho+uma+d%C3%BAvida`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-base text-ink-light hover:text-wine transition-colors"
      >
        {weddingConfig.contactPhone}
      </a>
    </SectionReveal>
  );
}
