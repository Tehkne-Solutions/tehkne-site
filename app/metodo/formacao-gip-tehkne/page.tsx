import { ArrowUpRight, BrainCircuit, CheckCircle2, FileText, GraduationCap, GitBranch, ShieldCheck, Workflow } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const modules = [
  ['01', 'Fundações GIP', 'Modelagem de excelência, níveis neurológicos, percepção, critérios, estado mental e tomada de decisão.'],
  ['02', 'Pensamento visual e arquitetura', 'Da Vinci e Tesla aplicados a UX, desenho multi-perspectiva, simulação, stress run e produto digital.'],
  ['03', 'Discovery, lógica e investigação', 'Disney, Aristóteles e Sherlock aplicados a MVP, domínio, QA, evidência e diagnóstico.'],
  ['04', 'Linguagem, ritmo e hipóteses', 'Freud, Mozart e Einstein aplicados a copy, experiência, pesquisa, cenários e decisão estratégica.'],
  ['05', 'Processos empresariais', 'Rituais, documentação, squads, backlog, governança, handoff, métricas e sustentação.'],
  ['06', 'Agentes e automação cognitiva', 'Prompts, memória, ferramentas, agentes especializados, QA de IA e loops T.O.T.S. aplicados à operação.']
];

const outcomes = [
  'Pensar problemas digitais de forma sistêmica e não fragmentada.',
  'Transformar ideias em escopo, arquitetura, fluxo e backlog.',
  'Usar modelos de gênios como lentes práticas de decisão.',
  'Criar processos de discovery, QA, copy, UX, tecnologia e sustentação.',
  'Desenhar agentes de IA com função, critério, memória e governança.',
  'Aplicar o método em tecnologia, agências, educação e operações internas.'
];

const audience = [
  ['Desenvolvedores e tech leads', 'para ampliar visão de produto, arquitetura, negócio, QA e comunicação.'],
  ['Product designers e PMs', 'para estruturar discovery, jornada, protótipo, escopo e decisão.'],
  ['Agências e estrategistas', 'para conectar campanha, landing, CRM, automação e mensuração.'],
  ['Educadores e gestores de cursos', 'para criar trilhas, retenção, plataformas, dashboards e IA pedagógica.']
];

export const metadata = {
  title: 'Formação GIP Tehkné | Profissionais polímatas para tecnologia moderna',
  description: 'Formação GIP Tehkné para profissionais de tecnologia, produto, marketing e educação: modelagem de gênios, processos, arquitetura e agentes de IA.'
};

export default function FormacaoGipTehknePage() {
  return (
    <main className="methodos-page">
      <section className="section-frame gip-hero">
        <div className="gip-hero-copy">
          <span className="eyebrow">Formação GIP Tehkné</span>
          <h1>Formação para profissionais polímatas em tecnologia, produto, processo e IA.</h1>
          <p>A Formação GIP Tehkné nasce para treinar profissionais capazes de pensar melhor, estruturar processos melhores e usar tecnologia com mais critério. O foco não é decorar ferramentas, mas criar uma arquitetura mental e operacional para resolver problemas complexos.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Entrar na lista de interesse <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/metodo/manual-gip-tehkne">Ler manual vivo <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <aside className="gip-os-core-card">
          <GraduationCap size={34} />
          <span>Curso corporativo</span>
          <strong>mente + processo + tecnologia</strong>
          <p>Uma trilha para formar profissionais que conectam design, código, IA, negócio, documentação e execução.</p>
        </aside>
      </section>

      <section className="section-frame gip-applications-section">
        <div className="section-heading">
          <span className="eyebrow">Para quem é</span>
          <h2>A formação atende quem precisa operar entre áreas.</h2>
        </div>
        <div className="gip-application-grid">
          {audience.map(([title, text]) => <article key={title}><BrainCircuit size={26} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section-frame gip-flow-section">
        <div className="section-heading">
          <span className="eyebrow">Matriz curricular</span>
          <h2>Da modelagem cognitiva à criação de agentes.</h2>
          <p>A trilha pode ser aplicada como formação interna, treinamento corporativo, curso online ou laboratório prático da Tehkné.</p>
        </div>
        <div className="gip-timeline">
          {modules.map(([number, title, text]) => (
            <article className="gip-timeline-card" key={title}>
              <span className="gip-step-number">{number}</span>
              <GitBranch size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame gip-layers-section">
        <div className="section-heading inline">
          <div><span className="eyebrow">Resultados esperados</span><h2>O aluno sai com repertório e método de execução.</h2></div>
          <p>A formação é voltada para aplicação: cada módulo gera ferramentas, rituais, mapas, checklists ou agentes.</p>
        </div>
        <div className="gip-os-modules">
          {outcomes.map((item) => <article key={item}><CheckCircle2 size={24} /><p>{item}</p></article>)}
        </div>
      </section>

      <section className="section-frame blog-final-cta">
        <div>
          <span className="eyebrow">Lista de interesse</span>
          <h2>A Formação GIP pode nascer como turma piloto.</h2>
          <p>Empresas, agências e escolas podem solicitar uma versão corporativa ou registrar interesse para a primeira turma aberta.</p>
        </div>
        <a className="btn btn-primary coin" href="/contato#contato-form">Quero receber detalhes <ArrowUpRight size={16} /></a>
      </section>

      <ContactForm
        page="Formação GIP Tehkné"
        context="interesse na formação GIP Tehkné, curso, treinamento corporativo ou turma piloto"
        title="Quer participar ou levar a Formação GIP para sua equipe?"
        description="Conte seu perfil, área de atuação, objetivo e se o interesse é individual, turma aberta ou treinamento corporativo."
      />
    </main>
  );
}
