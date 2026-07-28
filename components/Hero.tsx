import Image from "next/image";
import { weddingConfig } from "@/lib/weddingConfig";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] flex-col items-center justify-center -mx-14 md:-mx-16 overflow-hidden">
      <Image
        src="/inv/hero-convite.png"
        alt={weddingConfig.personName}
        width={2981}
        height={3644}
        className="mix-blend-multiply max-h-[92svh] w-auto h-auto max-w-full"
        priority
      />
    </section>
  );
}
