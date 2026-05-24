export type CaseStackOverride = {
  stack: string[];
  note: string;
  source: 'validação interna' | 'auditoria pendente';
};

export const caseStackOverrides: Record<string, CaseStackOverride> = {
  'dr-eduardo-ursolino': {
    stack: ['WordPress', 'Elementor', 'SEO local', 'UX/UI', 'Performance'],
    note:
      'Stack corrigida por validação interna: este projeto foi executado em WordPress, não em Next.js/Framer Motion. Os demais cases UNTI devem passar por auditoria individual usando nome, print da single e link oficial quando disponível.',
    source: 'validação interna'
  }
};

export function getCaseStackOverride(slug: string) {
  return caseStackOverrides[slug];
}
