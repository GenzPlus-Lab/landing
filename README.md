# GenzPlus landing

A simple header and launching soon hero built with Astro and Tailwind CSS.

## Run locally

```sh
bun install
bun run dev
```

## Check and build

```sh
bun run check
bun run build
bun run preview
```

The static site builds to `dist/`. The landing page is `/`.

Edit the headline and description in `src/pages/index.astro`. The hero is in `src/components/sections/HeroNeonSurge.astro` and the colors are in `src/styles/global.css`.

## Deploy to Cloudflare Workers

The site deploys as Workers static assets. No Astro adapter or Worker script is needed. Settings are in `wrangler.jsonc` and response headers are in `public/_headers`.

```sh
bunx wrangler login   # first time only
bun run cf:preview    # build and serve locally with the Workers runtime
bun run cf:deploy     # build and deploy
```

To deploy on every push, import the repository in the Cloudflare dashboard under Workers & Pages and use:

- Build command: `bun run build`
- Deploy command: `bunx wrangler deploy`

The Worker name in the dashboard must match `name` in `wrangler.jsonc`.

The site URL defaults to `https://genzplustech.com/`. Set `PUBLIC_SITE_URL` at build time to override it.

## Markdown pages

Add `.md` files anywhere inside the `src/contents/` folder. Nested folders become part of the URL. The `src/contents` prefix and `.md` extension are left out.

```text
src/contents/products/paisa-aayo/privacy-policy.md
→ /products/paisa-aayo/privacy-policy/

src/contents/terms.md
→ /terms/
```

Use lowercase names with hyphens for predictable URLs. The homepage stays in `src/pages/index.astro`.

Frontmatter is optional:

```md
---
title: Paisa Aayo Privacy Policy
description: Privacy policy for Paisa Aayo.
---

## Information we collect

Add your content here.
```

The title is used for page metadata. If the Markdown has no `#` heading, the page also displays the title as its heading. Without frontmatter, the first `#` heading or filename supplies the title.

Markdown pages share the site header and have styles for headings, lists, links, tables and code. Files are picked up during development and generated when you run `bun run build`. Adding a page does not automatically add a header link.

A single line break in Markdown displays as a line break on the page. Use a blank line to start a separate paragraph.


Adapted from [Astro Landing Kit](https://github.com/loSpaccaBit/astro-landing-kit), under the MIT license. The original license is kept in `LICENSE`.
