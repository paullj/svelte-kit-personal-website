<script lang="ts">
  import { onMount } from 'svelte';
  import type { Post } from '$lib/types/Post';
  import { fetchPosts } from '$lib/fetchPosts';
  import { search } from '@lyrasearch/lyra';

  import { buildIndex } from '$lib/search/buildIndex';
  import { searchResultTolerance } from '$lib/config';
  import type { LyraIndex } from '$lib/search/buildIndex';
  import { browser } from '$app/environment';

  export let results: Post[] | null;
  export let query = '';
  export let totalResults = 0;
  export let timeElapsed = 0;

  let posts: Omit<Post, 'content' | 'related'>[];
  let element: HTMLInputElement;

  let index: LyraIndex;

  $: if (index && query.trim()) {
    const start = !browser ? new Date().getTime() : performance.now();
    const searchResults = search(index, {
      term: query,
      properties: ['title', 'description', 'keywords', 'categories'],
      limit: 10,
      offset: 0,
      tolerance: searchResultTolerance
    });
    const end = !browser ? new Date().getTime() : performance.now();

    const slugs = searchResults.hits.map((post) => post.slug);

    totalResults = searchResults.count;
    timeElapsed = end - start;
    results = posts.filter(({ slug }) => slugs.includes(slug));
  } else {
    results = null;
  }

  onMount(async () => {
    posts = await fetchPosts({ limit: -1 });
    // if (!dev) {
    index = await buildIndex(posts);
    // } else {
    //   const data = await fetch('/api/search').then((response) => response.text());

    //   const { importInstance } = await import('@lyrasearch/plugin-data-persistence');
    //   index = importInstance(data, 'binary');
    // }
  });
</script>

<div class="relative rounded font-light flex flex-row items-center">
  <svg
    class="w-4 h-4"
    width="100%"
    height="100%"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    /></svg
  >

  <input
    type="text"
    bind:this={element}
    bind:value={query}
    size={12}
    class="bg-transparent outline-none ring-0 ml-2 tracking-wide"
    placeholder="Type '/' to Search"
  />
  <div class="w-4 h-4">
    <button
      class:hidden={!query}
      class=" w-full h-full flex items-center justify-center text-red-900 hover:text-red-500 dark:text-red-100 dark:hover:text-red-300"
      on:click={() => (query = '')}
    >
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
        ><path d="M4.5 4.5l6 6m-6 0l6-6" stroke="currentColor" /></svg
      >
    </button>
  </div>
</div>

<svelte:body
  on:keydown={(event) => {
    if (event.key === '/' && document.activeElement !== element) {
      event.preventDefault();
      element.focus();
      element.select();
    }
  }}
/>
