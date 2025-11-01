// Objeto com todos os comandos da cheatsheet Linux
export const linuxCommands = {
  // Card Sistema e Informações
  sistemaInformacoes: {
    title: '🖥️ Sistema e Informações',
    level: 'basico',
    id: 'sistema-informacoes',
    sections: {
      'Informações do Sistema': [
        { command: 'uname -a', comment: '# Informações completas do kernel' },
        { command: 'lsb_release -a', comment: '# Versão da distribuição' },
        { command: 'cat /etc/os-release', comment: '# Detalhes do SO' },
        { command: 'hostname', comment: '# Nome do host' },
        { command: 'whoami', comment: '# Usuário atual' },
        { command: 'id', comment: '# ID do usuário e grupos' },
        { command: 'uptime', comment: '# Tempo de atividade' },
        { command: 'date', comment: '# Data e hora atual' },
        { command: 'timedatectl status', comment: '# Configurações de tempo' },
        { command: 'w', comment: '# Usuários logados' },
      ],
      Hardware: [
        { command: 'lscpu', comment: '# Informações da CPU' },
        { command: 'lshw -short', comment: '# Resumo do hardware' },
        { command: 'free -h', comment: '# Uso de memória' },
        { command: 'df -h', comment: '# Espaço em disco' },
        { command: 'lsblk', comment: '# Dispositivos de bloco' },
        { command: 'lspci', comment: '# Dispositivos PCI' },
        { command: 'lsusb', comment: '# Dispositivos USB' },
        { command: 'dmidecode', comment: '# Informações BIOS/hardware' },
        { command: 'sensors', comment: '# Temperaturas e sensores' },
      ],
      'Kernel e Módulos': [
        { command: 'cat /proc/version', comment: '# Versão do kernel' },
        { command: 'lsmod', comment: '# Módulos carregados' },
        { command: 'modprobe nome_modulo', comment: '# Carregar módulo' },
        { command: 'rmmod nome_modulo', comment: '# Remover módulo' },
        { command: 'modinfo nome_modulo', comment: '# Informações do módulo' },
      ],
    },
    useCase:
      'Use quando: Diagnóstico do sistema, inventário de hardware, informações gerais',
  },

  // Card Gerenciamento de Pacotes
  gerenciamentoPacotes: {
    title: '📦 Gerenciamento de Pacotes',
    level: 'basico',
    id: 'gerenciamento-pacotes',
    sections: {
      'APT (Debian/Ubuntu)': [
        { command: 'sudo apt update', comment: '# Atualizar lista de pacotes' },
        { command: 'sudo apt upgrade', comment: '# Atualizar pacotes' },
        { command: 'sudo apt install pacote', comment: '# Instalar pacote' },
        { command: 'sudo apt remove pacote', comment: '# Remover pacote' },
        { command: 'sudo apt search termo', comment: '# Buscar pacote' },
        { command: 'apt show pacote', comment: '# Informações do pacote' },
        { command: 'sudo apt autoremove', comment: '# Remover não usados' },
        { command: 'sudo apt clean', comment: '# Limpar cache' },
        { command: 'dpkg -l', comment: '# Pacotes instalados' },
        {
          command: 'apt-cache policy pacote',
          comment: '# Versões disponíveis',
        },
      ],
      'YUM/DNF (RedHat/CentOS)': [
        { command: 'sudo yum update', comment: '# Atualizar sistema' },
        { command: 'sudo yum install pacote', comment: '# Instalar pacote' },
        { command: 'sudo yum remove pacote', comment: '# Remover pacote' },
        { command: 'yum search termo', comment: '# Buscar pacote' },
        { command: 'yum info pacote', comment: '# Informações do pacote' },
        { command: 'sudo dnf upgrade', comment: '# Atualizar (DNF)' },
        { command: 'dnf repolist', comment: '# Repositórios' },
        {
          command: 'sudo dnf groupinstall "Development Tools"',
          comment: '# Grupo de pacotes',
        },
      ],
      'Pacman (Arch Linux)': [
        { command: 'sudo pacman -Syu', comment: '# Atualizar sistema' },
        { command: 'sudo pacman -S pacote', comment: '# Instalar pacote' },
        { command: 'sudo pacman -R pacote', comment: '# Remover pacote' },
        { command: 'pacman -Ss termo', comment: '# Buscar pacote' },
        { command: 'pacman -Si pacote', comment: '# Informações do pacote' },
        {
          command: 'sudo pacman -Rns pacote',
          comment: '# Remover com dependências',
        },
        {
          command: 'pacman -Qe',
          comment: '# Pacotes instalados explicitamente',
        },
        { command: 'sudo pacman -Scc', comment: '# Limpar cache' },
        { command: 'yay -S pacote', comment: '# Instalar do AUR' },
      ],
      Snap: [
        { command: 'sudo snap install pacote', comment: '# Instalar snap' },
        { command: 'sudo snap remove pacote', comment: '# Remover snap' },
        { command: 'snap find termo', comment: '# Buscar snap' },
        { command: 'snap list', comment: '# Snaps instalados' },
        { command: 'sudo snap refresh', comment: '# Atualizar snaps' },
        { command: 'snap info pacote', comment: '# Informações do snap' },
      ],
    },
    useCase:
      'Use quando: Instalação de software, atualização do sistema, gerenciamento de dependências',
  },

  // Card Usuários e Permissões
  usuariosPermissoes: {
    title: '👥 Usuários e Permissões',
    level: 'intermediario',
    id: 'usuarios-permissoes',
    sections: {
      'Gerenciamento de Usuários': [
        { command: 'sudo adduser nome', comment: '# Criar usuário' },
        { command: 'sudo userdel nome', comment: '# Remover usuário' },
        {
          command: 'sudo usermod -aG grupo usuario',
          comment: '# Adicionar ao grupo',
        },
        { command: 'sudo passwd usuario', comment: '# Alterar senha' },
        {
          command: 'sudo chage -l usuario',
          comment: '# Informações de expiração',
        },
        { command: 'sudo chage -M 90 usuario', comment: '# Definir expiração' },
        { command: 'getent passwd', comment: '# Lista de usuários' },
        { command: 'getent group', comment: '# Lista de grupos' },
        { command: 'groups usuario', comment: '# Grupos do usuário' },
        {
          command: 'sudo usermod -l novo_nome antigo_nome',
          comment: '# Renomear usuário',
        },
      ],
      'Permissões Básicas': [
        { command: 'chmod 755 arquivo', comment: '# Permissões rwxr-xr-x' },
        { command: 'chmod u+x script.sh', comment: '# Adicionar execução' },
        { command: 'chmod -R 755 diretorio/', comment: '# Recursivo' },
        { command: 'chmod a+w arquivo', comment: '# Escrita para todos' },
        { command: 'chmod g-r arquivo', comment: '# Remover leitura grupo' },
        { command: 'ls -la', comment: '# Ver permissões' },
        { command: 'stat arquivo', comment: '# Permissões detalhadas' },
      ],
      'Permissões Avançadas': [
        { command: 'chmod u+s arquivo', comment: '# SUID' },
        { command: 'chmod g+s diretorio', comment: '# SGID' },
        { command: 'chmod +t diretorio', comment: '# Sticky bit' },
        {
          command: 'sudo chown usuario:grupo arquivo',
          comment: '# Mudar dono',
        },
        { command: 'sudo chown -R usuario diretorio/', comment: '# Recursivo' },
        { command: 'sudo chgrp grupo arquivo', comment: '# Mudar grupo' },
        { command: 'umask 022', comment: '# Máscara de permissões' },
        {
          command: 'find . -perm 777',
          comment: '# Buscar permissões específicas',
        },
      ],
      'ACL (Access Control Lists)': [
        {
          command: 'setfacl -m u:usuario:rwx arquivo',
          comment: '# Adicionar ACL',
        },
        { command: 'getfacl arquivo', comment: '# Ver ACLs' },
        {
          command: 'setfacl -m g:grupo:rx arquivo',
          comment: '# ACL para grupo',
        },
        { command: 'setfacl -x u:usuario arquivo', comment: '# Remover ACL' },
        { command: 'setfacl -b arquivo', comment: '# Remover todas ACLs' },
        {
          command: 'setfacl -R -m u:usuario:rwx diretorio/',
          comment: '# ACL recursiva',
        },
      ],
    },
    useCase:
      'Use quando: Administração de usuários, segurança, compartilhamento de recursos',
  },

  // Card Processos e Serviços
  processosServicos: {
    title: '⚙️ Processos e Serviços',
    level: 'intermediario',
    id: 'processos-servicos',
    sections: {
      'Gerenciamento de Processos': [
        { command: 'ps aux', comment: '# Todos processos' },
        { command: 'ps -ef', comment: '# Formato BSD' },
        { command: 'ps aux | grep nome', comment: '# Buscar processo' },
        { command: 'pgrep nome', comment: '# PID do processo' },
        { command: 'kill -9 PID', comment: '# Matar processo' },
        { command: 'killall nome', comment: '# Matar por nome' },
        { command: 'pkill nome', comment: '# Matar por padrão' },
        { command: 'nice -n 10 comando', comment: '# Prioridade baixa' },
        { command: 'renice 10 PID', comment: '# Alterar prioridade' },
        { command: 'nohup comando &', comment: '# Processo persistente' },
      ],
      Monitoramento: [
        { command: 'top', comment: '# Processos em tempo real' },
        { command: 'htop', comment: '# Top melhorado' },
        { command: 'iotop', comment: '# I/O de processos' },
        { command: 'nethogs', comment: '# Uso de rede por processo' },
        { command: 'pstree', comment: '# Árvore de processos' },
        { command: 'lsof -i :8080', comment: '# Processo na porta' },
        { command: 'lsof -p PID', comment: '# Arquivos do processo' },
        { command: 'strace -p PID', comment: '# System calls do processo' },
      ],
      'Systemd (Serviços)': [
        { command: 'systemctl start servico', comment: '# Iniciar serviço' },
        { command: 'systemctl stop servico', comment: '# Parar serviço' },
        {
          command: 'systemctl restart servico',
          comment: '# Reiniciar serviço',
        },
        {
          command: 'systemctl reload servico',
          comment: '# Recarregar configuração',
        },
        { command: 'systemctl status servico', comment: '# Status do serviço' },
        { command: 'systemctl enable servico', comment: '# Habilitar no boot' },
        { command: 'systemctl disable servico', comment: '# Desabilitar' },
        { command: 'systemctl list-units', comment: '# Todos serviços' },
        {
          command: 'systemctl list-unit-files',
          comment: '# Serviços disponíveis',
        },
        { command: 'journalctl -u servico', comment: '# Logs do serviço' },
      ],
    },
    useCase:
      'Use quando: Monitoramento, troubleshooting, gerenciamento de serviços',
  },

  // Card Rede e Conectividade
  redeConectividade: {
    title: '🌐 Rede e Conectividade',
    level: 'intermediario',
    id: 'rede-conectividade',
    sections: {
      'Configuração de Rede': [
        { command: 'ip addr show', comment: '# Endereços IP' },
        { command: 'ip route show', comment: '# Tabela de rotas' },
        { command: 'ip link set eth0 up', comment: '# Ativar interface' },
        {
          command: 'ip addr add 192.168.1.100/24 dev eth0',
          comment: '# Configurar IP',
        },
        { command: 'nmcli dev status', comment: '# Status NetworkManager' },
        {
          command: 'nmcli connection show',
          comment: '# Conexões configuradas',
        },
        { command: 'nmtui', comment: '# Interface texto' },
        { command: 'netplan apply', comment: '# Aplicar configuração' },
      ],
      'Diagnóstico de Rede': [
        { command: 'ping -c 4 google.com', comment: '# Testar conectividade' },
        { command: 'traceroute google.com', comment: '# Traçar rota' },
        { command: 'mtr google.com', comment: '# Ping + traceroute' },
        { command: 'nslookup google.com', comment: '# DNS lookup' },
        { command: 'dig google.com', comment: '# DNS detalhado' },
        { command: 'netstat -tuln', comment: '# Portas abertas' },
        { command: 'ss -tuln', comment: '# Netstat moderno' },
        { command: 'lsof -i :80', comment: '# Processo na porta' },
        { command: 'tcpdump -i eth0', comment: '# Capturar pacotes' },
      ],
      'Ferramentas de Rede': [
        { command: 'wget https://exemplo.com/arquivo', comment: '# Download' },
        {
          command: 'curl -O https://exemplo.com/arquivo',
          comment: '# Download com curl',
        },
        {
          command: 'curl -X POST -d "data" https://api.com',
          comment: '# POST request',
        },
        { command: 'ssh usuario@servidor', comment: '# Conexão remota' },
        {
          command: 'scp arquivo usuario@servidor:/path',
          comment: '# Cópia segura',
        },
        {
          command: 'rsync -avz origem/ usuario@servidor:destino/',
          comment: '# Sincronização',
        },
        { command: 'sftp usuario@servidor', comment: '# FTP seguro' },
      ],
      Firewall: [
        { command: 'sudo ufw enable', comment: '# Ativar firewall' },
        { command: 'sudo ufw allow 22/tcp', comment: '# Permitir porta' },
        { command: 'sudo ufw deny 23/tcp', comment: '# Bloquear porta' },
        { command: 'sudo ufw status', comment: '# Status do firewall' },
        { command: 'sudo ufw delete allow 22/tcp', comment: '# Remover regra' },
        { command: 'iptables -L', comment: '# Listar regras iptables' },
        {
          command: 'sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT',
          comment: '# Adicionar regra',
        },
      ],
    },
    useCase:
      'Use quando: Configuração de rede, diagnóstico, segurança, conexões remotas',
  },

  // Card Sistema de Arquivos
  sistemaArquivos: {
    title: '📁 Sistema de Arquivos',
    level: 'intermediario',
    id: 'sistema-arquivos',
    sections: {
      'Estrutura de Diretórios': [
        { command: 'tree -L 2', comment: '# Visualizar árvore' },
        { command: 'find . -type f', comment: '# Encontrar arquivos' },
        { command: 'find . -type d', comment: '# Encontrar diretórios' },
        { command: 'find . -name "*.txt"', comment: '# Por padrão' },
        { command: 'find . -size +100M', comment: '# Por tamanho' },
        { command: 'find . -mtime -7', comment: '# Modificados recentemente' },
        { command: 'find . -user usuario', comment: '# Por dono' },
        { command: 'find . -perm 777', comment: '# Por permissão' },
        { command: 'locate arquivo', comment: '# Buscar rapidamente' },
        { command: 'updatedb', comment: '# Atualizar base locate' },
      ],
      'Links Simbólicos': [
        { command: 'ln -s origem link', comment: '# Criar link simbólico' },
        { command: 'ln origem link', comment: '# Criar hard link' },
        { command: 'ls -l link', comment: '# Ver tipo de link' },
        { command: 'readlink link', comment: '# Destino do link' },
        { command: 'find . -type l', comment: '# Encontrar links' },
        { command: 'ln -sf origem link', comment: '# Forçar sobrescrever' },
      ],
      'Montagem e Desmontagem': [
        { command: 'mount', comment: '# Ver sistemas montados' },
        { command: 'mount /dev/sdb1 /mnt/dados', comment: '# Montar partição' },
        { command: 'umount /mnt/dados', comment: '# Desmontar' },
        {
          command: 'mount -t ntfs-3g /dev/sdb1 /mnt/windows',
          comment: '# NTFS',
        },
        {
          command: 'mount -o loop arquivo.iso /mnt/iso',
          comment: '# Imagem ISO',
        },
        { command: 'df -h', comment: '# Espaço montado' },
        { command: 'lsblk', comment: '# Dispositivos disponíveis' },
        { command: 'blkid', comment: '# UUID de partições' },
        { command: 'fstab', comment: '# Montagem automática' },
      ],
      'Quotas e Espaço': [
        { command: 'du -sh *', comment: '# Tamanho dos diretórios' },
        { command: 'du -h --max-depth=1', comment: '# Um nível' },
        {
          command: 'du -ah | sort -rh | head -10',
          comment: '# Maiores arquivos',
        },
        { command: 'df -i', comment: '# Inodes disponíveis' },
        { command: 'quota -u usuario', comment: '# Quotas do usuário' },
        { command: 'repquota /home', comment: '# Relatório de quotas' },
        { command: 'ncdu', comment: '# Análise interativa' },
      ],
    },
    useCase:
      'Use quando: Gerenciamento de armazenamento, organização de arquivos, backup',
  },

  // Card Compressão e Backup
  compressaoBackup: {
    title: '📦 Compressão e Backup',
    level: 'intermediario',
    id: 'compressao-backup',
    sections: {
      'Tar e Gzip': [
        {
          command: 'tar -czf backup.tar.gz diretorio/',
          comment: '# Compactar com gzip',
        },
        { command: 'tar -xzf backup.tar.gz', comment: '# Extrair gzip' },
        {
          command: 'tar -cjf backup.tar.bz2 diretorio/',
          comment: '# Compactar com bzip2',
        },
        { command: 'tar -xjf backup.tar.bz2', comment: '# Extrair bzip2' },
        { command: 'tar -tzf backup.tar.gz', comment: '# Listar conteúdo' },
        {
          command: 'tar -xzf backup.tar.gz -C /destino',
          comment: '# Extrair em diretório',
        },
        {
          command: 'tar --exclude="*.log" -czf backup.tar.gz diretorio/',
          comment: '# Excluir arquivos',
        },
        {
          command:
            'tar -czf - diretorio/ | ssh user@server "cat > backup.tar.gz"',
          comment: '# Backup remoto',
        },
      ],
      Zip: [
        { command: 'zip -r backup.zip diretorio/', comment: '# Criar ZIP' },
        { command: 'unzip backup.zip', comment: '# Extrair ZIP' },
        { command: 'unzip -l backup.zip', comment: '# Listar conteúdo' },
        {
          command: 'zip -r9 backup.zip diretorio/',
          comment: '# Máxima compressão',
        },
        { command: 'unzip -q backup.zip', comment: '# Extrair silencioso' },
        {
          command: 'zip -s 100m -r split.zip diretorio/',
          comment: '# Dividir em volumes',
        },
      ],
      'Rsync e Backup': [
        { command: 'rsync -avz origem/ destino/', comment: '# Sincronizar' },
        {
          command: 'rsync -avz --delete origem/ destino/',
          comment: '# Espelhar',
        },
        {
          command: 'rsync -avz --progress origem/ destino/',
          comment: '# Com progresso',
        },
        {
          command: 'rsync -avz --exclude="*.tmp" origem/ destino/',
          comment: '# Excluir padrão',
        },
        {
          command: 'rsync -avz -e ssh origem/ user@server:destino/',
          comment: '# Via SSH',
        },
        {
          command: 'rsync --dry-run -avz origem/ destino/',
          comment: '# Simulação',
        },
      ],
      'Backup Completo': [
        {
          command: 'dd if=/dev/sda of=backup.img bs=4M',
          comment: '# Clone de disco',
        },
        { command: 'rsnapshot daily', comment: '# Backup incremental' },
        {
          command: 'borg create --stats backup::arquivo /diretorio',
          comment: '# Backup deduplicado',
        },
        { command: 'restic backup /diretorio', comment: '# Backup moderno' },
        {
          command: 'kopia repository create /backup',
          comment: '# Repositório Kopia',
        },
      ],
    },
    useCase:
      'Use quando: Backup, compressão, transferência de arquivos, armazenamento',
  },

  // Card Monitoramento e Logs
  monitoramentoLogs: {
    title: '📊 Monitoramento e Logs',
    level: 'avancado',
    id: 'monitoramento-logs',
    sections: {
      'Visualização de Logs': [
        { command: 'tail -f /var/log/syslog', comment: '# Log em tempo real' },
        { command: 'tail -n 100 arquivo.log', comment: '# Últimas 100 linhas' },
        { command: 'head -n 50 arquivo.log', comment: '# Primeiras 50 linhas' },
        { command: 'less arquivo.log', comment: '# Navegar no log' },
        { command: 'grep "ERROR" arquivo.log', comment: '# Buscar erros' },
        {
          command: 'grep -i "error" arquivo.log',
          comment: '# Case insensitive',
        },
        {
          command: 'grep -n "erro" arquivo.log',
          comment: '# Com número da linha',
        },
        {
          command: 'grep -C 5 "erro" arquivo.log',
          comment: '# Contexto 5 linhas',
        },
        { command: 'zgrep "erro" arquivo.log.gz', comment: '# Buscar em gzip' },
      ],
      'Systemd Logs': [
        { command: 'journalctl', comment: '# Logs do sistema' },
        { command: 'journalctl -f', comment: '# Tempo real' },
        { command: 'journalctl -u nginx', comment: '# Logs do serviço' },
        { command: 'journalctl -p err', comment: '# Apenas erros' },
        { command: 'journalctl --since "2024-01-01"', comment: '# Desde data' },
        {
          command: 'journalctl --since "1 hour ago"',
          comment: '# Última hora',
        },
        { command: 'journalctl -k', comment: '# Logs do kernel' },
        { command: 'journalctl --disk-usage', comment: '# Uso de disco' },
      ],
      'Monitoramento de Recursos': [
        { command: 'vmstat 5', comment: '# Estatísticas VM' },
        { command: 'iostat -x 5', comment: '# Estatísticas I/O' },
        { command: 'sar -u 5 10', comment: '# CPU ao longo tempo' },
        { command: 'sar -r 5 10', comment: '# Memória' },
        { command: 'sar -n DEV 5 10', comment: '# Rede' },
        { command: 'nethogs', comment: '# Rede por processo' },
        { command: 'iftop', comment: '# Tráfego de rede' },
        { command: 'glances', comment: '# Monitor completo' },
      ],
      'Alertas e Notificações': [
        {
          command: 'watch -n 5 "ps aux | grep python"',
          comment: '# Monitorar comando',
        },
        {
          command: 'inotifywait -m -r /diretorio',
          comment: '# Monitorar mudanças',
        },
        {
          command:
            'tail -f log | grep "CRITICAL" | mail -s "Alerta" admin@domain.com',
          comment: '# Email de alerta',
        },
        {
          command: 'logger "Mensagem personalizada"',
          comment: '# Adicionar ao syslog',
        },
        { command: 'dmesg | grep -i error', comment: '# Erros do kernel' },
      ],
    },
    useCase:
      'Use quando: Troubleshooting, monitoramento, análise de logs, alertas',
  },

  // Card Segurança
  seguranca: {
    title: '🔒 Segurança',
    level: 'avancado',
    id: 'seguranca',
    sections: {
      'Hardening de Sistema': [
        { command: 'sudo passwd -l usuario', comment: '# Bloquear conta' },
        {
          command: 'sudo chage -E 2024-12-31 usuario',
          comment: '# Expirar conta',
        },
        { command: 'sudo visudo', comment: '# Editar sudoers' },
        {
          command: 'sudo sysctl -w net.ipv4.ip_forward=0',
          comment: '# Desabilitar IP forward',
        },
        {
          command: 'echo "1" | sudo tee /proc/sys/net/ipv4/ip_forward',
          comment: '# Habilitar IP forward',
        },
        {
          command: 'sudo sysctl -a | grep forward',
          comment: '# Ver configurações',
        },
        { command: 'sudo sysctl -p', comment: '# Aplicar /etc/sysctl.conf' },
      ],
      'SSH e Acesso Remoto': [
        { command: 'ssh-keygen -t rsa -b 4096', comment: '# Gerar chave SSH' },
        {
          command: 'ssh-copy-id user@server',
          comment: '# Copiar chave pública',
        },
        {
          command: 'ssh -i chave.pem user@server',
          comment: '# Conectar com chave',
        },
        { command: 'ssh -p 2222 user@server', comment: '# Porta diferente' },
        {
          command: 'ssh -L 8080:localhost:80 user@server',
          comment: '# Tunnel SSH',
        },
        { command: 'ssh -X user@server', comment: '# X11 forwarding' },
        { command: 'ssh -D 1080 user@server', comment: '# SOCKS proxy' },
      ],
      Criptografia: [
        { command: 'gpg -c arquivo', comment: '# Criptografar arquivo' },
        { command: 'gpg -d arquivo.gpg', comment: '# Descriptografar' },
        { command: 'gpg --gen-key', comment: '# Gerar par de chaves' },
        { command: 'gpg --list-keys', comment: '# Listar chaves' },
        {
          command: 'gpg --export -a nome > chave.pub',
          comment: '# Exportar chave pública',
        },
        { command: 'gpg --import chave.pub', comment: '# Importar chave' },
        {
          command: 'openssl enc -aes-256-cbc -in arquivo -out arquivo.enc',
          comment: '# OpenSSL AES',
        },
      ],
      'Análise de Segurança': [
        { command: 'sudo rkhunter --check', comment: '# Rootkit hunter' },
        { command: 'sudo chkrootkit', comment: '# Verificar rootkits' },
        {
          command: 'sudo lynis audit system',
          comment: '# Auditoria de segurança',
        },
        { command: 'nmap -sS -O target', comment: '# Scan de portas' },
        { command: 'nmap -A -T4 target', comment: '# Scan agressivo' },
        {
          command: 'sudo fail2ban-client status',
          comment: '# Status fail2ban',
        },
        { command: 'sudo ufw status verbose', comment: '# Firewall detalhado' },
      ],
    },
    useCase:
      'Use quando: Hardening, auditoria, criptografia, análise de segurança',
  },

  // Card Virtualização e Containers
  virtualizacaoContainers: {
    title: '🐳 Virtualização e Containers',
    level: 'avancado',
    id: 'virtualizacao-containers',
    sections: {
      'KVM/QEMU': [
        {
          command:
            'sudo virt-install --name vm1 --ram 2048 --vcpus 2 --disk size=20 --cdrom ubuntu.iso',
          comment: '# Criar VM',
        },
        { command: 'virsh list --all', comment: '# Listar VMs' },
        { command: 'virsh start vm1', comment: '# Iniciar VM' },
        { command: 'virsh shutdown vm1', comment: '# Desligar VM' },
        { command: 'virsh console vm1', comment: '# Console da VM' },
        {
          command: 'virsh dumpxml vm1 > vm1.xml',
          comment: '# Exportar configuração',
        },
        { command: 'virsh define vm1.xml', comment: '# Importar configuração' },
        { command: 'sudo modprobe kvm', comment: '# Carregar módulo KVM' },
        { command: 'lsmod | grep kvm', comment: '# Verificar KVM' },
      ],
      'Docker Básico': [
        {
          command: 'docker run -it ubuntu bash',
          comment: '# Container interativo',
        },
        { command: 'docker run -d nginx', comment: '# Container daemon' },
        { command: 'docker ps', comment: '# Containers ativos' },
        { command: 'docker ps -a', comment: '# Todos containers' },
        { command: 'docker images', comment: '# Imagens disponíveis' },
        { command: 'docker stop container_id', comment: '# Parar container' },
        { command: 'docker rm container_id', comment: '# Remover container' },
        { command: 'docker rmi image_id', comment: '# Remover imagem' },
      ],
      'Docker Avançado': [
        { command: 'docker run -p 8080:80 nginx', comment: '# Mapear porta' },
        {
          command: 'docker run -v /host:/container nginx',
          comment: '# Volume',
        },
        {
          command: 'docker run --name web -d nginx',
          comment: '# Nomear container',
        },
        {
          command: 'docker exec -it container_id bash',
          comment: '# Acessar container',
        },
        { command: 'docker logs container_id', comment: '# Logs do container' },
        {
          command: 'docker inspect container_id',
          comment: '# Informações detalhadas',
        },
        { command: 'docker stats', comment: '# Estatísticas em tempo real' },
      ],
      Podman: [
        {
          command: 'podman run -it ubuntu bash',
          comment: '# Container Podman',
        },
        { command: 'podman ps', comment: '# Containers Podman' },
        {
          command: 'podman generate systemd --name container --files --new',
          comment: '# Gerar serviço systemd',
        },
        { command: 'podman pod create --name mypod', comment: '# Criar pod' },
        {
          command: 'podman play kube pod.yaml',
          comment: '# Executar YAML Kubernetes',
        },
      ],
    },
    useCase:
      'Use quando: Virtualização, containers, orquestração, desenvolvimento isolado',
  },

  // Card Scripting e Automação
  scriptingAutomacao: {
    title: '⚡ Scripting e Automação',
    level: 'avancado',
    id: 'scripting-automacao',
    sections: {
      'Bash Scripting': [
        { command: '#!/bin/bash', comment: '# Shebang' },
        { command: 'set -euo pipefail', comment: '# Strict mode' },
        { command: 'VAR="valor"', comment: '# Variável' },
        { command: 'echo "${VAR}"', comment: '# Usar variável' },
        { command: 'if [ "$VAR" = "teste" ]; then', comment: '# Condicional' },
        { command: 'for i in {1..10}; do', comment: '# Loop for' },
        { command: 'while true; do', comment: '# Loop while' },
        { command: 'function nome() {', comment: '# Definir função' },
        { command: 'read -p "Digite: " VAR', comment: '# Ler input' },
      ],
      'Processamento de Texto': [
        {
          command: 'sed "s/antigo/novo/g" arquivo',
          comment: '# Substituir texto',
        },
        { command: 'awk "{print $1}" arquivo', comment: '# Primeira coluna' },
        { command: 'grep "padrão" arquivo', comment: '# Buscar padrão' },
        { command: 'cut -d"," -f1 arquivo.csv', comment: '# Extrair campo' },
        { command: 'sort arquivo', comment: '# Ordenar linhas' },
        { command: 'uniq arquivo', comment: '# Remover duplicatas' },
        {
          command: 'tr "[:lower:]" "[:upper:]" < arquivo',
          comment: '# Converter para maiúsculas',
        },
        { command: 'wc -l arquivo', comment: '# Contar linhas' },
        { command: 'paste arquivo1 arquivo2', comment: '# Juntar arquivos' },
      ],
      'Automação com Cron': [
        { command: 'crontab -e', comment: '# Editar crontab' },
        { command: '0 2 * * * /script.sh', comment: '# Diário às 2h' },
        { command: '*/15 * * * * comando', comment: '# A cada 15 minutos' },
        { command: '0 0 1 * * /script.sh', comment: '# Primeiro do mês' },
        { command: '0 0 * * 0 /script.sh', comment: '# Todo domingo' },
        { command: '@reboot /script.sh', comment: '# No boot' },
        { command: 'crontab -l', comment: '# Listar tarefas' },
        { command: 'crontab -r', comment: '# Remover todas' },
      ],
      'Ferramentas de Automação': [
        {
          command: 'ansible-playbook playbook.yml',
          comment: '# Executar Ansible',
        },
        { command: 'terraform apply', comment: '# Aplicar Terraform' },
        { command: 'puppet agent --test', comment: '# Testar Puppet' },
        { command: 'chef-solo recipe.rb', comment: '# Executar Chef' },
        { command: 'salt-call state.apply', comment: '# Aplicar Salt' },
        { command: 'make -j$(nproc)', comment: '# Compilar paralelo' },
        { command: 'watch -n 1 "comando"', comment: '# Repetir comando' },
      ],
    },
    useCase: 'Use quando: Automação de tarefas, scripts, deploy, configuração',
  },
};
