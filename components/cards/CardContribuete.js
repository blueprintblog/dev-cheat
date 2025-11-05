import Link from 'next/link';

export default function CardContribuete() {
  return (
    <div className="mt-16 text-center">
      <div className="bg-linear-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-purple-500/30">
        <h3 className="text-2xl font-bold text-white mb-4">🤝 Contribuindo</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Encontrou um erro? Quer melhorar um cheatsheet? Tem uma sugestão?
          Adoraríamos suas contribuições! Abra uma issue ou submeta um PR.
        </p>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Gostou do projeto? Apoie o desenvolvimento com um café e ajude a
          manter tudo open source ☕
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/blueprintblog/dev-cheat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="w-5 h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"></path>
            </svg>
            Contribuir no GitHub
          </a>
          <a
            href="https://buymeacoffee.com/blueprintblog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
            ☕ Apoiar o Projeto
          </a>
        </div>
      </div>
    </div>
  );
}
