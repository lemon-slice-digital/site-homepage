# CLAUDE.md

This file provides guidance when working with code in this repository.

## Project Overview

This is the official website for **lemon slice digital** - a digital consultancy. The site has been modernized to use **Astro** for modularity, component reusability, and static site generation, and includes a multi-stage **Docker** container setup with Nginx for deployment.

## Directory Structure

- **src/** - Astro source files
  - `pages/index.astro` - Main homepage (`/`)
  - `pages/studios/` - Studios section (`/studios`, `/studios/privacy-policy`, `/studios/ambiance`)
  - `pages/labs/` - Labs section (`/labs`, `/labs/privacy-policy`)
  - `layouts/` - Astro page layouts (`Layout.astro`, `StudiosLayout.astro`)
  - `components/` - Reusable Astro section components (`Nav`, `Hero`, `About`, `Services`, `Strategy`, `Productions`, `Teams`, `Process`, `Approach`, `Insights`, `Contact`, `PrivacySection`, `Footer`)
- **public/** - Static assets (CSS, JS, images, webfonts) copied into build output (`dist/`)
- **Dockerfile** & **nginx.conf** - Multi-stage build (Bun builder -> Nginx static server container)
- **docker-compose.yml** - Docker Compose config for running the container on port 8080

## Development Workflow

This project uses **Bun** as the package manager.

```bash
# Start local development server
bun run dev

# Build static bundle to dist/
bun run build

# Preview static build locally
bun run preview
```

## Docker Deployment

```bash
# Build Docker image
docker build -t site-homepage:latest .

# Run container with Docker Compose
docker compose up -d
```
