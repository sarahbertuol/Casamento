// Edit these values with the couple's real information before launch.
export const weddingConfig = {
  bride: "Marina",
  groom: "Olavo",

  // ISO 8601 datetime, used by the countdown. Keep the timezone offset.
  weddingDateTime: "2026-12-12T17:00:00-03:00",
  timeZone: "America/Sao_Paulo",

  ceremonyTime: "17h",
  ceremonyLocation: "Igreja Nossa Senhora do Brasil",
  receptionLocation: "Rosewood São Paulo",
  receptionLocationUrl: "https://maps.google.com/?q=Rosewood+Sao+Paulo",
  address: "Av. Brigadeiro Faria Lima, 0000 - São Paulo, SP",
  dressCode: "Esporte fino",

  contactName: "{{CONTATO_NOME}}",
  contactPhone: "{{CONTATO_TELEFONE}}",

  spotifyPlaylistUrl:
    process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_URL ?? "https://open.spotify.com/playlist/{{PLAYLIST_ID}}",
  giftsLink: process.env.NEXT_PUBLIC_LINK_PRESENTES ?? "{{LINK_PRESENTES}}",
  hotelSuggestionsUrl: "{{LINK_HOTEIS}}",
} as const;
