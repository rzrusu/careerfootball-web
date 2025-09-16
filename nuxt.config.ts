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
    '@nuxt/image',
    "@nuxt/ui",
    "nuxt-gtag",
    "@nuxtjs/tailwindcss",
  ],

  gtag: {
    id: 'G-54058BNVWR'
  },

  googleFonts: {
    families: {
      'Work+Sans': [900],
      'Chivo': true,
    },
  },

  tailwindcss: {
    config: {
      plugins: [require('@tailwindcss/typography')]
    }
  },

  content: {
    markdown: {
      mdc: true
    }
  }
})
