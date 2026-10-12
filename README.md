# Mountain Night Portfolio

Prem Paudel's portfolio, shared as a starting point for your own. Built with **Next.js, TypeScript, Tailwind CSS, Motion, and shadcn-style components**.

[View the live example](https://prempaudel05.github.io/) · [Download current starter (ZIP)](https://github.com/PremPaudel05/PremPaudel05.github.io/archive/refs/heads/main.zip) · [Customization guide](#make-it-yours)

## Use it for your own portfolio

You can reuse and customize the original code for your own portfolio. See [Template usage](TEMPLATE_USAGE.md) for the reuse permission and which personal assets to replace.

1. Click **Use this template → Create a new repository** at the top of the repository when that button is available. If it is not available, use **Code → Download ZIP** for the current files; do not fork if you want a copy without the original Git history.
2. Name the copy **YOUR-USERNAME.github.io** to publish at `https://YOUR-USERNAME.github.io/`, or choose another name such as **portfolio** to publish at `https://YOUR-USERNAME.github.io/portfolio/`.
3. Clone **your copy**, install dependencies, and customize the content before publishing.

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
npm ci
npm run dev
```

Use Node.js 20 or newer and open [localhost:3000](http://localhost:3000). You do not need API keys, a database, or Prem's GitHub secrets to run or build the project.

## What's included

- A navy night sky, SVG mountains, and shooting stars.
- A portrait that moves behind the foreground mountain as visitors scroll.
- A word-by-word quote reveal and colorful text highlights.
- About, education, experience, project, skill, and contact sections.
- Responsive layouts, keyboard focus styles, and reduced-motion support.
- Static export and a GitHub Pages deployment workflow.

## Make it yours

This repository also powers Prem's live portfolio, so the example content is real. Replace it with your own information rather than publishing the example unchanged.

| What to customize | Where to edit |
| --- | --- |
| Name, introduction, About, education, experience, projects, skills, and contact links | `app/page.tsx` |
| Browser title and search description | `app/layout.tsx` |
| Colors, fonts, layout, portrait outline, and general styling | `app/globals.css` |
| Mountain illustration, hero quote, and attribution | `components/nepal-section.tsx` |
| Quote layout and mountain styling | `components/nepal-section.module.css` |
| Portrait image path, alternative text, and scroll behavior | `components/ui/hero-portrait.tsx` |
| Project and organization images | `public/images/` and their imports in `app/page.tsx` |
| Resume PDF and download name | `public/documents/` and `resumeUrl` / `download` in `app/page.tsx` |
| Reusable UI components | `components/ui/` |

### Add your photo and resume

New copies start with a generic portrait placeholder. Prem's portrait is not included in the current template files.

1. To include your own photo in your source, add it to `public/images/`, for example `portrait.webp`, and change the fallback path string in `components/ui/hero-portrait.tsx` from `"/images/portrait-placeholder.svg"` to `"/images/portrait.webp"`. Update the alternative text and dimensions.
2. To keep your photo's bytes out of the repository, save a WebP image as the Actions secret **PORTFOLIO_PORTRAIT_BASE64**. The workflow decodes it only while building the published site. A transparent cutout works best with the mountain effect.
3. For local development with a deployment-only photo, place it at the ignored path `public/images/portfolio-portrait.webp` and set `NEXT_PUBLIC_PORTRAIT_PATH=/images/portfolio-portrait.webp` in your uncommitted `.env.local` file.
4. Replace the example PDF with your resume, then update `resumeUrl` and the download filename in `app/page.tsx`.
5. Replace the project screenshots and company/university logos with assets appropriate to your own background.

A deployment-only photo is excluded from the current source/template files, **not private from website visitors**. Any image shown on a public website can be downloaded. Earlier versions of the original repository included a cutout; deleting a current file does not erase earlier Git history. New repositories created with **Use this template** start from the current files, while forks retain history.

For Prem's original site only, the workflow can preserve the image from the previous public deployment if no new portrait secret is configured. Other owners receive the placeholder by default. Configuring the portrait secret provides a backup independent of the previous deployment.

For other files added to `public/`, use `assetPath("/your-file.ext")` from `@/lib/asset-path`. This keeps links working both at the domain root and under a repository subpath. Existing imported images are handled by Next.js.

### Personalization checklist

- [ ] Replace Prem's name, bio, education, experience, and project descriptions.
- [ ] Update email, GitHub, LinkedIn, Handshake, and location everywhere they appear.
- [ ] Replace the portrait, its alternative text, and the resume PDF/download filename.
- [ ] Update the browser title, description, quote, and attribution as needed.
- [ ] Remove or replace example company logos and project screenshots.
- [ ] Check contact links, resume downloads, navigation, and the mobile layout.
- [ ] Rewrite this README for your own project, retaining the template usage notice.

## Publish with GitHub Pages

1. In **your copied repository**, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Commit and push your customized files to `main`.
3. Open **Actions → Deploy portfolio to GitHub Pages** and check the build and deployment. You can also choose **Run workflow** after enabling Pages.
4. GitHub displays the published URL in **Settings → Pages**.

The configuration automatically supports any owner's `username.github.io` repository and ordinary project repository names. No photo secret is required for template copies; they build with the generic placeholder. The optional `PORTFOLIO_PORTRAIT_BASE64` secret is only for owners who want a deployment-only photo.

To preview a static build locally:

```bash
npm run build
```

The generated website is in `out/`. Because this is a static export, `npm start` is not the static preview command; use a static file server pointed at `out/`, or use `npm run dev` while editing.

For a custom domain hosted at its root, set `NEXT_PUBLIC_BASE_PATH` to an empty string in the build environment. For other hosting services, the default local build uses the root path unless that variable is explicitly set.

## Contact behavior

The contact section uses an email link and a Copy Email button. No form backend or external form activation is required.

## Reuse and credits

Read [TEMPLATE_USAGE.md](TEMPLATE_USAGE.md) before reusing personal or third-party assets. Tool icon notices are in [public/icons/NOTICE.md](public/icons/NOTICE.md). A link back to the original portfolio is appreciated, but not required for your portfolio.

### For the original repository owner

To enable GitHub's **Use this template** button, open **Settings → General** and select **Template repository**. This setting is separate from the README and workflow files. [GitHub's instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository).
