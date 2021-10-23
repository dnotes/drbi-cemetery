<script lang="ts">
  import { base } from '$app/paths'
  import sites from '$lib/sites'
</script>

<div class="flex flex-wrap justify-center overflow-hidden max-w-3xl mx-auto">
  <a class="block px-2 w-full leading-none" href="{base}/sites/"><h3 class="border-b-2 pb-2 mb-2">Memorials</h3></a>
  {#each sites as s}
    <a class="inline-block w-full overflow-hidden px-2 py-1" style="max-width:244px" href="{base}/sites/{s.slug}">{s.name}</a>
  {/each}
</div>
