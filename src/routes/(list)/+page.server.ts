import { error } from '@sveltejs/kit';
import { fetchPosts } from '$lib/fetchPosts';
import { postsPerPage } from '$lib/config';

import type { PageServerLoad } from './$types';
import type { SortBy } from '$lib/types/SortBy';
import { base } from '$app/paths';

const load: PageServerLoad = async ({ url, fetch }) => {
  const sortBy: SortBy | undefined = undefined;
  // try {
  //   if (url.searchParams && url.searchParams.has('sort')) {
  //     sortBy = url.searchParams.get('sort') as SortBy;
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const posts = await fetchPosts({ sortBy }, fetch);
    const totalPosts = await fetch(`${base}/api/posts/count.json`).then((res) => res.json());
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    return {
      posts,
      totalPosts,
      totalPages,
      sortBy
    };
  } catch (err) {
    console.log(err);
    throw error(404, 'Not Found!');
  }
};

export const prerender = true;

export { load };
