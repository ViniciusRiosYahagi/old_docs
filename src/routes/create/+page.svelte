<script lang="ts">
  import { enhance } from "$app/forms";
  import { Input, Button, Controllers } from "$lib/components";

  let { form } = $props();
  let rows = $state(17);
</script>

<Controllers back />

{#if form?.errors}
  {#each form.errors as error}
    <p class="text-red-600 text-lg">{error}</p>
  {/each}
{/if}

<form method="POST" use:enhance>
  <div class="flex flex-col gap-6 mt-6 mb-3">
    <Input type="text" name="title" placeholder="Title" />
    <div class="flex flex-col gap-6 lg:flex-row">
      <Input type="text" name="category" placeholder="Category" />
      <Input type="text" name="author" placeholder="Author" />
    </div>
    <textarea
      name="content"
      class="border-2 p-1 outline-0"
      placeholder="Description..."
      {rows}
    ></textarea>
  </div>
  <Button type="submit">Publish</Button>
</form>
