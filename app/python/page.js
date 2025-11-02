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
import { pythonCommands } from '@/data/python-data';
import Link from 'next/link';
import { FaPython } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
export default function PagePython() {
  // Hook para filtro por nível
  const {
    activeFilter,
    filteredData: filteredByLevel,
    levelCounts,
    handleFilterChange,
    hasData,
    isEmpty: isEmptyLevel,
  } = useLevelFilter(pythonCommands);

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
          <p>Carregando comandos Python...</p>
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
        icon={<FaPython className="inline-block mr-2 " />}
        title={'Python Cheatsheet'}
        subtitle={
          'Guia completo de Python para desenvolvimento moderno e científico'
        }
      />

      <CardHeader
        title={'🐍 O que é Python?'}
        className={' border-green-700'}
        description_1={
          <>
            <strong>Python</strong> é uma linguagem de programação de alto
            nível, interpretada e multi-paradigma. Conhecida por sua sintaxe
            clara e legibilidade, é amplamente usada em desenvolvimento web,
            ciência de dados, automação e inteligência artificial.
          </>
        }
        description_2={
          <>
            • Sintaxe limpa e legível <br /> • Multi-paradigma (OO, funcional,
            procedural) <br /> • Ecossistema rico de bibliotecas <br /> • Ideal
            para iniciantes <br /> • Comunidade ativa e suporte corporativo
          </>
        }
        description_3={
          <>
            • Desenvolvimento web (Django, Flask) <br /> • Ciência de dados e
            Machine Learning <br /> • Automação e scripts <br /> •
            Desenvolvimento de APIs <br /> • Análise e visualização de dados
          </>
        }>
        <>
          <strong className="text-[#3776ab] text-[18px]">
            💡 Onde você vai usar:
          </strong>
          <div className="where-grid">
            <div className="where-item">
              🌐 <strong>Web</strong>
              <br />
              <span className="opacity-80 text-base ">
                Django, Flask, FastAPI
              </span>
            </div>
            <div className="where-item">
              📊 <strong>Data Science</strong>
              <br />
              <span className="opacity-80 text-base ">
                Pandas, NumPy, Matplotlib
              </span>
            </div>
            <div className="where-item">
              🤖 <strong>Machine Learning</strong>
              <br />
              <span className="opacity-80 text-base ">
                TensorFlow, PyTorch, Scikit
              </span>
            </div>
            <div className="where-item">
              ⚡ <strong>Modern</strong>
              <br />
              <span className="opacity-80 text-base ">
                Async, Type Hints, 3.12+
              </span>
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
          placeholder="Buscar comandos Python..."
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
                : `Nenhum comando encontrado para o nível '${activeFilter}'`}
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
            {Object.entries(filteredData).map(([categoryKey, categoryData]) => (
              <div key={categoryKey} className="mb-12">
                {/* Cabeçalho da Categoria */}
                <div className="category-header ">
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
