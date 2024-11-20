import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html',
    }),
    alias: {
      $: 'src',
    },
	paths: {base: '/svelte'},
  },
}

export default config
