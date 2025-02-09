<script lang="ts">
  import Room from "$lib/Room.svelte";
  import type { YukiotokoRoom } from "$lib/server/yukiotoko";

  let {
    rooms,
    showRoomDetails,
  }: { rooms: YukiotokoRoom[]; showRoomDetails?: boolean } = $props();
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
  {#each rooms as room}
    <div class="bg-mantle rounded-lg">
      <Room {room} showDetails={showRoomDetails} />
    </div>
  {/each}
</div>
