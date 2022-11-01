<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

{#if data.summary}
  <p class="mb-4 prose prose-sky dark:prose-invert font-extralight">
    {@html data.summary}
  </p>
{/if}

{#if data.sections}
  {#each Object.entries(data.sections) as [heading, entries]}
    <h3 class="text-xl underline capitalize">{heading}</h3>
    <ul>
      {#each entries as { title, subtitle, date, description, links }}
        <li class="mb-4">
          <div class="flex flex-row items-start">
            <div class="flex flex-row flex-wrap items-center flex-grow leading-tight">
              {#if title}
                <p class="mr-2 font-light">
                  {title}
                </p>
              {/if}
              {#if subtitle}
                <p class="font-medium tracking-wide text-primary-40 dark:text-primary-30">
                  {subtitle}
                </p>
              {/if}
            </div>
            <div class="flex flex-row items-center">
              {#if links}
                <div class="mr-4 space-x-2 text-sm">
                  {#each Object.entries(links) as [to, url]}
                    <a href={url} class="underline text-accent-light">{to}</a>
                  {/each}
                </div>
              {/if}
              {#if date}
                <div class="font-medium text-primary-40 dark:text-primary-30">
                  {date}
                </div>
              {/if}
            </div>
          </div>
          {#if description}
            <div
              class="max-w-full ml-4 leading-tight prose-sm prose font-extralight text-primary-30 dark:text-primary-20 prose-sky dark:prose-invert"
            >
              {@html description}
            </div>
          {/if}
        </li>
      {/each}
      <li />
    </ul>
  {/each}
{/if}
