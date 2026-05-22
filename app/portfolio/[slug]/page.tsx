import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortfolioCasePage, getAllPortfolioSlugs } from '../PortfolioCasePage';
import { getPortfolioCase } from '../portfolio-data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPortfolioSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioCase(slug);

  if (!project) {
    return {
      title: 'Case não encontrado | Tehkné Solutions'
    };
  }

  return {
    title: `Case: ${project.title} | Tehkné Solutions`,
    description: `${project.summary} Stack: ${project.stack.join(', ')}.`
  };
}

export default async function PortfolioCaseRoute({ params }: PageProps) {
  const { slug } = await params;
  const project = getPortfolioCase(slug);

  if (!project) {
    notFound();
  }

  return <PortfolioCasePage slug={slug} />;
}
