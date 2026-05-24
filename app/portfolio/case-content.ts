export type PortfolioCaseContent = {
  title?: string;
  headline?: string;
  intro?: string;
  siteUrl?: string;
  siteLabel?: string;
  modules: Array<{
    title: string;
    text: string;
  }>;
  process?: Array<[string, string, string]>;
};

export const portfolioCaseContent: Record<string, PortfolioCaseContent> = {
  'dr-eduardo-ursolino': {
    headline: 'saúde e odontologia com autoridade clínica, agendamento premium e base WordPress validada.',
    intro:
      'Este case foi ajustado para mostrar imagem real da base UNTI, leitura específica para saúde e stack corrigida por validação interna: WordPress, Elementor, SEO local, UX/UI e performance.',
    modules: [
      {
        title: 'Contexto clínico',
        text: 'Marca profissional de saúde e odontologia com necessidade de transmitir confiança, clareza, autoridade local e uma jornada simples para o paciente entender os serviços e iniciar contato.'
      },
      {
        title: 'Arquitetura WordPress',
        text: 'Estrutura editável para páginas, blocos de serviço, conteúdo institucional, SEO local e manutenção futura sem depender de uma reconstrução técnica a cada ajuste.'
      },
      {
        title: 'Experiência visual',
        text: 'Interface limpa, profissional e objetiva, com hierarquia de informação, sensação de segurança e foco em leitura rápida para um público que busca cuidado e credibilidade.'
      },
      {
        title: 'Resultado comercial',
        text: 'Vitrine de saúde com estética confiável, conteúdo organizado e caminho direto para contato, agendamento e conversão qualificada.'
      }
    ],
    process: [
      ['01', 'Leitura da marca', 'Entendimento da autoridade profissional, público, serviços e sinais de confiança necessários para saúde.'],
      ['02', 'Estrutura WordPress', 'Organização das páginas, blocos, conteúdos editáveis, SEO local e pontos de manutenção.'],
      ['03', 'Interface e conversão', 'Construção da experiência visual com hierarquia clara, CTA e navegação orientada ao paciente.'],
      ['04', 'Auditoria de stack', 'Correção editorial da stack no portfólio para refletir a base real do projeto.']
    ]
  },
  'vacina-one': {
    title: 'VacinaOne',
    headline: 'site institucional de saúde em Next.js para vacinação, unidades, conteúdo educativo e expansão comercial.',
    intro:
      'VacinaOne entra como projeto direto da Tehkné: uma presença digital moderna para saúde, com narrativa de confiança, páginas institucionais, conteúdo educativo e base preparada para evolução comercial.',
    siteUrl: 'https://vacina-one-site.vercel.app/',
    siteLabel: 'Abrir staging VacinaOne',
    modules: [
      {
        title: 'Confiança em saúde',
        text: 'A comunicação foi pensada para transmitir segurança, acolhimento e clareza em temas de vacinação, atendimento familiar, empresas e expansão de unidades.'
      },
      {
        title: 'Arquitetura Next.js',
        text: 'Base em Next.js com componentes por seção, Tailwind, TypeScript, Framer Motion, Lucide e otimização de imagens com Sharp para uma entrega moderna e evolutiva.'
      },
      {
        title: 'Jornada institucional',
        text: 'Hero, diferenciais, sobre a marca, vacinas populares, família, empresas, depoimentos, blog e FAQ organizam a decisão do usuário sem criar ruído.'
      },
      {
        title: 'Evolução comercial',
        text: 'A estrutura permite crescer com blog, campanhas, páginas de unidades, conteúdo educativo, captação de contatos e novas frentes de franquia ou expansão.'
      }
    ],
    process: [
      ['01', 'Contexto de saúde', 'Leitura de público, linguagem, confiança, serviços e pontos críticos de comunicação em vacinação.'],
      ['02', 'Arquitetura da Home', 'Organização das seções principais: Hero, diferenciais, sobre, vacinas, família, empresas, depoimentos, blog e FAQ.'],
      ['03', 'Stack moderna', 'Implementação em Next.js, React, Tailwind, TypeScript, Framer Motion, Lucide e Sharp.'],
      ['04', 'Base de expansão', 'Preparação para conteúdo, SEO, campanhas, unidades, franquias e evolução contínua.']
    ]
  },
  'meme-digital': {
    title: 'Meme Serviços',
    headline: 'landing page comercial em Next.js para diagnóstico estratégico, autoridade e captação de oportunidades.',
    intro:
      'Meme Serviços entra como experiência de ecossistema parceiro com stack auditada em Next.js. O projeto usa narrativa de dor, prova social, método, diferenciais, diagnóstico e CTA final para conversão.',
    siteUrl: 'https://meme-servicos-delta.vercel.app/',
    siteLabel: 'Abrir staging Meme Serviços',
    modules: [
      {
        title: 'Contexto comercial',
        text: 'A página é orientada para comunicar serviços, autoridade e diagnóstico estratégico, guiando o visitante de uma dor percebida até uma ação de contato.'
      },
      {
        title: 'Arquitetura de LP',
        text: 'Estrutura com hero, prova social, dores, investimento, autoridade, público, método, diferenciais, depoimento, ecossistema, conexão, diagnóstico e CTA final.'
      },
      {
        title: 'Stack Next.js',
        text: 'Projeto em Next.js com React, Tailwind, TypeScript, Framer Motion e Lenis para experiência fluida, motion e leitura comercial mais refinada.'
      },
      {
        title: 'Conversão e narrativa',
        text: 'A leitura do projeto mostra repertório em landing pages, copy consultiva, estrutura de persuasão, seções comerciais e jornada de captação.'
      }
    ],
    process: [
      ['01', 'Mensagem central', 'Organização da promessa, dores, diferenciais e rota de conversão da página.'],
      ['02', 'Seções comerciais', 'Construção do fluxo: prova social, dores, investimento, autoridade, método, diagnóstico e CTA.'],
      ['03', 'Execução visual', 'Implementação em Next.js com motion, scroll suave, Tailwind e componentes reutilizáveis.'],
      ['04', 'Validação de stack', 'Auditoria pelo repositório para registrar a stack real no portfólio da Tehkné.']
    ]
  }
};

export function getPortfolioCaseContent(slug: string) {
  return portfolioCaseContent[slug];
}
