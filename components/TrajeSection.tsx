"use client";

import Image from "next/image";
import { SectionReveal } from "./SectionReveal";

export function TrajeSection() {
  return (
    <SectionReveal className="py-8">
      <div className="flex flex-col items-center gap-4 rounded-lg border border-gold/40 px-6 py-8 text-center">
        <Image
          src="/inv/dresscode-completo.png"
          alt="Dress Code: Traje Social Completo"
          width={2981}
          height={1008}
          className="mix-blend-multiply w-full max-w-[280px] md:max-w-[440px] h-auto"
        />
        <Image
          src="/inv/traje.png"
          alt="Traje Social Completo"
          width={1090}
          height={866}
          className="w-full h-auto mix-blend-multiply"
        />
      </div>
    </SectionReveal>
  );
}
