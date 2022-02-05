<script>
  import { Link } from "svelte-routing";
</script>

<nav>
  <div class="logo">
    <Link to="/">
      <h2>randy</h2>
      <h2>randy</h2>
    </Link>
  </div>
  <span class="nav">
    <Link class="nav-link" to="/about">about me</Link>
    <Link class="nav-link" to="/contact">contact me</Link>
    <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/randallstanford/">linkedin</a>
    <a class="nav-link" target="_blank" href="https://github.com/randallwstanford">github</a>
  </span>
</nav>

<style>
  :global(a.nav-link){
    text-decoration: none;
    margin-right: 5rem;
    margin-top: 2.5rem;
    color: #dadada;
    font-size: 2rem;
  }

  :global(a.nav-link):hover{
    display: inline-block;
    animation: shakeX;
    animation-duration: .75s;
  }
  .nav {
    float: right;
    width: 90%;
    height: 200%;
    margin-right: 1.5rem;
    justify-content: flex-end;
    font-family: 'Comfortaa', cursive;
    display: flex;
    font-size: 1rem;
  }

  .logo {
    font-size: 2rem;
    margin-left: 15rem;
    font-family: 'Comfortaa', cursive;
    position: relative;
  }

  .logo h2{
    margin-top: 3.5rem;
    color: rgb(255, 255, 255);
    font-size: 2.75em;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .logo h2:nth-child(1) {
    color: #8e93a3;
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
@media only screen and (max-width: 1500px) {
  :global(a.nav-link) {
    margin-right: 4rem;
  }
}
@media only screen and (max-width: 1430px) {
  :global(a.nav-link) {
    margin-right: 3rem;
  }
}
@media only screen and (max-width: 1340px) {
  :global(a.nav-link) {
    margin-right: 2.5rem;
  }
}
@media only screen and (max-width: 1300px) {
  .nav {
    margin-top: 12.5%;
  }
  :global(a.nav-link) {
    margin: 0 auto;
  }
  .logo {
    margin: 0 auto;
    width: 0%;
  }
}
@media only screen and (max-width: 1100px) {
  .nav {
    margin-top: 13%;
  }
}

@media only screen and (max-width: 975px) {
  .nav {
    margin-top: 15%;
  }
}

@media only screen and (max-width: 850px) {
  .nav {
    margin-top: 17%;
  }
}

@media only screen and (max-width: 768px) {
  .nav {
    width: 100%;
    margin-right: 0;
  }
  :global(a.nav-link){
    margin-right: 0;
  }
}

@media only screen and (max-width: 425px) {
  .nav {
    border: 1px solid green;
    height: 250px;
  }
  :global(a.nav-link){
    height: 25%;
  }
}

</style>