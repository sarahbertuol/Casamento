import Image from "next/image";

export function SideCurtainFrame({ children }: { children: React.ReactNode }) {
  const ribbon = "/illustrations/corner-ribbon.svg";

  return (
    <div className="relative mx-auto min-h-screen max-w-[488px] bg-background overflow-x-hidden">
      <Image src={ribbon} alt="" width={130} height={200} aria-hidden
        className="absolute top-0 right-0 pointer-events-none select-none z-10" />
      <Image src={ribbon} alt="" width={130} height={200} aria-hidden
        className="absolute top-0 left-0 pointer-events-none select-none z-10 scale-x-[-1]" />
      <Image src={ribbon} alt="" width={130} height={200} aria-hidden
        className="absolute bottom-0 right-0 pointer-events-none select-none z-10 scale-y-[-1]" />
      <Image src={ribbon} alt="" width={130} height={200} aria-hidden
        className="absolute bottom-0 left-0 pointer-events-none select-none z-10 [transform:scaleX(-1)_scaleY(-1)]" />

      <main className="relative z-20 w-full px-8 py-10">{children}</main>
    </div>
  );
}
