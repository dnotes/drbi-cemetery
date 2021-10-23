const config = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    safeList: [
      'absolute',
      'relative'
    ],
  },

  theme: {
    extend: {},
  },

  plugins: [],
};

module.exports = config;
