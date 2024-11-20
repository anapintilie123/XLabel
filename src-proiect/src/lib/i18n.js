import i18n from 'sveltekit-i18n';

export const config = {
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => {
        const data = (await import('./locales/en/common.json')).default;
        console.log('Loaded EN translations:', data);
        return data;
      }
    },
    {
      locale: 'ro',
      key: 'common',
      loader: async () => {
        const data = (await import('./locales/ro/common.json')).default;
        console.log('Loaded RO translations:', data);
        return data;
      }
    },
    {
      locale: 'en',
      key: 'menu',
      loader: async () => {
        const data =(await import('./locales/en/menu.json')).default;
        console.log('Loaded EN MENU translations:', data);
        return data;
      }
    },
    {
      locale: 'ro',
      key: 'menu',
      loader: async () => {
        const data =(await import('./locales/ro/menu.json')).default;
        console.log('Loaded RO MENU translations:', data);
        return data;
      }
    },  
  ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
locale.set('ro');


console.log('Available locales:', locales); // ['en', 'ro']


(async () => {
    console.log(await import('./locales/en/common.json'));
  })();

  
  // locale.subscribe((value) => {
  //   if (!value) {
  //     console.log('Locale was undefined, setting default to "ro".');
  //     locale.set('ro'); // Fallback for undefined value
  //   }
  //   console.log('Locale store updated (from subscription):', value);
  // });
  
  
