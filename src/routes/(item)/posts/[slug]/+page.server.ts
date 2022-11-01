import { parsePosts } from '$lib/parsers/parsePosts';
import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const posts = await parsePosts();
    const post = posts.filter(({ slug }) => slug === params.slug)[0];

    if (!post) {
      throw error(404, 'Not Found!');
    }

    return {
      ...post
    };
  } catch (err) {
    console.log(err);
    throw error(500, 'Internal error!');
  }
};

export const prerender = true;
