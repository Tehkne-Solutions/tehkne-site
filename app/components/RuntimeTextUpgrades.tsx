'use client';

import { useEffect } from 'react';

const replacements: Array<[RegExp, string]> = [
  [/\b70\+\b/g, '300+'],
  [/mais de 70/gi, 'mais de 300'],
  [/70 sites WordPress/gi, '300 sites, páginas e experiências digitais'],
  [/70\+ sites WordPress/gi, '300+ sites, páginas e experiências digitais'],
  [/a partir de R\$\s*1\.600/gi, 'sob diagnóstico'],
  [/a partir de R\$\s*3\.000/gi, 'sob escopo'],
  [/R\$\s*1\.600\s*a\s*R\$\s*3\.000/gi, 'projeto enxuto com escopo fechado'],
  [/R\$\s*3\.000\s*a\s*R\$\s*6\.000/gi, 'projeto premium com maior profundidade'],
  [/R\$\s*6\.000\s*a\s*R\$\s*12\.000/gi, 'sprint técnica sob diagnóstico'],
  [/R\$\s*12\.000\+/gi, 'sustentação ou projeto avançado sob proposta'],
  [/Orçamento estimado/gi, 'Perfil de investimento'],
  [/Selecione uma faixa/gi, 'Selecione o perfil'],
  [/Faixa mínima de projeto/gi, 'Modelo comercial'],
  [/Do investimento ao sistema/gi, 'Modelo comercial'],
  [/Cada entrada vira um caminho de entrega, não um pacote genérico\./gi, 'Sem tabela pública: cada proposta nasce do diagnóstico.'],
  [/As faixas ajudam o cliente a entender ponto de partida\. A entrega real nasce do diagnóstico, escopo, urgência, integrações, conteúdo e sustentação necessária\./gi, 'A Tehkné não expõe valores fechados no site porque escopo, urgência, stack, conteúdo, integrações, animações e sustentação mudam completamente a entrega.'],
  [/LP estratégica/gi, 'Projeto enxuto'],
  [/Site institucional(?=\s*sob escopo|\s*a partir|\s*$)/gi, 'Projeto premium'],
  [/Sprint técnica(?=\s*sob)/gi, 'Sprint técnica']
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

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          replaceTextNodes(node);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
