export type CaseStackOverride = {
  stack: string[];
  source: 'validação interna' | 'auditoria por repositório' | 'auditoria pendente';
};

export const caseStackOverrides: Record<string, CaseStackOverride> = {
  'dr-eduardo-ursolino': {
    stack: ['WordPress', 'Elementor', 'SEO local', 'UX/UI', 'Performance'],
    source: 'validação interna'
  },
  'vacina-one': {
    stack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Sharp'],
    source: 'auditoria por repositório'
  },
  'meme-digital': {
    stack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    source: 'auditoria por repositório'
  }
};

export function getCaseStackOverride(slug: string) {
  return caseStackOverrides[slug];
}
