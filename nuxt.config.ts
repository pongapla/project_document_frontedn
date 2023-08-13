

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["@/assets/scss/style.scss"],
  vite: {
    ssr: {
      noExternal: ["quasar"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  // app config
  app: {
    head: {
      htmlAttrs: {
          lang: 'en'
      },
      bodyAttrs: {
        class: 'demo'
      },
      charset: 'utf-8',
      titleTemplate: '%s | IT Support',
      meta: [
        {
          name: 'author',
          content: 'IT Support'
        },
      ] 
    }
  },
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: '/',
      }
    ],
    'nuxt-quasar-ui',
  ],
  quasar: { /* */ },
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    }
  },
})
