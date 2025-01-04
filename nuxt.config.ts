// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  site: {
    url: 'https://footballcareer.app',
    name: 'Football Career',
  },

  googleAnalytics: {
    id: 'G-F0PSGVYJBX ',
  },

  ssr: true,
  modules: [
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxtjs/seo",
    '@nuxt/image',
    "@nuxt/ui",
  ],

  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  googleFonts: {
    families: {
      'Work+Sans': [900],
      'Chivo': true,
    },
  },
})
