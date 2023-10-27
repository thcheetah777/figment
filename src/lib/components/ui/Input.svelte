<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLInputAttributes } from "svelte/elements";

  interface $$Props extends HTMLInputAttributes {
    styling?: string;
  };

  export let styling = "";
</script>

<input
  class={cn(
    "bg-muted-extralight rounded-lg p-3 text-sm outline-none",
    styling
  )}
  {...$$restProps} />
