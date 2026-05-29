import type { BlogBlock } from './blog-data';

const contactHref = '/contato#contato-form';

function paragraph(text: string): BlogBlock {
  return { type: 'paragraph', text };
}

function heading(text: string): BlogBlock {
  return { type: 'heading', text };
}

function subheading(text: string): BlogBlock {
  return { type: 'subheading', text };
}

function list(items: string[]): BlogBlock {
  return { type: 'list', items };
}

function callout(text: string, cta = 'Solicitar diagnóstico'): BlogBlock {
  return { type: 'quote', text, cta, href: contactHref };
}

function diagram(text: string): BlogBlock {
  return { type: 'code', text };
}

export const blogExpansionBlocks: Record<string, BlogBlock[]> = {
  'o-que-e-arquitetura-de-solucoes': [
    heading('Arquitetura de Soluções não é briefing, escopo ou reunião inicial'),
    paragraph('Um erro comum é tratar arquitetura de soluções como sinônimo de briefing. O briefing coleta informações. A arquitetura interpreta essas informações e transforma a intenção em decisões técnicas, operacionais e comerciais. Ela responde o que será construído, por que será construído, como será sustentado, quais riscos existem e quais escolhas precisam ser feitas antes de investir em design, código ou automação.'),
    paragraph('Também não é apenas escopo. O escopo define limites de entrega. A arquitetura define o raciocínio por trás desses limites. Em um site, por exemplo, ela decide quais páginas precisam existir, como cada página se conecta ao funil, que dados serão coletados, para onde os leads irão, quais eventos serão medidos e como o projeto poderá evoluir depois da primeira publicação.'),
    subheading('Quando a arquitetura deve vir antes do desenvolvimento'),
    list(['Quando a demanda envolve site, sistema, automação, aplicativo, portal, CRM ou integração.', 'Quando existem vários decisores e o projeto precisa de clareza para evitar conflito.', 'Quando o cliente ainda não sabe exatamente quais funcionalidades entram no MVP.', 'Quando há risco de retrabalho por falta de definição de dados, papéis, telas ou integrações.', 'Quando o projeto precisa continuar evoluindo depois do lançamento.']),
    heading('Checklist de diagnóstico para reduzir retrabalho'),
    list(['Qual problema de negócio a solução precisa resolver?', 'Quem usará o sistema ou site no dia a dia?', 'Quais dados entram, saem e precisam ser armazenados?', 'Quais ferramentas já existem na operação?', 'O projeto precisa de CMS, área logada, dashboard, CRM, automação ou integração?', 'Quem será responsável por atualizar conteúdo e acompanhar resultados?', 'Quais métricas indicam que a entrega funcionou?', 'Quais funcionalidades podem ficar para uma segunda fase?']),
    paragraph('Esse checklist evita a falsa sensação de avanço. Muitas vezes a empresa começa pelo layout porque ele é visível, mas as decisões que mais impactam custo e prazo estão nas camadas invisíveis: regras de negócio, permissões, integrações, performance, segurança, conteúdo, SEO e manutenção.'),
    heading('Exemplos de aplicação por tipo de projeto'),
    list(['Site institucional: arquitetura de páginas, mensagens, CTAs, SEO, formulário, WhatsApp e eventos de conversão.', 'Sistema interno: entidades, permissões, fluxos, dashboards, relatórios e integrações.', 'Automação: gatilhos, dados de entrada, validações, exceções, logs e revisão humana.', 'Aplicativo: jornadas, perfis de usuário, notificações, backend, autenticação e publicação.', 'E-commerce: catálogo, estoque, pagamento, frete, integrações, abandono de carrinho e métricas.']),
    heading('Entregáveis de uma boa fase de arquitetura'),
    paragraph('Na Tehkné, a arquitetura pode gerar mapa técnico, roadmap por fases, fluxos de usuário, definição de stack, estrutura de dados, matriz de riscos, backlog inicial, critérios de aceite, proposta de integrações e plano de sustentação. O objetivo é que o desenvolvimento comece com direção, não com tentativa e erro.'),
    callout('Se o projeto ainda está confuso, a primeira entrega não precisa ser código. Pode ser clareza técnica, arquitetura e plano de execução para evitar gasto errado.', 'Mapear meu projeto')
  ],
  'site-institucional-como-operacao-digital': [
    heading('A diferença entre site institucional comum e site comercial'),
    paragraph('Um site institucional comum informa. Um site comercial conduz. A diferença aparece na estrutura: o site comercial organiza objeções, prova valor, educa o visitante, mostra casos, cria caminhos de contato e mede quais ações geram oportunidade. Ele não depende apenas de beleza; depende de jornada.'),
    paragraph('Para uma empresa de serviços, o site precisa explicar a oferta de forma rápida, mas também precisa sustentar a decisão. Isso significa criar páginas por serviço, conteúdos de apoio, provas visuais, CTAs contextuais, formulário de diagnóstico, links para WhatsApp e marcações para Analytics e anúncios.'),
    heading('Estrutura recomendada para um site institucional que vende'),
    list(['Home com posicionamento claro, dores atendidas, diferenciais, prova e CTA.', 'Páginas de serviços com foco em busca, intenção comercial e conversão.', 'Portfólio ou cases para reduzir risco percebido.', 'Blog ou insights para indexar termos e educar leads.', 'Página sobre para gerar confiança institucional.', 'Contato com formulário qualificado, WhatsApp e contexto automático.', 'Política de privacidade, termos e informações legais.']),
    subheading('SEO por serviço'),
    paragraph('Muitos sites tentam ranquear uma única página para todos os serviços. Isso limita o alcance. Uma estratégia melhor é criar páginas específicas para cada oferta: manutenção de sites, WordPress avançado, integração com CRM, automações com IA, desenvolvimento Next.js e assim por diante. Cada página responde uma intenção de busca diferente e aumenta a chance de gerar leads qualificados.'),
    heading('Eventos que devem ser medidos'),
    list(['Clique em WhatsApp.', 'Envio de formulário.', 'Clique em CTA principal.', 'Abertura de página de serviço.', 'Leitura de post estratégico.', 'Clique em case de portfólio.', 'Mudança de idioma, quando houver versão internacional.', 'Aceite ou recusa de cookies, quando houver consentimento granular.']),
    paragraph('Sem eventos, o site vira opinião. Com eventos, ele vira operação mensurável. O time passa a entender quais páginas atraem, quais CTAs funcionam, quais serviços geram mais interesse e onde o visitante abandona a jornada.'),
    heading('Checklist para avaliar seu site atual'),
    list(['O título da home explica claramente o que a empresa faz?', 'Cada serviço tem página própria?', 'O site carrega bem no mobile?', 'Há prova de experiência, cases ou números?', 'O formulário coleta dados úteis para o comercial?', 'Os leads chegam com contexto?', 'Analytics e pixels estão configurados?', 'Existe rotina de atualização e manutenção?']),
    callout('Um site institucional pode ser o centro da operação comercial. A Tehkné estrutura páginas, SEO, CTAs e integrações para transformar presença digital em geração de oportunidades.', 'Planejar site comercial')
  ],
  'wordpress-avancado-quando-vira-sistema': [
    heading('Quando WordPress deixa de ser página e vira operação'),
    paragraph('WordPress vira sistema quando passa a organizar dados, regras, permissões, conteúdos e fluxos. Isso acontece em catálogos de veículos, imobiliárias, portais de cursos, páginas de produtos, áreas de membros, CRMs leves, hubs de conteúdo e operações que precisam de painel administrativo para o time atualizar sem depender de desenvolvedor a cada mudança.'),
    paragraph('O ponto central é separar responsabilidades. O editor visual não deve guardar regra de negócio crítica. O tema cuida da experiência pública. Plugins próprios cuidam de lógica, integrações, validações e automações. CPTs e campos personalizados organizam dados. A REST API permite conexão com outros sistemas.'),
    heading('Tema próprio, Elementor ou plugin próprio?'),
    list(['Elementor é útil para velocidade editorial e páginas comerciais, mas pode virar problema quando regras de negócio são misturadas ao layout.', 'Tema próprio é indicado quando a marca precisa de performance, consistência visual e controle técnico.', 'Plugin próprio é indicado quando existem regras, integrações, permissões, CPTs, automações ou funcionalidades que não deveriam depender do editor visual.', 'A melhor arquitetura costuma combinar painel editável com código organizado, evitando excesso de plugins genéricos.']),
    heading('Exemplos práticos de WordPress avançado'),
    list(['Catálogo de veículos com marca, modelo, versão, preço, ficha técnica, filtros e páginas individuais.', 'Site educacional com cursos, módulos, professores, calendário e materiais.', 'Portal de imóveis com localização, valores, status, galerias e contato por unidade.', 'CRM leve com leads, etapas, origem, responsável e histórico.', 'Landing pages dinâmicas geradas a partir de dados estruturados.']),
    subheading('Riscos do excesso de plugins'),
    paragraph('Plugins não são o problema; o problema é usar plugin sem critério. Cada plugin adiciona dependência, atualização, possível conflito, peso de front-end e risco de segurança. Em projetos sérios, o ideal é documentar por que cada plugin existe, quem mantém, qual função cumpre e o que acontece se ele falhar.'),
    heading('Estrutura recomendada pela Tehkné'),
    diagram('WordPress avançado\n├── Tema: visual, componentes e performance\n├── Plugin próprio: regras, integrações e automações\n├── CPTs: dados estruturados\n├── Campos personalizados: edição segura\n├── API: conexão com sistemas externos\n└── Governança: backup, segurança, documentação e evolução'),
    paragraph('Essa estrutura permite que o cliente tenha autonomia sem perder qualidade técnica. O painel fica mais claro, o front fica mais leve e a manutenção passa a ter lógica.'),
    callout('Se seu WordPress cresceu, ficou lento ou difícil de editar, talvez ele precise de arquitetura, não de mais plugins.', 'Diagnosticar WordPress')
  ],
  'nextjs-para-empresas-sites-portais-produtos': [
    heading('Next.js ou WordPress: como escolher sem modismo'),
    paragraph('Next.js costuma ser uma ótima escolha quando performance, experiência premium, controle de componentes, integração com APIs e evolução para produto digital são prioridades. WordPress costuma ser melhor quando a operação editorial precisa de painel maduro, autonomia de conteúdo e menor dependência de desenvolvimento para publicações recorrentes.'),
    paragraph('A decisão não deve ser ideológica. Uma empresa pode usar Next.js no front e WordPress como CMS headless. Também pode usar WordPress tradicional quando a necessidade principal é conteúdo e velocidade de operação. A arquitetura correta depende do problema, equipe, orçamento e futuro da solução.'),
    heading('Quando Next.js é ideal'),
    list(['Sites premium com forte exigência visual e performance.', 'Portais que consomem dados de APIs ou CMS headless.', 'Landing pages escaláveis com componentes reutilizáveis.', 'Produtos digitais que podem evoluir para área logada ou dashboard.', 'Projetos que precisam de deploy contínuo, versionamento e controle técnico fino.']),
    heading('Quando Next.js pode ser exagero'),
    list(['Quando o cliente precisa editar tudo sozinho e não haverá CMS.', 'Quando o orçamento é muito limitado e a demanda é uma página simples.', 'Quando não há equipe ou parceiro para manutenção do código.', 'Quando a operação editorial exige publicação diária sem estrutura headless.']),
    subheading('SEO técnico em Next.js'),
    paragraph('Next.js ajuda no SEO quando usado corretamente: metadata por rota, sitemap, URLs limpas, HTML bem renderizado, imagens otimizadas, performance mobile e conteúdo estruturado. Mas a ferramenta sozinha não resolve copy, intenção de busca, autoridade, links internos e manutenção do conteúdo.'),
    heading('Critérios de escolha para empresas'),
    list(['O conteúdo será editado por equipe interna?', 'O projeto precisa de visual muito customizado?', 'Há integração com APIs ou sistemas?', 'A solução pode virar produto digital?', 'O SEO depende de muitas páginas dinâmicas?', 'A empresa terá manutenção técnica contínua?']),
    callout('A Tehkné define stack depois do diagnóstico. Next.js é excelente quando existe razão técnica e comercial para usá-lo.', 'Avaliar stack ideal')
  ],
  'ux-ui-na-pratica-design-produto-conversao': [
    heading('Checklist de UX para páginas que precisam vender'),
    list(['O usuário entende a oferta em menos de cinco segundos?', 'O primeiro CTA aparece sem esforço?', 'A página responde dores, benefícios, provas e objeções?', 'Os cards são escaneáveis ou estão poluídos?', 'O formulário pede apenas o necessário para o momento?', 'O mobile tem hierarquia clara?', 'O design reforça confiança sem competir com a mensagem?']),
    paragraph('UX comercial é a arte de reduzir dúvida. Quando a interface força o usuário a procurar informação, comparar sozinho ou interpretar jargão, a conversão cai. O bom design guia a leitura e cria segurança para a próxima ação.'),
    heading('Wireframe, protótipo e layout final'),
    list(['Wireframe define estrutura: blocos, ordem, hierarquia e fluxo.', 'Protótipo valida navegação, comportamento e entendimento.', 'Layout final aplica identidade, cor, tipografia, imagens, microinterações e refinamento visual.', 'Design system organiza componentes para manter consistência e acelerar evolução.']),
    heading('Erros comuns em UI de sites e sistemas'),
    list(['Botões com o mesmo peso visual para ações diferentes.', 'Cards cheios de informação sem prioridade.', 'Menus com rótulos técnicos demais.', 'Formulários longos sem justificativa.', 'Animações bonitas que atrasam a leitura.', 'Contraste fraco e tipografia grande demais no mobile.']),
    subheading('Impacto comercial do UX/UI'),
    paragraph('Uma melhoria de UX pode reduzir abandono, aumentar cliques em CTA, melhorar tempo de leitura, diminuir dúvidas no atendimento e aumentar qualidade do lead. Em sistemas internos, bom UX reduz treinamento, erros operacionais e resistência do time.'),
    callout('A Tehkné revisa jornada, interface, conteúdo e conversão para transformar design bonito em experiência útil e comercial.', 'Revisar experiência')
  ],
  'ia-e-automacoes-na-operacao-real': [
    heading('Onde aplicar IA e automações por área da empresa'),
    paragraph('A melhor forma de aplicar IA é começar por processos com volume, repetição ou necessidade de padronização. A automação não precisa substituir pessoas; ela pode preparar contexto, organizar informação, sugerir respostas, reduzir tarefas manuais e acelerar decisões.'),
    list(['Vendas: triagem de leads, resumo de briefing, classificação de interesse, follow-up e registro em CRM.', 'Atendimento: respostas iniciais, base de conhecimento, abertura de tickets e priorização.', 'Marketing: geração de rascunhos, calendário editorial, análise de campanhas e reaproveitamento de conteúdo.', 'Financeiro e administrativo: lembretes, conferências, organização de documentos e notificações internas.', 'Operação técnica: documentação, checklist, relatórios, classificação de erros e suporte assistido.']),
    heading('Chatbot com IA: quando faz sentido'),
    paragraph('Chatbot faz sentido quando existe base de conhecimento, fluxo de atendimento, limites claros, captura de dados e handoff humano. Sem isso, o chatbot apenas cria uma camada nova de confusão. A IA deve saber o que pode responder, quando deve perguntar mais e quando deve acionar uma pessoa.'),
    subheading('WhatsApp, CRM e formulário trabalhando juntos'),
    paragraph('Um fluxo eficiente pode começar no formulário do site, gerar uma mensagem contextual para WhatsApp, registrar o lead no CRM, notificar o time e criar uma sugestão de próxima ação. A IA pode resumir o briefing e indicar urgência, mas a decisão comercial continua humana.'),
    heading('Riscos de IA sem governança'),
    list(['Responder com informação inventada ou desatualizada.', 'Expor dados sensíveis em ferramentas inadequadas.', 'Automatizar decisões que exigem validação humana.', 'Criar dependência de prompts sem documentação.', 'Não medir ganho real de tempo, qualidade ou conversão.']),
    heading('Como começar com baixo risco'),
    list(['Mapear processos repetitivos.', 'Definir entradas e saídas esperadas.', 'Criar base de conhecimento simples.', 'Manter revisão humana em etapas críticas.', 'Registrar histórico e métricas.', 'Evoluir por pequenos fluxos antes de criar agentes complexos.']),
    callout('A Tehkné pode mapear oportunidades de IA e automação sem transformar sua operação em laboratório inseguro.', 'Mapear IA e automações')
  ],
  'integracoes-crm-erp-apis-conectam-empresa': [
    heading('API, webhook, automação e sincronização: qual a diferença?'),
    list(['API é a porta formal para um sistema enviar ou receber dados.', 'Webhook é um aviso automático disparado quando um evento acontece.', 'Automação é o fluxo que conecta eventos, regras e ações entre ferramentas.', 'Sincronização é a atualização recorrente ou em tempo real de dados entre sistemas.']),
    paragraph('Confundir esses termos gera decisões ruins. Nem toda integração precisa de backend próprio; nem toda automação deveria depender de planilha; nem todo webhook resolve quando há regra de negócio complexa. A arquitetura precisa escolher o nível certo para cada fluxo.'),
    heading('Quando usar n8n e quando criar backend próprio'),
    list(['Use n8n para fluxos operacionais, notificações, registros simples, integrações com APIs conhecidas e automações de baixa a média complexidade.', 'Crie backend próprio quando houver regra crítica, autenticação complexa, grande volume, necessidade de auditoria, fila, retry, permissões ou dados sensíveis.', 'Combine os dois quando o backend concentra regras e o n8n orquestra notificações e integrações periféricas.']),
    subheading('Logs, retry e monitoramento'),
    paragraph('Integração profissional precisa prever falhas. APIs caem, limites são atingidos, dados chegam incompletos e usuários duplicam cadastros. Por isso, logs, fila, retry, alerta e painel de erro são tão importantes quanto a conexão em si.'),
    heading('Exemplos de fluxos comuns'),
    list(['Site → CRM → WhatsApp: lead chega com origem, interesse e mensagem contextual.', 'E-commerce → ERP: pedido, cliente, pagamento e estoque trafegam com status definido.', 'Formulário → planilha controlada → atendimento: ideal para MVPs ou operações iniciais.', 'Landing page → automação → e-mail: nutrição e aviso interno sem cópia manual.']),
    heading('Checklist antes de integrar'),
    list(['Qual sistema é a fonte de verdade?', 'Quais campos são obrigatórios?', 'O que acontece se a API falhar?', 'Há autenticação segura?', 'Existe registro de erro?', 'Quem recebe alerta?', 'Como evitar duplicidade?', 'Quem mantém a integração depois?']),
    callout('A Tehkné mapeia dados, ferramentas e riscos antes de conectar sistemas, evitando integrações frágeis que viram problema operacional.', 'Planejar integração')
  ],
  'sustentacao-tecnica-publicar-site-e-so-comeco': [
    heading('Manutenção e gestão de sites: o novo nome da continuidade digital'),
    paragraph('Sustentação técnica é um termo correto, mas muitas empresas entendem melhor quando falamos em manutenção e gestão de sites. A ideia é simples: depois que o site entra no ar, ele precisa de acompanhamento para continuar seguro, rápido, atualizado, indexável e alinhado às campanhas e ao negócio.'),
    paragraph('Um site abandonado envelhece rápido. Plugins ficam desatualizados, dependências mudam, formulários param, integrações falham, páginas perdem performance, campanhas exigem ajustes e o Google passa a interpretar o conteúdo de outra forma. Manutenção não é gasto extra; é o que protege o investimento feito no projeto.'),
    heading('O que monitorar todo mês'),
    list(['Atualizações de plugins, tema, dependências e bibliotecas.', 'Backups e possibilidade real de restauração.', 'Formulários, WhatsApp e eventos de conversão.', 'Performance mobile e Core Web Vitals.', 'Erros 404, redirecionamentos e páginas quebradas.', 'Segurança, acessos administrativos e tentativas de ataque.', 'SEO técnico, sitemap, indexação e metadados.', 'Fila de melhorias, conteúdo e novas páginas.']),
    subheading('Manutenção WordPress'),
    paragraph('Em WordPress, a manutenção precisa ser ainda mais disciplinada. Atualizar tudo sem teste pode quebrar layout, filtros, formulários ou integrações. Não atualizar nada também aumenta risco. A saída é ter rotina: backup, atualização controlada, validação, registro e plano de rollback.'),
    heading('Gestão técnica não é só corrigir erro'),
    paragraph('Gestão técnica envolve priorizar. Nem toda solicitação tem o mesmo impacto. Algumas correções protegem receita, outras melhoram experiência, outras fortalecem SEO e outras podem esperar. Um backlog bem organizado evita que a operação viva em emergência.'),
    heading('Planos de manutenção podem incluir'),
    list(['Suporte mensal por horas ou sprint.', 'Monitoramento de uptime, performance e erros.', 'Atualizações controladas.', 'Correções e pequenos ajustes.', 'Criação de novas páginas ou seções.', 'SEO técnico recorrente.', 'Relatórios e recomendações.', 'Governança de backlog e roadmap.']),
    callout('Se seu site já gera contato, tráfego ou autoridade, ele precisa de manutenção e gestão contínua para não virar risco.', 'Avaliar manutenção')
  ],
  'metodo-gip-ideia-solta-produto-validado': [
    heading('O que é entregue em cada fase do GIP'),
    list(['Descoberta: mapa de dores, objetivos, público, restrições e critérios de sucesso.', 'Arquitetura: escopo por fases, fluxos, stack, dados, integrações e riscos.', 'Desenvolvimento: execução por micropassos com validação contínua.', 'Validação: revisão de conteúdo, UX, responsividade, SEO, performance e comportamento.', 'Deploy e evolução: publicação, documentação, acompanhamento e backlog.']),
    paragraph('A força do GIP está em transformar incerteza em decisão progressiva. Em vez de tentar prever tudo no primeiro dia, o método reduz ambiguidade etapa por etapa. Isso permite avançar sem perder controle.'),
    heading('Diferença entre GIP e metodologia ágil genérica'),
    paragraph('Metodologias ágeis falam de ciclos, backlog e iteração. O GIP incorpora isso, mas adapta para projetos digitais que misturam estratégia, design, conteúdo, tecnologia, IA e automações. Ele não é apenas gestão de tarefa; é um método de precisão para transformar intenção em produto executável.'),
    heading('Exemplos de aplicação'),
    list(['Site: transformar briefing em arquitetura de páginas, SEO e CTAs.', 'Sistema: definir entidades, permissões, telas, fluxos e relatórios.', 'Automação: mapear gatilhos, dados, exceções e revisão humana.', 'Produto digital: definir MVP, roadmap, métricas e hipóteses.']),
    subheading('Checklist de entrada de projeto'),
    list(['Qual é o objetivo principal?', 'Quem decide?', 'Quem usa?', 'Quais referências existem?', 'O que é obrigatório no MVP?', 'O que pode ficar para depois?', 'Quais integrações são críticas?', 'Como será medido o sucesso?']),
    callout('O GIP é indicado quando você tem uma ideia importante, mas ainda precisa transformar intenção em plano, escopo e execução segura.', 'Iniciar pelo GIP')
  ],
  'gip-tehkne-os-produto-design-codigo-automacao-operacao': [
    heading('Os módulos práticos do Tehkné OS'),
    paragraph('Para não ficar abstrato, o Tehkné OS pode ser entendido como um conjunto de módulos operacionais: entrada de demanda, diagnóstico, arquitetura, design, desenvolvimento, automação, validação, documentação, deploy, suporte e evolução. Cada módulo tem função clara e deixa rastro para o próximo.'),
    list(['Entrada: organização do briefing, referências, contexto e prioridade.', 'Arquitetura: decisões de escopo, stack, fluxos, dados e riscos.', 'Design: wireframes, interface, componentes e experiência.', 'Código: implementação, versionamento, testes e deploy.', 'Automação: IA, CRM, notificações, documentação e integrações.', 'Operação: suporte, métricas, backlog e melhoria contínua.']),
    heading('Como funciona a documentação viva'),
    paragraph('Documentação viva não é um PDF esquecido. É um registro prático de decisões, links, credenciais de referência, fluxos, componentes, padrões, integrações, pendências e próximos passos. Ela reduz dependência de memória e facilita continuidade quando o projeto cresce ou troca de mãos.'),
    heading('Git, IA e backlog no mesmo fluxo'),
    paragraph('Quando Git registra mudanças, IA apoia análise e geração de rascunhos, e backlog organiza prioridades, o projeto deixa de ser uma sequência de conversas soltas. Ele passa a ter histórico, contexto e evolução rastreável.'),
    heading('Quando uma empresa precisa de um OS de projeto'),
    list(['Quando vários projetos digitais acontecem ao mesmo tempo.', 'Quando decisões ficam perdidas em WhatsApp, prints ou reuniões.', 'Quando há retrabalho recorrente por falta de padrão.', 'Quando design, código, conteúdo e automação não conversam.', 'Quando a empresa quer escalar qualidade sem aumentar caos operacional.']),
    callout('A Tehkné OS é a visão de operação digital organizada: menos improviso, mais rastreabilidade e evolução contínua.', 'Mapear operação digital')
  ],
  'white-label-tecnico-para-agencias': [
    heading('Modelos de parceria white label'),
    list(['Projeto fechado: escopo, prazo e entrega definidos por demanda.', 'Sprint técnica: pacote de horas ou ciclo para ajustes, páginas e melhorias.', 'Suporte recorrente: manutenção, correções, performance e evolução para carteira de clientes.', 'Apoio em proposta: análise técnica antes da agência vender algo complexo.', 'Execução confidencial: atuação nos bastidores, preservando a relação da agência com o cliente final.']),
    paragraph('O modelo ideal depende da maturidade da agência e do tipo de carteira. Agências com muitos sites WordPress podem precisar de manutenção recorrente. Agências de performance podem precisar de landing pages rápidas e integrações. Estúdios de branding podem precisar transformar layout aprovado em front-end de qualidade.'),
    heading('Como vender sem equipe interna completa'),
    paragraph('A agência não precisa prometer tudo sozinha. Ela pode vender estratégia, relacionamento e direção criativa, enquanto um parceiro técnico valida viabilidade, estima esforço, executa e documenta. Isso reduz risco de prazo e melhora a qualidade da entrega.'),
    subheading('Riscos de prometer sem validar'),
    list(['Subestimar integrações aparentemente simples.', 'Vender área logada como se fosse página comum.', 'Ignorar performance, segurança e manutenção.', 'Não prever revisão de conteúdo e responsividade.', 'Criar dependência de plugins sem governança.']),
    heading('Fluxo de proposta técnica para agência'),
    diagram('Demanda do cliente\n        ↓\nAgência coleta contexto\n        ↓\nTehkné valida escopo e riscos\n        ↓\nProposta modular\n        ↓\nExecução técnica\n        ↓\nEntrega documentada para a agência'),
    callout('Se sua agência precisa vender mais sites, WordPress, integrações e automações sem montar time fixo agora, um braço técnico white label pode ser o caminho.', 'Conversar sobre white label')
  ],
  'do-portfolio-ao-produto-cases-prova-tecnica-comercial': [
    heading('Como estruturar um case forte'),
    list(['Contexto: quem era o cliente, projeto ou ecossistema.', 'Desafio: qual problema precisava ser resolvido.', 'Papel: qual foi a participação real da empresa.', 'Solução: o que foi entregue ou estruturado.', 'Stack: quais tecnologias e ferramentas foram usadas.', 'Resultado: o que melhorou, foi aprendido ou ficou disponível.', 'Próximo passo: como aquela experiência se conecta a novas ofertas.']),
    paragraph('Um bom case não precisa prometer números que não foram medidos. Ele precisa ser honesto, claro e útil para o próximo cliente entender capacidade, raciocínio e tipo de entrega.'),
    heading('Cliente direto, parceria e white label'),
    paragraph('Nem todo projeto do portfólio tem a mesma natureza. Alguns são clientes diretos. Outros são participações técnicas. Outros acontecem em parceria com agência ou ecossistema. Separar essas categorias protege a marca e aumenta confiança, porque mostra maturidade editorial.'),
    heading('Stack como prova técnica'),
    paragraph('Informar stack ajuda o cliente a entender repertório: WordPress, Next.js, React, PHP, APIs, n8n, Vercel, Flutter, CRM ou integrações. Mas stack sozinha não vende; ela precisa estar ligada ao problema resolvido.'),
    heading('Como usar portfólio em proposta comercial'),
    list(['Selecionar cases parecidos com a dor do cliente.', 'Explicar o desafio e não apenas mostrar print.', 'Destacar decisões técnicas relevantes.', 'Mostrar processo e governança.', 'Conectar o case à solução proposta.', 'Evitar confusão de autoria quando houve parceria.']),
    callout('A Tehkné transforma experiências e participações técnicas em narrativa comercial clara, sem perder segurança editorial.', 'Estruturar meus cases')
  ]
};

export function getBlogExpansionBlocks(slug: string) {
  return blogExpansionBlocks[slug] ?? [];
}
