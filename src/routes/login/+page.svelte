<script lang="ts">
  import { goto } from "$app/navigation";
  import toast from "svelte-french-toast";
  import Button from "$lib/components/ui/Button.svelte";
  import Input from "$lib/components/ui/Input.svelte";

  export let data;

  let email = "";
  let password = "";

  async function logIn(): Promise<void> {
    const { data: result, error } = await data.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
      let errorMessage = error.message;

      if (!email) errorMessage = "Please enter a email";
      if (!password) errorMessage = "Please enter a password";

      toast.error(errorMessage);
    } else {
      console.log(result);
      toast.success("Logged in successfully!");
      goto(`/${result.user.user_metadata.username}`);
    }
  }
</script>

<svelte:head>
  <title>Figment - Log in</title>
</svelte:head>

<div class="h-screen flex items-center">
  <div class="w-2/5 ml-32">
    <div class="space-y-2">
      <h1 class="font-bold text-h1">Log in to Figment</h1>
      <h2 class="text-muted">The one link to rule them all.</h2>
    </div>

    <form class="space-y-4 my-16" on:submit|preventDefault={logIn}>
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
        Log In
      </Button>
    </form>

    <p class="text-sm text-muted">
      or
      <a href="/sign-up" class="hover:underline">
        sign up
      </a>
    </p>
  </div>
</div>
