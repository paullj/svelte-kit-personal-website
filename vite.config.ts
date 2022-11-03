import { sveltekit } from '@sveltejs/kit/vite';
import yaml from '@rollup/plugin-yaml';
import { imagetools } from 'vite-imagetools';
import fs from 'fs';

import type { UserConfig } from 'vite';

const supportedExtensions = ['png', 'jpg', 'jpeg', 'avif'];

const base64 = () => {
  return {
    name: 'vite-plugin-base64-loader',
    transform(code: string, id: string) {
      const [path, query] = id.split('?');

      if (query !== 'base64') {
        return null;
      }

      const base64 = fs.readFileSync(path, { encoding: 'base64' });
      return { code: `export default ${JSON.stringify(base64)}`, map: null };
    }
  };
};

const config: UserConfig = {
  server: {
    fs: {
      allow: ['./content']
    }
  },
  plugins: [
    base64(),
    yaml(),
    imagetools({
      defaultDirectives: (url) => {
        const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1);
        if (supportedExtensions.includes(extension)) {
          return new URLSearchParams({
            format: 'webp',
            w: '500;900;1200',
            srcset: 'true'
          });
        }
        return new URLSearchParams();
      }
    }),
    sveltekit()
  ]
};

export default config;
