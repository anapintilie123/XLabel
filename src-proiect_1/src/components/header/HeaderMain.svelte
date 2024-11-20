<script lang="ts">
  import { lang } from '../../lib/stores/lang';
  import { theme } from '$lib/stores/theme';
  import { get } from 'svelte/store';
  import { goto } from '$app/navigation'; // Import the `goto()` function

   // Function to toggle the language and navigate
   const toggleLanguage = () => {
    const currentLang = get(lang);
    const newLang = currentLang === 'ro' ? 'en' : 'ro';

    // Update the language store
    lang.set(newLang);

    // Construct the new URL by replacing the language prefix
    const newUrl = window.location.pathname.replace(`/${currentLang}`, `/${newLang}`);

    // Navigate to the new URL using SvelteKit's `goto` function
    goto(newUrl);
  };

  const toggleTheme = () => {
    const currentTheme = get(theme);
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    theme.set(newTheme);
  }
</script>

<header>
  <button on:click={toggleLanguage}>
    {get(lang) === 'ro' ? 'Switch to English' : 'Schimbă în Română'}
  </button>

  <button on:click={toggleTheme}>
    {get(theme) === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
  </button>
  
</header>

<style>
  header {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: none;
    background-color: #007acc;
    color: white;
    border-radius: 5px;
  }

  button:hover {
    background-color: #005fa3;
  }
</style>
