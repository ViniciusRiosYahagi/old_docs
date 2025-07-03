<script lang="ts">
  import { Input } from "$lib/components";
  import Button from "$lib/components/Button.svelte";

  let rows = $state(17);
</script>


<form method="POST">
  <div class="flex flex-col gap-6 mt-6 mb-3">
    <Input type="text" name="title" placeholder="Title" minlength={3} />

    <div class="flex gap-6">
      <Input type="text" name="category" placeholder="Category" minlength={3}/>
      <Input type="text" name="name" placeholder="Author" minlength={3}/>
    </div>

    <textarea
      name="description"
      class="border border-dashed p-1 outline-0"
      placeholder="Description..."
      minlength={100}
      {rows}
    ></textarea>
  </div>
  <div class="flex items-end gap-3">
    <Button type="button" onclick={() => (rows = rows + 6)}>Extend area</Button>
    <Button type="submit">Publish</Button>
  </div>
</form>
