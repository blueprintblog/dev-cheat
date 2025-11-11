'use client';

import { useState } from 'react';
import { FaTools, FaBug, FaCopy, FaCheck } from 'react-icons/fa';
import { troubleshootingData } from '@/data/troubleshooting-data';
import CardTitle from '@/components/cards/CardTitle';
import Link from 'next/link';
import { SubstackNewsletterCard } from '@/components/substack/SubstackNewsletterCardProps';

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
      <Link href="/" className="backToMain">
        ← Voltar para página principal
      </Link>
      <CardTitle
        title={'Linux Troubleshooting'}
        subtitle={
          <>
            Erro → Solução Clara e Direta <br />
            Encontre seu erro e copie a solução em segundos
          </>
        }
      />

      {/* Header */}
      <div className="container mx-auto px-4 py-8">
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
            <span className="text-2xl font-bold text-white">
              {troubleshootingData.length}
            </span>{' '}
            problemas documentados
          </p>
        </div>

        {/* Problems List */}
        <div className="grid gap-4 max-w-4xl mx-auto">
          {troubleshootingData.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300">
              {/* Error Section */}
              <div className="p-6 bg-linear-to-r from-red-900/20 to-orange-900/20">
                <div className="flex items-start space-x-3">
                  <FaBug className="w-6 h-6 text-red-400 mt-1 shrink-0" />
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
              <div className="p-6 bg-linear-to-r from-green-900/20 to-blue-900/20">
                <div className="flex items-start space-x-3">
                  <FaTools className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Solução: {item.solution.description}
                    </h3>
                    <div className="space-y-2">
                      {item.solution.commands.map((cmd, cmdIndex) => (
                        <div
                          key={cmdIndex}
                          className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg group hover:bg-slate-800/50 transition-colors">
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <code className="text-green-400 font-mono text-sm break-all">
                              {cmd.command}
                            </code>
                            <span className="text-slate-400 text-xs shrink-0">
                              {cmd.comment}
                            </span>
                          </div>
                          <button
                            onClick={() => copyCommand(cmd.command)}
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-all shrink-0">
                            {copiedCommand === cmd.command ? (
                              <FaCheck className="w-4 h-4 text-green-400" />
                            ) : (
                              <FaCopy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section - Scripts Automatizados */}
        <div className="mt-16 max-w-2xl mx-auto">
          <SubstackNewsletterCard className="my-8" />
        </div>
      </div>
    </>
  );
}