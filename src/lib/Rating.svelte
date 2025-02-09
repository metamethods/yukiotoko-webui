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
                    : rating <= 17.37
                      ? "rainbow"
                      : "white"
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

  .platium {
    @apply text-lavender;
  }

  .gold {
    @apply text-yellow;
  }

  .silver {
    @apply text-text;
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
