# lemon slice digital - Homepage

Modern static website for **lemon slice digital**, built with **Astro** and deployable as a lightweight **Docker** container.

## 🚀 Features

- **Astro Component Architecture**: Modularized section components (`Hero`, `Services`, `Strategy`, `Productions`, `Teams`, `Process`, `Approach`, `Insights`, `Contact`, `PrivacySection`, `Footer`).
- **Multi-section support**:
  - Main consultancy homepage (`/`)
  - Lemon Slice Studios (`/studios`, `/studios/ambiance`, `/studios/privacy-policy`)
  - Lemon Slice Labs (`/labs`, `/labs/privacy-policy`)
- **Docker-ready**: Multi-stage `Dockerfile` (Bun build stage + Alpine Nginx web server).
- **Fast Static Site Generation**: Zero JavaScript overhead for static pages where unneeded, with full asset optimization.

## 🛠 Local Development

Uses **Bun** as the package manager.

```bash
# Install dependencies
bun install

# Run Astro dev server (http://localhost:4321)
bun run dev

# Build production bundle into dist/
bun run build

# Preview build locally
bun run preview
```

### Pulling from GitHub Container Registry (GHCR)

Automated container builds are published via GitHub Actions to GHCR:

```bash
docker pull ghcr.io/lemon-slice-digital/site-homepage:latest
docker run -d -p 8080:80 ghcr.io/lemon-slice-digital/site-homepage:latest
```

### Local Build with Docker / Docker Compose

```bash
docker compose up -d --build
```
The site will be accessible at `http://localhost:8080`.
