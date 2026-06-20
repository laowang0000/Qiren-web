# Ong Qi Ren Portfolio

Personal portfolio website for Ong Qi Ren, an Artificial Intelligence undergraduate focused on AI, machine learning, Web3 analytics, semantic web technology, software development, and software quality assurance.

## Live site

After GitHub Pages is enabled, the site is available at [laowang0000.github.io/Qiren-web](https://laowang0000.github.io/Qiren-web/).

## Tech stack

- React
- Vite
- TypeScript
- Tailwind CSS

## Reproduce locally

```bash
git clone https://github.com/laowang0000/Qiren-web.git
cd Qiren-web
npm install
npm run dev
```

Open `http://127.0.0.1:5174/`. On Windows, after `npm install`, you may also double-click `start-portfolio.bat`.

## Validate and build

```bash
npm test
npm run build
```

The production output is written to `dist/` and is intentionally not committed. GitHub Actions deploys it to GitHub Pages whenever `main` is updated.

## GitHub Pages setup

In the repository, open **Settings → Pages** and choose **GitHub Actions** as the publishing source. The included workflow builds the site with its `/Qiren-web/` base path and deploys it automatically.
