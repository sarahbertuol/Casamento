"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { SectionReveal } from "./SectionReveal";

const TIPS = [
  { key: "whatToDo", icon: "/illustrations/camera.svg" },
  { key: "hairMakeup", icon: "/illustrations/mirror-brush.svg" },
  { key: "shopping", icon: "/illustrations/picnic-basket.svg" },
  { key: "restaurants", icon: "/illustrations/plate.svg" },
] as const;

export function TipsGrid() {
  const { t } = useLocale();

  return (
    <SectionReveal className="py-12">
      <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-wine-dark/80 p-8">
        <h2 className="section-title">{t.tips.title}</h2>
        <div className="grid w-full grid-cols-2 gap-6 text-center">
          {TIPS.map((tip) => (
            <div key={tip.key} className="flex flex-col items-center gap-2">
              <Image src={tip.icon} alt="" width={56} height={56} />
              <p className="label-caps text-xs text-wine">{t.tips.items[tip.key]}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
