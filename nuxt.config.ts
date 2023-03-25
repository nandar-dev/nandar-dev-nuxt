// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nandar",
      meta: [
        {
          name: "description",
          content: "Web Developer",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unicons.iconscout.com/release/v4.0.0/css/line.css",
        },
      ],
    },
  },
  css: ["@/assets/css/index.scss"],
  typescript: {
    strict: true,
  },
  modules: ["@nuxtjs/color-mode"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
});
