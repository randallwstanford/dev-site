<script>
  import Nav from "../Nav.svelte";
	import Body from "./Body.svelte";
</script>

<div id="container">
  <Nav />
  <Body />
</div>

<style>
  #container {
    overflow: hidden;
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
  }
</style>