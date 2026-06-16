# WhatsApp de atendimento — Tehkné Solutions

Sistema de atendimento flutuante adaptado para o site institucional da Tehkné Solutions.

## Arquivos alterados/adicionados

- `app/components/FloatingContactButton.tsx`
- `app/components/FloatingContactButton.module.css`
- `app/api/whatsapp-atendimento/route.ts`

## Como funciona

O antigo botão flutuante de contato foi substituído por um mini chat guiado de WhatsApp.

O fluxo coleta:

1. Nome
2. E-mail
3. Telefone/WhatsApp
4. Assunto do atendimento

Depois direciona o visitante para o WhatsApp via link oficial `wa.me`, com uma mensagem pronta contendo os dados informados e a página de origem.

## Variáveis de ambiente

Configure no Vercel:

```env
TEHKNE_WHATSAPP_PHONE=5519998930846
```

Também é possível separar números por frente:

```env
TEHKNE_WHATSAPP_SISTEMAS_PHONE=5519998930846
TEHKNE_WHATSAPP_WEB_PHONE=5519998930846
TEHKNE_WHATSAPP_IA_PHONE=5519998930846
TEHKNE_WHATSAPP_SUPORTE_PHONE=5519998930846
TEHKNE_WHATSAPP_PARCEIROS_PHONE=5519998930846
```

Se as variáveis específicas não existirem, todas as frentes usam `TEHKNE_WHATSAPP_PHONE`.

## Frentes configuradas

- Sistemas e produto digital
- Sites, WordPress e landing pages
- IA, automações e integrações
- Suporte, manutenção e segurança
- Parcerias e agências
- Atendimento geral

## Analytics

O componente dispara eventos para `dataLayer` e `gtag`, quando disponíveis:

- `tehkne_floating_whatsapp_click`
- `tehkne_whatsapp_auto_open`
- `tehkne_whatsapp_start`

## Observação

O sistema não envia mensagens automáticas pelo WhatsApp. Ele apenas monta o link oficial `wa.me` depois que o usuário preenche o mini chat e clica em “Ir para o WhatsApp”.

Assinatura: Tehkné Solutions
