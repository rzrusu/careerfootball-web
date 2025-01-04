// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,
  modules: [
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxt/ui",
  ],
  googleFonts: {
    families: {
      'Work+Sans': [900],
      'Chivo': true,
    },
  },
})
