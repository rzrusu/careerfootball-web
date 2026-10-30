/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,md,mdx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Chivo', 'system-ui', 'sans-serif'],
      },
    },
  },
};
