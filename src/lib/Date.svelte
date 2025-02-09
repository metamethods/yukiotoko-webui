<script lang="ts">
  let { dateString }: { dateString: string } = $props();

  let date = $derived(new Date(dateString));

  let currentDate = $state(Date.now());
  let difference = $derived(currentDate / 1000 - date.getTime() / 1000);
  let seconds = $derived(~~(difference % 60));
  let minutes = $derived(~~(difference / 60) % 60);
  let hours = $derived(~~(difference / 3600) % 24);
  let days = $derived(~~(difference / 86400));

  setInterval(() => {
    currentDate = Date.now();
  });
</script>

<p class="group text-light underline">
  <span class="group-hover:hidden">
    about
    {#if days > 0}
      <span>{days}d</span>
    {:else if hours > 0}
      <span>{hours}h</span>
    {:else if minutes > 0}
      <span>{minutes}m</span>
    {:else}
      <span>{seconds}s</span>
    {/if}
    ago
  </span>
  <span class="hidden group-hover:block">
    {date.toLocaleString()}
  </span>
</p>
