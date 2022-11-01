import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets';

const dev = process.env.NODE_ENV === 'development' || process.env.DEPLOY !== 'true';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte'],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    importAssets(),
    preprocess({
      typescript: true,
      postcss: true
    })
  ],
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/svelte-kit-personal-website'
    },
    alias: {
      $content: 'content'
    }
  }
};

export default config;
