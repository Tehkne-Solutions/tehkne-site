import { getPortfolioMetadata } from '../portfolio-data';
import { PortfolioCasePage } from '../PortfolioCasePage';
import CaseScreens from '../CaseScreens';

const siteUrl = 'https://savol-seminovos.vercel.app/';

export const metadata = getPortfolioMetadata('savol-seminovos') ?? {
  title: 'Case: Savol Seminovos | Tehkné Solutions',
  description: 'Case Savol Seminovos no portfólio da Tehkné Solutions.'
};

export default function Page() {
  return (
    <>
      <PortfolioCasePage slug="savol-seminovos" />
      <CaseScreens title="Savol Seminovos" url={siteUrl} />
    </>
  );
}
