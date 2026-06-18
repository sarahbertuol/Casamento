"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale } from "@/lib/i18n";
import { SectionReveal } from "./SectionReveal";

const messageSchema = z.object({
  fullName: z.string().trim().min(1),
  message: z.string().trim().min(1),
});

type MessageValues = z.infer<typeof messageSchema>;

export function MessageForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MessageValues>({ resolver: zodResolver(messageSchema) });

  const onSubmit = async (values: MessageValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/message", {
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
      <h2 className="section-title">{t.message.title}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 text-left"
      >
        <label className="flex flex-col gap-1">
          <span className="label-caps text-xs text-wine">{t.message.fullNameLabel}</span>
          <input
            {...register("fullName")}
            className="rounded border border-wine/40 bg-transparent px-3 py-2"
          />
          {errors.fullName && (
            <span className="text-sm text-red-700">{t.validation.required}</span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          <span className="label-caps text-xs text-wine">{t.message.messageLabel}</span>
          <textarea
            {...register("message")}
            rows={4}
            className="rounded border border-wine/40 bg-transparent px-3 py-2"
          />
          {errors.message && (
            <span className="text-sm text-red-700">{t.validation.required}</span>
          )}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="label-caps mt-2 rounded-full border-2 border-wine px-6 py-2 text-sm text-wine transition-colors hover:bg-wine hover:text-background disabled:opacity-50"
        >
          {t.message.submit}
        </button>

        {status === "success" && (
          <p className="text-sm text-wine">{t.message.successMessage}</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-700">{t.message.errorMessage}</p>
        )}
      </form>
    </SectionReveal>
  );
}
