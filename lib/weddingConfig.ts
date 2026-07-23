// Preencha os dados reais antes do lançamento.
export const weddingConfig = {
  personName: "Bruna Fagundes",
  eventType: "Formatura em Direito",

  // ISO 8601 — usado pela contagem regressiva.
  eventDateTime: "2026-09-19T19:30:00-03:00",
  timeZone: "America/Sao_Paulo",

  eventTime: "19h30",
  venueName: "Casa NTX",
  venueAddress: "Av. das Indústrias, 1395 — Porto Alegre, RS",
  venueMapsUrl: "https://www.google.com/maps/search/Casa+NTX+Av+das+Industrias+1395+Porto+Alegre",
  venueWazeUrl: "https://waze.com/ul?q=Av.+das+Indústrias,+1395,+Porto+Alegre",
  dressCode: "Traje Social Completo",

  // Contato do cerimonial
  contactName: "{{CONTATO_CERIMONIAL}}",
  contactPhone: "{{CONTATO_TELEFONE}}",

  // Hotéis: preencha com os dados reais — cada item vira um card clicável.
  hotels: [
    { name: "{{HOTEL 1}}", url: "{{LINK_HOTEL_1}}" },
    { name: "{{HOTEL 2}}", url: "{{LINK_HOTEL_2}}" },
    { name: "{{HOTEL 3}}", url: "{{LINK_HOTEL_3}}" },
  ],

  giftsLink: process.env.NEXT_PUBLIC_LINK_PRESENTES ?? "{{LINK_PRESENTES}}",

  // Texto de boas-vindas (array de parágrafos — preencher quando disponível).
  welcomeLines: [
    "{{TEXTO A CONFIRMAR — PREENCHER AQUI}}",
  ],
} as const;
