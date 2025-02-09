<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  let { teamName, ...rest }: { teamName: string } & HTMLAttributes<SVGElement> =
    $props();
</script>

<svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <image href="/team_bg.png" x="0" y="0" width="100%" height="100%" />
  <text x="12.5%" y="55%" fill="currentColor" class="text-text text-xl"
    >{teamName}</text
  >
</svg>
