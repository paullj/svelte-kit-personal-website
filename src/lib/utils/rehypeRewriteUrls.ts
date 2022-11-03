import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';

interface PartialNode {
  type: string;
  tagName: string;
  value: string;
  properties: {
    href?: string;
    src?: string;
    [key: string]: unknown;
  };
  children: Node[];
}

type TransformFn = (
  uri: string,
  node: PartialNode,
  options: Omit<RewriteURLOptions, 'transformFn'>
) => Promise<string>;

interface RewriteURLOptions {
  directory: string;
  transformUrl: TransformFn;
}

const transform: Plugin<[RewriteURLOptions]> = (options) => {
  return async (tree) => {
    const matches: { node: PartialNode; property: 'href' | 'src' | 'srcset' }[] = [];
    visit(tree, 'element', (node: PartialNode) => {
      if (node.properties.src) {
        matches.push({ node, property: 'src' });
      }
      if (node.properties.href) {
        matches.push({ node, property: 'href' });
      }
    });
    const promises = matches.map(({ node, property }) => {
      const url = node.properties[property] as string;
      return url ? options.transformUrl(url, node, options) : '';
    });
    const urls = await Promise.all(promises);
    matches.forEach(({ node, property }, i) => {
      if (property === 'src') {
        property = 'srcset';
        node.properties['loading'] = 'lazy';
      }
      node.properties[property] = urls[i];
    });
  };
};

export default transform;
export type { TransformFn, PartialNode };
