'use client';

import { useEffect } from 'react';

export default function GoogleAd({
  slot = '5729248756',
  format = 'auto',
  responsive = true,
  className = 'my-8',
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
