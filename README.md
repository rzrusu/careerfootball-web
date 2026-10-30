# Pro Footballer Life Website

This website is live @ [profootballerlife.com](https://profootballerlife.com)

Built with [Astro](https://astro.build) and Tailwind CSS. It ships as static HTML, with a few small scripts for the interactive parts.

## Setup

Requires Node 22.23.4 or newer.

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:4321`:

```bash
npm run dev
```

## Production

Build the site to `dist/`, then preview it locally:

```bash
npm run build
npm run preview
```

Pushes to `main` deploy to GitHub Pages through `.github/workflows/deploy.yml`.

## Blog posts

Add a Markdown file to `src/content/blog/` with `title`, `description`, `date`, `author`, `type` and an optional `image` in its frontmatter. Put images in `src/assets/blog/` and reference them with a relative path so they get optimized:

```md
![Mail inbox](../../assets/blog/mail-feature@2x.png)
```

To use components in a post, name the file `.mdx` and import them, for example `Carousel` from `src/components/Carousel.astro`.
