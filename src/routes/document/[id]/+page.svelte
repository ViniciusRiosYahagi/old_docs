<script lang="ts">
  import type { PageProps } from "./$types";

  import { marked } from "marked";
  import { formatDate } from "$lib/utils/date";
  import { Controllers } from "$lib/components";

  let { data }: PageProps = $props();
  let { id, title, author, category, content, created_at, updated_at } =
    $derived(data.data);
</script>

<section class="mt-6">
  <Controllers back edit deletee {id} />
  <div class="max-w-1/2 mx-auto">
    <div class="flex flex-col gap-12">
      <h1 class="text-3xl text-center uppercase break-words">{title}</h1>
      <div class="flex flex-col sm:flex-row justify-between gap-2">
        <p>{`Created by: ${author}`}</p>
        <p>{`Category: ${category}`}</p>
      </div>
      <div class="prose max-w-none text-black break-words w-full">
        {@html marked(content)}
      </div>
      <div class="text-end">
        <p>{"Created:" + " " + formatDate(created_at)}</p>
        <p>{"Edited:" + " " + formatDate(updated_at)}</p>
      </div>
    </div>
  </div>
</section>
