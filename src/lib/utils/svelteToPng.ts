import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html } from 'satori-html';
import type { SvelteComponent } from 'svelte';

import robotoBold from '$lib/fonts/Roboto-Bold.ttf?base64';
import robotoRegular from '$lib/fonts/Roboto-Regular.ttf?base64';
import robotoLight from '$lib/fonts/Roboto-Light.ttf?base64';
import robotoBlack from '$lib/fonts/Roboto-Black.ttf?base64';

const svelteToPng = async (
  component: SvelteComponent,
  props: Record<string, unknown>,
  width: number,
  height: number
) => {
  const result = component.render(props);
  // Convert rendered component to VNode/ReactNode.
  const element = html(`${result.html}<style>${result.css.code}</style>`);

  // Convert ReactNode to SVG string.
  const svg = await satori(element, {
    fonts: [
      {
        name: 'Roboto',
        style: 'normal',
        weight: 300,
        data: Buffer.from(robotoLight, 'base64')
      },

      {
        name: 'Roboto',
        style: 'normal',
        weight: 500,
        data: Buffer.from(robotoRegular, 'base64')
      },
      {
        name: 'Roboto',
        style: 'normal',
        weight: 700,
        data: Buffer.from(robotoBold, 'base64')
      },
      {
        name: 'Roboto',
        style: 'normal',
        weight: 900,
        data: Buffer.from(robotoBlack, 'base64')
      }
    ],
    width,
    height
  });

  // Render SVG string.
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'original'
    }
  });

  return resvg.render();
};

export { svelteToPng };
