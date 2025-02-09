<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";

  import "@fontsource-variable/nunito";
  import "../app.css";

  let { children } = $props();
</script>

<Header />

<div class="min-h-screen">
  <main class="mx-auto w-full max-w-screen-xl px-8 pb-8">
    {@render children()}
  </main>
</div>

<Footer />
