# Feliz Aniversario, Milena

Web app em React + Vite + Tailwind CSS + Framer Motion para um presente de aniversario interativo.

## Comandos

```bash
pnpm install
pnpm dev
```

Com npm:

```bash
npm install
npm run dev
```

## Criando do zero

```bash
pnpm create vite milena-birthday-webapp --template react
cd milena-birthday-webapp
pnpm add framer-motion lucide-react
pnpm add -D tailwindcss postcss autoprefixer
pnpm exec tailwindcss init -p
pnpm dev
```

## Estrutura

```txt
src/
  components/
    Gallery.jsx
    Hero.jsx
    MessageCard.jsx
    Timeline.jsx
  data/
    moments.js
  styles/
    index.css
  App.jsx
  main.jsx
```
