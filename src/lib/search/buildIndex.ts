import { create, insertBatch } from '@lyrasearch/lyra';

import type { Lyra, PropertiesSchema } from '@lyrasearch/lyra';
import type { Post } from '$lib/types/Post';

const schema: PropertiesSchema = {
  slug: 'string',
  title: 'string',
  description: 'string',
  keywords: 'string',
  categories: 'string'
};

type LyraIndex = Lyra<typeof schema>;

const buildIndex = async (posts: Post[]) => {
  const index = create({ schema });
  if (posts && posts.length > 0) {
    insertBatch(
      index,
      posts.map(
        (post) =>
          ({
            slug: post.slug,
            title: post.title,
            description: post.description ?? '',
            keywords: post?.keywords?.join(' ') ?? '',
            categories: post?.categories?.join(' ') ?? ''
          } as typeof schema)
      )
    );
  }

  return index;
};

export { buildIndex };
export type { LyraIndex };
