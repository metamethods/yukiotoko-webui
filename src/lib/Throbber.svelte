<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  let { ...rest }: HTMLAttributes<SVGElement> = $props();
</script>

<svg
  width="64"
  height="64"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  {...rest}
>
  <path
    d="M95 50C97.7614 50 100.026 47.7559 99.7502 45.0083C99.2632 40.1546 98.0676 35.3891 96.194 30.8658C93.6812 24.7995 89.9983 19.2876 85.3553 14.6447C80.7124 10.0017 75.2004 6.31876 69.1342 3.80602C63.0679 1.29329 56.5661 -2.87013e-07 50 0C43.4339 2.87013e-07 36.9321 1.29329 30.8658 3.80602C24.7995 6.31876 19.2876 10.0017 14.6447 14.6447C10.0017 19.2876 6.31876 24.7996 3.80602 30.8658C1.93241 35.3891 0.736793 40.1546 0.249792 45.0083C-0.0258933 47.7559 2.23858 50 5 50V50C7.76142 50 9.96781 47.7529 10.3121 45.013C10.7568 41.4736 11.674 38.0021 13.0448 34.6927C15.055 29.8396 18.0014 25.4301 21.7157 21.7157C25.4301 18.0014 29.8396 15.055 34.6927 13.0448C39.5457 11.0346 44.7471 10 50 10C55.2529 10 60.4543 11.0346 65.3073 13.0448C70.1604 15.055 74.5699 18.0014 78.2843 21.7157C81.9986 25.4301 84.945 29.8396 86.9552 34.6927C88.326 38.0021 89.2432 41.4736 89.6879 45.013C90.0322 47.7528 92.2386 50 95 50V50Z"
    fill="url(#paint0_linear_291_169)"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 50 50"
      to="360 50 50"
      dur="1s"
      repeatCount="indefinite"
    />
  </path>
  <defs>
    <linearGradient
      id="paint0_linear_291_169"
      x1="0"
      y1="50"
      x2="100"
      y2="50"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.1" stop-color="currentColor" stop-opacity="0" />
      <stop offset="1" stop-color="currentColor" />
    </linearGradient>
  </defs>
</svg>
