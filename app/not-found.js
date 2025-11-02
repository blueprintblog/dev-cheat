'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [terminalText, setTerminalText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentPath, setCurrentPath] = useState('');
  const [isClient, setIsClient] = useState(false);

  const errorMessages = [
    '404: Página não encontrada. Mas pelo menos o café está quente!',
    'Erro 404: Esta página foi abduzida por aliens (ou talvez só tenha sido deletada).',
    '404: A página que você procura está em outra reunião.',
    'Erro 404: Esta página foi refatorada para a existência.',
    '404: Página não encontrada. Verifique se não esqueceu de commitar.',
    'Erro 404: Esta página está em modo de manutenção infinito.',
    '404: A página que você procura está no mesmo lugar da minha vontade de trabalhar segunda-feira.',
    'Erro 404: Página não encontrada. Talvez esteja no branch errado.',
  ];

  useEffect(() => {
    setIsClient(true);
    setCurrentPath(window.location.pathname);

    // Seleciona uma mensagem aleatória apenas no cliente
    const randomIndex = Math.floor(Math.random() * errorMessages.length);
    const text = errorMessages[randomIndex];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTerminalText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="intro text-center">
          <div className="mb-8">
            <div className="text-9xl font-bold text-red-500 mb-4 animate-pulse">
              404
            </div>
            <div className="text-2xl text-gray-300 mb-6">
              Página Não Encontrada
            </div>
          </div>

          <div className="bg-black rounded-lg p-6 mb-8 font-mono text-left">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-400 text-sm ml-2">terminal</span>
            </div>
            <div className="text-green-400">
              <div>$ npm install pagina-perdida</div>
              <div className="text-red-400 mt-2">
                Error: 404 - Module not found
              </div>
              <div className="text-yellow-400 mt-2">
                Warning: Você tentou acessar:
              </div>
              <div className="text-blue-400 ml-4">
                {isClient ? currentPath : '/rota-inexistente'}
              </div>
              <div className="text-gray-400 mt-4">
                {terminalText}
                <span className={cursorVisible ? 'opacity-100' : 'opacity-0'}>
                  _
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800 rounded-lg p-4 transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">🐛</div>
              <div className="text-lg font-semibold mb-1">Bug Reportado</div>
              <div className="text-sm text-gray-400">
                Este erro 404 foi oficialmente documentado como
                &quot;feature&quot;
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">☕</div>
              <div className="text-lg font-semibold mb-1">Café Break</div>
              <div className="text-sm text-gray-400">
                Aproveite para pegar um café enquanto procuramos sua página
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">🔍</div>
              <div className="text-lg font-semibold mb-1">Debug Mode</div>
              <div className="text-sm text-gray-400">
                console.log(&apos;Por que isso aconteceu?&apos;)
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-lg mb-4 text-gray-300">
              Tente uma dessas opções:
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="backToMain">
                <span>←</span> Voltar para Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="backToMain">
                <span>↶</span> Voltar
              </button>
              <button
                onClick={() => window.location.reload()}
                className="backToMain">
                <span>↻</span> Tentar Novamente
              </button>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <div className="mb-2">
              Se você acha que isso é um erro, por favor:
            </div>
            <div className="bg-gray-800 rounded p-2 inline-block">
              <code>git blame desenvolvedor-que-apagou-a-pagina.js</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
