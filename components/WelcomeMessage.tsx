"use client";

import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function WelcomeMessage() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-4 py-12 text-center">
      <h2 className="section-title">{t.welcome.title}</h2>
      <div className="space-y-3 text-lg leading-relaxed text-ink">
        {t.welcome.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="text-lg">
        {t.welcome.signatureLabel} {weddingConfig.bride} {t.welcome.conjunction} {weddingConfig.groom}
      </p>
    </SectionReveal>
  );
}
