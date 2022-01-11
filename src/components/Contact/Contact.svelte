<script>
  import Nav from '../Nav.svelte';

  var name = "";
  var email = "";
  var subject = "";
  var message = "";

  var handleSubmit = (e) => {
    e.preventDefault();
    var data = { name, email, subject, message }
    console.log(data)
  };


</script>

<div id="container">
  <Nav />
  <div class="body">
    <div class="content">
      <h1>Contact Me</h1>
      <div class="form">
        <form>
          <input type="text" bind:value={name} placeholder="Name" class="contact" />
          <input type="email" bind:value={email} placeholder="Email" class="contact" />
          <input type="text" bind:value={subject} placeholder="Subject" class="contact" />
          <textarea  placeholder="Message" bind:value={message} class="contact" />
          <div class="button">
            <button type="submit" on:click={handleSubmit}>Submit</button>
          </div>
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
    height: 40rem;
    width: 80rem;
    background-color: #A1A6B4;
    overflow: auto;
    overflow-x: hidden;
  }
  .button {
    text-align: center;
  }
  button {
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 20px 13px;
    outline: 0;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
</style>