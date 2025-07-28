import { visit } from 'unist-util-visit';
import type { Root } from 'hast';

export default function rehypeAstroImage() {
  return (tree: Root) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.tagName = 'Image';

        node.properties = {
          src: node.properties?.src,
          alt: node.properties?.alt ?? '',
          loading: 'lazy',
          quality: 10,
          format: 'avif',
        };
      }
    });
  };
}