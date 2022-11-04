<script lang="ts">
  import { base } from '$app/paths';
  import type { Post } from '$lib/types/Post';
  import PostList from './PostList.svelte';
  import SearchInput from './SearchInput.svelte';

  let results: Post[];
  let query = '';
  let totalResults: number;
  let timeElapsed: number;
</script>

<div class="flex flex-row justify-between items-center mb-1 space-x-6 w-full">
  <div class="text-xl min-w-0 flex-1">
    {#if !results}
      <slot name="title">
        <h3 class="flex flex-row items-center space-x-2">
          <div class="underline">Posts</div>
          <a
            href="{base}/rss.xml"
            target="_blank"
            rel="noreferrer noopener"
            class="hover:text-orange-600 dark:hover:text-orange-400"
          >
            <svg
              class="w-5 h-5 -mb-1"
              width="100%"
              height="100%"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              ><path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 13H3v-2c1.11 0 2 .89 2 2zM3 3v1a9 9 0 0 1 9 9h1C13 7.48 8.52 3 3 3zm0 4v1c2.75 0 5 2.25 5 5h1c0-3.31-2.69-6-6-6z"
              /></svg
            >
          </a>
        </h3>
      </slot>
    {:else}
      <h3 class="flex flex-row items-center">
        <span>"</span>
        <div class="block min-w-0 underline">
          <div class="whitespace-nowrap overflow-clip text-ellipsis">
            {query}
          </div>
        </div>
        <span>"</span>
        <span class="flex-shrink-0 ml-2 font-sans text-sm font-light">
          ({results.length}
          {results.length === 1 ? 'result' : 'results'} in {timeElapsed.toPrecision(1)}ms)
        </span>
      </h3>
    {/if}
  </div>
  <div class="flex flex-row justify-end items-center">
    <SearchInput bind:results bind:query bind:totalResults bind:timeElapsed />
  </div>
</div>

{#if !results}
  <slot name="posts" />
  <slot name="pagination" />
{:else}
  <PostList posts={results} emptyMessage="No results, try changing your search terms." />
{/if}
