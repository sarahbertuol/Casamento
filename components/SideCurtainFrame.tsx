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
          src="/inv/fita_canto_1.png"
          alt=""
          width={220}
          height={220}
          className="absolute left-0 top-0 select-none w-[144px] md:w-[176px] lg:w-[200px]"
          priority
        />
        <Image
          src="/inv/fita_canto_1.png"
          alt=""
          width={220}
          height={220}
          className="absolute right-0 top-0 select-none w-[144px] md:w-[176px] lg:w-[200px]"
          style={{ transform: "scaleX(-1)" }}
          priority
        />
        <Image
          src="/inv/fita_canto_2.png"
          alt=""
          width={220}
          height={220}
          className="absolute bottom-0 left-0 select-none w-[144px] md:w-[176px] lg:w-[200px]"
        />
        <Image
          src="/inv/fita_canto_2.png"
          alt=""
          width={220}
          height={220}
          className="absolute bottom-0 right-0 select-none w-[144px] md:w-[176px] lg:w-[200px]"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>

      {/* Scrollable content — wider on desktop */}
      <div className="relative z-10 mx-auto max-w-[488px] md:max-w-[680px] lg:max-w-[900px] px-6 md:px-10 pb-36">
        {children}
      </div>
    </>
  );
}
