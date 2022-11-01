import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { parsePosts } from '$lib/parsers/parsePosts';

export const GET: RequestHandler = async () => {
  const posts = await parsePosts();
  return json(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    posts.map(({ content, related, ...post }) => ({
      ...post
    }))
  );
};

export const prerender = true;
