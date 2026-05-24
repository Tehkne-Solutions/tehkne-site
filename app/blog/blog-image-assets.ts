export type BlogImageAsset = {
  src: string;
  alt: string;
  credit: string;
};

const unsplashParams = 'auto=format&fit=crop&w=1400&q=82';

function unsplash(photoId: string, alt: string): BlogImageAsset {
  return {
    src: `https://images.unsplash.com/${photoId}?${unsplashParams}`,
    alt,
    credit: 'Imagem editorial via Unsplash'
  };
}

export const blogImageAssets: Record<string, BlogImageAsset> = {
  'o-que-e-arquitetura-de-solucoes': unsplash(
    'photo-1516321318423-f06f85e504b3',
    'Notebook com interface técnica representando arquitetura de soluções, sistemas e planejamento digital.'
  ),
  'site-institucional-como-operacao-digital': unsplash(
    'photo-1460925895917-afdab827c52f',
    'Dashboard em notebook representando site institucional conectado a dados, métricas e operação digital.'
  ),
  'wordpress-avancado-quando-vira-sistema': unsplash(
    'photo-1498050108023-c5249f4df085',
    'Código em tela representando WordPress avançado, plugins próprios e sistemas digitais sob medida.'
  ),
  'nextjs-para-empresas-sites-portais-produtos': unsplash(
    'photo-1555066931-4365d14bab8c',
    'Editor de código em tela representando Next.js, React, performance e produtos digitais modernos.'
  ),
  'ux-ui-na-pratica-design-produto-conversao': unsplash(
    'photo-1581291518857-4e27b48ff24e',
    'Mesa de design e interface representando UX, UI, produto digital, jornada e conversão.'
  ),
  'ia-e-automacoes-na-operacao-real': unsplash(
    'photo-1677442136019-21780ecad995',
    'Imagem abstrata de inteligência artificial representando agentes, automações e fluxos operacionais.'
  ),
  'integracoes-crm-erp-apis-conectam-empresa': unsplash(
    'photo-1558494949-ef010cbdcc31',
    'Infraestrutura de servidores representando integrações entre CRM, ERP, APIs e sistemas corporativos.'
  ),
  'sustentacao-tecnica-publicar-site-e-so-comeco': unsplash(
    'photo-1504384308090-c894fdcc538d',
    'Equipe em ambiente técnico representando sustentação, manutenção, evolução e suporte contínuo.'
  ),
  'metodo-gip-ideia-solta-produto-validado': unsplash(
    'photo-1517245386807-bb43f82c33c4',
    'Planejamento colaborativo em quadro representando método GIP, descoberta, arquitetura e validação.'
  ),
  'gip-tehkne-os-produto-design-codigo-automacao-operacao': unsplash(
    'photo-1518770660439-4636190af475',
    'Circuito eletrônico representando Tehkné OS, produto, código, automação e operação conectada.'
  ),
  'white-label-tecnico-para-agencias': unsplash(
    'photo-1552664730-d307ca884978',
    'Equipe em reunião representando parceria técnica white label para agências e operações digitais.'
  ),
  'portfolio-nao-e-galeria-e-prova-de-produto': unsplash(
    'photo-1551288049-bebda4e38f71',
    'Painel analítico representando portfólio como prova de produto, resultado, método e evolução técnica.'
  )
};

export function getBlogImageAsset(slug: string) {
  return blogImageAssets[slug];
}
