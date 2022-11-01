import { dev } from '$app/environment';
import { maxRelatedPosts, relatedPostThreshold } from '$lib/config';
import { parsePost } from './parsePost';
import type { Post } from '$lib/types/Post';

const parsePosts = async () => {
  const postFiles = Object.entries(import.meta.glob('/content/posts/**/*.md', { as: 'raw' }));
  const posts: Post[] = await Promise.all(
    postFiles
      .filter(([path]) => dev || !path.startsWith('_'))
      .map(async ([path, resolver]) => parsePost(path, await resolver(), true))
  );
  posts.forEach((post) => {
    const maybeRelated = posts
      .filter(({ slug }) => post.slug !== slug)
      .map((other) => ({
        post: other,
        score:
          (post.keywords?.filter((k) => other.keywords?.includes(k)).length ?? 0) /
          (post.keywords?.length ?? 1)
      }))
      .sort((a, b) => b.score - a.score)
      .filter(({ score }) => score >= relatedPostThreshold);

    post.related = maybeRelated.slice(0, maxRelatedPosts).map(({ post }) => post);
  });
  return posts;
};

export { parsePosts };
