<script>
  import Nav from "./Nav.svelte";
	import Body from "./Body.svelte";
</script>

<style>
	#container {
    --eton-blue: #93C0A4;
    overflow: hidden;
    margin: 0 auto;
    width: 90rem;
    height: 75rem;
    display: flex;
    flex-direction: column;
  }
</style>

<div id="container">
  <Nav />
  <Body />
</div>
