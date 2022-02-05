<div>
  <h1>Contact Me</h1>
  <div class="form">
    <form action="https://formsubmit.co/randallwstanford@gmail.com" method="POST">
      <input name="name" type="text" placeholder="Name" class="contact" required />
      <input name="email" type="email" placeholder="Email" class="contact" required />
      <input name="_subjectw" type="text" placeholder="Subject" class="contact" />
      <textarea  placeholder="Message" class="contact" required />
      <input type="hidden" name="_next" value="https://randy-dev.netlify/thanks">
      <div class="button"><button type="submit">Submit</button></div>
    </form>
  </div>
</div>

<style>
  h1 {
    margin-bottom: 2rem;
    margin-left: 2rem;
  }

  input, textarea {
    border: none;
    margin: 1rem 1rem;
  }

  textarea {
    height: 20rem;
    margin-bottom: 2.5rem;
  }

  .form {
    margin: 0 auto;
    height: 35rem;
    width: 80%;
  }

  .contact {
    padding: .75rem;
    float: left;
    width: 90%;
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
