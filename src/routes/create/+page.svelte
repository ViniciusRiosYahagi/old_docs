<script lang="ts">
  import { Controllers, Form } from "$lib/components";
  let { form } = $props();
</script>

<Controllers back />

{#if form?.errors}
  {#each form.errors as error}
    <p class="text-red-600 text-lg">{error}</p>
  {/each}
{/if}

<Form />
