# SvelteKit Personal Website
This repo contains an template for a personal website and blog using SvelteKit. The goal was to get a minimal and fast website that can be deployed on GitHub Pages while not comprimising on features you would expect a good personal website or blog to have.

## Features
Although the site is designed to be minimal it is packed with useful features:
- Extended markdown posts
  - GitHub Flavoured Markdown
  - OEmbed
  - Syntax highlighting
  - Frontmatter
  - Automatic Table of Contents
- Image transformations
  - Automatically generate srcsets
  - Lazy load images
- SEO
  - On by default, can be overriden per page and post
  - Dynamic OG image generation
- RSS feed generation
- Fuzzy full text search
- Comments and reactions
- Responsive design
- Dark mode
- Related Posts
- Share buttons
- ~Privacy focused analytics~

## Installing
TODO lots of prerequisites

## Creating Content
TODO: Maybe add commands like pnpm create-post

All posts are located in the `/content` folder along with additional YAML content for editing certain pages.

## Deploying
TODO
Explain deploying to github pages -> user.github.io vs user.github.io/website

## To Do
- [ ] Fix github pages deploy when using a path (user.github.io/repo)
  - Links to open graph images are broken in markdown renderer
- [ ] Improve markdown rendering
  - [ ] charts
    - use directives to add charts
      - pancake charts
      - or some sort of js free charts
      - syntax something like:
        ::chart[Title of Chart]{type=bar data=./file.csv}
  - [ ] images
    - Fix build issues
- [ ] Use persisted search index
- [ ] Add in analytics