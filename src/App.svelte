<script>
  import { binding_callbacks } from 'svelte/internal';
  import Router from './routes/index.svelte';
</script>

<main>
  <Router />
</main>

<style>
  :root {
    --light: #A1A6B4;
    --scrollbarWidth: 14px;
    --scrollbarBg: rgb(0, 0, 0);
    --scrollbarThumb: var(--light);
  }
</style>