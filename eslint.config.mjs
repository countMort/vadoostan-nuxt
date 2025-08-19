import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
  rules: {
    "vue/no-multiple-template-root": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/require-default-prop": "off",
    "vue/html-self-closing": "off",
  },
})
