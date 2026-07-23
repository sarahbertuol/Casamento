"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

const rsvpSchema = z.object({
  fullName: z.string().trim().min(1),
  guestName: z.string().trim().optional(),
  attending: z.enum(["yes", "no"], { message: "required" }),
});

type RsvpValues = z.infer<typeof rsvpSchema>;

export function RsvpForm() {
  const { t } = useLocale();
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RsvpValues>({ resolver: zodResolver(rsvpSchema) });

  const onSubmit = (values: RsvpValues) => {
    const atendendo =
      values.attending === "yes"
        ? "✅ Sim, estarei presente!"
        : "❌ Infelizmente não poderei comparecer";
    const acompanhante = values.guestName
      ? `\nAcompanhante: ${values.guestName}`
      : "";
    const message =
      `Olá Bruna! 🎓✨\n\nConfirmação de presença na Formatura em Direito\n\nNome: ${values.fullName}${acompanhante}\n\n${atendendo}\n\n19 de setembro de 2026 — Casa NTX, Porto Alegre`;

    window.open(
      `https://wa.me/${weddingConfig.rsvpWhatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSent(true);
  };

  return (
    <SectionReveal className="flex flex-col items-center gap-6 py-14 text-center">
      <Image src="/inv/joia_3_heart.png" alt="" width={50} height={50} className="opacity-80" />
      <h2 className="section-title">{t.rsvp.title}</h2>

      {sent ? (
        <div className="flex flex-col items-center gap-3 py-4">
          <p className="text-base text-wine">{t.rsvp.successMessage}</p>
          <p className="text-sm text-ink-light">O WhatsApp abrirá com a mensagem pronta. 💬</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 text-left"
        >
          <label className="flex flex-col gap-1">
            <span className="label-caps text-[0.65rem] text-wine">{t.rsvp.fullNameLabel}</span>
            <input
              {...register("fullName")}
              className="rounded border border-wine/40 bg-transparent px-3 py-2.5 text-base focus:border-wine focus:outline-none"
            />
            {errors.fullName && (
              <span className="text-sm text-red-700">{t.validation.required}</span>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="label-caps text-[0.65rem] text-wine">{t.rsvp.guestNameLabel}</span>
            <input
              {...register("guestName")}
              className="rounded border border-wine/40 bg-transparent px-3 py-2.5 text-base focus:border-wine focus:outline-none"
            />
          </label>

          <fieldset className="flex flex-col gap-2">
            <span className="label-caps text-[0.65rem] text-wine">{t.rsvp.attendanceLabel}</span>
            <div className="flex gap-6">
              <label className="flex cursor-pointer items-center gap-2 text-base">
                <input type="radio" value="yes" {...register("attending")} className="accent-wine" />
                {t.rsvp.yes}
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-base">
                <input type="radio" value="no" {...register("attending")} className="accent-wine" />
                {t.rsvp.no}
              </label>
            </div>
            {errors.attending && (
              <span className="text-sm text-red-700">{t.validation.required}</span>
            )}
          </fieldset>

          <button
            type="submit"
            className="label-caps mt-2 flex items-center justify-center gap-2 rounded-full border-2 border-wine px-8 py-3 text-sm text-wine transition-colors hover:bg-wine hover:text-background"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t.rsvp.submit} via WhatsApp
          </button>
        </form>
      )}
    </SectionReveal>
  );
}
