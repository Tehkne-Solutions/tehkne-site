import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 78% 40%, rgba(139,92,246,.36), transparent 28%), radial-gradient(circle at 18% 22%, rgba(56,189,248,.24), transparent 32%), linear-gradient(135deg, #020617 0%, #070b1a 48%, #111827 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.24, backgroundImage: 'linear-gradient(rgba(148,163,184,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.12) 1px, transparent 1px)', backgroundSize: '46px 46px' }} />
        <div style={{ position: 'absolute', right: 74, top: 86, width: 392, height: 392, borderRadius: '50%', border: '1px solid rgba(125,211,252,.24)', boxShadow: '0 0 80px rgba(56,189,248,.18), inset 0 0 90px rgba(139,92,246,.14)' }} />
        <div style={{ position: 'absolute', right: 138, top: 150, width: 264, height: 264, borderRadius: 44, transform: 'rotate(45deg)', border: '2px solid rgba(125,211,252,.72)', background: 'rgba(15,23,42,.36)', boxShadow: '0 0 64px rgba(56,189,248,.28)' }} />
        <div style={{ position: 'absolute', right: 244, top: 254, width: 56, height: 56, borderRadius: 18, transform: 'rotate(45deg)', background: '#f8fafc', boxShadow: '0 0 70px rgba(255,255,255,.48), 0 0 120px rgba(139,92,246,.42)' }} />
        <div style={{ position: 'absolute', left: 76, top: 72, display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 50, height: 50, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(125,211,252,.44)', boxShadow: '0 0 34px rgba(56,189,248,.22)', fontSize: 15, fontWeight: 950, letterSpacing: '-.05em' }}>TKN</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ fontSize: 28, fontWeight: 950, letterSpacing: '.24em' }}>TEHKNÉ</div>
            <div style={{ color: '#7dd3fc', fontSize: 12, fontWeight: 900, letterSpacing: '.48em' }}>SOLUTIONS</div>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 76, top: 180, width: 720, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', width: 'fit-content', padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(148,163,184,.22)', background: 'rgba(15,23,42,.72)', color: '#7dd3fc', fontSize: 18, lineHeight: 1, fontWeight: 900, letterSpacing: '.16em', textTransform: 'uppercase' }}>Software House • Produto Digital • IA</div>
          <div style={{ marginTop: 28, fontSize: 72, lineHeight: 0.94, letterSpacing: '-.07em', fontWeight: 950, maxWidth: 730 }}>Sistemas digitais reais para operações que precisam escalar.</div>
          <div style={{ marginTop: 28, width: 190, height: 3, background: 'linear-gradient(90deg, #38bdf8, #8b5cf6, #d946ef)', boxShadow: '0 0 26px rgba(56,189,248,.34)' }} />
          <div style={{ marginTop: 28, color: '#cbd5e1', fontSize: 29, lineHeight: 1.32, maxWidth: 680 }}>Arquitetura, design, desenvolvimento, automações e sustentação técnica.</div>
        </div>
        <div style={{ position: 'absolute', left: 76, bottom: 54, right: 76, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94a3b8', fontSize: 18, letterSpacing: '.08em', textTransform: 'uppercase' }}>
          <div style={{ display: 'flex', gap: 26 }}>
            {['Next.js', 'WordPress', 'IA', 'UX/UI'].map((tag) => (
              <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 9, height: 9, borderRadius: 999, background: '#8b5cf6' }} />
                {tag}
              </div>
            ))}
          </div>
          <div style={{ color: '#7dd3fc', fontWeight: 900 }}>tehknesolutions.com.br</div>
        </div>
      </div>
    ),
    size
  );
}
