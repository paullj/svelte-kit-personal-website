import { dev } from '$app/environment';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const posts = Object.keys(import.meta.glob('/content/posts/**/*.md', { as: 'raw' }));

  if (!dev) {
    posts.filter((post) => post.startsWith('_'));
  }

  return json(Object.keys(posts).length);
};

export const prerender = true;
