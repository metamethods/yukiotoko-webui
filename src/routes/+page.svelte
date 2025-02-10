<script lang="ts">
  import Pagination from '$lib/Pagination.svelte';
  import Rooms from './Rooms.svelte';
  import type { YukiotokoRoom } from '$lib/server/yukiotoko';
  import { PUBLIC_LATEST_VERSION } from '$env/static/public';
  import Version from '$lib/Version';
  import Expandable from '$lib/Expandable.svelte';
  import { onMount } from 'svelte';
  import VersionSelector from '$lib/VersionSelector.svelte';

  let { data } = $props();

  let latestVersion = Version.fromString(PUBLIC_LATEST_VERSION);

  let rooms: YukiotokoRoom[] = $state(data.rooms);

  let hideMergedRooms = $state(true);
  let hideClosedRooms = $state(true);
  let filterByVersion = $state(false);
  let versionFilterMajor = $state(latestVersion.major);
  let versionFilterMinor = $state(latestVersion.minor);
  let versionFilterPatch = $state(latestVersion.patch);

  let showRoomDetails = $state(false);

  let filteredRooms: YukiotokoRoom[] = $derived(
    rooms.filter((room) => {
      if (
        (hideMergedRooms && room.mergedWith) ||
        (hideClosedRooms && room.status === 'Closed') ||
        (filterByVersion &&
          !new Version(
            versionFilterMajor,
            versionFilterMinor,
            versionFilterPatch
          ).eq(Version.fromString(room.gameVersion)))
      )
        return false;
      return true;
    })
  );
  let roomPageItems: YukiotokoRoom[] = $state([]);

  onMount(() => {
    setInterval(async () => {
      const newRooms: YukiotokoRoom[] = await fetch('/api/rooms')
        .then((response) => response.json())
        .catch(() => undefined);

      if (newRooms) rooms = newRooms;
      else {
        console.log('Failed to fetch');
        /** Probably show some warning saying it failed to update or smh */
      }
    }, 5_000);
  });
</script>

<div class="flex flex-col gap-4">
  <section>
    <h1 class="text-4xl font-bold">Yukiotoko Redesigned</h1>
    <p class="text-subtext1">
      A frontend redesign for <a href="http://yukiotoko.chara.lol"
        >yukiotoko.chara.lol</a
      >
    </p>
  </section>

  <section>
    <h1 class="text-2xl font-bold">How rank based matching works</h1>
    <p class="text-subtext1">
      <b>Anybody can join within 2 battle</b>
      ranks of each other <br /> So at <b>rank 6</b>, people that are
      <b>rank 4</b>
      and <b>rank 8</b>
      can join normally <br /> <b>After 30 seconds</b> the lobby becomes
      <b>open</b>
      to anybody to join <br /> <b>After 45 seconds</b>, if alone in the lobby,
      it will try to
      <b>merge lobbies</b> with one that is open for anybody
    </p>
    <p class="text-subtext0 italic">Taken from yukiotoko.chara.lol</p>
  </section>

  <Expandable title="Filters">
    <div class="flex flex-col flex-wrap gap-2 text-subtext1">
      <label>
        <input type="checkbox" bind:checked={hideMergedRooms} />
        Hide Merged Rooms
      </label>
      <label>
        <input type="checkbox" bind:checked={hideClosedRooms} />
        Hide Closed Rooms
      </label>
      <label>
        <input type="checkbox" bind:checked={filterByVersion} />
        Filter by Game Version
        <b>(v{versionFilterMajor}.{versionFilterMinor}.{versionFilterPatch})</b>
      </label>
      {#if filterByVersion}
        <VersionSelector
          bind:major={versionFilterMajor}
          bind:minor={versionFilterMinor}
          bind:patch={versionFilterPatch}
          maxVersion={Version.fromString(PUBLIC_LATEST_VERSION)}
        />
      {/if}
    </div>
  </Expandable>

  <Expandable title="Settings">
    <div class="flex flex-col flex-wrap gap-2 text-subtext1">
      <label>
        <input type="checkbox" bind:checked={showRoomDetails} />
        Show Room Details
      </label>
    </div>
  </Expandable>

  <section class="flex flex-col gap-4">
    <Pagination
      items={filteredRooms}
      itemsPerPage={20}
      bind:pageItems={roomPageItems}
    />
    {#if roomPageItems.length == 0}
      <p class="text-4xl font-bold mx-auto my-8 text-overlay0">
        no rooms what!!
      </p>
    {:else}
      <Rooms rooms={roomPageItems} {showRoomDetails} />
    {/if}
  </section>
</div>
