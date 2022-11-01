import { load } from 'js-yaml';

type Metadata = {
  [key: string]: string | string[];
};

const pattern = /^---[\s]+([\s\S]*?)---([\s\S]*?)$/;

const parseFrontmatter = (content: string) => {
  let markdown = content;
  const match = content.match(pattern);
  let metadata: Metadata = {};

  if (match) {
    metadata = load(match[1], { json: true }) as Metadata;
    markdown = match[2];
  }
  return { metadata, markdown };
};

export { parseFrontmatter };
