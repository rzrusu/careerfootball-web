import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,md,mdx,ts}'],
  theme: {
    fontFamily: {
      sans: ['Chivo'],
      work: ['Work Sans'],
    },
  },
  plugins: [typography],
};
