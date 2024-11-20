<script lang="ts">
  import { app } from '$/config'
  import type { HeadMeta } from './types'

  const meta: HeadMeta = $props()
</script>

<svelte:head>
  {#if meta.titleTemplate}
    <title>
      {meta.titleTemplate(
        meta.title || app.name,
        meta.description || app.description,
      )}
    </title>
  {:else}
    <title>
      {meta.title || app.name} — {meta.description || app.description}
    </title>
  {/if}
  <meta name="description" content={meta.description || app.description} />
</svelte:head>
