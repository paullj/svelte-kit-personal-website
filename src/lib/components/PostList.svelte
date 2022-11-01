<script lang="ts">
  import { formatDate, formatDay } from '$lib/utils';
  import type { Post } from '$lib/types/Post';
  import { postsPerPage } from '$lib/config';
  import { base } from '$app/paths';

  export let posts: Pick<Post, 'title' | 'slug' | 'publishedAt'>[] = [];
  export let emptyMessage = 'No posts to show!';
</script>

<div style="height: {Math.max(posts.length, postsPerPage) * 1.75}rem">
  <div class="items-center grid grid-cols-[auto,1fr,auto] gap-x-4">
    {#each posts as post}
      <time class="text-sm font-bold tracking-wide text-primary-40 dark:text-primary-30 uppercase">
        <span class="hidden sm:inline">
          {formatDay(post.publishedAt)},
        </span>
        {formatDate(post.publishedAt)}
      </time>
      <div class="text-base sm:text-lg whitespace-nowrap overflow-clip text-ellipsis">
        <a
          href="{base}/posts/{post.slug}"
          class="text-lg hover:underline overflow-clip"
          data-sveltekit:prefetch
        >
          {post.title}
        </a>
      </div>
      <div>
        <slot />
      </div>
    {:else}
      <div class="self-start col-span-3 font-extralight">{emptyMessage}</div>
    {/each}
  </div>
</div>
