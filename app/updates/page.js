import CardContribuete from '@/components/cards/CardContribuete';
import {
  FaBug,
  FaCode,
  FaCogs,
  FaGitAlt,
  FaRocket,
  FaStar,
} from 'react-icons/fa';
import { IoBarChart } from 'react-icons/io5';

export default function Updates() {
  const updates = [
    {
      version: 'v4.2.6',
      date: '2025-11-05',
      title: '🐍 Nova Cheatsheet: Python Data Science',
      icon: <IoBarChart className="w-6 h-6 text-purple-400" />,
      description:
        'Nova cheatsheet especializada em Python Data Science com pandas, numpy, matplotlib, seaborn e scikit-learn.',
      features: [
        'Pandas: manipulação de dados, filtros, agrupamento',
        'NumPy: arrays, operações matemáticas, álgebra linear',
        'Matplotlib: gráficos básicos e avançados',
        'Seaborn: visualização estatística',
        'Scikit-learn: machine learning e pré-processamento',
      ],
      type: 'feature',
    },
    {
      version: 'v4.2.5',
      date: '2025-11-05',
      title: '🎨 Componente BackToTop Corrigido',
      icon: <FaBug className="w-6 h-6 text-red-400" />,
      description:
        'Correção completa do componente BackToTop com ícone direcionado corretamente e cores neutras.',
      features: [
        'Ícone corrigido: BiChevronUp em vez de BiChevronDown',
        'Cores neutras: tons de slate/cinza',
        'Classes CSS corrigidas: w-12 h-12',
        'Conversão para JavaScript para compatibilidade',
      ],
      type: 'fix',
    },
    {
      version: 'v4.2.4',
      date: '2025-11-03',
      title: '📝 Nova Cheatsheet: VS Code',
      icon: <FaCode className="w-6 h-6 text-blue-400" />,
      description:
        'Nova cheatsheet completa para VS Code com atalhos, debugging, extensions e remote development.',
      features: [
        'Atalhos essenciais e navegação',
        'Multi-cursor e seleção avançada',
        'Debugging e breakpoints',
        'Extensions recomendadas',
        'Remote development (SSH, Containers, WSL)',
      ],
      type: 'feature',
    },
    {
      version: 'v4.2.3',
      date: '2025-11-02',
      title: '🐹 Nova Cheatsheet: Go Programming',
      icon: <FaCode className="w-6 h-6 text-cyan-400" />,
      description:
        'Nova cheatsheet completa para Go Programming com foco em concorrência e sistemas distribuídos.',
      features: [
        'Estrutura de projetos e módulos',
        'Goroutines e canais',
        'Interfaces e métodos',
        'Testing e benchmarks',
        'Build e cross-compilation',
      ],
      type: 'feature',
    },
    {
      version: 'v4.2.0',
      date: '2025-11-02',
      title: '🎯 Melhorias na Navegação',
      icon: <FaCogs className="w-6 h-6 text-green-400" />,
      description:
        'Melhorias significativas na navegação desktop e mobile com menus dropdown otimizados.',
      features: [
        'Dropdowns otimizados com sistema de timers',
        'Menu mobile simplificado e funcional',
        'Menu hambúrguer moderno',
        'Navegação mais fluida e intuitiva',
      ],
      type: 'improvement',
    },
    {
      version: 'v4.1.0',
      date: '2025-11-02',
      title: '🌐 Novas Cheatsheets Web',
      icon: <FaStar className="w-6 h-6 text-yellow-400" />,
      description:
        'Adição das cheatsheets de HTML5 e CSS3 completando o trio fundamental do desenvolvimento web.',
      features: [
        'HTML5: estrutura semântica, formulários, multimídia',
        'CSS3: flexbox, grid, animações, responsividade',
        'Design com cores temáticas características',
        'Integração completa com JavaScript',
      ],
      type: 'feature',
    },
    {
      version: 'v4.0.0',
      date: '2025-11-02',
      title: '🚀 Arquitetura Universal Refatorada',
      icon: <FaRocket className="w-6 h-6 text-purple-400" />,
      description:
        'Refatoração completa da arquitetura com componentes universais reutilizáveis e novas cheatsheets.',
      features: [
        'Componentes universais: CommandCard, LevelFilter, SearchBar',
        'Hooks personalizados: useLevelFilter, useSearch',
        'Novas cheatsheets: Kubernetes, DevSecOps, CI/CD, Cloud',
        'Sistema de design unificado com cores temáticas',
      ],
      type: 'major',
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'major':
        return 'bg-purple-500/20 border-purple-500/50 text-purple-300';
      case 'feature':
        return 'bg-green-500/20 border-green-500/50 text-green-300';
      case 'fix':
        return 'bg-red-500/20 border-red-500/50 text-red-300';
      case 'improvement':
        return 'bg-blue-500/20 border-blue-500/50 text-blue-300';
      default:
        return 'bg-gray-500/20 border-gray-500/50 text-gray-300';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'major':
        return 'Major';
      case 'feature':
        return 'Novidade';
      case 'fix':
        return 'Correção';
      case 'improvement':
        return 'Melhoria';
      default:
        return 'Atualização';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-5 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📋 Atualizações do Projeto
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Confira todas as novidades, melhorias e correções implementadas no
            projeto Dev Cheatsheet.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
            <div className="text-gray-400">Cheatsheets</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">2500+</div>
            <div className="text-gray-400">Comandos</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
            <div className="text-gray-400">Tecnologias</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700/50">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              v4.2.6
            </div>
            <div className="text-gray-400">Versão Atual</div>
          </div>
        </div>

        {/* Updates Timeline */}
        <div className="space-y-8">
          {updates.map((update, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-slate-900/50 rounded-lg">
                    {update.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {update.title}
                    </h3>
                    <div className="flex items-center gap-3 text-gray-400">
                      <span className="font-mono">{update.version}</span>
                      <span>•</span>
                      <span>{update.date}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold border ${getTypeColor(
                          update.type
                        )}`}>
                        {getTypeLabel(update.type)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {update.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {update.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <CardContribuete />
      </div>
    </div>
  );
}
