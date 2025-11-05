'use client';

import { useEffect, useMemo, useState } from 'react';

/**
 * Hook personalizado para gerenciar filtros por nível em cheatsheets
 * @param {Object} data - Dados do cheatsheet (ex: bashCommands, dockerCommands)
 * @param {string} initialFilter - Filtro inicial (padrão: 'todos')
 * @returns {Object} - Estado e funções do filtro
 */
export const useLevelFilter = (data, initialFilter = 'todos') => {
  const [activeFilter, setActiveFilter] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cheatsheet-level-filter');
      if (
        saved &&
        ['todos', 'basico', 'intermediario', 'avancado'].includes(saved)
      ) {
        return saved;
      }
    }
    return initialFilter;
  });

  // Filtra os dados com base no nível selecionado
  const filteredData = useMemo(() => {
    if (!data) return {};

    if (activeFilter === 'todos') {
      return data;
    }

    const filtered = {};
    Object.entries(data).forEach(([key, value]) => {
      if (value.level === activeFilter) {
        filtered[key] = value;
      }
    });

    return filtered;
  }, [data, activeFilter]);

  // Contagem de itens por nível para estatísticas
  const levelCounts = useMemo(() => {
    if (!data) return { todos: 0, basico: 0, intermediario: 0, avancado: 0 };

    const counts = { todos: 0, basico: 0, intermediario: 0, avancado: 0 };

    Object.values(data).forEach((category) => {
      counts[category.level] = (counts[category.level] || 0) + 1;
      counts.todos += 1;
    });

    return counts;
  }, [data]);

  // Função para mudar o filtro
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  // Reset para o filtro inicial
  const resetFilter = () => {
    setActiveFilter(initialFilter);
  };

  // Efeito para salvar no localStorage quando mudar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cheatsheet-level-filter', activeFilter);
    }
  }, [activeFilter]);

  return {
    activeFilter,
    filteredData,
    levelCounts,
    handleFilterChange,
    resetFilter,
    hasData: Object.keys(data || {}).length > 0,
    isEmpty: Object.keys(filteredData).length === 0,
  };
};

export default useLevelFilter;
