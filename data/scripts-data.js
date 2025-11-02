// Objeto com todos os scripts da cheatsheet
export const scriptsCommands = {
  // Card Scripts Básicos
  scriptsBasicos: {
    title: '📝 Scripts Básicos',
    level: 'basico',
    id: 'scripts-basicos',
    sections: {
      'Variáveis e Input': [
        {
          command:
            '#!/bin/bash\n\n# Variáveis\nnome="João"\nidade=25\necho "Nome: $nome, Idade: $idade"',
          comment: '# Declarando variáveis',
        },
        {
          command:
            '#!/bin/bash\n\n# Input do usuário\necho "Qual seu nome?"\nread nome\necho "Olá, $nome!"',
          comment: '# Lendo input do usuário',
        },
        {
          command:
            '#!/bin/bash\n\n# Argumentos de linha de comando\necho "Primeiro argumento: $1"\necho "Segundo argumento: $2"\necho "Todos os argumentos: $@"\necho "Número de argumentos: $#"',
          comment: '# Usando argumentos',
        },
        {
          command:
            '#!/bin/bash\n\n# Variáveis especiais\necho "PID do script: $$"\necho "Código de saída: $?"\necho "Nome do script: $0"',
          comment: '# Variáveis especiais',
        },
      ],
      'Estruturas Condicionais': [
        {
          command:
            '#!/bin/bash\n\n# If-else\nidade=18\nif [ $idade -ge 18 ]; then\n    echo "Maior de idade"\nelse\n    echo "Menor de idade"\nfi',
          comment: '# Estrutura if-else',
        },
        {
          command:
            '#!/bin/bash\n\n# Case\nopcao="1"\ncase $opcao in\n    1) echo "Opção 1 selecionada" ;;\n    2) echo "Opção 2 selecionada" ;;\n    *) echo "Opção inválida" ;;\nesac',
          comment: '# Estrutura case',
        },
        {
          command:
            '#!/bin/bash\n\n# Operadores de comparação\nnum1=10\nnum2=20\n\nif [ $num1 -eq $num2 ]; then\n    echo "Iguais"\nelif [ $num1 -lt $num2 ]; then\n    echo "$num1 é menor que $num2"\nelse\n    echo "$num1 é maior que $num2"\nfi',
          comment: '# Comparando números',
        },
        {
          command:
            '#!/bin/bash\n\n# Comparando strings\nstr1="bash"\nstr2="shell"\n\nif [ "$str1" = "$str2" ]; then\n    echo "Strings iguais"\nelse\n    echo "Strings diferentes"\nfi',
          comment: '# Comparando strings',
        },
      ],
      Loops: [
        {
          command:
            '#!/bin/bash\n\n# For loop\nfor i in {1..5}; do\n    echo "Número: $i"\ndone',
          comment: '# Loop for básico',
        },
        {
          command:
            '#!/bin/bash\n\n# For com array\nfrutas=("maçã" "banana" "laranja")\nfor fruta in "${frutas[@]}"; do\n    echo "Fruta: $fruta"\ndone',
          comment: '# Loop com array',
        },
        {
          command:
            '#!/bin/bash\n\n# While loop\ncontador=0\nwhile [ $contador -lt 5 ]; do\n    echo "Contador: $contador"\n    contador=$((contador + 1))\ndone',
          comment: '# Loop while',
        },
        {
          command:
            '#!/bin/bash\n\n# Until loop\ncontador=0\nuntil [ $contador -eq 5 ]; do\n    echo "Contador: $contador"\n    contador=$((contador + 1))\ndone',
          comment: '# Loop until',
        },
      ],
    },
    useCase:
      'Use quando: Aprendendo programação shell ou criando scripts simples',
  },

  // Card Scripts de Automação
  scriptsAutomacao: {
    title: '🤖 Scripts de Automação',
    level: 'intermediario',
    id: 'scripts-automacao',
    sections: {
      'Backup Automatizado': [
        {
          command:
            '#!/bin/bash\n\n# Script de backup\norigem="/home/user/documentos"\ndestino="/backup/$(date +%Y%m%d)"\nmkdir -p "$destino"\ncp -r "$origem" "$destino"\necho "Backup concluído em $destino"',
          comment: '# Backup simples',
        },
        {
          command:
            '#!/bin/bash\n\n# Backup com tar\norigem="/home/user/documentos"\ndestino="/backup/documentos_$(date +%Y%m%d).tar.gz"\ntar -czf "$destino" "$origem"\necho "Backup compactado em $destino"',
          comment: '# Backup compactado',
        },
        {
          command:
            '#!/bin/bash\n\n# Backup incremental\norigem="/home/user/documentos"\ndestino="/backup"\ndata=$(date +%Y%m%d)\nfind "$origem" -mtime -1 -type f -exec cp {} "$destino/$data/" \\;\necho "Backup incremental concluído"',
          comment: '# Backup incremental',
        },
      ],
      'Limpeza de Sistema': [
        {
          command:
            '#!/bin/bash\n\n# Limpar arquivos temporários\necho "Limpando arquivos temporários..."\nrm -rf /tmp/*\nrm -rf ~/.cache/*\necho "Limpeza concluída"',
          comment: '# Limpeza básica',
        },
        {
          command:
            '#!/bin/bash\n\n# Limpar logs antigos\necho "Limpando logs com mais de 30 dias..."\nfind /var/log -name "*.log" -mtime +30 -delete\necho "Logs antigos removidos"',
          comment: '# Limpar logs antigos',
        },
        {
          command:
            '#!/bin/bash\n\n# Limpar pacotes não usados (Debian/Ubuntu)\necho "Removendo pacotes não usados..."\nsudo apt autoremove -y\nsudo apt autoclean\necho "Limpeza de pacotes concluída"',
          comment: '# Limpar pacotes',
        },
      ],
      'Monitoramento de Recursos': [
        {
          command:
            '#!/bin/bash\n\n# Monitorar uso de disco\necho "Uso de disco:"\ndf -h | grep -E "^/dev/"',
          comment: '# Verificar uso de disco',
        },
        {
          command:
            '#!/bin/bash\n\n# Monitorar uso de memória\necho "Uso de memória:"\nfree -h',
          comment: '# Verificar uso de memória',
        },
        {
          command:
            '#!/bin/bash\n\n# Monitorar processos\necho "Top 5 processos por CPU:"\nps aux --sort=-%cpu | head -6',
          comment: '# Verificar processos',
        },
        {
          command:
            "#!/bin/bash\n\n# Alerta de uso de disco\nlimite=90\nuso=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')\nif [ $uso -gt $limite ]; then\n    echo \"ALERTA: Uso de disco acima de $limite%\"\nfi",
          comment: '# Alerta de disco',
        },
      ],
    },
    useCase:
      'Use quando: Automatizando tarefas repetitivas ou manutenção do sistema',
  },

  // Card Scripts de Monitoramento
  scriptsMonitoramento: {
    title: '📊 Scripts de Monitoramento',
    level: 'intermediario',
    id: 'scripts-monitoramento',
    sections: {
      'Monitoramento de Serviços': [
        {
          command:
            '#!/bin/bash\n\n# Verificar se serviço está rodando\nservico="nginx"\nif systemctl is-active --quiet $servico; then\n    echo "$servico está rodando"\nelse\n    echo "$servico está parado"\n    sudo systemctl start $servico\nfi',
          comment: '# Verificar serviço',
        },
        {
          command:
            '#!/bin/bash\n\n# Monitorar múltiplos serviços\nservicos=("nginx" "mysql" "apache2")\nfor servico in "${servicos[@]}"; do\n    if systemctl is-active --quiet $servico; then\n        echo "✓ $servico: ATIVO"\n    else\n        echo "✗ $servico: INATIVO"\n    fi\ndone',
          comment: '# Monitorar vários serviços',
        },
        {
          command:
            '#!/bin/bash\n\n# Reiniciar serviço se falhar\nservico="nginx"\nif ! systemctl is-active --quiet $servico; then\n    echo "Reiniciando $servico..."\n    sudo systemctl restart $servico\n    echo "$servico reiniciado"\nfi',
          comment: '# Reiniciar serviço',
        },
      ],
      'Monitoramento de Rede': [
        {
          command:
            '#!/bin/bash\n\n# Testar conectividade\nhost="google.com"\nif ping -c 1 $host &> /dev/null; then\n    echo "Conectividade com $host: OK"\nelse\n    echo "Conectividade com $host: FALHOU"\nfi',
          comment: '# Testar ping',
        },
        {
          command:
            '#!/bin/bash\n\n# Verificar portas abertas\nporta=80\nif netstat -tuln | grep -q ":$porta "; then\n    echo "Porta $porta está aberta"\nelse\n    echo "Porta $porta está fechada"\nfi',
          comment: '# Verificar porta',
        },
        {
          command:
            '#!/bin/bash\n\n# Monitorar uso de banda\ninterface="eth0"\necho "Monitorando interface $interface..."\niftop -i $interface -t -s 10',
          comment: '# Monitorar banda',
        },
      ],
      'Logs e Alertas': [
        {
          command:
            '#!/bin/bash\n\n# Monitorar erros em log\narquivo_log="/var/log/syslog"\nerros=$(tail -100 $arquivo_log | grep -i "error" | wc -l)\necho "Erros encontrados: $erros"',
          comment: '# Contar erros',
        },
        {
          command:
            '#!/bin/bash\n\n# Alertar por email\nassunto="Alerta do Sistema"\nmensagem="O sistema detectou um problema"\necho "$mensagem" | mail -s "$assunto" admin@exemplo.com',
          comment: '# Enviar alerta',
        },
        {
          command:
            '#!/bin/bash\n\n# Monitorar tentativas de login\ntentativas=$(grep "Failed password" /var/log/auth.log | wc -l)\necho "Tentativas de login falhadas: $tentativas"',
          comment: '# Monitorar login',
        },
      ],
    },
    useCase: 'Use quando: Monitorando saúde do sistema, serviços ou recursos',
  },

  // Card Scripts de Processamento
  scriptsProcessamento: {
    title: '⚙️ Scripts de Processamento',
    level: 'avancado',
    id: 'scripts-processamento',
    sections: {
      'Processamento de Texto': [
        {
          command:
            '#!/bin/bash\n\n# Contar palavras em arquivo\narquivo="texto.txt"\npalavras=$(wc -w < $arquivo)\necho "O arquivo tem $palavras palavras"',
          comment: '# Contar palavras',
        },
        {
          command:
            '#!/bin/bash\n\n# Extrair emails de arquivo\narquivo="contatos.txt"\ngrep -E -o "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b" $arquivo',
          comment: '# Extrair emails',
        },
        {
          command:
            '#!/bin/bash\n\n# Substituir texto em arquivos\nfind . -name "*.txt" -exec sed -i \'s/antigo/novo/g\' {} \\;\necho "Substituição concluída"',
          comment: '# Substituir texto',
        },
        {
          command:
            '#!/bin/bash\n\n# Ordenar e remover duplicados\narquivo="lista.txt"\nsort $arquivo | uniq > ${arquivo}_ordenado.txt\necho "Arquivo ordenado e sem duplicados"',
          comment: '# Ordenar e deduplicar',
        },
      ],
      'Processamento de Arquivos': [
        {
          command:
            '#!/bin/bash\n\n# Renomear arquivos em massa\ncontador=1\nfor arquivo in *.jpg; do\n    mv "$arquivo" "imagem_$contador.jpg"\n    contador=$((contador + 1))\ndone',
          comment: '# Renomear em massa',
        },
        {
          command:
            '#!/bin/bash\n\n# Converter imagens\nfor arquivo in *.png; do\n    convert "$arquivo" "${arquivo%.png}.jpg"\ndone\necho "Conversão concluída"',
          comment: '# Converter imagens',
        },
        {
          command:
            '#!/bin/bash\n\n# Comprimir arquivos\ndiretorio="documentos"\ntar -czf "${diretorio}_$(date +%Y%m%d).tar.gz" $diretorio\necho "Compressão concluída"',
          comment: '# Comprimir arquivos',
        },
        {
          command:
            '#!/bin/bash\n\n# Encontrar arquivos grandes\nfind . -type f -size +100M -exec ls -lh {} \\; | sort -k5 -hr\necho "Arquivos maiores que 100MB"',
          comment: '# Encontrar arquivos grandes',
        },
      ],
      'Processamento de Dados': [
        {
          command:
            '#!/bin/bash\n\n# Processar CSV\narquivo="dados.csv"\nawk -F, \'{sum+=$3} END {print "Média:", sum/NR}\' $arquivo',
          comment: '# Calcular média CSV',
        },
        {
          command:
            '#!/bin/bash\n\n# Filtrar dados\narquivo="dados.csv"\nawk -F, \'$2 > 50 {print $1, $2}\' $arquivo',
          comment: '# Filtrar CSV',
        },
        {
          command:
            '#!/bin/bash\n\n# Gerar relatório\necho "Relatório de Vendas - $(date)" > relatorio.txt\necho "=========================" >> relatorio.txt\ncat vendas.csv | awk -F, \'{print $1 ": $" $3}\' >> relatorio.txt\necho "Relatório gerado"',
          comment: '# Gerar relatório',
        },
      ],
    },
    useCase: 'Use quando: Processando textos, arquivos ou dados em lote',
  },

  // Card Scripts de Segurança
  scriptsSeguranca: {
    title: '🔒 Scripts de Segurança',
    level: 'avancado',
    id: 'scripts-seguranca',
    sections: {
      'Análise de Segurança': [
        {
          command:
            '#!/bin/bash\n\n# Verificar permissões de arquivos críticos\narquivos=("/etc/passwd" "/etc/shadow" "/etc/sudoers")\nfor arquivo in "${arquivos[@]}"; do\n    ls -la $arquivo\ndone',
          comment: '# Verificar permissões',
        },
        {
          command:
            '#!/bin/bash\n\n# Encontrar arquivos com permissões perigosas\necho "Arquivos world-writable:"\nfind / -type f -perm -002 2>/dev/null | head -10',
          comment: '# Arquivos perigosos',
        },
        {
          command:
            '#!/bin/bash\n\n# Verificar usuários com UID 0\necho "Usuários com privilégios de root:"\nawk -F: \'$3 == 0 {print $1}\' /etc/passwd',
          comment: '# Verificar root users',
        },
        {
          command:
            '#!/bin/bash\n\n# Analisar tentativas de invasão\necho "Tentativas de SSH falhadas:"\ngrep "Failed password" /var/log/auth.log | awk \'{print $11}\' | sort | uniq -c | sort -nr',
          comment: '# Tentativas SSH',
        },
      ],
      'Backup de Segurança': [
        {
          command:
            '#!/bin/bash\n\n# Backup de configurações\ndestino="/backup/config_$(date +%Y%m%d)"\nmkdir -p $destino\ncp -r /etc $destino/\ncp -r /home $destino/\necho "Backup de segurança concluído"',
          comment: '# Backup configs',
        },
        {
          command:
            '#!/bin/bash\n\n# Verificar integridade de arquivos\narquivo="importante.txt"\nmd5sum $arquivo > ${arquivo}.md5\necho "Checksum gerado"',
          comment: '# Gerar checksum',
        },
        {
          command:
            '#!/bin/bash\n\n# Verificar integridade\narquivo="importante.txt"\nif md5sum -c ${arquivo}.md5; then\n    echo "Arquivo íntegro"\nelse\n    echo "ARQUIVO ALTERADO!"\nfi',
          comment: '# Verificar checksum',
        },
      ],
      Hardening: [
        {
          command:
            '#!/bin/bash\n\n# Desabilitar serviços desnecessários\nservicos=("telnet" "rsh" "rlogin")\nfor servico in "${servicos[@]}"; do\n    if systemctl is-enabled $servico &> /dev/null; then\n        sudo systemctl disable $servico\n        echo "$servico desabilitado"\n    fi\ndone',
          comment: '# Desabilitar serviços',
        },
        {
          command:
            '#!/bin/bash\n\n# Configurar firewall básico\nsudo ufw --force reset\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow ssh\nsudo ufw --force enable\necho "Firewall configurado"',
          comment: '# Configurar firewall',
        },
        {
          command:
            '#!/bin/bash\n\n# Atualizar sistema\necho "Atualizando sistema..."\nsudo apt update && sudo apt upgrade -y\necho "Sistema atualizado"',
          comment: '# Atualizar sistema',
        },
      ],
    },
    warning:
      '⚠️ ATENÇÃO: Scripts de segurança podem afetar o funcionamento do sistema. Teste em ambiente isolado antes de usar em produção.',
    useCase:
      'Use quando: Implementando medidas de segurança ou analisando vulnerabilidades',
  },
};
