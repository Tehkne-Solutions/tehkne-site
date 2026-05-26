# Lead anti-spam hard mode

## Objetivo

Impedir que leads vazios, bots e chamadas diretas poluam a planilha/CRM.

## Camadas já existentes no site

- Honeypot invisível no formulário.
- Campos obrigatórios no front-end.
- Validação server-side de nome, serviço, mensagem e contato.
- Bloqueio de payload vazio e placeholder antigo.
- Bloqueio por referer inválido.
- Bloqueio por envio rápido demais.
- Bloqueio por baixa interação no formulário.
- Filtro de padrões básicos de spam.
- Guia de validação no Apps Script da planilha.

## Hard mode recomendado

Adicionar também:

1. Checkbox humano próprio antes do botão de envio.
2. Verificação visual externa do tipo checkbox.
3. Validação server-side do token da verificação visual.
4. Falha fechada em produção quando a chave secreta não estiver configurada.
5. Chave compartilhada entre site e Apps Script.
6. Rotação da URL antiga do webhook da planilha.
7. Bloqueio no Apps Script antes de qualquer appendRow.

## Variáveis de ambiente necessárias

Na Vercel:

```txt
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=chave_publica_do_checkbox
RECAPTCHA_SECRET_KEY=chave_secreta_do_checkbox
LEADS_WEBHOOK_KEY=chave_compartilhada_com_apps_script
```

## Observação operacional

Enquanto o deploy novo estiver bloqueado por build-rate-limit, a produção pode continuar recebendo tráfego em versão antiga. Depois que o build publicar, testar:

1. Enviar formulário vazio: deve falhar.
2. Enviar sem contato: deve falhar.
3. Enviar rápido demais: deve falhar.
4. Enviar com dados reais e checkbox: deve registrar.
5. Chamar webhook direto da planilha com placeholder antigo: deve ser ignorado pelo Apps Script.

## Importante

A URL antiga do webhook da planilha deve ser considerada comprometida se recebeu payload vazio diretamente. O ideal é publicar novo Apps Script/webhook e atualizar `LEADS_WEBHOOK_URL` na Vercel.
