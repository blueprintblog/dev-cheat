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
import { javascriptCommands } from '@/data/javascript-data';
import Link from 'next/link';
import { IoLogoJavascript } from 'react-icons/io5';

export default function PageJavaScript() {
  // Hook para filtro por nível
  const {
    activeFilter,
    filteredData: filteredByLevel,
    levelCounts,
    handleFilterChange,
    hasData,
    isEmpty: isEmptyLevel,
  } = useLevelFilter(javascriptCommands);

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
  const finalData = hasSearchTerm ? filteredBySearch : filteredByLevel;
  const isEmpty = hasSearchTerm ? !searchStats.hasResults : isEmptyLevel;

  if (!hasData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-slate-400">
          <p>Carregando comandos JavaScript...</p>
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
        icon={<IoLogoJavascript className="inline-block mr-2 " />}
        title={'JavaScript Cheatsheet'}
        subtitle={
          'Guia completo de JavaScript ES6+ para desenvolvimento moderno'
        }
      />
      <CardHeader
        title={'🤔 O que é JavaScript?'}
        description_1={
          <>
            <strong>JavaScript</strong> é uma linguagem de programação de alto
            nível, interpretada e multi-paradigma. É a linguagem padrão da web,
            executada em navegadores e também em servidores (Node.js).
          </>
        }
        description_2={
          <>
            • Essencial para desenvolvimento web <br /> • Frontend e Backend com
            Node.js <br /> • Ecossistema mais ativo do mundo <br /> • Mobile com
            React Native <br /> • Desktop com Electron
          </>
        }
        description_3={
          <>
            • Aplicações web interativas <br /> • APIs e servidores REST <br />•
            Aplicações mobile e desktop <br />• Automação e scripts <br />•
            Machine Learning com TensorFlow.js
          </>
        }>
        <>
          <strong className="text-[#f7df1e] text-[18px]">
            💡 Onde você vai usar:
          </strong>
          <div className="where-grid">
            <div className="where-item">
              🌐 <strong>Web</strong>
              <br />
              <span className="opacity-80 text-base ">React, Vue, Angular</span>
            </div>
            <div className="where-item">
              ⚡ <strong>Backend</strong>
              <br />
              <span className="opacity-80 text-base ">Node.js, Express</span>
            </div>
            <div className="where-item">
              📱 <strong>Mobile</strong>
              <br />
              <span className="opacity-80 text-base ">React Native</span>
            </div>
            <div className="where-item">
              🤖 <strong>Modern</strong>
              <br />
              <span className="opacity-80 text-base ">TypeScript, ES6+</span>
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
          placeholder="Buscar comandos JavaScript..."
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

        {/* Estado Vazio */}
        {isEmpty && (
          <div className="text-center text-slate-400 mt-12">
            <p className="text-lg">
              {hasSearchTerm
                ? `Nenhum comando encontrado para "${searchTerm}"`
                : `Nenhum comando encontrado para o nível "${activeFilter}"`}
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
        )}

        {/* Categorias e Comandos */}
        {!isEmpty && (
          <>
            {Object.entries(finalData).map(([categoryKey, categoryData]) => (
              <div key={categoryKey} className="mb-12">
                {/* Cabeçalho da Categoria */}
                <div className="card-title mb-8">
                  <h1 className="text-3xl font-bold mb-2">
                    {categoryData.title}
                  </h1>
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
                      <p className="text-blue-300 text-sm">
                        💡 {categoryData.tip}
                      </p>
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
          </>
        )}
      </div>
      <CardContribuete />
    </>
  );
}
