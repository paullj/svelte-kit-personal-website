import RSS from 'rss';
import home from '$content/home.yaml';
import { parsePosts } from '$lib/parsers/parsePosts';

import type { RequestHandler } from '@sveltejs/kit';

const SITE_URL = 'https://test.com';

export const GET: RequestHandler = async () => {
  const feed = new RSS({
    title: home.title + ' RSS Feed',
    site_url: SITE_URL,
    feed_url: SITE_URL + '/rss.xml'
  });

  const posts = await parsePosts();

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      url: SITE_URL + `/posts/${post.slug}`,
      date: post.publishedAt,
      description: post.description ?? ''
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Cache-Control': `max-age=0, s-max-age=${600}`,
      'Content-Type': 'application/xml'
    }
  });
};

export const prerender = true;
