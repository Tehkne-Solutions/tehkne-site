import type { Metadata } from 'next';

export type PortfolioTone = 'violet' | 'cyan' | 'blue' | 'orange' | 'amber' | 'pink';
export type PortfolioLevel = 'Projeto Tehkné' | 'Produto interno' | 'Participação técnica' | 'Participação técnica autorizada' | 'Ecossistema parceiro' | 'Laboratório Tehkné' | 'Histórico profissional';

export type PortfolioCase = {
  slug: string;
  title: string;
  level: PortfolioLevel;
  category: string;
  sector: string;
  stack: string[];
  summary: string;
  challenge: string;
  delivery: string;
  outcome: string;
  imageLabel: string;
  status: string;
  tone: PortfolioTone;
  featured?: boolean;
  source?: string;
};

export const portfolioCases: PortfolioCase[] = [
  {
    slug: 'tehkne-flow',
    title: 'Tehkné Flow',
    level: 'Projeto Tehkné',
    category: 'Sistema / Produto',
    sector: 'Gestão e operação digital',
    stack: ['Next.js', 'React', 'IA', 'Analytics', 'Gestão de Operações'],
    summary: 'Produto interno para organizar projetos, tarefas, automações, indicadores e visão operacional de times digitais.',
    challenge: 'Centralizar decisões, tarefas, contexto e prioridades que normalmente ficam espalhados entre chats, planilhas, documentos e repositórios.',
    delivery: 'Arquitetura de produto, UI dark premium, módulos de dashboard, lógica de governança e base para automações e agentes.',
    outcome: 'Demonstra a capacidade da Tehkné de transformar método, operação e tecnologia em produto digital estruturado.',
    imageLabel: 'Dashboard operacional',
    status: 'Produto próprio / laboratório',
    tone: 'violet',
    featured: true
  },
  {
    slug: 'vacina-one',
    title: 'Vacina One',
    level: 'Projeto Tehkné',
    category: 'Site institucional',
    sector: 'Saúde',
    stack: ['Next.js', 'Saúde', 'Conteúdo educativo', 'Franquias'],
    summary: 'Estrutura institucional moderna para clínica de vacinação, com comunicação clara, navegação objetiva e base preparada para expansão.',
    challenge: 'Criar presença digital confiável para saúde, com clareza sobre serviços, cuidado, vacinação, unidades e relacionamento com o público.',
    delivery: 'Site em Next.js, arquitetura de páginas, copy institucional, navegação responsiva e base editorial para conteúdo educativo.',
    outcome: 'Case forte para demonstrar construção de site institucional moderno, rápido e preparado para crescimento comercial.',
    imageLabel: 'Saúde e vacinação',
    status: 'Projeto direto / staging',
    tone: 'cyan',
    featured: true
  },
  {
    slug: 'unti-digital',
    title: 'UNTI Digital',
    level: 'Ecossistema parceiro',
    category: 'Site / Plataforma',
    sector: 'Tecnologia e operação digital',
    stack: ['Next.js', 'Integrações', 'APIs', 'Operação digital'],
    summary: 'Atuação como braço técnico em operação digital com foco em sites, plataformas, integrações, APIs e sustentação.',
    challenge: 'Apoiar uma operação digital com demandas recorrentes de tecnologia, performance, evolução, integrações e projetos white label.',
    delivery: 'Suporte técnico, desenvolvimento, manutenção, arquitetura, automações, melhorias e evolução de projetos conectados ao ecossistema UNTI.',
    outcome: 'Um dos pilares estratégicos do portfólio, mostrando atuação contínua como braço de tecnologia para outra operação digital.',
    imageLabel: 'Operação técnica',
    status: 'Cliente fixo / ecossistema',
    tone: 'blue',
    featured: true
  },
  {
    slug: 'savol-seminovos',
    title: 'Savol Seminovos',
    level: 'Participação técnica',
    category: 'Catálogo dinâmico',
    sector: 'Automotivo',
    stack: ['WordPress', 'Elementor', 'JetEngine', 'Filtros', 'Catálogo'],
    summary: 'Portal automotivo com listagem de veículos, filtros comerciais, cards dinâmicos e estrutura de manutenção contínua.',
    challenge: 'Organizar veículos, marcas, modelos, unidades, preços e informações comerciais em uma experiência clara e editável.',
    delivery: 'WordPress avançado com estrutura dinâmica, templates, filtros, cards comerciais, ajustes técnicos e sustentação.',
    outcome: 'Demonstra domínio em WordPress além do institucional: catálogo, dados, filtros e operação comercial.',
    imageLabel: 'Catálogo automotivo',
    status: 'Participação técnica',
    tone: 'orange',
    featured: true
  },
  {
    slug: 'beggin',
    title: 'Beggin',
    level: 'Participação técnica',
    category: 'Marca / Produto',
    sector: 'Produto e varejo',
    stack: ['WordPress', 'Elementor', 'Produto', 'Performance'],
    summary: 'Site de marca e produto com narrativa visual, experiência editorial, páginas comerciais e ajustes técnicos de performance.',
    challenge: 'Construir uma experiência de produto mais visual, editável e adequada à rotina de marketing e comunicação.',
    delivery: 'Páginas comerciais, ajustes visuais, otimização de assets, estrutura de produto e melhorias de performance.',
    outcome: 'Case útil para apresentar design, WordPress, produto, landing pages e refinamento visual para marcas.',
    imageLabel: 'Produto e marca',
    status: 'Participação técnica',
    tone: 'amber',
    featured: true
  },
  {
    slug: 'hnk-agent',
    title: 'HNK Agent / GIP Tehkné',
    level: 'Produto interno',
    category: 'IA / Sistema operacional',
    sector: 'IA e conhecimento',
    stack: ['GIP', 'Agentes', 'Prompts', 'Automação', 'Documentação viva'],
    summary: 'Sistema conceitual e operacional para arquitetura de soluções, agentes, documentação viva e governança de criação digital.',
    challenge: 'Transformar conhecimento, processos, compêndios e históricos em um agente útil para planejar, executar e evoluir projetos.',
    delivery: 'Arquitetura de instruções, fluxo GIP, núcleos de especialidade, documentação mestre e integração com processos da Tehkné.',
    outcome: 'Base estratégica do ecossistema Tehkné: método, IA, arquitetura e operação como produto.',
    imageLabel: 'Agentes e GIP',
    status: 'Produto interno',
    tone: 'cyan',
    featured: true
  },
  {
    slug: 'meme-digital',
    title: 'Meme Digital',
    level: 'Ecossistema parceiro',
    category: 'Martech / Web',
    sector: 'Marketing e tecnologia',
    stack: ['WordPress', 'Sites', 'Marketing', 'Suporte'],
    summary: 'Experiência técnica em ecossistema martech, com sites institucionais, suporte a operações digitais e projetos web.',
    challenge: 'Atuar em demandas de criação, manutenção, comunicação e sustentação de sites em contexto de agência.',
    delivery: 'WordPress, ajustes visuais, suporte técnico, páginas comerciais, conteúdo e melhorias para operação digital.',
    outcome: 'Reforça a experiência acumulada em agência, marketing digital, sites e sustentação técnica.',
    imageLabel: 'Martech e sites',
    status: 'Histórico profissional',
    tone: 'pink'
  },
  {
    slug: 'savana-publicidade',
    title: 'Savana Publicidade',
    level: 'Ecossistema parceiro',
    category: 'Agência / Web',
    sector: 'Publicidade e comunicação',
    stack: ['WordPress', 'Elementor', 'Branding', 'Campanhas'],
    summary: 'Experiência em ecossistema de agência com sites, campanhas, comunicação visual e sustentação técnica para projetos digitais.',
    challenge: 'Dar suporte técnico e criativo a projetos de comunicação que precisam sair do conceito e virar presença digital funcional.',
    delivery: 'Landing pages, sites, ajustes visuais, manutenção, UX e suporte para campanhas e operações comerciais.',
    outcome: 'Mostra atuação híbrida de desenvolvimento, design e marketing em ambiente de agência.',
    imageLabel: 'Agência e branding',
    status: 'Histórico profissional',
    tone: 'violet'
  },
  {
    slug: 'tehkne-portfolio-indexer',
    title: 'Tehkné Portfolio Indexer',
    level: 'Laboratório Tehkné',
    category: 'Automação / Inventário',
    sector: 'Governança e portfólio',
    stack: ['Node.js', 'GitHub API', 'Playwright', 'JSON', 'Automação'],
    summary: 'Robô de inventário para cruzar repositórios, clientes, stacks, links públicos e prints em uma base de portfólio reutilizável.',
    challenge: 'Transformar histórico técnico disperso em uma base estruturada de portfólio para alimentar o site institucional.',
    delivery: 'Crawler GitHub, detecção de stack, relatório Markdown, JSON gerado e captura de screenshots públicas.',
    outcome: 'Cria base para manter o portfólio vivo e rastreável com dados reais.',
    imageLabel: 'Inventário automático',
    status: 'Laboratório / automação',
    tone: 'blue'
  },
  {
    slug: 'tehkne-guardian-wp',
    title: 'Tehkné Guardian WP',
    level: 'Laboratório Tehkné',
    category: 'Plugin WordPress',
    sector: 'WordPress e segurança',
    stack: ['PHP', 'WordPress', 'GitHub', 'Backup', 'Automação'],
    summary: 'Conceito de plugin para gestão de falhas, backup, restauração, agendamento e integração com GitHub/Drive.',
    challenge: 'Criar uma camada de proteção e versionamento para sites WordPress com foco em restauração rápida e governança.',
    delivery: 'Arquitetura de produto, escopo técnico, módulos de backup, GitHub, Drive e restauração planejada.',
    outcome: 'Mostra capacidade de pensar produto WordPress próprio, não apenas customizar painel existente.',
    imageLabel: 'Plugin e backup',
    status: 'Produto em estruturação',
    tone: 'orange'
  },
  {
    slug: 'lexia-game',
    title: 'Lexia Game',
    level: 'Laboratório Tehkné',
    category: 'Game / Produto digital',
    sector: 'Jogos e educação',
    stack: ['Game Design', 'Narrativa', 'UX', 'Produto'],
    summary: 'Projeto de jogo/laboratório para aplicar narrativa, progressão, produto digital e design de experiência.',
    challenge: 'Transformar conceitos de game design, aprendizagem e narrativa em um produto interativo com identidade própria.',
    delivery: 'Arquitetura de mundo, lógica de progressão, design de experiência e documentação de produto.',
    outcome: 'Amplia o portfólio para games, educação e experiências interativas.',
    imageLabel: 'Game e educação',
    status: 'Laboratório',
    tone: 'pink'
  },
  {
    slug: 'hnk-game-gip-universe',
    title: 'HNK Game / GIP Universe',
    level: 'Laboratório Tehkné',
    category: 'MMORPG / Sistema vivo',
    sector: 'Game, IA e narrativa',
    stack: ['Game Design', 'BYOND', 'IA', 'Lore', 'Sistemas'],
    summary: 'Universo de jogo e sistema narrativo para unir agentes, lore, progressão, IA e mundo vivo inspirado no HNK.',
    challenge: 'Criar uma base de mundo virtual onde sistemas, personagens, agentes e histórias possam evoluir como seres vivos.',
    delivery: 'GDD, sistemas de guardiões, constelações, histórico de NPCs, progressão e arquitetura narrativa.',
    outcome: 'Demonstra visão de produto avançada em games, simulação, IA e sistemas vivos.',
    imageLabel: 'MMORPG e IA',
    status: 'Laboratório de game design',
    tone: 'violet'
  },
  {
    slug: 'academia-terapeuta-cristao',
    title: 'Academia Terapeuta Cristão',
    level: 'Laboratório Tehkné',
    category: 'App / Educação',
    sector: 'Educação e conteúdo',
    stack: ['App', 'Conteúdo', 'LMS', 'Mobile', 'Produto'],
    summary: 'Projeto de aplicação educacional com foco em conteúdos, trilhas, aulas e experiência de aprendizagem.',
    challenge: 'Organizar conteúdo formativo em uma experiência digital acessível, escalável e orientada a jornada.',
    delivery: 'Estrutura de produto, UX, módulos educacionais e base para app/plataforma de aprendizagem.',
    outcome: 'Mostra experiência em educação digital, conteúdo didático e produto mobile.',
    imageLabel: 'Educação e app',
    status: 'Laboratório / app',
    tone: 'cyan'
  },
  {
    slug: 'hnk-english-app',
    title: 'HNK English App',
    level: 'Laboratório Tehkné',
    category: 'App / Aprendizagem',
    sector: 'Educação e idiomas',
    stack: ['Mobile', 'Conteúdo', 'UX', 'Gamificação'],
    summary: 'Aplicativo de aprendizagem de inglês com base em conteúdo, organização didática e experiência progressiva.',
    challenge: 'Criar uma jornada de aprendizado clara, motivadora e estruturada para uso recorrente em mobile.',
    delivery: 'Arquitetura de app, fluxos, trilhas de conteúdo, UX educacional e base de gamificação.',
    outcome: 'Demonstra atuação em apps, educação, conteúdo didático e gamificação.',
    imageLabel: 'Idiomas e mobile',
    status: 'Laboratório / app',
    tone: 'blue'
  },
  {
    slug: 'bytebot',
    title: 'Bytebot',
    level: 'Laboratório Tehkné',
    category: 'Automação / IA',
    sector: 'IA e agentes',
    stack: ['Automação', 'Agentes', 'Pipelines', 'IA'],
    summary: 'Base conceitual para automação, agentes e rotinas operacionais conectadas ao ecossistema Tehkné/HNK.',
    challenge: 'Construir uma ponte entre intenção, execução automatizada, documentação e operação assistida por IA.',
    delivery: 'Arquitetura de agentes, pipelines, integrações e visão de sistema operacional assistido.',
    outcome: 'Reforça a competência da Tehkné em IA aplicada, automação e sistemas internos.',
    imageLabel: 'Agentes e automação',
    status: 'Laboratório',
    tone: 'cyan'
  },
  {
    slug: 'gip-os',
    title: 'GIP OS',
    level: 'Produto interno',
    category: 'Sistema operacional de criação',
    sector: 'Produto e governança',
    stack: ['GIP', 'IA', 'Governança', 'Documentação', 'DevOps'],
    summary: 'Sistema operacional conceitual para guiar projetos da intenção ao produto com precisão iterativa e rastreabilidade.',
    challenge: 'Padronizar criação, arquitetura, validação, deploy e evolução sem perder contexto entre ferramentas e conversas.',
    delivery: 'Framework, documentação, módulos, fluxos de agentes e lógica de governança de projetos.',
    outcome: 'Base metodológica para transformar qualquer projeto em processo repetível e evolutivo.',
    imageLabel: 'Sistema operacional GIP',
    status: 'Produto interno',
    tone: 'violet'
  },
  {
    slug: 'gip-framework',
    title: 'GIP Framework',
    level: 'Produto interno',
    category: 'Framework / Método',
    sector: 'Governança e processo',
    stack: ['Processo', 'IA', 'Documentação', 'DevOps'],
    summary: 'Framework de precisão iterativa para descoberta, arquitetura, desenvolvimento, validação e deploy.',
    challenge: 'Evitar retrabalho e decisões soltas em projetos complexos envolvendo tecnologia, design, marketing e operação.',
    delivery: 'Fases, checklists, papéis, prompts, rituais e lógica de validação por etapas.',
    outcome: 'Diferencial metodológico da Tehkné para vender previsibilidade e execução estruturada.',
    imageLabel: 'Método GIP',
    status: 'Framework próprio',
    tone: 'blue'
  },
  {
    slug: 'gip-plugins',
    title: 'GIP Plugins',
    level: 'Laboratório Tehkné',
    category: 'Plugins / WordPress',
    sector: 'WordPress avançado',
    stack: ['PHP', 'WordPress', 'Plugins', 'Automação'],
    summary: 'Base de experimentos e recursos próprios para ampliar WordPress com funcionalidades específicas.',
    challenge: 'Criar soluções reaproveitáveis em vez de depender apenas de plugins genéricos e ajustes manuais.',
    delivery: 'Arquiteturas de plugin, snippets, módulos e padrões técnicos para WordPress avançado.',
    outcome: 'Reforça a experiência em desenvolvimento próprio para WordPress.',
    imageLabel: 'Plugins WP',
    status: 'Laboratório',
    tone: 'orange'
  },
  {
    slug: 'gip-wp-manager',
    title: 'GIP WP Manager',
    level: 'Laboratório Tehkné',
    category: 'WordPress / Gestão',
    sector: 'WordPress e manutenção',
    stack: ['WordPress', 'PHP', 'Gestão', 'Automação'],
    summary: 'Conceito de ferramenta para gerenciar projetos WordPress, manutenção, tarefas e rotinas técnicas.',
    challenge: 'Reduzir operação manual em múltiplos sites WordPress e organizar manutenção técnica recorrente.',
    delivery: 'Arquitetura de módulos, visão de painel, rotinas e automações voltadas para sustentação.',
    outcome: 'Mostra maturidade em gestão de parque WordPress e manutenção escalável.',
    imageLabel: 'Gestão WordPress',
    status: 'Laboratório',
    tone: 'amber'
  },
  {
    slug: 'dafra-form-leads-capture',
    title: 'Dafra Form Leads Capture',
    level: 'Participação técnica',
    category: 'Automação comercial',
    sector: 'Automotivo',
    stack: ['Formulários', 'Leads', 'Integrações', 'WordPress'],
    summary: 'Automação de captura de leads para operação comercial automotiva, conectando formulário, dados e atendimento.',
    challenge: 'Capturar oportunidades comerciais com mais organização, rastreabilidade e menor atrito entre página e operação.',
    delivery: 'Estrutura de formulário, processamento de dados, ajustes técnicos e integração com fluxo comercial.',
    outcome: 'Demonstra atuação prática em conversão, automação e dados comerciais.',
    imageLabel: 'Leads automotivos',
    status: 'Participação técnica',
    tone: 'orange'
  },
  {
    slug: 'liugong-br',
    title: 'LiuGong BR',
    level: 'Participação técnica',
    category: 'Site / Indústria',
    sector: 'Indústria e máquinas',
    stack: ['Web', 'Catálogo', 'Institucional', 'SEO'],
    summary: 'Experiência técnica em presença digital para marca industrial, máquinas, páginas de produto e comunicação B2B.',
    challenge: 'Apresentar portfólio técnico e institucional de forma clara para público comercial e industrial.',
    delivery: 'Ajustes, estruturação de páginas, conteúdo e suporte técnico para presença digital.',
    outcome: 'Amplia a vitrine para indústria, B2B, catálogo e comunicação técnica.',
    imageLabel: 'Indústria B2B',
    status: 'Participação técnica',
    tone: 'amber'
  },
  {
    slug: 'clinica-arthaje',
    title: 'Clínica Arthaje',
    level: 'Participação técnica',
    category: 'Site institucional',
    sector: 'Saúde',
    stack: ['WordPress', 'UX', 'SEO local', 'Contato'],
    summary: 'Presença digital para clínica com foco em confiança, clareza de serviços e contato qualificado.',
    challenge: 'Transformar uma operação de saúde em uma experiência digital clara, segura e orientada à conversão.',
    delivery: 'Estrutura institucional, UX, seções de serviços, ajustes visuais e otimização de contato.',
    outcome: 'Case de saúde para demonstrar cuidado, credibilidade e conversão local.',
    imageLabel: 'Clínica e saúde',
    status: 'Participação técnica',
    tone: 'cyan'
  },
  ...[
    ['grupo-savol','Grupo Savol','Automotivo / Ecossistema','Automotivo',['Next.js','Tailwind CSS','CRM'],'Case UNTI com atuação técnica em marcas, operação e captação regional para ecossistema automotivo.','Estruturar presença digital e relacionamento comercial para grupo automotivo regional.','Participação técnica em interface, arquitetura web, fluxo de captação e sustentação.','Experiência relevante para automotivo, captação de leads e presença institucional.','Grupo automotivo','blue'],
    ['toriba','Toriba','Automotivo / Leads','Automotivo',['Next.js','Framer Motion','CRM'],'Plataforma de leads com foco em velocidade comercial, captação e experiência digital objetiva.','Gerar demanda qualificada e organizar jornada de contato para operação automotiva.','Landing/site com foco em performance, contato e clareza comercial.','Demonstra foco em captação e UX comercial para venda consultiva.','Leads automotivos','cyan'],
    ['auto-shopping-tiquatira','Auto Shopping Tiquatira','Automotivo / Catálogo','Automotivo',['API','Catálogo web','SEO'],'Catálogo conectado ao estoque real, com organização comercial e estrutura preparada para busca e conversão.','Exibir grande volume de veículos com filtros, informação clara e manutenção viável.','Arquitetura de catálogo, integração com dados e experiência de busca.','Mostra domínio em catálogo, dados e jornada comercial automotiva.','Catálogo de veículos','orange'],
    ['dr-eduardo-ursolino','Dr. Eduardo Ursolino','Saúde / Odontologia','Saúde',['Next.js','SEO','Framer Motion'],'Case de autoridade clínica e agendamento premium, com foco em confiança, clareza e posicionamento profissional.','Gerar autoridade e contato qualificado para marca médica/odontológica.','Site premium, copy, jornada de serviços e otimização local.','Vitrine de saúde com estética profissional e foco em conversão.','Autoridade clínica','cyan'],
    ['dr-alessandro-linder','Dr. Alessandro Linder','Saúde / Estética','Saúde',['Next.js','SEO local','UX'],'Experiência digital para saúde e estética, com foco em confiança clínica e geração de consultas qualificadas.','Criar presença digital premium para serviços de estética e saúde.','Interface, conteúdo, SEO local e fluxo de contato.','Demonstra posicionamento profissional em saúde estética.','Saúde estética','violet'],
    ['uroclinica-de-joinville','Uroclínica de Joinville','Saúde / Clínica especializada','Saúde',['Next.js','Tailwind CSS','SEO local'],'Clareza institucional, contato qualificado e navegação objetiva para clínica especializada.','Organizar especialidades, confiança e contato em jornada simples.','Site institucional com SEO local e estrutura responsiva.','Fortalece portfólio em clínicas especializadas.','Clínica especializada','blue'],
    ['hospital-thereza-mussi','Hospital Thereza Mussi','Saúde / Hospital','Saúde',['Next.js','Conteúdo','SEO local'],'Organização de serviços e confiança digital para instituição hospitalar, com base de conteúdo escalável.','Transmitir credibilidade institucional e facilitar acesso a informações de serviços.','Arquitetura de conteúdo, páginas institucionais e navegação clara.','Case de maior complexidade institucional em saúde.','Hospital e serviços','cyan'],
    ['human-clinic','Human Clinic','Saúde / Clínica premium','Saúde',['Next.js','UX premium','Tailwind CSS'],'Refinamento visual e fluxo de contato mais objetivo para experiência clínica premium.','Comunicar sofisticação, confiança e clareza para clínica premium.','UI premium, organização de serviços e fluxo de contato.','Demonstra capacidade estética em projetos de saúde de alto valor.','Clínica premium','violet'],
    ['dra-isabel-borelli','Dra. Isabel Borelli','Saúde / Estética','Saúde',['Next.js','SEO local','UX'],'Posicionamento profissional, proximidade e jornada de contato clara para marca médica pessoal.','Construir autoridade digital para marca pessoal em saúde.','Site com conteúdo, serviços, SEO local e contato direto.','Mostra atuação em marca pessoal médica.','Marca médica','pink'],
    ['dra-gionvana-bombonatto','Dra. Gionvana Bombonatto','Saúde / Estética','Saúde',['Next.js','UX premium','SEO local'],'Autoridade médica com experiência premium, visual refinado e arquitetura voltada para conversão.','Unir credibilidade médica, estética visual e conversão de consultas.','UX premium, conteúdo, SEO e CTA de contato.','Demonstra repertório em estética e saúde premium.','Estética premium','violet'],
    ['dr-thiago-azuaga','Dr. Thiago Azuaga','Saúde especializada','Saúde',['Next.js','Tailwind CSS','SEO local'],'Confiança e jornada de contato enxuta para atuação médica especializada.','Apresentar especialidade médica de forma objetiva e confiável.','Site institucional, SEO e arquitetura de contato.','Expande atuação em saúde especializada.','Especialista médico','blue'],
    ['grupo-aljr','Grupo ALJR','Corporativo / Grupo empresarial','Corporativo',['Next.js','SEO','UX B2B'],'Marca corporativa e relacionamento comercial com foco em clareza institucional e presença B2B.','Organizar presença institucional para grupo empresarial e audiência B2B.','Site corporativo, estrutura de conteúdo e comunicação institucional.','Case de comunicação B2B e marca empresarial.','Grupo empresarial','violet'],
    ['conect-7g','Conect 7G','Tecnologia & Serviços','Tecnologia',['Next.js','Performance web','Tailwind CSS'],'Autoridade técnica e geração de demanda para empresa de tecnologia e serviços.','Apresentar serviços técnicos com clareza, performance e apelo comercial.','Site rápido, responsivo, com estrutura de oferta e contato.','Demonstra atuação em tecnologia B2B.','Tecnologia e serviços','cyan'],
    ['landing-page-conect-7g','Landing Page Conect 7G','Landing page / CRO','Tecnologia',['Next.js','Framer Motion','CRO'],'Landing page com foco em captação de leads, resposta rápida e comunicação objetiva.','Criar página de campanha para conversão rápida.','LP, copy, CTA, motion e fluxo de contato.','Mostra habilidade em CRO e landing pages.','Landing page CRO','cyan'],
    ['clube-recreativo-de-sumare','Clube Recreativo de Sumaré','Institucional & Serviços','Institucional',['Next.js','Conteúdo','Performance web'],'Agenda, serviços e relacionamento institucional organizados em uma experiência digital clara.','Organizar informações, serviços, agenda e relacionamento com associados.','Site institucional com conteúdo estruturado e navegação clara.','Case institucional comunitário/serviços.','Clube e agenda','blue'],
    ['odete-design','Odete Design','Marca criativa','Criativo',['Next.js','UX premium','SEO'],'Posicionamento premium e percepção de valor para marca criativa com presença digital refinada.','Transformar portfólio criativo em experiência digital elegante.','Design, UX, conteúdo e estrutura premium.','Mostra sensibilidade estética e posicionamento de marca.','Marca criativa','pink'],
    ['renata-pimentel','Renata Pimentel','Marca pessoal','Marca pessoal',['Next.js','SEO local','UX'],'Autoridade, oferta e proximidade em uma presença digital orientada a contato qualificado.','Construir presença para marca pessoal com clareza de oferta.','Site, conteúdo, UX e CTA de contato.','Case de personal branding e conversão.','Marca pessoal','violet'],
    ['wiki-das-celebridades','Plataforma Wiki das Celebridades','Plataforma web / Conteúdo','Mídia e conteúdo',['Next.js','SEO técnico','Conteúdo'],'Estrutura editorial, navegação e escala para plataforma web orientada a conteúdo.','Criar plataforma escalável para grande volume de conteúdo indexável.','Arquitetura editorial, SEO técnico e navegação.','Demonstra capacidade em conteúdo, mídia e SEO em escala.','Plataforma editorial','blue'],
    ['nerd-ao-maximo','Nerd ao Máximo','Mídia & Conteúdo','Mídia e comunidade',['Next.js','Conteúdo','Performance web'],'Comunidade, conteúdo e experiência editorial para ecossistema de mídia digital.','Organizar presença de mídia com performance e navegação clara.','Site de conteúdo, arquitetura editorial e experiência responsiva.','Case para mídia, comunidade e conteúdo.','Mídia geek','cyan'],
    ['catalogo-grupo-niks','Catálogo Grupo Niks','Indústria / Catálogo digital','Indústria',['Next.js','Catálogo digital','Tailwind CSS'],'Organização comercial da oferta em catálogo digital estruturado para apresentação e venda.','Apresentar produtos industriais de forma clara e comercial.','Catálogo digital, cards, categorias e estrutura responsiva.','Mostra atuação em catálogo B2B/indústria.','Catálogo industrial','orange'],
    ['ecommerce-onile-alimentos','E-commerce Onile Alimentos','E-commerce','Alimentos e varejo',['Next.js','E-commerce','UX'],'Jornada de compra mais clara para operação de alimentos, com foco em navegação e conversão.','Estruturar compra e apresentação de produtos de alimentos.','Arquitetura de e-commerce, UX, categorias e fluxo comercial.','Demonstra experiência em varejo e comércio digital.','E-commerce alimentos','amber'],
    ['suporteshop','Website SuporteShop','E-commerce & Suporte','E-commerce e serviços',['Next.js','SEO técnico','UX'],'Serviços e operação de suporte digital organizados em presença web comercial.','Comunicar oferta de suporte para e-commerce com clareza comercial.','Website, SEO, UX e estrutura de serviços.','Case para serviços digitais e e-commerce.','Suporte e e-commerce','orange'],
    ['sos-pistolas','SOS Pistolas','Indústria & Varejo','Indústria e varejo',['Next.js','SEO local','Performance web'],'Nicho técnico com clareza comercial, arquitetura de conteúdo e navegação objetiva.','Organizar conteúdo e oferta técnica de nicho com boa navegação.','Site responsivo, SEO local e clareza de serviços/produtos.','Mostra atuação em nichos técnicos e comerciais.','Nicho técnico','amber']
  ].map(([slug, title, category, sector, stack, summary, challenge, delivery, outcome, imageLabel, tone]) => ({
    slug: slug as string,
    title: title as string,
    level: 'Participação técnica autorizada' as PortfolioLevel,
    category: category as string,
    sector: sector as string,
    stack: stack as string[],
    summary: summary as string,
    challenge: challenge as string,
    delivery: delivery as string,
    outcome: outcome as string,
    imageLabel: imageLabel as string,
    status: 'Ecossistema UNTI',
    tone: tone as PortfolioTone,
    source: 'UNTI Digital'
  })),
  ...[
    ['mais-de-70-sites-wordpress','Mais de 70 sites WordPress','WordPress / Sustentação','WordPress e web',['WordPress','Elementor','JetEngine','PHP','Performance'],'Experiência acumulada em criação, manutenção e melhoria de mais de 70 sites WordPress ao longo de mais de 7 anos.','Atender demandas variadas de sites institucionais, landing pages, catálogos, blogs, áreas comerciais e sustentação contínua.','Criação, ajustes, redesigns, performance, manutenção, plugins, temas, integrações e operação recorrente.','A principal prova de volume e maturidade para clientes que querem saber quantidade, repertório e experiência prática.','70+ sites WP','orange'],
    ['plugins-e-temas-proprios','Plugins e temas próprios','WordPress avançado','WordPress e produto',['PHP','WordPress','Plugins','Temas','CPT'],'Criações próprias de plugins, temas, CPTs, componentes e funcionalidades customizadas para resolver demandas reais.','Sair do limite do editor visual e criar funcionalidades editáveis, reaproveitáveis e integradas ao painel do cliente.','Plugins, temas, shortcodes, CPTs, templates, campos dinâmicos, automações e snippets técnicos.','Mostra que a Tehkné domina WordPress como plataforma de produto, não apenas como montador visual.','Plugins e temas','amber'],
    ['apps-react-native-flutter','Apps React Native e Flutter','Aplicativos mobile','Mobile e apps',['React Native','Flutter','UX Mobile','APIs'],'Experiência em projetos e estudos de apps mobile, interfaces, fluxos, consumo de APIs e produtos educacionais/comerciais.','Transformar ideias e rotinas em interfaces mobile claras e utilizáveis.','Prototipação, arquitetura de app, telas, fluxos, integração e documentação técnica.','Amplia a percepção da Tehkné para além de sites: apps, produtos e experiências multiplataforma.','Apps mobile','blue'],
    ['conteudos-didaticos-comerciais','Conteúdos didáticos e comerciais','Conteúdo / Educação / Marketing','Conteúdo e estratégia',['Copywriting','Design','Educação','Marketing','IA'],'Criação de conteúdos didáticos, comerciais, apresentações, roteiros, documentação e materiais de apoio para vendas e ensino.','Transformar conhecimento técnico ou comercial em material claro, útil e apresentável.','Copy, estruturação de aulas, artigos, apresentações, guias, documentação e materiais comerciais.','Mostra capacidade de unir tecnologia, comunicação, didática e estratégia de venda.','Conteúdo e copy','pink'],
    ['gip-core','GIP Core','Infraestrutura / Sistema','IA e infraestrutura',['TypeScript','Core','IA','Arquitetura'],'Base técnica para módulos centrais do ecossistema GIP/Tehkné.','Criar núcleo reutilizável para conectar produtos, agentes, memória e automações.','Arquitetura de core, interfaces e componentes internos.','Reforça visão de ecossistema próprio e produto técnico.','Core do sistema','violet'],
    ['gip-ui','GIP UI','Design system / UI','Produto e design',['React','UI','Design System','Componentes'],'Base de interface e componentes para produtos do ecossistema GIP/Tehkné.','Padronizar interfaces para acelerar desenvolvimento e manter consistência visual.','Componentes, padrões visuais, tokens e organização de UI.','Mostra domínio de design system e desenvolvimento frontend.', 'Design system','cyan'],
    ['gip-memory','GIP Memory','Memória / IA','IA e conhecimento',['IA','Memória','Dados','Agentes'],'Conceito de memória para agentes, histórico de contexto, aprendizado e documentação viva.','Manter contexto e decisões entre ciclos de projeto e agentes.','Arquitetura de memória, dados, rotinas e contexto operacional.','Reforça competência em IA aplicada a operação real.','Memória de agentes','blue'],
    ['gip-mcp-server','GIP MCP Server','MCP / Integrações','IA e automações',['MCP','APIs','Node.js','Integrações'],'Servidor MCP para conectar ferramentas, agentes e fontes externas ao ecossistema GIP.','Criar ponte entre agentes de IA e ferramentas reais de trabalho.','Arquitetura de servidor, endpoints e integração com workflows.','Mostra visão atual em IA operacional e tool-use.','MCP e agentes','cyan'],
    ['gaf2code-engine','GAF2Code Engine','Gerador / Dev tools','Desenvolvimento e IA',['Codegen','IA','Dev Tools','Automação'],'Motor conceitual para transformar estrutura, intenção e regras em código ou componentes.', 'Acelerar geração de código com rastreabilidade e arquitetura clara.','Motor de geração, padrões técnicos e prompts estruturados.','Demonstra visão de ferramentas para dev e automação criativa.','Dev tools','violet'],
    ['hnk-core','HNK Core','Núcleo HNK','IA e conhecimento',['HNK','Core','Conhecimento','IA'],'Núcleo de conhecimento, regras e estruturas do sistema HNK aplicado à Tehkné.', 'Centralizar conceitos, regras e estruturas para agentes e produtos HNK.','Modelagem de domínio, documentos, regras e organização do sistema.','Base para produtos de IA, conteúdo e mundo virtual HNK.','Core HNK','pink'],
    ['cronicas-hnk-game','Crônicas HNK Game','Jogo / Narrativa','Game e conteúdo',['Game Design','Narrativa','Lore','Sistema'],'Projeto narrativo de jogo para explorar mundo, personagens, progressão e histórias do universo HNK.', 'Criar base narrativa e sistêmica para um universo interativo.','Lore, personagens, sistemas, progressão e documentação.','Demonstra capacidade em storytelling, game design e sistemas vivos.','Crônicas e lore','violet'],
    ['tehkne-flow-wp-lite','Tehkné Flow WP Lite','Plugin / Operação','WordPress e gestão',['WordPress','PHP','Gestão','Plugin'],'Versão WordPress/lite da visão Tehkné Flow para operação, tarefas ou gestão dentro de WP.', 'Trazer operação e gestão para dentro de ambientes WordPress.','Arquitetura de plugin, telas, fluxos e módulos.','Reforça ligação entre produto próprio e WordPress avançado.','Flow para WP','orange'],
    ['meme-servicos','Meme Serviços','Site / Serviços','Serviços e marketing',['WordPress','Site','Serviços','Marketing'],'Projeto ligado a ecossistema Meme com foco em apresentação de serviços e presença comercial.', 'Organizar serviços e comunicação comercial em página/site claro.','Site, seções, copy, visual e manutenção.','Mostra repertório de agência e serviços digitais.','Serviços digitais','pink']
  ].map(([slug, title, category, sector, stack, summary, challenge, delivery, outcome, imageLabel, tone]) => ({
    slug: slug as string,
    title: title as string,
    level: (slug === 'mais-de-70-sites-wordpress' ? 'Histórico profissional' : 'Laboratório Tehkné') as PortfolioLevel,
    category: category as string,
    sector: sector as string,
    stack: stack as string[],
    summary: summary as string,
    challenge: challenge as string,
    delivery: delivery as string,
    outcome: outcome as string,
    imageLabel: imageLabel as string,
    status: 'Inventário Tehkné',
    tone: tone as PortfolioTone
  }))
];

