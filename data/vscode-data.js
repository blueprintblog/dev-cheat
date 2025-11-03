// Objeto com todos os comandos da cheatsheet VS Code
export const vscodeCommands = {
  // Card Atalhos Essenciais
  atalhosEssenciais: {
    title: '⌨️ Atalhos Essenciais',
    level: 'basico',
    id: 'atalhos-essenciais',
    sections: {
      'Navegação e Edição': [
        {
          command: 'Ctrl + P',
          comment: '# Quick Open (abrir arquivo)',
        },
        {
          command: 'Ctrl + Shift + P',
          comment: '# Command Palette',
        },
        {
          command: 'Ctrl + ,',
          comment: '# Abrir configurações',
        },
        {
          command: 'Ctrl + B',
          comment: '# Toggle sidebar',
        },
        {
          command: 'Ctrl + `',
          comment: '# Abrir terminal integrado',
        },
        {
          command: 'Ctrl + J',
          comment: '# Mostrar/ocultar painel inferior',
        },
        {
          command: 'Ctrl + \\',
          comment: '# Dividir editor',
        },
        {
          command: 'Ctrl + 1/2/3',
          comment: '# Alternar entre grupos de editor',
        },
      ],
      'Seleção e Movimentação': [
        {
          command: 'Ctrl + D',
          comment: '# Selecionar próxima ocorrência',
        },
        {
          command: 'Ctrl + Shift + L',
          comment: '# Selecionar todas as ocorrências',
        },
        {
          command: 'Alt + ↑/↓',
          comment: '# Mover linha para cima/baixo',
        },
        {
          command: 'Alt + Shift + ↑/↓',
          comment: '# Copiar linha para cima/baixo',
        },
        {
          command: 'Ctrl + Shift + K',
          comment: '# Deletar linha',
        },
        {
          command: 'Ctrl + /',
          comment: '# Comentar/descomentar linha',
        },
        {
          command: 'Ctrl + Shift + /',
          comment: '# Alternar comentário de bloco',
        },
      ],
      'Navegação Rápida': [
        {
          command: 'Ctrl + G',
          comment: '# Ir para linha',
        },
        {
          command: 'Ctrl + P + :',
          comment: '# Ir para símbolo',
        },
        {
          command: 'Ctrl + Shift + O',
          comment: '# Ir para arquivo em símbolo',
        },
        {
          command: 'F12',
          comment: '# Ir para definição',
        },
        {
          command: 'Shift + F12',
          comment: '# Ir para definição ao lado',
        },
        {
          command: 'Ctrl + F12',
          comment: '# Ir para implementação',
        },
      ],
    },
    useCase:
      'Use quando: Navegando rapidamente, editando código, aumentando produtividade',
  },

  // Card Multi-Cursor e Seleção
  multiCursor: {
    title: '🎯 Multi-Cursor e Seleção',
    level: 'intermediario',
    id: 'multi-cursor',
    sections: {
      'Multi-Cursor Básico': [
        {
          command: 'Alt + Click',
          comment: '# Adicionar cursor em posição',
        },
        {
          command: 'Ctrl + Alt + ↑/↓',
          comment: '# Adicionar cursor acima/abaixo',
        },
        {
          command: 'Ctrl + U',
          comment: '# Desfazer último cursor',
        },
        {
          command: 'Esc',
          comment: '# Sair do modo multi-cursor',
        },
      ],
      'Seleção Colunar': [
        {
          command: 'Shift + Alt + Arrastar',
          comment: '# Seleção retangular (box)',
        },
        {
          command: 'Ctrl + Shift + Alt + ↑/↓',
          comment: '# Seleção colunar acima/abaixo',
        },
        {
          command: 'Ctrl + Shift + Alt + ←/→',
          comment: '# Expandir/retrair seleção colunar',
        },
      ],
      'Edição Multi-Cursor': [
        {
          command: 'Ctrl + D',
          comment: '# Selecionar e editar próxima ocorrência',
        },
        {
          command: 'Ctrl + Shift + L',
          comment: '# Selecionar todas as ocorrências',
        },
        {
          command: 'Ctrl + Alt + I',
          comment: '# Inserir cursor no final de cada linha selecionada',
        },
      ],
    },
    useCase:
      'Use quando: Editando múltiplas linhas, refatoração, edições em massa',
  },

  // Card Debugging e Breakpoints
  debugging: {
    title: '🐛 Debugging e Breakpoints',
    level: 'intermediario',
    id: 'debugging',
    sections: {
      'Breakpoints Essenciais': [
        {
          command: 'F9',
          comment: '# Toggle breakpoint',
        },
        {
          command: 'Ctrl + F9',
          comment: '# Toggle breakpoint (alternativo)',
        },
        {
          command: 'Shift + F9',
          comment: '# Toggle conditional breakpoint',
        },
        {
          command: 'Ctrl + Shift + F9',
          comment: '# Toggle inline breakpoint',
        },
      ],
      'Navegação no Debug': [
        {
          command: 'F5',
          comment: '# Continue/Start Debugging',
        },
        {
          command: 'Shift + F5',
          comment: '# Stop Debugging',
        },
        {
          command: 'F10',
          comment: '# Step Over',
        },
        {
          command: 'F11',
          comment: '# Step Into',
        },
        {
          command: 'Shift + F11',
          comment: '# Step Out',
        },
        {
          command: 'Ctrl + Shift + F5',
          comment: '# Restart Debugging',
        },
      ],
      'Debug Console': [
        {
          command: 'Ctrl + Shift + Y',
          comment: '# Focar Debug Console',
        },
        {
          command: 'Ctrl + Shift + I',
          comment: '# Abrir Developer Tools',
        },
        {
          command: 'Ctrl + `',
          comment: '# Mostrar terminal integrado',
        },
      ],
      'Watch e Inspect': [
        {
          command: 'Ctrl + Shift + W',
          comment: '# Adicionar ao Watch',
        },
        {
          command: 'Alt + Hover',
          comment: '# Inspecionar valor durante debug',
        },
      ],
    },
    useCase:
      'Use quando: Depurando código, analisando variáveis, encontrando bugs',
  },

  // Card Integrated Terminal
  terminalIntegrado: {
    title: '💻 Integrated Terminal',
    level: 'basico',
    id: 'terminal-integrado',
    sections: {
      'Terminal Básico': [
        {
          command: 'Ctrl + `',
          comment: '# Abrir/fechar terminal',
        },
        {
          command: 'Ctrl + Shift + `',
          comment: '# Criar novo terminal',
        },
        {
          command: 'Ctrl + C',
          comment: '# Copiar seleção',
        },
        {
          command: 'Ctrl + V',
          comment: '# Colar no terminal',
        },
        {
          command: 'Ctrl + Shift + C',
          comment: '# Copiar no terminal (Windows)',
        },
        {
          command: 'Ctrl + Shift + V',
          comment: '# Colar no terminal (Windows)',
        },
      ],
      'Gerenciamento de Terminais': [
        {
          command: 'Ctrl + Shift + `',
          comment: '# Criar novo terminal',
        },
        {
          command: 'Ctrl + Alt + ←/→',
          comment: '# Navegar entre terminais',
        },
        {
          command: 'Ctrl + Shift + ↑/↓',
          comment: '# Navegar entre terminais (alternativo)',
        },
        {
          command: 'Ctrl + Shift + 5',
          comment: '# Dividir terminal',
        },
        {
          command: 'Ctrl + Shift + W',
          comment: '# Fechar terminal atual',
        },
      ],
      'Configurações do Terminal': [
        {
          command: 'Ctrl + ,',
          comment: '# Abrir configurações',
        },
        {
          command: 'terminal.integrated.shell.windows',
          comment: '# Shell padrão Windows',
        },
        {
          command: 'terminal.integrated.shell.linux',
          comment: '# Shell padrão Linux',
        },
        {
          command: 'terminal.integrated.shell.osx',
          comment: '# Shell padrão macOS',
        },
      ],
    },
    useCase:
      'Use quando: Executando comandos, build, testes, operações de sistema',
  },

  // Card Git Integration
  gitIntegration: {
    title: '🔀 Git Integration',
    level: 'intermediario',
    id: 'git-integration',
    sections: {
      'Git Básico no VS Code': [
        {
          command: 'Ctrl + Shift + G',
          comment: '# Abrir Source Control',
        },
        {
          command: 'Ctrl + Enter',
          comment: '# Commit mudanças',
        },
        {
          command: 'Alt + ←/→',
          comment: '# Navegar entre mudanças',
        },
        {
          command: 'Ctrl + Shift + P > Git: Clone',
          comment: '# Clonar repositório',
        },
      ],
      'Stage e Unstage': [
        {
          command: 'Ctrl + Shift + A',
          comment: '# Stage all changes',
        },
        {
          command: 'Ctrl + Shift + U',
          comment: '# Unstage all changes',
        },
        {
          command: 'Ctrl + Alt + S',
          comment: '# Stage selected file',
        },
        {
          command: 'Ctrl + Alt + U',
          comment: '# Unstage selected file',
        },
      ],
      'Branch e Merge': [
        {
          command: 'Ctrl + Shift + P > Git: Checkout',
          comment: '# Mudar de branch',
        },
        {
          command: 'Ctrl + Shift + P > Git: Create Branch',
          comment: '# Criar nova branch',
        },
        {
          command: 'Ctrl + Shift + P > Git: Merge',
          comment: '# Merge branches',
        },
        {
          command: 'Ctrl + Shift + P > Git: Pull',
          comment: '# Pull do repositório remoto',
        },
        {
          command: 'Ctrl + Shift + P > Git: Push',
          comment: '# Push para repositório remoto',
        },
      ],
      'Git History': [
        {
          command: 'Ctrl + Shift + P > Git: View History',
          comment: '# Ver histórico de commits',
        },
        {
          command: 'Alt + ←/→',
          comment: '# Navegar no histórico',
        },
        {
          command: 'Ctrl + Shift + H',
          comment: '# Abrir GitLens history',
        },
      ],
    },
    useCase:
      'Use quando: Controle de versão, colaboração, gerenciamento de branches',
  },

  // Card Extensions Recomendadas
  extensions: {
    title: '🧩 Extensions Recomendadas',
    level: 'basico',
    id: 'extensions',
    sections: {
      'Essenciais para Desenvolvimento': [
        {
          command: 'ms-vscode.vscode-typescript-next',
          comment: '# TypeScript Importer',
        },
        {
          command: 'esbenp.prettier-vscode',
          comment: '# Prettier - Code Formatter',
        },
        {
          command: 'dbaeumer.vscode-eslint',
          comment: '# ESLint',
        },
        {
          command: 'ms-vscode.vscode-json',
          comment: '# JSON Language Support',
        },
        {
          command: 'redhat.vscode-yaml',
          comment: '# YAML Language Support',
        },
      ],
      Productividade: [
        {
          command: 'ms-vscode.vscode-gitlens',
          comment: '# GitLens - Git supercharged',
        },
        {
          command: 'ms-vscode.live-server',
          comment: '# Live Server',
        },
        {
          command: 'formulahendry.auto-rename-tag',
          comment: '# Auto Rename Tag',
        },
        {
          command: 'bradlc.vscode-tailwindcss',
          comment: '# Tailwind CSS IntelliSense',
        },
        {
          command: 'ms-vscode.vscode-color-picker',
          comment: '# Color Picker',
        },
      ],
      'Themes e Ícones': [
        {
          command: 'PKief.material-icon-theme',
          comment: '# Material Icon Theme',
        },
        {
          command: 'zhuangtongfa.Material-theme',
          comment: '# One Dark Pro Theme',
        },
        {
          command: 'dracula-theme.theme-dracula',
          comment: '# Dracula Theme',
        },
        {
          command: 'ms-vscode.theme-monokai',
          comment: '# Monokai Theme',
        },
      ],
      'Debugging e Testing': [
        {
          command: 'ms-vscode.vscode-chrome-debug',
          comment: '# Debugger for Chrome',
        },
        {
          command: 'ms-vscode.vscode-node-debug2',
          comment: '# Node.js Debugging',
        },
        {
          command: 'humao.rest-client',
          comment: '# REST Client',
        },
        {
          command: 'ms-vscode.test-adapter-converter',
          comment: '# Test Explorer UI',
        },
      ],
    },
    useCase:
      'Use quando: Personalizando ambiente, aumentando produtividade, ferramentas específicas',
  },

  // Card Workspace Management
  workspaceManagement: {
    title: '📁 Workspace Management',
    level: 'intermediario',
    id: 'workspace-management',
    sections: {
      'Multi-Workspace': [
        {
          command: 'File > Open Folder from Workspace...',
          comment: '# Adicionar pasta ao workspace',
        },
        {
          command: 'File > Save Workspace As...',
          comment: '# Salvar workspace atual',
        },
        {
          command: 'Ctrl + R',
          comment: '# Abrir workspace recente',
        },
        {
          command: 'Ctrl + K Ctrl + O',
          comment: '# Abrir pasta (Open Folder)',
        },
        {
          command: 'Ctrl + K Ctrl + S',
          comment: '# Salvar workspace como',
        },
      ],
      'Navegação entre Arquivos': [
        {
          command: 'Ctrl + P',
          comment: '# Quick Open - buscar arquivo',
        },
        {
          command: 'Ctrl + Tab',
          comment: '# Alternar entre arquivos abertos',
        },
        {
          command: 'Ctrl + Shift + Tab',
          comment: '# Alternar na direção inversa',
        },
        {
          command: 'Ctrl + 1/2/3...',
          comment: '# Ir para editor específico',
        },
        {
          command: 'Ctrl + Alt + ←/→',
          comment: '# Navegar entre grupos de editores',
        },
      ],
      'Configurações de Workspace': [
        {
          command: '.vscode/settings.json',
          comment: '# Configurações do workspace',
        },
        {
          command: '.vscode/launch.json',
          comment: '# Configurações de debug',
        },
        {
          command: '.vscode/tasks.json',
          comment: '# Configurações de tarefas',
        },
        {
          command: '.vscode/extensions.json',
          comment: '# Recomendações de extensões',
        },
      ],
    },
    useCase:
      'Use quando: Trabalhando com múltiplos projetos, organização, configurações específicas',
  },

  // Card Snippets e Templates
  snippets: {
    title: '📝 Snippets e Templates',
    level: 'intermediario',
    id: 'snippets',
    sections: {
      'Snippets Essenciais': [
        {
          command: 'for + Tab',
          comment: '# Loop for básico',
        },
        {
          command: 'if + Tab',
          comment: '# Condicional if',
        },
        {
          command: 'log + Tab',
          comment: '# Console.log (JavaScript)',
        },
        {
          command: 'cl + Tab',
          comment: '# Console.log (abreviação)',
        },
        {
          command: 'fn + Tab',
          comment: '# Function declaration',
        },
        {
          command: 'raf + Tab',
          comment: '# React Arrow Function',
        },
      ],
      'Criando Snippets Personalizados': [
        {
          command: 'File > Preferences > User Snippets',
          comment: '# Abrir editor de snippets',
        },
        {
          command: 'nome-do-snippet.code-snippets',
          comment: '# Arquivo de snippets',
        },
        {
          command: '"Snippet Name": {',
          comment: '# Estrutura básica',
        },
        {
          command: '  "prefix": "prefixo",',
          comment: '# Prefixo para ativar',
        },
        {
          command: '  "body": ["$1"],',
          comment: '# Corpo do snippet',
        },
        {
          command: '  "description": "Descrição"',
          comment: '# Descrição do snippet',
        },
        {
          command: '}',
          comment: '# Fechar estrutura',
        },
      ],
      'Snippets Avançados': [
        {
          command: '$TM_SELECTED_TEXT',
          comment: '# Texto selecionado',
        },
        {
          command: '$1, $2, $3...',
          comment: '# Tab stops',
        },
        {
          command: '${1:default}',
          comment: '# Tab stop com valor padrão',
        },
        {
          command: '$CURRENT_YEAR',
          comment: '# Variável de data atual',
        },
        {
          command: '$CURRENT_DATE',
          comment: '# Variável de data completa',
        },
      ],
    },
    useCase:
      'Use quando: Acelerando digitação, padronizando código, templates reutilizáveis',
  },

  // Card Remote Development
  remoteDevelopment: {
    title: '🌐 Remote Development',
    level: 'avancado',
    id: 'remote-development',
    sections: {
      'Remote SSH': [
        {
          command: 'Ctrl + Shift + P > Remote-SSH: Connect to Host...',
          comment: '# Conectar via SSH',
        },
        {
          command: 'Ctrl + Shift + P > Remote-SSH: Open Configuration File...',
          comment: '# Editar configuração SSH',
        },
        {
          command: 'Host nome-do-servidor',
          comment: '# Configurar host SSH',
        },
        {
          command: 'HostName IP-ou-DOMAIN',
          comment: '# Endereço do servidor',
        },
        {
          command: 'User nome-usuario',
          comment: '# Usuário SSH',
        },
        {
          command: 'IdentityFile ~/.ssh/chave_privada',
          comment: '# Chave SSH privada',
        },
      ],
      'Remote Containers': [
        {
          command:
            'Ctrl + Shift + P > Remote-Containers: Attach to Running Container...',
          comment: '# Anexar a container em execução',
        },
        {
          command: 'Ctrl + Shift + P > Remote-Containers: Reopen in Container',
          comment: '# Reabrir pasta em container',
        },
        {
          command: '.devcontainer/devcontainer.json',
          comment: '# Configuração do dev container',
        },
        {
          command: '"dockerFile": "Dockerfile"',
          comment: '# Dockerfile para build',
        },
        {
          command: '"context": ".."',
          comment: '# Contexto do Docker',
        },
      ],
      'Remote WSL': [
        {
          command: 'Ctrl + Shift + P > Remote-WSL: New WSL Window',
          comment: '# Abrir nova janela WSL',
        },
        {
          command: 'Ctrl + Shift + P > Remote-WSL: Reopen in WSL',
          comment: '# Reabrir pasta em WSL',
        },
        {
          command: 'wsl.exe -d Ubuntu',
          comment: '# Acessar distribuição específica',
        },
      ],
      'Remote Tunnels': [
        {
          command: 'Ctrl + Shift + P > Remote-Tunnels: Open in Browser',
          comment: '# Abrir porta no navegador',
        },
        {
          command: 'Ctrl + Shift + P > Remote-Tunnels: Forward Port',
          comment: '# Encaminhar porta específica',
        },
      ],
    },
    useCase:
      'Use quando: Desenvolvimento remoto, containers, WSL, acesso a servidores',
  },

  // Card Customização e Themes
  customizacao: {
    title: '🎨 Customização e Themes',
    level: 'intermediario',
    id: 'customizacao',
    sections: {
      'Configurações Essenciais': [
        {
          command: 'Ctrl + ,',
          comment: '# Abrir configurações',
        },
        {
          command: 'workbench.colorTheme',
          comment: '# Tema de cores',
        },
        {
          command: 'workbench.iconTheme',
          comment: '# Tema de ícones',
        },
        {
          command: 'editor.fontFamily',
          comment: '# Fonte do editor',
        },
        {
          command: 'editor.fontSize',
          comment: '# Tamanho da fonte',
        },
        {
          command: 'editor.lineHeight',
          comment: '# Altura da linha',
        },
        {
          command: 'editor.tabSize',
          comment: '# Tamanho do tab',
        },
        {
          command: 'editor.insertSpaces',
          comment: '# Usar espaços em vez de tabs',
        },
      ],
      'Configurações Avançadas': [
        {
          command: 'editor.wordWrap',
          comment: '# Quebra de linha automática',
        },
        {
          command: 'editor.minimap.enabled',
          comment: '# Habilitar/desabilitar minimapa',
        },
        {
          command: 'editor.renderWhitespace',
          comment: '# Mostrar espaços em branco',
        },
        {
          command: 'editor.rulers',
          comment: '# Réguas verticais',
        },
        {
          command: 'workbench.editor.enableTabs',
          comment: '# Habilitar abas',
        },
        {
          command: 'files.autoSave',
          comment: '# Auto-salvar arquivos',
        },
      ],
      'Keybindings Personalizados': [
        {
          command: 'Ctrl + K Ctrl + S',
          comment: '# Abrir atalhos de teclado',
        },
        {
          command: 'File > Preferences > Keyboard Shortcuts',
          comment: '# Menu de atalhos',
        },
        {
          command: 'keybindings.json',
          comment: '# Arquivo de atalhos personalizados',
        },
        {
          command: '"key": "ctrl+shift+a",',
          comment: '# Definir atalho',
        },
        {
          command: '"command": "workbench.action.files.saveAll"',
          comment: '# Comando a executar',
        },
        {
          command: '"when": "editorTextFocus"',
          comment: '# Condição de ativação',
        },
      ],
    },
    useCase:
      'Use quando: Personalizando ambiente, ajustando preferências, otimizando fluxo',
  },
};
