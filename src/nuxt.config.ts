export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  nitro: {
    plugins: ['~/server/index.ts'],
  },
  css: [
    '~/assets/style/_main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  plugins: [{ src: '~/plugins/fontawesome.ts', mode: 'client' }],
  runtimeConfig: {
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_URL: process.env.MONGO_URL,
  },
})
