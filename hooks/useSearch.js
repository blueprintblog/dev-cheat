'use client';

import { useMemo, useState } from 'react';

/**
 * Hook personalizado para busca em cheatsheets
 * @param {Object} data - Dados do cheatsheet
 * @param {Object} options - Opções de configuração
 * @returns {Object} - Estado e funções de busca
 */
export const useSearch = (data, options = {}) => {
  const {
    searchFields = ['command', 'comment'],
    caseSensitive = false,
    minSearchLength = 2,
  } = options;

  const [searchTerm, setSearchTerm] = useState('');

  // Filtra os dados com base no termo de busca
  const filteredData = useMemo(() => {
    if (!data || !searchTerm || searchTerm.length < minSearchLength) {
      return data;
    }

    const term = caseSensitive ? searchTerm : searchTerm.toLowerCase();

    const filtered = {};

    Object.entries(data).forEach(([categoryKey, categoryData]) => {
      const filteredSections = {};

      Object.entries(categoryData.sections).forEach(
        ([sectionKey, commands]) => {
          const filteredCommands = commands.filter((command) => {
            return searchFields.some((field) => {
              const value = command[field];
              if (!value) return false;

              const searchValue = caseSensitive ? value : value.toLowerCase();
              return searchValue.includes(term);
            });
          });

          if (filteredCommands.length > 0) {
            filteredSections[sectionKey] = filteredCommands;
          }
        }
      );

      if (Object.keys(filteredSections).length > 0) {
        filtered[categoryKey] = {
          ...categoryData,
          sections: filteredSections,
        };
      }
    });

    return filtered;
  }, [data, searchTerm, searchFields, caseSensitive, minSearchLength]);

  // Estatísticas da busca
  const searchStats = useMemo(() => {
    if (!data)
      return { totalCategories: 0, totalCommands: 0, foundCommands: 0 };

    let totalCommands = 0;
    let foundCommands = 0;

    Object.values(data).forEach((category) => {
      Object.values(category.sections).forEach((commands) => {
        totalCommands += commands.length;
      });
    });

    if (searchTerm && searchTerm.length >= minSearchLength) {
      Object.values(filteredData).forEach((category) => {
        Object.values(category.sections).forEach((commands) => {
          foundCommands += commands.length;
        });
      });
    } else {
      foundCommands = totalCommands;
    }

    return {
      totalCategories: Object.keys(data).length,
      totalCommands,
      foundCommands,
      hasResults: foundCommands > 0,
      searchTerm: searchTerm,
      isActive: searchTerm.length >= minSearchLength,
    };
  }, [data, filteredData, searchTerm, minSearchLength]);

  // Estado de busca (baseado no termo e comprimento)
  const isSearching = searchTerm && searchTerm.length >= minSearchLength;
  const hasSearchTerm = searchTerm.length >= minSearchLength;

  // Função para limpar busca
  const clearSearch = () => {
    setSearchTerm('');
  };

  // Função para setar termo de busca
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return {
    searchTerm,
    setSearchTerm: handleSearch,
    clearSearch,
    filteredData,
    searchStats,
    isSearching,
    hasSearchTerm,
  };
};

export default useSearch;
