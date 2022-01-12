<script>
  import { Router, Route } from 'svelte-routing';
  import Home from '../components/Home/Home.svelte';
  import About from '../components/About/About.svelte';
  import Contact from '../components/Contact/Contact.svelte';
  import Thanks from '../components/Thanks/Thanks.svelte';
  export let url = '';
</script>

<Router {url}>
  <Route path="about" component={About} />
  <Route path="contact" component={Contact} />
  <Route path="/thanks" component={Thanks} />
  <Route path="/" component={Home} />
</Router>
