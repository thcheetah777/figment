<script lang="ts">
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  import "@fontsource-variable/inter";

  import "../global.css";
  import "iconify-icon";

  export let data;

  const { supabase, session } = data;

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<slot />
