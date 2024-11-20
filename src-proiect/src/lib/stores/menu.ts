import { get, writable } from 'svelte/store';
import { t, locale } from '$lib/i18n.js'; // Import translation function and locale store
import { theme } from '$lib/stores/theme'; // Import theme store

// Define a type for menu items
export type MenuItem = {
  title: string;
  link: string;
};

// Initialize the menuItems store
export const menuItems = writable<MenuItem[]>([]);

// Function to update menu items based on the current theme and language
export function updateMenuItems() {
  const translate = get(t); // Get the current translation function
  const currentTheme = get(theme); // Get the current theme

//   console.log('MENU.TS Updating menu items...');
//   console.log('Current theme:', currentTheme);

//   console.log('menu.home:', translate('menu.home'));
// console.log('menu.about:', translate('menu.about'));
// console.log('menu.contact:', translate('menu.contact'));


  if (currentTheme === 'light') {
    menuItems.set([
      { title: translate('menu.home'), link: '/' },
      { title: translate('menu.about'), link: '/about' },
      { title: translate('menu.contact'), link: '/contact' },
    ]);
  } else if (currentTheme === 'dark') {
    menuItems.set([
      { title: translate('menu.dashboard'), link: '/dashboard' },
      { title: translate('menu.settings'), link: '/settings' },
      { title: translate('menu.profile'), link: '/profile' },
    ]);
  }

  console.log('Updated menuItems in MENU.TS:', get(menuItems));

}

// Automatically update menu items when either the language or theme changes
locale.subscribe(() => {
  updateMenuItems(); // Call updateMenuItems when the locale changes
  console.log('MENU.ts Locale updated to:', get(locale));
});

// theme.subscribe(() => {
//   updateMenuItems(); // Call updateMenuItems when the theme changes
//   console.log(' MENU.TS Theme updates to:', theme);
// });
