"use client";

import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function WelcomeMessage() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-5 py-12 text-center">
      <h2 className="section-title">{t.welcome.title}</h2>
      <div className="space-y-3 text-lg leading-relaxed max-w-xs">
        {weddingConfig.welcomeLines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <p className="text-base text-ink-light">
        {t.welcome.signatureLabel} {weddingConfig.personName}
      </p>
    </SectionReveal>
  );
}
