---
publishedAt: 3 Nov 2022
---

#### Table of Contents

## Adding Images
You can import images relative to the post's markdown file, using `./path/to/image.png` or relative to the content folder root `/content/posts/image.png`.

<!-- ![](./image-1.avif) -->

## Figures
Figure captions are automatically pulled from the alt-text of an image.

<!-- ![Image with caption](./image-1.avif) -->

Placing figures directly on consecutive lines in markdown results in the figures being placed in the same block as side by side.

<!-- ![Image A](./image-2.avif) -->
<!-- ![Image B](/content/posts/Images/image-2.avif) -->

## Lazy Loading
A `loading=lazy` tag is added to all images to make use of the native lazy loading available on most browers.

## Image transformations
All images in the `content` folder are transformed on build using `sharp` via vite-imagetools. This lets us resize images and use the `srcset` property on images. All images are also converted into webp format. You can add see and these default transformations in `vite.config.js`.