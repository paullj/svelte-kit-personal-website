import { sveltekit } from '@sveltejs/kit/vite';
import yaml from '@rollup/plugin-yaml';
import { imagetools } from 'vite-imagetools';

import type { UserConfig } from 'vite';

const supportedExtensions = ['png', 'jpg', 'jpeg'];

const config: UserConfig = {
  server: {
    fs: {
      allow: ['./content']
    }
  },
  plugins: [
    sveltekit(),
    imagetools({
      defaultDirectives: (url) => {
        const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1);
        if (supportedExtensions.includes(extension)) {
          return new URLSearchParams({
            // format: 'avif;webp;' + extension,
            invert: 'true',
            w: '100'
          });
        }
        return new URLSearchParams();
      }
    }),
    yaml()
  ]
};

export default config;
