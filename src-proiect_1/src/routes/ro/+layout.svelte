<!-- src/routes/ro/+layout.svelte -->
<script lang="ts">
  import HeaderMain from '../../components/header/HeaderMain.svelte';
  import Menu from '../../components/header/Menu.svelte';
  import { lang } from '$lib/stores/lang';
  import { theme } from '$lib/stores/theme';
  import { browser } from '$app/environment';

  // Import global styles
  import '../../styles/app.css';
  import '../../styles/theme.css';

  // Load user preferences from local storage (if running in the browser)
  if (browser) {
    lang.subscribe((value) => localStorage.setItem('lang', value));
    theme.subscribe((value) => {
      localStorage.setItem('theme', value);
      document.documentElement.setAttribute('data-theme', value);
    });
  }
</script>

<HeaderMain />
<Menu />
<slot />

<style>
  main {
    padding: 1rem;
  }
</style>
