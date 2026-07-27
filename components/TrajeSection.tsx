"use client";

import Image from "next/image";
import { SectionReveal } from "./SectionReveal";

export function TrajeSection() {
  return (
    <SectionReveal className="py-8">
      <div className="flex flex-col items-center gap-4 rounded-lg border border-gold/40 px-6 py-8 text-center">
        <Image
          src="/inv/Textos-dresscode.png"
          alt="Dress Code"
          width={3017}
          height={799}
          className="mix-blend-multiply w-full max-w-[220px] md:max-w-[320px] h-auto"
        />
        <Image
          src="/inv/Textos-trajetitulo.png"
          alt="Traje Social Completo"
          width={3017}
          height={400}
          className="mix-blend-multiply w-full max-w-[280px] md:max-w-[420px] h-auto"
        />
        <Image
          src="/inv/traje_novo.png"
          alt="Traje Social Completo"
          width={2000}
          height={1000}
          className="w-full h-auto mix-blend-multiply"
        />
      </div>
    </SectionReveal>
  );
}
