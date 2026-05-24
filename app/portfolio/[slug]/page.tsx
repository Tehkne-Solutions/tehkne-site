import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortfolioCasePage } from '../PortfolioCasePage';
import { SavanaClientCasePage } from '../SavanaClientCasePage';
import { getPortfolioCase, getAllPortfolioSlugs } from '../portfolio-data';
import { getSavanaProjectCase, getAllSavanaPortfolioSlugs } from '../savana-project-cases';
import { getMemeProjectCase, getAllMemePortfolioSlugs } from '../meme-project-cases';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = 'https://tehknesolutions.com.br';
const logoUrl = `${siteUrl}/images/logo-tehkne-solutions-header.png`;

export async function generateStaticParams() {
  return [...getAllPortfolioSlugs(), ...getAllSavanaPortfolioSlugs(), ...getAllMemePortfolioSlugs()];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioCase(slug) ?? getSavanaProjectCase(slug) ?? getMemeProjectCase(slug);

  if (!project) {
    return {
      title: 'Case não encontrado | Tehkné Solutions',
      description: 'Case não encontrado no portfólio da Tehkné Solutions.',
      alternates: { canonical: `${siteUrl}/portfolio` }
    };
  }

  const pageUrl = `${siteUrl}/portfolio/${slug}`;
  const title = `Case ${project.title} | ${project.category} | Tehkné Solutions`;
  const description = `${project.summary} Conheça o desafio, a entrega, a stack e como a Tehkné transforma contexto técnico em solução digital real.`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'pt_BR',
      url: pageUrl,
      siteName: 'Tehkné Solutions',
      images: [
        {
          url: logoUrl,
          width: 1200,
          height: 630,
          alt: `Case ${project.title} — Tehkné Solutions`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [logoUrl]
    }
  };
}

export default async function PortfolioCaseRoute({ params }: PageProps) {
  const { slug } = await params;
  const savanaProject = getSavanaProjectCase(slug);

  if (savanaProject) {
    return <SavanaClientCasePage slug={slug} />;
  }

  const project = getPortfolioCase(slug);
  const memeProject = getMemeProjectCase(slug);

  if (!project && !memeProject) {
    notFound();
  }

  return <PortfolioCasePage slug={slug} />;
}
