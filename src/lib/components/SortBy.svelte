<script lang="ts">
  import { sortBy } from '$lib/stores/sortBy';
  // import { browser } from '$app/environment';
  // import { goto } from '$app/navigation';
  // import { page } from '$app/stores';
  // import type { SortBy } from '$lib/types/SortBy';
  // import { onMount } from 'svelte';
  // import { createEventDispatcher } from 'svelte';

  // const dispatch = createEventDispatcher<{ changeSort: SortBy }>();

  // $: if (browser) {
  //   const sortParam = $page.url.searchParams.has('sort')
  //     ? ($page.url.searchParams.get('sort') as SortBy)
  //     : null;
  //   if (sortParam && sortParam !== $sortBy) {
  //     $page.url.searchParams.set('sort', $sortBy);
  //     goto(`?${$page.url.searchParams.toString()}`, { replaceState: true });
  //   }
  // }

  // onMount(() => {
  //   if (browser) {
  //     const sortParam = $page.url.searchParams.has('sort')
  //       ? ($page.url.searchParams.get('sort') as SortBy)
  //       : null;

  //     if (sortParam && $sortBy !== sortParam) {
  //       $sortBy = sortParam;
  //     }
  //   }
  // });
</script>

<form class="text-sm" on:submit|preventDefault>
  <!-- on:change={() => dispatch('changeSort', $sortBy)} -->
  <select bind:value={$sortBy} class="py-1 cursor-pointer leading-none">
    <option value="newest" class="p-2" selected>Newest</option>
    <option value="oldest" class="p-2">Oldest</option>
  </select>
</form>
