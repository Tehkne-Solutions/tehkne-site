'use client';

import { useEffect } from 'react';

const replacements: Array<[RegExp, string]> = [
  [/\b7\+ anos\b/gi, '9+ anos'],
  [/\b120\+\b/g, '180+'],
  [/120\+ entregas, melhorias, páginas, automações e experiências digitais acumuladas/gi, '180+ entregas, ajustes, melhorias e experiências digitais acumuladas'],
  [/120\+ entregas e melhorias/gi, '180+ entregas e melhorias'],
  [/\b70\+\b/g, '300+'],
  [/mais de 70/gi, 'mais de 300'],
  [/70 sites WordPress/gi, '300 sites, páginas e experiências digitais'],
  [/70\+ sites WordPress/gi, '300+ sites, páginas e experiências digitais'],
  [/70\+ operações WordPress/gi, '300+ operações digitais'],
  [/70\+ sites, páginas e operações web criadas, ajustadas ou sustentadas/gi, '300+ sites, páginas e experiências digitais criadas, ajustadas ou sustentadas'],
  [/Criação, manutenção, performance, Elementor, JetEngine, temas, plugins e catálogos\./gi, 'Sites, landing pages, WordPress, catálogos, interfaces e experiências digitais publicadas ou evoluídas.'],
  [/\b67\+\b/g, '96+'],
  [/67\+ repositórios mapeados/gi, '96+ repositórios mapeados'],
  [/repositórios mapeados entre produtos, estudos, automações, sites e laboratórios/gi, 'repositórios, estudos, automações, produtos e laboratórios técnicos mapeados'],
  [/Produtos, estudos, automações, sites, apps, laboratórios e bases técnicas próprias\./gi, 'Produtos, estudos, automações, sites, apps, laboratórios e bases técnicas próprias mapeadas.'],
  [/\b30\+\b/g, '42+'],
  [/30\+ cases e experiências catalogadas/gi, '42+ cases e experiências catalogadas'],
  [/30\+ cases catalogados/gi, '42+ cases catalogados'],
  [/Tehkné, UNTI, Savana, Meme Digital, projetos próprios e participação técnica segura\./gi, 'Tehkné, UNTI, Savana, Meme Digital, produtos próprios, sites, sistemas e participação técnica segura.'],
  [/\b15\+\b/g, '24+'],
  [/15\+ stacks e ferramentas/gi, '24+ stacks e ferramentas'],
  [/15\+ stacks e ferramentas usadas em projetos reais/gi, '24+ stacks e ferramentas usadas em projetos reais'],
  [/Next\.js, React, WordPress, PHP, Python, APIs, Vercel, IA, automações e design systems\./gi, 'Next.js, React, WordPress, PHP, Python, APIs, Vercel, IA, automações, analytics, design systems e integrações.'],
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
