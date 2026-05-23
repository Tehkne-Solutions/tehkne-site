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

export const blogPosts: BlogPost[] = [
  {
    title: 'O que é Arquitetura de Soluções e por que ela evita retrabalho em projetos digitais',
    slug: 'o-que-e-arquitetura-de-solucoes',
    description:
      'Entenda o que é Arquitetura de Soluções, como ela organiza tecnologia, negócio e experiência do usuário, e por que ela reduz retrabalho em sites, sistemas e produtos digitais.',
    category: 'Arquitetura de Soluções',
    tags: ['Arquitetura de Soluções', 'Desenvolvimento Web', 'Produto Digital', 'Tecnologia sob medida', 'Tehkné Solutions'],
    cover: '/images/blog/arquitetura-de-solucoes-cover.jpg',
    author: 'Tehkné Solutions',
    date: '2026-05-22',
    readingTime: '12 min de leitura',
    intro:
      'Antes de uma empresa construir um site, uma plataforma, um sistema interno, uma automação ou um produto digital, existe uma pergunta que quase sempre é ignorada: qual é a melhor forma de transformar essa ideia em uma solução real, sustentável e preparada para evoluir?',
    imageSuggestions: [
      {
        label: 'Capa do artigo',
        source: 'Unsplash / Pexels / Pixabay',
        query: 'architecture software, design planning, software planning',
        path: '/images/blog/arquitetura-de-solucoes-cover.jpg',
        alt: 'Equipe planejando a arquitetura de uma solução digital com notebooks, diagramas e fluxos de projeto.'
      },
      {
        label: 'Imagem de meio do artigo',
        source: 'Pexels',
        query: 'software development, web development, programming',
        path: '/images/blog/arquitetura-de-solucoes-planejamento.jpg',
        alt: 'Planejamento técnico de software com código, fluxos e arquitetura de sistema.'
      },
      {
        label: 'Thumbnail social / Open Graph',
        source: 'Pixabay',
        query: 'software architecture, software development, developer',
        path: '/images/blog/arquitetura-de-solucoes-og.jpg',
        alt: 'Representação visual de arquitetura de software, integrações e estrutura técnica.'
      }
    ],
    blocks: [
      {
        type: 'paragraph',
        text:
          'Muitos projetos digitais começam direto pela execução: escolhe-se uma ferramenta, instala-se um tema, cria-se uma página, contrata-se um desenvolvedor, desenha-se uma tela ou automatiza-se um processo isolado. O problema é que, sem arquitetura, cada decisão vira uma peça solta.'
      },
      {
        type: 'paragraph',
        text:
          'O site pode até ficar bonito, mas não conversa com o CRM. A landing page pode até converter, mas não registra os leads corretamente. O sistema pode até funcionar no início, mas não suporta novas regras de negócio. A automação pode até economizar tempo, mas quebra quando muda uma etapa do processo.'
      },
      {
        type: 'paragraph',
        text:
          'É aqui que entra a Arquitetura de Soluções. Ela é a etapa que organiza tecnologia, negócio, design, dados, integrações e operação antes do desenvolvimento pesado começar. É o trabalho de transformar uma intenção em um plano técnico claro, reduzindo improviso, retrabalho e decisões tomadas no escuro.'
      },
      { type: 'heading', text: 'O que é Arquitetura de Soluções?' },
      {
        type: 'paragraph',
        text:
          'Arquitetura de Soluções é o processo de desenhar como uma solução digital deve funcionar antes de ela ser construída. Ela responde qual problema precisa ser resolvido, quem vai usar a solução, quais telas e fluxos são necessários, quais tecnologias fazem sentido, quais sistemas precisam se conectar e como o projeto poderá evoluir depois do lançamento.'
      },
      {
        type: 'paragraph',
        text:
          'Não é apenas escolher tecnologia. Não é apenas fazer um briefing. Não é apenas desenhar telas bonitas. É a ponte entre estratégia, produto, design e desenvolvimento.'
      },
      {
        type: 'quote',
        text:
          'Na Tehkné, arquitetura é tratada como fundamento: clareza de escopo, clareza de stack, clareza de fluxo, clareza de integração e clareza de evolução.',
        cta: 'Solicitar diagnóstico',
        href: '/contato#contato-form'
      },
      { type: 'heading', text: 'Um exemplo simples' },
      {
        type: 'paragraph',
        text:
          'Imagine que uma empresa quer criar um novo site institucional. Sem arquitetura, o pedido parece simples: precisamos de um site moderno com página inicial, serviços, portfólio e contato. Mas, ao investigar melhor, surgem perguntas importantes.'
      },
      {
        type: 'list',
        items: [
          'O formulário precisa enviar leads para WhatsApp, e-mail ou CRM?',
          'O conteúdo será editado pelo time interno?',
          'Haverá blog, páginas de cases ou conteúdo dinâmico?',
          'O SEO será prioridade desde o início?',
          'O projeto precisa integrar com automações futuras?',
          'Quem vai manter o site depois do lançamento?'
        ]
      },
      {
        type: 'code',
        text:
          'Objetivo do negócio\n        ↓\nJornada do usuário\n        ↓\nEstrutura de páginas\n        ↓\nStack recomendada\n        ↓\nIntegrações necessárias\n        ↓\nModelo de conteúdo\n        ↓\nCritérios de performance, SEO e segurança\n        ↓\nPlano de desenvolvimento e evolução'
      },
      { type: 'heading', text: 'Por que projetos digitais dão retrabalho?' },
      {
        type: 'paragraph',
        text:
          'Projetos digitais raramente dão errado por falta de esforço. Na maioria das vezes, eles dão errado porque começaram sem clareza. O retrabalho aparece quando o escopo muda toda hora, a tecnologia foi escolhida cedo demais, o design não conversa com a operação, as integrações são lembradas no final ou não existe documentação.'
      },
      { type: 'subheading', text: '1. O escopo muda toda hora' },
      {
        type: 'paragraph',
        text:
          'Isso acontece quando o projeto começa sem definir exatamente o que será entregue, o que ficará para depois e quais funcionalidades são realmente necessárias. Sem essa separação, tudo parece prioridade.'
      },
      { type: 'subheading', text: '2. A tecnologia foi escolhida cedo demais' },
      {
        type: 'paragraph',
        text:
          'Às vezes uma empresa escolhe WordPress, Next.js, Shopify, Flutter, Laravel ou alguma ferramenta de automação antes de entender o problema completo. A stack deve servir ao projeto, não o contrário.'
      },
      { type: 'subheading', text: '3. O design não conversa com a operação' },
      {
        type: 'paragraph',
        text:
          'Uma interface bonita pode falhar se não considerar conteúdo real, edição futura, integração com sistemas, responsividade e regras do negócio.'
      },
      { type: 'subheading', text: '4. As integrações são lembradas no final' },
      {
        type: 'paragraph',
        text:
          'CRM, ERP, WhatsApp, e-mail marketing, APIs, gateways de pagamento, dashboards e automações precisam ser pensados desde o começo. Quando entram no final, quase sempre exigem ajustes caros.'
      },
      { type: 'heading', text: 'O que a Arquitetura de Soluções define?' },
      { type: 'subheading', text: 'Camada 1: objetivo de negócio' },
      {
        type: 'paragraph',
        text:
          'Antes de falar de tecnologia, é preciso entender o motivo da solução existir. O objetivo pode ser captar mais leads, reduzir tarefas manuais, organizar atendimento, vender online, apresentar portfólio, criar área logada, integrar sistemas internos ou lançar um produto digital.'
      },
      { type: 'subheading', text: 'Camada 2: usuários e jornada' },
      {
        type: 'paragraph',
        text:
          'Todo sistema tem pessoas usando. Por isso, a arquitetura precisa mapear quem acessa, o que cada perfil precisa fazer, quais etapas existem, onde há fricção e como o usuário chega até a conversão.'
      },
      { type: 'subheading', text: 'Camada 3: funcionalidades' },
      {
        type: 'paragraph',
        text:
          'Aqui entram páginas, formulários, painel administrativo, blog, área logada, cadastro de usuários, filtros, busca, dashboard, relatórios, automações, integrações, notificações e permissões. A arquitetura separa o que é essencial para a primeira versão e o que pode entrar depois.'
      },
      { type: 'subheading', text: 'Camada 4: stack tecnológica' },
      {
        type: 'paragraph',
        text:
          'A stack é o conjunto de tecnologias usado para construir a solução. WordPress pode fazer sentido para sites editáveis, blogs e painéis com CMS. Next.js pode ser a melhor escolha para sites performáticos, produtos digitais e front-ends modernos. PHP, Python, APIs, bancos de dados e automações entram conforme o contexto real do projeto.'
      },
      { type: 'subheading', text: 'Camada 5: integrações' },
      {
        type: 'paragraph',
        text:
          'Poucas soluções digitais vivem sozinhas. Normalmente, elas precisam conversar com WhatsApp, CRM, ERP, e-mail, planilhas, gateways de pagamento, plataformas de anúncios, ferramentas de analytics, sistemas internos e APIs externas.'
      },
      { type: 'subheading', text: 'Camada 6: evolução e manutenção' },
      {
        type: 'paragraph',
        text:
          'Depois que o site, sistema ou plataforma vai ao ar, começam novas demandas: ajustes de conteúdo, melhorias de conversão, novas páginas, otimização de performance, correções, integrações, segurança, backup, métricas e novas funcionalidades. Uma solução bem construída não é apenas funcional no lançamento. Ela é sustentável no tempo.'
      },
      {
        type: 'compare',
        leftTitle: 'Sem arquitetura',
        left: ['Escopo confuso', 'Stack escolhida no impulso', 'Integrações lembradas no final', 'Design desconectado da operação', 'Retrabalho constante', 'Manutenção difícil'],
        rightTitle: 'Com arquitetura',
        right: ['Escopo claro', 'Stack adequada ao projeto', 'Integrações planejadas', 'Design conectado à jornada', 'Menos retrabalho', 'Evolução previsível']
      },
      { type: 'heading', text: 'O papel da Arquitetura de Soluções na Tehkné' },
      {
        type: 'paragraph',
        text:
          'Na Tehkné, a Arquitetura de Soluções é o ponto de partida para transformar ideias em sistemas digitais reais. Ela conecta negócio, produto, design, desenvolvimento e operação para criar sites institucionais de alta performance, landing pages, portais, blogs, sistemas internos, CRMs personalizados, dashboards, plugins WordPress, temas customizados, integrações com APIs, automações comerciais e plataformas sob medida.'
      },
      {
        type: 'quote',
        text:
          'O objetivo não é apenas entregar código. O objetivo é entregar uma solução que faça sentido para a empresa, para os usuários e para a operação.',
        cta: 'Planejar meu projeto',
        href: '/contato#contato-form'
      },
      { type: 'heading', text: 'Quando sua empresa precisa de Arquitetura de Soluções?' },
      {
        type: 'list',
        items: [
          'Quando existe uma ideia, mas ainda não existe clareza técnica.',
          'Quando o projeto envolve site, sistema, automação ou integração.',
          'Quando há mais de uma tecnologia possível.',
          'Quando o time interno não sabe por onde começar.',
          'Quando o projeto anterior deu retrabalho.',
          'Quando o site atual não conversa com a operação.',
          'Quando uma agência precisa de apoio técnico white label.',
          'Quando há necessidade de transformar operação em sistema.'
        ]
      },
      { type: 'heading', text: 'Arquitetura não é burocracia. É economia de energia.' },
      {
        type: 'paragraph',
        text:
          'Existe uma ideia errada de que planejar demais atrasa o projeto. Na prática, o que atrasa é construir sem direção. Arquitetura de Soluções não significa criar documentos infinitos ou reuniões desnecessárias. Significa tomar as decisões certas antes que elas se tornem caras demais para mudar.'
      },
      {
        type: 'paragraph',
        text:
          'Um bom processo de arquitetura deve ser objetivo, visual e executável. Ele precisa produzir mapa do projeto, escopo funcional, recomendação de stack, fluxo de usuários, estrutura de páginas ou módulos, integrações previstas, riscos técnicos, prioridades e plano de execução.'
      },
      { type: 'heading', text: 'Como a Tehkné conduz essa etapa' },
      {
        type: 'list',
        items: [
          'Diagnóstico: entendimento do momento da empresa, problema, objetivos e restrições.',
          'Mapeamento: organização de fluxos, usuários, sistemas envolvidos, páginas, módulos e integrações.',
          'Priorização: separação do que é essencial para a primeira entrega e do que pode evoluir depois.',
          'Definição técnica: recomendação de stack, arquitetura, estrutura do projeto, dependências e riscos.',
          'Plano de execução: transformação do mapa em etapas claras de design, desenvolvimento, validação e deploy.'
        ]
      },
      {
        type: 'quote',
        text:
          'Sua empresa tem uma ideia, mas ainda não sabe qual tecnologia usar ou por onde começar? A Tehkné pode ajudar a transformar essa intenção em um mapa técnico claro.',
        cta: 'Solicitar diagnóstico',
        href: '/contato#contato-form'
      },
      { type: 'heading', text: 'Conclusão' },
      {
        type: 'paragraph',
        text:
          'Arquitetura de Soluções é uma das etapas mais importantes de qualquer projeto digital. Ela evita que uma ideia boa se perca em decisões soltas, ferramentas mal escolhidas, integrações improvisadas e retrabalho constante.'
      },
      {
        type: 'paragraph',
        text:
          'Quando bem aplicada, ela transforma complexidade em clareza. A empresa entende o que será construído. O time entende como será construído. O usuário recebe uma experiência melhor. A operação ganha uma solução mais estável. O projeto fica preparado para evoluir.'
      },
      {
        type: 'quote',
        text:
          'Quer tirar sua ideia do campo abstrato e transformar em um plano técnico real? Solicite um diagnóstico e vamos mapear a melhor arquitetura para o seu projeto.',
        cta: 'Falar com a Tehkné',
        href: '/contato#contato-form'
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
