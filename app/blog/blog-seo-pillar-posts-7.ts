import type { BlogBlock, BlogPost } from './blog-data';

const contactHref = '/contato#contato-form';
const p = (text: string): BlogBlock => ({ type: 'paragraph', text });
const h = (text: string): BlogBlock => ({ type: 'heading', text });
const sh = (text: string): BlogBlock => ({ type: 'subheading', text });
const ul = (items: string[]): BlogBlock => ({ type: 'list', items });
const cta = (text: string, label = 'Solicitar diagnóstico'): BlogBlock => ({ type: 'quote', text, cta: label, href: contactHref });
const code = (text: string): BlogBlock => ({ type: 'code', text });
const cmp = (leftTitle: string, left: string[], rightTitle: string, right: string[]): BlogBlock => ({ type: 'compare', leftTitle, left, rightTitle, right });

export const seoPillarBlogPosts7: BlogPost[] = [
  {
    title: 'SEO técnico para sites empresariais: checklist completo para auditorias, indexação e performance',
    slug: 'seo-tecnico-para-sites-empresariais-checklist',
    description: 'Checklist completo de SEO técnico para sites empresariais: sitemap, robots, canonical, redirects, dados estruturados, títulos, links internos, performance e auditorias Semrush/Search Console.',
    category: 'SEO Técnico',
    tags: ['SEO técnico', 'Auditoria SEO', 'Sitemap', 'Canonical', 'Dados estruturados'],
    cover: '/blog/cover/seo-tecnico-para-sites-empresariais-checklist',
    author: 'Tehkné Solutions',
    date: '2026-06-16',
    readingTime: '26 min de leitura',
    intro: 'SEO técnico é a base que ajuda buscadores a rastrear, entender e indexar um site corretamente. Para empresas, isso significa menos páginas desperdiçadas, mais clareza para o Google e melhor aproveitamento de conteúdo, performance e autoridade.',
    imageSuggestions: [
      { label: 'Capa editorial', source: 'Capa dinâmica Tehkné', query: 'technical SEO audit sitemap canonical structured data', path: '/blog/cover/seo-tecnico-para-sites-empresariais-checklist', alt: 'Capa editorial sobre SEO técnico para sites empresariais.' },
      { label: 'Imagem de apoio', source: 'Imagem editorial interna', query: 'SEO audit search console semrush performance dashboard', path: '/images/blog/seo-tecnico-para-sites-empresariais-checklist-apoio.jpg', alt: 'Auditoria de SEO técnico em site empresarial.' },
      { label: 'Open Graph', source: 'Capa dinâmica Tehkné', query: 'technical SEO checklist website audit', path: '/blog/cover/seo-tecnico-para-sites-empresariais-checklist', alt: 'Imagem social sobre checklist de SEO técnico.' }
    ],
    blocks: [
      p('SEO técnico é a parte do SEO que garante que o site possa ser rastreado, interpretado, indexado e avaliado com menos ruído pelos buscadores. Em um site empresarial, essa camada é fundamental porque o conteúdo sozinho não resolve tudo. Uma empresa pode ter bons textos, bons serviços e bom design, mas ainda perder oportunidades se o sitemap estiver errado, se houver páginas duplicadas, se os títulos forem ruins, se os dados estruturados estiverem inválidos ou se o site for lento no mobile.'),
      p('Quando uma auditoria de ferramentas como Semrush, Ahrefs, Screaming Frog ou Google Search Console aponta problemas, é comum o time olhar a lista e não saber o que priorizar. Alguns avisos são críticos. Outros são melhorias. Outros dependem do contexto. O objetivo deste artigo é organizar um checklist prático para empresas entenderem quais correções de SEO técnico realmente importam e como aplicá-las com método.'),
      p('Este conteúdo não substitui uma auditoria específica do seu site, mas ajuda a entender os pontos que normalmente aparecem em projetos empresariais: canonical, sitemap, robots, redirects, dados estruturados, títulos, descriptions, links internos, performance, conteúdo, imagens, HTTPS e governança de manutenção.'),

      h('O que é SEO técnico?'),
      p('SEO técnico é o conjunto de práticas que tornam o site mais compreensível, acessível e eficiente para buscadores e usuários. Ele não se limita a instalar um plugin ou preencher meta description. SEO técnico envolve arquitetura de URLs, marcação semântica, indexação, rastreamento, performance, estrutura de links, dados estruturados, segurança e qualidade do HTML entregue.'),
      p('Em termos simples: o conteúdo diz o que a empresa sabe. O SEO técnico ajuda o buscador a encontrar, entender e confiar na estrutura onde esse conteúdo está publicado.'),
      ul(['Sitemap limpo e atualizado.', 'Robots.txt correto.', 'URLs canônicas bem definidas.', 'Redirects permanentes quando necessário.', 'Titles e descriptions únicos.', 'Dados estruturados válidos.', 'Performance e mobile bem cuidados.', 'Links internos claros.', 'Páginas sem erro 404/500.', 'Conteúdo suficiente para intenção de busca.']),

      h('Por que SEO técnico importa para empresas?'),
      p('Empresas precisam que páginas importantes sejam encontradas. Isso inclui home, serviços, produtos, portfólio, blog, contato, cases e páginas institucionais. Se a estrutura técnica confunde o buscador, páginas boas podem demorar mais para indexar, competir entre si ou perder força.'),
      p('SEO técnico também protege investimento em conteúdo. Não adianta criar artigos longos, páginas de serviço bem escritas e cases completos se o sitemap aponta para URLs erradas, se o canonical está inconsistente ou se os links internos não distribuem autoridade.'),
      cmp('Site com SEO técnico fraco', ['Sitemap com URLs redirecionadas', 'Páginas duplicadas', 'Títulos longos ou repetidos', 'Dados estruturados inválidos', 'Poucos links internos', 'Performance irregular'], 'Site com SEO técnico forte', ['URLs canônicas claras', 'Sitemap apenas com páginas finais', 'Titles descritivos e enxutos', 'Schema válido', 'Arquitetura interna conectada', 'Mobile rápido e legível']),

      h('Checklist 1: sitemap.xml limpo e canônico'),
      p('O sitemap é um mapa que informa aos buscadores quais URLs do site devem ser consideradas para rastreamento. Ele não garante indexação, mas ajuda a orientar. Um erro comum é colocar no sitemap URLs que redirecionam, páginas duplicadas, rotas antigas, arquivos técnicos ou versões sem www e com www misturadas.'),
      ul(['O sitemap deve conter apenas URLs finais com status 200.', 'Evite URLs que redirecionam.', 'Não misture domínio com www e sem www.', 'Não inclua páginas bloqueadas por robots.', 'Não inclua rotas técnicas sem valor para busca.', 'Atualize o sitemap quando novos posts, serviços e produtos forem publicados.']),
      code('Sitemap ideal\n├── Home\n├── Serviços canônicos\n├── Produtos canônicos\n├── Blog posts publicados\n├── Cases de portfólio\n├── Páginas institucionais\n└── Sem URLs redirecionadas ou duplicadas'),

      h('Checklist 2: robots.txt sem bloquear o que importa'),
      p('O arquivo robots.txt orienta robôs de busca sobre o que pode ou não ser rastreado. Em sites empresariais, o básico é permitir páginas públicas importantes e indicar o sitemap correto. Bloqueios mal configurados podem impedir rastreamento de páginas essenciais.'),
      ul(['Permitir rastreamento das páginas públicas.', 'Bloquear apenas rotas que realmente não devem ser rastreadas, quando necessário.', 'Apontar para o sitemap oficial.', 'Evitar bloquear arquivos necessários para renderização.', 'Revisar robots depois de migrações ou mudanças de domínio.']),

      h('Checklist 3: canonical e versão oficial do domínio'),
      p('Canonical indica qual é a versão principal de uma página. Ele é importante quando há URLs parecidas, parâmetros, variações de rota ou domínios com e sem www. Para empresas, a regra é escolher uma versão oficial e manter consistência em todo o site.'),
      p('Se o site usa https://www.exemplo.com.br, o sitemap, canonical, Open Graph, robots e links internos devem seguir essa versão. Misturar versões pode gerar auditorias negativas e confundir sinais de indexação.'),
      ul(['Defina domínio oficial com ou sem www.', 'Use canonical absoluto nas páginas principais.', 'Atualize sitemap com o domínio oficial.', 'Redirecione versões alternativas para a canônica.', 'Evite canonical apontando para URL que redireciona.']),

      h('Checklist 4: redirects permanentes e temporários'),
      p('Redirects são necessários em migrações, mudanças de slug e correções de rota. Mas precisam ser usados com cuidado. Redirecionamento permanente indica que uma página mudou definitivamente. Redirecionamento temporário indica mudança provisória. Quando a mudança é definitiva, usar redirect temporário pode manter sinais divididos por mais tempo.'),
      ul(['Use 301/308 para mudanças permanentes.', 'Evite cadeias de redirect.', 'Atualize links internos para apontarem direto à URL final.', 'Remova URLs redirecionadas do sitemap.', 'Documente redirects importantes.']),

      h('Checklist 5: títulos e descriptions'),
      p('O title é um dos elementos mais importantes para SEO e clique. Ele precisa ser descritivo, único e não longo demais. A meta description não é fator direto de ranking como muitos imaginam, mas influencia entendimento e taxa de clique quando exibida.'),
      ul(['Cada página deve ter title único.', 'Evite títulos genéricos como Home ou Serviços.', 'Inclua termo principal quando fizer sentido.', 'Mantenha title enxuto, geralmente até 60 ou 70 caracteres.', 'Meta description deve resumir valor da página.', 'Evite descriptions duplicadas em várias páginas.']),
      sh('Exemplo fraco'),
      p('Serviços | Empresa'),
      sh('Exemplo melhor'),
      p('Sites, Sistemas e Automações | Tehkné Solutions'),

      h('Checklist 6: dados estruturados válidos'),
      p('Dados estruturados ajudam buscadores a entenderem o tipo de página e suas entidades. Um site empresarial pode usar Organization, WebSite, Service, BreadcrumbList, Article, BlogPosting, FAQPage, Product ou SoftwareApplication conforme o caso. O erro é usar o tipo errado para tentar forçar rich snippet.'),
      ul(['Home: Organization, ProfessionalService e WebSite.', 'Serviços: Service e BreadcrumbList.', 'Blog: Article ou BlogPosting.', 'Portfólio: CreativeWork ou CaseStudy quando aplicável.', 'Produtos digitais: SoftwareApplication ou Product com cuidado.', 'Contato: ContactPage e Organization.']),
      p('Dados estruturados inválidos podem gerar avisos em auditorias e impedir resultados enriquecidos. O ideal é centralizar a geração de schema e validar com ferramentas apropriadas antes de considerar resolvido.'),

      h('Checklist 7: links internos e arquitetura de autoridade'),
      p('Links internos mostram relação entre páginas. Eles ajudam usuários a navegar e ajudam buscadores a entenderem hierarquia. Um erro comum é criar posts e páginas soltas, sem conexão com serviços, cases e CTAs.'),
      ul(['Posts devem apontar para serviços relacionados.', 'Serviços devem apontar para cases e posts úteis.', 'Cases devem apontar para serviços executados.', 'Home deve conduzir para páginas prioritárias.', 'Rodapé deve reforçar páginas institucionais e comerciais.', 'Breadcrumbs ajudam navegação e schema.']),
      code('Blog post sobre SEO técnico\n        ↓\nServiço de site de alta performance\n        ↓\nCase relacionado\n        ↓\nContato / diagnóstico'),

      h('Checklist 8: conteúdo suficiente e proporção texto/HTML'),
      p('Auditorias costumam apontar baixa proporção texto/HTML quando a página tem muito código e pouco conteúdo textual. Isso pode acontecer em páginas muito visuais, cards dinâmicos ou cases curtos. O problema não é apenas percentual. O risco real é a página não explicar o suficiente para o usuário e para o buscador.'),
      ul(['Páginas de serviço precisam explicar dor, solução, entregáveis e processo.', 'Cases precisam ter contexto, desafio, solução, stack e resultado.', 'Produtos precisam explicar uso, público, funcionalidades e diferencial.', 'Blog posts precisam responder a intenção de busca com profundidade.', 'Páginas visuais precisam ter texto acessível e estruturado.']),
      p('A solução não é encher texto sem propósito. É adicionar conteúdo útil, escaneável e conectado à intenção da página.'),

      h('Checklist 9: performance mobile e experiência'),
      p('SEO técnico e UX se encontram no mobile. Um site lento, instável ou difícil de ler tende a converter menos. Mesmo quando a página indexa, a experiência ruim reduz resultado comercial.'),
      ul(['Imagens otimizadas.', 'Fontes controladas.', 'Menos scripts desnecessários.', 'Layout sem overflow horizontal.', 'Header compacto no mobile.', 'Contraste adequado.', 'Botões fáceis de tocar.', 'Animações leves e sem glitches.']),
      p('Em sites premium, efeitos visuais como blur, gradientes e animações devem ser usados com equilíbrio. No mobile, às vezes a melhor otimização é reduzir complexidade visual para preservar clareza e velocidade.'),

      h('Checklist 10: imagens, alt text e links quebrados'),
      p('Imagens quebradas, links externos fora do ar e alt text ausente prejudicam qualidade percebida e auditorias. Links externos devem ser revisados periodicamente, especialmente quando apontam para redes sociais, ferramentas, páginas de clientes ou fontes externas.'),
      ul(['Baixar imagens importantes para o próprio projeto quando permitido.', 'Evitar depender de imagens externas instáveis.', 'Adicionar alt text descritivo.', 'Revisar links externos quebrados.', 'Corrigir links internos após mudanças de slug.', 'Usar redirects quando páginas antigas ainda recebem tráfego.']),

      h('Como priorizar correções de uma auditoria SEO'),
      p('Nem todo alerta tem o mesmo peso. O ideal é priorizar primeiro problemas que afetam rastreamento, indexação, canonicalização e páginas comerciais. Depois entram melhorias de conteúdo, links internos e performance fina.'),
      code('Prioridade 1: indexação e canonical\nPrioridade 2: erros técnicos e redirects\nPrioridade 3: dados estruturados\nPrioridade 4: titles, descriptions e conteúdo\nPrioridade 5: links internos, imagens e performance recorrente'),
      ul(['Corrigir sitemap e robots.', 'Resolver URLs duplicadas e redirects indevidos.', 'Validar schema.', 'Enxugar títulos longos.', 'Fortalecer páginas com pouco conteúdo.', 'Criar links internos contextuais.', 'Monitorar Search Console após deploy.']),

      h('Como a Tehkné conduz SEO técnico'),
      p('A Tehkné Solutions trata SEO técnico como parte da arquitetura do site, não como ajuste final. Em projetos novos, cuidamos de estrutura, sitemap, metadata, schema, performance, links internos e conteúdo desde o início. Em projetos existentes, começamos por auditoria, classificação de problemas e plano de correção por prioridade.'),
      p('Também conectamos SEO técnico à estratégia comercial. Não adianta corrigir sitemap se as páginas de serviço continuam fracas. Não adianta criar blog se os posts não apontam para CTAs e serviços. SEO técnico precisa trabalhar junto com copy, UX, prova social e manutenção.'),
      ul(['Auditoria técnica.', 'Correção de sitemap, robots e canonical.', 'Revisão de redirects.', 'Schema por tipo de página.', 'Titles e descriptions.', 'Links internos.', 'Conteúdo para páginas fracas.', 'Performance e mobile.', 'Monitoramento e evolução.']),
      cta('Se sua auditoria Semrush ou Search Console mostra problemas técnicos, a Tehkné pode transformar os alertas em um plano de correção por prioridade.', 'Corrigir SEO técnico'),

      h('FAQ sobre SEO técnico'),
      sh('SEO técnico sozinho coloca um site no topo?'),
      p('Não. SEO técnico cria base saudável, mas ranking também depende de conteúdo, autoridade, concorrência, intenção de busca e experiência. Sem base técnica, porém, o conteúdo pode performar abaixo do potencial.'),
      sh('Preciso corrigir todos os avisos da auditoria?'),
      p('Nem sempre. Alguns avisos são críticos, outros são recomendações. O ideal é classificar por impacto: indexação, páginas comerciais, dados estruturados, performance e conteúdo.'),
      sh('Sitemap garante indexação?'),
      p('Não garante. Sitemap ajuda o buscador a descobrir URLs, mas a indexação depende de qualidade, rastreabilidade, canonical, conteúdo, autoridade e ausência de bloqueios.'),
      sh('Dados estruturados são obrigatórios?'),
      p('Não são obrigatórios para indexar, mas ajudam buscadores a entenderem entidades e podem habilitar resultados enriquecidos quando válidos e aplicáveis.'),
      sh('Com que frequência revisar SEO técnico?'),
      p('Sites ativos devem revisar SEO técnico de forma recorrente, principalmente após publicar novas páginas, migrar domínio, alterar slugs, mudar stack, adicionar blog ou fazer campanhas.'),

      h('Conclusão: SEO técnico é governança de presença digital'),
      p('SEO técnico não é uma lista de ajustes isolados. É governança da presença digital. Ele garante que páginas importantes estejam acessíveis, canônicas, bem descritas, conectadas e preparadas para serem interpretadas por buscadores e usuários.'),
      p('Empresas que tratam SEO técnico como rotina protegem melhor seus investimentos em site, conteúdo, blog, portfólio e campanhas. A base técnica não substitui estratégia, mas sem ela a estratégia trabalha com menos força.'),
      cta('Quer revisar a base técnica do seu site e corrigir problemas de indexação, sitemap, schema, links e performance? A Tehkné pode fazer esse diagnóstico.', 'Solicitar diagnóstico SEO')
    ]
  }
];
