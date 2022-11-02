# SvelteKit Personal Website
This repo contains an template for a personal website and blog using SvelteKit. It has been designed to use with Github Pages and so is static.

## Features
Although the site is designed to be minimal it is packed with useful features:
- Extended markdown posts
  - GitHub Flavoured Markdown
  - OEmbed
  - Syntax highlighting
  - Frontmatter
  - Automatic Table of Contents
- Image transformations
- SEO
  - On by default, can be overriden per page and post
  - Dynamic OG image generation
- RSS feed generation
- Fuzzy full text search
- Comments and reactions
- Dark mode
- Related Posts
- Privacy focused analytics

All posts are located in the `/content` folder along with additional content.

TODO:
- get markdown rendering to be better
  - oembed
    - fix sizing
  - charts
    - uses directives
  - images
    - generate srcset
    - lazy load
- search make it persist index