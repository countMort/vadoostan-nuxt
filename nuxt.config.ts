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
    config: {
      brand: {
        primary: "#FF7118",
        secondary: "#FAE4D7",
        // divider: "#D4D4D6",
      },
    },
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
