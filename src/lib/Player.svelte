<script lang="ts">
  import BattleRank from "./BattleRank.svelte";
  import Emblem from "./Emblem.svelte";
  import Rating from "./Rating.svelte";
  import type { YukiotokoPlayer } from "./server/yukiotoko";
  import Team from "./Team.svelte";

  let { player }: { player: YukiotokoPlayer } = $props();
</script>

<div class="flex flex-col gap-1 p-4">
  <Team teamName={player.team?.name ?? "No Team"} class="max-w-[18rem]" />
  <!-- TODO: Add player's equipped title -->
  <h1 class="text-xl font-bold">
    {player.username}
  </h1>
  <div>
    <Rating rating={player.rating} prefix="Max Rating" />
  </div>
  <div class="flex items-center gap-2">
    <BattleRank rank={player.battleRank} class="w-16" />
    <Emblem emblem={player.emblem} class="w-20" />
  </div>
</div>
