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
import { scriptsCommands } from '@/data/scripts-data';
import Link from 'next/link';
import { MdDescription } from 'react-icons/md';

export default function ScriptsPage() {
  const {
    activeFilter,
    filteredData: filteredByLevel,
    levelCounts,
    handleFilterChange,
    hasData,
    isEmpty: isEmptyLevel,
  } = useLevelFilter(scriptsCommands);

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
          <p>Carregando scripts...</p>
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
              ? `Nenhum script encontrado para "${searchTerm}"`
              : `Nenhum script encontrado para o nível '${activeFilter}'`}
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
        icon={<MdDescription className="inline-block mr-2 " />}
        title={'Scripts Cheatsheet'}
        subtitle={
          'Guia completo de Scripts Bash para automação e produtividade'
        }
      />
      <CardHeader
        title={'📜 O que são Scripts?'}
        className={' border-purple-700'}
        description_1={
          <>
            <strong>Scripts Bash</strong> são arquivos de texto contendo
            sequências de comandos que podem ser executados automaticamente. São
            ferramentas poderosas para automação de tarefas repetitivas,
            administração de sistemas e aumento de produtividade.
          </>
        }
        description_2={
          <>
            • Automação de tarefas repetitivas <br /> • Processamento em lote{' '}
            <br />• Administração de sistemas <br /> • Personalização do
            ambiente <br /> • Integração com outras ferramentas
          </>
        }
        description_3={
          <>
            • Backup e restauração de dados <br /> • Monitoramento de sistemas{' '}
            <br />• Deploy de aplicações <br /> • Análise de logs <br />•
            Configuração de ambientes
          </>
        }>
        <>
          <strong className="text-[#9b59b6] text-[18px]">
            💡 Onde você vai usar:
          </strong>
          <div className="where-grid">
            <div className="where-item">
              🔧 <strong>Automação</strong>
              <br />
              <span className="opacity-80 text-base ">Tarefas, Backup</span>
            </div>
            <div className="where-item">
              🖥️ <strong>Sistemas</strong>
              <br />
              <span className="opacity-80 text-base ">Admin, Monitor</span>
            </div>
            <div className="where-item">
              ⚡ <strong>DevOps</strong>
              <br />
              <span className="opacity-80 text-base ">CI/CD, Deploy</span>
            </div>
            <div className="where-item">
              🤖 <strong>Modern</strong>
              <br />
              <span className="opacity-80 text-base ">Cloud, Containers</span>
            </div>
          </div>
        </>
      </CardHeader>

      <div className="container mx-auto px-4 py-8">
        {/* Filtros de Nível */}
        <LevelFilter
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        {/* Barra de Busca */}
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          placeholder="Buscar scripts..."
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

              {/* Warning */}
              {categoryData.warning && (
                <div className="mt-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg hover-glow">
                  <p className="text-red-300 text-sm">
                    ⚠️ {categoryData.warning}
                  </p>
                </div>
              )}

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
