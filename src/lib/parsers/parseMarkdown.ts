import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
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
import rehypePrism from 'rehype-prism-plus';
import remarkEmbedder from '@remark-embedder/core';
import oembedTransformer from '@remark-embedder/transformer-oembed';

import type { Config } from '@remark-embedder/transformer-oembed';

const oembedConfig: Config = ({ url, provider }) => {
  // Allows custom parameters to be added for specific providers
  // if (provider.provider_name === 'Instagram') {
  //   return {
  //     params: { access_token: '{app-id}|{client-token}' }
  //   };
  // }
  return {
    params: {}
  };
};

const renderer = unified()
  .use(remarkParse)
  .use(remarkSmartypants)
  .use(remarkGfm)
  .use(remarkDirective)
  .use(remarkToc, { tight: true, maxDepth: 3 })
  .use(remarkEmbedder, {
    transformers: [[oembedTransformer, oembedConfig]]
  })
  .use(remarkRehype)
  .use(rehypeFigure)
  .use(rehypePrism)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings)
  .use(rehypeExternalLinks, {
    target: '_blank',
    rel: 'nofollow noopener'
  })
  .use(rehypeFormat)
  .use(rehypeStringify);

const parseMarkdown = async (markdown?: string) => {
  if (markdown) {
    return String(await renderer.process(markdown));
  } else {
    return '';
  }
};

export { parseMarkdown };
