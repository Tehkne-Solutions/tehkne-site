export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'quote'; text: string; cta?: string; href?: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; text: string }
  | { type: 'compare'; leftTitle: string; left: string[]; rightTitle: string; right: string[] };

export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  cover: string;
  author: string;
  date: string;
  readingTime: string;
  intro: string;
  imageSuggestions: {
    label: string;
    source: string;
    query: string;
    path: string;
    alt: string;
  }[];
  blocks: BlogBlock[];
};

const contactHref = '/contato#contato-form';

function paragraph(text: string): BlogBlock {
  return { type: 'paragraph', text };
}

function heading(text: string): BlogBlock {
  return { type: 'heading', text };
}

function subheading(text: string): BlogBlock {
  return { type: 'subheading', text };
}

function list(items: string[]): BlogBlock {
  return { type: 'list', items };
}

function diagram(text: string): BlogBlock {
  return { type: 'code', text };
}

function callout(text: string, cta = 'Solicitar diagnóstico'): BlogBlock {
  return { type: 'quote', text, cta, href: contactHref };
}

function methodCompare(): BlogBlock {
  return {
    type: 'compare',
    leftTitle: 'Sem método',
    left: [
      'Decisões tomadas no impulso, sem critério claro de negócio.',
      'Ferramentas escolhidas antes de entender a operação.',
      'Baixa documentação e dependência de memória informal.',
      'Retrabalho quando surgem novas páginas, integrações ou regras.',
      'Entrega inicial até funciona, mas a evolução fica cara e insegura.'
    ],
    rightTitle: 'Com Tehkné',
    right: [
      'Diagnóstico do problema real antes da execução.',
      'Arquitetura, design, conteúdo e tecnologia conectados desde o início.',
      'Documentação viva para dar continuidade sem perder contexto.',
      'Stack e escopo definidos conforme necessidade, operação e orçamento.',
      'Evolução contínua com governança, mensuração e melhoria incremental.'
    ]
  };
}

function images(slug: string, category: string, query: string): BlogPost['imageSuggestions'] {
  return [
    {
      label: 'Capa do artigo',
      source: 'Unsplash / Pexels / Pixabay',
      query,
      path: `/images/blog/${slug}-cover.jpg`,
      alt: `Imagem editorial sobre ${category} aplicada a projetos digitais.`
    },
    {
      label: 'Imagem de meio do artigo',
      source: 'Unsplash / Pexels',
      query: `${query} workflow product team`,
      path: `/images/blog/${slug}-apoio.jpg`,
      alt: `Equipe planejando ${category} com fluxos, telas e decisões técnicas.`
    },
    {
      label: 'Thumbnail social / Open Graph',
      source: 'Pixabay / Pexels',
      query: `${query} abstract software interface`,
      path: `/images/blog/${slug}-og.jpg`,
      alt: `Visual abstrato representando ${category} no contexto da Tehkné Solutions.`
    }
  ];
}

