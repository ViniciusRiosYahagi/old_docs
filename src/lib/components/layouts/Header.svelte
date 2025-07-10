<script>
  import { Button, Input } from "$lib/components";
  import { searchInput } from "$lib/stores/search.svelte";
</script>

<header class="flex flex-col items-center justify-between lg:justify-between lg:flex-row">
  <h1 class="text-3xl lg:text-6xl lg:block">
    <a href="/">DCS</a>
  </h1>

  <nav class="flex gap-6 items-center">
    <Input type="text" placeholder="Search" bind:value={searchInput.currnet}/>
    <Button href="/create">Create</Button>
  </nav>
</header>
