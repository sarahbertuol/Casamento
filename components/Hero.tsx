import Image from "next/image";
import { weddingConfig } from "@/lib/weddingConfig";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <Image
        src="/inv/hero-convite.png"
        alt={weddingConfig.personName}
        width={2981}
        height={3644}
        className="mix-blend-multiply w-auto max-w-full max-h-[88svh] h-auto object-contain"
        priority
      />
    </section>
  );
}
