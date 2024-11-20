// src/lib/stores/theme.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Define a type for menu items
type MenuItem = {
  title: string;
  link: string;
};

// Initialize the theme store with 'light' as the default value
export const theme = writable('light');

// Initialize the menuItems store with a type of MenuItem[]
export const menuItems = writable<MenuItem[]>([]);

// If we're in the browser, sync the theme with localStorage
if (browser) {
  const savedTheme = localStorage.getItem('theme') || 'light';
  theme.set(savedTheme);

  // Subscribe to theme changes and update localStorage
  theme.subscribe((value) => {
    if (browser) {
      localStorage.setItem('theme', value);
      document.documentElement.setAttribute('data-theme', value);
    }
  });
}

// Function to update menu items based on the current theme and language
export function updateMenuItems(currentLang: string, currentTheme: string) {
  if (currentLang === 'ro') {
    if (currentTheme === 'light') {
      menuItems.set([
        { title: 'Acasă', link: '/ro' },
        { title: 'Despre', link: '/ro/about' },
        { title: 'Contact', link: '/ro/contact' },
      ]);
    } else {
      menuItems.set([
        { title: 'Dashboard', link: '/ro/dashboard' },
        { title: 'Setări', link: '/ro/settings' },
        { title: 'Profil', link: '/ro/profile' },
      ]);
    }
  } else {
    if (currentTheme === 'light') {
      menuItems.set([
        { title: 'Home', link: '/' },
        { title: 'About', link: '/about' },
        { title: 'Contact', link: '/contact' },
      ]);
    } else {
      menuItems.set([
        { title: 'Dashboard', link: '/dashboard' },
        { title: 'Settings', link: '/settings' },
        { title: 'Profile', link: '/profile' },
      ]);
    }
  }
}
