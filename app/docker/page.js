'use client';

import {
  CommandCard,
  LevelFilter,
  ResponsiveGrid,
  useLevelFilter,
} from '@/components/universal';
import { dockerCommands } from '@/data/docker-data';

export default function PageDocker() {
  const {
    activeFilter,
    filteredData,
    levelCounts,
    handleFilterChange,
    hasData,
    isEmpty,
  } = useLevelFilter(dockerCommands);

  if (!hasData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-slate-400">
          <p>Carregando comandos Docker...</p>
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
            Nenhum comando encontrado para o nível "{activeFilter}"
          </p>
          <p className="text-sm mt-2">
            Tente selecionar outro nível de dificuldade.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filtros de Nível */}
      <LevelFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Estatísticas */}
      <div className="mb-8 flex flex-wrap gap-4 text-sm text-slate-400">
        <span>Total: {levelCounts.todos} categorias</span>
        <span>Básico: {levelCounts.basico}</span>
        <span>Intermediário: {levelCounts.intermediario}</span>
        <span>Avançado: {levelCounts.avancado}</span>
      </div>

      {/* Categorias e Comandos */}
      {Object.entries(filteredData).map(([categoryKey, categoryData]) => (
        <div key={categoryKey} className="mb-12 animate-fade-in-up">
          {/* Cabeçalho da Categoria */}
          <div className="card-title mb-8">
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
                <div
                  key={sectionKey}
                  className="section-card animate-slide-in-right">
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
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
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
  );
}
