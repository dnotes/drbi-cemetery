<script lang="ts">
import type { Image } from "src/global";

  export let image:string|Image
  let tryAlt = ''
  let cls = ''
  export { tryAlt as alt, cls as class }

  if (typeof image === 'string') {
    image = {
      src: image,
      alt: tryAlt || '',
      title: '',
    }
  }

  let { src, alt, title } = image
  if (!alt) alt = tryAlt || ''

</script>

<img
  class="{cls}"
  on:click
  on:mouseover
  on:mouseout
  on:focus
  on:blur
  {src}
  {alt}
  {title}
/>