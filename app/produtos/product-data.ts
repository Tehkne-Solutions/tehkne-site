import { Boxes, ClipboardList, LineChart, PlugZap } from 'lucide-react';

export const productPages = [
  {
    slug: 'wp-business-hub',
    icon: Boxes,
    eyebrow: 'Produto Tehkné • Ecossistema completo',
    title: 'WP Business Hub',
    subtitle: 'O ecossistema completo em WordPress para centralizar gestão, CRM e automação.',
    microcopy: 'Tudo integrado, menos manutenção, mais controle.',
    summary: 'Integra gestão, CRM, automações e conectividade em um único ambiente WordPress preparado para operação comercial.',
    image: '/images/products/tehkne-wp-business-hub-hero.svg',
    cta: 'Quero o WP Business Hub',
    secondaryCta: 'Ver comparativo com Flow e CRM',
    accent: 'purple',
    benefits: ['Centralize operação, vendas e integrações em um só lugar.', 'Reduza dependência de ferramentas soltas e retrabalho manual.', 'Evolua por módulos conforme a empresa cresce.', 'Tenha uma base WordPress preparada para dashboards e automações.'],
    features: ['Integração entre Flow WP, CRM WP e Integrador WP', 'Relatórios consolidados e visão operacional', 'Arquitetura modular de baixa manutenção', 'Base preparada para automações e IA futura'],
    useCases: ['Empresas que querem organizar vendas e execução em uma única base.', 'Operações que usam WordPress e precisam ir além do site institucional.', 'Times que precisam transformar lead em tarefa, atendimento e acompanhamento.'],
    hubNote: 'O WP Business Hub é o produto completo da linha: conecta Flow WP, CRM WP e integrações em uma operação única.'
  },
  {
    slug: 'flow-wp',
    icon: ClipboardList,
    eyebrow: 'Produto Tehkné • Gestão operacional',
    title: 'Tehkné Flow WP',
    subtitle: 'Gestão completa com baixa manutenção para processos, tarefas e operações.',
    microcopy: 'Estruture tarefas, automatize rotinas e acompanhe resultados.',
    summary: 'Organize projetos, tarefas, prioridades, responsáveis, prazos e histórico operacional em uma interface própria para WordPress.',
    image: '/images/products/tehkne-flow-wp-lite-product.svg',
    cta: 'Quero implementar o Flow WP',
    secondaryCta: 'Ver casos de uso',
    accent: 'blue',
    benefits: ['Automatize processos internos com menos trabalho manual.', 'Organize operações por tarefas, status, responsáveis e prioridades.', 'Ganhe visibilidade com dashboards e rotinas de acompanhamento.', 'Conecte demandas vindas do site, CRM ou planilhas.'],
    features: ['Workflows configuráveis', 'Projetos, tarefas, status e prioridades', 'Relatórios por projeto ou operação', 'Integração com planilhas, CRM e APIs'],
    useCases: ['Empresas que precisam sair da gestão por WhatsApp e planilha.', 'Times pequenos que precisam acompanhar execução sem sistema pesado.', 'Operações internas que precisam de rastreabilidade e rotina clara.'],
    hubNote: 'O Flow WP pode funcionar sozinho ou como módulo operacional dentro do WP Business Hub.'
  },
  {
    slug: 'crm-wp',
    icon: LineChart,
    eyebrow: 'Produto Tehkné • CRM comercial',
    title: 'Tehkné CRM WP',
    subtitle: 'CRM leve e eficiente para acompanhar leads do primeiro contato ao fechamento.',
    microcopy: 'Menos retrabalho, mais conversão.',
    summary: 'Centralize contatos, origem do lead, etapa do funil, responsável comercial e próximos passos sem depender de planilhas.',
    image: '/images/products/tehkne-crm-wp-lite-product.svg',
    cta: 'Quero meu CRM WP',
    secondaryCta: 'Ver integrações',
    accent: 'green',
    benefits: ['Acompanhe leads do primeiro contato ao fechamento.', 'Reduza retrabalho com etapas comerciais claras.', 'Registre histórico de interações e próximos follow-ups.', 'Conecte formulários, WhatsApp e fontes de lead.'],
    features: ['Pipeline visual', 'Gestão de contatos e oportunidades', 'Histórico de relacionamento', 'Relatórios de conversão e origem do lead'],
    useCases: ['Equipes comerciais que precisam enxergar o funil.', 'Empresas que recebem leads pelo site e perdem follow-up.', 'Atendimento que precisa saber origem, etapa e próxima ação.'],
    hubNote: 'O CRM WP pode funcionar sozinho ou conectado ao Flow WP para transformar oportunidades em tarefas e entregas.'
  },
  {
    slug: 'integracoes-wp',
    icon: PlugZap,
    eyebrow: 'Produto Tehkné • Conectividade',
    title: 'Tehkné Integrações WP',
    subtitle: 'Conectividade para transformar formulários, sistemas e canais externos em operação rastreável.',
    microcopy: 'Dados entrando no lugar certo, com menos improviso.',
    summary: 'Receba dados de formulários, normalize payloads, registre logs e entregue leads para CRM, Flow, webhooks ou APIs externas.',
    image: '/images/products/tehkne-integrador-wp-product.svg',
    cta: 'Quero integrar meu WordPress',
    secondaryCta: 'Ver fluxo do Hub',
    accent: 'cyan',
    benefits: ['Conecte site, formulários, CRM, Flow, planilhas e APIs.', 'Registre logs e reduza perda de informação.', 'Padronize entrada de leads e solicitações.', 'Prepare o terreno para automações mais inteligentes.'],
    features: ['Endpoint REST para entrada de dados', 'Webhooks e entrega para sistemas externos', 'Logs operacionais e chaves de integração', 'Roteamento para CRM, Flow e planilhas'],
    useCases: ['Sites que precisam enviar leads para múltiplos destinos.', 'Operações que dependem de planilhas e querem rastreabilidade.', 'Empresas que precisam conectar WordPress com ferramentas externas.'],
    hubNote: 'Integrações WP é a camada que conecta os produtos e permite o WP Business Hub funcionar como operação.'
  }
];

export function getProductPage(slug: string) {
  return productPages.find((product) => product.slug === slug);
}
