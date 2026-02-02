// https://nuxt.com/docs/4.x/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app',

  modules: ['@cursor-run/nuxt-ui', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    configPath: './tailwind.config.ts',
    cssPath: '~/assets/css/main.css',
  },

  fonts: {
    families: [{ name: 'Plus Jakarta Sans', provider: 'google' }],
  },
});
