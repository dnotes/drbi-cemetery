<script lang="ts" context="module">
  export const hydrate=false
  export const router=false
</script>

<script lang="ts">
  import SiteList from "$lib/SiteList.svelte";
</script>

<img class="mx-auto w-96 md:w-3/5" src="/images/gravesites.jpg" alt="A row of gravesites in the sand, each lined in brick and covered with small desert stones.">

<div class="max-w-3xl mx-auto mt-8">
  <p>The following is a list of souls whose remains have been laid to rest in Desert Rose:</p>
</div>

<SiteList />