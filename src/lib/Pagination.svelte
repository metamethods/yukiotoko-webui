<script lang="ts" generics="T">
  let {
    items,
    itemsPerPage,
    pageItems = $bindable(),
    currentPage = 0,
  }: {
    items: Array<T>;
    itemsPerPage: number;
    pageItems: Array<T>;
    currentPage?: number;
  } = $props();

  let pageIndexStart = $derived(currentPage * itemsPerPage);
  let pageIndexEnd = $derived(
    Math.min(itemsPerPage * (currentPage + 1), items.length)
  );

  $effect(() => {
    currentPage = Math.min(
      Math.max(currentPage, 0),
      ~~(items.length / itemsPerPage)
    );
    pageItems = items.slice(pageIndexStart, pageIndexEnd);
  });
</script>

<div class="flex flex-col gap-2">
  <p>
    showing <span class="font-bold text-light">{pageIndexStart + 1}</span> to
    <span class="font-bold text-light">{pageIndexEnd}</span>
    of <span class="font-bold text-light">{items.length}</span>
    entires (<span class="font-bold text-light">page {currentPage + 1}</span>)
  </p>

  <div class="flex divide-x divide-overlay0">
    <button
      class="rounded-bl-lg rounded-tl-lg bg-mantle px-4 py-2 text-light transition hover:brightness-150"
      onclick={() => currentPage--}>prev</button
    >
    <button
      class="rounded-br-lg rounded-tr-lg bg-mantle px-4 py-2 text-light transition hover:brightness-150"
      onclick={() => currentPage++}>next</button
    >
  </div>
</div>
