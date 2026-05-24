'use client';

import { Copy, Linkedin, Send, Share2 } from 'lucide-react';
import { useMemo, useState } from 'react';

type Props = {
  title: string;
  text?: string;
};

export default function ShareButtons({ title, text }: Props) {
  const [copied, setCopied] = useState(false);

  const shareUrl = useMemo(() => {
    if (typeof window === 'undefined') return '';
    return window.location.href;
  }, []);

  async function nativeShare() {
    const url = shareUrl || window.location.href;
    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }
    await copyLink();
  }

  async function copyLink() {
    const url = shareUrl || window.location.href;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  const encodedUrl = encodeURIComponent(shareUrl || '');
  const encodedTitle = encodeURIComponent(title);
  const whatsapp = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  return (
    <div className="share-box" aria-label="Compartilhar conteúdo">
      <span><Share2 size={15} /> Compartilhar</span>
      <button type="button" onClick={nativeShare}>Compartilhar <Share2 size={14} /></button>
      <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <Send size={14} /></a>
      <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin size={14} /></a>
      <button type="button" onClick={copyLink}>{copied ? 'Link copiado' : 'Copiar link'} <Copy size={14} /></button>
    </div>
  );
}
