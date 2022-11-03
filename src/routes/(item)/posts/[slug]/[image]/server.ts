import type { RequestHandler } from '@sveltejs/kit';
import test from '$content/posts/Images/image-1.avif';

export const GET: RequestHandler = async ({ params }) => {
  console.log(test);
  const image = await import(`$content/posts/Images/${params.image?.slice(0, -5)}.avif`);
  return new Response();
};
