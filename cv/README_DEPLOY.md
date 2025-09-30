This folder contains the Next.js site built for static export and deployment to GitHub Pages.

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` which does the following:

- Runs on pushes to `main`.
- Installs Node.js and dependencies inside the `cv/` folder.
- Runs `npm run build` inside `cv/`, which in this project produces a static export in `cv/out`.
- Uploads the `cv/out` directory as the Pages artifact and deploys it via the official actions.
