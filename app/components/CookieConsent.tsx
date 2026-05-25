'use client';

import { useEffect, useState } from 'react';
import { Cookie, LockKeyhole, Settings2, X } from 'lucide-react';

type ConsentState = 'pending' | 'accepted' | 'customized';

const storageKey = 'tehkne_cookie_consent_v1';

export default function CookieConsent() {
  const [state, setState] = useState<ConsentState>('pending');
  const [visible, setVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) as ConsentState | null;
    if (saved) {
      setState(saved);
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  function save(nextState: ConsentState) {
    window.localStorage.setItem(storageKey, nextState);
    window.dispatchEvent(new CustomEvent('tehkne_cookie_consent', {
      detail: { state: nextState, analytics, marketing }
    }));
    setState(nextState);
    setVisible(false);
    setPanelOpen(false);
  }

  function rejectOptional() {
    setAnalytics(false);
    setMarketing(false);
    save('customized');
  }

  return (
    <>
      {visible ? (
        <div className="cookie-consent-banner" role="dialog" aria-modal="false" aria-label="Preferências de cookies">
          <div className="cookie-consent-icon"><Cookie size={22} /></div>
          <div className="cookie-consent-copy">
            <strong>Cookies e permissões</strong>
            <p>Usamos cookies necessários para o funcionamento do site e, com sua permissão, métricas para entender CTAs, origem de tráfego e melhoria de experiência.</p>
            <div className="cookie-consent-links">
              <a href="/privacidade">Política de Privacidade</a>
              <a href="/termos-de-uso">Termos de Uso</a>
            </div>
            {panelOpen ? (
              <div className="cookie-preferences-panel">
                <label><input type="checkbox" checked disabled /> Necessários — sempre ativos</label>
                <label><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /> Analytics — medir navegação e CTAs</label>
                <label><input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} /> Marketing — remarketing e Ads quando configurado</label>
              </div>
            ) : null}
          </div>
          <div className="cookie-consent-actions">
            <button type="button" className="btn btn-primary coin" onClick={() => save('accepted')}>Aceitar</button>
            <button type="button" className="btn btn-secondary" onClick={() => setPanelOpen((current) => !current)}><Settings2 size={15} /> Gerenciar</button>
            <button type="button" className="cookie-link-button" onClick={rejectOptional}>Recusar opcionais</button>
          </div>
        </div>
      ) : null}
      {!visible && state !== 'pending' ? (
        <button type="button" className="cookie-lock-button" aria-label="Gerenciar cookies" onClick={() => setVisible(true)}>
          <LockKeyhole size={16} />
        </button>
      ) : null}
      {visible ? (
        <button type="button" className="cookie-close-button" aria-label="Fechar aviso de cookies" onClick={() => setVisible(false)}>
          <X size={16} />
        </button>
      ) : null}
    </>
  );
}
