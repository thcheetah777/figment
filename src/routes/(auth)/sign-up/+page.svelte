<script lang="ts">
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/Button.svelte";
  import Input from "$lib/components/ui/Input.svelte";
  import toast from "svelte-french-toast";

  export let data: PageData;

  let username = "";
  let email = "";
  let password = "";

  async function signUp(): Promise<void> {
    const { data: result, error } = await data.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) {
      console.error(error);
      let errorMessage = error.message;

      if (!password) errorMessage = "Please enter a password";
      if (!email) errorMessage = "Please enter a email";
      if (!username) errorMessage = "Please enter a username";

      toast.error(errorMessage);
    } else {
      console.log(result);
      toast.success("Signed up successfully!");
      goto(`/${username}`);
    }
  }
</script>

<svelte:head>
  <title>Figment - Sign Up</title>
</svelte:head>

<div class="h-screen flex items-center">
  <div class="w-2/5 ml-32">
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

      <div class="flex gap-4">
        <Input
          type="email"
          placeholder="Email..."
          styling="flex-1"
          bind:value={email} />
        <Input
          type="password"
          placeholder="Password..."
          styling="flex-1"
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
