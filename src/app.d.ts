// See https://kit.svelte.dev/docs/types#app

import type { Session, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

declare global {
	namespace App {
		interface Locals {
      supabase: SupabaseClient<Database>;
      getSession(): Promise<Session | null>;
    }
		interface PageData {
      session: Session | null;
    }
		// interface Error {}
		// interface Platform {}
	}
}

export {};