export const featuredCases = portfolioCases.filter((item) => item.featured);
export const portfolioStats = [
  ['70+', 'sites WordPress criados ou melhorados'],
  ['7+', 'anos de experiência dev/design'],
  [`${portfolioCases.length}+`, 'cases e experiências catalogadas'],
  ['67+', 'repositórios mapeados']
];

export function getPortfolioCase(slug: string) {
  return portfolioCases.find((item) => item.slug === slug);
}

export function getPortfolioMetadata(slug: string): Metadata | null {
  const project = getPortfolioCase(slug);
  if (!project) return null;

  const siteUrl = 'https://tehkne.com';
  const pageUrl = `${siteUrl}/portfolio/${project.slug}`;
  const description = `${project.summary} Stack: ${project.stack.join(', ')}.`;

  return {
    title: `Case: ${project.title} | Tehkné Solutions`,
    description,
    openGraph: {
      title: `Case: ${project.title} | Tehkné Solutions`,
      description,
      type: 'website',
      locale: 'pt_BR',
      url: pageUrl,
      images: [
        {
          url: `${siteUrl}/images/logo-tehkne-solutions-header.png`,
          alt: project.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Case: ${project.title} | Tehkné Solutions`,
      description,
      images: [`${siteUrl}/images/logo-tehkne-solutions-header.png`]
    },
    alternates: {
      canonical: pageUrl
    }
  };
}

export function getAllPortfolioSlugs() {
  return portfolioCases.map((item) => ({ slug: item.slug }));
}
