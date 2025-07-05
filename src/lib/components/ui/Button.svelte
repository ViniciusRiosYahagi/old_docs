<script lang="ts">
  import type { ButtonProps } from "$lib/types/types";

  let { type, onclick, href, children, ...props }: ButtonProps = $props();
</script>

{#if href}
  <a
    {href}
    class="border-2 p-1 cursor-pointer hover:border-solid active:translate-y-0.5"
    >{@render children()}</a
  >
{:else}
  <button
    {...props}
    {onclick}
    class="border-2 p-1 cursor-pointer hover:border-solid active:translate-y-0.5 uppercase"
    >{@render children()}</button
  >
{/if}
