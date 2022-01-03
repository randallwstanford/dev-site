<script>
  import { Router, Link, Route } from "svelte-routing";
</script>

<nav>
  <span class="logo">randy</span>
  <span class="nav">
    <a href="https://github.com/randallwstanford">github</a>
    <a href="https://www.linkedin.com/in/randallstanford/">linkedin</a>
    <Link to="/about">about me</Link>
  </span>
</nav>

<style>
  /* All <a> tags  */
  :global(a) {
    text-decoration: none;
    font-size: 1.5rem;
    margin-right: 5rem;
    color: black;
    font-size: 1.75rem;
  }
  :global(a):hover {
    display: inline-block;
    animation: shakeX; /* referring directly to the animation's @keyframe declaration */
    animation-duration: .75s; /* don't forget to set a duration! */
  }
  .nav {
    float: right;
    width: 90%;
    height: 200%;
    justify-content: flex-end;
    font-family: 'Comfortaa', cursive;
    display: flex; /* or inline-flex */;
  }

  .logo {
    font-size: 1.75rem;
    margin-left: 1rem;
    font-family: 'Comfortaa', cursive;
  }
</style>