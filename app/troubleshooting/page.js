'use client';

import { useState } from 'react';
import { FaTools, FaBug, FaCopy, FaCheck } from 'react-icons/fa';
import { troubleshootingData } from '@/data/troubleshooting-data';

export default function TroubleshootingPage() {
  const [copiedCommand, setCopiedCommand] = useState(null);

  const copyCommand = async (command) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy command:', err);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-full shadow-2xl">
                <FaTools className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Linux Troubleshooting
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Erro → Solução Clara e Direta
              <br />
              <span className="text-base text-slate-400">
                Encontre seu erro e copie a solução em segundos
              </span>
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Buscar erro... (ex: permission denied, mount, no space)"
              className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          {/* Stats */}
          <div className="mb-12 text-center">
            <p className="text-slate-400">
              <span className="text-2xl font-bold text-white">{troubleshootingData.length}</span> problemas documentados
            </p>
          </div>

          {/* Problems List */}
          <div className="grid gap-4 max-w-4xl mx-auto">
            {troubleshootingData.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300"
              >
                {/* Error Section */}
                <div className="p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20">
                  <div className="flex items-start space-x-3">
                    <FaBug className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-2">
                        {item.error}
                      </h2>
                      <p className="text-red-300 text-sm font-mono bg-red-900/30 px-3 py-2 rounded">
                        {item.errorMessage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution Section */}
                <div className="p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-t border-slate-700">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">
                      ✅ Solução:
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {item.solution.description}
                    </p>
                  </div>

                  {/* Commands */}
                  <div className="space-y-2">
                    {item.solution.commands.map((command, cmdIndex) => (
                      <div
                        key={cmdIndex}
                        className="bg-slate-900/50 rounded-lg p-3 group hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <code className="text-purple-400 font-mono text-sm flex-1">
                            {command}
                          </code>
                          <button
                            onClick={() => copyCommand(command)}
                            className="ml-3 p-2 text-slate-400 hover:text-purple-400 hover:bg-slate-700 rounded transition-all duration-200 flex items-center space-x-1"
                            title="Copiar comando"
                          >
                            {copiedCommand === command ? (
                              <>
                                <FaCheck className="w-4 h-4 text-green-400" />
                                <span className="text-xs text-green-400">Copiado!</span>
                              </>
                            ) : (
                              <>
                                <FaCopy className="w-4 h-4" />
                                <span className="text-xs">Copiar</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-slate-400 text-sm">
              💡 Execute os comandos com cuidado. Sempre verifique o caminho e parâmetros antes de executar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}