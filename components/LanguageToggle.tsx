"use client";

import { useLocale } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language toggle">
      <button
        type="button"
        onClick={() => setLocale("pt")}
        aria-pressed={locale === "pt"}
        className={`label-caps text-xs transition-opacity ${
          locale === "pt" ? "opacity-100" : "opacity-40 hover:opacity-70"
        }`}
      >
        🇧🇷 PT
      </button>
      <span className="text-wine/40">/</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`label-caps text-xs transition-opacity ${
          locale === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"
        }`}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
