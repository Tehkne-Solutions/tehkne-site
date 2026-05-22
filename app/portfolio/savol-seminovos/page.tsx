import { ArrowUpRight, Car, Database, Filter, Globe2, MapPin, Search, ShieldCheck } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const project = {
  title: 'Savol Seminovos',
  eyebrow: 'Case • Participação técnica',
  type: 'Participação técnica',
  category: 'Catálogo automotivo dinâmico',
  stack: ['WordPress', 'Elementor', 'Catálogo', 'Filtros', 'Sustentação'],
  description:
    'Portal automotivo com listagem de veículos, filtros por marca, modelo, ano, preço e quilometragem, além de cards comerciais e estrutura de unidades.'
};

const highlights = [
  ['Catálogo dinâmico', 'Listagem de veículos com cards, dados comerciais e organização por estoque.'],
  ['Filtros comerciais', 'Busca por marca, modelo, versão, ano, preço e quilometragem.'],
  ['WordPress avançado', 'Uso de estrutura dinâmica, front-end e manutenção técnica em ambiente WP.'],
  ['Sustentação', 'Ajustes, evolução e suporte para operação comercial em produção.']
];

const modules = [
  { icon: Car, title: 'Cards de veículos', text: 'Interface comercial para destacar imagem, marca, modelo, versão, preço e detalhes do carro.' },
  { icon: Filter, title: 'Filtros inteligentes', text: 'Camadas de busca e refinamento para melhorar a navegação do usuário.' },
  { icon: Search, title: 'Experiência de compra', text: 'Jornada focada em consulta rápida, comparação e contato com unidades.' },
  { icon: Database, title: 'Dados estruturados', text: 'Organização do conteúdo para catálogo, estoque e manutenção recorrente.' },
  { icon: MapPin, title: 'Unidades e contato', text: 'Blocos de unidades e canais comerciais integrados à experiência da página.' },
  { icon: ShieldCheck, title: 'Manutenção WordPress', text: 'Base técnica voltada a ajustes, estabilidade, performance e evolução contínua.' }
];

export const metadata = {
  title: 'Case: Savol Seminovos | Tehkné Solutions',
  description: 'Case Savol Seminovos: portal automotivo em WordPress com catálogo dinâmico, filtros, cards comerciais e sustentação técnica.'
};

export default function SavolSeminovosCase() {
  return (
    <main className="case-page">
      <section className="section-frame case-hero">
        <div className="case-hero-copy"><span className="eyebrow">{project.eyebrow}</span><h1>{project.title}: catálogo automotivo com filtros e operação comercial.</h1><p>{project.description}</p><div className="hero-actions"><a className="btn btn-primary coin" href="#contato-form">Quero algo parecido <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a></div><div className="case-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
        <div className="case-visual"><div className="case-window"><div className="case-window-bar"><span /><span /><span /></div><div className="case-dashboard-grid"><div className="case-panel large"><Car size={28} /><strong>Seminovos</strong><small>Estoque • Filtros • Cards • Unidades</small></div><div className="case-panel"><Filter size={24} /><strong>Filtros</strong></div><div className="case-panel"><Database size={24} /><strong>Dados</strong></div><div className="case-panel wide"><Globe2 size={24} /><strong>Portal WordPress dinâmico</strong><small>Elementor • Catálogo • Front-end • Sustentação</small></div></div></div></div>
      </section>
      <section className="metrics section-frame compact">{highlights.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</section>
      <section className="section-frame"><div className="section-heading"><span className="eyebrow">Entregáveis</span><h2>Um catálogo pensado para busca, decisão e contato comercial.</h2><p>O case mostra capacidade em WordPress funcional, não apenas institucional: dados, filtros, cards, manutenção e operação real.</p></div><div className="service-grid solutions-grid">{modules.map((module) => { const Icon = module.icon; return <article className="glass-card service-card solution-card" key={module.title}><Icon className="card-icon" size={32} /><h3>{module.title}</h3><p>{module.text}</p></article>; })}</div></section>
      <ContactForm page="Case Savol Seminovos" context="catálogo automotivo, filtros comerciais, WordPress avançado, dados estruturados e sustentação técnica" title="Precisa transformar dados e produtos em uma experiência comercial?" description="Use este bloco para iniciar um diagnóstico contextualizado sobre catálogos, filtros, páginas dinâmicas e manutenção." />
      <section className="final-cta"><div><span className="eyebrow">Catálogos e portais</span><h2>Precisa transformar dados e produtos em uma experiência comercial?</h2><p>A Tehkné estrutura catálogos, filtros, páginas dinâmicas e manutenção para operações que vendem com conteúdo e tecnologia.</p></div><div className="hero-actions"><a className="btn btn-primary coin" href="#contato-form">Solicitar diagnóstico <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a></div></section>
    </main>
  );
}
