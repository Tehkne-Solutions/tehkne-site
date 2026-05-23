import { getPortfolioMetadata } from '../portfolio-data';
import { PortfolioCasePage } from '../PortfolioCasePage';

export const metadata = getPortfolioMetadata('tehkne-flow') ?? {
  title: 'Case: Tehkné Flow | Tehkné Solutions',
  description: 'Case Tehkné Flow no portfólio da Tehkné Solutions.'
};

export default function Page() {
  return <PortfolioCasePage slug="tehkne-flow" />;
}
