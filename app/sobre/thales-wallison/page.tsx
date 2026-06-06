import type { Metadata } from 'next';
import { ArrowUpRight, BrainCircuit, Code2, MapPin, ShieldCheck, Workflow } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { WHATSAPP_DISPLAY, whatsAppHref, whatsappMessages } from '../../contact';

export const metadata: Metadata = {
  title: 'Thales Wallison | Responsável pela Tehkné Solutions',
  description: 'Conheça Thales Wallison, responsável pela Tehkné Solutions: arquiteto de soluções, desenvolvedor sênior e product designer com atuação em sites, sistemas, IA, automações e produtos digitais.'
};

const facts = [
  ['Função', 'Founder & CTO da Tehkné Solutions'],
  ['Base', 'Campinas/SP, Brasil'],
  ['Contato', 'contato@tehknesolutions.com.br'],
  ['WhatsApp', WHATSAPP_DISPLAY]
];

const expertise = [
  ['Arquitetura de soluções', 'Diagnóstico, escopo, stack, integrações, riscos e plano de execução.'],
  ['Desenvolvimento sênior', 'Next.js, React, WordPress avançado, PHP, APIs, automações e sustentação.'],
  ['Produto e UX/UI', 'Jornada, interface, copy, conversão, experiência e evolução por fases.'],
  ['IA aplicada', 'Agentes, prompts, automações, análise de dados e processos com revisão humana.']
];

export default function FounderPage() {
  const href = whatsAppHref(whatsappMessages.diagnostico);

  return (
    <main>
      <section className="section-frame services-hero">
        <div className="section-heading services-hero-copy">
          <span className="eyebrow">Quem está por trás da Tehkné</span>
          <h1>Thales Wallison, responsável técnico e estratégico pela Tehkné Solutions.</h1>
          <p>A Tehkné Solutions é liderada por Thales Wallison, arquiteto de soluções, desenvolvedor sênior e product designer. A atuação conecta desenvolvimento web, WordPress avançado, sistemas digitais, IA, automações, UX/UI, integrações e produtos sob medida.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={href} target="_blank" rel="noreferrer">Conversar com a Tehkné <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Ver provas e cases <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <aside className="services-hero-panel">
          <div className="services-radar-core"><ShieldCheck size={34} /></div>
          {['Founder & CTO', 'Soluções', 'Produto', 'IA', 'WordPress', 'Next.js'].map((item) => <span key={item}>{item}</span>)}
        </aside>
      </section>

      <section className="metrics section-frame compact">
        {facts.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="section-frame services-audience-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Credibilidade institucional</span>
            <h2>Uma operação técnica com responsável visível, contato oficial e escopo rastreável.</h2>
            <p>Para projetos B2B, confiança depende de saber quem responde pela arquitetura, pela execução, pela comunicação e pela sustentação. Esta página existe para deixar claro o responsável técnico e estratégico pela Tehkné Solutions.</p>
          </div>
        </div>
        <div className="services-audience-grid">
          {expertise.map(([title, text], index) => {
            const Icon = [Workflow, Code2, MapPin, BrainCircuit][index];
            return <article key={title}><Icon size={22} /><h3>{title}</h3><p>{text}</p></article>;
          })}
        </div>
      </section>

      <ContactForm page="Responsável Tehkné" context="conversa institucional com a Tehkné Solutions, responsável técnico, diagnóstico, arquitetura, desenvolvimento, IA e automações" title="Quer validar uma demanda com a Tehkné?" description="Envie seu contexto para avaliação técnica, comercial e operacional com mais clareza." />
    </main>
  );
}
