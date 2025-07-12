<script lang="ts">
  import { enhance } from "$app/forms";
  import { Input, Button } from "$lib/components";

  let {
    id = $bindable(""),
    title = $bindable(""),
    category = $bindable(""),
    author = $bindable(""),
    content = $bindable(""),
  } = $props();
</script>

<form method="POST" use:enhance>
  <div class="flex flex-col gap-6 mt-6 mb-3">
    <Input type="hidden" name="id" bind:value={id} />
    <Input type="text" name="title" placeholder="Title" bind:value={title} />
    <div class="flex flex-col gap-6 lg:flex-row">
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
      rows="17"
      bind:value={content}
    ></textarea>
    <p>{content.length}</p>
  </div>
  <Button type="submit">Publish</Button>
</form>
