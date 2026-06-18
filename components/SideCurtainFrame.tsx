import Image from "next/image";

export function SideCurtainFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[488px] justify-center bg-background">
      <div
        aria-hidden
        className="fixed inset-y-0 left-0 hidden w-10 sm:block md:w-14"
      >
        <Image src="/illustrations/curtain.svg" alt="" fill className="object-cover" />
      </div>
      <div
        aria-hidden
        className="fixed inset-y-0 right-0 hidden w-10 scale-x-[-1] sm:block md:w-14"
      >
        <Image src="/illustrations/curtain.svg" alt="" fill className="object-cover" />
      </div>
      <main className="w-full px-6 py-10 sm:px-10">{children}</main>
    </div>
  );
}
