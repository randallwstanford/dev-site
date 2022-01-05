<script>
  import { Router, Link, Route } from "svelte-routing";
</script>

<nav>
  <div class="logo">
    <h2>randy</h2>
    <h2>randy</h2>
  </div>
  <span class="nav">
    <a href="https://github.com/randallwstanford">github</a>
    <a href="https://www.linkedin.com/in/randallstanford/">linkedin</a>
    <Link to="/about">about me</Link>
    <Link to="/contact">contact me</Link>
  </span>
</nav>

<style>
  /* All <a> tags  */
  :global(a) {
    text-decoration: none;
    font-size: 1.5rem;
    margin-right: 5rem;
    margin-top: 2.5rem;
    color: #dadada;
    font-size: 2rem;
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
    margin-right: 1.5rem;
    justify-content: flex-end;
    font-family: 'Comfortaa', cursive;
    display: flex; /* or inline-flex */;
  }

  .logo {
    font-size: 2rem;
    margin-left: 15rem;
    font-family: 'Comfortaa', cursive;
    position: relative;
  }

  .logo h2{
    margin-top: 3.5rem;
    color: #fff;
    font-size: 2.75em;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .logo h2:nth-child(1) {
    color: #8e93a3;
    -webkit-text-stroke: 2px #8e93a3;
  }

  .logo h2:nth-child(2) {
    animation: animate 4s ease-in-out infinite;
  }

  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100000000%,
        0% 400%
      );
    }
    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
</style>