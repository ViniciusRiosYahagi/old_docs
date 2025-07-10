<script lang="ts">
  import "../app.css";
  import { Header } from "$lib/components";

  let { children } = $props();
</script>

<main class="m-6 text-[var(--color2)]">
  <Header />
  {@render children()}
</main>
