<script>
  import Loading from './Loading.svelte'

  var projects = [
      {name: 'Bike Trails', img: "https://user-images.githubusercontent.com/83252804/152218263-93d6f53b-b9df-43b3-ad73-9c144fe262d3.png", description: "Single page application that finds bike trails and friendly bike roads using React, Google Maps API, and react-google-maps/api library."},
      {name: 'Huntr', img: "https://user-images.githubusercontent.com/83252804/146260695-79c508bf-f886-445a-8410-78d47f6b68aa.png", description: "Ride share application MVP built in one week featuring Google Maps API, userdashboard, messaging, and authentication."},
      {name: 'Movie Finder', img: "https://user-images.githubusercontent.com/83252804/153654406-a63387c9-7924-4537-8116-1acbf7df860e.png", description: ""},
      {name: 'Cocktail Builder', img: "https://user-images.githubusercontent.com/83252804/152252511-225f13a4-de3d-4d43-8dcb-6ca5b263cd0c.png", description: "Single page application that shows you what cocktails you are able to build with the product you have on hand."},
    ];
</script>

<div>
  <h1 class="project-title">Projects</h1>
  {#each projects as project}
  <div class="project">
    <div class="title">{project.name}</div>
    <div class="description">{project.description}</div>
    <img src={project.img} alt=""/>
  </div>
  {/each}
</div>

<style>
  .project-title {
    margin: 0 auto;
    text-align: center;
    width: 25rem;
    font-size: 3rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid black;
  }
  .project {
    margin: 0 auto;
    height: 40rem;
    width: 100%;
    display: block;
    padding-bottom: 15%;
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
</style>

