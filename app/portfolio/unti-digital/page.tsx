import { getPortfolioMetadata } from '../portfolio-data';
import { PortfolioCasePage } from '../PortfolioCasePage';

export const metadata = getPortfolioMetadata('unti-digital') ?? {
  title: 'Case: UNTI Digital | Tehkné Solutions',
  description: 'Case UNTI Digital no portfólio da Tehkné Solutions.'
};

export default function Page() {
  return <PortfolioCasePage slug="unti-digital" />;
}
