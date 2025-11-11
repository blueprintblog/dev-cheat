'use client';

import { useEffect } from 'react';

export default function GoogleAd({
  slot = '5729248756',
  format = 'auto',
  responsive = true,
  className = 'my-8',
  showOpensourceMessage = false,
}) {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (err) {
      console.warn('AdSense push falhou:', err);
    }
  }, [slot]);

  return (
    <div className={className}>
      {showOpensourceMessage && (
        <div className="mb-4 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg text-center">
          <p className="text-sm text-green-300 mb-2">
            🎯 <span className="font-semibold">Ajude a manter este projeto opensource!</span>
          </p>
          <p className="text-xs text-gray-400">
            A publicidade exibida abaixo ajuda a manter os cheatsheets gratuitos e open source para toda a comunidade.
          </p>
        </div>
      )}
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          minHeight: '250px',
        }}
        data-ad-client="ca-pub-5126726057730110"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}
