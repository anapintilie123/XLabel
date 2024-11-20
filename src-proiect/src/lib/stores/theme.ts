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
    localStorage.setItem('theme', value);
    document.documentElement.setAttribute('data-theme', value);
    updateMenuItems(value);
  });
}

// Function to update menu items based on the current theme
export function updateMenuItems(currentTheme: string) {
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
