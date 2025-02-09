<script lang="ts">
  import { ChevronDown } from "lucide-svelte";
  import type { Snippet } from "svelte";
  import { slide } from "svelte/transition";

  let {
    open = false,
    title,
    children,
  }: { open?: boolean; title: string; children: Snippet } = $props();
</script>

<div>
  <button onclick={() => (open = !open)} class="text-2xl font-bold">
    {title}
    <span
      ><ChevronDown
        class="inline-block {open
          ? 'rotate-180 opacity-100'
          : 'rotate-0 opacity-50'} transition duration-[400ms] ease-out"
      /></span
    >
  </button>

  {#if open}
    <div transition:slide={{ axis: "y" }}>
      {@render children()}
    </div>
  {/if}
</div>
