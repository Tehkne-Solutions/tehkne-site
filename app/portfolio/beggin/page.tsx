import { getPortfolioMetadata } from '../portfolio-data';
import { PortfolioCasePage } from '../PortfolioCasePage';
import CaseScreens from '../CaseScreens';

export const metadata = getPortfolioMetadata('beggin') ?? {
  title: 'Case: Beggin | Tehkné Solutions',
  description: 'Case Beggin no portfólio da Tehkné Solutions.'
};

export default function Page() {
  return (
    <>
      <PortfolioCasePage slug="beggin" />
      <CaseScreens title="Beggin" url="https://beggin.vercel.app/" />
    </>
  );
}
