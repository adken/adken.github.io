# adken.github.io

Personal academic portfolio — Kennedy Adriko  
PhD Researcher, Jülich Supercomputing Centre (JSC), Forschungszentrum Jülich

Built with React, deployed to GitHub Pages.

---

## Setup

```bash
npm install
```

## Local development

```bash
npm start
```

Opens at http://localhost:3000

## Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages   # first time only
npm run deploy
```

This runs `npm run build` then pushes the `build/` folder to the `gh-pages` branch of your repo.

Make sure `"homepage"` in `package.json` matches your GitHub Pages URL:
```json
"homepage": "https://adken.github.io"
```

## Updating content

All content lives in `src/App.jsx`. Each section is a separate component:
- `About` — bio, research interests
- `Research` — publications list (add new papers to the `pubs` array)
- `Projects` — affiliated projects
- `CV` — education, affiliations, skills
- `Contact` — contact links

After editing, run `npm run deploy` to publish.
