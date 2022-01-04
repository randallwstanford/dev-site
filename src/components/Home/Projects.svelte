<script>
var projects = [
    {id: 1, name: 'Altier API', img: "", description: "API to handle all routes for an e-commerce site."},
    {id: 2, name: 'Cocktail Builder', img: "https://user-images.githubusercontent.com/83252804/138566931-80b8c442-3cc7-4ac1-8ee0-0b4424aa7d54.png", description: "Single page application that shows you what cocktails you are able to build with the product you have on hand."},
    {id: 3, name: 'Project Catwalk', img: "", description: "A client requested e-commerce site redesign."}
  ];
</script>

{#each projects as project}
  <div class="project">
    <div class="title">{project.name}</div>
    <div class="description">{project.description}</div>
    {#if project.img}
      <img class="img" src={project.img} alt=""/>
    {:else}
      <div class="loading">Loading image...</div>
    {/if}
  </div>
{/each}

<style>
  .project {
    float: left;
    margin-left: 5rem;
    margin-right: 7.5rem;
    height: 40rem;
    width: 30rem;
  }
  .title {
    margin-top: 1rem;
    text-align: center;
    font-size: 2rem
  }
  .description {
    margin-top: 1rem;
    text-align: center;
    font-size: 1.25rem;
  }
  .loading {
    margin-top: 10rem;
    font-weight: bold;
    text-align: center;
    font-size: 2rem;
  }
  .img {
    margin-top: 5rem;
    height: 15rem;
  }
</style>