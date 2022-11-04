import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkEmoji from 'remark-emoji';
import remarkSmartypants from 'remark-smartypants';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeFormat from 'rehype-format';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
// @ts-expect-error rehypeFigure does not have types
import rehypeFigure from 'rehype-figure';
import rehypeRewriteUrls, { type TransformFn } from '$lib/utils/rehypeRewriteUrls';
import rehypePrism from 'rehype-prism-plus';
import remarkEmbedder from '@remark-embedder/core';
import oembedTransformer from '@remark-embedder/transformer-oembed';
import { isExternalLink, isInternalLink } from '$lib/utils/isExternalLink';
import type { Config } from '@remark-embedder/transformer-oembed';

import path from 'node:path';
import { base } from '$app/paths';

const oembedConfig: Config = ({ url, provider }) => {
  if (provider.provider_name === 'YouTube') {
    return {
      params: {
        isYoutube: true
      }
    };
  }
  // Allows custom parameters to be added for specific providers
  return {
    params: {}
  };
};

const contentFolder = '../../../';

const transformUrl: TransformFn = async (url, node, options) => {
  const { directory } = options;

  if (isInternalLink(url)) {
    if (directory && node.tagName === 'img') {
      const isRelativeToFile = url.startsWith('./');
      const isRelativeToContents = url.startsWith('/content');

      if (isRelativeToFile || isRelativeToContents) {
        const images = import.meta.glob<{ default: string }>([
          '/**/*.{png,jpeg,jpg,webp,avif}',
          '!/build/**'
        ]);
        if (isRelativeToFile) {
          const absPath = path.resolve(directory, url);
          url = `/content/${path.relative(contentFolder, absPath)}`;
        }
        const resolver = images[url];
        const result = (await resolver()).default;
        return result;
      }
    }
    return `${base}${url}`;
  }
  return url;
};

const miniRenderer = unified()
  .use(remarkParse)
  .use(remarkSmartypants)
  .use(remarkGfm)
  .use(remarkEmoji)
  .use(remarkRehype)
  .use(rehypePrism)
  .use(rehypeExternalLinks, {
    target: '_blank',
    rel: 'nofollow noopener'
  })
  .use(rehypeFormat)
  .use(rehypeStringify);

const parseMarkdown = async (markdown?: string, directory?: string) => {
  if (markdown) {
    const renderer = directory
      ? unified()
          .use(remarkParse)
          .use(remarkSmartypants)
          .use(remarkGfm)
          .use(remarkEmoji)
          .use(remarkDirective)
          .use(remarkToc, { tight: true, maxDepth: 3 })
          .use(remarkEmbedder, {
            transformers: [[oembedTransformer, oembedConfig]],
            handleHTML: (html, info) => {
              // Injects aspect ratios for the youtube player as an inline style
              if (info.url.includes('youtube.com') && html != null) {
                const findDimmensionsRegex = /(<iframe\s).*?width="(\d+?)"\s.*?height="(\d+?)"/g;

                const match = findDimmensionsRegex.exec(html);
                if (match) {
                  const index = match[1].length + (match.index ?? 0);
                  const width = parseInt(match[2]);
                  const height = parseInt(match[3]);
                  const cssInjection = `class="oembed-youtube" style="--aspect-ratio: ${
                    width / height
                  }" `;
                  return html.slice(0, index) + cssInjection + html.slice(index);
                }
              }

              return html;
            }
          })
          .use(remarkRehype)
          .use(rehypeFigure)
          .use(rehypePrism)
          .use(rehypeRewriteUrls, {
            directory,
            transformUrl
          })
          .use(rehypeSlug)
          .use(rehypeAutolinkHeadings)
          .use(rehypeExternalLinks, {
            target: '_blank',
            rel: 'nofollow noopener'
          })
          .use(rehypeFormat)
          .use(rehypeStringify)
      : miniRenderer;

    const html = String(await renderer.process(markdown));
    return html;
  } else {
    return '';
  }
};

export { parseMarkdown };
