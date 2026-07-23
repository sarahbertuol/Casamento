export const weddingConfig = {
  personName: "Bruna Fagundes",
  eventType: "Formatura em Direito",

  eventDateTime: "2026-09-19T19:30:00-03:00",
  timeZone: "America/Sao_Paulo",

  eventTime: "19h30",
  venueName: "Casa NTX",
  venueAddress: "Av. das Indústrias, 1395 — Porto Alegre, RS",
  venueMapsUrl: "https://www.google.com/maps/search/Casa+NTX+Av+das+Industrias+1395+Porto+Alegre",
  venueWazeUrl: "https://waze.com/ul?q=Av.+das+Indústrias,+1395,+Porto+Alegre",
  dressCode: "Traje Social Completo",

  contactName: "Fabio",
  contactPhone: "(51) 9122-3456",

  // WhatsApp para RSVP e presentes
  rsvpWhatsapp: "5551912234567",

  hotels: [
    {
      name: "Ibis Porto Alegre Aeroporto",
      url: "https://maps.app.goo.gl/8aErL4S9n77AjUES8",
    },
    {
      name: "Novotel Porto Alegre Aeroporto",
      url: "https://maps.app.goo.gl/s1TjCzYSDreSZ25n6",
    },
    {
      name: "Hotel Deville Prime Porto Alegre",
      url: "https://maps.app.goo.gl/9As9NU7WPHM72zdp7",
    },
    {
      name: "Hotel Intercity Aeroporto Porto Alegre",
      url: "https://maps.app.goo.gl/JyYrhr85n1HU7Q2c8",
    },
  ],

  // Lista de presentes com tom humorístico jurídico
  gifts: [
    {
      name: "Decoração do Escritório",
      tagline: "Para o ambiente digno de uma doutora",
      price: 250,
      image: "/inv/Chaves.png",
    },
    {
      name: "Terninho para Audiências",
      tagline: "O réu se rende só de olhar",
      price: 650,
      image: "/inv/traje_1.png",
    },
    {
      name: "Jantar Comemorativo",
      tagline: "Celebrar que passou na prova da OAB",
      price: 200,
      image: "/inv/Globo.png",
    },
    {
      name: "Spa Day Pós-Aprovação",
      tagline: "Art. 1º da Constituição: você merece",
      price: 380,
      image: "/inv/joia_1.png",
    },
    {
      name: "Livros da Dra. Fagundes",
      tagline: "Para nunca mais precisar do Jusbrasil",
      price: 150,
      image: "/inv/Barrete.png",
    },
    {
      name: "Bolsa de Executiva",
      tagline: "Para carregar o Código Civil com classe",
      price: 450,
      image: "/inv/joia_2.png",
    },
  ],

  giftsLink: "{{LINK_PRESENTES}}",

  // PIX Copia e Cola — substitua pela chave PIX real
  pixKey: "{{PIX_KEY}}",
  pixMerchantName: "Bruna Fagundes",
  pixMerchantCity: "Porto Alegre",

  welcomeLines: [
    "{{TEXTO A CONFIRMAR — PREENCHER AQUI}}",
  ],
} as const;
