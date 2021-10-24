<script>
  import "../app.css";
  import { base } from '$app/paths'
  import { page } from '$app/stores'
  let isFront = $page.path === '/'
</script>

<div id="screen" class="flex flex-col min-h-screen overflow-x-hidden {isFront ? 'front' : 'not-front'}">

<header id="header" class="lg:sticky w-full relative z-10">
  <div class="ctr flex">
    <h1 class="inline-block">Desert Rose Memorial Garden</h1>
    <div class="flex-grow"></div>
    <div>
      <a href="{base}/" class="menulink">Home</a>
      <a href="{base}/sites" class="menulink">Memorials</a>
    </div>
  </div>
</header>

<div id="screen" class="flex-grow">
  <div class="ctr">
    <slot />
  </div>
</div>

<footer id="footer" class="flex justify-center text-sm text-white bg-gray-600">
  <div class="ctr flex">
    <div class="text-xs md:text-sm inline-block leading-none">
      © 2021 Desert Rose Bahá’í Institute &middot; 6056 S. Alai Drive, Eloy, Az 85131
    </div>
  </div>
</footer>

</div>

<style lang="postcss">
  .ctr { @apply max-w-screen-xl mx-auto p-4 }
  .menulink { @apply inline-block px-2 py-1 text-blue-800 hover:underline font-tulpen text-2xl md:text-3xl leading-none }
</style>