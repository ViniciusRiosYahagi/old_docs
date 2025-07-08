<script lang="ts">
  import { enhance } from "$app/forms";
  import { Input, Button, Controllers } from "$lib/components";
  import type { PageProps } from "./$types";

  let { data, form }: PageProps = $props();
  let { title, author, category, content, id } = $derived(data.document);
  let rows = $state(17);
</script>

<Controllers home back/>

{#if form?.errors}
  {#each form.errors as error}
    <p class="text-red-600 text-lg">{error}</p>
  {/each}
{/if}

<form method="POST" use:enhance>
  <div class="flex flex-col gap-6 mt-6 mb-3">
    <Input type="hidden" name="id" bind:value={id} />
    <Input type="text" name="title" placeholder="Title" bind:value={title} />
    <div class="flex gap-6">
      <Input
        type="text"
        name="category"
        placeholder="Category"
        bind:value={category}
      />
      <Input
        type="text"
        name="author"
        placeholder="Author"
        bind:value={author}
      />
    </div>
    <textarea
      name="content"
      class="border-2 p-1 outline-0"
      placeholder="Description..."
      {rows}
      bind:value={content}
    ></textarea>
  </div>
  <Button type="submit">Publish</Button>
</form>
