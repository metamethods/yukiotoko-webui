<script lang="ts">
  import { Calendar, User } from "lucide-svelte";
  import BattleRank from "./BattleRank.svelte";
  import GameVersion from "./GameVersion.svelte";
  import Player from "./Player.svelte";
  import type { YukiotokoRoom } from "./server/yukiotoko";
  import Version from "./Version";
  import Date from "./Date.svelte";

  let { room, showDetails }: { room: YukiotokoRoom; showDetails?: boolean } =
    $props();

  let roomTimer = $state(room.timeRemaining);

  setInterval(() => {
    roomTimer = Math.max(roomTimer - 1, 0);
  }, 1000);
</script>

<div class="flex flex-col gap-4 p-4">
  <section>
    <div class="flex items-start justify-between">
      <div class="flex flex-col sm:flex-row items-start gap-4">
        <GameVersion
          version={Version.fromString(room.gameVersion)}
          class="w-32"
        />
        <BattleRank rank={room.battleRank} class="w-24" />
      </div>

      <div class="flex flex-col items-end gap-2">
        <p
          class="text-crust font-bold {room.status === 'Active'
            ? 'bg-teal'
            : room.status === 'Open'
              ? 'bg-green'
              : room.status === 'Merged'
                ? 'bg-yellow'
                : 'bg-red'} px-3 py-1 rounded-full"
        >
          {room.status}
        </p>
        {#if room.status !== "Closed" && room.status !== "Merged"}
          <p
            class="{roomTimer < 15
              ? 'bg-red'
              : roomTimer < 30
                ? 'bg-green'
                : 'bg-mauve'} transition-colors px-3 py-1 text-crust font-bold rounded-full"
          >
            {roomTimer} seconds
          </p>
        {/if}
        {#if showDetails}
          <p class="text-subtext1 text-right">
            Room Id - {room.id}<br />
            Game Version - {room.gameVersion} <br />
            Battle Rank - {room.battleRank}<br />
            {#if room.status === "Merged"}
              Merged With Room Id - {room.mergedWith}
            {/if}
          </p>
        {/if}
      </div>
    </div>
  </section>

  <section class="flex flex-col gap-2">
    <div class="flex gap-4 flex-wrap w-full">
      <p>
        <span><User class="inline-block" /></span>
        {room.players.length}/4 Players
      </p>

      <p>
        <span><Calendar class="inline-block" /></span>
        <span class="inline-block"><Date dateString={room.lastUpdated} /></span>
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      {#each room.players as player}
        <div class="bg-crust rounded-md relative">
          <Player {player} />
        </div>
      {/each}
    </div>
  </section>
</div>
