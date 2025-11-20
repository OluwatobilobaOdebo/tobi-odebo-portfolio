# Tobi Odebo Portfolio

A personal portfolio built with Next.js that showcases Tobi Odebo's product, engineering, and analytics work. The site highlights signature projects, a skills overview, and dedicated pages for the About and Contact sections.

## Project Structure
- **Home page (`/`)**: Hero introduction with calls to action, skills summary, and featured projects pulled from `data/projects.ts`.
- **About (`/about`)**: Narrative on background, motivation, and approach to building products.
- **Contact (`/contact`)**: Contact form that posts to `/api/contact` plus a direct email link.

## Tech Stack
- Next.js 16 with the App Router
- React 19
- Tailwind CSS (v4) and custom design tokens defined in `app/globals.css`
- Iconography via `lucide-react`

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the site. Pages hot-reload as you edit.

## Deployment
Build the production bundle with:
```bash
npm run build
```
Then start the optimized server:
```bash
npm run start
```

## Customization
- Update featured projects in [`data/projects.ts`](data/projects.ts).
- Adjust global styles and theme tokens in [`app/globals.css`](app/globals.css).
- Modify page content in the corresponding route files under `app/`.
