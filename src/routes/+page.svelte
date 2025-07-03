<script lang="ts">
  import { Documents } from "$lib/components";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<Documents {data} />
