<script>
  import Nav from '../Nav.svelte';
</script>

<div id="container">
  <Nav />
  <div class="body">
    <div class="content">
      <h1>Thank you!</h1>
      <p>Thanks so much for your email. I'll reply to your email as soon as possible. ✨</p>
    </div>
  </div>
</div>

<style>
  #container {
    overflow: hidden;
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  h1 {
    text-align: center;
    margin-top: 5rem;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 5rem;
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