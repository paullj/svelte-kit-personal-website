<script lang="ts">
  import Giscus from '@giscus/svelte';
  import { formatDate } from '$lib/utils';
  import { dark } from '$lib/stores/theme';
  import PostList from '$lib/components/PostList.svelte';
  import ReadingTime from '$lib/components/ReadingTime.svelte';
  import '$lib/prism.css';

  import type { PageData } from './$types';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  export let data: PageData;
</script>

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
