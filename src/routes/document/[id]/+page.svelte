<script lang="ts">
  import type { PageProps } from "./$types";

  import { marked } from "marked";
  import { formatDate } from "$lib/utils/date";
  import { Controllers } from "$lib/components";

  let { data }: PageProps = $props();
  let { id, title, author, category, content, created_at, updated_at } =
    $derived(data.data);
</script>

<Controllers back edit deletee print {id} />

<div class="lg:max-w-1/2 mx-auto" id="docs">
  <div class="flex flex-col gap-12">
    <h1 class="text-xl text-center uppercase break-words lg:text-3xl">
      {title}
    </h1>
    <div>
      <p>{`Created by: ${author}`}</p>
      <p>{`Category: ${category}`}</p>
    </div>
    <div class="prose max-w-none text-[var(--color2)] break-words w-full">
      {@html marked(content)}
    </div>
    <div class="text-start lg:text-end">
      <p>{"Created:" + " " + formatDate(created_at)}</p>
      <p>{"Edited:" + " " + formatDate(updated_at)}</p>
    </div>
  </div>
</div>
