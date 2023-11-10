// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
export default defineNuxtConfig({
  serverHandlers: [
    {
      route: '/api/line',
      middleware: true,
      handler: '~/server_express/api/line.ts'
    },
  ],
})