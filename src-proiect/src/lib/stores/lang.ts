import { writable } from 'svelte/store';

// Default language is Romanian ('ro')
export const lang = writable('ro');

// Update localStorage with the selected language
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('lang') || 'ro';
  lang.set(savedLang);

  lang.subscribe((value) => {
    localStorage.setItem('lang', value);
  });
}
