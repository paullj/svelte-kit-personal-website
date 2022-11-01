import type { SortBy } from './SortBy';

interface PostsEndpointOptions {
  offset?: number;
  limit?: number;
  category?: string;
  sortBy?: SortBy;
}

export type { PostsEndpointOptions };
