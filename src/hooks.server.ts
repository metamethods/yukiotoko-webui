import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith('/.env'))
    return new Response('BIG_MEN="big men"');

  return await resolve(event);
};
