import { ImageResponse } from 'next/og';
import { blogPosts } from '../../blog-data';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

const accentMap: Record<string, { primary: string; secondary: string; glow: string; label: string }> = {
  'Arquitetura de Soluções': {
    primary: '#38bdf8',
    secondary: '#a855f7',
    glow: 'rgba(56, 189, 248, 0.42)',
    label: 'Estratégia • Sistemas • Integrações'
  },
  'Sites de Alta Performance': {
    primary: '#60a5fa',
    secondary: '#22d3ee',
    glow: 'rgba(96, 165, 250, 0.4)',
    label: 'Performance • SEO • Conversão'
  },
  'WordPress Avançado': {
    primary: '#8b5cf6',
    secondary: '#38bdf8',
    glow: 'rgba(139, 92, 246, 0.42)',
    label: 'CMS • Plugins • Operação'
  },
  'Next.js': {
    primary: '#e0f2fe',
    secondary: '#8b5cf6',
    glow: 'rgba(125, 211, 252, 0.34)',
    label: 'React • SEO técnico • Deploy'
  },
  'Design & UX': {
    primary: '#c084fc',
    secondary: '#38bdf8',
    glow: 'rgba(192, 132, 252, 0.42)',
    label: 'Jornada • Interface • Conversão'
  },
  'IA & Automações': {
    primary: '#22d3ee',
    secondary: '#a855f7',
    glow: 'rgba(34, 211, 238, 0.42)',
    label: 'Agentes • Fluxos • Eficiência'
  },
  'Integrações': {
    primary: '#38bdf8',
    secondary: '#818cf8',
    glow: 'rgba(56, 189, 248, 0.4)',
    label: 'CRM • ERP • APIs'
  },
  'Sustentação Técnica': {
    primary: '#93c5fd',
    secondary: '#22d3ee',
    glow: 'rgba(147, 197, 253, 0.36)',
    label: 'Manutenção • Evolução • Suporte'
  },
  'Método GIP': {
    primary: '#a78bfa',
    secondary: '#38bdf8',
    glow: 'rgba(167, 139, 250, 0.44)',
    label: 'Descoberta • Arquitetura • Evolução'
  },
  'Tehkné OS': {
    primary: '#67e8f9',
    secondary: '#a855f7',
    glow: 'rgba(103, 232, 249, 0.42)',
    label: 'Produto • Código • Operação'
  },
  'White Label Técnico': {
    primary: '#818cf8',
    secondary: '#38bdf8',
    glow: 'rgba(129, 140, 248, 0.42)',
    label: 'Agências • Entrega • Sustentação'
  },
  'Portfólio & Produto': {
    primary: '#38bdf8',
    secondary: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.38)',
    label: 'Cases • Prova • Produto'
  }
};

function compactTitle(title: string) {
  return title
    .replace(': por que usar em sites, portais e produtos digitais modernos', '')
    .replace(' e por que ela evita retrabalho em projetos digitais', '')
    .replace(': como transformar um site em operação digital', '')
    .replace(': quando o WordPress deixa de ser “site simples” e vira sistema', '')
    .replace(': design bonito não basta sem produto, jornada e conversão', '')
    .replace(': onde aplicar sem cair em modismo', '')
    .replace(': como CRM, ERP e APIs conectam a empresa', '')
    .replace(': publicar o site é só o começo', '')
    .replace(': como transformar ideia solta em produto validado', '')
    .replace(': produto, design, código, automação e operação conectados', '')
    .replace(': como a Tehkné atua como braço técnico para agências', '')
    .replace(': como transformar cases em prova, método e produto', '');
}

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0];
  const palette = accentMap[post.category] ?? accentMap['Arquitetura de Soluções'];
  const title = compactTitle(post.title);

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          position: 'relative',
          display: 'flex',
          overflow: 'hidden',
          background: '#020617',
          color: '#f8fafc',
          fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at 74% 42%, ${palette.glow}, transparent 30%), radial-gradient(circle at 18% 24%, rgba(56,189,248,.16), transparent 30%), linear-gradient(135deg, #020617 0%, #070b1a 45%, #111827 100%)`
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.26,
            backgroundImage: 'linear-gradient(rgba(148,163,184,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.12) 1px, transparent 1px)',
            backgroundSize: '46px 46px'
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 68,
            top: 88,
            width: 430,
            height: 380,
            borderRadius: 34,
            border: '1px solid rgba(148,163,184,.18)',
            background: 'rgba(15,23,42,.48)',
            boxShadow: `0 0 90px ${palette.glow}`
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 128,
            top: 136,
            width: 300,
            height: 300,
            transform: 'rotate(45deg)',
            border: `2px solid ${palette.primary}`,
            opacity: 0.75,
            boxShadow: `0 0 60px ${palette.glow}`
          }}
        />
        {[0, 1, 2, 3, 4, 5].map((node) => {
          const points = [
            [808, 148],
            [1038, 190],
            [1008, 414],
            [794, 462],
            [682, 312],
            [884, 298]
          ];
          const [x, y] = points[node];
          return (
            <div
              key={node}
              style={{
                position: 'absolute',
                left: x,
                top: y,
                width: node === 5 ? 46 : 22,
                height: node === 5 ? 46 : 22,
                borderRadius: 999,
                background: node === 5 ? '#f8fafc' : palette.primary,
                boxShadow: `0 0 34px ${node === 5 ? '#fff' : palette.glow}`
              }}
            />
          );
        })}
        <div
          style={{
            position: 'absolute',
            left: 76,
            top: 70,
            display: 'flex',
            alignItems: 'center',
            gap: 18
          }}
        >
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `1px solid ${palette.primary}`,
              boxShadow: `0 0 34px ${palette.glow}`,
              color: '#f8fafc',
              fontSize: 14,
              fontWeight: 900,
              letterSpacing: '-.04em'
            }}
          >
            TKN
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ fontSize: 27, fontWeight: 900, letterSpacing: '.24em' }}>TEHKNÉ</div>
            <div style={{ color: palette.primary, fontSize: 12, fontWeight: 800, letterSpacing: '.48em' }}>SOLUTIONS</div>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 76, top: 170, width: 650, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              width: 'fit-content',
              padding: '10px 16px',
              borderRadius: 999,
              border: '1px solid rgba(148,163,184,.22)',
              background: 'rgba(15,23,42,.72)',
              color: palette.primary,
              fontSize: 18,
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: '.16em',
              textTransform: 'uppercase'
            }}
          >
            {post.category}
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: title.length > 48 ? 62 : 74,
              lineHeight: 0.94,
              letterSpacing: '-.07em',
              fontWeight: 950,
              maxWidth: 650
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: 26,
              width: 170,
              height: 3,
              background: `linear-gradient(90deg, ${palette.primary}, ${palette.secondary})`,
              boxShadow: `0 0 26px ${palette.glow}`
            }}
          />
          <div style={{ marginTop: 28, color: '#cbd5e1', fontSize: 29, lineHeight: 1.32, maxWidth: 620 }}>
            {palette.label}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            left: 76,
            bottom: 58,
            right: 76,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#94a3b8',
            fontSize: 18,
            letterSpacing: '.08em',
            textTransform: 'uppercase'
          }}
        >
          <div style={{ display: 'flex', gap: 26 }}>
            {post.tags.slice(0, 4).map((tag) => (
              <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 9, height: 9, borderRadius: 999, background: palette.secondary }} />
                {tag}
              </div>
            ))}
          </div>
          <div style={{ color: palette.primary, fontWeight: 900 }}>TEHKNÉ INSIGHTS</div>
        </div>
      </div>
    ),
    size
  );
}
