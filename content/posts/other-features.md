---
title: Search, SEO, Comments and More!
publishedAt: 4 Nov 2022
description: In addition to the extended markdown, this site also has, SEO, fuzzy search, automatic related posts, dark mode, analytics, comments, and reactions.
seo:
  title: Custom SEO Title
  description: A custom description
  keywords: [some, key, words]
---

#### Table of Contents

## SEO
All posts and pages include meta tags for SEO. The included information for SEO can be edited at `content/seo.yaml`. Posts use the `title` and `description` properties by default, but can be overriden using the `seo` property in the frontmatter.

A dynamic route is used for the open graph image. This route generates an image using a title and subtitle which is rendered at build time. It uses [Vercel's `satori`](https://github.com/vercel/satori) and other helper libraries to render a Svelte component to an SVG and finally a PNG. The image can be viewed at `api/posts/[slug]/image.png` and `api/image.png`, for example see below.

<!-- ![Image Generation for this post](/api/posts/other-features/image.png) -->
<!-- ![Image Generation for the home page](/api/image.png) -->

## Search
Full body fuzzy searching is available on all posts using [lyra](https://github.com/LyraSearch/lyra). By default the search indexes the following properties: `title`, `description`, `keywords`, `categories` on each post.

The keywords are automatically pulled out from the text content of each post.

### Known Issues
Although a search index (./index.msp) is created at build time, it is currently unused. There is an issue with importing of an index on the browser so at the moment  a new one is created client side. This is not really a problem with a small number of posts, but it would be great to have this working in cases we want to search lots of large posts.

## Related Posts
Using the same keywords as above, related posts are added to each post when a percentage of keywords overlap. The posts which have the most overlapping keywords are selected. You can also override keywords using frontmatter! Be careful when doing this though, as the search will no longer be indexing the full body of the post.


## Comments
Comments and reactions are done using [giscus](https://giscus.app/), each post has a GitHub discussion associated with it that allows readers to interact with your content.

## Analytics
TODO

## Dark Mode
Automatic dark mode is included using Tailwind and a localstorage Svelte store. You can cycle between the system theme (will automatically switch with your device) as well as forcing dark or light mode.

## Pagination
This is done automatically and is prerendered. Settings for how many posts to display per page can be edited (along with other site wide settings) at `$lib/config.ts`. [Find out more in this post](/posts/customisation)