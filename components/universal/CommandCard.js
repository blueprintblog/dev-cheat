'use client';

import { useState } from 'react';
import {
  FaCheck,
  FaCheckCircle,
  FaCogs,
  FaCopy,
  FaGraduationCap,
} from 'react-icons/fa';

// Funções auxiliares para nível
const getLevelColor = (level) => {
  switch (level) {
    case 'basico':
      return 'bg-green-600/90 border-green-500/50';
    case 'intermediario':
      return 'bg-yellow-600/90 border-yellow-500/50';
    case 'avancado':
      return 'bg-red-600/90 border-red-500/50';
    default:
      return 'bg-gray-600/90 border-gray-500/50';
  }
};

const getLevelIcon = (level) => {
  switch (level) {
    case 'basico':
      return <FaCheckCircle />;
    case 'intermediario':
      return <FaGraduationCap />;
    case 'avancado':
      return <FaCogs />;
    default:
      return <FaCheckCircle />;
  }
};

const getLevelLabel = (level) => {
  switch (level) {
    case 'basico':
      return 'Básico';
    case 'intermediario':
      return 'Intermediário';
    case 'avancado':
      return 'Avançado';
    default:
      return 'Desconhecido';
  }
};

const CommandCard = ({
  command,
  comment,
  level = 'basico',
  className = '',
  showLevel = true,
  compact = false,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      // Tenta usar a API moderna do clipboard
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = command;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          throw new Error('Fallback copy failed');
        }
      }
    } catch (err) {
      console.error('Erro ao copiar comando:', err);
    }
  };

  const cardSize = compact ? 'p-3 text-sm' : 'p-4 text-base';

  return (
    <div
      className={`
        command-card-universal
        bg-slate-800/50 backdrop-blur-sm
        rounded-lg border border-slate-700/50
        hover:border-purple-500/50
        transition-all duration-300
        hover:shadow-lg hover:shadow-purple-500/10
        relative
        ${cardSize}
        ${className}
      `}>
      {/* Header com nível (opcional) */}
      {showLevel && (
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`
              px-2 py-1 rounded text-xs text-white flex items-center gap-1
              ${getLevelColor(level)}
            `}>
              {getLevelIcon(level)}
              <span>{getLevelLabel(level)}</span>
            </span>
          </div>
        </div>
      )}

      {/* Comando com botão de cópia */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <code
            className={`
            flex-1 bg-slate-900/50 px-3 py-2 rounded font-mono 
            text-green-400 break-all
            ${compact ? 'text-xs py-1 px-2' : 'text-sm'}
          `}>
            {command}
          </code>
          <button
            onClick={copyToClipboard}
            className={`
              p-2 rounded-lg transition-all duration-200 
              min-w-[44px] min-h-[44px] flex items-center justify-center
              touch-target touch-feedback
              ${
                copied
                  ? 'bg-green-600/50 text-white border-green-500/50'
                  : 'bg-slate-700/50 hover:bg-purple-600/50 text-slate-400 hover:text-white border border-slate-600/50 hover:border-purple-500/50'
              }
            `}
            title={copied ? 'Copiado!' : 'Copiar comando'}>
            {copied ? <FaCheck /> : <FaCopy />}
          </button>
        </div>

        {/* Comentário/descrição */}
        {comment && (
          <p
            className={`
            text-slate-400 ml-2
            ${compact ? 'text-xs' : 'text-sm'}
          `}>
            {comment}
          </p>
        )}
      </div>

      {/* Feedback visual de cópia */}
      {copied && (
        <div className="absolute top-2 right-2 text-green-400 text-xs animate-pulse">
          Copiado!
        </div>
      )}
    </div>
  );
};

export default CommandCard;
