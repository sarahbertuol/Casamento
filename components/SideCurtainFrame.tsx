export function SideCurtainFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-screen max-w-[488px] bg-background">
      <main className="w-full px-6 py-10 sm:px-10">{children}</main>
    </div>
  );
}
