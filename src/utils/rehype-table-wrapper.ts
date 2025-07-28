import { visit } from 'unist-util-visit';
import type { Root } from 'hast';

export default function rehypeTableWrapper() {
  return (tree: Root) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'table' && parent && typeof index === 'number') {
        // Crear el wrapper div
        const wrapper = {
          type: 'element' as const,
          tagName: 'div',
          properties: {
            className: ['table-wrapper'],
          },
          children: [node],
        };

        // Reemplazar la tabla con el wrapper
        parent.children[index] = wrapper;
      }
    });
  };
}