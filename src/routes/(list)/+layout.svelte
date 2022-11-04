<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import home from '$content/home.yaml';
  import { isEmail, isExternalLink } from '$lib/utils/isExternalLink';

  const getPrefix = (url: string) => {
    if (isEmail(url)) return '@';
    else if (isExternalLink(url)) return '/';
    else return '';
  };
</script>

{#if home.title}
  <h1 class="mb-2 text-3xl font-bold leading-none whitespace-pre-wrap sm:mt-24 sm:text-4xl">
    {home.title}
  </h1>
{/if}

{#if home.subtitle}
  <p class="text-xl font-extralight text-primary-30 mb-2">{home.subtitle}</p>
{/if}

<div class="flex flex-row justify-between mb-12 space-x-1 text-base sm:space-x-8 sm:justify-start">
  {#each Object.entries(home.links) as [type, url]}
    <a
      href={isExternalLink(url) || isEmail(url) ? url : `${base}${url}`}
      class="text-primary-40 dark:text-primary-30 decoration-2 hover:underline underline-offset-4 hover:text-accent-light dark:hover:text-accent-dark aria-selected:text-accent-light dark:aria-selected:text-accent-dark"
      target={isExternalLink(url) ? '_blank' : undefined}
      rel={isExternalLink(url) ? 'noopener noreferrer' : undefined}
      aria-selected={$page.url.pathname === url ||
        (url === '/' && $page.url.pathname.startsWith('/page'))}
      data-sveltekit:prefetch
    >
      <p class="text-lg font-medium">
        {getPrefix(url)}{type}
      </p>
    </a>
  {/each}
</div>

<slot />
