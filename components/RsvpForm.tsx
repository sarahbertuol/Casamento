"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale } from "@/lib/i18n";
import { SectionReveal } from "./SectionReveal";

const rsvpSchema = z.object({
  fullName: z.string().trim().min(1),
  guestName: z.string().trim().optional(),
  attending: z.enum(["yes", "no"], { message: "required" }),
});

type RsvpValues = z.infer<typeof rsvpSchema>;

export function RsvpForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RsvpValues>({ resolver: zodResolver(rsvpSchema) });

  const onSubmit = async (values: RsvpValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionReveal className="flex flex-col items-center gap-6 py-12 text-center">
      <h2 className="section-title">{t.rsvp.title}</h2>
      <Image src="/illustrations/candle.svg" alt="" width={48} height={80} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 text-left"
      >
        <label className="flex flex-col gap-1">
          <span className="label-caps text-xs text-wine">{t.rsvp.fullNameLabel}</span>
          <input
            {...register("fullName")}
            className="rounded border border-wine/40 bg-transparent px-3 py-2"
          />
          {errors.fullName && (
            <span className="text-sm text-red-700">{t.validation.required}</span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          <span className="label-caps text-xs text-wine">{t.rsvp.guestNameLabel}</span>
          <input
            {...register("guestName")}
            className="rounded border border-wine/40 bg-transparent px-3 py-2"
          />
        </label>

        <fieldset className="flex flex-col gap-2">
          <span className="label-caps text-xs text-wine">{t.rsvp.attendanceLabel}</span>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" value="yes" {...register("attending")} />
              {t.rsvp.yes}
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="no" {...register("attending")} />
              {t.rsvp.no}
            </label>
          </div>
          {errors.attending && (
            <span className="text-sm text-red-700">{t.validation.required}</span>
          )}
        </fieldset>

        <button
          type="submit"
          disabled={isSubmitting}
          className="label-caps mt-2 rounded-full border-2 border-wine px-6 py-2 text-sm text-wine transition-colors hover:bg-wine hover:text-background disabled:opacity-50"
        >
          {t.rsvp.submit}
        </button>

        {status === "success" && (
          <p className="text-sm text-wine">{t.rsvp.successMessage}</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-700">{t.rsvp.errorMessage}</p>
        )}
      </form>
    </SectionReveal>
  );
}
