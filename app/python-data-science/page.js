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
import { pythonDataScienceCommands } from '@/data/python-data-science';
import Link from 'next/link';
import { FaPython } from 'react-icons/fa';

export default function PagePythonDataScience() {
  const {
    activeFilter,
    filteredData: filteredByLevel,
    levelCounts,
    handleFilterChange,
    hasData,
    isEmpty: isEmptyLevel,
  } = useLevelFilter(pythonDataScienceCommands);

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
          <p>Carregando comandos Python Data Science...</p>
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
        icon={<FaPython className="inline-block mr-2" />}
        title={'Python Data Science Cheatsheet'}
        subtitle={
          'Bibliotecas essenciais e comandos para análise de dados, machine learning e visualização'
        }
      />
      <CardHeader
        title={'📊 O que é Python Data Science?'}
        className={' border-purple-700'}
        description_1={
          <>
            <strong>Python Data Science</strong> é o ecossistema de bibliotecas
            e ferramentas Python para análise de dados, visualização e machine
            learning. Combina poderosas bibliotecas como Pandas, NumPy,
            Matplotlib e Scikit-learn para transformar dados brutos em insights
            valiosos.
          </>
        }
        description_2={
          <>
            • Manipulação eficiente de dados <br /> • Visualizações interativas
            e informativas <br /> • Algoritmos de machine learning <br /> •
            Análise estatística avançada <br /> • Processamento de séries
            temporais
          </>
        }
        description_3={
          <>
            • Análise exploratória de dados <br /> • Modelagem preditiva <br />{' '}
            • Dashboards e relatórios <br /> • Big Data e processamento
            distribuído
          </>
        }>
        <>
          <strong className="text-[#9b59b6] text-[18px]">
            💡 Onde você vai usar:
          </strong>
          <div className="where-grid">
            <div className="where-item">
              📊 <strong>Análise de Dados</strong>
              <br />
              <span className="opacity-80 text-base ">
                Pandas, NumPy, análise estatística
              </span>
            </div>
            <div className="where-item">
              📈 <strong>Visualização</strong>
              <br />
              <span className="opacity-80 text-base ">
                Matplotlib, Seaborn, gráficos interativos
              </span>
            </div>
            <div className="where-item">
              🤖 <strong>Machine Learning</strong>
              <br />
              <span className="opacity-80 text-base ">
                Scikit-learn, modelos preditivos
              </span>
            </div>
            <div className="where-item">
              🔬 <strong>Research</strong>
              <br />
              <span className="opacity-80 text-base ">
                Jupyter, experimentos, publicações
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
          placeholder="Buscar comandos Python Data Science..."
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
