'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function isCTA(element: HTMLElement) {
  const href = element.getAttribute('href') ?? '';
  const className = element.getAttribute('class') ?? '';
  const text = element.textContent?.trim() ?? '';

  return (
    className.includes('btn') ||
    className.includes('text-link') ||
    className.includes('nav-cta') ||
    className.includes('floating-contact-button') ||
    href.includes('/contato') ||
    href.includes('wa.me') ||
    href.includes('whatsapp') ||
    /diagnóstico|contato|whatsapp|briefing|proposta|solicitar|agendar|quero|falar|portfolio|portfólio|case|blog|artigo/i.test(text)
  );
}

function getCTAContext(element: HTMLElement) {
  const section = element.closest('section');
  const sectionId = section?.getAttribute('id') ?? undefined;
  const heading = section?.querySelector('h1, h2, h3')?.textContent?.trim() ?? undefined;
  const href = element.getAttribute('href') ?? undefined;
  const text = element.textContent?.trim().replace(/\s+/g, ' ') ?? '';

  let ctaIntent = 'navigation';
  if (href?.includes('/contato') || /diagnóstico|contato|briefing|proposta|solicitar|agendar|quero|falar/i.test(text)) ctaIntent = 'lead';
  if (href?.includes('wa.me') || href?.includes('whatsapp')) ctaIntent = 'whatsapp';
  if (href?.includes('/portfolio') || /portf[oó]lio|case/i.test(text)) ctaIntent = 'portfolio';
  if (href?.includes('/blog') || /blog|artigo/i.test(text)) ctaIntent = 'content';

  return {
    cta_text: text,
    cta_href: href,
    cta_class: element.getAttribute('class') ?? undefined,
    cta_intent: ctaIntent,
    section_id: sectionId,
    section_heading: heading,
    page_path: window.location.pathname,
    page_url: window.location.href
  };
}

export default function CTAAnalytics() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const element = target?.closest('a, button') as HTMLElement | null;

      if (!element || !isCTA(element)) return;

      const eventData = getCTAContext(element);

      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({
        event: 'tehkne_cta_click',
        ...eventData
      });

      window.gtag?.('event', 'cta_click', {
        event_category: 'engagement',
        event_label: eventData.cta_text,
        ...eventData
      });

      if (eventData.cta_intent === 'lead' || eventData.cta_intent === 'whatsapp') {
        window.dataLayer.push({
          event: 'generate_lead_intent',
          ...eventData
        });
        window.gtag?.('event', 'generate_lead', {
          event_category: 'conversion',
          event_label: eventData.cta_text,
          ...eventData
        });
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
