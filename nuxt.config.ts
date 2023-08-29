// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/styles/theme.css', '~/styles/global.css'],
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
})
