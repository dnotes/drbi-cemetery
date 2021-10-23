<script lang="ts" context="module">
  import { base } from '$app/paths'
  export async function load({ fetch, page }) {
    const sites = await fetch(`${base}/sites.json`).then(r => r.json())
    const site = sites.find(s => s.slug === page.params.slug)
    return {
      props: { site }
    }
  }
</script>

<script lang="ts">
import Image from "$lib/Image.svelte";
import type { Gravesite } from "src/global";
  export let site:Gravesite
  let stats = [site?.born ?? `b. ${site.born}`, site?.deceased ?? `d. ${site.deceased}`].filter(Boolean)
</script>

<svelte:head>
  <title>{site.name} | Desert Rose Memorial Garden</title>
</svelte:head>

<div class="text-center max-w-2xl mx-auto">

  <h2>{site.name}</h2>

  {#if site.image}
    <Image image="/sites/{site.image}" alt="{site.name}" class="max-w-2xl mx-auto" />
  {/if}

  {#if stats.length}
    <p>
      {#each stats as item,i}
        {#if i}
          <br>
        {/if}
        {item}
      {/each}
    </p>
  {/if}

</div>

<div class="max-w-2xl mx-auto">
  {@html site.html}
</div>
