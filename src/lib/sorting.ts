import type { Post } from './types/Post';
import type { SortBy } from './types/SortBy';

type SortFn = (a: Post, b: Post) => number;

type SortFnMap = {
  [key in SortBy]: SortFn;
};

const byAtoZ: SortFn = (a, b) => a.title.localeCompare(b.title);

const byZtoA: SortFn = (a, b) => b.title.localeCompare(a.title);

const byNewest: SortFn = (a, b) =>
  (b.publishedAt ?? b.createdAt).valueOf() - (a.publishedAt ?? a.createdAt).valueOf();

const byOldest: SortFn = (a, b) =>
  (a.publishedAt ?? a.createdAt).valueOf() - (b.publishedAt ?? b.createdAt).valueOf();

const sortMap: SortFnMap = {
  newest: byNewest,
  oldest: byOldest
};

export { byAtoZ, byZtoA, byNewest, byOldest, sortMap };
