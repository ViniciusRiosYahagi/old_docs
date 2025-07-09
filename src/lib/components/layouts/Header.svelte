<script>
  import { Button, Input } from "$lib/components";
  import { searchInput } from "$lib/stores/search.svelte";
</script>

<header class="flex justify-between items-center">
  <h1 class="text-2xl lg:text-6xl">
    <a href="/">DCS</a>
  </h1>

  <nav class="flex gap-6 items-cener">
    <Input type="text" placeholder="Search" bind:value={searchInput.currnet}/>
    <Button href="/create">Create</Button>
  </nav>
</header>
