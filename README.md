# Portfolio

A mount everest-inspired portfolio with a night sky, shooting stars, and smooth scroll animations. Built by **Prem Paudel** with Next.js, TypeScript, Tailwind CSS, and Motion.

[Live demo](https://prempaudel05.github.io/) · [Download ZIP](https://github.com/PremPaudel05/PremPaudel05.github.io/archive/refs/heads/main.zip) · [Reuse permission](TEMPLATE_USAGE.md)

## Features

- A portrait that slides behind the mountains as you scroll.
- Animated quotes and colorful text highlights.
- About, education, experience, projects, skills, and contact sections.
- Mobile-friendly layouts and reduced-motion support.
- GitHub Pages deployment included.

## 1. Get started

Use **Use this template → Create a new repository** if the button is available. Otherwise, download the ZIP, unzip it, and upload the files to a new repository.

Clone your new repository and run these commands. You'll need **Node.js 20 or newer**.

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000) to see your portfolio. No API keys or database needed.

## 2. Make it yours

Replace the example information and assets with your own before publishing.

| Change | Edit here |
| --- | --- |
| Name, bio, experience, projects, skills, and contact links | `app/page.tsx` |
| Browser title and description | `app/layout.tsx` |
| Colors, fonts, spacing, and portrait outline | `app/globals.css` |
| Hero quote and mountains | `components/nepal-section.tsx` |
| Quote and mountain styling | `components/nepal-section.module.css` |
| Portrait and its scroll animation | `components/ui/hero-portrait.tsx` |
| Photos and project images | `public/images/` |
| Resume PDF | `public/documents/` |

### Add your photo

New copies use a placeholder. To replace it:

1. Add your image as `public/images/portrait.webp`. A transparent cutout works best.
2. In `components/ui/hero-portrait.tsx`, replace `/images/portrait-placeholder.svg` with `/images/portrait.webp`.
3. Update the image's alternative text and dimensions to match your photo.

### Add your resume

Put your PDF in `public/documents/`, then update `resumeUrl` and the download filename in `app/page.tsx`.

### Before publishing

- [ ] Replace all example personal details, links, screenshots, and logos.
- [ ] Update your photo, resume, browser title, and description.
- [ ] Check the mobile layout, navigation, contact links, and resume download.

## 3. Publish on GitHub Pages

1. Open your repository's **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push your changes to `main`.
4. Check the deployment in the **Actions** tab. Your website URL appears in **Settings → Pages** when it's ready.

Your repository name determines the address:

| Repository name | Website address |
| --- | --- |
| `YOUR-USERNAME.github.io` | `https://YOUR-USERNAME.github.io/` |
| `portfolio` | `https://YOUR-USERNAME.github.io/portfolio/` |

Both formats are supported automatically.

## Optional setup

<details>
<summary>Keep your photo out of the repository</summary>

Store your WebP image encoded as Base64 in a GitHub Actions secret named `PORTFOLIO_PORTRAIT_BASE64`. The deployment workflow adds it during the build.

For local development, place the image at `public/images/portfolio-portrait.webp` and add this line to `.env.local`. Both paths are ignored by Git:

```env
NEXT_PUBLIC_PORTRAIT_PATH=/images/portfolio-portrait.webp
```

Images displayed on a public website can still be downloaded. Prem's portrait is excluded from the current template files, but an earlier version remains in Git history. Use the template button or ZIP for a fresh copy; forks include that history.

</details>

<details>
<summary>Build, file paths, and custom domains</summary>

Run `npm run build` to create the static site in `out/`. Use a static file server to preview that folder, or `npm run dev` while editing.

For new files in `public/`, use `assetPath("/your-file.ext")` from `@/lib/asset-path` when linking to them. This keeps links working under repository subpaths.

For a custom domain hosted at its root, set `NEXT_PUBLIC_BASE_PATH` to an empty string in the build environment.

</details>

## Reuse and credits

You're welcome to adapt the original code for your personal portfolio. Keep [TEMPLATE_USAGE.md](TEMPLATE_USAGE.md) with your copy and replace Prem's personal content with your own. Website credit is appreciated but optional.

Third-party assets keep their own licenses. See the [icon notices](public/icons/NOTICE.md).
