<script lang="ts">
  import Version from './Version';

  let {
    major = $bindable(),
    minor = $bindable(),
    patch = $bindable(),
    maxVersion,
  }: {
    major: number;
    minor: number;
    patch: number;
    maxVersion: Version;
  } = $props();

  $effect(() => {
    const version = new Version(major, minor, patch);
    version.clampMax(maxVersion);
    major = version.major;
    minor = version.minor;
    patch = version.patch;
  });
</script>

<div class="flex items-end flex-wrap gap-2">
  <input type="number" bind:value={major} />
  <p>.</p>
  <input type="number" bind:value={minor} />
  <p>.</p>
  <input type="number" bind:value={patch} />
</div>

<style>
  input {
    @apply bg-mantle rounded-lg px-3 py-2 outline-none appearance-none;
  }
</style>
