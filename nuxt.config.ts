// https://nuxt.com/docs/api/configuration/nuxt-config

import appConfig from "./utils/appConfig";

export default defineNuxtConfig({
  app: {
    head: {
      title: appConfig.sitename,
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          charset: "utf-8",
        },
        {
          property: "og:title",
          content: appConfig.sitename,
        },
        {
          name: "description",
          content: appConfig.devDescription,
        },
        {
          name: "author",
          content: appConfig.devName,
        },
        {
          name: "keywords",
          content: appConfig.devDescription,
        },
        {
          property: "og:description",
          content: appConfig.devDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        {
          property: "og:url",
          content: appConfig.prodUrl,
        },
        {
          property: "og:site:name",
          content: appConfig.sitename,
        },
        {
          property: "og:image",
          content: "/NDLogo.png",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: appConfig.sitename,
        },
        {
          name: "twitter:description",
          content: appConfig.devDescription,
        },
        {
          name: "twitter:image",
          content: "/NDLogo.png",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: appConfig.prodUrl,
        },
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
