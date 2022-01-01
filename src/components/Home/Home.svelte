<script>
  import { Router, Link, Route } from "svelte-routing";
  import Nav from "./Nav.svelte";
	import Body from "./Body.svelte";
</script>

<style>
	#container {
    --morning_blue: #8E9B90;
    --laurel_green: #B6C4A2;
    --pale_bud: #DCE2BD;
    --eton-blue: #93C0A4;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 3.5rem;
    width: 70rem;
    height: 45rem;
    display: flex;
    flex-direction: column;
  }
</style>

<div id="container">
  <Nav />
  <Body />
</div>
