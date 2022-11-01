<script lang="ts">
  import { githubRepo, githubUser } from '$lib/config';
</script>

<footer
  class="px-2 pt-24 pb-4 text-xs font-light leading-loose tracking-wide text-center text-primary-30 dark:text-primary-40"
>
  <p>
    This site was made by me
    <br class="sm:hidden" />
    and it's completely
    <a
      href="https://www.github.com/{githubUser}/{githubRepo}"
      class="underline decoration-dotted decoration-2 hover:text-primary-50 dark:hover:text-primary-30"
    >
      open source
    </a>

    <svg
      class="inline"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      ><path
        d="M6.765 5.235a1.79 1.79 0 10-2.53 2.53L7.5 11.03l3.265-3.265a1.79 1.79 0 00-2.53-2.53L7.5 5.97l-.735-.735z"
        fill="currentColor"
      /></svg
    >
  </p>
</footer>
