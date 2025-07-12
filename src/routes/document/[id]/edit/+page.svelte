<script lang="ts">
  import { Controllers, Form } from "$lib/components";
  import type { PageProps } from "./$types";

  let { data, form }: PageProps = $props();
</script>

<Controllers home back />
{#if form?.errors}
  {#each form.errors as error}
    <p class="text-red-600 text-lg">{error}</p>
  {/each}
{/if}
<Form {...data.data}/>
