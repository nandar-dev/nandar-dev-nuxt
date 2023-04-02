// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nandar | Web Developer",
      meta: [
        {
          name: "description",
          content:
            "I am a passionate web developer with a strong focus on delivering high quality websites that are visually appealing and user friendly. I enjoy taking on new challenges and staying up to date with the latest technologies and trends in the industry.",
        },
        {
          name: "author",
          content: "Nandar",
        },
        {
          name: "keywords",
          content:
            "portfolio, web development, vue, nandar, nanda, frontend developer, software developer, web developer, nawnghkio, naungcho, myanmar",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
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
