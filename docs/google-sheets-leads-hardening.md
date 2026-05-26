# Proteção do webhook de leads no Google Sheets

Use este bloco no começo do `doPost(e)` do Apps Script da planilha, antes de gravar qualquer linha.

```js
function normalizeLeadText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function isEmptyPlaceholderLead(payload) {
  const fields = [
    payload.name,
    payload.nome,
    payload.email,
    payload.phone,
    payload.telefone,
    payload.company,
    payload.empresa,
    payload.interest,
    payload.servico,
    payload.message,
    payload.mensagem,
    payload.page,
    payload.page_url
  ];

  const combined = normalizeLeadText(fields.join('\n'));

  const oldPlaceholder = combined.includes('ola, vim pelo site da tehkne solutions')
    && combined.includes('nome: -')
    && combined.includes('email: -')
    && combined.includes('mensagem: -');

  const currentPlaceholder = combined.includes('nome: nao informado')
    && combined.includes('servico: nao selecionado')
    && combined.includes('mensagem: nao informada');

  const hasName = String(payload.name || payload.nome || '').trim().length >= 2;
  const hasMessage = String(payload.message || payload.mensagem || '').trim().length >= 10;
  const hasInterest = String(payload.interest || payload.servico || '').trim().length > 0;
  const hasContact = String(payload.email || payload.phone || payload.telefone || '').trim().length > 0;

  return oldPlaceholder || currentPlaceholder || !hasName || !hasMessage || !hasInterest || !hasContact;
}

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || '{}');

  // Opcional, mas recomendado se o site enviar X-Tehkne-Lead-Key.
  // const expectedKey = PropertiesService.getScriptProperties().getProperty('LEADS_WEBHOOK_KEY');
  // const receivedKey = e.parameter.key || '';
  // if (expectedKey && receivedKey !== expectedKey) {
  //   return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'invalid_key' }))
  //     .setMimeType(ContentService.MimeType.JSON);
  // }

  if (isEmptyPlaceholderLead(payload)) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, skipped: 'empty_placeholder' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // A partir daqui entra seu appendRow atual.
}
```

## Diagnóstico do problema visto na planilha

Os registros falsos tinham o formato antigo:

```txt
Olá, vim pelo site da Tehkné Solutions.

Nome: -
Empresa: -
Email: -
Telefone: -
Serviço: -
Orçamento: -
Prazo: -
Página: -

Mensagem: -
```

Esse padrão não corresponde ao formulário atual do site. Portanto, as causas mais prováveis são:

1. deploy antigo ainda recebendo tráfego;
2. webhook antigo da planilha exposto e chamado diretamente;
3. automação/teste externo usando o modelo antigo;
4. Apps Script aceitando payload sem validação.

## Recomendação

- Manter validação no endpoint Next.js.
- Manter validação no Apps Script.
- Se possível, trocar a URL do webhook antigo.
- Adicionar chave compartilhada no webhook.
- Remover/arquivar linhas falsas já criadas na aba `LeadsQueue`.
