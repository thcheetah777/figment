<script lang="ts">

  import Button from "$lib/components/Button.svelte";

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
    <h2 class="text-neutral text-xl">
      Your own personal page to show-off to your friends.
    </h2>
  </div>

  <div class="text-center w-64 space-y-4">
    <Button href="/sign-up">
      Create Your Page
    </Button>
    <a href="/login" class="block text-sm text-neutral hover:underline">Log In</a>
  </div>
</div>
