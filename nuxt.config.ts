// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  router: {
    base: "/<repository-name>/",
  },
  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=Poppins:wght@100&family=Roboto:wght@100&display=swap" }],
  },
};

