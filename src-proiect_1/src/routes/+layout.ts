// src/routes/+layout.ts
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { lang } from '$lib/stores/lang';
import { theme, updateMenuItems } from '$lib/stores/theme';
import { browser } from '$app/environment';

export const prerender = true;

export const load: LayoutLoad = async ({ url }) => {
  const pathname = url.pathname;

  // Detect language based on the URL (default to 'ro')
  const isRomanian = pathname.startsWith('/ro');
  const isEnglish = pathname.startsWith('/en');

  if (!isRomanian && !isEnglish) {
    throw error(404, {
      message: `Could not find ${pathname}.`,
    });
  }

  // Set the initial language store value based on the URL
  const currentLang = isRomanian ? 'ro' : 'en';
  lang.set(currentLang);

  // Check the theme from localStorage (if running in the browser)
  let currentTheme = 'light';
  if (browser) {
    currentTheme = localStorage.getItem('theme') || 'light';
    theme.set(currentTheme);
  }

  // Update menu items based on the current language and theme
  updateMenuItems(currentLang, currentTheme);

  return {};
};
