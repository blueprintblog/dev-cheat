// Objeto com todos os comandos da cheatsheet Bash
export const bashCommands = {
  // Comandos Iniciante - Navegação & Sistema
  navegacaoSistema: {
    title: '🟢 Navegação & Sistema',
    level: 'basico',
    id: 'basico',
    sections: {
      'Onde estou?': [
        { command: 'pwd', comment: '# Print Working Directory' },
        { command: 'whoami', comment: '# Mostra usuário atual' },
        { command: 'hostname', comment: '# Nome do servidor' },
        { command: 'uname -a', comment: '# Info do sistema' },
      ],
      'Listando arquivos': [
        { command: 'ls', comment: '# Lista arquivos' },
        { command: 'ls -l', comment: '# Lista detalhada' },
        { command: 'ls -la', comment: '# Inclui ocultos' },
        { command: 'ls -lh', comment: '# Tamanhos legíveis' },
        { command: 'ls -ltr', comment: '# Ordena por data' },
        { command: 'ls -R', comment: '# Lista recursivo' },
      ],
      Navegando: [
        { command: 'cd pasta/', comment: '# Entra na pasta' },
        { command: 'cd ..', comment: '# Volta 1 nível' },
        { command: 'cd ~', comment: '# Vai para home' },
        { command: 'cd -', comment: '# Volta pasta anterior' },
        { command: 'cd /', comment: '# Vai para raiz' },
      ],
    },
    useCase: 'Use quando: Começando, setup inicial, navegação básica',
  },

  // Comandos Iniciante - Arquivos & Diretórios
  arquivosDiretorios: {
    title: '🟢 Arquivos & Diretórios',
    level: 'basico',
    sections: {
      Criar: [
        { command: 'touch arquivo.txt', comment: '# Cria arquivo vazio' },
        { command: 'mkdir pasta', comment: '# Cria diretório' },
        { command: 'mkdir -p a/b/c', comment: '# Cria hierarquia' },
        { command: 'echo "texto" > file', comment: '# Cria com conteúdo' },
      ],
      'Copiar & Mover': [
        { command: 'cp origem destino', comment: '# Copia arquivo' },
        { command: 'cp -r pasta/ dest/', comment: '# Copia pasta' },
        { command: 'cp -v file dest', comment: '# Copia verbose' },
        { command: 'mv antigo novo', comment: '# Move/Renomeia' },
        { command: 'mv *.txt pasta/', comment: '# Move múltiplos' },
      ],
      Deletar: [
        { command: 'rm arquivo', comment: '# Deleta arquivo' },
        { command: 'rm -i arquivo', comment: '# Pede confirmação' },
        { command: 'rm -f arquivo', comment: '# Força deletar' },
        { command: 'rm -rf pasta/', comment: '# Deleta pasta ⚠️' },
        { command: 'rmdir pasta', comment: '# Remove pasta vazia' },
      ],
      Links: [
        { command: 'ln -s origem link', comment: '# Link simbólico' },
        { command: 'ln origem link', comment: '# Hard link' },
        { command: 'readlink link', comment: '# Mostra destino do link' },
        { command: 'find . -type l', comment: '# Lista links simbólicos' },
        { command: 'ls -l link', comment: '# Verifica tipo de link' },
      ],
    },
    useCase: 'Use quando: Gerenciamento diário de arquivos e pastas',
  },

  // Comandos Iniciante - Visualização & Busca
  visualizacaoBusca: {
    title: '🟢 Visualização & Busca',
    level: 'basico',
    sections: {
      'Ver conteúdo': [
        { command: 'cat arquivo.txt', comment: '# Mostra tudo' },
        { command: 'cat -n file', comment: '# Com números' },
        { command: 'more arquivo', comment: '# Página por página' },
        { command: 'less arquivo', comment: '# Melhor navegação' },
        { command: 'head file', comment: '# Primeiras 10 linhas' },
        { command: 'head -n 20 file', comment: '# Primeiras 20' },
        { command: 'tail file', comment: '# Últimas 10 linhas' },
        { command: 'tail -f log.txt', comment: '# Monitora tempo real' },
        { command: 'tail -n 50 file', comment: '# Últimas 50' },
      ],
      Buscar: [
        { command: 'grep "texto" file', comment: '# Busca string' },
        { command: 'grep -i "TEXT" file', comment: '# Case insensitive' },
        { command: 'grep -r "texto" ./', comment: '# Busca recursiva' },
        { command: 'grep -v "texto" file', comment: '# Inverte (não contém)' },
        { command: 'grep -n "texto" file', comment: '# Mostra números linha' },
        { command: 'find . -name "*.js"', comment: '# Busca arquivos' },
        { command: 'find . -type f', comment: '# Só arquivos' },
        { command: 'find . -type d', comment: '# Só diretórios' },
        {
          command: 'find . -name "*.txt" -size +1M',
          comment: '# Arquivos > 1MB',
        },
        {
          command: 'find . -mtime -7',
          comment: '# Modificados nos últimos 7 dias',
        },
        { command: 'find . -empty', comment: '# Arquivos vazios' },
        {
          command: 'find . -exec rm {} \\;',
          comment: '# Remove arquivos encontrados',
        },
      ],
    },
    tip: '💡 Ctrl+R busca histórico | !! repete último comando',
  },

  // Comandos Iniciante - Ajuda & Histórico
  ajudaHistorico: {
    title: '🟢 Ajuda & Histórico',
    level: 'basico',
    sections: {
      Documentação: [
        { command: 'man ls', comment: '# Manual do comando' },
        { command: 'ls --help', comment: '# Ajuda rápida' },
        { command: 'which python', comment: '# Onde está instalado' },
        { command: 'whereis python', comment: '# Todos caminhos' },
        { command: 'type python', comment: '# Tipo do comando' },
        { command: 'apropos search', comment: '# Busca comandos' },
      ],
      Histórico: [
        { command: 'history', comment: '# Lista histórico' },
        { command: 'history 20', comment: '# Últimos 20' },
        { command: 'history | grep git', comment: '# Busca no histórico' },
        { command: '!123', comment: '# Executa comando #123' },
        { command: '!!', comment: '# Repete último' },
        { command: '!git', comment: '# Último que começa com git' },
        { command: 'history -c', comment: '# Limpa histórico' },
        { command: 'history -d 123', comment: '# Remove linha específica' },
        { command: 'fc -l', comment: '# Lista últimos comandos' },
        { command: 'Ctrl+R', comment: '# Busca interativa no histórico' },
      ],
      Informações: [
        { command: 'date', comment: '# Data e hora' },
        { command: 'cal', comment: '# Calendário' },
        { command: 'uptime', comment: '# Tempo ligado' },
        { command: 'w', comment: '# Quem está logado' },
        { command: 'who', comment: '# Usuários logados' },
        { command: 'last', comment: '# Últimos logins' },
        { command: 'id', comment: '# ID do usuário e grupos' },
        { command: 'groups', comment: '# Grupos do usuário' },
      ],
    },
    useCase: 'Use quando: Precisa de ajuda, documentação ou referência',
  },

  // Comandos Intermediário - Processamento de Texto
  processamentoTexto: {
    title: '🟡 Processamento de Texto',
    level: 'intermediario',
    id: 'intermediario',
    sections: {
      'Pipes & Filtros': [
        { command: 'cat file | grep "error"', comment: '# Filtra linhas' },
        { command: 'cat file | sort', comment: '# Ordena' },
        { command: 'cat file | sort | uniq', comment: '# Remove duplicatas' },
        { command: 'cat file | wc -l', comment: '# Conta linhas' },
        { command: 'cat file | wc -w', comment: '# Conta palavras' },
        { command: 'cat file | wc -c', comment: '# Conta caracteres' },
      ],
      'Sed (Stream Editor)': [
        {
          command: "sed 's/old/new/' file",
          comment: '# Substitui 1ª ocorrência',
        },
        { command: "sed 's/old/new/g' file", comment: '# Substitui todas' },
        { command: "sed -i 's/old/new/g' file", comment: '# Edita arquivo' },
        { command: "sed '5d' file", comment: '# Deleta linha 5' },
        { command: "sed -n '10,20p' file", comment: '# Imprime linhas 10-20' },
      ],
      'Awk (Pattern Processing)': [
        { command: "awk '{print $1}' file", comment: '# Imprime coluna 1' },
        { command: "awk '{print $1,$3}' file", comment: '# Colunas 1 e 3' },
        {
          command: "awk '/error/ {print}' file",
          comment: '# Filtra por padrão',
        },
        {
          command: "awk '{sum+=$1} END {print sum}'",
          comment: '# Soma coluna',
        },
      ],
      'Cut & Paste': [
        {
          command: "cut -d',' -f1 file.csv",
          comment: '# Corta por delimitador',
        },
        { command: 'cut -c1-10 file', comment: '# Primeiros 10 chars' },
        { command: 'paste file1 file2', comment: '# Junta linhas de arquivos' },
        { command: 'join file1 file2', comment: '# Junta por campo comum' },
        {
          command: "tr 'a-z' 'A-Z' < file",
          comment: '# Converte para maiúsculas',
        },
        { command: "tr -d '\\n' < file", comment: '# Remove quebras de linha' },
      ],
    },
    useCase: 'Use quando: Processar logs, ETL, limpeza de dados',
  },

  // Comandos Intermediário - Redirecionamento & Pipes
  redirecionamentoPipes: {
    title: '🟡 Redirecionamento & Pipes',
    level: 'intermediario',
    sections: {
      'Redirecionamento básico': [
        { command: 'comando > arquivo', comment: '# Sobrescreve' },
        { command: 'comando >> arquivo', comment: '# Adiciona no final' },
        { command: 'comando < arquivo', comment: '# Input de arquivo' },
        { command: 'comando 2> erro.log', comment: '# Só erros (stderr)' },
        { command: 'comando 1> saida.log', comment: '# Só output (stdout)' },
        { command: 'comando &> tudo.log', comment: '# Stdout + stderr' },
        { command: 'comando 2>&1', comment: '# stderr → stdout' },
      ],
      'Pipes avançados': [
        { command: 'cmd1 | cmd2', comment: '# Output cmd1 → input cmd2' },
        { command: 'cmd | tee file', comment: '# Mostra E salva' },
        { command: 'cmd | tee -a file', comment: '# Append' },
      ],
      'Here Documents': [
        {
          command: 'cat << EOF > file\ntexto\nEOF',
          comment: '# Múltiplas linhas',
        },
      ],
      'Combinações úteis': [
        { command: 'ls -la | grep ".js"', comment: '# Filtra listagem' },
        { command: 'ps aux | grep node', comment: '# Busca processos' },
        { command: 'history | tail -20', comment: '# Últimos 20 comandos' },
        { command: 'cat log | sort | uniq -c', comment: '# Conta únicas' },
      ],
      'Descarte output': [
        { command: 'comando > /dev/null', comment: '# Descarta output' },
        { command: 'comando 2> /dev/null', comment: '# Descarta erros' },
        { command: 'comando &> /dev/null', comment: '# Descarta tudo' },
        {
          command: 'comando 2>&1 | tee file',
          comment: '# Salva stdout+stderr',
        },
        {
          command: 'comando > >(stdout) 2> >(stderr)',
          comment: '# Redireciona separado',
        },
        {
          command: 'cmd1 && cmd2 || cmd3',
          comment: '# Encadeamento condicional',
        },
      ],
    },
    useCase: 'Use quando: Scripts, automação, processamento de dados',
  },

  // Comandos Intermediário - Processos & Monitoramento
  processosMonitoramento: {
    title: '🟡 Processos & Monitoramento',
    level: 'intermediario',
    sections: {
      'Listar processos': [
        { command: 'ps', comment: '# Processos do terminal' },
        { command: 'ps aux', comment: '# Todos processos' },
        { command: 'ps aux | grep node', comment: '# Busca específico' },
        { command: 'pgrep node', comment: '# PIDs do processo' },
        { command: 'pidof node', comment: '# PID do programa' },
      ],
      'Monitoramento em tempo real': [
        { command: 'top', comment: '# Monitor interativo' },
        { command: 'htop', comment: '# Top melhorado' },
        { command: 'top -u user', comment: '# Processos do usuário' },
      ],
      'Gerenciar processos': [
        { command: 'kill PID', comment: '# Mata processo (TERM)' },
        { command: 'kill -9 PID', comment: '# Mata forçado (KILL)' },
        { command: 'killall node', comment: '# Mata todos node' },
        { command: 'pkill -f "script.js"', comment: '# Mata por nome' },
      ],
      'Background & Foreground': [
        { command: 'comando &', comment: '# Executa em background' },
        { command: 'Ctrl+Z', comment: '# Pausa processo' },
        { command: 'bg', comment: '# Continua em background' },
        { command: 'fg', comment: '# Traz para foreground' },
        { command: 'jobs', comment: '# Lista jobs' },
        { command: 'nohup cmd &', comment: '# Roda desconectado' },
        { command: 'disown', comment: '# Desvincula do terminal' },
        { command: 'kill -l', comment: '# Lista sinais disponíveis' },
        { command: 'kill -USR1 PID', comment: '# Envia sinal específico' },
        { command: 'renice 10 PID', comment: '# Altera prioridade' },
        { command: 'ionice -c 3 cmd', comment: '# Prioridade de I/O' },
      ],
    },
    useCase: 'Use quando: Debug produção, otimização, gerenciar serviços',
  },

  // Comandos Intermediário - Sistema & Recursos
  sistemaRecursos: {
    title: '🟡 Sistema & Recursos',
    level: 'intermediario',
    sections: {
      Disco: [
        { command: 'df -h', comment: '# Espaço em disco' },
        { command: 'df -i', comment: '# Inodes' },
        { command: 'du -sh pasta/', comment: '# Tamanho da pasta' },
        { command: 'du -sh *', comment: '# Tamanho de tudo' },
        { command: 'du -h --max-depth=1', comment: '# Só 1 nível' },
        { command: 'ncdu', comment: '# Análise interativa' },
      ],
      Memória: [
        { command: 'free -h', comment: '# Uso de RAM' },
        { command: 'free -m', comment: '# Em megabytes' },
        { command: 'vmstat', comment: '# Estatísticas VM' },
        { command: 'vmstat 5', comment: '# A cada 5 segundos' },
      ],
      'CPU & Load': [
        { command: 'uptime', comment: '# Load average' },
        { command: 'lscpu', comment: '# Info da CPU' },
        { command: 'cat /proc/cpuinfo', comment: '# Detalhes CPU' },
      ],
      Sistema: [
        { command: 'uname -a', comment: '# Info do sistema' },
        { command: 'lsb_release -a', comment: '# Versão distro' },
        { command: 'hostname', comment: '# Nome do host' },
        { command: 'dmesg | tail', comment: '# Logs do kernel' },
        { command: 'lshw', comment: '# Hardware do sistema' },
        { command: 'lsblk', comment: '# Dispositivos de bloco' },
        { command: 'lsusb', comment: '# Dispositivos USB' },
        { command: 'lspci', comment: '# Dispositivos PCI' },
      ],
    },
    useCase: 'Use quando: Monitoramento, troubleshooting, capacity planning',
  },

  // Comandos Intermediário - Rede & Conectividade
  redeConectividade: {
    title: '🟡 Rede & Conectividade',
    level: 'intermediario',
    sections: {
      'Testes de conexão': [
        { command: 'ping google.com', comment: '# Testa conectividade' },
        { command: 'ping -c 4 host', comment: '# 4 pacotes' },
        { command: 'traceroute google.com', comment: '# Traça rota' },
        { command: 'mtr google.com', comment: '# Ping + traceroute' },
      ],
      'HTTP & Downloads': [
        { command: 'curl https://api.com', comment: '# HTTP GET' },
        { command: 'curl -I https://site.com', comment: '# Só headers' },
        { command: 'curl -X POST -d "data"', comment: '# POST request' },
        { command: 'curl -o file url', comment: '# Download' },
        { command: 'wget https://file.zip', comment: '# Download arquivo' },
        { command: 'wget -c url', comment: '# Continua download' },
      ],
      'SSH & SCP': [
        { command: 'ssh user@servidor', comment: '# Conecta remoto' },
        { command: 'ssh -p 2222 user@host', comment: '# Porta diferente' },
        { command: 'ssh -i key.pem user@host', comment: '# Usa chave' },
        { command: 'scp file user@host:/path', comment: '# Copia via SSH' },
        { command: 'scp -r pasta/ user@host:/', comment: '# Copia pasta' },
        { command: 'rsync -avz src/ dest/', comment: '# Sync eficiente' },
      ],
      'Portas & Conexões': [
        { command: 'netstat -tuln', comment: '# Portas escutando' },
        {
          command: 'netstat -an | grep ESTABLISHED',
          comment: '# Conexões ativas',
        },
        { command: 'ss -tuln', comment: '# Netstat moderno' },
        { command: 'lsof -i :3000', comment: '# Quem usa porta 3000' },
        { command: 'lsof -i -P', comment: '# Todas conexões' },
        { command: 'nc -zv host 80', comment: '# Testa porta aberta' },
      ],
      'DNS & IP': [
        { command: 'nslookup google.com', comment: '# DNS lookup' },
        { command: 'dig google.com', comment: '# DNS detalhado' },
        { command: 'host google.com', comment: '# DNS simples' },
        { command: 'ifconfig', comment: '# Config rede (legado)' },
        { command: 'ip addr', comment: '# IP addresses' },
        { command: 'ip route', comment: '# Tabela de rotas' },
        { command: 'ip neigh', comment: '# Tabela ARP' },
        { command: 'ss -ltp', comment: '# Portas com processos' },
        { command: 'tcpdump -i eth0', comment: '# Captura pacotes' },
        { command: 'dig +trace google.com', comment: '# Traçado DNS' },
      ],
    },
    useCase: 'Use quando: Deploy, troubleshooting, integrações, APIs',
  },

  // Comandos Avançado - Scripts & Variáveis
  scriptsVariaveis: {
    title: '🔴 Scripts & Variáveis',
    level: 'avancado',
    id: 'avancado',
    sections: {
      Variáveis: [
        { command: 'nome="João"', comment: '# Define variável' },
        { command: 'echo $nome', comment: '# Usa variável' },
        { command: 'echo "${nome}"', comment: '# Forma segura' },
        { command: 'readonly VAR="fix"', comment: '# Constante' },
        { command: 'unset nome', comment: '# Remove variável' },
      ],
      'Variáveis especiais': [
        { command: '$0', comment: '# Nome do script' },
        { command: '$1, $2, $3...', comment: '# Argumentos' },
        { command: '$#', comment: '# Número de args' },
        { command: '$@', comment: '# Todos args' },
        { command: '$?', comment: '# Exit code anterior' },
        { command: '$$', comment: '# PID do script' },
      ],
      Arrays: [
        { command: 'arr=(a b c)', comment: '# Define array' },
        { command: 'echo ${arr[0]}', comment: '# Acessa elemento' },
        { command: 'echo ${arr[@]}', comment: '# Todos elementos' },
        { command: 'echo ${#arr[@]}', comment: '# Tamanho' },
        { command: 'arr+=(novo)', comment: '# Adiciona elemento' },
        { command: 'unset arr[0]', comment: '# Remove elemento' },
        { command: 'declare -p arr', comment: '# Mostra definição' },
      ],
      'Command substitution': [
        { command: 'hoje=$(date)', comment: '# Resultado em var' },
        { command: 'files=$(ls *.txt)', comment: '# Lista em var' },
      ],
    },
    useCase: 'Use quando: Automação, scripts complexos, CI/CD',
  },

  // Comandos Avançado - Condições & Loops
  condicoesLoops: {
    title: '🔴 Condições & Loops',
    level: 'avancado',
    sections: {
      'If/Else': [
        { command: 'if [ -f "file" ]; then\n  echo "Existe"\nfi', comment: '' },
        {
          command:
            'if [ $x -eq 10 ]; then\n  echo "É 10"\nelse\n  echo "Não é"\nfi',
          comment: '',
        },
      ],
      'Operadores de teste': [
        { command: '-f file', comment: '# Arquivo existe' },
        { command: '-d dir', comment: '# Diretório existe' },
        { command: '-z "$str"', comment: '# String vazia' },
        { command: '-n "$str"', comment: '# String não vazia' },
        { command: '$a -eq $b', comment: '# Igual (números)' },
        { command: '$a -ne $b', comment: '# Diferente' },
        { command: '$a -lt $b', comment: '# Menor que' },
        { command: '$a -gt $b', comment: '# Maior que' },
        { command: '"$a" = "$b"', comment: '# Igual (strings)' },
      ],
      'For Loop': [
        { command: 'for i in {1..5}; do\n  echo $i\ndone', comment: '' },
        { command: 'for file in *.txt; do\n  echo $file\ndone', comment: '' },
        { command: 'for ((i=0; i<10; i++)); do\n  echo $i\ndone', comment: '' },
      ],
      'While Loop': [
        {
          command: 'while [ $x -lt 10 ]; do\n  echo $x\n  ((x++))\ndone',
          comment: '',
        },
        {
          command: 'while read line; do\n  echo $line\ndone < file',
          comment: '',
        },
        {
          command: 'while true; do\n  echo "Loop infinito"\n  sleep 1\ndone',
          comment: '',
        },
        {
          command: 'until [ $x -eq 10 ]; do\n  echo $x\n  ((x++))\ndone',
          comment: '',
        },
      ],
      Case: [
        {
          command:
            'case $1 in\n  start) echo "Start"\n  stop) echo "Stop"\n  *) echo "?"\nesac',
          comment: '',
        },
      ],
    },
    useCase: 'Use quando: Scripts de deploy, automação condicional',
  },

  // Comandos Avançado - Funções & Debugging
  funcoesDebugging: {
    title: '🔴 Funções & Debugging',
    level: 'avancado',
    sections: {
      Funções: [
        { command: 'funcao() {\n  echo "Olá $1"\n  return 0\n}', comment: '' },
        { command: 'funcao "Mundo"', comment: '# Chama função' },
        { command: 'local var="local"', comment: '# Variável local' },
      ],
      Debugging: [
        { command: 'bash -x script.sh', comment: '# Debug mode' },
        { command: 'set -x', comment: '# Ativa debug' },
        { command: 'set +x', comment: '# Desativa debug' },
        { command: 'set -e', comment: '# Exit on error' },
        { command: 'set -u', comment: '# Error on undefined' },
        { command: 'set -o pipefail', comment: '# Pipe error handling' },
        { command: 'set -o nounset', comment: '# Error on undefined vars' },
        { command: 'set -o errexit', comment: '# Exit on error' },
        { command: 'shopt -s globstar', comment: '# Ativa ** globbing' },
      ],
      'Error handling': [
        { command: 'comando || echo "Erro"', comment: '# Se falhar' },
        { command: 'comando && echo "OK"', comment: '# Se sucesso' },
        { command: 'trap "echo Erro" ERR', comment: '# Captura erros' },
        { command: 'trap "cleanup" EXIT', comment: '# Executa ao sair' },
      ],
      'Best practices': [
        { command: '#!/bin/bash', comment: '# Shebang' },
        { command: 'set -euo pipefail', comment: '# Strict mode' },
        { command: '"$var"', comment: '# Sempre quote vars' },
      ],
    },
    useCase: 'Use quando: Scripts de produção, automação crítica',
  },

  // Comandos Avançado - Power Combos
  powerCombos: {
    title: '🔴 Power Combos',
    level: 'avancado',
    sections: {
      'Logs em tempo real': [
        {
          command: 'tail -f app.log | grep ERROR',
          comment: '# Filtra ao vivo',
        },
        {
          command: "tail -f log | awk '{print $1,$5}'",
          comment: '# Extrai colunas',
        },
      ],
      'Top IPs de acesso': [
        {
          command:
            "cat access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head -10",
          comment: '',
        },
      ],
      'Busca e substitui em lote': [
        {
          command: 'find . -name "*.js" -exec sed -i \'s/var/const/g\' {} \\;',
          comment: '',
        },
        {
          command: 'grep -rl "old" . | xargs sed -i \'s/old/new/g\'',
          comment: '',
        },
      ],
      Paralelização: [
        {
          command: 'cat urls.txt | xargs -P 10 -I {} curl -O {}',
          comment: '# 10 paralelos',
        },
        {
          command: 'find . -name "*.jpg" | parallel convert {} {.}.png',
          comment: '',
        },
      ],
      'Compara arquivos': [
        { command: 'diff file1 file2', comment: '# Diferenças' },
        { command: 'diff -u file1 file2', comment: '# Unified format' },
        {
          command: 'diff <(sort file1) <(sort file2)',
          comment: '# Process substitution',
        },
        { command: 'comm file1 file2', comment: '# Comum/diferente' },
        { command: "sd 'old' 'new' file", comment: '# Substituição rápida' },
        {
          command: 'rg "pattern" --type-add \'web:*.{html,js,css}\' -t web',
          comment: '# Ripgrep com tipos',
        },
        { command: 'fd -e txt -x cat', comment: '# Find moderno' },
      ],
      'Processamento JSON': [
        { command: "cat api.json | jq '.data'", comment: '# Extrai campo' },
        { command: "curl api.com | jq -r '.[]'", comment: '# Raw output' },
      ],
    },
    useCase: 'Use quando: Data analysis, bulk operations, otimização',
  },

  // Comandos Avançado - Permissões & Segurança
  permissoesSeguranca: {
    title: '🔴 Permissões & Segurança',
    level: 'avancado',
    sections: {
      'Permissões (chmod)': [
        { command: 'chmod 755 file', comment: '# rwxr-xr-x' },
        { command: 'chmod 644 file', comment: '# rw-r--r--' },
        { command: 'chmod +x script.sh', comment: '# Torna executável' },
        { command: 'chmod -R 755 dir/', comment: '# Recursivo' },
        { command: 'chmod u+x file', comment: '# User exec' },
        { command: 'chmod g-w file', comment: '# Remove write grupo' },
      ],
      'Ownership (chown)': [
        { command: 'chown user file', comment: '# Muda dono' },
        { command: 'chown user:group file', comment: '# Dono e grupo' },
        { command: 'chown -R user dir/', comment: '# Recursivo' },
        { command: 'chgrp group file', comment: '# Só grupo' },
      ],
      'SSH Keys': [
        { command: 'ssh-keygen -t rsa -b 4096', comment: '# Gera chave RSA' },
        { command: 'ssh-keygen -t ed25519', comment: '# Ed25519 (melhor)' },
        { command: 'ssh-copy-id user@host', comment: '# Copia chave pública' },
        { command: 'ssh-add ~/.ssh/id_rsa', comment: '# Adiciona ao agent' },
        { command: 'chmod 600 ~/.ssh/id_rsa', comment: '# Permissão chave' },
        {
          command: 'chmod 644 ~/.ssh/id_rsa.pub',
          comment: '# Permissão pública',
        },
      ],
      Sudo: [
        { command: 'sudo comando', comment: '# Executa como root' },
        { command: 'sudo -u user cmd', comment: '# Como outro user' },
        { command: 'sudo -i', comment: '# Login como root' },
        { command: 'sudo !!', comment: '# Repete com sudo' },
      ],
      'Variáveis de ambiente': [
        { command: 'export VAR="value"', comment: '# Define e exporta' },
        { command: 'echo $PATH', comment: '# Mostra PATH' },
        { command: 'export PATH=$PATH:/new', comment: '# Adiciona ao PATH' },
        { command: 'env', comment: '# Lista todas vars' },
        { command: 'printenv VAR', comment: '# Mostra var específica' },
        { command: 'unset VAR', comment: '# Remove variável' },
        { command: 'declare -x VAR="value"', comment: '# Exporta variável' },
        { command: 'source ~/.bashrc', comment: '# Recarrega configuração' },
      ],
    },
    useCase: 'Use quando: DevOps, deploy, configuração de servidores',
  },

  // Comandos Avançado - Compressão & Arquivos
  compressaoArquivos: {
    title: '🔴 Compressão & Arquivos',
    level: 'avancado',
    sections: {
      Tar: [
        { command: 'tar -czf file.tar.gz dir/', comment: '# Compacta (gzip)' },
        { command: 'tar -xzf file.tar.gz', comment: '# Extrai (gzip)' },
        {
          command: 'tar -cjf file.tar.bz2 dir/',
          comment: '# Compacta (bzip2)',
        },
        { command: 'tar -xjf file.tar.bz2', comment: '# Extrai (bzip2)' },
        { command: 'tar -tzf file.tar.gz', comment: '# Lista conteúdo' },
        {
          command: 'tar -xzf file.tar.gz -C /dest',
          comment: '# Extrai em dir',
        },
      ],
      'Zip/Unzip': [
        { command: 'zip file.zip files', comment: '# Compacta' },
        { command: 'zip -r dir.zip dir/', comment: '# Compacta pasta' },
        { command: 'unzip file.zip', comment: '# Extrai' },
        { command: 'unzip -l file.zip', comment: '# Lista' },
      ],
      Gzip: [
        { command: 'gzip file', comment: '# Compacta (remove orig)' },
        { command: 'gzip -k file', comment: '# Mantém original' },
        { command: 'gunzip file.gz', comment: '# Descompacta' },
        { command: 'zcat file.gz', comment: '# Mostra sem extrair' },
        {
          command: 'zip -r -9 archive.zip folder/',
          comment: '# Máxima compressão',
        },
        { command: 'unzip -q file.zip', comment: '# Extrai silencioso' },
        {
          command: 'tar -xjf file.tar.bz2 -C /dest',
          comment: '# Extrai bzip2',
        },
        { command: '7z a archive.7z folder/', comment: '# 7-Zip' },
      ],
    },
    useCase: 'Use quando: Backups, transferências, deploy de arquivos',
  },
};

