// https://nuxt.com/docs/api/configuration/nuxt-config

import appConfig from "./utils/appConfig";

export default defineNuxtConfig({
  app: {
    head: {
      title: appConfig.sitename,
      meta: [
        {
          name: "google-site-verification",
          content: "eqSLYtxNAq5HN27YbPeVHzCMd8kK_wDiwj1Umvcuz_E",
        },
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
          content: appConfig.keywords,
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
          content: `${appConfig.prodUrl}/NDLogo.png`,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
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
          content: `${appConfig.prodUrl}/NDLogo.png`,
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
      script: [
        {
          src: "https://cdn.ckeditor.com/ckeditor5/40.2.0/super-build/ckeditor.js",
        },
      ],
    },
  },
  css: ["@/css/index.scss"],
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
