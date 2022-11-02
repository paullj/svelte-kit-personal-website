import OGImageSvelte from '$lib/components/OGImage.svelte';
import { ogImageDimmensions } from '$lib/config';
import { svelteToPng } from '$lib/utils/svelteToPng';
import { error, type RequestHandler } from '@sveltejs/kit';
import seo from '$content/seo.yaml';
import home from '$content/home.yaml';

export const GET: RequestHandler = async () => {
  try {
    const image = await svelteToPng(
      OGImageSvelte,
      {
        title: seo.title ?? home.title,
        subtitle: seo.description ?? home.subtitle
      },
      ogImageDimmensions.width,
      ogImageDimmensions.height
    );

    return new Response(image.asPng(), {
      headers: {
        'content-type': 'image/png'
      }
    });
  } catch (err) {
    console.log(err);
    throw error(500, 'Internal error!');
  }
};

export const prerender = true;
