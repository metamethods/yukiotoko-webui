import defaultTheme from 'tailwindcss/defaultTheme';
import catppuccin from '@catppuccin/tailwindcss';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    backgroundImage: {
      'gradient-rainbow': `linear-gradient(
        to right,       
        theme(colors.blue.DEFAULT) 0%,
        theme(colors.mauve.DEFAULT) 33%,
        theme(colors.teal.DEFAULT) 66%,
        theme(colors.blue.DEFAULT) 100%
      )`,
    },

    extend: {
      fontFamily: {
        sans: ['Nunito Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    catppuccin({
      defaultFlavour: 'mocha',
    }),
  ],
} satisfies Config;
