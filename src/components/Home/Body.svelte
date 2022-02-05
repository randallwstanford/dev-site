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
    --scrollbarWidth: 1rem;
    --scrollbarBg: rgb(0, 0, 0);
    --scrollbarThumb: var(--light);
  }
  .body {
    scrollbar-color: var(--scrollbarThumb) var(--scrollbarBg);
    scrollbar-width: var(--scrollbarWidth);
    background-color: var(--light);
    font-family: 'Comfortaa', cursive;
    margin: 0 auto;
    height: 50rem;
    margin-top: 3rem;
    width: 90%;
    overflow: auto;
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
  .content {
    margin: 2rem;
  }

  @media only screen and (max-width: 1079px) {
    .body {
      height: 10rem;
    }
  }

  /* @media only screen and (max-width: 1080px) {
    .body {
      height: 30rem;
    }
  } */
</style>