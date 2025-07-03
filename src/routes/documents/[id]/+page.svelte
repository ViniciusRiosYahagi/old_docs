<script lang="ts">
  import type { PageProps } from "./$types";
  import { formatDate } from "$lib/utils/date";
  import Button from "$lib/components/Button.svelte";

  let { data }: PageProps = $props();
  let document = $derived(data.document);
</script>

<section class="mt-3">
  <div class="text-end">
    <Button>Edit</Button>
    <Button>Delete</Button>
  </div>
  <div class="max-w-1/2 mx-auto">
    <div class="flex flex-col gap-12">
      <h1 class="text-3xl text-center uppercase">{document.title}</h1>
      <div class="flex flex-col sm:flex-row justify-between gap-2">
        <p>{`Author: ${document.name}`}</p>
        <p>{`Category: ${document.category}`}</p>
      </div>
      <p class="whitespace-pre-line break-words">{document.description}</p>
      <div class="text-end">
        <p>{"Created:" + " " + formatDate(document.created_at)}</p>
        <p>{"Edited:" + " " + formatDate(document.updated_at)}</p>
      </div>
    </div>
  </div>
</section>

