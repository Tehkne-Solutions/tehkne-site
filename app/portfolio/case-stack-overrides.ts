export type CaseStackOverride = {
  stack: string[];
  note: string;
  source: 'validação interna' | 'auditoria por repositório' | 'auditoria pendente';
};

export const caseStackOverrides: Record<string, CaseStackOverride> = {
  'dr-eduardo-ursolino': {
    stack: ['WordPress', 'Elementor', 'SEO local', 'UX/UI', 'Performance'],
    note: 'Stack auditada pela Tehkné: WordPress, Elementor, SEO local, UX/UI e performance.',
    source: 'validação interna'
  },
  'vacina-one': {
    stack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Sharp'],
    note: 'Stack auditada pelo repositório VacinaOne.',
    source: 'auditoria por repositório'
  },
  'meme-digital': {
    stack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    note: 'Stack auditada pelo repositório Meme Serviços.',
    source: 'auditoria por repositório'
  }
};

export function getCaseStackOverride(slug: string) {
  return caseStackOverrides[slug];
}
