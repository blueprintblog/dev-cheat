'use client';

import { useEffect, useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({
  onSearch,
  placeholder = 'Buscar comandos...',
  className = '',
  debounceMs = 300,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Debounce para busca
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(searchTerm);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [searchTerm, debounceMs, onSearch]);

  const handleClear = () => {
    setSearchTerm('');
    onSearch?.('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div
      className={`
      search-bar-universal relative max-w-md mx-auto mb-6
      ${className}
    `}>
      <div
        className={`
        relative flex items-center bg-slate-800/50 backdrop-blur-sm
        rounded-lg border border-slate-700/50 transition-all duration-300
        ${
          isFocused
            ? 'border-purple-500/50 shadow-lg shadow-purple-500/20'
            : 'hover:border-slate-600/50'
        }
      `}>
        {/* Ícone de busca */}
        <div className="absolute left-3 text-slate-400">
          <FaSearch className="text-sm" />
        </div>

        {/* Input de busca */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`
            w-full pl-10 pr-10 py-3 bg-transparent
            text-slate-300 placeholder-slate-500
            outline-none rounded-lg
            focus:text-white transition-colors duration-200
          `}
        />

        {/* Botão limpar */}
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-3 text-slate-400 hover:text-white transition-colors duration-200 p-1"
            title="Limpar busca">
            <FaTimes className="text-sm" />
          </button>
        )}
      </div>

      {/* Indicador de resultados (opcional) */}
      {searchTerm && (
        <div className="absolute -bottom-6 left-0 right-0 text-center">
          <span className="text-xs text-slate-500">
            Pressione ESC para limpar
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
