<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  let { value = $bindable(""), ...props }: HTMLInputAttributes  = $props();
</script>

<input
  {...props}
  bind:value
  class="border-b-2 hover:border-solid focus:border-solid outline-0"
/>
