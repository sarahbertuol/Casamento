import Image from "next/image";

export function SideCurtainFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fixed linen texture — stays still while content scrolls */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: "url(/inv/SAVE_fundo-06.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
        aria-hidden
      />

      {/* Brightening overlay — improves text contrast over the texture */}
      <div
        className="pointer-events-none fixed inset-0 bg-white/60"
        style={{ zIndex: -5 }}
        aria-hidden
      />

      {/* Fixed corner ribbons — at viewport corners on all screen sizes */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
        <Image
          src="/inv/CANTONEIRA-17.png"
          alt=""
          width={1675}
          height={2601}
          className="absolute left-0 top-0 select-none mix-blend-multiply w-[144px] md:w-[176px] lg:w-[200px]"
          style={{ transform: "scaleX(-1)" }}
          priority
        />
        <Image
          src="/inv/CANTONEIRA-17.png"
          alt=""
          width={1675}
          height={2601}
          className="absolute right-0 top-0 select-none mix-blend-multiply w-[144px] md:w-[176px] lg:w-[200px]"
          priority
        />
        <Image
          src="/inv/CANTONEIRA-17.png"
          alt=""
          width={1675}
          height={2601}
          className="absolute bottom-0 left-0 select-none mix-blend-multiply w-[144px] md:w-[176px] lg:w-[200px]"
          style={{ transform: "scale(-1,-1)" }}
        />
        <Image
          src="/inv/CANTONEIRA-17.png"
          alt=""
          width={1675}
          height={2601}
          className="absolute bottom-0 right-0 select-none mix-blend-multiply w-[144px] md:w-[176px] lg:w-[200px]"
          style={{ transform: "scaleY(-1)" }}
        />
      </div>

      {/* Scrollable content — wider on desktop */}
      <div className="relative z-10 mx-auto max-w-[488px] md:max-w-[680px] lg:max-w-[900px] px-8 md:px-14 pb-36">
        {children}
      </div>
    </>
  );
}
