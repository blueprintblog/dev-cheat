'use client';

import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaSpinner } from 'react-icons/fa';

export function SubstackNewsletterCard({ className }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 ${
        className || ''
      }`}>
      {/* Header */}
      <div className="relative text-center pb-4 w-full justify-center items-center">
        <div className="col-span-full inline-flex items-center justify-center w-12 h-12 bg-neon-purple dark:bg-cyan-600 rounded-full mb-4 shadow-lg">
          <FaEnvelope className="w-6 h-6 text-white" />
        </div>

        <div className="col-span-full uppercase text-2xl font-bold text-neon-purple dark:text-neon-cyan">
          Scripts Automatizados em Breve
        </div>

        <p className="text-gray-600 text-lg mt-2 ">
          Resolva esses problemas automaticamente com nossos scripts exclusivos
        </p>
      </div>

      {/* Substack Iframe com Lazy Load */}
      <div ref={containerRef} className="relative w-full">
        <div className="flex items-center justify-center">
          {isVisible ? (
            <>
              {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <FaSpinner className="w-8 h-8 text-neon-purple dark:text-neon-cyan animate-spin mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Carregando formulário...
                  </p>
                </div>
              )}
              <iframe
                src="https://blueprintblog.substack.com/embed"
                className={`w-full h-full border border-gray-200 dark:border-gray-700 rounded-lg transition-opacity duration-300 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ minHeight: '320px' }}
                frameBorder="0"
                scrolling="no"
                title="Substack Newsletter Subscription"
                onLoad={() => setIsLoaded(true)}
              />
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <FaEnvelope className="w-12 h-12 text-gray-400 dark:text-gray-600 mb-3" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Role para ver o formulário de inscrição
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Text */}
      <div className="relative mt-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Seja o primeiro a saber quando os scripts forem lançados
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          Sem spam, apenas atualizações importantes
        </p>
      </div>
    </div>
  );
}
