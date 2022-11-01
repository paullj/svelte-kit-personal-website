import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const [_path, indexFile] = Object.entries(import.meta.glob('/index.msp', { as: 'raw' }))[0];
  const data = (await indexFile()) as string;
  // const buffer = Buffer.from(data, 'hex');
  return new Response(data);
};

export const prerender = true;
