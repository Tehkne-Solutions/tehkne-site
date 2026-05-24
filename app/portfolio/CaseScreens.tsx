export default function CaseScreens({ title, url }: { title: string; url: string }) {
  const encoded = encodeURIComponent(url);
  const full = `https://s0.wp.com/mshots/v1/${encoded}?w=1900`;

  return (
    <section className="section-frame case-full-showcase-section">
      <div className="section-heading">
        <span className="eyebrow">Print completo do projeto</span>
        <h2>Visual real do site publicado.</h2>
        <p>Captura baseada no endereço público do projeto, usada para substituir imagem genérica e mostrar evidência visual real.</p>
      </div>
      <div className="case-full-showcase">
        <div className="case-window-bar"><span /><span /><span /></div>
        <img src={full} alt={`Print completo do site ${title}`} loading="lazy" />
      </div>
    </section>
  );
}
