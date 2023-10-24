import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  return { username: params.username };
}) satisfies PageServerLoad;
