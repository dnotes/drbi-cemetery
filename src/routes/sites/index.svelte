<script lang="ts" context="module">
  import { base } from '$app/paths'
  export async function load({ fetch }) {
    const sites = await fetch(`${base}/sites.json`).then(r => r.json())
    return {
      props: { sites }
    }
  }
</script>

<script lang="ts">
  import type { Gravesite } from "src/global";
  export let sites:Gravesite[]
</script>

<img class="max-w-md lg:max-w-2xl mx-auto md:ml-8 md:float-right" src="/images/gravesites.jpg" alt="A row of gravesites in the sand, each lined in brick and covered with small desert stones.">

<div class="p:10 max-w-md mx-auto md:mx-0">
  <p>The following is a list of souls whose remains have been laid to rest in Desert Rose:</p>
  <ul>
    {#each sites as s}
    <li>
      <a rel="prefetch" href="{base}/sites/{s.slug}">{s.name}</a>
    </li>
    {/each}
  </ul>
</div>
