import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortfolioCasePage } from '../PortfolioCasePage';
import { getPortfolioCase, getPortfolioMetadata, getAllPortfolioSlugs } from '../portfolio-data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPortfolioSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const metadata = getPortfolioMetadata(slug);
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
  const project = getPortfolioCase(slug);

  if (!project) {
    notFound();
  }

  return <PortfolioCasePage slug={slug} />;
}
