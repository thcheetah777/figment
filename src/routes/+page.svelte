<script lang="ts">
  import type { PageData } from "./$types";
  import Button from "$lib/components/ui/Button.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Figment</title>
</svelte:head>

<div class="flex flex-col justify-evenly items-center min-h-screen">
  <div class="flex flex-col items-center gap-2">
    <img src="/logo.svg" alt="Logo" />
    <h1 class="font-semibold text-xl">Figment</h1>
  </div>

  <div class="text-center space-y-4">
    <h1 class="text-center font-bold text-5xl leading-[4rem]">
      A Link in Bio.
      <br>
      But Fully <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#22d3ee]">Customizable.</span>
    </h1>
    <h2 class="text-muted text-xl">
      Your own personal page to style and share.
    </h2>
  </div>

  <div class="text-center w-64 space-y-4">
    {#if data.session}
      <Button href="/{data.session.user.user_metadata.username}" styling="p-4">
        Go To Your Page
      </Button>
    {:else}
      <Button href="/sign-up" styling="p-4 gap-1 hover:gap-3">
        <span>Create Your Page</span>
        <iconify-icon icon="mdi:arrow-right" class="text-2xl"></iconify-icon>
      </Button>
      <a href="/login" class="block text-sm text-muted hover:underline">Log In</a>
    {/if}
  </div>
</div>
