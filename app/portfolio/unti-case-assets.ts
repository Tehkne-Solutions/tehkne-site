export type UntiCaseAsset = {
  image: string;
  fullImage: string;
};

const baseUrl = 'https://www.untidigital.com.br';

function asset(image: string, fullImage: string = image): UntiCaseAsset {
  return {
    image: `${baseUrl}${image}`,
    fullImage: `${baseUrl}${fullImage}`
  };
}

export const untiCaseAssets: Record<string, UntiCaseAsset> = {
  'grupo-savol': asset(
    '/images/cases/grupo-savol/unti-digital-cases-grupo-savol-banner.webp',
    '/images/cases/grupo-savol/unti-digital-cases-grupo-savol-print-site.webp'
  ),
  toriba: asset(
    '/images/cases/toriba/unti-digital-cases-toriba-banner.webp',
    '/images/cases/toriba/unti-digital-cases-toriba-print-site.webp'
  ),
  'auto-shopping-tiquatira': asset(
    '/images/cases/auto-shopping-tiquatira/auto-shopping-tiquatira-banner.webp',
    '/images/cases/auto-shopping-tiquatira/auto-shopping-tiquatira-print-site.webp'
  ),
  'dr-eduardo-ursolino': asset(
    '/images/cases/dr-eduardo-ursulino/unti-digital-cases-dr-eduardo-ursolino-banner.webp',
    '/images/cases/dr-eduardo-ursulino/unti-digital-cases-dr-eduardo-ursolino-print-site.webp'
  ),
  'dr-alessandro-linder': asset('/images/cases/placeholders/saude.svg'),
  'uroclinica-de-joinville': asset(
    '/images/cases/uroclinica-de-joinville/unti-digital-cases-uroclinica-de-joinville-banner.webp',
    '/images/cases/uroclinica-de-joinville/unti-digital-cases-uroclinica-de-joinville-print-site.webp'
  ),
  'hospital-thereza-mussi': asset(
    '/images/cases/hospital-thereza-mussi/unti-digital-cases-hospital-thereza-mussi-banner.webp',
    '/images/cases/hospital-thereza-mussi/unti-digital-cases-hospital-thereza-mussi-print-site].webp'
  ),
  'human-clinic': asset(
    '/images/cases/human-clinic/unti-digital-cases-human-clinic-banner.webp',
    '/images/cases/human-clinic/unti-digital-cases-human-clinic-print-site.webp'
  ),
  'dra-isabel-borelli': asset(
    '/images/cases/dra-isabel-borelli/unti-digital-cases-dra-isabel-borelli-banner.webp',
    '/images/cases/dra-isabel-borelli/unti-digital-cases-dra-isabel-borelli-print-site.webp'
  ),
  'dra-gionvana-bombonatto': asset(
    '/images/cases/dra-gionvana-bombonatto/unti-digtal-cases-dra-gionvana-bombonatto-banner.webp',
    '/images/cases/dra-gionvana-bombonatto/unti-digtal-cases-dra-gionvana-bombonatto-print-site.webp'
  ),
  'dr-thiago-azuaga': asset(
    '/images/cases/dr-thiago-azuaga/unti-digital-cases-dr-thiago-azuaga-banner.webp',
    '/images/cases/dr-thiago-azuaga/unti-digital-cases-dr-thiago-azuaga-print-site.webp'
  ),
  'grupo-aljr': asset(
    '/images/cases/grupo-ALJR/unti-digital-cases-grupo-ALJR-banner.webp',
    '/images/cases/grupo-ALJR/unti-digital-cases-grupo-ALJR-print-site.webp'
  ),
  'conect-7g': asset(
    '/images/cases/conect-7g/unti-digital-cases-conect-7g-banner.webp',
    '/images/cases/conect-7g/unti-digital-cases-conect-7g-print-site.webp'
  ),
  'landing-page-conect-7g': asset(
    '/images/cases/lp-conect-7g/unti-digital-cases-lp-conect-7g-banner.webp',
    '/images/cases/lp-conect-7g/unti-digital-cases-lp-conect-7g-print-site.webp'
  ),
  'clube-recreativo-de-sumare': asset(
    '/images/cases/clube-recreativo-de-sumare/unti-digital-cases-clube-recreativo-de-sumare-banner.webp',
    '/images/cases/clube-recreativo-de-sumare/unti-digital-cases-clube-recreativo-de-sumare-print-site.webp'
  ),
  'odete-design': asset(
    '/images/cases/odete-design/unti-digital-cases-odete-design-banner.webp',
    '/images/cases/odete-design/unti-digital-cases-odete-design-print-site.webp'
  ),
  'renata-pimentel': asset(
    '/images/cases/renata-pimentel/unti-digital-cases-renata-pimentel-banner.webp',
    '/images/cases/renata-pimentel/unti-digital-cases-renata-pimentel-print-site.webp'
  ),
  'wiki-das-celebridades': asset(
    '/images/cases/plataforma-wiki-das-celebridades/unti-digital-cases-plataforma-wiki-das-celebridades-banner.webp',
    '/images/cases/plataforma-wiki-das-celebridades/unti-digital-cases-plataforma-wiki-das-celebridades-print-site.webp'
  ),
  'plataforma-wiki-das-celebridades': asset(
    '/images/cases/plataforma-wiki-das-celebridades/unti-digital-cases-plataforma-wiki-das-celebridades-banner.webp',
    '/images/cases/plataforma-wiki-das-celebridades/unti-digital-cases-plataforma-wiki-das-celebridades-print-site.webp'
  ),
  'nerd-ao-maximo': asset(
    '/images/cases/nerd-ao-maximo/unti-digital-cases-nerd-ao-maximo-banner.webp',
    '/images/cases/nerd-ao-maximo/unti-digital-cases-nerd-ao-maximo-print-site.webp'
  ),
  'catalogo-grupo-niks': asset(
    '/images/cases/catalogo-grupo-niks/unti-digital-cases-catalogo-grupo-niks-banner.webp',
    '/images/cases/catalogo-grupo-niks/unti-digital-cases-catalogo-grupo-niks-print-site.webp'
  ),
  'ecommerce-onile-alimentos': asset(
    '/images/cases/ecommerce-onile-alimentos/unti-digital-cases-ecommerce-onile-alimentos-banner.webp',
    '/images/cases/ecommerce-onile-alimentos/unti-digital-cases-ecommerce-onile-alimentos-print-site.webp'
  ),
  suporteshop: asset(
    '/images/cases/SWebsite-suporteshop/unti-digital-cases-SWebsite-suporteshop-banner.webp',
    '/images/cases/SWebsite-suporteshop/unti-digital-cases-SWebsite-suporteshop-print-site.webp'
  ),
  'swebsite-suporteshop': asset(
    '/images/cases/SWebsite-suporteshop/unti-digital-cases-SWebsite-suporteshop-banner.webp',
    '/images/cases/SWebsite-suporteshop/unti-digital-cases-SWebsite-suporteshop-print-site.webp'
  ),
  'sos-pistolas': asset(
    '/images/cases/SOS-pistolas/unti-digital-cases-SOSpistolas-banner.webp',
    '/images/cases/SOS-pistolas/unti-digital-cases-SOSpistolas-print-site.webp'
  )
};

export function getUntiCaseAsset(slug: string) {
  return untiCaseAssets[slug];
}
