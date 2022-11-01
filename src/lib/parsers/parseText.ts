import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRetext from 'remark-retext';
import { Parser } from 'retext-english';
import retextPos from 'retext-pos';
import retextKeywords from 'retext-keywords';
import retextStringify from 'retext-stringify';
import { toString } from 'nlcst-to-string';

const textProcessor = unified()
  .use(remarkParse)
  .use(remarkRetext, Parser)
  .use(retextPos)
  .use(retextKeywords)
  .use(retextStringify);

const parseText = async (markdown: string) => {
  const vfile = await textProcessor.process(markdown);
  vfile.messages.forEach((message) => console.warn(String(message)));
  const keywords = vfile.data.keyphrases?.map((phrase) =>
    phrase.matches[0].nodes.map((d) => toString(d)).join('')
  );

  return { text: String(vfile), keywords };
};

export { parseText };
