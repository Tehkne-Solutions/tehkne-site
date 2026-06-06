'use client';

import { useEffect } from 'react';

const replacements: Array<[RegExp, string]> = [
  [/\b7\+ anos\b/gi, '9+ anos'],
  [/\b120\+\b/g, '180+'],
  [/120\+ entregas, melhorias, páginas, automações e experiências digitais acumuladas/gi, '180+ entregas, ajustes, melhorias e experiências digitais acumuladas'],
  [/120\+ entregas e melhorias/gi, '180+ entregas e melhorias'],
  [/\b70\+\b/g, '300+'],
  [/mais de 70/gi, 'mais de 300'],
  [/70 sites WordPress/gi, '300 sites, páginas e experiências digitais'],
  [/70\+ sites WordPress/gi, '300+ sites, páginas e experiências digitais'],
  [/70\+ operações WordPress/gi, '300+ operações digitais'],
 