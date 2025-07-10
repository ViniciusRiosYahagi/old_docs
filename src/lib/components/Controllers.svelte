<script lang="ts">
  import type { ControllersProps } from "$lib/types/types";

  import { goto } from "$app/navigation";
  import { Button, DeleteButton } from "$lib/components";
  import { printPage } from "$lib/utils/print";

  let {
    create,
    print,
    home,
    publish,
    edit,
    deletee,
    back,
    id = "",
  }: ControllersProps = $props();
</script>

<div class="flex justify-center gap-3 my-6 lg:justify-end">
  {#if edit}
    <Button href="/document/{id}/edit">Edit</Button>
  {/if}

  {#if deletee}
    <DeleteButton {id} />
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

  {#if print}
    <Button onclick={() => printPage()}>Print</Button>
  {/if}

  {#if create}
    <Button href="/create">Create</Button>
  {/if}
</div>
