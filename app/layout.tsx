import type { Metadata } from "next";
import { Parisienne, Cormorant_Garamond } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n";
import { SideCurtainFrame } from "@/components/SideCurtainFrame";
import { weddingConfig } from "@/lib/weddingConfig";
import "./globals.css";

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${weddingConfig.bride} & ${weddingConfig.groom}`,
  description: "Convite de casamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${parisienne.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-ink">
        <LocaleProvider>
          <SideCurtainFrame>{children}</SideCurtainFrame>
        </LocaleProvider>
      </body>
    </html>
  );
}
