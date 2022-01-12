<script>
  import Loading from './Loading.svelte'

  var projects = [
      {id: 2, name: 'Cocktail Builder', img: "https://user-images.githubusercontent.com/83252804/138566931-80b8c442-3cc7-4ac1-8ee0-0b4424aa7d54.png", description: "Single page application that shows you what cocktails you are able to build with the product you have on hand."},
      {id: 1, name: 'Huntr', img: "https://user-images.githubusercontent.com/83252804/146260695-79c508bf-f886-445a-8410-78d47f6b68aa.png", description: "Ride share application MVP built in one week featuring Google Maps API, userdashboard, messaging, and authentication."},
      {id: 3, name: 'Project Catwalk', img: "", description: "A client requested e-commerce site redesign."}
    ];
</script>

<div>
  <h1 class="project-title">Projects</h1>
  {#each projects as project}
  <div class="project">
    <div class="title">{project.name}</div>
    <div class="description">{project.description}</div>
    {#if project.img} <img src={project.img} alt=""/>
    {:else}<Loading />{/if}
  </div>
  {/each}
</div>

<style>
  .project-title {
    margin: 0 auto;
    text-align: center;
    width: 25rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid black;
  }
  .project {
    margin: 0 auto;
    height: 35rem;
    width: 50rem;
    display: block;
    padding-bottom: 1rem;
    border-bottom: .1rem solid black;
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
  img {
    margin-top: 1rem;
    width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    .project {
      height: 55rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .project {
      height: 47.5rem;
    }
  }
</style>

