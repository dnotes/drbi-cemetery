<script lang="ts">
  import { base } from '$app/paths'
  import sites from '$lib/sites'
</script>

<div class="flex flex-wrap justify-center overflow-hidden max-w-3xl mx-auto">
  {#each sites as s}
    <a class="inline-block w-full overflow-hidden px-2 py-1" style="max-width:250px" href="{base}/sites/{s.slug}">{s.name}</a>
  {/each}
</div>
