import { ArrowUpRight, Bot, BrainCircuit, CheckCircle2, GraduationCap, LineChart, Workflow } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const lenses = [
  ['Da Vinci', 'integra trilha pedagógica, plataforma, conteúdo, UX, dados, gamificação e sustentação.'],
  ['Sherlock', 'investiga evasão, baixa conclusão, dificuldades de aprendizado e sinais escondidos nos dados dos alunos.'],
  ['Mozart', 'organiza ritmo, cadência, progressão, onboarding e sensação de fluidez da jornada educacional.'],
  ['Freud', 'ajuda a compreender medo de falhar, objeções, ansiedade, motivação e linguagem de suporte ao aluno.']
];

const processes = [
  'Desenho de trilhas por público, idade, contexto e objetivo.',
  'Mapeamento da jornada do aluno: entrada, prática, revisão, avaliação e retenção.',
  'Arquitetura de plataforma, área logada, aulas, quizzes, dashboards e certificados.',
  'Métricas de engajamento, presença, progresso, abandono e recuperação.',
  'Automação de suporte, lembretes, feedbacks e acompanhamento pedagógico.',
  'Ciclos de melhoria por turma, módulo, professor e desempenho.'
];

const agents = [
  ['Agente Da Vinci', 'projeta trilhas integradas com conteúdo, interface, dados e experiência.'],
  ['Agente Sherlock', 'detecta risco de abandono e padrões de dificuldade por aluno, turma ou módulo.'],
  ['Agente Mozart', 'revisa ritmo de aulas, exercícios, revisões e checkpoints.'],
  ['Agente Freud', 'analisa feedbacks, dúvidas e linguagem emocional dos alunos.']
];

export const metadata = {
  title: 'GIP Tehkné para Escolas e Cursos | Plataforma, trilhas e retenção',
  description: 'Como o Método GIP Tehkné ajuda escolas e cursos digitais a estruturar trilhas, plataformas, retenção, gamificação, IA pedagógica e operação educacional.'
};

export default function GipParaEscolasECursosPage() {
  return (
    <main className="methodos-page">
      <section className="section-frame gip-hero">
        <div className="gip-hero-copy">
          <span className="eyebrow">GIP para educação</span>
          <h1>Curso digital não é só conteúdo. É jornada, plataforma e retenção.</h1>
          <p>O GIP Tehkné ajuda escolas, cursos livres, academias digitais e projetos educacionais a transformar conhecimento em trilhas, sistemas, dados, acompanhamento e evolução pedagógica.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Mapear operação educacional <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/metodo/formacao-gip-tehkne">Ver Formação GIP <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <aside className="gip-os-core-card">
          <GraduationCap size={34} />
          <span>Educação digital</span>
          <strong>conteúdo + plataforma + dados</strong>
          <p>O método conecta trilhas, professores, alunos, tecnologia, dashboards, IA e sustentação pedagógica.</p>
        </aside>
      </section>

      <section className="section-frame gip-applications-section">
        <div className="section-heading">
          <span className="eyebrow">Lentes principais</span>
          <h2>Os gênios mais úteis para escolas e cursos.</h2>
          <p>A educação digital exige visão sistêmica, investigação de dados, ritmo de aprendizagem e escuta profunda do aluno.</p>
        </div>
        <div className="gip-application-grid">
          {lenses.map(([title, text]) => <article key={title}><BrainCircuit size={26} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section-frame gip-layers-section">
        <div className="section-heading inline">
          <div><span className="eyebrow">Processo aplicado</span><h2>Da promessa do curso à evolução do aluno.</h2></div>
          <p>O método transforma conteúdo em experiência mensurável e acompanhável.</p>
        </div>
        <div className="gip-os-modules">
          {processes.map((item) => <article key={item}><CheckCircle2 size={24} /><p>{item}</p></article>)}
        </div>
      </section>

      <section className="section-frame gip-os-dashboard-section">
        <div className="section-heading">
          <span className="eyebrow">Agentes possíveis</span>
          <h2>IA pedagógica com governança e contexto.</h2>
        </div>
        <div className="gip-application-grid">
          {agents.map(([title, text]) => <article key={title}><Bot size={26} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <ContactForm
        page="GIP para Escolas e Cursos"
        context="aplicar Método GIP Tehkné em escola, curso digital, plataforma educacional, retenção, trilhas, gamificação e IA pedagógica"
        title="Quer estruturar sua operação educacional?"
        description="Envie o contexto do curso, público, formato, plataforma atual e principais gargalos de aprendizado, retenção ou tecnologia."
      />
    </main>
  );
}
