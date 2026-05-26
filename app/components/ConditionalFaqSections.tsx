'use client';

import { ArrowUpRight, HelpCircle } from 'lucide-react';

const homeFaq = [
  {
    question: 'A Tehkné faz apenas sites ou também sistemas?',
    answer: 'A Tehkné atua com sites premium, sistemas sob medida, WordPress avançado, produtos digitais, IA, automações, integrações, sustentação e apoio técnico para agências.',
    link: '/servicos',
    linkLabel: 'Ver serviços'
  },
  {
    question: 'Como sei se preciso de um site, sistema ou produto digital?',
    answer: 'O diagnóstico técnico avalia objetivo comercial, operação atual, urgência, integrações, conteúdo e manutenção necessária para indicar o melhor caminho antes de propor escopo.',
    link: '/metodo',
    linkLabel: 'Conhecer o método'
  },
  {
    question: 'Vocês trabalham com WordPress e Next.js?',
    answer: 'Sim. A escolha da stack depende do problema. WordPress pode ser ideal para baixo custo e autonomia; Next.js pode ser melhor para performance, produto e interfaces sob medida.',
    link: '/blog/o-que-e-arquitetura-de-solucoes',
    linkLabel: 'Ler sobre arquitetura'
  },
  {
    question: 'Depois do lançamento, o projeto continua sendo acompanhado?',
    answer: 'Pode continuar. Muitos projetos precisam de sustentação, melhorias, SEO técnico, automações, correções, novas páginas e evolução contínua depois do deploy.',
    link: '/servicos/governanca-seguranca-sustentacao',
    linkLabel: 'Ver sustentação'
  },
  {
    question: 'A Tehkné tem produtos próprios?',
    answer: 'Sim. A linha de produtos Tehkné inclui WP Business Hub, Flow WP, CRM WP e Integrações WP, com foco em operação, vendas e WordPress de baixa manutenção.',
    link: '/produtos',
    linkLabel: 'Ver produtos'
  }
];

const productFaq = [
  {
    question: 'Posso contratar apenas um produto ou preciso do Hub completo?',
    answer: 'Pode contratar separadamente. Flow WP, CRM WP e Integrações WP funcionam como produtos individuais, mas também podem evoluir para o WP Business Hub completo.',
    link: '/produtos/wp-business-hub',
    linkLabel: 'Entender o Hub'
  },
  {
    question: 'Esses produtos substituem ferramentas como CRM externo ou gestão de tarefas?',
    answer: 'Em muitos cenários, sim. A proposta é reduzir ferramentas soltas e centralizar processos em WordPress. Quando já existe ferramenta externa, a Tehkné avalia integração ou convivência entre sistemas.',
    link: '/produtos/crm-wp',
    linkLabel: 'Ver CRM WP'
  },
  {
    question: 'O produto exige muita manutenção?',
    answer: 'A linha WP foi pensada para baixa manutenção, arquitetura modular e evolução por fases. Ainda assim, sustentação recorrente pode ser recomendada para operação, segurança e melhorias.',
    link: '/servicos/governanca-seguranca-sustentacao',
    linkLabel: 'Ver sustentação'
  },
  {
    question: 'Dá para integrar formulários, WhatsApp, planilhas e APIs?',
    answer: 'Sim. Integrações WP funciona como camada de conectividade para receber dados, registrar logs, normalizar payloads e enviar informações para CRM, Flow, planilhas, webhooks ou APIs.',
    link: '/produtos/integracoes-wp',
    linkLabel: 'Ver Integrações WP'
  },
  {
    question: 'Qual produto devo escolher primeiro?',
    answer: 'Se o problema é venda e follow-up, comece pelo CRM WP. Se o problema é execução e tarefas, comece pelo Flow WP. Se precisa de tudo integrado, o melhor caminho é o WP Business Hub.',
    link: '/contato#contato-form',
    linkLabel: 'Pedir diagnóstico'
  }
];

export function FaqSection({ type }: { type: 'home' | 'products' }) {
  const faq = type === 'home' ? homeFaq : productFaq;
  const heading = type === 'home' ? 'Dúvidas frequentes antes de contratar tecnologia.' : 'Dúvidas frequentes sobre os produtos Tehkné.';
  const eyebrow = type === 'home' ? 'FAQ geral' : 'FAQ de produtos';
  const description = type === 'home'
    ? 'Respostas rápidas para quem está avaliando site, sistema, produto digital, WordPress, IA ou sustentação.'
    : 'Entenda como os produtos podem ser vendidos separadamente, conectados ao Hub ou implementados por fases.';

  return (
    <section className="section-frame faq-section">
      <div className="section-heading inline">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="faq-grid">
        {faq.map((item) => (
          <article className="faq-card premium-hover" key={item.question}>
            <HelpCircle size={22} />
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
            <a href={item.link}>{item.linkLabel} <ArrowUpRight size={14} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ConditionalFaqSections({ type }: { type: 'home' | 'products' }) {
  return <FaqSection type={type} />;
}
