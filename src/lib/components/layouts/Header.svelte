<script>
  import { Button, Input } from "$lib/components";
</script>

<header class="flex justify-between items-center">
  <h1 class="text-6xl">
    <a href="/">Our Documents</a>
  </h1>

  <nav class="flex gap-6 items-cener">
    <Input type="text" placeholder="Search" />
    <Button href="/create">Create</Button>
  </nav>
</header>
