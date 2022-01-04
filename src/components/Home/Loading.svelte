<div class="loading">
  <span style="--i:1">L</span>
  <span style="--i:2">o</span>
  <span style="--i:3">a</span>
  <span style="--i:4">d</span>
  <span style="--i:5">i</span>
  <span style="--i:6">n</span>
  <span style="--i:7">g</span>
  <span style="--i:8">&nbsp;</span>
  <span style="--i:9">I</span>
  <span style="--i:10">m</span>
  <span style="--i:11">a</span>
  <span style="--i:12">g</span>
  <span style="--i:13">e</span>
  <span style="--i:14">.</span>
  <span style="--i:15">.</span>
  <span style="--i:16">.</span>
</div>

<style>
  .loading {
    margin-top: 1rem;
    padding-top: 10rem;
    font-weight: bold;
    text-align: center;
    position: relative;
    height: 20rem;
  }
  .loading span {
    position: relative;
    display: inline-block;
    font-size: 2rem;
    color: rgb(0, 0, 0);
    animation: flip 2s infinite;
    animation-delay: calc(.1s * var(--i))
  }
  @keyframes flip {
    0%,80% {
      transform: rotateY(360deg)
    }
  }
</style>