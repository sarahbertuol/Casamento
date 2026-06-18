"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { SectionReveal } from "./SectionReveal";

const TABS = ["car", "plane", "visa"] as const;
type Tab = (typeof TABS)[number];

export function GettingThereAccordion() {
  const { t } = useLocale();
  const [openTab, setOpenTab] = useState<Tab | null>(null);

  return (
    <SectionReveal className="flex flex-col items-center gap-6 py-12 text-center">
      <h2 className="section-title">{t.gettingThere.title}</h2>
      <div className="flex w-full flex-col gap-3">
        {TABS.map((tab) => {
          const isOpen = openTab === tab;
          return (
            <div key={tab} className="overflow-hidden rounded-md border border-wine/30">
              <button
                type="button"
                onClick={() => setOpenTab(isOpen ? null : tab)}
                aria-expanded={isOpen}
                className="label-caps flex w-full items-center justify-between px-4 py-3 text-sm text-wine"
              >
                <span>{t.gettingThere.tabs[tab]}</span>
                <span aria-hidden>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-left text-base leading-relaxed">
                  {t.gettingThere.content[tab]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionReveal>
  );
}
