# Paper Website

This folder is a simple static project page for:

**Learning Latent Protein Languages for Autoregressive Generation**

It uses only:

- `index.html`
- `styles.css`
- files in `assets/`

No server, framework, or build step is required.

## Preview Locally

Open `index.html` in a browser.

## Recommended GitHub Pages Setup

The easiest first-time setup is to publish this as the `docs/` folder of the existing GitHub repository:

`https://github.com/mahdip72/latent_protein_languages`

Steps:

1. Rename this folder from `paper-site` to `docs`.
2. Put `docs/` at the root of the GitHub repository.
3. Push the repository to GitHub.
4. On GitHub, go to **Settings** -> **Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/docs`
6. Save.

GitHub will publish the page at:

`https://mahdip72.github.io/latent_protein_languages/`

It can take a few minutes for the URL to start working.

## Other Option

You can also create a separate repository just for the paper page. If the repo is named `latent-protein-languages`, GitHub Pages would publish it at:

`https://mahdip72.github.io/latent-protein-languages/`

Using `docs/` inside the existing code repository is simpler because the paper page and code stay together.
