'use client';

import CardHeader from '@/components/cards/cardHeader';
import CardTitle from '@/components/cards/cardTitle';
import CommandCard from '@/components/cards/CommandCard';
import CommandsFilter from '@/components/cards/CommandsFilter';
import { bashCommands } from '@/data/commands-data';
import { useRef, useState } from 'react';

export default function BashPage() {
  const [filter, setFilter] = useState('todos');
  const cardsContainerRef = useRef(null);

  const filteredCommands = Object.entries(bashCommands).filter(
    ([key, command]) => {
      if (filter === 'todos') return true;
      return command.level === filter;
    }
  );

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);

    // Rolar para o início dos cards após um pequeno delay para garantir que os cards foram renderizados
    setTimeout(() => {
      if (cardsContainerRef.current) {
        const headerHeight = 80; // Altura aproximada do header + filtro sticky
        const elementPosition =
          cardsContainerRef.current.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  return (
    <>
      <CardTitle
        className={'mb-5'}
        title={'🐧 Bash Cheatsheet'}
        subtitle={'Do Iniciante ao Avançado - Domine o Terminal'}
      />
      <CardHeader
        title={'🤔 O que é Bash?'}
        description_1={
          'Bash (Bourne Again Shell) é um interpretador de comandos Unix/Linux. É a interface entre você e o sistema operacional, permitindo controlar o computador através de texto.'
        }
      />
      <span className="text-center inline-block w-full mb-5 text-[24px] md:text-4xl">
        📚 Comandos por Nível
      </span>
      <div className="sticky top-20 z-10 bg-[#1a1a2e] py-4 mb-4 sticky-filter">
        <CommandsFilter onFilterChange={handleFilterChange} />
      </div>

      <div
        ref={cardsContainerRef}
        className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
        {filteredCommands.map(([key, command]) => (
          <CommandCard
            key={key}
            title={command.title}
            level={command.level}
            sections={command.sections}
            useCase={command.useCase}
            tip={command.tip}
          />
        ))}
      </div>
    </>
  );
}
