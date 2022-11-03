import { getFileName, slugToTitle, toSlug, trimExtension } from '../utils';
import fs from 'node:fs';
import path from 'node:path';

import type { Post } from '../types/Post';

import { parseFrontmatter } from './parseFrontmatter';
import { parseMarkdown } from './parseMarkdown';
import { parseText } from './parseText';
import getReadingTime from '$lib/utils/getReadingTime';

const workingDirectory = path.resolve(path.dirname(''));

const parsePost = async (relPath: string, fileContents: string, parseContent = false) => {
  const { metadata, markdown } = parseFrontmatter(fileContents);

  const initialSlug = trimExtension(getFileName(relPath));
  const filePath = path.join(workingDirectory, relPath);
  const directory = path.dirname(filePath);
  const parentFolder = getFileName(directory);
  const { mtime: updatedAt, ctime: createdAt } = fs.statSync(filePath);

  const { text, keywords } = await parseText(markdown);
  const post: Post = {
    title: parentFolder !== 'posts' ? parentFolder : slugToTitle(initialSlug),
    slug: initialSlug,
    updatedAt,
    createdAt,
    publishedAt: createdAt,
    keywords,
    readingTime: getReadingTime(text),
    ...metadata
  };

  post.slug = toSlug(post.slug);
  post.publishedAt = new Date(post.publishedAt);
  post.updatedAt = new Date(post.updatedAt);
  post.createdAt = new Date(post.createdAt);

  if (parseContent) {
    post.content = await parseMarkdown(markdown, directory);
  }

  return post;
};

export { parsePost };
