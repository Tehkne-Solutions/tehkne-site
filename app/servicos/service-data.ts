import { Bot, Building2, Code2, Gauge, Network, ShieldCheck, type LucideIcon } from 'lucide-react';

export type ServicePageData = {
  icon: LucideIcon;
  slug: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  promise: string;
  pain: string;
  authority: string;
  outcomes: string[];
  deliverables: string[];
  process: Array<[string, string, string]>;
  bestFor: string[];
  stack: string[];
  relatedCases: string[];
  cta: string;
};

export const servicePages: ServicePageData[] = [
  {
    icon: Gauge,
    slug: 'site-institucional-alta-performance',
    eyebrow: 'Serviço 01',
    title: 'Site institucional de alta performance',
    seoTitle: 'Site institucional de alta performance | Tehkné Solutions',
    description: 'Criação de sites institucionais premium, rápidos, responsivos, com SEO técnico, copy estratégica, UX e estrutura preparada para conversão.',
    promise: 'Transforme sua presença digital em uma máquina de clareza, autoridade e geração de oportunidades.',
    pain: 'Um site bonito não basta quando a empresa precisa explicar valor, carregar rápido, aparecer no Google, orientar o visitante e gerar contato qualificado. A Tehkné estrutura o site como ativo comercial: cada página, bloco, CTA e formulário tem função dentro da jornada.',
    authority: 'Unimos arquitetura de informação, UX/UI, Next.js ou WordPress, performance, SEO técnico e sustentação para criar uma base que não nasce como vitrine parada, mas como operação digital evolutiva.',
    outcomes: ['Posicionamento profissional e confiável', 'Páginas rápidas e responsivas', 'SEO técnico inicial preparado', 'Copy clara para serviços e diferenciais', 'CTAs e formulários orientados a conversão', 'Base pronta para blog, cases e campanhas'],
    deliverables: ['Diagnóstico de posicionamento', 'Arquitetura de páginas e jornada', 'Design responsivo premium', 'Desenvolvimento em Next.js ou WordPress', 'Metadados, sitemap e SEO técnico', 'Formulários, WhatsApp e eventos de conversão'],
    process: [['01', 'Diagnóstico', 'Entendemos oferta, público, concorrência, canais e objetivo comercial.'], ['02', 'Arquitetura', 'Organizamos páginas, seções, mensagens, CTAs e estrutura SEO.'], ['03', 'Design e código', 'Construímos interface premium, responsiva e rápida.'], ['04', 'Deploy e evolução', 'Publicamos, validamos e deixamos a base pronta para melhorias.']],
    bestFor: ['Empresas B2B', 'Clínicas', 'Indústrias', 'Serviços premium', 'Marcas em reposicionamento'],
    stack: ['Next.js', 'React', 'WordPress', 'Vercel', 'SEO'],
    relatedCases: ['Beggin', 'Vacina One', 'Meme Digital', 'UNTI Digital'],
    cta: 'Quero um site institucional premium'
  },
  {
    icon: Code2,
    slug: 'plataforma-web-sob-medida',
    eyebrow: 'Serviço 02',
    title: 'Plataforma web sob medida',
    seoTitle: 'Plataforma web sob medida | Sistemas digitais Tehkné',
    description: 'Desenvolvimento de plataformas web, áreas logadas, dashboards, portais e sistemas digitais sob medida para operações em crescimento.',
    promise: 'Saia de planilhas, conversas soltas e processos manuais para uma plataforma digital construída para sua operação.',
    pain: 'Quando a rotina depende de planilhas, mensagens, ferramentas desconectadas e controles manuais, o crescimento vira gargalo. Uma plataforma sob medida organiza dados, permissões, fluxos, dashboards e módulos em um sistema feito para o processo real da empresa.',
    authority: 'A Tehkné trabalha da descoberta ao deploy: requisitos, modelagem de dados, UX, front-end, back-end, APIs, documentação, versionamento e evolução. O foco é criar uma base útil agora e escalável depois.',
    outcomes: ['Operação mais organizada', 'Dados centralizados e rastreáveis', 'Dashboards e módulos próprios', 'Fluxos sob medida para o time', 'Redução de retrabalho manual', 'Roadmap evolutivo claro'],
    deliverables: ['Discovery técnico', 'Modelagem de dados', 'Arquitetura de módulos', 'UX/UI da plataforma', 'Desenvolvimento front/back', 'Deploy, documentação e backlog evolutivo'],
    process: [['01', 'Mapeamento', 'Entendemos processos, papéis, dados e decisões.'], ['02', 'Modelo do sistema', 'Desenhamos entidades, permissões, telas e integrações.'], ['03', 'MVP funcional', 'Construímos o núcleo utilizável com prioridade real.'], ['04', 'Evolução', 'Iteramos com métricas, feedback e novas necessidades.']],
    bestFor: ['Operações internas', 'SaaS inicial', 'Portais privados', 'Dashboards', 'Produtos digitais'],
    stack: ['Next.js', 'APIs', 'PostgreSQL', 'Prisma', 'GitHub'],
    relatedCases: ['Tehkné Flow', 'HNK Agent', 'Chilli Drinks TABS'],
    cta: 'Planejar minha plataforma'
  },
  {
    icon: Network,
    slug: 'integracoes-crm-erp-apis',
    eyebrow: 'Serviço 03',
    title: 'Integrações com CRM, ERP e APIs',
    seoTitle: 'Integrações CRM, ERP e APIs | Tehkné Solutions',
    description: 'Integrações entre sites, formulários, CRM, ERP, WhatsApp, automações, webhooks, APIs e bancos de dados para reduzir retrabalho operacional.',
    promise: 'Conecte ferramentas, dados e equipes sem criar caos técnico.',
    pain: 'Leads, pedidos, clientes e históricos se perdem quando cada ferramenta guarda uma parte da operação. Integração bem feita define fonte de verdade, campos, eventos, erros, logs e manutenção para que dados circulem com segurança.',
    authority: 'A Tehkné mapeia o fluxo antes de conectar ferramentas. A solução pode envolver APIs, webhooks, n8n, formulários, CRM, ERP, WhatsApp, planilhas controladas ou back-ends próprios, sempre com documentação e validação.',
    outcomes: ['Menos cópia manual', 'Leads mais rastreáveis', 'Dados padronizados', 'Follow-up mais rápido', 'Ferramentas conectadas', 'Histórico operacional confiável'],
    deliverables: ['Diagnóstico de sistemas', 'Mapa de dados e campos', 'Conexão por API/webhook', 'Automação entre ferramentas', 'Validação de erros', 'Documentação técnica'],
    process: [['01', 'Fluxo atual', 'Mapeamos entradas, ferramentas, campos e gargalos.'], ['02', 'Arquitetura de dados', 'Definimos fonte de verdade, regras e eventos.'], ['03', 'Implementação', 'Conectamos APIs, webhooks e automações.'], ['04', 'Validação', 'Testamos exceções, logs, duplicidades e manutenção.']],
    bestFor: ['Comercial e vendas', 'Operações com CRM', 'Catálogos', 'Sistemas legados', 'Times de atendimento'],
    stack: ['APIs', 'Webhooks', 'n8n', 'CRM', 'ERP'],
    relatedCases: ['Savol Seminovos', 'Chilli Drinks TABS', 'Meme Serviços'],
    cta: 'Diagnosticar integrações'
  },
  {
    icon: Bot,
    slug: 'ia-automacoes-agentes-inteligentes',
    eyebrow: 'Serviço 04',
    title: 'IA, automações e agentes inteligentes',
    seoTitle: 'IA, automações e agentes inteligentes | Tehkné Solutions',
    description: 'Implementação de IA aplicada, chatbots, assistentes internos, automações, análise de dados, geração de conteúdo operacional e agentes inteligentes integrados aos processos da empresa.',
    promise: 'Use IA para ganhar velocidade, clareza e automação sem colocar dados e operação em risco.',
    pain: 'Muitas empresas querem usar IA, mas começam pelo hype: prompts soltos, ferramentas desconectadas, dados sensíveis em ambientes errados e automações sem dono. A Tehkné transforma IA em fluxo operacional com objetivo, revisão humana, segurança, integração e melhoria contínua.',
    authority: 'A Tehkné combina arquitetura de soluções, produto digital, integrações, automações, UX, dados e governança para aplicar IA onde existe ganho real: atendimento, vendas, marketing, relatórios, backoffice, conteúdo, suporte, análise e tomada de decisão.',
    outcomes: ['Atendimento mais rápido e padronizado', 'Automação de tarefas repetitivas', 'Relatórios e resumos mais claros', 'Apoio a vendas, marketing e suporte', 'Menos retrabalho entre ferramentas', 'Uso responsável com revisão humana'],
    deliverables: ['Diagnóstico de oportunidades de IA', 'Mapa de processos automatizáveis', 'Chatbots e assistentes internos', 'Prompts, fluxos e bases de conhecimento', 'Integrações com CRM, WhatsApp, planilhas e APIs', 'Política de uso, revisão humana e segurança de dados'],
    process: [['01', 'Objetivo', 'Definimos onde IA realmente ajuda: atendimento, vendas, dados, conteúdo, suporte ou operação.'], ['02', 'Arquitetura', 'Mapeamos dados, riscos, ferramentas, integrações, permissões e pontos de revisão humana.'], ['03', 'Implementação', 'Criamos prompts, agentes, automações, conectores e interfaces para uso real.'], ['04', 'Governança', 'Validamos respostas, registramos limites, medimos ganho e evoluímos com segurança.']],
    bestFor: ['Atendimento e suporte', 'Marketing e vendas', 'Operações com muitos dados', 'Times com tarefas repetitivas', 'Empresas que precisam inovar com segurança'],
    stack: ['OpenAI', 'n8n', 'APIs', 'WhatsApp', 'CRM', 'RAG'],
    relatedCases: ['HNK Agent', 'Tehkné Flow', 'Integrações WP', 'CRM WP'],
    cta: 'Mapear oportunidades com IA'
  },
  {
    icon: ShieldCheck,
    slug: 'governanca-seguranca-sustentacao',
    eyebrow: 'Serviço 05',
    title: 'Manutenção e gestão de sites e sistemas',
    seoTitle: 'Manutenção de sites, gestão técnica e segurança digital | Tehkné Solutions',
    description: 'Manutenção de sites e sistemas, gestão técnica contínua, suporte WordPress, segurança, performance, atualizações, backups, correções, SEO técnico e evolução pós-deploy.',
    promise: 'Mantenha seu site ou sistema seguro, rápido, atualizado e gerando resultado depois do lançamento.',
    pain: 'Depois que o site ou sistema entra no ar, começam atualizações, bugs, plugins, campanhas, novas páginas, integrações, lentidão, riscos de segurança e demandas urgentes. Sem manutenção e gestão técnica, o projeto vira uma dependência cara, instável e difícil de evoluir.',
    authority: 'A Tehkné organiza manutenção, gestão técnica e suporte contínuo com auditoria, versionamento, documentação viva, backups, monitoramento, segurança, performance, SEO técnico, correções e backlog evolutivo. O foco é manter a operação digital estável e preparada para crescer.',
    outcomes: ['Site ou sistema mais seguro', 'Atualizações e backups controlados', 'Correções priorizadas por impacto', 'Performance e SEO técnico monitorados', 'Gestão de backlog e melhorias', 'Evolução contínua sem refazer tudo'],
    deliverables: ['Auditoria técnica inicial', 'Plano de manutenção mensal', 'Gestão de atualizações e backups', 'Correções, ajustes e melhorias', 'Monitoramento de performance e segurança', 'Documentação, governança e backlog evolutivo'],
    process: [['01', 'Auditoria', 'Levantamos estado atual, riscos, plugins, integrações, performance e prioridades.'], ['02', 'Plano de gestão', 'Organizamos rotina de manutenção, responsabilidades, SLA, backlog e pontos críticos.'], ['03', 'Manutenção contínua', 'Executamos atualizações, correções, melhorias, suporte técnico e acompanhamento.'], ['04', 'Evolução', 'Planejamos novas fases com base em dados, campanhas, SEO, uso real e objetivos do negócio.']],
    bestFor: ['Sites em produção', 'WordPress crítico', 'E-commerces', 'Projetos herdados', 'Operações com tráfego', 'Empresas sem time técnico'],
    stack: ['Git', 'QA', 'WordPress', 'Vercel', 'Analytics', 'Backup'],
    relatedCases: ['Beggin', 'UNTI Digital', 'Savana Publicidade'],
    cta: 'Avaliar manutenção e gestão'
  },
  {
    icon: Building2,
    slug: 'white-label-tecnico-agencias',
    eyebrow: 'Serviço 06',
    title: 'White label técnico para agências',
    seoTitle: 'White label técnico para agências | Desenvolvimento parceiro Tehkné',
    description: 'Braço técnico white label para agências: sites, landing pages, WordPress, Next.js, integrações, automações, manutenção e suporte por sprint.',
    promise: 'Sua agência vende estratégia e relacionamento. A Tehkné sustenta a execução técnica nos bastidores.',
    pain: 'Agências crescem quando conseguem vender mais sem perder qualidade. O gargalo aparece quando faltam arquitetura, dev, WordPress avançado, integrações, automações ou sustentação. Um braço técnico reduz risco e aumenta capacidade de entrega.',
    authority: 'A Tehkné atua com comunicação clara, escopo, sprint, versionamento, documentação e confidencialidade quando necessário. O objetivo é entregar com padrão técnico sem disputar a relação comercial da agência.',
    outcomes: ['Mais capacidade técnica', 'Menos risco no prazo', 'Entregas com documentação', 'Suporte para propostas', 'Execução em WordPress/Next.js', 'Parceria recorrente'],
    deliverables: ['Apoio técnico em proposta', 'Landing pages e sites', 'WordPress avançado', 'Next.js e integrações', 'Automação e formulários', 'Sustentação por sprint'],
    process: [['01', 'Alinhamento', 'Entendemos cliente, proposta, escopo e responsabilidade.'], ['02', 'Planejamento', 'Definimos stack, prazos, entregáveis e pontos de aprovação.'], ['03', 'Execução técnica', 'Construímos com transparência para a agência.'], ['04', 'Entrega e suporte', 'Documentamos, ajustamos e apoiamos evolução.']],
    bestFor: ['Agências digitais', 'Estúdios de design', 'Times de marketing', 'Consultorias', 'Parceiros comerciais'],
    stack: ['WordPress', 'Next.js', 'Elementor', 'APIs', 'Suporte'],
    relatedCases: ['UNTI Digital', 'Savana Publicidade', 'Meme Digital'],
    cta: 'Conversar sobre white label'
  }
];

export function getServicePage(slug: string) {
  return servicePages.find((item) => item.slug === slug);
}
