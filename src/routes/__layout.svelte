<script>
  import "../app.css";
  import { page } from '$app/stores'
  let isFront = $page.path === '/'
</script>

<div id="screen" class="flex flex-col min-h-screen {isFront ? 'front' : 'not-front'}">

<header id="header" class="lg:sticky w-full relative z-10">
  <div class="ctr flex">
    <h1 class="inline-block">Desert Rose Memorial Garden</h1>
    <div class="flex-grow"></div>
    <a href="/" class="menulink">Home</a>
    <a href="/sites" class="menulink">Memorials</a>
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
  .menulink { @apply inline-block px-2 py-1 text-blue-800 hover:underline }
</style>