'use client';

import { useState } from 'react';
import { FaBars, FaCheckCircle, FaCogs, FaGraduationCap } from 'react-icons/fa';

// Configuração dos filtros de nível
const levelFilters = [
  {
    id: 'todos',
    label: 'Todos',
    icon: <FaCheckCircle />,
    color: 'from-slate-600 to-slate-700',
    shadow: 'shadow-slate-500/20',
  },
  {
    id: 'basico',
    label: 'Básico',
    icon: <FaCheckCircle />,
    color: 'from-green-600 to-green-700',
    shadow: 'shadow-green-500/20',
  },
  {
    id: 'intermediario',
    label: 'Intermediário',
    icon: <FaGraduationCap />,
    color: 'from-yellow-600 to-yellow-700',
    shadow: 'shadow-yellow-500/20',
  },
  {
    id: 'avancado',
    label: 'Avançado',
    icon: <FaCogs />,
    color: 'from-red-600 to-red-700',
    shadow: 'shadow-red-500/20',
  },
];

const LevelFilter = ({
  activeFilter = 'todos',
  onFilterChange,
  className = '',
  showMobileMenu = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleFilterChange = (filterId) => {
    onFilterChange?.(filterId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`level-filter-universal mb-6 ${className}`}>
      {/* Desktop: Filtros horizontais */}
      <div className="hidden md:flex flex-wrap gap-2">
        {levelFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilterChange(filter.id)}
            className={`
              px-4 py-2 rounded-full transition-all duration-300 
              flex items-center gap-2 touch-target touch-feedback
              ${
                activeFilter === filter.id
                  ? `bg-gradient-to-r ${filter.color} text-white shadow-lg ${filter.shadow} transform scale-105`
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/50 hover:border-slate-500/50'
              }
            `}>
            <span className="text-sm">{filter.icon}</span>
            <span className="font-medium">{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Mobile: Menu hambúrguer */}
      {showMobileMenu && (
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full px-4 py-3 bg-slate-800/50 rounded-lg flex items-center justify-between border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-200 touch-target">
            <span className="text-slate-300 font-medium flex items-center gap-2">
              <span>
                {levelFilters.find((f) => f.id === activeFilter)?.icon}
              </span>
              <span>
                {levelFilters.find((f) => f.id === activeFilter)?.label ||
                  'Todos'}
              </span>
            </span>
            <FaBars
              className={`text-slate-400 transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-90' : ''
              }`}
            />
          </button>

          {/* Menu dropdown mobile */}
          <div
            className={`
            mt-2 bg-slate-800/90 backdrop-blur-sm rounded-lg overflow-hidden 
            border border-slate-700/50 transition-all duration-300
            ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}>
            {levelFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`
                  w-full px-4 py-3 flex items-center gap-3 transition-all duration-200
                  touch-target touch-feedback border-b border-slate-700/30 last:border-b-0
                  ${
                    activeFilter === filter.id
                      ? `bg-gradient-to-r ${filter.color} text-white`
                      : 'text-slate-300 hover:bg-slate-700/50'
                  }
                `}>
                <span className="text-sm">{filter.icon}</span>
                <span className="font-medium">{filter.label}</span>
                {activeFilter === filter.id && (
                  <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full">
                    Ativo
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Indicador visual do filtro ativo (mobile) */}
      {showMobileMenu && (
        <div className="md:hidden mt-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Filtro ativo:</span>
            <span className="text-slate-300 font-medium">
              {levelFilters.find((f) => f.id === activeFilter)?.label}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelFilter;
export { levelFilters };
