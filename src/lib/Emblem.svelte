<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  let {
    emblem,
    ...rest
  }: { emblem: { base: number; medal: number } } & HTMLAttributes<SVGElement> =
    $props();
</script>

<svg {...rest} viewBox="0 0 276 125" xmlns="http://www.w3.org/2000/svg">
  <image
    href={`/emblem/base/${emblem.base}.png`}
    x="0"
    y="23.5%"
    width="276"
    height="78"
  />
  <image
    href={`/emblem/medal/${emblem.medal}.png`}
    x="0"
    y="0"
    height="100%"
    width="100%"
  />
</svg>
