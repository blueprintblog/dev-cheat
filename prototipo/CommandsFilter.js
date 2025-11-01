'use client';

import { useState } from 'react';

export default function CommandsFilter({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos', color: 'from-gray-500 to-gray-600' },
    {
      id: 'iniciante',
      label: 'Iniciante 🟢',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'intermediario',
      label: 'Intermediário 🟡',
      color: 'from-yellow-500 to-yellow-600',
    },
    { id: 'avancado', label: 'Avançado 🔴', color: 'from-red-500 to-red-600' },
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    onFilterChange(filterId);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
            activeFilter === filter.id
              ? `bg-gradient-to-r ${filter.color} text-white shadow-lg transform scale-105`
              : 'bg-[#2a2a3e] text-gray-300 hover:bg-[#3a3a4e]'
          }`}>
          <span>{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
