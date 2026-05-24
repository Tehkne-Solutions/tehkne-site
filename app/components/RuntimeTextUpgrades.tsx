'use client';

import { useEffect } from 'react';

const replacements: Array<[RegExp, string]> = [
  [/\b70\+\b/g, '300+'],
  [/mais de 70/gi, 'mais de 300'],
  [/70 sites WordPress/gi, '300 sites, páginas e experiências digitais'],
  [/70\+ sites WordPress/gi, '300+ sites, páginas e experiências digitais']
];

function replaceTextNodes(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode as Text);
  }

  nodes.forEach((node) => {
    let value = node.nodeValue ?? '';
    replacements.forEach(([pattern, replacement]) => {
      value = value.replace(pattern, replacement);
    });
    node.nodeValue = value;
  });
}

export default function RuntimeTextUpgrades() {
  useEffect(() => {
    replaceTextNodes(document.body);
  }, []);

  return null;
}
