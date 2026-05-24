import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortfolioCasePage } from '../PortfolioCasePage';
import { SavanaClientCasePage } from '../SavanaClientCasePage';
import { getPortfolioCase, getPortfolioMetadata, getAllPortfolioSlugs } from '../portfolio-data';
import { getSavanaProjectCase, getSavanaPortfolioMetadata, getAllSavanaPortfolioSlugs } from '../savana-project-cases';
import { getMemeProjectCase, getMemePortfolioMetadata, getAllMemePortfolioSlugs } from '../meme-project-cases';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...getAllPortfolioSlugs(), ...getAllSavanaPortfolioSlugs(), ...getAllMemePortfolioSlugs()];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const metadata = getPortfolioMetadata(slug) ?? getSavanaPortfolioMetadata(slug) ?? getMemePortfolioMetadata(slug);
  if (!metadata) {
    return {
      title: 'Case não encontrado | Tehkné Solutions',
      description: 'Case não encontrado no portfólio da Tehkné Solutions.'
    };
  }
  return metadata;
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
