// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: true,
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      aws_appsync_graphqlEndpoint: process.env.NUXT_APPSYNC_GRAPHQL_ENDPOINT,
      aws_appsync_apiKey: process.env.NUXT_APPSYNC_API_KEY,
      aws_appsync_region: process.env.NUXT_APPSYNC_REGION,
      appsync_authenticationType: process.env.NUXT_APPSYNC_AUTHENTICATION_TYPE,
    },
  },

  imports: {
    dirs: ["stores"],
  },
});
