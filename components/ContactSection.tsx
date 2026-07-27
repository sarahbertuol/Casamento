"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function ContactSection() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-4 py-14 text-center">
      <Image src="/inv/fita_ramo_2.png" alt="" width={28} height={60} className="opacity-70" />
      <Image src="/inv/Textos-16.png" alt="Mais alguma dúvida?" width={3017} height={799} className="mix-blend-multiply w-full max-w-[280px] md:max-w-[420px] h-auto" />
      <div className="divider" />
      <p className="text-base text-ink-light leading-relaxed max-w-[240px] md:max-w-[480px]">
        {t.contact.description}
      </p>
      <p className="text-base font-medium text-ink">{weddingConfig.contactName}</p>
      <p className="text-base text-ink-light">{weddingConfig.contactPhone}</p>
    </SectionReveal>
  );
}
