import { NextRequest, NextResponse } from 'next/server';

const legacyLocaleMap: Record<string, Record<string, string>> = {
  en: {
    services: 'servicos',
    solutions: 'solucoes',
    portfolio: 'portfolio',
    method: 'metodo',
    blog: 'blog',
    about: 'sobre',
    contact: 'contato'
  },
  es: {
    servicios: 'servicos',
    soluciones: 'solucoes',
    portfolio: 'portfolio',
    metodo: 'metodo',
    blog: 'blog',
    sobre: 'sobre',
    contacto: 'contato'
  },
  'pt-br': {
    servicos: 'servicos',
    solucoes: 'solucoes',
    portfolio: 'portfolio',
    metodo: 'metodo',
    blog: 'blog',
    sobre: 'sobre',
    contato: 'contato'
  }
};

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0];

  if (!locale || !(locale in legacyLocaleMap)) {
    return NextResponse.next();
  }

  const pageSegment = segments[1];
  const pageMap = legacyLocaleMap[locale];
  const nextPath = pageSegment ? pageMap[pageSegment] : '';
  const rest = segments.slice(2).join('/');
  const destinationPath = nextPath ? `/${[nextPath, rest].filter(Boolean).join('/')}` : '/';
  const url = request.nextUrl.clone();
  url.pathname = destinationPath;
  url.search = search;

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ['/en/:path*', '/es/:path*', '/pt-br/:path*']
};
