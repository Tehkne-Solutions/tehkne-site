'use client';

import { useEffect } from 'react';

export default function HomeTrustInjector() {
  useEffect(() => {
    if (window.location.pathname !== '/') return;
    if (document.getElementById('home-trust-injected')) return;

    const hero = document.querySelector('.hero');
    if (!hero) return;

    const primaryCta = hero.querySelector('.btn-primary');
    if (primaryCta) primaryCta.textContent = 'Solicitar diagnóstico gratuito ↗';

    const wrapper = document.createElement('div');
    wrapper.id = 'home-trust-injected';
    wrapper.innerHTML = `
      <section class="metrics section-frame compact home-early-proof" aria-label="Provas rápidas da Tehkné">
        <div><strong>300+</strong><span>sites, páginas