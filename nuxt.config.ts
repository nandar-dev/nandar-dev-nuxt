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
  modules: ["nuxt-icon"],
});
