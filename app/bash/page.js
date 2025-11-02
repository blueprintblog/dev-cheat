'use client';

import CardContribuete from '@/components/cards/CardContribuete';
import CardHeader from '@/components/cards/CardHeader';
import CardTitle from '@/components/cards/CardTitle';
import {
  CommandCard,
  LevelFilter,
  ResponsiveGrid,
  SearchBar,
  useLevelFilter,
  useSearch,
} from '@/components/universal';
import { bashCommands } from '@/data/bash-data';
import Link from 'next/link';
import { SiGnubash } from 'react-icons/si';

export default function PageBash() {
  const {
    activeFilter,
    filteredData: filteredByLevel,
    levelCounts,
    handleFilterChange,
    hasData,
    isEmpty: isEmptyLevel,
  } = useLevelFilter(bashCommands);

  // Hook para busca
  const {
    searchTerm,
    setSearchTerm,
    clearSearch,
    filteredData: filteredBySearch,
    searchStats,
    isSearching,
    hasSearchTerm,
  } = useSearch(filteredByLevel);

  // Dados finais (combinando filtro e busca)
  const filteredData = hasSearchTerm ? filteredBySearch : filteredByLevel;
  const isEmpty = hasSearchTerm ? !searchStats.hasResults : isEmptyLevel;

  if (!hasData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-slate-400">
          <p>Carregando comandos Bash...</p>
        </div>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="container mx-auto px-4 py-8">
        <LevelFilter
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
        <div className="text-center text-slate-400 mt-12">
          <p className="text-lg">
            {hasSearchTerm
              ? `Nenhum comando encontrado para "${searchTerm}"`
              : `Nenhum comando encontrado para o nível &apos;${activeFilter}&apos;`}
          </p>
          <p className="text-sm mt-2">
            {hasSearchTerm
              ? 'Tente outros termos de busca.'
              : 'Tente selecionar outro nível de dificuldade.'}
          </p>
          {hasSearchTerm && (
            <button
              onClick={clearSearch}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
              Limpar Busca
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <Link href="/" className="backToMain">
        ← Voltar para página principal
      </Link>

      <CardTitle
        className={'mb-5'}
        icon={<SiGnubash className="inline-block mr-2 " />}
        title={'Bash Cheatsheet'}
        subtitle={
          'Guia completo de Bash para automação e administração de sistemas'
        }
      />
      <CardHeader
        title={'💻 O que é Bash?'}
        className={' border-green-600'}
        description_1={
          <>
            <strong>Bash</strong> (Bourne Again Shell) é o shell mais popular em
            sistemas Unix/Linux. É uma interface de linha de comando poderosa
            que permite executar comandos, automatizar tarefas e gerenciar
            sistemas operacionais.
          </>
        }
        description_2={
          <>
            • Interface de linha de comando <br /> • Scripting e automação{' '}
            <br />• Compatibilidade com POSIX <br /> • Extensível com plugins{' '}
            <br /> • Padrão da maioria das distribuições Linux
          </>
        }
        description_3={
          <>
            • Automação de tarefas <br /> • Administração de sistemas <br />•
            Desenvolvimento de scripts <br /> • Processamento de dados <br />•
            DevOps e CI/CD
          </>
        }>
        <>
          <strong className="text-[#4EAA25] text-[18px]">
            💡 Onde você vai usar:
          </strong>
          <div className="where-grid">
            <div className="where-item">
              🖥️ <strong>Terminal</strong>
              <br />
              <span className="opacity-80 text-base ">Linux, macOS, WSL</span>
            </div>
            <div className="where-item">
              🔧 <strong>Scripts</strong>
              <br />
              <span className="opacity-80 text-base ">Automação, Deploy</span>
            </div>
            <div className="where-item">
              ⚡ <strong>DevOps</strong>
              <br />
              <span className="opacity-80 text-base ">CI/CD, Docker</span>
            </div>
            <div className="where-item">
              🤖 <strong>Modern</strong>
              <br />
              <span className="opacity-80 text-base ">Cloud, Containers</span>
            </div>
          </div>
        </>
      </CardHeader>

      <div>
        {/* Filtros de Nível */}
        <LevelFilter
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        {/* Barra de Busca */}
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          placeholder="Buscar comandos Bash..."
          className="mb-6"
        />

        {/* Estatísticas Combinadas */}
        <div className="mb-8 flex flex-wrap gap-4 text-sm text-slate-400">
          <span>Total: {levelCounts.todos} categorias</span>
          <span>Básico: {levelCounts.basico}</span>
          <span>Intermediário: {levelCounts.intermediario}</span>
          <span>Avançado: {levelCounts.avancado}</span>
          {hasSearchTerm && (
            <span className="text-purple-400">
              Busca: {searchStats.foundCommands} comandos encontrados
            </span>
          )}
        </div>

        {/* Estado de Busca */}
        {isSearching && (
          <div className="text-center text-slate-400 mb-6">
            <p>Buscando...</p>
          </div>
        )}

        {/* Categorias e Comandos */}
        {Object.entries(filteredData).map(([categoryKey, categoryData]) => (
          <div key={categoryKey} className="mb-12">
            {/* Cabeçalho da Categoria */}
            <div className="category-header mb-8">
              <h1 className="text-3xl font-bold mb-2">{categoryData.title}</h1>
              <p className="text-lg opacity-90">{categoryData.useCase}</p>

              {/* Tip */}
              {categoryData.tip && (
                <div className="mt-4 p-3 bg-blue-900/30 border border-blue-500/50 rounded-lg hover-glow">
                  <p className="text-blue-300 text-sm">💡 {categoryData.tip}</p>
                </div>
              )}
            </div>

            {/* Sections da Categoria em Grid */}
            <ResponsiveGrid className="gap-6">
              {Object.entries(categoryData.sections).map(
                ([sectionKey, commands]) => (
                  <div key={sectionKey} className="section-card">
                    <h2 className="section-title mb-4 flex items-center gap-2">
                      <span className="text-lg">📋</span>
                      {sectionKey}
                    </h2>

                    {/* Lista de Comandos */}
                    <div className="space-y-3">
                      {commands.map((command, index) => (
                        <CommandCard
                          key={index}
                          command={command.command}
                          comment={command.comment}
                          level={categoryData.level}
                          className=""
                        />
                      ))}
                    </div>
                  </div>
                )
              )}
            </ResponsiveGrid>
          </div>
        ))}
      </div>
      <CardContribuete />
    </>
  );
}
