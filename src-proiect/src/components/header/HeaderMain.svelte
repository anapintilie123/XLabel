<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { t, locale } from '$/lib/i18n'; 
  import { menuItems, updateMenuItems } from '$lib/stores/menu'; // Import menu logic
  import Menu from '$/components/header/Menu.svelte'; // Import Menu component

  
  // Reactive variables for language and theme
  $: currentLang = $locale;
  $: currentTheme = $theme;
  $: items = $menuItems; // Subscribe to menu items 

  // Function to toggle the language
  function toggleLanguage() {
    const newLang = currentLang === 'ro' ? 'en' : 'ro';
    console.log('HEADER.SVELTE : Toggling language to:', newLang);  
    locale.set(newLang);
  //    // Wait for the store to update
  // locale.subscribe((value) => {
  //   console.log('HEADER.SVELTE : Updated locale value (after subscription):', value);
  // });
  // console.log('HEADER.SVELTE : Reactive locale value:', $locale); 
  // // Log after updating
  //   updateMenuItems(); // Ensure menu items are updated
}


  // Function to toggle the theme
  function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('Toggling theme to:', newTheme);
    theme.set(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }
</script>

<header class="header">
  <h1 style="color: black;">{$t('common.greetings')}</h1>
  <div class="buttons">

    <!-- Language toggle button -->
    <button on:click={toggleLanguage}>
      {$t('common.button')} <!-- Use translation for button text -->
    </button>

    <button class="btn btn-primary cool-button">Click Me</button>


    <!-- Theme toggle button -->
    <button on:click={toggleTheme}>
      {currentTheme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
  </div>

  <Menu />

</header>


<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--header-bg, #f0f0f0);
  }

  .buttons button {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
  }

  .buttons button:hover {
    opacity: 0.8;
  }

  .cool-button {
    background: linear-gradient(45deg, #6a11cb, #2575fc);
    border: none;
    color: #fff;
    font-size: 1.2rem;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .cool-button:hover {
    background: linear-gradient(45deg, #2575fc, #6a11cb);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  .cool-button:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
</style>
