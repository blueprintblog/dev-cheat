export const filesystemCommands = {
  powershellBasico: {
    title: '🪟 PowerShell Básico',
    level: 'basico',
    useCase: 'Comandos essenciais do PowerShell para gerenciamento de arquivos',
    sections: {
      'Navegar e Listar': [
        {
          command: 'Get-Location',
          comment: '# Exibe o diretório atual',
        },
        {
          command: 'Get-ChildItem -Path . -Force',
          comment: '# Lista todos os arquivos e pastas, incluindo ocultos',
        },
        {
          command: 'Get-ChildItem -Path backend -Recurse',
          comment: '# Lista recursivamente o conteúdo do diretório backend',
        },
      ],
      'Mover Arquivos': [
        {
          command: 'Move-Item "src\\file.jsx" "src\\file.tsx"',
          comment: '# Move/renomeia arquivo de .jsx para .tsx',
        },
      ],
      'Remover Arquivos/Pastas': [
        {
          command: 'Remove-Item -Recurse -Force node_modules',
          comment: '# Remove diretório node_modules e todo seu conteúdo',
        },
        {
          command: 'Remove-Item file.txt',
          comment: '# Remove arquivo específico',
        },
      ],
      'Verificar Conteúdo': [
        {
          command:
            'Get-Content package.json | Select-String -A 5 -B 1 "scripts"',
          comment: '# Busca por "scripts" no package.json com contexto',
        },
        {
          command: 'type package.json',
          comment: '# Exibe conteúdo do arquivo package.json',
        },
      ],
    },
  },
  bashBasico: {
    title: '🐧 Bash/WSL Básico',
    level: 'basico',
    useCase: 'Comandos essenciais do Bash para gerenciamento de arquivos',
    sections: {
      'Navegar e Listar': [
        {
          command: 'pwd',
          comment: '# Exibe o diretório atual',
        },
        {
          command: 'ls -la',
          comment: '# Lista arquivos detalhadamente, incluindo ocultos',
        },
        {
          command: 'find . -name "*.tsx" -type f',
          comment: '# Busca todos os arquivos .tsx recursivamente',
        },
      ],
      'Mover Arquivos': [
        {
          command: 'mv src/file.jsx src/file.tsx',
          comment: '# Move/renomeia arquivo de .jsx para .tsx',
        },
      ],
      'Remover Arquivos/Pastas': [
        {
          command: 'rm -rf node_modules',
          comment: '# Remove diretório node_modules recursivamente',
        },
        {
          command: 'rm file.txt',
          comment: '# Remove arquivo específico',
        },
      ],
      'Verificar Conteúdo': [
        {
          command: 'cat package.json',
          comment: '# Exibe conteúdo do arquivo package.json',
        },
        {
          command: 'grep -A 5 -B 1 "scripts" package.json',
          comment:
            '# Busca por "scripts" com 5 linhas de contexto antes e depois',
        },
      ],
    },
  },
  powershellIntermediario: {
    title: '🪟 PowerShell Intermediário',
    level: 'intermediario',
    useCase: 'Comandos intermediários do PowerShell',
    sections: {
      'Gerenciamento Avançado': [
        {
          command:
            'Get-ChildItem -Path . -Recurse -Include "*.js","*.ts" | Select-Object Name, Length, LastWriteTime',
          comment: '# Lista arquivos JS/TS com detalhes',
        },
        {
          command:
            'Copy-Item -Path "src\\*" -Destination "backup\\" -Recurse -Force',
          comment: '# Copia recursivamente arquivos para backup',
        },
        {
          command: 'Get-Content -Path "log.txt" -Tail 10',
          comment: '# Exibe as últimas 10 linhas do arquivo',
        },
      ],
      Permissões: [
        {
          command: 'Get-Acl -Path "file.txt"',
          comment: '# Exibe permissões do arquivo',
        },
        {
          command: 'Set-Acl -Path "file.txt" -AclObject $newAcl',
          comment: '# Define permissões do arquivo',
        },
      ],
    },
  },
  bashIntermediario: {
    title: '🐧 Bash/WSL Intermediário',
    level: 'intermediario',
    useCase: 'Comandos intermediários do Bash',
    sections: {
      'Gerenciamento Avançado': [
        {
          command: 'find . -name "*.js" -o -name "*.ts" | xargs ls -lh',
          comment: '# Lista arquivos JS/TS com detalhes',
        },
        {
          command: 'cp -r src/* backup/',
          comment: '# Copia recursivamente arquivos para backup',
        },
        {
          command: 'tail -10 log.txt',
          comment: '# Exibe as últimas 10 linhas do arquivo',
        },
      ],
      Permissões: [
        {
          command: 'ls -la file.txt',
          comment: '# Exibe permissões detalhadas',
        },
        {
          command: 'chmod 755 script.sh',
          comment: '# Define permissões de execução',
        },
        {
          command: 'chown user:group file.txt',
          comment: '# Altera dono e grupo do arquivo',
        },
      ],
      'Busca Avançada': [
        {
          command: 'grep -r "function" src/ --include="*.js"',
          comment: '# Busca recursivamente por "function" em arquivos JS',
        },
        {
          command: 'find . -name "*.log" -exec grep "ERROR" {} \\;',
          comment: '# Busca por "ERROR" em arquivos de log',
        },
      ],
    },
  },
  troubleshooting: {
    title: '🔧 Troubleshooting',
    level: 'avancado',
    useCase: 'Comandos avançados para diagnóstico e solução de problemas',
    sections: {
      'Problemas Comuns': [
        {
          command: 'npm run dev',
          comment: '# Verifica se o servidor de desenvolvimento está rodando',
        },
        {
          command: 'npm cache clean --force',
          comment: '# Limpa cache do npm',
        },
        {
          command: 'rm -rf node_modules && npm install',
          comment: '# Remove node_modules e reinstala dependências',
        },
      ],
      'Frontend Não Carrega (404)': [
        {
          command: 'netstat -ano | findstr :5173',
          comment:
            '# Verifica qual processo está usando a porta 5173 (Windows)',
        },
        {
          command: 'lsof -i :5173',
          comment:
            '# Verifica qual processo está usando a porta 5173 (Linux/Mac)',
        },
      ],
      'Erros de TypeScript': [
        {
          command: 'npx tsc --noEmit',
          comment: '# Verifica erros',
        },
        {
          command: 'rm -rf node_modules/.cache',
          comment: '# Limpa cache do TypeScript',
        },
      ],
      'Problemas com Rust': [
        {
          command: 'cargo --version',
          comment: '# Verificar instalação',
        },
        {
          command: 'cargo clean',
          comment: '# Limpar build',
        },
        {
          command: 'rustup update',
          comment: '# Atualizar Rust',
        },
      ],
      'Problemas de PATH': [
        {
          command: '$env:PATH += ";$env:USERPROFILE\\.cargo\\bin"',
          comment: '# Adicionar ao PATH (Windows)',
        },
        {
          command: 'export PATH="$HOME/.cargo/bin:$PATH"',
          comment: '# Adicionar ao PATH (Linux/WSL)',
        },
      ],
    },
  },
  automacao: {
    title: '⚙️ Automação',
    level: 'avancado',
    useCase: 'Scripts e automação para gerenciamento de arquivos',
    sections: {
      'Scripts Batch': [
        {
          command:
            '@echo off\nfor %%f in (*.txt) do (\n    echo Processing %%f\n    type "%%f"\n)',
          comment: '# Script batch para processar arquivos .txt',
        },
        {
          command:
            'for /d %%d in (*) do (\n    echo Directory: %%d\n    cd "%%d"\n    dir\n    cd ..\n)',
          comment: '# Script batch para iterar sobre diretórios',
        },
      ],
      'Scripts Shell': [
        {
          command:
            '#!/bin/bash\nfor file in *.txt; do\n    echo "Processing $file"\n    cat "$file"\ndone',
          comment: '# Script shell para processar arquivos .txt',
        },
        {
          command:
            '#!/bin/bash\nfind . -type d | while read dir; do\n    echo "Directory: $dir"\n    ls -la "$dir"\ndone',
          comment: '# Script shell para iterar sobre diretórios',
        },
      ],
      'Automação PowerShell': [
        {
          command:
            'Get-ChildItem -Path . -Filter "*.txt" | ForEach-Object {\n    Write-Host "Processing $($_.Name)"\n    Get-Content $_.FullName\n}',
          comment: '# Script PowerShell para processar arquivos .txt',
        },
        {
          command:
            'Get-ChildItem -Directory | ForEach-Object {\n    Write-Host "Directory: $($_.Name)"\n    Get-ChildItem $_.FullName\n}',
          comment: '# Script PowerShell para iterar sobre diretórios',
        },
      ],
    },
  },
  monitoramento: {
    title: '📊 Monitoramento',
    level: 'avancado',
    useCase: 'Comandos para monitoramento de sistema e arquivos',
    sections: {
      'Monitoramento de Sistema': [
        {
          command:
            'Get-Process | Sort-Object CPU -Descending | Select-Object -First 10',
          comment: '# PowerShell: Top 10 processos por CPU',
        },
        {
          command:
            "Get-Counter '\\Processor(_Total)\\% Processor Time' -SampleInterval 1 -MaxSamples 10",
          comment: '# PowerShell: Monitora uso de CPU',
        },
        {
          command: 'top -b -n 1 | head -20',
          comment: '# Bash: Top 20 processos',
        },
        {
          command: 'iostat -x 1 5',
          comment: '# Bash: Monitoramento de I/O de disco',
        },
      ],
      'Monitoramento de Arquivos': [
        {
          command:
            'Get-ChildItem -Path . -Recurse | Measure-Object -Property Length -Sum',
          comment: '# PowerShell: Tamanho total do diretório',
        },
        {
          command: "watch -n 5 'ls -la'",
          comment: '# Bash: Monitora mudanças no diretório',
        },
        {
          command: 'inotifywait -m -r -e modify,create,delete .',
          comment: '# Bash: Monitora eventos de arquivos',
        },
      ],
    },
  },
};
