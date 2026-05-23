import { getPortfolioMetadata } from '../portfolio-data';
import { PortfolioCasePage } from '../PortfolioCasePage';

export const metadata = getPortfolioMetadata('savol-seminovos') ?? {
  title: 'Case: Savol Seminovos | Tehkné Solutions',
  description: 'Case Savol Seminovos no portfólio da Tehkné Solutions.'
};

export default function Page() {
  return <PortfolioCasePage slug="savol-seminovos" />;
}
