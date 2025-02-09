import type { YukiotokoRoom } from '$lib/server/yukiotoko';

export async function load({ fetch }) {
  const rooms: YukiotokoRoom[] = await fetch('/api/rooms').then(
    async (response) => await response.json()
  );
  return {
    rooms,
  };
}
