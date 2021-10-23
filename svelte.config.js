import preprocess from "svelte-preprocess";

import { plugin as mdPlugin } from "vite-plugin-markdown"
import mdAttrs from "markdown-it-attrs"
import mdit from "markdown-it"
const markdownIt = mdit({
    xhtmlOut:true,
    typographer:true,
}).use(mdAttrs)
const md = mdPlugin({ mode:'html', markdownIt })

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
      plugins: [
        md,
      ]
    }
  },
};

export default config;
