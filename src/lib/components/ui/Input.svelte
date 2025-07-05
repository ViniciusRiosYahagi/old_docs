<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  let { ...props }: HTMLInputAttributes = $props();
</script>

<input
  {...props}
  class="border-b-2 hover:border-solid focus:border-solid outline-0"
/>
