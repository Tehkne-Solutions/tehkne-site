import { ArrowUpRight, CalendarDays, FileText, Globe2, HeartPulse, ShieldCheck, Users } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { getPortfolioMetadata } from '../portfolio-data';
import CaseScreens from '../CaseScreens';

const project = {
  title: 'Vacina One',
  eyebrow: 'Case • Site institucional em saúde',
  type: 'Projeto Tehkné',
  category: 'Site institucional / Produto digital',
  stack: ['Next.js', 'Saúde', 'Institucional', 'Conteúdo educativo', 'Franquias'],
  description:
    'Estrutura institucional moderna para clínica de vacinação, com comunicação clara, navegação objetiva, conteúdo educativo e base preparada para expansão comercial.'
};

const highlights = [
  ['Saúde e confiança', 'Experiência visual limpa para transmitir proteção, cuidado e credibilidade.'],
  ['Conteúdo educativo', 'Estrutura preparada para blog, calendário, vacinas e jornadas informativas.'],
  ['Conversão local', 'Fluxo pensado para agendamento, contato e captação de interessados.'],
  ['Expansão', 'Base institucional para unidades, empresas e modelo de franquia.']
];

const modules = [
  { icon: HeartPulse, title: 'Comunicação em saúde', text: 'Narrativa visual e textual voltada para cuidado, proteção, clareza e confiança.' },
  { icon: CalendarDays, title: 'Jornada de agendamento', text: 'Estrutura orientada para facilitar contato, decisão e marcação de vacinação.' },
  { icon: FileText, title: 'Conteúdo e blog', text: 'Base preparada para educação em saúde, campanhas, calendário vacinal e SEO.' },
  { icon: Users, title: 'Unidades e franquias', text: 'Arquitetura pensada para crescimento, expansão regional e comunicação com empresas.' },
  { icon: Globe2, title: 'Site institucional', text: 'Home, navegação, seções comerciais e estrutura escalável para novas páginas.' },
  { icon: ShieldCheck, title: 'Performance e base técnica', text: 'Projeto com stack moderna e foco em carregamento, manutenção e evolução.' }
];

export const metadata = getPortfolioMetadata('vacina-one') ?? {
  title: 'Case: Vacina One | Tehkné Solutions',
  description: 'Case Vacina One: site institucional em Next.js para saúde, vacinação, conteúdo educativo, unidades e expansão comercial.'
};

export default function VacinaOneCase() {
  return (
    <main className="case-page">
      <section className="section-frame case-hero">
        <div className="case-hero-copy"><span className="eyebrow">{project.eyebrow}</span><h1>{project.title}: presença digital clara para vacinação, cuidado e expansão.</h1><p>{project.description}</p><div className="hero-actions"><a className="btn btn-primary coin" href="#contato-form">Quero algo parecido <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="https://vacina-one-site.vercel.app/" target="_blank" rel="noreferrer">Abrir site <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a></div><div className="case-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
        <div className="case-visual"><div className="case-window"><div className="case-window-bar"><span /><span /><span /></div><div className="case-dashboard-grid"><div className="case-panel large"><HeartPulse size={28} /><strong>Vacinação</strong><small>Campanhas • Unidades • Conteúdo • Agendamento</small></div><div className="case-panel"><ShieldCheck size={24} /><strong>Cuidado</strong></div><div className="case-panel"><CalendarDays size={24} /><strong>Agenda</strong></div><div className="case-panel wide"><Globe2 size={24} /><strong>Site institucional escalável</strong><small>Next.js • SEO • Blog • Franquias</small></div></div></div></div>
      </section>
      <section className="metrics section-frame compact">{highlights.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</section>
      <section className="section-frame"><div className="section-heading"><span className="eyebrow">Entregáveis</span><h2>Uma base digital para informar, converter e crescer.</h2><p>O case demonstra como a Tehkné organiza marca, conteúdo, experiência e tecnologia em uma presença institucional pronta para evolução.</p></div><div className="service-grid solutions-grid">{modules.map((module) => { const Icon = module.icon; return <article className="glass-card service-card solution-card" key={module.title}><Icon className="card-icon" size={32} /><h3>{module.title}</h3><p>{module.text}</p></article>; })}</div></section>
      <CaseScreens title="Vacina One" url="https://vacina-one-site.vercel.app/" />
      <ContactForm page="Case Vacina One" context="site institucional para saúde, vacinação, conteúdo educativo, unidades, performance e expansão comercial" title="Vamos criar uma presença digital que transmita confiança e gere demanda?" description="Use este bloco para iniciar um diagnóstico contextualizado sobre site institucional, saúde, conteúdo e expansão." />
      <section className="final-cta"><div><span className="eyebrow">Quer algo parecido?</span><h2>Vamos criar uma presença digital que transmita confiança e gere demanda.</h2><p>A Tehkné estrutura site, conteúdo, arquitetura, performance e evolução para marcas que precisam crescer com clareza.</p></div><div className="hero-actions"><a className="btn btn-primary coin" href="#contato-form">Solicitar diagnóstico <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a></div></section>
    </main>
  );
}
