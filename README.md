# Site de Convite de Casamento

Next.js 16 (App Router) + TypeScript + Tailwind v4 + Framer Motion.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Conteúdo e personalização

- `lib/weddingConfig.ts` — nomes, data, local, contato, links (Spotify, presentes, hotéis). Substitua todos os `{{PLACEHOLDERS}}` pelos dados reais.
- `content/pt.json` / `content/en.json` — todo o copy do site, incluindo os textos do accordion "Como chegar" (`gettingThere.content`).
- `public/illustrations/` — ilustrações placeholder em SVG. Troque pelos arquivos finais (mesmo nome de arquivo) quando a arte autoral estiver pronta.

## RSVP e Mensagens (Google Sheets)

1. Crie uma planilha Google com as abas `RSVP` e `Mensagens`.
2. Crie uma Service Account no Google Cloud e compartilhe a planilha com o e-mail dela (permissão de Editor).
3. Copie `.env.local.example` para `.env.local` e preencha `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY` e `GOOGLE_SHEET_ID`.

Sem essas variáveis configuradas, os formulários respondem com um erro amigável em vez de falhar silenciosamente.

## Deploy na Vercel

```bash
npm install -g vercel
vercel login
vercel link
vercel env add GOOGLE_SERVICE_ACCOUNT_EMAIL
vercel env add GOOGLE_PRIVATE_KEY
vercel env add GOOGLE_SHEET_ID
vercel env add NEXT_PUBLIC_SPOTIFY_PLAYLIST_URL
vercel env add NEXT_PUBLIC_LINK_PRESENTES
vercel --prod
```
