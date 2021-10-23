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
    extend: {
      fontFamily: {
        normal: ["Bellefair", "Georgia", "serif"],
        tulpen: ["Tulpen One", "Arial Narrow", "sans-serif"],
        script: ["Explora", "script"]
      },
      fontSize: {
        '1vw': '1vw',
        '2vw': '2vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '6vw': '6vw',
        '7vw': '7vw',
      }
    },
  },

  plugins: [
    require('tailwindcss-typography')({
			ellipsis: false,
			hyphens: false,
			kerning: false,
			textUnset: false,
		})
  ],
};

module.exports = config;
