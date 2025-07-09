<script lang="ts">
  import { api } from "$lib/api/axios";
  import { Documents } from "$lib/components";
  import { searchInput } from "$lib/stores/search.svelte";
  import type { DocumentProps } from "$lib/types/types";

  async function search() {
    const url = searchInput.currnet.length
      ? `/documents/search?q=${searchInput.currnet}`
      : "/documents";

    const response = await api.get(url);
    const data: DocumentProps = await response.data;

    if (!data) {
      throw new Error("Faild to load data");
    }

    return { data };
  }
</script>

{#await search()}
  <p>Loading...</p>
{:then data}
  <Documents {data} />
{/await}
