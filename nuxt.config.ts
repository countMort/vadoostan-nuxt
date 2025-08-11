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
    "@sidebase/nuxt-auth",
    "@pinia/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**", "./**/*.store.ts"],
  },
  auth: {
    baseURL: `http://localhost:${process.env.PORT || 3000}/api`,
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "/auth/verify-otp", method: "post" },
        getSession: { path: "/users/me", method: "get" },
      },
      token: {
        type: "",
        signInResponseTokenPointer: "/result/token",
      },
    },
  },
  quasar: {
    plugins: ["Notify", "Dialog"],
    lang: "fa-IR",
    config: {
      brand: {
        primary: "#FF7118",
        secondary: "#FAE4D7",
        positive: "#15A983",
        // divider: "#D4D4D6",
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
