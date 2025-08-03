import { baseUrl } from "./app/constants/api.cons"
import tailwindcss from "@tailwindcss/vite"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "nuxt-quasar-ui",
  ],
  quasar: {
    plugins: ["Notify", "Dialog"],
    lang: "fa-IR",
  },
  fonts: {
    families: [
      {
        name: "Vazirmatn",
        provider: "google",
        subsets: ["latin"],
        weights: ["400 900"],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  routeRules: {
    "/api/**": {
      proxy: baseUrl + "/api/**",
    },
  },
})
