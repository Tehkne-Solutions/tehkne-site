export const WHATSAPP_NUMBER = '5519998930846';
export const WHATSAPP_DISPLAY = '+55 19 99893-0846';

export function whatsAppHref(message: string) {
  return `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  home: 'Olá, Tehkné! Vim pela Home do site e quero solicitar um diagnóstico estratégico para transformar uma ideia, processo ou operação em sistema digital real.',
  servicos: 'Olá, Tehkné! Vim pela página de Serviços e quero entender qual serviço combina melhor com minha demanda: site premium, plataforma web, integrações, governança, sustentação ou white label técnico.',
  solucoes: 'Olá, Tehkné! Vim pela página de Soluções e quero conversar sobre arquitetura, desenvolvimento, WordPress, IA, automações, UX ou sustentação para minha operação.',
  portfolio: 'Olá, Tehkné! Vim pela página de Portfólio e quero conversar sobre um projeto parecido com os cases e experiências apresentados no site.',
  metodo: 'Olá, Tehkné! Vim pela página Método GIP e quero entender como aplicar descoberta, arquitetura, design, desenvolvimento, validação e evolução no meu projeto.',
  tehkneOs: 'Olá, Tehkné! Vim pela página Tehkné OS e quero entender como estruturar uma operação com processos, documentação, automações, IA e governança técnica.',
  contato: 'Olá, Tehkné! Vim pela página de Contato e quero iniciar uma conversa sobre meu projeto.',
  sobre: 'Olá, Tehkné! Vim pela página Sobre e quero conversar sobre como a Tehkné pode atuar como braço técnico na minha operação.',
  diagnostico: 'Olá, Tehkné! Quero solicitar um diagnóstico técnico para meu projeto.'
};