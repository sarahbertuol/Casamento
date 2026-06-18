"use client";

import { useLocale } from "@/lib/i18n";
import { weddingConfig } from "@/lib/weddingConfig";
import { SectionReveal } from "./SectionReveal";

export function PlaylistSection() {
  const { t } = useLocale();

  return (
    <SectionReveal className="flex flex-col items-center gap-4 py-12 text-center">
      <p className="text-lg">{t.playlist.title}</p>
      <a
        href={weddingConfig.spotifyPlaylistUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="label-caps rounded-full border-2 border-wine px-6 py-2 text-sm text-wine transition-colors hover:bg-wine hover:text-background"
      >
        {t.playlist.button}
      </a>
      {/*
        To embed the Spotify player instead of linking out, replace the
        anchor above with:
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playlistId}`}
          width="100%"
          height="152"
          allow="encrypted-media"
        />
      */}
    </SectionReveal>
  );
}
