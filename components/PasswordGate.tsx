"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PASSWORD = "Formaturabruna";
const STORAGE_KEY = "bf_access";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
    setReady(true);
  }, []);

  if (!ready) return null;

  if (unlocked) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6">
      {/* Linen background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: "url(/inv/SAVE_fundo-06.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 bg-white/60 -z-[5]" aria-hidden />

      {/* Corner ribbons */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
        <Image src="/inv/CANTONEIRA-17.png" alt="" width={1675} height={2601}
          className="absolute left-0 top-0 select-none mix-blend-multiply w-[120px] md:w-[160px]"
          style={{ transform: "scaleX(-1)" }} priority />
        <Image src="/inv/CANTONEIRA-17.png" alt="" width={1675} height={2601}
          className="absolute right-0 top-0 select-none mix-blend-multiply w-[120px] md:w-[160px]"
          priority />
        <Image src="/inv/CANTONEIRA-17.png" alt="" width={1675} height={2601}
          className="absolute bottom-0 left-0 select-none mix-blend-multiply w-[120px] md:w-[160px]"
          style={{ transform: "scale(-1,-1)" }} />
        <Image src="/inv/CANTONEIRA-17.png" alt="" width={1675} height={2601}
          className="absolute bottom-0 right-0 select-none mix-blend-multiply w-[120px] md:w-[160px]"
          style={{ transform: "scaleY(-1)" }} />
      </div>

      {/* Gate card */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center w-full max-w-[320px]">
        <Image
          src="/inv/LOGO_BF.png"
          alt="Bruna Fagundes"
          width={1699}
          height={1167}
          className="mix-blend-multiply w-[180px] h-auto drop-shadow-sm"
          priority
        />

        <Image
          src="/inv/Textos-03.png"
          alt="Convida para celebrar sua Formatura em Direito"
          width={3922}
          height={987}
          className="mix-blend-multiply w-full max-w-[260px] h-auto"
        />

        <div className="divider w-full max-w-[200px]" />

        <p className="label-caps text-ink-light" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>
          ÁREA EXCLUSIVA PARA CONVIDADOS
        </p>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Digite a senha"
            autoComplete="off"
            className="rounded border border-gold/40 bg-transparent px-3 py-3 text-base text-center focus:border-gold focus:outline-none placeholder:text-ink-light/50"
          />
          {error && (
            <p className="text-sm text-red-700">Senha incorreta. Tente novamente.</p>
          )}
          <button
            type="submit"
            className="label-caps mt-1 rounded-full border-2 border-wine px-8 py-3 text-sm text-wine transition-colors hover:bg-wine hover:text-white"
          >
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
}
