import OGImageSvelte from '$lib/components/OGImage.svelte';
import { ogImageDimmensions } from '$lib/config';
import { parsePosts } from '$lib/parsers/parsePosts';
import { svelteToPng } from '$lib/utils/svelteToPng';
import { error, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
  try {
    const posts = await parsePosts();
    const post = posts.filter(({ slug }) => slug === params.slug)[0];

    if (!post) {
      throw error(404, 'Not Found!');
    }

    const image = await svelteToPng(
      OGImageSvelte,
      {
        title: post.title,
        subtitle: post.description
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
