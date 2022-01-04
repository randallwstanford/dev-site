<script>
  import { Router, Route } from 'svelte-routing';
  import Home from '../components/Home/Home.svelte';
  import About from '../components/About/About.svelte';

  export let url = '';
</script>

<Router {url}>
  <div class="app">
    <Route path="about" component={About} />
    <Route path="/" component={Home} />
  </div>
</Router>
