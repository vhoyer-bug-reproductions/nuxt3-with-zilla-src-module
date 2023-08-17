// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      bodyAttrs: {
        'data-theme': 'ead',
      },
    },
  },
  css: [
    '@quero/zilla-core/dist/main.css',
    '@quero/zilla-dictionary/dist/tokens.css',
    '@quero/zilla-dictionary/dist/ead/tokens.css',
  ],
  modules: [
    '@quero/zilla-vue/nuxt',
  ],
})
