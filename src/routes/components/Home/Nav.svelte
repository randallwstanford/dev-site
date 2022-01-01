<script>
  import { Router, Link, Route } from "svelte-routing";
</script>

<nav>
  <span class="logo">randy</span>
  <span class="nav">
    <a class="social" href="https://github.com/randallwstanford">github</a>
    <Link class="social" to="about">about me </Link>
    <a class="social" href="https://www.linkedin.com/in/randallstanford/">linkedin</a>
  </span>
</nav>

<style>
  .nav {
    background-color: var(--eton-blue);
    float: right;
    width: 90%;
    height: 150%;
    justify-content: flex-end;
    font-family: 'Comfortaa', cursive;
    display: flex; /* or inline-flex */;
  }
  .social {
    font-size: 1.5rem;
    height: 100%;
    margin-right: 5rem;
    margin-top: 1rem;
    text-decoration: none;
    color: black;
  }
  .social:hover {
    border: 2px solid red;
    animation: bounce; /* referring directly to the animation's @keyframe declaration */
    animation-duration: .5s; /* don't forget to set a duration! */
  }
  .logo {
    font-size: 1.75rem;
    font-family: 'Comfortaa', cursive;
  }
</style>