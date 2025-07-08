<script lang="ts">
  import type { ControllersProps } from "$lib/types/types";

  import { goto } from "$app/navigation";
  import { Button } from "$lib/components";

  let {
    home,
    publish,
    edit,
    deletee,
    back,
    id = "",
  }: ControllersProps = $props();

  async function deleteDocument(id: string) {
    const response = await fetch(`http://localhost:8000/documents/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      goto("/");
    } else {
      alert("Erro");
    }
  }

  function backPage() {}
</script>

<div class="flex justify-end gap-3">
  {#if edit}
    <Button href={`/document/${id}/edit`}>Edit</Button>
  {/if}

  {#if deletee}
    <Button onclick={() => deleteDocument(id)}>Delete</Button>
  {/if}

  {#if publish}
    <Button type="submit">Publish</Button>
  {/if}

  {#if back}
    <Button onclick={() => window.history.back()}>Back</Button>
  {/if}

  {#if home}
    <Button onclick={() => goto("/")}>Home</Button>
  {/if}
</div>
