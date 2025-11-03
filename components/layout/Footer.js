import Link from 'next/link';
import { FaDev } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="professional-footer mt-[60px] container">
      <div className="footer-content max-w-7xl mx-auto px-5 ">
        <div className="footer-brand">
          <Link href={'/'} className="mb-2 inline-block">
            <h1 className="text-base md:text-2xl text-white font-semibold font-mono uppercase flex items-center gap-1">
              <span className="text-2xl">
                <FaDev className="w-[30px] h-[30px] " />
              </span>{' '}
              Cheatsheet
            </h1>
          </Link>
          <p>
            Sua referência completa para dominar o terminal Linux. Do iniciante
            ao avançado, todos os comandos que você precisa em um único lugar.
          </p>
          <div className="social-links">
            <Link href="/" className="social-link" title="Website">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
              </svg>
            </Link>
            <Link
              href="https://twitter.com/blueprintblog"
              className="social-link"
              target="_blank"
              title="Twitter">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link
              href="https://github.com/blueprintblog/dev-cheat"
              className="social-link"
              target="_blank"
              title="GitHub">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </Link>
          </div>
          <div className="cta-container">
            <h4>🚀 Quer mais conteúdos como este?</h4>
            <p>
              Visite o <strong>blueprintblog.tech</strong> para acessar
              tutoriais completos, guias práticos e recursos avançados de
              programação e desenvolvimento.
            </p>
            <Link
              href="https://blueprintblog.tech"
              className="cta-button"
              target="_blank">
              Visitar Blueprint Blog
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025{' '}
          <Link href="https://blueprintblog.tech" target="_blank">
            Blueprint Blog
          </Link>
          . Todos os direitos reservados. | Criado com ❤️ pela equipe do
          blueprintblog.
        </p>
        <p className="mt-2.5">
          Esta cheatsheet é um projeto open source. Contribua no{' '}
          <Link
            href="https://github.com/blueprintblog/dev-cheat"
            target="_blank">
            GitHub
          </Link>
          ! | Versão v4.2.3
        </p>
      </div>
    </footer>
  );
}
