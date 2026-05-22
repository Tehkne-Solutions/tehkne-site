export const WHATSAPP_NUMBER = '5519998930846';
export const WHATSAPP_DISPLAY = '+55 19 99893-0846';

export function whatsAppHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  home: 'Olá, Tehkné! Vim pela Home do site e quero solicitar um diagnóstico estratégico para transformar uma ideia, processo ou operação em sistema digital real.',
  solucoes: 'Olá, Tehkné! Vim pela página de Soluções e quero conversar sobre arquitetura, desenvolvimento, WordPress, IA, automações, UX ou sustentação para minha operação.',
  portfolio: 'Olá, Tehkné! Vim pela página de Portfólio e quero conversar sobre um projeto parecido com os cases e experiências apresentados no site.',
  diagnostico: 'Olá, Tehkné! Quero solicitar um diagnóstico técnico para meu projeto.'
};
