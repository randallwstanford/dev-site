<script>
  import Projects from "./Projects.svelte";
</script>

<div class="body">
  <div class="content">
    <Projects />
  </div>
</div>

<style>
  :root {
    --light: #A1A6B4;
    --scrollbarWidth: 14px;
    --scrollbarBg: rgb(0, 0, 0);
    --scrollbarThumb: var(--light);
  }
  .body {
    scrollbar-width: var(--scrollbarWidth);
    scrollbar-color: var(--scrollbarThumb) var(--scrollbarBg);
  }
  .body::-webkit-scrollbar {
    width: var(--scrollbarWidth);
  }
  .body::-webkit-scrollbar-track {
    background: var(--scrollbarBg);
  }
  .body::-webkit-scrollbar-thumb {
    background-color: var(--scrollbarThumb);
    border-radius: 6px;
    border: 3px solid var(--scrollbarBg);
  }
  .body{
    margin: 0 auto;
    margin-top: 3rem;
    font-family: 'Comfortaa', cursive;
    height: 50rem;
    width: 80rem;
    background-color: var(--light);
    overflow: auto;
    scrollbar-width: var(--scrollbarWidth);
    scrollbar-color: var(--scrollbarThumb) var(--scrollbarBg);
  }
  .content {
    margin: 2rem;
  }
</style>