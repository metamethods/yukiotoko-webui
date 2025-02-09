<script lang="ts">
  let { rating, prefix }: { rating: number; prefix?: string } = $props();

  const ratingType = $derived(
    rating <= 3.99
      ? "green"
      : rating <= 6.99
        ? "orange"
        : rating <= 9.99
          ? "red"
          : rating <= 11.99
            ? "pruple"
            : rating <= 13.24
              ? "bronze"
              : rating <= 14.49
                ? "silver"
                : rating <= 15.24
                  ? "gold"
                  : rating <= 15.99
                    ? "platinum"
                    : "rainbow"
  );
</script>

<p class="font-bold bg-right {ratingType}">
  {prefix ?? ""}
  {rating}
</p>

<style>
  .rainbow {
    @apply bg-gradient-rainbow text-transparent bg-clip-text;
    background-size: 200% 100%;
    animation: background-position 5s linear infinite;
  }

  @keyframes background-position {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 200% 0;
    }
  }

  .platinum {
    @apply bg-gradient-to-r from-40% from-lavender via-50% via-[#eee] to-60% to-lavender text-transparent bg-clip-text;
    background-size: 300%;
    background-position-x: 100%;
    animation: shimmer 2s infinite linear;
  }

  .gold {
    @apply bg-gradient-to-r from-40% from-yellow via-50% via-[#fdf6e7] to-60% to-yellow text-transparent bg-clip-text;
    background-size: 300%;
    background-position-x: 100%;
    animation: shimmer 2s infinite linear;
  }

  .silver {
    @apply bg-gradient-to-r from-40% from-text via-50% via-[#eee] to-60% to-text text-transparent bg-clip-text;
    background-size: 300%;
    background-position-x: 100%;
    animation: shimmer 2s infinite linear;
  }

  @keyframes shimmer {
    to {
      background-position-x: 0%;
    }
  }

  .bronze {
    @apply text-flamingo;
  }

  .purple {
    @apply text-mauve;
  }

  .red {
    @apply text-red;
  }

  .orange {
    @apply text-peach;
  }

  .green {
    @apply text-green;
  }
</style>
