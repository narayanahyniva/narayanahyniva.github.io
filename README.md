# Narayana Kanaka — AWS & DevOps Portfolio

Personal portfolio with cloud architecture walkthroughs, engineering projects, experience, skills, certification goals, a printable resume, and consultancy contact options.

## Architecture

Static HTML, CSS, and vanilla JavaScript, hosted directly on GitHub Pages at https://narayanahyniva.github.io/. No application framework, backend, transpiler, or runtime npm dependencies. Do not add a CNAME or change the hosting domain.

- `index.html`: semantic page content, project details, contact form, resume and terminal dialogs, SEO and Person structured data.
- `styles.css`: existing component styles, diagrams, grids, and interactive tools. Existing local styling edits were retained.
- `portfolio.css`: professional presentation, responsive refinements, focus states, reduced motion, and resume print styles.
- `script.js`: navigation, searchable directories, filters, project carousel/grid, architecture inspector, skill sphere, deployment simulation, estimator, terminal, dialogs, and contact email drafts.
- `assets/`: social preview image and SVG favicon.
- `robots.txt`, `sitemap.xml`, `.nojekyll`: GitHub Pages crawler and hosting configuration.
- `tools/`: validation, static production staging, browser regression, and optional accessibility/link audit.

## Run locally

Requires Python 3. Run `python -m http.server 8080 --bind 127.0.0.1` and open http://127.0.0.1:8080/.

## Validate and build

Requires Node.js 20 or newer. No dependency installation is needed for these commands:

```sh
npm run check
npm run build
```

The build validates JavaScript syntax, duplicate IDs, local assets, fragment links, JSON-LD, and the primary heading, then copies production files into ignored `dist/`. It does not replace GitHub Pages' direct static publishing workflow. Preview production with `python -m http.server 8081 --bind 127.0.0.1 --directory dist`.

## Browser tests

```sh
npm ci
npm test
npm run audit
```

Tests use headless Microsoft Edge, which must be installed. Playwright and axe-core are pinned development-only dependencies. In a Codex environment with bundled Playwright, set `PLAYWRIGHT_MODULE` to its absolute module path. `AXE_PATH` can point to a local axe.min.js for the audit. `SITE_URL` selects an alternative test origin, such as http://127.0.0.1:8081 for production staging.

The regression suite covers widths 320, 390, 768, 1024, 1440 and 1920; initial scroll position; navigation; terminal; resume opening, dismissal and PDF generation; project views; directory and Linux searches; consultancy scope/cloud selection; security carousel/grid; every architecture option; deployment simulation; and contact draft behavior. Screenshots, PDF and audit output go into ignored `artifacts/`.

The audit runs automated WCAG A/AA rules and read-only external link checks. Automated results do not replace manual assistive-technology testing. LinkedIn returns status 999 to automated requests, so its profile cannot be verified this way.

## Dependency and performance notes

- Lucide 1.47.0 is pinned and deferred. Visible labels remain usable if icon loading fails.
- Mermaid 12.0.0 is pinned and loaded on demand near the architecture section, using strict rendering. Node details and IaC remain available if the CDN is unavailable.
- Google Fonts use display=swap and system fallbacks.
- The former unused Three.js dependency and mouse-tilt handler were removed. The existing canvas skill sphere remains and pauses offscreen or with reduced motion.
- Mermaid security guidance: https://mermaid.js.org/community/security.html. Review dependency releases periodically and rerun the architecture tests before upgrading.

## Content and contact behavior

Forward Deployment Engineering is presented as a career focus, not an invented job title in employment history. Certification cards explicitly distinguish preparation from earned credentials. Existing experience, consultancy offerings and technical case studies are retained.

The contact form opens a mailto draft. It does not send email or store submissions; the visitor must send the draft in their email client. Entered text remains available if the client does not open. WhatsApp links only open when chosen by the visitor.

The FinXServe repository previously linked from the project returned a public 404 on 2026-09-21; its CTA now opens the preserved architecture walkthrough. Confirm repository visibility before restoring a source-code link.

Resume: use View resume, then Print / Save PDF. Printing isolates the resume from the rest of the site.

## Publishing

No push, merge, or deployment is part of local validation. Review and approve changes before publishing to main/master. Generated `dist/`, `artifacts/`, and `node_modules/` must remain untracked.


## Premium design refinement

The current architecture is intentionally preserved: native CSS and browser animations meet the design requirements without Next.js, React, Tailwind, Motion or Three.js. No packages were installed for this refinement.

The palette uses navy #090f1d, electric blue #2563eb, cyan #75ddeb, off-white #f1f5f9 and muted text #b3c1d2. The presentation stylesheet owns the shared glass surfaces, borders, shadows, radii and motion tokens. Blur is limited to the header and selected large panels; card blur is disabled on mobile.

Hero lighting animates transforms and opacity only, and pauses offscreen or while the tab is hidden. The Pause motion control also pauses the skill sphere and CSS animations. Reduced-motion preferences disable decorative motion. Scroll entrances run once through IntersectionObserver and the native Web Animations API; content is visible without JavaScript. No new raster images or animation libraries are downloaded.

This JavaScript-only repository has no configured ESLint task or TypeScript compiler. `npm run check` validates JavaScript syntax and document structure; it is not a TypeScript or ESLint check. Browser tests cover motion controls and no-JavaScript content visibility in addition to the existing feature suite.