export const blogPosts: BlogPost[] = [
  {
    title: 'O que é Arquitetura de Soluções e por que ela evita retrabalho em projetos digitais',
    slug: 'o-que-e-arquitetura-de-solucoes',
    description: 'Entenda o que é Arquitetura de Soluções, como ela organiza tecnologia, negócio e experiência do usuário, e por que ela reduz retrabalho em sites, sistemas e produtos digitais.',
    category: 'Arquitetura de Soluções',
    tags: ['Arquitetura de Soluções', 'Desenvolvimento Web', 'Produto Digital', 'Tecnologia sob medida', 'Tehkné Solutions'],
    cover: '/images/blog/o-que-e-arquitetura-de-solucoes-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-05-22',
    readingTime: '12 min de leitura',
    intro: 'Antes de uma empresa construir um site, uma plataforma, um sistema interno, uma automação ou um produto digital, existe uma pergunta que quase sempre é ignorada: qual é a melhor forma de transformar essa ideia em uma solução real, sustentável e preparada para evoluir?',
    imageSuggestions: images('o-que-e-arquitetura-de-solucoes', 'Arquitetura de Soluções', 'solution architecture digital product planning'),
    blocks: [
      paragraph('Muitos projetos digitais começam pela ferramenta. Alguém escolhe um tema, instala plugins, contrata uma landing page, desenha telas ou automatiza uma etapa isolada. A execução parece rápida no início, mas o custo aparece depois: integrações quebradas, dados espalhados, baixa clareza de escopo, manutenção cara e decisões que ninguém sabe explicar.'),
      paragraph('Arquitetura de Soluções é o trabalho de transformar uma intenção em um plano técnico-operacional. Ela define como a solução deve funcionar, quais sistemas precisam conversar, quais dados serão tratados, qual stack faz sentido, como o time vai operar depois do lançamento e quais riscos precisam ser previstos antes do desenvolvimento pesado.'),
      heading('O que significa Arquitetura de Soluções na prática?'),
      paragraph('Na prática, Arquitetura de Soluções é a ponte entre negócio, design, tecnologia e operação. Ela não é apenas um desenho bonito de sistema. É uma decisão estruturada sobre como construir algo que possa ser entendido, publicado, mantido, medido e evoluído.'),
      subheading('Termos que você precisa entender'),
      list(['Escopo: definição do que será entregue agora, o que fica fora e o que pode entrar em fases futuras.', 'Stack: conjunto de tecnologias usadas no projeto, como Next.js, WordPress, PHP, Python, APIs, banco de dados e serviços de deploy.', 'Fluxo: sequência real das ações do usuário, do time interno, dos sistemas e das automações.', 'Integração: conexão entre ferramentas, como site, CRM, ERP, WhatsApp, e-mail, planilhas, sistemas internos ou APIs externas.', 'Governança: regras para manutenção, versionamento, segurança, documentação e continuidade do projeto.']),
      heading('Exemplo prático'),
      paragraph('Imagine uma empresa que pede apenas “um site institucional moderno”. A demanda parece simples, mas logo surgem perguntas: o site terá blog? Quem atualiza os conteúdos? Os leads vão para e-mail, CRM ou WhatsApp? Haverá campanhas? Cada serviço terá uma landing page? O time precisa de relatórios? O site precisa ser rápido no mobile?'),
      diagram('Intenção do negócio\n        ↓\nDiagnóstico de necessidades\n        ↓\nArquitetura de páginas, dados, stack e integrações\n        ↓\nDesign, desenvolvimento e automações\n        ↓\nValidação, publicação, documentação e evolução contínua'),
      heading('Como a Tehkné resolve'),
      paragraph('Na Tehkné, arquitetura vem antes da pressa por código. O primeiro movimento é entender o problema real, o cenário operacional, os canais de atendimento, o nível de autonomia desejado pelo cliente e a forma como a solução precisará evoluir.'),
      paragraph('Depois, a Tehkné organiza o projeto em camadas: experiência do usuário, conteúdo, stack, dados, integrações, governança e sustentação. Esse modelo permite construir com clareza e reduz a chance de refazer partes inteiras quando o projeto começa a crescer.'),
      methodCompare(),
      heading('Quando sua empresa deve olhar para isso?'),
      list(['Quando o projeto envolve mais do que uma página estática.', 'Quando existem integrações, automações, formulários ou regras de negócio.', 'Quando o time interno precisa operar a solução depois do lançamento.', 'Quando a empresa quer reduzir retrabalho antes de investir em desenvolvimento.', 'Quando o produto digital precisa evoluir com segurança e não apenas ser publicado.']),
      callout('Quer entender como Arquitetura de Soluções se aplica ao seu projeto? A Tehkné pode transformar uma demanda solta em diagnóstico, arquitetura e plano de execução.', 'Mapear arquitetura'),
      heading('Conclusão'),
      paragraph('Arquitetura de Soluções não é burocracia. É o que impede que um projeto digital vire uma sequência de remendos. Quando a base é clara, o desenvolvimento ganha direção, o design ganha propósito, o cliente ganha previsibilidade e a solução passa a funcionar como parte real da operação.')
    ]
  },
  {
    title: 'Site institucional não é só vitrine: como transformar um site em operação digital',
    slug: 'site-institucional-como-operacao-digital',
    description: 'Entenda por que um site institucional moderno precisa conectar posicionamento, conteúdo, SEO, conversão, CMS, integrações e evolução contínua.',
    category: 'Sites de Alta Performance',
    tags: ['Site institucional', 'SEO', 'Conversão', 'CMS', 'Operação digital'],
    cover: '/images/blog/site-institucional-como-operacao-digital-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-05-23',
    readingTime: '11 min de leitura',
    intro: 'Muitas empresas tratam o site como cartão de visita: ele apresenta a marca, lista serviços e deixa um formulário no final. O problema é que o mercado atual exige mais. O site precisa captar, orientar, medir, integrar e evoluir junto com a operação.',
    imageSuggestions: images('site-institucional-como-operacao-digital', 'Sites de Alta Performance', 'high performance corporate website digital operation'),
    blocks: [
      paragraph('Um site institucional moderno não pode ser apenas uma vitrine. Ele precisa comunicar autoridade, organizar a jornada do visitante, reduzir dúvidas, captar oportunidades e preparar a empresa para vender, atender e evoluir com mais clareza.'),
      paragraph('Quando o site é pensado só como presença digital, a empresa perde potencial. O visitante entra, vê algumas informações e sai sem uma próxima ação clara. Quando o site é pensado como operação digital, ele passa a ter estratégia de conteúdo, arquitetura de páginas, CTAs, SEO, integrações, métricas e continuidade.'),
      heading('O que significa site como operação digital?'),
      paragraph('Significa que cada seção do site tem uma função dentro do negócio. O hero posiciona a empresa. As páginas de serviço explicam ofertas. O blog educa e indexa termos estratégicos. O portfólio gera prova. Os CTAs conduzem para diagnóstico. O formulário coleta dados úteis. As integrações levam esses dados para atendimento, CRM ou automação.'),
      subheading('Termos que você precisa entender'),
      list(['Jornada: caminho que o visitante percorre desde a primeira impressão até o contato ou contratação.', 'SEO técnico: estrutura, performance, metadados e indexação para buscadores entenderem o site.', 'Conversão: ação desejada, como enviar formulário, chamar no WhatsApp ou solicitar diagnóstico.', 'CMS: painel para atualizar conteúdos sem editar código.', 'CTA: chamada para ação que conduz o usuário para o próximo passo.', 'Evento de conversão: marcação mensurável para entender quais ações geram oportunidades reais.']),
      heading('Exemplo prático'),
      paragraph('Uma empresa de serviços pode ter página inicial, páginas por solução, cases, blog, formulário de diagnóstico e WhatsApp contextual. Quando um lead chega pelo Google procurando uma dor específica, ele encontra conteúdo, entende a solução, vê provas e aciona o contato certo.'),
      diagram('Busca ou campanha\n        ↓\nPágina estratégica\n        ↓\nConteúdo + prova + CTA\n        ↓\nFormulário ou WhatsApp contextual\n        ↓\nCRM, atendimento ou automação\n        ↓\nFollow-up e evolução comercial'),
      heading('O que normalmente dá errado'),
      list(['Site bonito, mas sem estratégia de jornada e sem clareza sobre o próximo passo.', 'Formulários que enviam dados para e-mail solto, sem rastreio e sem histórico.', 'Conteúdo genérico que não educa o cliente nem posiciona a empresa.', 'Páginas lentas no mobile, prejudicando experiência e campanhas.', 'CMS difícil de operar, fazendo o cliente depender do dev para alterações simples.']),
      heading('Como a Tehkné resolve'),
      paragraph('A Tehkné estrutura sites como ativos operacionais. Isso envolve posicionamento, arquitetura de informação, design, performance, SEO técnico, CMS, formulários, CTAs, integrações e sustentação. O objetivo não é apenas publicar uma página bonita; é criar uma base que ajude a empresa a comunicar, vender, medir e evoluir.'),
      methodCompare(),
      heading('Quando sua empresa deve repensar o site?'),
      list(['Quando o site não gera contatos qualificados.', 'Quando o conteúdo não explica bem o que a empresa faz.', 'Quando cada atualização exige esforço técnico desnecessário.', 'Quando campanhas levam para páginas fracas ou lentas.', 'Quando o time comercial não recebe informações suficientes para continuar a conversa.']),
      callout('Quer transformar seu site institucional em uma operação digital mais clara, mensurável e preparada para crescimento? A Tehkné pode mapear a estrutura ideal.', 'Planejar meu site'),
      heading('Conclusão'),
      paragraph('Um site institucional bem feito não é apenas presença. Ele é infraestrutura de comunicação, marketing, vendas e operação. Quando a arquitetura é planejada desde o início, o site deixa de ser uma vitrine parada e passa a ser um canal vivo de crescimento.')
    ]
  },
  {
    title: 'WordPress Avançado: quando o WordPress deixa de ser “site simples” e vira sistema',
    slug: 'wordpress-avancado-quando-vira-sistema',
    description: 'Veja como CPTs, API REST, plugins próprios, temas customizados e painéis administrativos transformam WordPress em uma base de sistemas digitais.',
    category: 'WordPress Avançado',
    tags: ['WordPress', 'CPT', 'API REST', 'Plugins próprios', 'Painel admin'],
    cover: '/images/blog/wordpress-avancado-quando-vira-sistema-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-05-24',
    readingTime: '12 min de leitura',
    intro: 'Muita gente associa WordPress a site simples, template pronto e excesso de plugins. Mas o WordPress também pode ser usado como CMS robusto, painel administrativo e base para catálogos, áreas internas, landing pages dinâmicas e produtos operacionais.',
    imageSuggestions: images('wordpress-avancado-quando-vira-sistema', 'WordPress Avançado', 'advanced WordPress custom plugin admin dashboard'),
    blocks: [
      paragraph('WordPress é frequentemente subestimado. Para muitos, ele é sinônimo de site institucional simples, tema pronto e plugins acumulados. Mas, quando bem arquitetado, o WordPress pode ser uma base sólida para sistemas editoriais, catálogos, portais, CRMs leves, intranets, landing pages dinâmicas e painéis administrativos sob medida.'),
      paragraph('A diferença não está apenas na ferramenta. Está na forma como ela é usada. WordPress avançado significa separar visual, dados, regras de negócio, permissões, APIs e experiência administrativa.'),
      heading('O que é WordPress Avançado?'),
      paragraph('WordPress Avançado é o uso do WordPress como plataforma de conteúdo e operação, não apenas como construtor de páginas. Em vez de depender de dezenas de plugins sem governança, o projeto passa a usar tipos de conteúdo personalizados, campos sob medida, temas próprios, plugins internos, endpoints REST e lógica organizada.'),
      subheading('Termos que você precisa entender'),
      list(['CPT: Custom Post Type, um tipo de conteúdo personalizado, como veículos, cases, imóveis, cursos, unidades ou leads.', 'Campos personalizados: dados estruturados ligados a cada conteúdo, como preço, status, categoria, cidade ou especificações técnicas.', 'Tema customizado: camada visual do site, feita sob medida para a marca e a experiência.', 'Plugin próprio: camada de regras, integrações, permissões, automações e lógica de negócio.', 'REST API: forma de expor ou consumir dados do WordPress por sistemas externos.', 'Painel operacional: área administrativa organizada para o time usar sem depender de código.']),
      heading('Exemplo prático'),
      paragraph('Um catálogo de veículos não precisa ser uma página estática. Cada veículo pode ser um CPT com marca, modelo, versão, preço, ano, imagens, status e ficha técnica. O painel permite cadastrar e atualizar. O front renderiza cards e páginas individuais. A API pode alimentar integrações e automações.'),
      diagram('WordPress\n├── Tema customizado: interface pública\n├── Plugin próprio: regras, dados e integrações\n├── CPTs: veículos, cases, produtos ou leads\n├── Campos personalizados: dados operacionais\n└── REST API: conexão com sistemas externos'),
      heading('O que normalmente dá errado'),
      list(['Instalar plugin para tudo, criando dependências e conflitos difíceis de rastrear.', 'Construir regras importantes dentro do editor visual, misturando layout com lógica.', 'Não documentar campos, CPTs e integrações.', 'Permitir que o painel fique confuso para quem vai operar no dia a dia.', 'Tratar performance e segurança apenas no final do projeto.']),
      heading('Como a Tehkné resolve'),
      paragraph('A Tehkné usa WordPress quando ele é a melhor base para operação editorial, painel administrativo, gestão de conteúdo e autonomia do cliente. A abordagem recomendada é clara: tema próprio para a experiência visual e plugin próprio para lógica, dados, integrações e permissões.'),
      methodCompare(),
      heading('Quando WordPress Avançado faz sentido?'),
      list(['Quando o cliente precisa atualizar conteúdos com frequência.', 'Quando existem catálogos, filtros, páginas dinâmicas ou cadastros.', 'Quando o WordPress já faz parte da operação e precisa ser profissionalizado.', 'Quando o projeto precisa de autonomia editorial, mas não pode virar bagunça técnica.', 'Quando é necessário integrar dados com CRM, formulários, APIs ou automações.']),
      callout('Quer avaliar se seu WordPress pode evoluir de site simples para sistema operacional de conteúdo? A Tehkné pode diagnosticar a estrutura atual e propor um caminho seguro.', 'Avaliar meu WordPress'),
      heading('Conclusão'),
      paragraph('WordPress Avançado não é sobre instalar mais plugins. É sobre arquitetura. Quando o projeto separa conteúdo, visual, lógica e integração, o WordPress deixa de ser um site frágil e passa a ser uma base operacional confiável.')
    ]
  },
  {
    title: 'Next.js para empresas: por que usar em sites, portais e produtos digitais modernos',
    slug: 'nextjs-para-empresas-sites-portais-produtos',
    description: 'Entenda quando Next.js faz sentido para empresas que precisam de performance, SEO técnico, componentes reutilizáveis e estrutura moderna para evoluir.',
    category: 'Next.js',
    tags: ['Next.js', 'React', 'SEO técnico', 'Vercel', 'Performance'],
    cover: '/images/blog/nextjs-para-empresas-sites-portais-produtos-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-05-25',
    readingTime: '11 min de leitura',
    intro: 'Empresas que precisam de sites rápidos, portais modernos, landing pages escaláveis ou produtos digitais muitas vezes ficam presas a estruturas lentas, difíceis de manter e pouco flexíveis para evolução.',
    imageSuggestions: images('nextjs-para-empresas-sites-portais-produtos', 'Next.js', 'Next.js enterprise website React performance SEO'),
    blocks: [
      paragraph('Next.js se tornou uma das principais escolhas para empresas que precisam unir performance, experiência de usuário, SEO técnico e estrutura de produto. Ele não é apenas uma tecnologia de front-end; é uma forma moderna de organizar interfaces, rotas, dados e publicação.'),
      paragraph('Mas Next.js não deve ser escolhido por moda. Ele faz sentido quando a empresa precisa de velocidade, componentes reutilizáveis, páginas bem estruturadas, integração com APIs e base preparada para crescer com governança.'),
      heading('O que Next.js resolve na prática?'),
      paragraph('Next.js permite criar sites e aplicações com React, rotas organizadas, renderização otimizada e boa integração com serviços modernos de deploy. Em projetos institucionais, portais e produtos digitais, isso ajuda a entregar páginas rápidas, boas para indexação e mais fáceis de evoluir.'),
      subheading('Termos que você precisa entender'),
      list(['React: biblioteca usada para criar interfaces por componentes.', 'App Router: organização moderna de rotas e layouts no Next.js.', 'SSG: geração estática de páginas para performance e estabilidade.', 'SSR: renderização no servidor quando dados precisam ser montados sob demanda.', 'SEO técnico: metadata, URLs, sitemap, performance e HTML compreensível para buscadores.', 'Deploy contínuo: publicação automatizada a partir do Git.']),
      heading('Exemplo prático'),
      paragraph('Um site de software house com home, soluções, portfólio, blog e cases pode usar Next.js para entregar páginas rápidas, URLs limpas, metadados por página e componentes reutilizáveis. O conteúdo pode vir de arquivos locais, CMS headless, WordPress, banco de dados ou APIs.'),
      diagram('Next.js\n├── Páginas públicas rápidas\n├── Componentes reutilizáveis\n├── Metadata e SEO por rota\n├── Integração com CMS ou APIs\n├── Deploy contínuo\n└── Evolução para produto digital'),
      heading('Quando Next.js é melhor que uma solução tradicional?'),
      list(['Quando performance e experiência mobile são prioridade.', 'Quando o projeto precisa de visual premium e componentes consistentes.', 'Quando o conteúdo pode ser organizado com dados estruturados.', 'Quando existe necessidade de integrar com APIs, CMS ou back-ends externos.', 'Quando a empresa quer uma base moderna para evoluir em produto digital.']),
      heading('Como a Tehkné resolve'),
      paragraph('A Tehkné usa Next.js quando ele realmente melhora o projeto: performance, SEO, rotas, componentização, integração com dados e evolução contínua. A decisão de stack vem depois do diagnóstico, não antes.'),
      methodCompare(),
      heading('Quando sua empresa deve considerar Next.js?'),
      list(['Quando o site atual é lento, pesado ou difícil de manter.', 'Quando a marca precisa de uma presença digital mais premium.', 'Quando SEO técnico e performance são parte da estratégia.', 'Quando a empresa quer integrar conteúdo com APIs ou CMS.', 'Quando o projeto pode evoluir para portal, dashboard ou produto digital.']),
      callout('Quer saber se Next.js faz sentido para sua operação ou se outra stack seria mais eficiente? A Tehkné pode mapear a melhor arquitetura antes da execução.', 'Avaliar stack'),
      heading('Conclusão'),
      paragraph('Next.js é poderoso quando usado com intenção. Para empresas, o ganho real não está apenas na tecnologia, mas na combinação entre arquitetura, performance, design, SEO e governança.')
    ]
  },
  {
    title: 'UX/UI na prática: design bonito não basta sem produto, jornada e conversão',
    slug: 'ux-ui-na-pratica-design-produto-conversao',
    description: 'Entenda como UX, UI, jornada, hierarquia visual e design de produto ajudam sites e sistemas a serem mais claros, usáveis e comerciais.',
    category: 'Design & UX',
    tags: ['UX', 'UI', 'Produto Digital', 'Conversão', 'Design System'],
    cover: '/images/blog/ux-ui-na-pratica-design-produto-conversao-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-05-26',
    readingTime: '10 min de leitura',
    intro: 'Design digital não é apenas estética. Uma interface pode ser bonita e ainda assim confundir o usuário, esconder informações importantes, gerar abandono e dificultar a operação do cliente.',
    imageSuggestions: images('ux-ui-na-pratica-design-produto-conversao', 'Design & UX', 'UX UI product design conversion interface'),
    blocks: [
      paragraph('Muitas empresas avaliam design apenas pela aparência. Pedem algo moderno, premium, animado ou tecnológico. Isso importa, mas não é suficiente. Um bom projeto digital precisa ajudar o usuário a entender, decidir e agir.'),
      paragraph('UX/UI na prática é a disciplina que conecta estética, clareza, jornada, hierarquia e resultado. O design precisa comunicar a marca, mas também precisa resolver dúvidas, reduzir atrito, destacar prioridades e facilitar a conversão.'),
      heading('Qual a diferença entre UX e UI?'),
      paragraph('UI, ou interface do usuário, trata da camada visual: cores, tipografia, botões, espaçamentos, cards, ícones, grid e componentes. UX, ou experiência do usuário, trata da jornada: o que o usuário precisa entender, quais decisões precisa tomar, quais obstáculos encontra e como a interface ajuda ou atrapalha.'),
      subheading('Termos que você precisa entender'),
      list(['Hierarquia visual: ordem de importância dos elementos na tela.', 'Jornada: sequência de passos e decisões do usuário.', 'Design system: conjunto de padrões visuais e componentes reutilizáveis.', 'Wireframe: estrutura inicial de uma tela antes do refinamento visual.', 'Prototipação: simulação de navegação para validar fluxo e experiência.', 'Conversão: ação que aproxima o usuário do objetivo do negócio.']),
      heading('Exemplo prático'),
      paragraph('Uma landing page pode ter um visual sofisticado, mas falhar se o título não explicar a oferta, se o CTA estiver escondido, se os benefícios parecerem genéricos ou se o formulário pedir informações demais. UX organiza a conversa. UI dá forma premium a essa conversa.'),
      diagram('Problema do usuário\n        ↓\nMensagem clara\n        ↓\nHierarquia visual\n        ↓\nProva, benefício e CTA\n        ↓\nAção mensurável\n        ↓\nAprendizado e melhoria'),
      heading('O que normalmente dá errado'),
      list(['Design bonito sem narrativa comercial clara.', 'Excesso de efeitos visuais competindo com a mensagem principal.', 'Botões e CTAs sem prioridade ou repetidos sem contexto.', 'Cards com informação demais e pouca leitura escaneável.', 'Interface que parece moderna, mas não ajuda o usuário a tomar decisão.']),
      heading('Como a Tehkné resolve'),
      paragraph('A Tehkné trata design como produto, não como decoração. Antes da interface final, o projeto passa por compreensão de objetivo, estrutura de conteúdo, definição de jornada, arquitetura de seções e critérios de conversão.'),
      methodCompare(),
      heading('Quando investir em UX/UI?'),
      list(['Quando o site recebe visitas, mas não gera contato.', 'Quando os usuários não entendem rapidamente o que a empresa oferece.', 'Quando sistemas internos são usados com dificuldade pelo time.', 'Quando há excesso de informação e baixa hierarquia.', 'Quando a marca precisa parecer mais premium sem perder clareza.']),
      callout('Quer revisar a experiência do seu site, sistema ou produto digital? A Tehkné pode mapear jornada, interface, conteúdo e conversão.', 'Revisar UX/UI'),
      heading('Conclusão'),
      paragraph('UX/UI profissional não é fazer uma tela bonita. É desenhar uma experiência que faça sentido para o usuário e para o negócio. Quando design, produto e tecnologia trabalham juntos, a interface deixa de ser apenas visual e passa a ser uma ferramenta de decisão.')
    ]
  },
  {
    title: 'IA e automações na operação real: onde aplicar sem cair em modismo',
    slug: 'ia-e-automacoes-na-operacao-real',
    description: 'Veja como aplicar IA, agentes, chatbots e automações em processos reais de atendimento, vendas, conteúdo, suporte e operação interna.',
    category: 'IA & Automações',
    tags: ['IA', 'Automações', 'Agentes', 'Chatbots', 'Operação digital'],
    cover: '/images/blog/ia-e-automacoes-na-operacao-real-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-05-27',
    readingTime: '12 min de leitura',
    intro: 'IA e automação viraram palavras obrigatórias em quase toda conversa de tecnologia. O problema é que muitas empresas tentam aplicar IA antes de organizar processos, dados e responsabilidades.',
    imageSuggestions: images('ia-e-automacoes-na-operacao-real', 'IA & Automações', 'AI automation business workflow agents'),
    blocks: [
      paragraph('IA e automação só geram valor quando resolvem um problema operacional real. Automatizar uma etapa confusa apenas torna a confusão mais rápida. Criar um chatbot sem base de conhecimento apenas transfere dúvidas para uma interface diferente.'),
      paragraph('O primeiro passo não é escolher uma ferramenta de IA. É entender onde existe repetição, atraso, perda de informação, falta de padrão ou oportunidade de escala. Depois disso, a tecnologia entra como meio, não como espetáculo.'),
      heading('Onde IA e automações fazem sentido?'),
      paragraph('Elas fazem sentido em processos que têm padrão, volume, recorrência ou necessidade de apoio cognitivo. Exemplos: triagem de leads, respostas iniciais, organização de briefing, geração de rascunhos, resumo de reuniões, alimentação de CRM, follow-up, documentação, classificação de solicitações e suporte interno.'),
      subheading('Termos que você precisa entender'),
      list(['Automação: execução automática de etapas repetitivas entre ferramentas e sistemas.', 'Agente de IA: assistente com papel, contexto, ferramentas e objetivo operacional definidos.', 'Prompt operacional: instrução estruturada para produzir uma saída consistente.', 'Base de conhecimento: fonte organizada de informações que alimenta respostas e decisões.', 'Human-in-the-loop: modelo em que a IA sugere, mas uma pessoa valida ações importantes.', 'Orquestração: coordenação entre IA, APIs, CRM, planilhas, e-mail, WhatsApp e sistemas internos.']),
      heading('Exemplo prático'),
      paragraph('Uma empresa recebe leads pelo site, WhatsApp e campanhas. Sem automação, o time copia dados manualmente, perde contexto e esquece follow-ups. Com uma arquitetura simples, o formulário coleta informações, registra no CRM, classifica origem, envia notificação e prepara uma resposta inicial contextual.'),
      diagram('Entrada do lead\n        ↓\nFormulário, WhatsApp ou campanha\n        ↓\nClassificação e registro no CRM\n        ↓\nResumo com IA e próxima ação sugerida\n        ↓\nFollow-up automático ou assistido\n        ↓\nHistórico para venda e operação'),
      heading('O que normalmente dá errado'),
      list(['Usar IA para tudo sem priorizar o processo que mais dói.', 'Automatizar ferramentas sem definir responsabilidades e exceções.', 'Gerar texto automaticamente sem revisar tom, contexto e segurança.', 'Não registrar histórico das interações.', 'Não medir se a automação economizou tempo ou melhorou resultado.']),
      heading('Como a Tehkné resolve'),
      paragraph('A Tehkné começa pela operação. Mapeia entradas, tarefas, gargalos, ferramentas, dados, riscos e pontos de validação humana. Depois define onde automação simples resolve e onde IA realmente agrega.'),
      methodCompare(),
      heading('Quando sua empresa deve olhar para IA e automação?'),
      list(['Quando tarefas repetitivas consomem tempo do time.', 'Quando leads chegam por vários canais e se perdem no caminho.', 'Quando respostas e processos variam demais entre pessoas.', 'Quando existe muita informação, mas pouca documentação acessível.', 'Quando o time precisa produzir, classificar ou resumir conteúdo com mais velocidade.']),
      callout('Quer identificar onde IA e automações realmente podem gerar valor na sua operação? A Tehkné pode mapear processos e propor um fluxo viável.', 'Mapear automações'),
      heading('Conclusão'),
      paragraph('IA e automação não substituem método. Elas ampliam uma operação que já foi bem entendida. Quando aplicadas com diagnóstico, governança e validação humana, deixam de ser modismo e passam a ser infraestrutura de produtividade.')
    ]
  },
  {
    title: 'Integrações CRM, ERP e APIs: como conectar ferramentas sem criar caos operacional',
    slug: 'integracoes-crm-erp-apis-conectam-empresa',
    description: 'Entenda como integrações entre site, CRM, ERP, WhatsApp, formulários e APIs reduzem retrabalho e tornam a operação mais rastreável.',
    category: 'Integrações',
    tags: ['CRM', 'ERP', 'APIs', 'Integrações', 'Dados'],
    cover: '/images/blog/integracoes-crm-erp-apis-conectam-empresa-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-05-28',
    readingTime: '11 min de leitura',
    intro: 'Empresas crescem usando ferramentas diferentes: site, planilhas, WhatsApp, CRM, ERP, e-mail, plataformas de anúncio, sistemas internos e bancos de dados. O problema começa quando essas ferramentas não conversam.',
    imageSuggestions: images('integracoes-crm-erp-apis-conectam-empresa', 'Integrações', 'CRM ERP API integrations business systems'),
    blocks: [
      paragraph('Uma operação digital amadurece quando informações importantes deixam de depender de cópia manual. Lead, cliente, pedido, orçamento, contrato, ticket e histórico precisam circular com rastreabilidade. É aí que entram as integrações.'),
      paragraph('Integrar não é apenas “ligar uma ferramenta na outra”. É definir quais dados trafegam, com qual frequência, em qual formato, com quais permissões, quais erros precisam ser tratados e quem é responsável por cada etapa.'),
      heading('O que uma integração bem feita precisa responder?'),
      paragraph('Toda integração deve começar por perguntas simples: qual problema estamos resolvendo? Qual sistema é a fonte de verdade? Quais campos são obrigatórios? O que acontece se uma API falhar? Como a equipe acompanha erros? Quem pode alterar dados?'),
      subheading('Termos que você precisa entender'),
      list(['API: interface que permite que sistemas troquem dados de forma controlada.', 'Webhook: aviso automático enviado por um sistema quando algo acontece.', 'Fonte de verdade: sistema principal onde determinado dado deve ser considerado confiável.', 'Sincronização: atualização de dados entre ferramentas.', 'Mapeamento de campos: correspondência entre dados de sistemas diferentes.', 'Tratamento de erro: plano para lidar com falhas, duplicidades, limites e indisponibilidade.']),
      heading('Exemplo prático'),
      paragraph('Um formulário do site pode enviar dados para um CRM, notificar o comercial no WhatsApp, criar uma tarefa de follow-up e registrar a origem do lead. Se o lead virar cliente, o ERP pode receber informações comerciais sem recadastro manual.'),
      diagram('Site ou campanha\n        ↓\nFormulário estruturado\n        ↓\nCRM recebe lead com origem e interesse\n        ↓\nNotificação e tarefa para o time\n        ↓\nERP ou sistema interno recebe dados validados\n        ↓\nRelatórios e histórico centralizados'),
      heading('O que normalmente dá errado'),
      list(['Enviar dados sem padronizar campos e formatos.', 'Integrar tudo com planilhas improvisadas sem governança.', 'Não definir sistema principal para cada tipo de informação.', 'Não prever falhas, duplicidades ou limitações de API.', 'Manter integrações críticas sem documentação.']),
      heading('Como a Tehkné resolve'),
      paragraph('A Tehkné trata integração como arquitetura de dados e operação. Antes de conectar ferramentas, mapeia fluxo, campos, responsabilidades, riscos, autenticação, logs e manutenção.'),
      methodCompare(),
      heading('Quando sua empresa deve investir em integração?'),
      list(['Quando o time copia informações entre sistemas manualmente.', 'Quando leads ou pedidos se perdem entre canais.', 'Quando existem dados duplicados ou divergentes.', 'Quando o comercial não consegue enxergar histórico completo.', 'Quando a operação depende de planilhas que não deveriam ser o sistema principal.']),
      callout('Quer conectar site, CRM, ERP, WhatsApp ou APIs sem criar caos operacional? A Tehkné pode mapear o fluxo e propor uma integração segura.', 'Planejar integração'),
      heading('Conclusão'),
      paragraph('Integração boa não é a mais complexa. É a que torna a operação mais confiável, rastreável e simples de manter. Quando dados circulam com método, a empresa reduz retrabalho e ganha visão real do que acontece.')
    ]
  },
  {
    title: 'Sustentação técnica: publicar um site é só o começo',
    slug: 'sustentacao-tecnica-publicar-site-e-so-comeco',
    description: 'Entenda por que manutenção, monitoramento, ajustes, segurança, performance e evolução contínua são essenciais depois do lançamento.',
    category: 'Sustentação & Evolução',
    tags: ['Sustentação', 'Manutenção', 'Performance', 'Segurança', 'Evolução contínua'],
    cover: '/images/blog/sustentacao-tecnica-publicar-site-e-so-comeco-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-05-29',
    readingTime: '10 min de leitura',
    intro: 'Publicar um site, sistema ou landing page é uma etapa importante, mas não é o fim do projeto. Depois do lançamento começam as dúvidas, ajustes, métricas, correções, campanhas, novas páginas e integrações.',
    imageSuggestions: images('sustentacao-tecnica-publicar-site-e-so-comeco', 'Sustentação & Evolução', 'technical maintenance website support performance security'),
    blocks: [
      paragraph('Muitos projetos digitais são tratados como entrega única. O site vai ao ar, o sistema é publicado e todos seguem em frente. Na prática, a operação começa justamente depois do lançamento.'),
      paragraph('Usuários reais acessam de dispositivos diferentes. Campanhas mudam. Conteúdos precisam ser atualizados. Plugins e dependências recebem novas versões. O Google reinterpreta páginas. O cliente percebe melhorias necessárias. A sustentação técnica existe para que a solução continue viva.'),
      heading('O que é sustentação técnica?'),
      paragraph('Sustentação técnica é o conjunto de ações que mantém uma solução digital estável, segura, atualizada e preparada para evoluir. Ela inclui correções, monitoramento, ajustes de performance, apoio editorial, melhorias de UX, backup, segurança, documentação e pequenas evoluções.'),
      subheading('Termos que você precisa entender'),
      list(['Manutenção corretiva: correção de falhas ou comportamentos inesperados.', 'Manutenção evolutiva: melhoria ou expansão de recursos existentes.', 'Monitoramento: acompanhamento de erros, performance, disponibilidade e eventos importantes.', 'Backup: cópia de segurança para recuperação em caso de problema.', 'Atualização controlada: mudança de versões, plugins ou dependências com validação.', 'SLA: acordo de tempos, prioridades e responsabilidades.']),
      heading('Exemplo prático'),
      paragraph('Após publicar uma landing page, a empresa inicia tráfego pago e percebe que muitos usuários clicam no WhatsApp, mas poucos enviam formulário. A sustentação permite ajustar CTA, testar copy, melhorar performance mobile e integrar melhor os dados no CRM.'),
      diagram('Publicação\n        ↓\nMonitoramento e coleta de feedback\n        ↓\nCorreções e ajustes de conteúdo\n        ↓\nPerformance, segurança e integrações\n        ↓\nNovas páginas, campanhas e automações\n        ↓\nEvolução contínua'),
      heading('O que normalmente dá errado'),
      list(['Publicar e não acompanhar dados reais de uso.', 'Atualizar plugins ou dependências sem ambiente de teste.', 'Não ter backup confiável antes de alterações importantes.', 'Depender de uma única pessoa sem documentação.', 'Tratar cada ajuste como emergência, sem fila ou prioridade.']),
      heading('Como a Tehkné resolve'),
      paragraph('A Tehkné entende sustentação como parte do ciclo de vida do produto digital. Depois da entrega, a solução precisa de governança: versionamento, documentação, rotina de ajustes, monitoramento, evolução de conteúdo e melhoria contínua.'),
      methodCompare(),
      heading('Quando contratar sustentação?'),
      list(['Quando o site ou sistema já é parte da operação da empresa.', 'Quando existem campanhas ativas e necessidade de ajustes rápidos.', 'Quando o cliente precisa atualizar conteúdo com frequência.', 'Quando existem integrações, formulários, CRM ou automações críticas.', 'Quando a empresa quer evoluir sem refazer tudo a cada nova necessidade.']),
      callout('Quer manter seu site, sistema ou operação digital evoluindo com segurança? A Tehkné pode estruturar sustentação técnica contínua.', 'Estruturar sustentação'),
      heading('Conclusão'),
      paragraph('Publicar é só o começo. A diferença entre um projeto abandonado e uma operação digital madura está na sustentação. Com acompanhamento, documentação e evolução contínua, a solução permanece útil, segura e alinhada ao negócio.')
    ]
  },
  {
    title: 'Método GIP: como sair da ideia solta para um produto digital validado',
    slug: 'metodo-gip-ideia-solta-produto-validado',
    description: 'Conheça a lógica do GIP, um método de precisão iterativa para transformar intenção, briefing e escopo em execução organizada.',
    category: 'Método GIP',
    tags: ['GIP', 'Produto Digital', 'Arquitetura', 'Validação', 'Governança'],
    cover: '/images/blog/metodo-gip-ideia-solta-produto-validado-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-05-30',
    readingTime: '12 min de leitura',
    intro: 'Boas ideias costumam nascer desorganizadas. Elas aparecem como vontade, referência, print, conversa, dor operacional ou oportunidade comercial. O problema é tentar executar tudo isso sem transformar a intenção em estrutura.',
    imageSuggestions: images('metodo-gip-ideia-solta-produto-validado', 'Método GIP', 'product discovery framework agile planning digital product'),
    blocks: [
      paragraph('O Método GIP, ou Guided Iterative Precision, é uma forma de conduzir projetos digitais com clareza progressiva. Em vez de tentar resolver tudo de uma vez, ele transforma intenção em diagnóstico, arquitetura, micropassos, validação e evolução.'),
      paragraph('O objetivo é reduzir retrabalho. Cada fase existe para diminuir ambiguidade antes da próxima decisão: entender o problema, estruturar o escopo, executar por etapas, validar visual e tecnicamente, documentar e publicar.'),
      heading('Por que ideias soltas geram retrabalho?'),
      paragraph('Uma ideia solta pode parecer clara para quem a imaginou, mas ainda não está pronta para desenvolvimento. Faltam prioridades, fluxos, telas, regras, conteúdo, dados, integrações, critérios de sucesso e limites de escopo.'),
      subheading('As fases do GIP'),
      list(['Fase 0 — Descoberta: entender problema, contexto, público, objetivo, dores e oportunidade.', 'Fase 1 — Arquitetura: definir escopo, stack, estrutura de páginas, dados, fluxos e plano mestre.', 'Fase 2 — Desenvolvimento: executar em micropassos com prompts, código, design e documentação.', 'Fase 3 — Validação: revisar visual, comportamento, conteúdo, responsividade, SEO e governança.', 'Fase 4 — Deploy: publicar, documentar, medir e preparar sustentação.']),
      heading('Exemplo prático'),
      paragraph('Um cliente pede “quero um sistema para organizar meus leads”. No GIP, essa frase vira perguntas: quais tipos de lead? Quais etapas? Quem usa? Quais campos? Haverá contato, histórico, follow-up, dashboard, integração com WhatsApp ou importação de planilha?'),
      diagram('Ideia solta\n        ↓\nDescoberta do problema real\n        ↓\nArquitetura do fluxo e dados\n        ↓\nMicropassos de execução\n        ↓\nValidação com critérios claros\n        ↓\nDeploy, documentação e evolução'),
      heading('O que o GIP evita'),
      list(['Começar pelo código sem entender o objetivo.', 'Transformar reunião em escopo sem documentação.', 'Fazer grandes entregas sem validação intermediária.', 'Acumular decisões invisíveis na cabeça de uma pessoa.', 'Publicar sem critérios de qualidade, SEO, responsividade e manutenção.']),
      heading('Como a Tehkné aplica o GIP'),
      paragraph('Na Tehkné, o GIP organiza o trabalho entre arquitetura, design, desenvolvimento, IA, automações, conteúdo e DevOps. Cada etapa gera uma entrega rastreável: diagnóstico, mapa, prompt, código, validação, commit, documentação e próxima ação.'),
      methodCompare(),
      heading('Quando usar o GIP?'),
      list(['Quando a ideia ainda está confusa, mas precisa virar produto.', 'Quando existe risco de retrabalho por falta de escopo.', 'Quando várias áreas participam do projeto.', 'Quando a entrega precisa de design, tecnologia, conteúdo e automação juntos.', 'Quando a empresa quer aprender com cada fase em vez de apenas receber arquivos finais.']),
      callout('Quer transformar uma ideia solta em plano de execução com método? A Tehkné pode conduzir a fase de descoberta e arquitetura pelo GIP.', 'Iniciar pelo GIP'),
      heading('Conclusão'),
      paragraph('O GIP é uma resposta prática ao improviso. Ele não engessa a criatividade; ele dá forma para que a criatividade vire produto. Quando cada etapa tem clareza, a execução fica mais leve, rastreável e preparada para evolução.')
    ]
  },
  {
    title: 'GIP Tehkné OS: produto, design, código, automação e operação no mesmo sistema',
    slug: 'gip-tehkne-os-produto-design-codigo-automacao-operacao',
    description: 'Entenda a visão do Tehkné OS como um sistema operacional de projeto para unir estratégia, UX, desenvolvimento, IA, automações e evolução.',
    category: 'Tehkné OS',
    tags: ['Tehkné OS', 'GIP', 'Operação', 'IA', 'Governança'],
    cover: '/images/blog/gip-tehkne-os-produto-design-codigo-automacao-operacao-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-05-31',
    readingTime: '13 min de leitura',
    intro: 'Projetos digitais raramente falham por falta de ferramenta. Eles falham porque estratégia, design, código, conteúdo, automação e operação ficam separados demais.',
    imageSuggestions: images('gip-tehkne-os-produto-design-codigo-automacao-operacao', 'Tehkné OS', 'operating system product design code automation workflow'),
    blocks: [
      paragraph('O GIP Tehkné OS nasce como uma visão de sistema operacional para projetos digitais. Não se trata de um software único e fechado, mas de uma forma de organizar trabalho, conhecimento, processos, decisões, agentes, documentação e evolução.'),
      paragraph('A proposta é conectar camadas que normalmente ficam espalhadas: briefing, estratégia, UX, UI, arquitetura, código, IA, automações, Git, deploy, SEO, suporte e melhoria contínua.'),
      heading('O que é o Tehkné OS?'),
      paragraph('Tehkné OS é a lógica operacional que permite transformar projetos em ciclos organizados. Ele funciona como uma camada de governança sobre o trabalho: cada demanda entra, é entendida, estruturada, executada, validada, documentada e evoluída.'),
      subheading('Camadas do sistema'),
      list(['Produto: problema, público, proposta de valor, prioridade e roadmap.', 'Design: UX, UI, identidade, componentes, protótipos e experiência.', 'Código: front-end, back-end, APIs, integrações e versionamento.', 'Automação: fluxos repetitivos, IA, CRM, notificações e documentação.', 'Operação: atendimento, manutenção, métricas, suporte e evolução contínua.', 'Governança: decisões, commits, registros, padrões e controle de qualidade.']),
      heading('Exemplo prático'),
      paragraph('Um projeto de CRM interno pode entrar como demanda comercial. Pelo Tehkné OS, ele passa por descoberta, definição de entidades, fluxo Kanban, painel, API, tema, plugin, documentação, commits e sprints. Cada etapa deixa rastro e prepara a próxima.'),
      diagram('Demanda\n        ↓\nProduto e arquitetura\n        ↓\nDesign e componentes\n        ↓\nCódigo e integração\n        ↓\nAutomação e IA\n        ↓\nValidação e deploy\n        ↓\nOperação e evolução'),
      heading('Por que isso importa?'),
      paragraph('Sem um OS, cada projeto vira uma exceção. O time usa ferramentas diferentes, padrões diferentes e rituais diferentes. Com um OS, o trabalho ganha linguagem comum. As decisões ficam mais rastreáveis e a empresa consegue reaproveitar conhecimento.'),
      heading('Como a Tehkné aplica essa visão'),
      paragraph('A Tehkné usa o GIP Tehkné OS como forma de integrar estratégia, arquitetura, design, desenvolvimento, IA e operação. Isso permite que cada projeto gere não apenas uma entrega, mas também aprendizado reutilizável para os próximos ciclos.'),
      methodCompare(),
      heading('Quando uma empresa precisa de um OS de projeto?'),
      list(['Quando existem muitos projetos simultâneos e pouca padronização.', 'Quando conhecimento fica espalhado em conversas, prints e arquivos soltos.', 'Quando design, código e conteúdo não conversam bem.', 'Quando automações são criadas sem documentação.', 'Quando a empresa quer escalar qualidade sem depender de improviso.']),
      callout('Quer organizar sua operação digital em um sistema de projeto mais claro, rastreável e evolutivo? A Tehkné pode estruturar esse modelo com você.', 'Mapear Tehkné OS'),
      heading('Conclusão'),
      paragraph('GIP Tehkné OS é a visão de que projetos digitais precisam de sistema, não apenas de execução. Quando produto, design, código, automação e operação trabalham sob a mesma lógica, a empresa ganha clareza, velocidade e continuidade.')
    ]
  },
  {
    title: 'White label técnico para agências: como escalar entrega sem perder qualidade',
    slug: 'white-label-tecnico-para-agencias',
    description: 'Entenda como uma software house pode atuar como braço técnico de agências em sites, WordPress, landing pages, integrações, automações e sustentação.',
    category: 'White Label Técnico',
    tags: ['White label', 'Agências', 'Desenvolvimento', 'WordPress', 'Sustentação'],
    cover: '/images/blog/white-label-tecnico-para-agencias-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-06-01',
    readingTime: '11 min de leitura',
    intro: 'Agências costumam vender estratégia, criação, mídia, branding e relacionamento. Mas muitas vezes precisam de um braço técnico confiável para executar sites, integrações, automações e sustentação sem comprometer prazo e qualidade.',
    imageSuggestions: images('white-label-tecnico-para-agencias', 'White Label Técnico', 'white label agency technical partner web development'),
    blocks: [
      paragraph('White label técnico é quando uma operação especializada executa tecnologia nos bastidores para outra empresa ou agência. Para o cliente final, a agência mantém o relacionamento. Para a agência, o parceiro técnico ajuda a entregar com qualidade e previsibilidade.'),
      paragraph('Esse modelo é útil porque nem toda agência quer manter equipe interna completa de desenvolvimento, DevOps, WordPress avançado, integrações e automações. Ter um braço técnico permite escalar sem transformar cada projeto em risco operacional.'),
      heading('O que entra em white label técnico?'),
      paragraph('Pode entrar desenvolvimento de sites, landing pages, WordPress customizado, Next.js, formulários, integrações com CRM, automações, ajustes de performance, manutenção, correções emergenciais, documentação e apoio técnico para propostas.'),
      subheading('Termos que você precisa entender'),
      list(['White label: entrega feita por parceiro, mas apresentada sob a marca da agência contratante.', 'Braço técnico: equipe externa responsável por execução, suporte e orientação técnica.', 'SLA: acordo de prazos, prioridade e atendimento.', 'Escopo fechado: entrega com limites definidos de páginas, funcionalidades e revisões.', 'Sprint evolutiva: ciclo de melhorias e entregas incrementais.', 'Participação técnica autorizada: forma segura de comunicar atuação em portfólio quando permitido.']),
      heading('Exemplo prático'),
      paragraph('Uma agência vende uma campanha com landing page, integração de leads e automação de follow-up. A Tehkné pode estruturar a página, configurar formulário, conectar CRM, validar performance, documentar e entregar para a agência operar a campanha.'),
      diagram('Agência\n        ↓\nEstratégia, cliente e relacionamento\n        ↓\nTehkné como braço técnico\n        ↓\nSite, landing page, integração ou automação\n        ↓\nValidação, documentação e suporte\n        ↓\nAgência entrega com mais capacidade'),
      heading('O que normalmente dá errado'),
      list(['Escopo técnico mal definido antes da venda.', 'Agência promete funcionalidade sem validar complexidade.', 'Falta de canal claro para feedback e aprovação.', 'Ausência de documentação ao final da entrega.', 'Portfólio e autoria comunicados de forma confusa.']),
      heading('Como a Tehkné resolve'),
      paragraph('A Tehkné atua como braço técnico com método: diagnóstico, escopo, estimativa, arquitetura, execução, validação e documentação. Isso permite que a agência mantenha foco em estratégia e cliente, enquanto a entrega técnica avança com governança.'),
      methodCompare(),
      heading('Quando uma agência deve buscar braço técnico?'),
      list(['Quando vende mais projetos do que consegue executar internamente.', 'Quando precisa de WordPress avançado, integrações ou automações.', 'Quando quer evitar contratar equipe fixa antes de validar demanda.', 'Quando precisa melhorar prazo, qualidade e documentação.', 'Quando quer oferecer soluções digitais mais robustas sem perder foco criativo.']),
      callout('Sua agência precisa de um braço técnico para sites, WordPress, integrações ou automações? A Tehkné pode operar nos bastidores com método e confidencialidade.', 'Conversar sobre parceria'),
      heading('Conclusão'),
      paragraph('White label técnico funciona quando há clareza, confiança e processo. Para agências, é uma forma de ampliar capacidade sem comprometer qualidade. Para o cliente final, é uma entrega mais estável. Para o projeto, é menos improviso e mais governança.')
    ]
  },
  {
    title: 'Do portfólio ao produto: como transformar cases em prova técnica e comercial',
    slug: 'do-portfolio-ao-produto-cases-prova-tecnica-comercial',
    description: 'Veja como organizar portfólio, cases, participação técnica, resultados, stack e narrativa para vender confiança sem confundir autoria.',
    category: 'Portfólio & Prova',
    tags: ['Portfólio', 'Cases', 'Prova social', 'Stack', 'Narrativa institucional'],
    cover: '/images/blog/do-portfolio-ao-produto-cases-prova-tecnica-comercial-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-06-02',
    readingTime: '10 min de leitura',
    intro: 'Portfólio não é apenas uma galeria de trabalhos. Quando bem estruturado, ele vira prova técnica, prova comercial e base de confiança para novos projetos.',
    imageSuggestions: images('do-portfolio-ao-produto-cases-prova-tecnica-comercial', 'Portfólio & Prova', 'portfolio case study digital product proof technology'),
    blocks: [
      paragraph('Muitas empresas mostram portfólio como uma lista de logos ou prints. Isso ajuda visualmente, mas não explica o valor da entrega. Um case forte precisa mostrar contexto, desafio, solução, stack, participação, resultado e aprendizado.'),
      paragraph('Também precisa ser honesto sobre autoria. Em ecossistemas com agências, parceiros e participação técnica, é essencial diferenciar projeto próprio, cliente direto, colaboração, white label e atuação autorizada.'),
      heading('O que transforma um portfólio em prova?'),
      paragraph('Prova não é apenas mostrar que algo foi feito. É explicar por que aquela experiência aumenta a confiança do próximo cliente. Um bom case responde: qual era o problema, que papel a empresa teve, quais decisões foram tomadas, qual stack foi usada e que resultado ou aprendizado ficou.'),
      subheading('Termos que você precisa entender'),
      list(['Case: narrativa estruturada de um projeto, com contexto, desafio, solução e resultado.', 'Projeto próprio: produto ou experiência desenvolvida pela própria empresa.', 'Participação técnica: atuação em parte da execução, arquitetura, manutenção ou desenvolvimento.', 'Ecossistema parceiro: projeto em que a empresa atua junto a outra marca, agência ou cliente.', 'Stack: tecnologias e ferramentas usadas na entrega.', 'Regra editorial: critério de comunicação para evitar confusão de autoria e promessa comercial indevida.']),
      heading('Exemplo prático'),
      paragraph('Um projeto de site desenvolvido em parceria pode ser apresentado como participação técnica autorizada, destacando contribuição em WordPress, front-end, integração ou sustentação. Assim, o portfólio gera confiança sem parecer que toda a relação comercial foi direta.'),
      diagram('Projeto ou experiência\n        ↓\nClassificação editorial\n        ↓\nContexto e desafio\n        ↓\nPapel técnico da Tehkné\n        ↓\nStack, entrega e resultado\n        ↓\nProva para novos diagnósticos'),
      heading('O que normalmente dá errado'),
      list(['Usar logos sem explicar o papel real na entrega.', 'Chamar tudo de cliente direto quando houve parceria ou white label.', 'Mostrar prints bonitos sem falar de stack, desafio e resultado.', 'Não separar projetos próprios de experiências técnicas.', 'Deixar cases desatualizados e sem conexão com ofertas atuais.']),
      heading('Como a Tehkné resolve'),
      paragraph('A Tehkné organiza portfólio em camadas: projetos próprios, participação técnica e ecossistemas/parceiros. Essa separação preserva segurança editorial e, ao mesmo tempo, transforma experiência acumulada em capital técnico institucional.'),
      methodCompare(),
      heading('Quando revisar seu portfólio?'),
      list(['Quando os cases parecem bonitos, mas não vendem confiança.', 'Quando há experiências relevantes que não estão sendo comunicadas.', 'Quando existe risco de confundir autoria ou relação comercial.', 'Quando o time comercial precisa de provas para propostas.', 'Quando a empresa quer transformar experiência técnica em autoridade.']),
      callout('Quer transformar experiências, projetos e participações técnicas em um portfólio comercial mais forte? A Tehkné pode estruturar narrativa, dados e páginas de case.', 'Estruturar portfólio'),
      heading('Conclusão'),
      paragraph('Portfólio bom não é vitrine aleatória. É uma ferramenta de confiança. Quando os cases têm narrativa, classificação editorial e conexão com ofertas reais, eles deixam de ser apenas passado e passam a vender o próximo projeto.')
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const latestBlogPosts = blogPosts.slice(0, 3);
