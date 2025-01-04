// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  site: {
    url: 'https://footballcareer.app',
    name: 'Football Career',
  },

  ssr: true,
  modules: [
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxtjs/seo",
    "@nuxt/ui",
  ],
  googleFonts: {
    families: {
      'Work+Sans': [900],
      'Chivo': true,
    },
  },
})
