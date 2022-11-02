<script lang="ts">
  export let title = 'Hello, world!';
  export let subtitle: string;
</script>

<div
  class="container"
  style="
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items:flex-start;
    justify-content: center;
    padding: 5%;
    background: white;"
>
  <h1
    style="
      font-weight: 900;
      font-size: 100px;"
  >
    {title}
  </h1>
  {#if subtitle}
    <p
      style="
      font-weight: 200;
      font-size: 36px;"
    >
      {subtitle}
    </p>
  {/if}
</div>

<!-- Unfornately I can't get normal styles to work, so for the minute they are inline -->

<!-- In future, I would like tailwind to work in this as well -->
<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
</style>
