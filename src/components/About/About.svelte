<script>
  import Nav from '../Nav.svelte';
</script>

<div id="container">
  <Nav />
  <div class="body">
    <div class="content">
      <h1>About me</h1>
      <p>
        I'm Randall and I'm a fullstack engineer, dog father, rock climber, coffee lover.
      </p>
      <p>
        I recently completed Hack Reactor's software engineering bootcamp in Novemeber of 2021 and I had an incredible, rich, and fruitful expereince. In Hack Reactor we cover a whole lot from frontend, backend, deployment, data persistence, developer tools, reading documentation, being self autonomous as developer, and more. I love learning about all things tech, especially frontend development, database management, and the shell environment.
      </p>
      <p>
        I have always had a strong passion and love for coffee that lead to learning about coffee roasting, coffee processing, and the coffee supply chain. After 7 years of deep diving into the coffee industry, of I decided it was not a sustainable or fufilling career for myself. I had a knack and curiosity about technology, so I looked to software development as a new career path. After a year of self studying javascript, I saved up, quit my job, and took a leap to take the bootcamp and kickstart my career.
      </p>
      <p>
        Feel free to contact me or say hello in my contact page! I love all things Javascript, React, NodeJs, PostgreSQL, skateboarding, rock climbing, MedTech, EdTech, FinTech, video gaming.
      </p>
      <p>
        I built this site January 2022 using Svelte.
      </p>
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