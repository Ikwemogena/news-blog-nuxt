// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    apiKey: process.env.API_KEY,
    apiUrl: process.env.API_URL,
    currencyKey: process.env.CURRENCY_API_KEY,
  }
})