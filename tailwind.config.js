import colors from 'tailwindcss/colors';
import forms from '@tailwindcss/forms';

export default {
  content: [
    './src/**/*.{html,svelte}', // This will include all your svelte files
  ],
  theme: {
    extend: {
      colors, // This will add Tailwind's predefined colors
    },
  },
  plugins: [forms], // Adds the Tailwind Forms plugin
};
