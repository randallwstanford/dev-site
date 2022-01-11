<script>
  import Nav from '../Nav.svelte';
</script>

<div id="container">
  <Nav />
  <div class="body">
    <div class="content">
      <h1>About me</h1>
      <p>I'm Randall and I'm a fullstack engineer</p>
      <p>I recently completed Hack Reactor's software engineering bootcamp in Novemeber of 2021 and I had an incredible, rich, and fruitful expereince. I built this site in January of 2022 using Svelte, a technology I decided to pick up for fun.</p>
      <p>I have always have a strong passion and love for coffee and spent a lot of time learning about coffee roasting, coffee processing, and the coffee supply chain in my previous jobs. I decided I didn't want to work in the coffee industry anymore as I felt the ceiling for opportunity was limiting to my capabilites. I had a knack and curiosity about technology so I looked to software development as a new career path. After a year of self studying javascript, I saved up, quit my job, and took a leap to take the bootcamp and kickstart my career.</p>
      <p>In Hack Reactor we cover a whole lot from frontend, backend, deployment, data persistence, reading documentation, and being self autonomous as developer.</p>
    </div>
  </div>
</div>

<style>
  #container {
    overflow: hidden;
    margin: 0 auto;
    width: 90rem;
    height: 150rem;
    display: flex;
    flex-direction: column;
  }
  h1 {
    margin-bottom: 2rem;
  }
  p {
    font-size: large;
  }
  .content {
    margin: 2rem;
  }
  .body{
    margin: 0 auto;
    margin-top: 3rem;
    font-family: 'Comfortaa', cursive;
    height: 40rem;
    width: 80rem;
    background-color: #A1A6B4;
    overflow: auto;
    overflow-x: hidden;
  }
  @media only screen and (max-width: 1024px) {
    .body {
      height: 65rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .body {
      height: 90rem;
    }
  }
  @media only screen and (max-width: 425px) {
    .body {
      height: 100%;
    }
  }
  @media only screen and (max-width: 320px) {
    .body {
      width: 90%;
    }
  }
</style>