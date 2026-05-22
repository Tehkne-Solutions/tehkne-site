#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const write = process.argv.includes('--write');
const allowed = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.md', '.html']);
const ignored = new Set(['node_modules', '.next', '.git', 'dist', 'build', 'out']);

const mojibake = new Map([
  ['Ã¡', 'á'], ['Ã ', 'à'], ['Ã¢', 'â'], ['Ã£', 'ã'], ['Ã§', 'ç'],
  ['Ã©', 'é'], ['Ãª', 'ê'], ['Ã­', 'í'], ['Ã³', 'ó'], ['Ã´', 'ô'], ['Ãµ', 'õ'], ['Ãº', 'ú'],
  ['Ã', 'Á'], ['Ã€', 'À'], ['Ã‚', 'Â'], ['Ãƒ', 'Ã'], ['Ã‡', 'Ç'], ['Ã‰', 'É'], ['ÃŠ', 'Ê'], ['Ã“', 'Ó'], ['Ã•', 'Õ'], ['Âº', 'º'], ['Âª', 'ª'], ['Â·', '·']
]);

const textFixes = new Map([
  ['Solucoes', 'Soluções'], ['Portfolio', 'Portfólio'], ['Metodo', 'Método'], ['Tehkne', 'Tehkné'], ['TEHKNE', 'TEHKNÉ'],
  ['diagnostico', 'diagnóstico'], ['Diagnostico', 'Diagnóstico'],
  ['decisao', 'decisão'], ['decisoes', 'decisões'], ['Decisao', 'Decisão'],
  ['operacao', 'operação'], ['operacoes', 'operações'], ['Operacao', 'Operação'],
  ['automacao', 'automação'], ['automacoes', 'automações'], ['Automacao', 'Automação'],
  ['tecnico', 'técnico'], ['tecnica', 'técnica'], ['tecnicos', 'técnicos'], ['tecnicas', 'técnicas'], ['Tecnico', 'Técnico'], ['Tecnica', 'Técnica'],
  ['proprio', 'próprio'], ['propria', 'própria'], ['Proprio', 'Próprio'], ['Propria', 'Própria'],
  ['unico', 'único'], ['unica', 'única'], ['Unico', 'Único'], ['Unica', 'Única'],
  ['visao', 'visão'], ['Visao', 'Visão'], ['gestao', 'gestão'], ['Gestao', 'Gestão'],
  ['solucao', 'solução'], ['solucoes', 'soluções'], ['Solucao', 'Solução'],
  ['experiencia', 'experiência'], ['Experiencia', 'Experiência'],
  ['evolucao', 'evolução'], ['Evolucao', 'Evolução'],
  ['execucao', 'execução'], ['Execucao', 'Execução'],
  ['sustentacao', 'sustentação'], ['Sustentacao', 'Sustentação'],
  ['integracao', 'integração'], ['integracoes', 'integrações'], ['Integracao', 'Integração'],
  ['manutencao', 'manutenção'], ['Manutencao', 'Manutenção'],
  ['conteudo', 'conteúdo'], ['Conteudo', 'Conteúdo'],
  ['publico', 'público'], ['Publico', 'Público'],
  ['paginas', 'páginas'], ['Paginas', 'Páginas'],
  ['repositorios', 'repositórios'], ['repositorio', 'repositório'],
  ['confianca', 'confiança'], ['seguranca', 'segurança'], ['informacoes', 'informações'],
  ['veiculos', 'veículos'], ['catalogo', 'catálogo'], ['dinamico', 'dinâmico'], ['dinamicos', 'dinâmicos'],
  ['precos', 'preços'], ['exibicao', 'exibição'], ['atualizacoes', 'atualizações'],
  ['percepcao', 'percepção'], ['apresentacao', 'apresentação'], ['historia', 'história'],
  ['organizacao', 'organização'], ['otimizacoes', 'otimizações'], ['implementacao', 'implementação'],
  ['autonomia', 'autonomia'], ['familias', 'famílias'], ['servicos', 'serviços'], ['calendario', 'calendário'],
  ['expansao', 'expansão'], ['presenca', 'presença'], ['confiavel', 'confiável'], ['saude', 'saúde'], ['vacinacao', 'vacinação']
]);

function decodeUnicodeEscapes(input) {
  return input
    .replace(/\\\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function fixText(input) {
  let out = decodeUnicodeEscapes(input);
  for (const [bad, good] of mojibake) out = out.split(bad).join(good);
  for (const [bad, good] of textFixes) out = out.replace(new RegExp(`\\b${bad}\\b`, 'g'), good);
  return out;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (ignored.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (allowed.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

const files = await walk(root);
const changed = [];
for (const file of files) {
  const original = await fs.readFile(file, 'utf8');
  const fixed = fixText(original);
  if (fixed !== original) {
    const rel = path.relative(root, file);
    changed.push(rel);
    if (write) await fs.writeFile(file, fixed, 'utf8');
  }
}

console.log(`${write ? 'Corrigidos' : 'Encontrados'} ${changed.length} arquivo(s) com problemas de encoding/acentuação.`);
for (const rel of changed) console.log(`- ${rel}`);
if (!write && changed.length) console.log('Rode: npm run fix:encoding:write');
