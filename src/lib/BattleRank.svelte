<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  let { rank, ...rest }: { rank: number } & HTMLAttributes<HTMLImageElement> =
    $props();
</script>

<img src="/battle_rank/{rank}.png" alt="Battle Rank {rank}" {...rest} />
