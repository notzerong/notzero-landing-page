export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "NotZero Technologies",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      {hid: "keywords", name: 'keywords', content: 'notzero, not zero, software company,software company in Ibadan, Ibadan, Digital agency Ibadan, tech startup in Ibadan, web design, web agency Ibadan, android app development, ios app development, ibadan startup, nigeria startup, web development, software training in ibadan, software training in nigeria, digital agency in nigeria, tech startup in nigeria, software company in nigeria'},
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
