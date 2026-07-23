"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { generatePixCode } from "@/lib/pix";
import { SectionReveal } from "./SectionReveal";

export function GiftSection() {
  const { t } = useLocale();
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const handleGiftClick = (gift: (typeof weddingConfig.gifts)[number]) => {
    const code = generatePixCode(
      weddingConfig.pixKey,
      gift.price,
      weddingConfig.pixMerchantName,
      weddingConfig.pixMerchantCity
    );
    navigator.clipboard.writeText(code).then(() => {
      setCopiedName(gift.name);
      setTimeout(() => setCopiedName(null), 3000);
    });
  };

  const copiedGift = weddingConfig.gifts.find((g) => g.name === copiedName);

  return (
    <SectionReveal className="flex flex-col items-center gap-6 py-14 text-center">
      <Image src="/inv/joia_1.png" alt="" width={52} height={52} className="opacity-80" />
      <h2 className="section-title">{t.gifts.title}</h2>
      <div className="divider" />
      <p className="text-sm text-ink-light leading-relaxed max-w-[260px]">
        {t.gifts.description}
      </p>

      {copiedName && (
        <div className="w-full rounded-lg border border-wine/30 bg-wine/10 px-4 py-3 text-sm text-wine">
          ✓ PIX copiado! Cole no app do banco — R$ {copiedGift?.price}
        </div>
      )}

      <div className="grid w-full grid-cols-2 gap-3 mt-1">
        {weddingConfig.gifts.map((gift) => {
          const isCopied = copiedName === gift.name;
          return (
            <button
              key={gift.name}
              onClick={() => handleGiftClick(gift)}
              className={`flex flex-col items-center gap-2 rounded-lg border px-3 py-4 text-center transition-all ${
                isCopied
                  ? "border-wine/60 bg-wine/10"
                  : "border-gold/35 bg-background/55 hover:border-wine/50 hover:bg-background/80"
              }`}
            >
              <div className="relative h-14 w-full">
                <Image
                  src={gift.image}
                  alt=""
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <p className="text-xs font-semibold text-ink leading-tight">{gift.name}</p>
              <p className="text-[0.6rem] italic text-ink-light leading-tight">{gift.tagline}</p>
              <p className="label-caps mt-auto text-[0.7rem] text-wine">
                {isCopied ? "✓ Copiado!" : `R$ ${gift.price}`}
              </p>
            </button>
          );
        })}
      </div>
    </SectionReveal>
  );
}
