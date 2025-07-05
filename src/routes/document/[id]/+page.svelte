<script lang="ts">
  import type { PageProps } from "./$types";

  import { formatDate } from "$lib/utils/date";
  import { Button } from "$lib/components";
  import { goto } from "$app/navigation";

  let { data }: PageProps = $props();
  let { id, title, author, category, content, created_at, updated_at } = $derived(data.document);

  async function deleteDocument(id: string) {
    const confirmed = confirm("Are you sure you want to delete this document?");

    if (!confirmed) return;

    const response = await fetch(`http://localhost:8000/documents/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
      goto("/");
    } else {
      const errorData = await response.json();
      alert(errorData.error);
    }
  }
</script>

<section class="mt-6">
  <div class="text-end">
    <Button href={`/documents/${id}/edit`}>Edit</Button>
    <Button onclick={() => deleteDocument(id)}>Delete</Button>
  </div>
  <div class="max-w-1/2 mx-auto">
    <div class="flex flex-col gap-12">
      <h1 class="text-3xl text-center uppercase break-words">{title}</h1>
      <div class="flex flex-col sm:flex-row justify-between gap-2">
        <p>{`Author: ${author}`}</p>
        <p>{`Category: ${category}`}</p>
      </div>
      <p class="whitespace-pre-line break-words">{content}</p>
      <div class="text-end">
        <p>{"Created:" + " " + formatDate(created_at)}</p>
        <p>{"Edited:" + " " + formatDate(updated_at)}</p>
      </div>
    </div>
  </div>
</section>
