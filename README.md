# Andrés Gerstner · Research Hub

Personal research hub landing page, designed as the QR destination for a scientific poster.

## Stack

Plain HTML + CSS + vanilla JS. No frameworks, no build step, no dependencies.

## Local preview

Open `index.html` in your browser:

```bash
open index.html
```

## Edit your links

All external URLs are centralized in `js/main.js`, inside the `CONFIG.links` array.
Replace every `"#"` placeholder with the real URL:

| Item                    | Field                | Status       |
| ----------------------- | -------------------- | ------------ |
| GitHub                  | `CONFIG.links[0]`    | Set          |
| LinkedIn                | `CONFIG.links[1]`    | Placeholder  |
| Laboratory              | `CONFIG.links[2]`    | Placeholder  |
| Laboratory social nets  | `CONFIG.links[3]`    | Placeholder  |
| Thesis / Project        | `CONFIG.links[4]`    | Placeholder  |
| ORCID                   | `CONFIG.links[5]`    | Placeholder  |

Set `placeholder: true` while a link is not ready; the card renders as a
disabled "soon" item and the site keeps working. Remove `placeholder: true`
when the real URL is set.

## Publish with GitHub Pages

This repository is a **user page**, so it must be named `andresgers.github.io`.
It is served automatically at the domain root:

```
https://andresgers.github.io/
```

1. Push the repository to GitHub:

   ```bash
   git add -A
   git commit -m "Research hub"
   git push
   ```

2. GitHub Pages is enabled by default for user pages (`Settings → Pages`,
   branch `main`, folder `/ (root)`). The site is live at
   `https://andresgers.github.io/` shortly after the push.

The page uses only relative paths (`css/`, `js/`), so it works both at the
domain root and in a project sub-path.
