import RSS from 'rss';
import seo from '$content/seo.yaml';
import { parsePosts } from '$lib/parsers/parsePosts';

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const feed = new RSS({
    title: seo.title + ' RSS Feed',
    site_url: seo.url ?? '',
    feed_url: seo.url + '/rss.xml'
  });

  const posts = await parsePosts();

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      url: seo.url + `/posts/${post.slug}`,
      date: post.publishedAt,
      description: post.description ?? '',
      categories: post.categories
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
