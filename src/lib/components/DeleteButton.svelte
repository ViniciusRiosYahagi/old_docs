<script lang="ts">
  import { goto } from "$app/navigation";
  import { api } from "$lib/api/axios";
  import { Button } from "$lib/components";

  let { id } = $props();

  let isOpen = $state(false);

  async function deleteDocument() {
    const response = await api.delete(`/documents/${id}`)

    if (response.data) {
      goto("/");
    }
  }

</script>

<Button onclick={() => (isOpen = !isOpen)}>Delete</Button>

{#if isOpen}
  <div
    class="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
  >
    <div
      class="h-38 w-78 border-2 p-3 flex flex-col justify-around items-center bg-[var(--color1)]"
    >
      <p class="text-balance text-center">
        Are you sure you want to delete this document?
      </p>
      <div>
        <Button onclick={() => deleteDocument()}>Yes</Button>
        <Button onclick={() => (isOpen = !isOpen)}>Cancel</Button>
      </div>
    </div>
  </div>
{/if}
