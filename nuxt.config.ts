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
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**", "./**/*.store.ts"],
  },
  piniaPluginPersistedstate: {
    storage: "cookies",
    cookieOptions: {
      sameSite: "none",
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
    },
  },
  quasar: {
    plugins: ["Notify", "Dialog"],
    lang: "fa-IR",
    config: {
      brand: {
        primary: "#FF7118",
        secondary: "#FAE4D7",
        positive: "#22A957",
        disabled: "#F5F7F6",
        border: "#D9D9D9",
        vblue: "#257BAF",
        vpurple: "#7A72FF",
      },
      notify: {
        position: "bottom-left",
        progress: true,
        color: "primary",
        actions: [{ icon: "close", textColor: "white" }],
      },
    },
    components: {
      defaults: {
        QInput: {
          lazyRules: true,
          standout: "bg-transparent",
        },
        QBtn: {
          textColor: "primary",
          color: "secondary",
          rounded: true,
          unelevated: true,
        },
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
