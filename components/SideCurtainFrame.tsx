import Image from "next/image";

export function SideCurtainFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fixed linen texture — stays still while content scrolls over it */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: "url(/inv/SAVE_fundo-06.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
        aria-hidden
      />

      {/* Fixed corner ribbon overlay — always on top, passes pointer events through */}
      <div
        className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
        aria-hidden
      >
        <div className="relative mx-auto h-full max-w-[488px]">
          <Image
            src="/inv/fita_canto_1.png"
            alt=""
            width={200}
            height={200}
            className="absolute left-0 top-0 w-36 select-none"
            priority
          />
          <Image
            src="/inv/fita_canto_1.png"
            alt=""
            width={200}
            height={200}
            className="absolute right-0 top-0 w-36 select-none"
            style={{ transform: "scaleX(-1)" }}
            priority
          />
          <Image
            src="/inv/fita_canto_2.png"
            alt=""
            width={200}
            height={200}
            className="absolute bottom-0 left-0 w-36 select-none"
          />
          <Image
            src="/inv/fita_canto_2.png"
            alt=""
            width={200}
            height={200}
            className="absolute bottom-0 right-0 w-36 select-none"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>

      {/* Scrollable content — padded clear of all four corner ribbons */}
      <div className="relative z-10 mx-auto max-w-[488px] px-6 pb-36">
        {children}
      </div>
    </>
  );
}
