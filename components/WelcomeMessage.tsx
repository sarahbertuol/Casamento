"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function WelcomeMessage() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-5 py-14 text-center">
      <Image src="/inv/Barrete.png" alt="" width={72} height={56} className="opacity-90" />
      <h2 className="section-title">{t.welcome.title}</h2>
      <div className="divider" />
      <div className="space-y-3 leading-relaxed text-base max-w-[260px] md:max-w-[520px] lg:max-w-[660px]">
        {weddingConfig.welcomeLines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <p className="text-sm text-ink-light italic">
        {t.welcome.signatureLabel} {weddingConfig.personName}
      </p>
    </SectionReveal>
  );
}
