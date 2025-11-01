'use client';

import { useEffect } from 'react';
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimes,
} from 'react-icons/fa';

const Toast = ({
  message,
  isVisible,
  type = 'success',
  onClose,
  duration = 3000,
  position = 'bottom-right',
}) => {
  // Auto-close após duration
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  // Configurações de posição
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  };

  // Configurações de cor e ícone
  const typeConfig = {
    success: {
      bgColor: 'bg-green-600/90',
      borderColor: 'border-green-500/50',
      icon: <FaCheckCircle className="text-white" />,
    },
    error: {
      bgColor: 'bg-red-600/90',
      borderColor: 'border-red-500/50',
      icon: <FaExclamationTriangle className="text-white" />,
    },
    warning: {
      bgColor: 'bg-yellow-600/90',
      borderColor: 'border-yellow-500/50',
      icon: <FaExclamationTriangle className="text-white" />,
    },
    info: {
      bgColor: 'bg-blue-600/90',
      borderColor: 'border-blue-500/50',
      icon: <FaInfoCircle className="text-white" />,
    },
  };

  const config = typeConfig[type] || typeConfig.info;

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed z-50 transition-all duration-300 transform
        ${positionClasses[position] || positionClasses['bottom-right']}
        ${
          isVisible
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-full opacity-0 scale-95'
        }
      `}>
      <div
        className={`
        px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm
        flex items-center gap-3 max-w-sm md:max-w-md
        ${config.bgColor} ${config.borderColor}
        border text-white
      `}>
        {/* Ícone */}
        <span className="flex-shrink-0 text-lg">{config.icon}</span>

        {/* Mensagem */}
        <span className="flex-1 text-sm font-medium break-words">
          {message}
        </span>

        {/* Botão fechar */}
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
            title="Fechar">
            <FaTimes className="text-white text-sm" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;
