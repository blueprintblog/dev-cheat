// Objeto com todos os comandos da cheatsheet PowerShell
export const powershellCommands = {
  // Card Comandos Básicos
  comandosBasicos: {
    title: '🟢 Comandos Básicos',
    level: 'basico',
    id: 'comandos-basicos',
    sections: {
      Navegação: [
        { command: 'Get-Location', comment: '# Mostra diretório atual (pwd)' },
        {
          command: 'Set-Location C:\\Users',
          comment: '# Navega para diretório (cd)',
        },
        { command: 'Get-ChildItem', comment: '# Lista arquivos (ls)' },
        {
          command: 'Get-ChildItem -Force',
          comment: '# Inclui arquivos ocultos',
        },
        { command: 'Get-ChildItem -Recurse', comment: '# Lista recursivo' },
      ],
      'Informações do Sistema': [
        { command: 'Get-ComputerInfo', comment: '# Informações do sistema' },
        { command: 'Get-Process', comment: '# Lista processos' },
        { command: 'Get-Service', comment: '# Lista serviços' },
        {
          command: 'Get-EventLog -LogName Application',
          comment: '# Logs de aplicação',
        },
        { command: 'Get-HotFix', comment: '# Updates instalados' },
      ],
      'Ajuda e Documentação': [
        { command: 'Get-Help Get-Process', comment: '# Ajuda do comando' },
        {
          command: 'Get-Command Get-Process',
          comment: '# Informações do comando',
        },
        { command: 'Update-Help', comment: '# Atualiza ajuda' },
        {
          command: 'Get-Module -ListAvailable',
          comment: '# Módulos disponíveis',
        },
      ],
    },
    useCase:
      'Use quando: Começando com PowerShell, navegação básica, informações do sistema',
  },

  // Card Gerenciamento de Arquivos
  gerenciamentoArquivos: {
    title: '📁 Gerenciamento de Arquivos',
    level: 'basico',
    id: 'gerenciamento-arquivos',
    sections: {
      'Criação e Remoção': [
        {
          command: 'New-Item -Path "arquivo.txt" -ItemType File',
          comment: '# Criar arquivo',
        },
        {
          command: 'New-Item -Path "pasta" -ItemType Directory',
          comment: '# Criar pasta',
        },
        { command: 'Remove-Item "arquivo.txt"', comment: '# Remover arquivo' },
        { command: 'Remove-Item "pasta" -Recurse', comment: '# Remover pasta' },
        {
          command: 'Remove-Item "arquivo.txt" -Force',
          comment: '# Forçar remoção',
        },
      ],
      'Cópia e Movimentação': [
        {
          command: 'Copy-Item "origem.txt" "destino.txt"',
          comment: '# Copiar arquivo',
        },
        {
          command: 'Copy-Item "pasta" "destino" -Recurse',
          comment: '# Copiar pasta',
        },
        {
          command: 'Move-Item "antigo.txt" "novo.txt"',
          comment: '# Mover/renomear',
        },
        {
          command: 'Rename-Item "antigo.txt" "novo.txt"',
          comment: '# Renomear',
        },
      ],
      'Leitura e Escrita': [
        { command: 'Get-Content "arquivo.txt"', comment: '# Ler conteúdo' },
        {
          command: 'Get-Content "arquivo.txt" | Select-Object -First 10',
          comment: '# Primeiras 10 linhas',
        },
        {
          command: 'Set-Content "arquivo.txt" "conteúdo"',
          comment: '# Escrever arquivo',
        },
        {
          command: 'Add-Content "arquivo.txt" "mais conteúdo"',
          comment: '# Adicionar conteúdo',
        },
        { command: 'Out-File "saida.txt"', comment: '# Redirecionar saída' },
      ],
    },
    useCase:
      'Use quando: Manipulação de arquivos e diretórios, backup, organização',
  },

  // Card Variáveis e Tipos
  variaveisETipos: {
    title: '🔤 Variáveis e Tipos',
    level: 'basico',
    id: 'variaveis-tipos',
    sections: {
      'Declaração de Variáveis': [
        { command: '$nome = "João"', comment: '# String' },
        { command: '$idade = 25', comment: '# Inteiro' },
        { command: '$altura = 1.75', comment: '# Decimal' },
        { command: '$ativo = $true', comment: '# Booleano' },
        { command: '$dados = $null', comment: '# Nulo' },
      ],
      'Arrays e Listas': [
        {
          command: '$lista = @("item1", "item2", "item3")',
          comment: '# Array de strings',
        },
        { command: '$numeros = 1..10', comment: '# Array de números' },
        { command: '$lista[0]', comment: '# Acessar elemento' },
        { command: '$lista[-1]', comment: '# Último elemento' },
        { command: '$lista.Count', comment: '# Tamanho do array' },
        { command: '$lista += "novo"', comment: '# Adicionar elemento' },
      ],
      'Hash Tables (Dicionários)': [
        {
          command: '$pessoa = @{Nome="João"; Idade=25}',
          comment: '# Criar hashtable',
        },
        { command: '$pessoa.Nome', comment: '# Acessar por ponto' },
        { command: '$pessoa["Nome"]', comment: '# Acessar por chave' },
        {
          command: '$pessoa.Cidade = "São Paulo"',
          comment: '# Adicionar propriedade',
        },
        { command: '$pessoa.Keys', comment: '# Listar chaves' },
        { command: '$pessoa.Values', comment: '# Listar valores' },
      ],
    },
    useCase:
      'Use quando: Armazenando dados, manipulação de variáveis, estruturas de dados',
  },

  // Card Estruturas de Controle
  estruturasControle: {
    title: '🔀 Estruturas de Controle',
    level: 'intermediario',
    id: 'estruturas-controle',
    sections: {
      'If/Else': [
        {
          command:
            'if ($idade -ge 18) {\n    Write-Host "Maior de idade"\n} else {\n    Write-Host "Menor de idade"\n}',
          comment: '# Condicional simples',
        },
        {
          command:
            'if ($nota -ge 7) {\n    Write-Host "Aprovado"\n} elseif ($nota -ge 5) {\n    Write-Host "Recuperação"\n} else {\n    Write-Host "Reprovado"\n}',
          comment: '# Múltiplas condições',
        },
      ],
      'Loops For': [
        {
          command: 'for ($i = 1; $i -le 10; $i++) {\n    Write-Host $i\n}',
          comment: '# Loop for tradicional',
        },
        {
          command: 'foreach ($item in $lista) {\n    Write-Host $item\n}',
          comment: '# Loop foreach',
        },
        {
          command:
            'foreach ($arquivo in Get-ChildItem) {\n    Write-Host $arquivo.Name\n}',
          comment: '# Iterar arquivos',
        },
      ],
      'Loops While': [
        {
          command:
            '$contador = 0\nwhile ($contador -lt 5) {\n    Write-Host $contador\n    $contador++\n}',
          comment: '# Loop while',
        },
        {
          command:
            'do {\n    $resposta = Read-Host "Digite \'sair\' para parar"\n} while ($resposta -ne "sair")',
          comment: '# Loop do-while',
        },
      ],
      Switch: [
        {
          command:
            'switch ($opcao) {\n    1 { Write-Host "Opção 1" }\n    2 { Write-Host "Opção 2" }\n    default { Write-Host "Opção inválida" }\n}',
          comment: '# Switch case',
        },
      ],
    },
    useCase:
      'Use quando: Controlando fluxo do script, repetições, decisões lógicas',
  },

  // Card Funções e Scripts
  funcoesScripts: {
    title: '⚡ Funções e Scripts',
    level: 'intermediario',
    id: 'funcoes-scripts',
    sections: {
      'Definição de Funções': [
        {
          command:
            'function Saudar($nome) {\n    param([string]$nome)\n    Write-Host "Olá, $nome!"\n}',
          comment: '# Função simples',
        },
        {
          command:
            'function Calcular-Area($base, $altura) {\n    param([double]$base, [double]$altura)\n    return ($base * $altura) / 2\n}',
          comment: '# Com parâmetros tipados',
        },
        {
          command:
            'function Testar-Conexao {\n    param([string]$servidor = "localhost")\n    Test-Connection $servidor\n}',
          comment: '# Com parâmetro padrão',
        },
      ],
      'Parâmetros Avançados': [
        {
          command:
            'function Processar-Arquivos {\n    param(\n        [Parameter(Mandatory=$true)]\n        [string]$Caminho,\n        \n        [Parameter()]\n        [switch]$Recurse\n    )\n    # Código da função\n}',
          comment: '# Parâmetros avançados',
        },
        {
          command:
            'function Exportar-Dados {\n    param(\n        [Parameter(ValueFromPipeline=$true)]\n        [object[]]$Dados\n    )\n    $Dados | Export-Csv -Path "saida.csv"\n}',
          comment: '# Aceita pipeline',
        },
      ],
      'Módulos e Scripts': [
        { command: '. .\\meu-script.ps1', comment: '# Importar script' },
        {
          command: 'Import-Module .\\meu-modulo.psm1',
          comment: '# Importar módulo',
        },
        {
          command: 'Export-ModuleMember -Function MinhaFuncao',
          comment: '# Exportar função',
        },
        { command: '$PSVersionTable', comment: '# Versão do PowerShell' },
      ],
    },
    useCase:
      'Use quando: Automatizando tarefas, criando scripts, organização de código',
  },

  // Card Pipeline e Operadores
  pipelineOperadores: {
    title: '🔄 Pipeline e Operadores',
    level: 'intermediario',
    id: 'pipeline-operadores',
    sections: {
      'Pipeline Básico': [
        {
          command: 'Get-Process | Where-Object {$_.CPU -gt 100}',
          comment: '# Filtrar processos',
        },
        {
          command: 'Get-ChildItem | Where-Object {$_.Extension -eq ".txt"}',
          comment: '# Filtrar arquivos',
        },
        {
          command: 'Get-Service | Where-Object {$_.Status -eq "Running"}',
          comment: '# Filtrar serviços',
        },
        {
          command: 'Get-Process | Sort-Object CPU -Descending',
          comment: '# Ordenar',
        },
      ],
      'Operadores de Comparação': [
        { command: '$a -eq $b', comment: '# Igual' },
        { command: '$a -ne $b', comment: '# Diferente' },
        { command: '$a -gt $b', comment: '# Maior que' },
        { command: '$a -ge $b', comment: '# Maior ou igual' },
        { command: '$a -lt $b', comment: '# Menor que' },
        { command: '$a -le $b', comment: '# Menor ou igual' },
        { command: '$a -like "*texto*"', comment: '# Like (contém)' },
        { command: '$a -match "regex"', comment: '# Match regex' },
      ],
      'Operadores Lógicos': [
        { command: '$a -and $b', comment: '# E lógico' },
        { command: '$a -or $b', comment: '# Ou lógico' },
        { command: '-not $a', comment: '# Negação' },
        { command: '$a -xor $b', comment: '# OU exclusivo' },
      ],
      'Select-Object': [
        {
          command: 'Get-Process | Select-Object Name, CPU, Memory',
          comment: '# Selecionar propriedades',
        },
        {
          command: 'Get-Process | Select-Object -First 10',
          comment: '# Primeiros 10',
        },
        {
          command: 'Get-Process | Select-Object -Last 5',
          comment: '# Últimos 5',
        },
        {
          command: 'Get-Process | Select-Object -Unique',
          comment: '# Remover duplicatas',
        },
      ],
    },
    useCase:
      'Use quando: Processamento de dados, filtragem, transformação de objetos',
  },

  // Card Gerenciamento de Processos
  gerenciamentoProcessos: {
    title: '⚙️ Gerenciamento de Processos',
    level: 'intermediario',
    id: 'gerenciamento-processos',
    sections: {
      'Listar e Monitorar': [
        { command: 'Get-Process', comment: '# Todos processos' },
        {
          command: 'Get-Process -Name "chrome"',
          comment: '# Processo específico',
        },
        {
          command: 'Get-Process | Where-Object {$_.CPU -gt 100}',
          comment: '# Processos intensivos',
        },
        {
          command:
            'Get-Process | Sort-Object CPU -Descending | Select-Object -First 10',
          comment: '# Top 10 CPU',
        },
      ],
      'Iniciar e Parar': [
        { command: 'Start-Process notepad.exe', comment: '# Iniciar processo' },
        {
          command: 'Start-Process chrome.exe "https://google.com"',
          comment: '# Com parâmetro',
        },
        {
          command: 'Stop-Process -Name "notepad"',
          comment: '# Parar por nome',
        },
        { command: 'Stop-Process -Id 1234', comment: '# Parar por ID' },
        {
          command: 'Stop-Process -Name "chrome" -Force',
          comment: '# Forçar parada',
        },
      ],
      'Gerenciar Serviços': [
        { command: 'Get-Service', comment: '# Listar serviços' },
        {
          command: 'Get-Service -Name "Spooler"',
          comment: '# Serviço específico',
        },
        {
          command: 'Start-Service -Name "Spooler"',
          comment: '# Iniciar serviço',
        },
        { command: 'Stop-Service -Name "Spooler"', comment: '# Parar serviço' },
        {
          command: 'Restart-Service -Name "Spooler"',
          comment: '# Reiniciar serviço',
        },
      ],
    },
    useCase: 'Use quando: Gerenciamento de sistema, troubleshooting, automação',
  },

  // Card Rede e Conectividade
  redeConectividade: {
    title: '🌐 Rede e Conectividade',
    level: 'intermediario',
    id: 'rede-conectividade',
    sections: {
      'Informações de Rede': [
        { command: 'Get-NetAdapter', comment: '# Adaptadores de rede' },
        { command: 'Get-NetIPAddress', comment: '# Endereços IP' },
        { command: 'Get-NetRoute', comment: '# Tabela de rotas' },
        {
          command: 'Test-Connection google.com',
          comment: '# Testar conectividade',
        },
        {
          command: 'Test-NetConnection google.com -Port 80',
          comment: '# Testar porta',
        },
      ],
      'Configuração de Rede': [
        {
          command:
            'New-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress 192.168.1.100 -PrefixLength 24',
          comment: '# Configurar IP',
        },
        {
          command:
            'Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses 8.8.8.8',
          comment: '# Configurar DNS',
        },
        { command: 'Get-NetFirewallRule', comment: '# Regras firewall' },
        {
          command:
            'New-NetFirewallRule -DisplayName "Permitir RDP" -Direction Inbound -Protocol TCP -LocalPort 3389 -Action Allow',
          comment: '# Criar regra',
        },
      ],
      'HTTP e Web': [
        {
          command: 'Invoke-WebRequest https://api.example.com',
          comment: '# Requisição HTTP',
        },
        {
          command: 'Invoke-RestMethod https://api.example.com/data',
          comment: '# API REST',
        },
        {
          command:
            '$response = Invoke-WebRequest https://example.com\n$response.Content',
          comment: '# Obter conteúdo',
        },
        {
          command:
            'Invoke-WebRequest https://example.com -OutFile "pagina.html"',
          comment: '# Download',
        },
      ],
    },
    useCase: 'Use quando: Configuração de rede, diagnóstico, automação web',
  },

  // Card Active Directory
  activeDirectory: {
    title: '👥 Active Directory',
    level: 'avancado',
    id: 'active-directory',
    sections: {
      'Gerenciamento de Usuários': [
        { command: 'Get-ADUser -Filter *', comment: '# Listar usuários' },
        {
          command: 'Get-ADUser -Identity "joao.silva"',
          comment: '# Usuário específico',
        },
        {
          command:
            'New-ADUser -Name "novo.usuario" -SamAccountName "novo.usuario"',
          comment: '# Criar usuário',
        },
        {
          command: 'Set-ADUser -Identity "joao.silva" -Department "TI"',
          comment: '# Modificar usuário',
        },
        {
          command: 'Disable-ADAccount -Identity "joao.silva"',
          comment: '# Desabilitar conta',
        },
      ],
      'Gerenciamento de Grupos': [
        { command: 'Get-ADGroup -Filter *', comment: '# Listar grupos' },
        { command: 'Get-ADGroupMember "TI"', comment: '# Membros do grupo' },
        {
          command: 'Add-ADGroupMember -Identity "TI" -Members "joao.silva"',
          comment: '# Adicionar ao grupo',
        },
        {
          command: 'Remove-ADGroupMember -Identity "TI" -Members "joao.silva"',
          comment: '# Remover do grupo',
        },
      ],
      'Consultas e Relatórios': [
        {
          command: 'Search-ADAccount -AccountDisabled',
          comment: '# Contas desabilitadas',
        },
        {
          command: 'Get-ADUser -Filter {PasswordNeverExpires -eq $true}',
          comment: '# Senhas que não expiram',
        },
        {
          command:
            'Get-ADUser -Filter {LastLogonDate -lt (Get-Date).AddDays(-90)}',
          comment: '# Inativos 90 dias',
        },
        {
          command: 'Get-ADUser -Properties * | Export-Csv "usuarios.csv"',
          comment: '# Exportar para CSV',
        },
      ],
    },
    useCase:
      'Use quando: Administração de domínio, gerenciamento de usuários, auditoria',
  },

  // Card Segurança e Permissões
  segurancaPermissoes: {
    title: '🔒 Segurança e Permissões',
    level: 'avancado',
    id: 'seguranca-permissoes',
    sections: {
      'Políticas de Execução': [
        { command: 'Get-ExecutionPolicy', comment: '# Ver política atual' },
        {
          command: 'Set-ExecutionPolicy RemoteSigned',
          comment: '# Definir política',
        },
        {
          command: 'Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass',
          comment: '# Bypass temporário',
        },
        {
          command:
            'Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy AllSigned',
          comment: '# Para usuário atual',
        },
      ],
      'Certificados e Assinatura': [
        {
          command: 'Get-ChildItem Cert:\\CurrentUser\\My',
          comment: '# Certificados usuário',
        },
        {
          command: 'Get-AuthenticodeSignature "script.ps1"',
          comment: '# Verificar assinatura',
        },
        {
          command:
            'Set-AuthenticodeSignature -FilePath "script.ps1" -Certificate $cert',
          comment: '# Assinar script',
        },
      ],
      'Permissões de Arquivos': [
        { command: 'Get-Acl "C:\\pasta"', comment: '# Ver permissões' },
        {
          command:
            '$acl = Get-Acl "C:\\pasta"\n$accessRule = New-Object System.Security.AccessControl.FileSystemAccessRule("Usuario","FullControl","Allow")\n$acl.SetAccessRule($accessRule)\nSet-Acl "C:\\pasta" $acl',
          comment: '# Definir permissão',
        },
        {
          command: 'Get-Acl "arquivo.txt" | Format-List',
          comment: '# Permissões detalhadas',
        },
      ],
    },
    useCase:
      'Use quando: Scripts seguros, administração de permissões, conformidade',
  },

  // Card Automação e Agendamento
  automacaoAgendamento: {
    title: '⏰ Automação e Agendamento',
    level: 'avancado',
    id: 'automacao-agendamento',
    sections: {
      'Tarefas Agendadas': [
        { command: 'Get-ScheduledTask', comment: '# Listar tarefas' },
        {
          command:
            'Register-ScheduledTask -Action (New-ScheduledTaskAction -Execute "notepad.exe") -Trigger (New-ScheduledTaskTrigger -Daily -At 9am)',
          comment: '# Criar tarefa',
        },
        {
          command: 'Start-ScheduledTask -TaskName "MinhaTarefa"',
          comment: '# Iniciar tarefa',
        },
        {
          command: 'Disable-ScheduledTask -TaskName "MinhaTarefa"',
          comment: '# Desabilitar tarefa',
        },
        {
          command: 'Unregister-ScheduledTask -TaskName "MinhaTarefa"',
          comment: '# Remover tarefa',
        },
      ],
      'Jobs em Background': [
        {
          command: 'Start-Job -ScriptBlock { Get-Process }',
          comment: '# Iniciar job',
        },
        { command: 'Get-Job', comment: '# Listar jobs' },
        { command: 'Receive-Job -Id 1', comment: '# Obter resultado' },
        { command: 'Stop-Job -Id 1', comment: '# Parar job' },
        { command: 'Remove-Job -Id 1', comment: '# Remover job' },
      ],
      Workflows: [
        {
          command:
            'workflow MeuWorkflow {\n    parallel {\n        Get-Process\n        Get-Service\n    }\n    sequence {\n        Write-Host "Concluído"\n    }\n}',
          comment: '# Workflow básico',
        },
      ],
    },
    useCase:
      'Use quando: Automação de tarefas, processos em background, agendamento',
  },

  // Card WMI e CIM
  wmiCim: {
    title: '🖥️ WMI e CIM',
    level: 'avancado',
    id: 'wmi-cim',
    sections: {
      'Consultas WMI': [
        {
          command: 'Get-WmiObject -Class Win32_OperatingSystem',
          comment: '# Info do SO',
        },
        {
          command: 'Get-WmiObject -Class Win32_ComputerSystem',
          comment: '# Info do hardware',
        },
        {
          command: 'Get-WmiObject -Class Win32_Processor',
          comment: '# Info da CPU',
        },
        {
          command: 'Get-WmiObject -Class Win32_LogicalDisk',
          comment: '# Info dos discos',
        },
      ],
      'Consultas CIM': [
        {
          command: 'Get-CimInstance -ClassName Win32_OperatingSystem',
          comment: '# CIM moderno',
        },
        {
          command:
            'Get-CimInstance -Query "SELECT * FROM Win32_Process WHERE Name = \'chrome.exe\'"',
          comment: '# Query CIM',
        },
        {
          command: 'New-CimSession -ComputerName servidor',
          comment: '# Sessão remota',
        },
        {
          command:
            'Get-CimInstance -CimSession $session -ClassName Win32_Service',
          comment: '# Consulta remota',
        },
      ],
      Monitoramento: [
        {
          command: 'Get-EventLog -LogName System -Newest 10',
          comment: '# Logs do sistema',
        },
        {
          command:
            "Get-WinEvent -FilterHashtable @{LogName='Application'; Level=2}",
          comment: '# Eventos de erro',
        },
        {
          command: 'Get-Counter "\\Processor(_Total)\\% Processor Time"',
          comment: '# Contador de performance',
        },
      ],
    },
    useCase:
      'Use quando: Monitoramento de sistema, inventário de hardware, diagnóstico',
  },
};