// Atalhos e dicas
const shortcuts = [
  { key: 'Ctrl+A', description: '→ Início da linha' },
  { key: 'Ctrl+E', description: '→ Fim da linha' },
  { key: 'Ctrl+U', description: '→ Apaga linha inteira' },
  { key: 'Ctrl+K', description: '→ Apaga até o fim' },
  { key: 'Ctrl+W', description: '→ Apaga palavra anterior' },
  { key: 'Ctrl+R', description: '→ Busca histórico (reverso)' },
  { key: 'Ctrl+L', description: '→ Limpa tela (clear)' },
  { key: 'Ctrl+C', description: '→ Cancela comando' },
  { key: 'Ctrl+Z', description: '→ Pausa processo' },
  { key: 'Ctrl+D', description: '→ Exit (logout)' },
  { key: 'Tab', description: '→ Autocomplete' },
  { key: 'Tab Tab', description: '→ Mostra opções' },
];

// Aliases úteis
const usefulAliases = [
  { command: "alias ll='ls -lah'", comment: '# Lista detalhada' },
  { command: "alias gs='git status'", comment: '# Git status rápido' },
  { command: "alias gp='git push'", comment: '# Git push' },
  { command: "alias ..='cd ..'", comment: '# Volta pasta' },
  { command: "alias ...='cd ../..'", comment: '# Volta 2 níveis' },
  { command: "alias h='history'", comment: '# Histórico' },
  { command: "alias c='clear'", comment: '# Limpa tela' },
  {
    command: "alias update='sudo apt update && sudo apt upgrade -y'",
    comment: '',
  },
  { command: "alias ports='netstat -tulanp'", comment: '# Portas abertas' },
];

// Comandos Docker (bônus)
const dockerCommands = [
  { command: 'docker ps', comment: '# Containers rodando' },
  { command: 'docker ps -a', comment: '# Todos containers' },
  { command: 'docker logs -f container', comment: '# Logs tempo real' },
  {
    command: 'docker exec -it container bash',
    comment: '# Entra no container',
  },
  { command: 'docker stop $(docker ps -aq)', comment: '# Para todos' },
  { command: 'docker system prune -a', comment: '# Limpa tudo' },
];

// Estatísticas
const stats = [
  { number: '90%', description: 'Servidores rodam Linux' },
  { number: '80%', description: 'Vagas DevOps exigem Bash' },
  { number: '70%', description: 'Deploy otimizado c/ scripts' },
  { number: '30%+', description: 'Salário médio DevOps vs Júnior' },
];
