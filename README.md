# FootKit Demo

A premium football website built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, and a lightweight file-backed backend layers.

## Features

- Premium landing experience with animated sections
- News, fixtures, live, tables, transfers, statistics, players, and community pages
- File-backed API routes for health, news, fixtures, teams, and predictions
- Admin dashboard route powered by the shared store
- Responsive dark football-themed UI with glassmorphism and motion

## Development

```bash
npm install
npm run dev
```

## Admin API usage

Set an admin header when posting to protected routes:

```bash
curl -X POST http://localhost:3000/api/news \
  -H "x-admin-key: footkit-admin-secret" \
  -H "Content-Type: application/json" \
  -d '{"title":"New story","excerpt":"Fresh content","category":"Transfer","featured":true,"author":"Admin"}'
```

## Production build

```bash
npm run build
```
