<script lang="ts">
  import { base } from '$app/paths';
  import { postsPerPage } from '$lib/config';
  import { sortBy } from '$lib/stores/sortBy';

  export let currentPage: number;
  export let totalPosts: number;

  const isCurrentPage = (page: number) => page === currentPage;
  $: lowerBound = totalPosts ? (currentPage - 1) * postsPerPage + 1 || 0 : 0;
  $: upperBound = Math.min(currentPage * postsPerPage, totalPosts);
  $: totalPages = Math.ceil(totalPosts / postsPerPage);

  $: prevPage = Math.max(currentPage - 1, 1);
  $: nextPage = Math.min(currentPage + 1, totalPages);

  $: sortParam = $sortBy === 'newest' ? '' : `?sort=${$sortBy}`;
</script>

<nav aria-label="Pagination navigation" class="flex flex-row py-2 mt-0.5 text-lg sm:text-base">
  <div class="flex-grow font-medium text-primary-30 dark:text-primary-40">
    Showing {lowerBound} - {upperBound} of {totalPosts}
  </div>

  {#if totalPages}
    <ul class="flex flex-row space-x-4 text-primary-50 dark:text-primary-30">
      <li class="hover:underline hover:text-black dark:hover:text-primary-20">
        <a href="{base}/page/{prevPage}{sortParam}" data-sveltekit:prefetch>Prev</a>
      </li>
      {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
        <li class="font-extralight hover:text-black dark:hover:text-primary-20">
          <a
            href="{base}/page/{page}{sortParam}"
            class="aria-selected:underline hover:underline"
            aria-selected={isCurrentPage(page)}
            data-sveltekit:prefetch
          >
            {#if isCurrentPage(page)}
              <span class="sr-only">Current page</span>
            {:else}
              <span class="sr-only">Go to page</span>
            {/if}
            {page}
          </a>
        </li>
      {/each}
      <li class="hover:underline hover:text-black dark:hover:text-primary-20">
        <a href="{base}/page/{nextPage}{sortParam}" data-sveltekit:prefetch>Next</a>
      </li>
    </ul>
  {/if}
</nav>
