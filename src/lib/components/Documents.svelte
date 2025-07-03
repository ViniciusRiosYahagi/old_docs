<script lang="ts">
  import { Button } from "$lib/components";
  import { formatDate } from "$lib/utils/date";

  let { data } = $props();
</script>

<section class="grid grid-cols-1">
  {#each data.documents as { id, title, category, name, created_at, updated_at }}
    <div
      class="mt-3 border-dashed border-b-2 border-l-2 hover:border-solid p-3"
    >
      <a href={`documents/${id}`}>
        <div class="flex justify-between items-center">
          <div class="uppercase">
            <h1 class="text-3xl">{title}</h1>
            <ul>
              <li>{`Category: ${category}`}</li>
              <li>{`Author: ${name}`}</li>
              <li>{`Created: ${formatDate(created_at)}`}</li>
              <li>{`Edited: ${formatDate(updated_at)}`}</li>
            </ul>
          </div>
        </div>
      </a>
      <div>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  {/each}
</section>
