// src/routes/+layout.ts
import { loadTranslations } from '$lib/i18n.js';
import { theme } from '$lib/stores/theme';
import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';

export const prerender = true;

export const load: LayoutLoad = async ({url}) => {
  // Set the default locale to 'ro' (Romanian)
  //locale.set('ro');
  const { pathname } = url;
  const initLocale = 'ro'; // Set your default locale here
  await loadTranslations(initLocale, pathname);

  // If running in the browser, sync the theme with localStorage
  if (browser) {
    const savedTheme = localStorage.getItem('theme') || 'light';
    theme.set(savedTheme);
  }
  
  return {};

  // If running in the browser, sync the theme with localStorage
  if (browser) {
    const savedTheme = localStorage.getItem('theme') || 'light';
    theme.set(savedTheme);
  }

  // Return the locale and theme for use in +layout.svelte
  return {
    locale: 'ro',
    theme: browser ? localStorage.getItem('theme') || 'light' : 'light',
  };
};
