<script>
  import { SquareArrowOutUpRight } from "lucide-svelte";
</script>

<header class="w-full">
  <div
    class="flex items-center justify-between mx-auto w-full max-w-screen-xl p-8"
  >
    <section class="flex items-center gap-2">
      <a href="/" class="text-text">Home</a>
    </section>

    <section class="flex items-center gap-2">
      <a
        href="http://yukiotoko.chara.lol"
        target="_blank"
        class="text-text flex items-center gap-1"
        >Yukiotoko <span><SquareArrowOutUpRight class="h-4" /></span></a
      >
    </section>
  </div>
</header>

<style>
  a {
    @apply bg-mantle/50 px-3 py-2 rounded-lg hover:no-underline hover:bg-mantle transition-colors;
  }
</style>
