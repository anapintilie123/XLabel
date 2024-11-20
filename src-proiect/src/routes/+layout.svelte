<script lang="ts">
  import { page } from '$app/stores';
  import { app } from '$/config';
  import HeaderMain from '$/components/header/HeaderMain.svelte';
  import Menu from '$/components/header/Menu.svelte';
  import '$/styles/app.css';
</script>

<svelte:head>
  <link rel="canonical" href="{app.url}{$page.url.pathname}" />
</svelte:head>

<div id="__default">
  <HeaderMain />
  <Menu />
  <slot />
</div>

<style>
  #__default {
    padding: 1rem;
  }
</style>
