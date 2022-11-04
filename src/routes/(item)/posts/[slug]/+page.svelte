<script lang="ts">
  import Giscus from '@giscus/svelte';
  import { formatDate } from '$lib/utils';
  import { dark } from '$lib/stores/theme';
  import PostList from '$lib/components/PostList.svelte';
  import ReadingTime from '$lib/components/ReadingTime.svelte';
  import '$lib/prism.css';

  import type { PageData } from './$types';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import SvelteSEO from 'svelte-seo';

  import home from '$content/home.yaml';
  import seo from '$content/seo.yaml';
  import { page } from '$app/stores';
  import { ogImageDimmensions } from '$lib/config';
  import { base } from '$app/paths';

  export let data: PageData;

  const seoTitle = `${seo.title ?? home.title} - ${data.seo?.title ?? data.title}`;
  const seoDescription = data.seo?.description ?? seo.description ?? home.subtitle;
</script>

<!-- This seems quite hacky... -->

<a href="{base}/api/posts/{data.slug}/image.png" class="hidden">OG Image</a>

<SvelteSEO
  title={seoTitle}
  description={seoDescription}
  keywords={data.keywords?.join(', ')}
  openGraph={{
    title: seoTitle,
    description: seoDescription,
    url: data.seo?.url ?? $page.url.toString(),
    type: 'article',
    article: {
      publishedTime: data.publishedAt.toString(),
      tags: data.categories ?? []
    },
    images: [
      {
        url: `${seo.url ?? $page.url.hostname}/api/posts/${data.slug}/image.png`,
        width: ogImageDimmensions.width,
        height: ogImageDimmensions.height,
        alt: `${data.title} Open Graph image`
      }
    ]
  }}
/>

<time class="text-sm font-bold tracking-wide text-gray-400 uppercase">
  {formatDate(data.publishedAt)}
</time>
<h1 class="font-bold text-4xl">
  {data.title}
</h1>
{#if data.description}
  <p class="text-xl font-extralight text-primary-30 mt-2">{data.description}</p>
{/if}

<div
  class="flex flex-row items-center space-x-6 text-sm justify-end my-3 text-primary-40 dark:text-primary-30"
>
  <ReadingTime readingTime={data.readingTime} />
  <ShareButtons title={data.title} description={data.description ?? ''} />
</div>

<article class="py-12 my-3 prose border-y prose-sky dark:prose-invert">
  {@html data.content}
</article>

{#if data.related && data.related.length > 0}
  <h3 class="font-bold tracking-wide text-gray-400 uppercase">Related Posts</h3>
  <PostList posts={data.related} />
{/if}

<Giscus
  id="comments"
  repo="paullj/paullj.github.io"
  repoId="R_kgDOGwKM4w"
  category="Published Posts"
  categoryId="DIC_kwDOGwKM484CA9Eh"
  mapping="url"
  reactionsEnabled="1"
  emitMetadata="0"
  strict="1"
  inputPosition="top"
  theme={$dark ? 'dark' : 'light'}
  lang="en"
  loading="lazy"
/>
