<script>
  import '../app.postcss';
  import ToggleTheme from '$lib/components/ToggleTheme.svelte';
  import Footer from '$lib/components/Footer.svelte';

  export const prerender = true;
</script>

<div id="content" class="flex flex-col max-w-screen-sm min-h-screen px-4 py-2 mx-auto">
  <div class="flex flex-row py-4">
    <div class="flex-grow" />
    <ToggleTheme />
  </div>
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div>
