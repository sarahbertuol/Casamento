"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

function getTimeLeft(target: number) {
  const diff = Math.max(target - Date.now(), 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return { diff, days, hours, minutes };
}

export function Countdown() {
  const { t } = useLocale();
  const target = new Date(weddingConfig.eventDateTime).getTime();
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <SectionReveal className="flex flex-col items-center gap-6 py-14 text-center">
      <Image src="/inv/Globo.png" alt="" width={72} height={72} className="opacity-80" />
      <h2 className="section-title">{t.countdown.title}</h2>
      {timeLeft.diff <= 0 ? (
        <p className="text-xl text-wine">{t.countdown.todayMessage}</p>
      ) : (
        <div className="flex gap-8 sm:gap-12">
          {[
            { value: timeLeft.days, label: t.countdown.days },
            { value: timeLeft.hours, label: t.countdown.hours },
            { value: timeLeft.minutes, label: t.countdown.minutes },
          ].map((unit) => (
            <div key={unit.label} className="flex flex-col items-center gap-1">
              <span
                className="font-semibold text-wine tabular-nums"
                style={{ fontSize: "clamp(2.2rem, 9vw, 3.8rem)", lineHeight: 1 }}
              >
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="label-caps text-[0.6rem] tracking-widest">{unit.label}</span>
            </div>
          ))}
        </div>
      )}
    </SectionReveal>
  );
}
