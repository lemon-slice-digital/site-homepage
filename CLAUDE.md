# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "lemon slice digital" - a digital consultancy. The site is built with vanilla HTML, CSS, and JavaScript (no build tools or package managers).

## Directory Structure

- **www/** - Production website files served to visitors
  - `index.html` - Main homepage
  - `css/` - Stylesheets (Bootstrap, custom styles)
  - `js/` - JavaScript libraries and custom scripts
  - `images/` - Site images and assets
  - `labs/` - Labs section (separate landing page)
  - `studios/` - Studios section (Android apps showcase, uses Tailwind)
- **template/** - Original HTML template files (reference only, not deployed)
- **assets/** - Source assets (privacy policy markdown, unsplash images)
- **experiments/** - HTML experiments (baseline.html, highlight.html)

## Development

No build process - edit HTML/CSS/JS files directly. The `www/` directory is the document root.

### Key Files

- `www/index.html` - Main site (Bootstrap-based, HK Grotesk font)
- `www/css/style.css` - Primary custom styles
- `www/css/style-responsive.css` - Responsive breakpoints
- `www/studios/index.html` - Standalone page using Tailwind CDN and Plus Jakarta Sans font
- `www/labs/index.html` - Standalone landing page

### External Dependencies (CDN/Inline)

Main site uses:
- Bootstrap 5.x (CSS + JS bundle)
- jQuery + various plugins (parallax, lightbox, carousel, etc.)
- Font Awesome icons
- GSAP for animations
- Umami analytics (stats.lemonslice.de)

Studios section additionally uses:
- Tailwind CSS (via CDN script)

## Conventions

- Main site navigation links to external subdomains: studios.lemonslice.de, labs.lemonslice.de
- The site uses section-based navigation with smooth scrolling (local-scroll class)
- Dark/light variants available in template for reference
