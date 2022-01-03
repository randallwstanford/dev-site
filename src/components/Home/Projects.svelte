<script>
var projects = [
    {id: 1, name: 'Altier API', description: "API to handle all routes for an e-commerce site."},
    {id: 2, name: 'Cocktail Builder', description: "Single page application that shows you what cocktails you are able to build with the product you have on hand."},
    {id: 3, name: 'Project Catwalk', description: "A client requested e-commerce site redesign."}
  ];
</script>


{#each projects as project}
  <div class="project">
    <div class="title">{project.name}</div>
    <div class="description">{project.description}</div>
  </div>
{/each}

<style>
  .project {
    float: left;
    margin-right: 5rem;
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
    font-size: 1rem
  }
</style>