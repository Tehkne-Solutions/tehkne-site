import { ArrowUpRight, Building2 } from 'lucide-react';

export type ClientLogoItem = {
  name: string;
  category: string;
  portfolioSlug?: string;
  officialUrl?: string;
};

const featuredClients: ClientLogoItem[] = [
  { name: 'UNTI Digital', category: 'Tecnologia', portfolioSlug: 'unti-digital', officialUrl: 'https://www.untidigital.com.br/' },
  { name: 'Savana Publicidade', category: 'Agência', portfolioSlug: 'savana-publicidade', officialUrl: 'https://savanapublicidade.com.br/' },
  { name: 'LiuGong', category: 'Indústria', portfolioSlug: 'liugong-br', officialUrl: 'https://liugongla.com/' },
  { name: 'Dafra', category: 'Automotivo', portfolioSlug: 'dafra-motos', officialUrl: 'https://www.daframotos.com.br/' },
  { name: 'Beg Gin', category: 'Produto', portfolioSlug: 'beggin', officialUrl: 'https://beggin.vercel.app/' },
  { name: 'VacinaOne', category: 'Saúde', portfolioSlug: 'vacina-one', officialUrl: 'https://vacina-one-site.vercel.app/' }
];

const clientLogos: ClientLogoItem[] = [
  { name: 'Walsywa', category: 'Construção' },
  { name: 'Grupo Caraume', category: 'Grupo empresarial' },
  { name: 'Splack', category: 'Indústria' },
  { name: 'Döhler', category: 'Têxtil' },
  { name: 'Vacinar', category: 'Nutrição animal' },
  { name: 'UNICOM', category: 'Corporativo' },
  { name: 'ADM', category: 'Agro' },
  { name: 'Cargill', category: 'Agro' },
  { name: 'Stine', category: 'Agro', portfolioSlug: 'stine-sementes' },
  { name: 'Land', category: 'Genética & sementes' },
  { name: 'Agroceres', category: 'Agro' },
  { name: 'Liceu Salesiano', category: 'Educação' },
  { name: 'Coco Bambu', category: 'Restaurante' },
  { name: 'Marino Transportes', category: 'Logística' },
  { name: 'Cafezal', category: 'Gastronomia' },
  { name: 'Calegaris', category: 'Supermercados' },
  { name: 'Conexão Amazônia', category: 'Comunicação' },
  { name: 'Guarus Plaza Shopping', category: 'Shopping' },
  { name: 'Leggett & Platt', category: 'Indústria' },
  { name: 'Simmons', category: 'Colchões' },
  { name: 'VECON', category: 'Construção' },
  { name: 'Rio Verde', category: 'Construtora' },
  { name: 'Infinity Pharma', category: 'Farmacêutico' },
  { name: 'Rede Farmaxima', category: 'Farmácia' },
  { name: 'KTM', category: 'Automotivo' },
  { name: 'Smart Fit', category: 'Academia' },
  { name: 'Academia A', category: 'Fitness' },
  { name: '+Pet', category: 'Pet' },
  { name: 'Óticas Carol', category: 'Varejo' },
  { name: 'Toriba', category: 'Hotelaria', portfolioSlug: 'toriba' },
  { name: 'Thereza Mussi Hospital', category: 'Saúde', portfolioSlug: 'hospital-thereza-mussi' },
  { name: 'Onile', category: 'Alimentos', portfolioSlug: 'ecommerce-onile-alimentos' },
  { name: 'TAP Manutenções', category: 'Serviços' },
  { name: 'Sua Imprensa', category: 'Comunicação' }
];

const carousel = [...clientLogos, ...clientLogos];

function ClientLogoCard({ item }: { item: ClientLogoItem }) {
  const href = item.portfolioSlug ? `/portfolio/${item.portfolioSlug}` : item.officialUrl;
  const Tag = href ? 'a' : 'div';

  return (
    <Tag className="client-logo-card" href={href || undefined} target={item.portfolioSlug ? undefined : '_blank'} rel={item.portfolioSlug ? undefined : 'noreferrer'}>
      <span className="client-logo-mark"><Building2 size={16} /></span>
      <strong>{item.name}</strong>
      <small>{item.category}</small>
    </Tag>
  );
}

export default function ClientProofSection() {
  return (
    <section className="section-frame client-proof-section">
      <div className="section-heading inline">
        <div>
          <span className="eyebrow">Clientes e marcas no histórico</span>
          <h2>Repertório real em saúde, indústria, varejo, agro, automotivo, educação e tecnologia.</h2>
          <p>Unificamos clientes e marcas dos ecossistemas UNTI, Savana e Tehkné em uma vitrine única. Quando há case publicado, o card abre a página do portfólio. Quando ainda não há fonte oficial validada, o cliente aparece como prova de repertório sem inventar imagem.</p>
        </div>
        <a className="text-link" href="/portfolio">Ver todos os cases <ArrowUpRight size={16} /></a>
      </div>

      <div className="client-feature-grid">
        {featuredClients.map((client) => <ClientLogoCard key={client.name} item={client} />)}
      </div>

      <div className="client-logo-marquee" aria-label="Carrossel de clientes e marcas">
        <div className="client-logo-track">
          {carousel.map((client, index) => <ClientLogoCard key={`${client.name}-${index}`} item={client} />)}
        </div>
      </div>
    </section>
  );
}
