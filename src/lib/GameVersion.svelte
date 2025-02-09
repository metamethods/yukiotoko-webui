<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type Version from "./Version";
  import gameVersions from "./gameVersions";

  let {
    version,
    ...rest
  }: { version: Version } & HTMLAttributes<HTMLImageElement> = $props();
</script>

<img
  src="/versions/{gameVersions[version.minor]}"
  alt="Game Version"
  {...rest}
/>
