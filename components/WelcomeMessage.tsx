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
      <Image src="/inv/Textos-08.png" alt="Bem-Vindos" width={3017} height={799} className="mix-blend-multiply w-full max-w-[280px] md:max-w-[420px] h-auto" />
      <div className="divider" />
      <div className="space-y-3 leading-relaxed text-base max-w-[320px] md:max-w-[520px] lg:max-w-[660px]">
        {weddingConfig.welcomeLines.map((line, i) => (
          <p key={i} className="[text-wrap:pretty]">{line}</p>
        ))}
      </div>
      <div className="flex flex-col items-center gap-0.5 text-sm text-ink-light italic">
        <span>{t.welcome.signatureLabel}</span>
        <span>{weddingConfig.personName}</span>
      </div>
    </SectionReveal>
  );
}
