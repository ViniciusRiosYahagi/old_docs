<script lang="ts">
  import { formatDate } from "$lib/utils/date";

  let { data } = $props();
  let documents = $derived(data.data)
</script>

<section class="mt-6">
  {#if !documents || documents.length === 0}
    <h1 class="text-2xl">Empty</h1>
  {:else}
    {#each documents as { id, title, category, author, created_at, updated_at }}
      <article
        class="border-dashed border-b-2 border-l-2 hover:border-solid p-2 mt-3"
      >
        <a href="document/{id}" class="block">
          <div class="uppercase flex flex-col justify-between">
            <h1 class="text-3xl">{title}</h1>
            <p>{`Category: ${category}`}</p>
            <p>{`Author: ${author}`}</p>
            <p>{`Created: ${formatDate(created_at)}`}</p>
            <p>{`Edited: ${formatDate(updated_at)}`}</p>
          </div>
        </a>
      </article>
    {/each}
  {/if}
</section>
