<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/Button.svelte";
  import toast from "svelte-french-toast";

  export let data;

  async function signOut(): Promise<void> {
    await data.supabase.auth.signOut();
    toast.success("Signed out successfully!");
    goto("/");
  }
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <h1 class="font-bold text-4xl">{data.username}</h1>

  {#if data.session && data.session.user.user_metadata.username === data.username}
    <Button on:click={signOut}>Sign Out</Button>
  {/if}
</div>
