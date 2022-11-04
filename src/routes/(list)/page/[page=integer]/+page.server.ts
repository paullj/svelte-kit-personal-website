import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';

import type { PageServerLoad } from './$types';
import type { SortBy } from '$lib/types/SortBy';
import { fetchPosts } from '$lib/fetchPosts';
import { base } from '$app/paths';

export const load: PageServerLoad = async ({ params, url, fetch }) => {
  const sortBy: SortBy | undefined = undefined;
  // try {
  //   if (url.searchParams && url.searchParams.has('sort')) {
  //     sortBy = url.searchParams.get('sort') as SortBy;
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  const currentPage = parseInt(params.page) ?? 1;
  const totalPosts = await fetch(`${base}/api/posts/count.json`).then((res) => res.json());
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (!currentPage || currentPage <= 1) {
    throw redirect(301, `${base}/`);
  }

  if (currentPage > totalPages) {
    throw redirect(301, `${base}/posts/page/${totalPages}`);
  }
  try {
    const posts = await fetchPosts({ offset: (currentPage - 1) * postsPerPage, sortBy }, fetch);

    return {
      posts,
      currentPage,
      totalPosts,
      totalPages,
      sortBy
    };
  } catch (errorMessage: any) {
    throw error(404, errorMessage);
  }
};

export const prerender = true;
