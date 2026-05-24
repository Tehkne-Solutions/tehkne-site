export type UntiCaseAsset = {
  image: string;
  fullImage: string;
};

const baseUrl = 'https://www.untidigital.com.br';
const unsplash = 'https://images.unsplash.com';

function resolveAssetPath(path: string) {
  return path.startsWith('http') ? path : `${baseUrl}${path}`;
}

function asset(image: string, fullImage: string = image): UntiCaseAsset {
  return {
    image: resolveAssetPath(image),
    fullImage: resolveAssetPath(fullImage)
  };
}

function freeImage(photoId: string): string {
  return `${unsplash}/${photoId}?auto=format&fit=crop&w=1400&q=82`;
}

export const untiCaseAssets: Record<string, UntiCaseAsset> = {
  'tehkne-flow': asset(freeImage('photo-1551288049-bebda4e38f71')),
  'vacina-one': asset(freeImage('photo-1576091160399-112ba8d25d1d')),
  'unti-digital': asset(freeImage('photo-1551434678-e076c223a692')),
  'savol-seminovos': asset(freeImage('photo-1492144534655-ae79c964c9d7')),
  beggin: asset(freeImage('photo-1542838132-92c53300491e')),
  'hnk-agent': asset(freeImage('photo-1518770660439-4636190af475')),
  'meme-digital': asset(freeImage('photo-1557804506-669a67965ba0')),
  'savana-publicidade': asset(freeImage('photo-1497366754035-f200968a6e72')),
  'tehkne-portfolio-indexer': asset(freeImage('photo-1558494949-ef010cbdcc31')),
  'tehkne-guardian-wp': asset(freeImage('photo-1563986768609-322da13575f3')),
  'lexia-game': asset(freeImage('photo-1511512578047-dfb367046420')),
  'hnk-game-gip-universe': asset(freeImage('photo-1518709268805-4e9042af2176')),
  'academia-terapeuta-cristao': asset(freeImage('photo-1522202176988-66273c2fd55f')),
  'hnk-english-app': asset(freeImage('photo-1456513080510-7bf3a84b82f8')),
  bytebot: asset(freeImage('photo-1485827404703-89b55fcc595e')),
  'gip-os': asset(freeImage('photo-1519389950473-47ba0277781c')),
  'gip-framework': asset(freeImage('photo-1500530855697-b586d89ba3ee')),
  'gip-plugins': asset(freeImage('photo-1515879218367-8466d910aaa4')),
  'gip-wp-manager': asset(freeImage('photo-1460925895917-afdab827c52f')),
  'dafra-form-leads-capture': asset(freeImage('photo-1503376780353-7e6692767b70')),
  'liugong-br': asset(freeImage('photo-1504307651254-35680f356dfd')),
  'clinica-arthaje': asset(freeImage('photo-1586773860418-d37222d8fce3')),

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
  ),

  'mais-de-70-sites-wordpress': asset(freeImage('photo-1547658719-da2b51169166')),
  'plugins-e-temas-proprios': asset(freeImage('photo-1498050108023-c5249f4df085')),
  'apps-react-native-flutter': asset(freeImage('photo-1512941937669-90a1b58e7e9c')),
  'conteudos-didaticos-comerciais': asset(freeImage('photo-1455390582262-044cdead277a')),
  'gip-core': asset(freeImage('photo-1550751827-4bd374c3f58b')),
  'gip-ui': asset(freeImage('photo-1581291518857-4e27b48ff24e')),
  'gip-memory': asset(freeImage('photo-1509228627152-72ae9ae6848d')),
  'gip-mcp-server': asset(freeImage('photo-1558494949-ef010cbdcc31')),
  'gaf2code-engine': asset(freeImage('photo-1515879218367-8466d910aaa4')),
  'hnk-core': asset(freeImage('photo-1516116216624-53e697fedbea')),
  'cronicas-hnk-game': asset(freeImage('photo-1535223289827-42f1e9919769')),
  'tehkne-flow-wp-lite': asset(freeImage('photo-1522071820081-009f0129c71c')),
  'meme-servicos': asset(freeImage('photo-1552664730-d307ca884978'))
};

export function getUntiCaseAsset(slug: string) {
  return untiCaseAssets[slug];
}
