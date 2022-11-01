import { persistToFile } from '@lyrasearch/plugin-data-persistence';
import { buildIndex } from './buildIndex';
import { parsePosts } from '$lib/parsers/parsePosts';

const persistIndex = async () => {
  const posts = await parsePosts();
  const index = await buildIndex(posts);
  const path = persistToFile(index, 'binary', './index.msp');
  console.log(`Posts indexed and saved to ${path}`);
};

export { persistIndex };
