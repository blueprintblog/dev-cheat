'use client';

import { dockerCommands } from '@/data/docker-data';

export default function PageDocker() {
  return (
    <div className="container mx-auto px-4 py-8">
      {Object.entries(dockerCommands).map(([categoryKey, categoryData]) => (
        <div key={categoryKey} className="mb-12">
          {/* Cabeçalho da Categoria */}
          <div className="card-title mb-8">
            <h1 className="text-3xl font-bold mb-2">{categoryData.title}</h1>
            <p className="text-lg opacity-90">{categoryData.useCase}</p>
            {categoryData.warning && (
              <div className="mt-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg">
                <p className="text-red-300 text-sm">{categoryData.warning}</p>
              </div>
            )}
            {categoryData.tip && (
              <div className="mt-4 p-3 bg-blue-900/30 border border-blue-500/50 rounded-lg">
                <p className="text-blue-300 text-sm">{categoryData.tip}</p>
              </div>
            )}
          </div>

          {/* Sections da Categoria em Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categoryData.sections).map(
              ([sectionKey, commands]) => (
                <div key={sectionKey} className="section-card">
                  <h2 className="section-title mb-4">{sectionKey}</h2>

                  {/* Grid de Cards para os Comandos dentro de cada Section */}
                  <div className="space-y-3">
                    {commands.map((command, index) => (
                      <div key={index} className="command-card">
                        <h3 className="font-mono text-sm text-green-400 mb-2">
                          {command.command}
                        </h3>
                        <p className="text-slate-300 text-sm">
                          {command.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
