import { getRooms } from '$lib/server/yukiotoko';
import { json } from '@sveltejs/kit';

export async function GET() {
  return json(await getRooms());
}
