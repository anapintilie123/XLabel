<script lang="ts">
  import HeaderMain from '../../components/header/HeaderMain.svelte';
  import Menu from '../../components/header/Menu.svelte';
  import { writable } from 'svelte/store';

  // Import global styles
  import '../../styles/app.css';
  import '../../styles/theme.css';

  // Create language and theme stores
  export let lang = writable('en'); // Default language is English
  export let theme = writable('light'); // Default theme is Light

  // Load user preferences from local storage (if available)
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('lang');
    const savedTheme = localStorage.getItem('theme');

    if (savedLang) lang.set(savedLang);
    if (savedTheme) {
      theme.set(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Update local storage when language or theme changes
    lang.subscribe((value) => localStorage.setItem('lang', value));
    theme.subscribe((value) => {
      localStorage.setItem('theme', value);
      document.documentElement.setAttribute('data-theme', value);
    });
  }
</script>

<HeaderMain {lang} {theme} />
<Menu />
<slot />

<style>
  main {
    padding: 1rem;
  }
</style>
