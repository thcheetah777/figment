<script lang="ts">
  import { fly } from "svelte/transition";

  let usernameInput = "";
  let step: "username" | "account" = "username";
</script>

<svelte:head>
  <title>Figment - Sign Up</title>
</svelte:head>

<div class="min-h-screen flex items-center">
  <div class="w-1/3 ml-32">
    {#if step === "username"}
      <div transition:fly={{ x: -100 }}>
        <div class="space-y-4 mb-24">
          <h1 class="font-bold text-h1">First, claim your unique username</h1>
          <h2 class="text-neutral">This will also server as your link.</h2>
        </div>

        <div class="bg-neutral-extralight rounded-lg p-3 text-sm w-full flex">
          <span class="text-neutral">figment.me/</span>
          <input
            type="text"
            placeholder="your-name"
            class="bg-transparent outline-none flex-grow placeholder:text-neutral-light"
            bind:value={usernameInput} />
        </div>

        <button
          class="block p-3 text-sm rounded-xl bg-primary hover:bg-primary-dark hover:bg-opacity-90 duration-200 text-white font-bold w-full shadow-md active:shadow-none active:scale-95 mt-4 mb-8"
          class:invisible={!usernameInput}
          on:click={() => step = "account"}>
          Continue
        </button>

        <p class="text-sm text-neutral">
          or
          <a href="/login" class="hover:underline">
            log in
          </a>
        </p>
      </div>
    {:else}
      <div transition:fly={{ x: 100 }}>
        <button on:click={() => step = "username"}>
          <iconify-icon icon="mdi:arrow-left" class="text-3xl"></iconify-icon>
        </button>
      </div>
    {/if}
  </div>
</div>
