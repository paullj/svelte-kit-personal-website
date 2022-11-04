import { postsPerPage } from './config';
import { sortMap } from './sorting';
import { sliceArray } from './utils/sliceArray';
import { base } from '$app/paths';

import type { Post } from './types/Post';
import type { SortBy } from './types/SortBy';

interface FetchPostOptions {
  sortBy?: SortBy;
  offset?: number;
  limit?: number;
}

const fetchPosts = (
  { sortBy = 'newest', offset = 0, limit = postsPerPage }: FetchPostOptions,
  fetcher = fetch
) => {
  return fetcher(`${base}/api/posts.json`)
    .then((response) => response.json())
    .then((fetchedPosts: Omit<Post, 'content' | 'related'>[]) => {
      fetchedPosts = fetchedPosts.map((post) => ({
        ...post,
        updatedAt: new Date(post.updatedAt),
        publishedAt: new Date(post.publishedAt),
        createdAt: new Date(post.createdAt)
      }));
      fetchedPosts = fetchedPosts.sort(sortMap[sortBy]);

      return sliceArray(fetchedPosts, offset, limit);
    });
};

export { fetchPosts };
