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
  const seconds = Math.floor((diff / 1000) % 60);
  return { diff, days, hours, minutes, seconds };
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
      <Image src="/inv/Textos-10.png" alt="Contagem Regressiva" width={3017} height={799} className="mix-blend-multiply w-full max-w-[280px] md:max-w-[420px] h-auto" />
      {timeLeft.diff <= 0 ? (
        <p className="text-xl text-wine">{t.countdown.todayMessage}</p>
      ) : (
        <div className="flex gap-6 sm:gap-10">
          {[
            { value: timeLeft.days, label: t.countdown.days },
            { value: timeLeft.hours, label: t.countdown.hours },
            { value: timeLeft.minutes, label: t.countdown.minutes },
            { value: timeLeft.seconds, label: t.countdown.seconds },
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
