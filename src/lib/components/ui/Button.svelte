<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface $$Props extends HTMLButtonAttributes {
    styling?: string;
    loading?: boolean;
    disabled?: boolean;
    href?: string;
  };

  export let styling = "";
  export let loading = false;
  export let disabled = false;
  export let href = "";
</script>

<svelte:element
  this={href ? "a" : "button"}
  class={cn(
    "p-3 rounded-xl bg-primary hover:bg-primary-dark hover:bg-opacity-90 duration-200 text-white font-bold w-full shadow-md active:shadow-none active:scale-95 flex items-center justify-center",
    styling
  )} role="button" tabindex="0"
  {href}
  on:click
  {...$$restProps}>
  <slot />
</svelte:element>
