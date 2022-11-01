<script lang="ts">
  import { onMount } from 'svelte';
  import { theme, dark, THEMES } from '$lib/stores/theme';
  import { browser } from '$app/environment';

  let index: number;

  $: if (browser) {
    if ($dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }

  onMount(() => {
    index = THEMES.indexOf($theme ?? 'system');
  });

  const cycleTheme = () => {
    index = (index + 1) % THEMES.length;
    $theme = THEMES[index];
  };
</script>

<button
  class="flex flex-row items-center p-1 space-x-2 text-base capitalize hover:text-primary-50 text-primary-30 dark:hover:text-primary-20 dark:text-primary-30 sm:text-xs hover:underline underline-offset-4"
  aria-label="Theme Toggle"
  on:click={() => cycleTheme()}
>
  <p>
    {$theme}
    {#if $theme === 'system'}
      ({$dark ? 'dark' : 'light'})
    {/if}
  </p>

  <svg
    class="w-5 h-5"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    /></svg
  >
</button>
