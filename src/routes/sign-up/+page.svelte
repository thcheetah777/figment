<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/components/ui/Button.svelte';
  import { slide } from 'svelte/transition';

  export let data;

  let username = "";
  let email = "";
  let password = "";

  async function signUp(): Promise<void> {
    const { data: result, error } = await data.supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(result);
      goto("/");
    }
  }
</script>

<svelte:head>
  <title>Figment - Sign Up</title>
</svelte:head>

<div class="min-h-screen flex items-center">
  <div class="w-2/5 ml-32">
    <div>
      <div class="space-y-2">
        <h1 class="font-bold text-h1">Welcome to Figment</h1>
        <h2 class="text-muted">The one link to rule them all.</h2>
      </div>

      <form class="space-y-4 my-16" on:submit|preventDefault={signUp}>
        <div class="bg-muted-extralight rounded-lg p-3 text-sm w-full flex">
          <span class="text-muted">figment.me/</span>
          <input
            type="text"
            placeholder="username"
            class="bg-transparent outline-none flex-grow placeholder:text-muted-light"
            bind:value={username} />
        </div>

        <div class="flex gap-2">
          <input
            type="text"
            placeholder="Email..."
            class="bg-muted-extralight rounded-lg p-3 text-sm flex-1 outline-none"
            bind:value={email} />
          <input
            type="password"
            placeholder="Password..."
            class="bg-muted-extralight rounded-lg p-3 text-sm flex-1 outline-none"
            bind:value={password} />
        </div>

        <Button type="submit" styling="text-sm">
          Continue
        </Button>
      </form>

      <p class="text-sm text-muted">
        or
        <a href="/login" class="hover:underline">
          log in
        </a>
      </p>
    </div>
  </div>
</div>
