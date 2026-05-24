import { SavanaClientCasePage } from '../SavanaClientCasePage';
import { getSavanaPortfolioMetadata } from '../savana-project-cases';

export const metadata = getSavanaPortfolioMetadata('savana-sinfonia-residencial') ?? { title: 'Case: Sinfonia Residencial | Tehkné Solutions' };

export default function Page() {
  return <SavanaClientCasePage slug="savana-sinfonia-residencial" />;
}
