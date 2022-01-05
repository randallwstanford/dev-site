<script>
  import Nav from '../Nav.svelte';
</script>

<div id="container">
  <Nav />
  <div class="body">
    <div class="content">
      <h1>Contact Me</h1>
      <div class="form">
        <form>
          <input type="text" placeholder="Name" class="contact" />
          <input type="text" placeholder="Email" class="contact" />
          <input type="text" placeholder="Subject" class="contact" />
          <textarea  placeholder="Message" class="contact" />
        </form>
      </div>
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
  input, textarea {
    border: 2px solid #eee;
    margin: 1rem 25%;
    padding: 10px;
  }
  textarea {
    height: 10rem;
  }
  .form {
    height: 30rem;
  }
  .content {
    margin: 2rem;
  }
  .contact {
    padding:10px;
    float: left;
    width: 50%;
  }
  .body{
    margin: 0 auto;
    margin-top: 3rem;
    font-family: 'Comfortaa', cursive;
    height: 50rem;
    width: 80rem;
    background-color: #A1A6B4;
    overflow: auto;
    overflow-x: hidden;
  }
  /* @media only screen and (max-width: 1024px) {
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
  } */
</style>