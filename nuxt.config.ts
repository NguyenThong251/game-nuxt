import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  // devtools: { enabled: true },
  ssr: true,
  srcDir: "./src",
  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "nuxt-windicss",
    "nuxt-marquee",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  css: ["~/assets/cssnew/common.css", "~/assets/css/vuetify.css"],
  experimental: {
    renderJsonPayloads: true,
    sharedPrerenderData: true,
  },
  components: [
    { path: "~/features/home/ui", pathPrefix: false, extensions: [".vue"] },
    { path: "~/features/hot/ui", pathPrefix: false, extensions: [".vue"] },
    { path: "~/features/sport/ui", pathPrefix: false, extensions: [".vue"] },
    { path: "~/features/casino/ui", pathPrefix: false, extensions: [".vue"] },
    { path: "~/features/slot/ui", pathPrefix: false, extensions: [".vue"] },
    { path: "~/features/card/ui", pathPrefix: false, extensions: [".vue"] },
    { path: "~/features/fishing/ui", pathPrefix: false, extensions: [".vue"] },
    { path: "~/features/lottery/ui", pathPrefix: false, extensions: [".vue"] },
    {
      path: "~/features/promotion/ui",
      pathPrefix: false,
      extensions: [".vue"],
    },

    // User
    {
      path: "~/features/user/deposit/ui",
      pathPrefix: false,
      extensions: [".vue"],
    },
    {
      path: "~/features/user/withdraw/ui",
      pathPrefix: false,
      extensions: [".vue"],
    },
    {
      path: "~/features/user/user-info/ui",
      pathPrefix: false,
      extensions: [".vue"],
    },
    {
      path: "~/features/user/deposit-history/ui",
      pathPrefix: false,
      extensions: [".vue"],
    },
    {
      path: "~/features/user/withdraw-history/ui",
      pathPrefix: false,
      extensions: [".vue"],
    },
    {
      path: "~/features/user/balance-change/ui",
      pathPrefix: false,
      extensions: [".vue"],
    },
    {
      path: "~/features/user/deposit-success/ui",
      pathPrefix: false,
      extensions: [".vue"],
    },

    "~/components",
  ],
  runtimeConfig: {
    public: {
      API_ENDPOINT: process.env.API_ENDPOINT,
      OTHER_API_ENDPOINT: process.env.OTHER_API_ENDPOINT,
      REGISTER_CODE: process.env.REGISTER_CODE,
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  builder: "vite",
});
