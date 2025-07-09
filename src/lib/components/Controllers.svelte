<script lang="ts">
  import type { ControllersProps } from "$lib/types/types";

  import { goto } from "$app/navigation";
  import { Button, DeleteButton } from "$lib/components";

  let { home, publish, edit, deletee, back, id = "" }: ControllersProps = $props();
</script>

<div class="flex justify-end gap-3">
  {#if edit}
    <Button href="/document/{id}/edit">Edit</Button>
  {/if}

  {#if deletee}
    <DeleteButton  {id}/>
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

