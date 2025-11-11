// Base de dados de troubleshooting Linux - ERRO → SOLUÇÃO
export const troubleshootingData = [
  // MONTAGEM DE DISPOSITIVOS
  {
    error: "USB/Dispositivo não aparece",
    errorMessage: "lsblk não mostra o dispositivo USB conectado",
    solution: {
      description: "Verificar se o sistema detectou o USB",
      commands: [
        { command: "lsusb", comment: "# Lista dispositivos USB" },
        { command: "sudo dmesg | tail -10", comment: "# Verifica mensagens do kernel" },
        { command: "sudo fdisk -l", comment: "# Lista todas as partições" }
      ]
    }
  },
  {
    error: "Permissão negada ao montar USB",
    errorMessage: "mount: /mnt/usb: permission denied",
    solution: {
      description: "Montar com privilégios adequados",
      commands: [
        { command: "sudo mount /dev/sdb1 /mnt/usb", comment: "# Monta com sudo" },
        { command: "sudo chown $USER:$USER /mnt/usb", comment: "# Define dono do ponto" },
        { command: "sudo usermod -aG disk $USER", comment: "# Adiciona ao grupo disk (reboot necessário)" }
      ]
    }
  },
  {
    error: "Dispositivo ocupado/em uso",
    errorMessage: "umount: /mnt/usb: target is busy",
    solution: {
      description: "Identificar e liberar o dispositivo",
      commands: [
        { command: "sudo lsof /mnt/usb", comment: "# Mostra processos usando" },
        { command: "sudo fuser -km /mnt/usb", comment: "# Mata processos usando" },
        { command: "sudo umount -f /mnt/usb", comment: "# Força desmontagem" },
        { command: "sudo umount -l /mnt/usb", comment: "# Desmontagem preguiçosa" }
      ]
    }
  },
  {
    error: "Sistema de arquivos não reconhecido",
    errorMessage: "mount: unknown filesystem type 'ntfs'",
    solution: {
      description: "Instalar suporte e especificar tipo correto",
      commands: [
        { command: "sudo apt install ntfs-3g", comment: "# Instala suporte NTFS" },
        { command: "sudo mount -t ntfs-3g /dev/sdb1 /mnt/usb", comment: "# Monta NTFS" },
        { command: "sudo mount -t vfat /dev/sdb1 /mnt/usb", comment: "# Monta FAT32" },
        { command: "sudo mount -t auto /dev/sdb1 /mnt/usb", comment: "# Detecta automaticamente" }
      ]
    }
  },
  {
    error: "Sistema de arquivos corrompido",
    errorMessage: "mount: /dev/sdb1 is mounted read-only, or file system is corrupted",
    solution: {
      description: "Verificar e reparar o sistema de arquivos",
      commands: [
        { command: "sudo fsck /dev/sdb1", comment: "# Verifica e repara" },
        { command: "sudo fsck -y /dev/sdb1", comment: "# Repara automaticamente (responde yes)" },
        { command: "sudo ntfsfix /dev/sdb1", comment: "# Repara NTFS específico" },
        { command: "sudo mount -o ro /dev/sdb1 /mnt/usb", comment: "# Monta como somente leitura temporariamente" }
      ]
    }
  },

  // REDE E CONECTIVIDADE
  {
    error: "Sem conexão com internet",
    errorMessage: "ping: unknown host ou Sites não abrem",
    solution: {
      description: "Verificar interface e configuração de rede",
      commands: [
        { command: "ip link show", comment: "# Verifica status interfaces" },
        { command: "sudo ip link set eth0 up", comment: "# Ativa interface desativada" },
        { command: "ping 8.8.8.8", comment: "# Testa conectividade IP" },
        { command: "ping google.com", comment: "# Testa resolução DNS" },
        { command: "sudo dhclient eth0", comment: "# Solicita IP via DHCP" },
        { command: "sudo systemctl restart NetworkManager", comment: "# Reinicia serviço de rede" }
      ]
    }
  },
  {
    error: "DNS não funciona",
    errorMessage: "nslookup google.com falha ou sites não abrem por nome",
    solution: {
      description: "Configurar servidores DNS manualmente",
      commands: [
        { command: "cat /etc/resolv.conf", comment: "# Verifica DNS atual" },
        { command: "echo 'nameserver 8.8.8.8' | sudo tee /etc/resolv.conf", comment: "# Google DNS" },
        { command: "echo 'nameserver 1.1.1.1' | sudo tee -a /etc/resolv.conf", comment: "# Cloudflare DNS" },
        { command: "sudo resolvectl flush-caches", comment: "# Limpa cache DNS" }
      ]
    }
  },
  {
    error: "WiFi não conecta",
    errorMessage: "Não foi possível conectar à rede WiFi ou Falha na autenticação",
    solution: {
      description: "Verificar hardware e reconectar",
      commands: [
        { command: "rfkill list", comment: "# Verifica se WiFi bloqueado" },
        { command: "sudo rfkill unblock wifi", comment: "# Desbloqueia WiFi se necessário" },
        { command: "nmcli dev wifi list", comment: "# Lista redes disponíveis" },
        { command: "nmcli dev wifi connect 'NOME_REDE' password 'SENHA'", comment: "# Conecta à rede" },
        { command: "sudo systemctl restart NetworkManager", comment: "# Reinicia serviço" }
      ]
    }
  },
  {
    error: "Porta bloqueada pelo firewall",
    errorMessage: "connection refused ou timeout em porta específica",
    solution: {
      description: "Abrir porta no firewall UFW",
      commands: [
        { command: "sudo ufw status", comment: "# Verifica status firewall" },
        { command: "sudo ufw allow 80/tcp", comment: "# Libera porta 80 (HTTP)" },
        { command: "sudo ufw allow 443/tcp", comment: "# Libera porta 443 (HTTPS)" },
        { command: "sudo ufw allow 22/tcp", comment: "# Libera porta 22 (SSH)" },
        { command: "sudo ufw disable", comment: "# Desativa temporariamente (para teste)" }
      ]
    }
  },

  // PROCESSOS E SERVIÇOS
  {
    error: "Aplicação/processo travado",
    errorMessage: "Programa não responde ou está consumindo 100% CPU",
    solution: {
      description: "Localizar e finalizar o processo",
      commands: [
        { command: "ps aux | grep nome_programa", comment: "# Encontra processo" },
        { command: "pgrep nome_programa", comment: "# Retorna apenas o PID" },
        { command: "htop", comment: "# Monitor visual (use F9 para kill)" },
        { command: "kill -15 PID", comment: "# Finaliza graciosamente" },
        { command: "kill -9 PID", comment: "# Força kill (último recurso)" },
        { command: "killall nome_programa", comment: "# Mata todos com mesmo nome" }
      ]
    }
  },
  {
    error: "Serviço não inicia",
    errorMessage: "systemctl: Failed to start service ou Status: failed",
    solution: {
      description: "Verificar logs e reparar configuração",
      commands: [
        { command: "systemctl status nginx", comment: "# Verifica status detalhado" },
        { command: "sudo journalctl -u nginx -f", comment: "# Logs em tempo real" },
        { command: "sudo journalctl -u nginx -p err", comment: "# Apenas erros do serviço" },
        { command: "sudo nginx -t", comment: "# Testa configuração nginx" },
        { command: "sudo systemctl restart nginx", comment: "# Reinicia o serviço" },
        { command: "sudo systemctl enable nginx", comment: "# Habilita início automático" }
      ]
    }
  },
  {
    error: "Porta já está em uso",
    errorMessage: "Address already in use ou bind: Address already in use",
    solution: {
      description: "Identificar e liberar a porta",
      commands: [
        { command: "sudo lsof -i :8080", comment: "# Mostra processo na porta 8080" },
        { command: "sudo netstat -tulpn | grep :8080", comment: "# Socket listening na porta" },
        { command: "sudo ss -lptn | grep :8080", comment: "# Informações detalhadas" },
        { command: "sudo kill -15 PID", comment: "# Finaliza processo usando porta" },
        { command: "sudo fuser -k 8080/tcp", comment: "# Mata processo na porta" }
      ]
    }
  },

  // DISCO E ESPAÇO
  {
    error: "Disco cheio",
    errorMessage: "No space left on device ou Cannot create file",
    solution: {
      description: "Analisar uso e limpar espaço",
      commands: [
        { command: "df -h", comment: "# Espaço por filesystem" },
        { command: "du -sh * | sort -hr | head -10", comment: "# Maiores diretórios" },
        { command: "sudo apt clean", comment: "# Limpa cache de pacotes" },
        { command: "sudo journalctl --vacuum-time=7d", comment: "# Remove logs antigos (7 dias)" },
        { command: "rm -rf ~/.cache/*", comment: "# Limpa cache do usuário" },
        { command: "find / -type f -size +100M 2>/dev/null", comment: "# Arquivos >100MB" }
      ]
    }
  },
  {
    error: "Permissão negada",
    errorMessage: "Permission denied ou Operação não permitida",
    solution: {
      description: "Ajustar permissões do arquivo/diretório",
      commands: [
        { command: "ls -la /caminho/arquivo", comment: "# Verifica permissões" },
        { command: "sudo chown usuario:grupo /caminho", comment: "# Muda dono e grupo" },
        { command: "sudo chmod 755 /caminho", comment: "# Permissões padrão diretório" },
        { command: "sudo chmod 644 arquivo.txt", comment: "# Permissões padrão arquivo" },
        { command: "sudo chmod +x script.sh", comment: "# Torna executável" },
        { command: "groups $USER", comment: "# Verifica grupos do usuário" }
      ]
    }
  },
  {
    error: "Inodes esgotados",
    errorMessage: "No space left on device (mas df mostra espaço livre)",
    solution: {
      description: "Verificar e liberar inodes",
      commands: [
        { command: "df -i", comment: "# Verifica inodes disponíveis" },
        { command: "sudo find /tmp -type f -delete", comment: "# Remove arquivos temporários" },
        { command: "sudo find /var/log -name '*.log.*' -delete", comment: "# Remove logs rotacionados" },
        { command: "sudo find / -type f | wc -l", comment: "# Conta total de arquivos" }
      ]
    }
  },
  {
    error: "Disco readonly",
    errorMessage: "Read-only file system ou Cannot write to filesystem",
    solution: {
      description: "Remontar como leitura/escrita",
      commands: [
        { command: "mount | grep ' / '", comment: "# Verifica se root está readonly" },
        { command: "sudo mount -o remount,rw /", comment: "# Remonta como leitura/escrita" },
        { command: "sudo fsck -f /", comment: "# Força checagem disco root" },
        { command: "sudo dmesg | grep -i error", comment: "# Verifica erros no kernel" }
      ]
    }
  },

  // KERNEL E BOOT
  {
    error: "Kernel Panic",
    errorMessage: "Kernel panic - not syncing ou Fatal exception",
    solution: {
      description: "Analisar e recuperar do kernel panic",
      commands: [
        { command: "sudo dmesg -T", comment: "# Logs do kernel com timestamps" },
        { command: "sudo journalctl -k -f", comment: "# Logs do kernel em tempo real" },
        { command: "sudo sysctl kernel.panic=60", comment: "# Auto-reboot após panic (60s)" },
        { command: "cat /var/crash/*", comment: "# Arquivos de crash se existirem" }
      ]
    }
  },
  {
    error: "Boot falhou",
    errorMessage: "GRUB rescue mode ou Boot loader não encontrado",
    solution: {
      description: "Reparar boot e GRUB",
      commands: [
        { command: "sudo grub-install /dev/sda", comment: "# Reinstala GRUB" },
        { command: "sudo update-grub", comment: "# Atualiza menu GRUB" },
        { command: "sudo efibootmgr -v", comment: "# Verifica boot entries UEFI" },
        { command: "sudo boot-repair", comment: "# Ferramenta de reparo (se instalada)" }
      ]
    }
  },

  // MEMÓRIA
  {
    error: "Memória insuficiente",
    errorMessage: "Cannot allocate memory ou Out of memory",
    solution: {
      description: "Liberar memória e otimizar uso",
      commands: [
        { command: "free -h", comment: "# Uso atual de memória" },
        { command: "echo 1 | sudo tee /proc/sys/vm/drop_caches", comment: "# Limpa cache de memória" },
        { command: "sudo swapoff -a && sudo swapon -a", comment: "# Reativa swap" },
        { command: "ps aux --sort=-%mem | head -10", comment: "# Top 10 processos memória" },
        { command: "kill -15 PID", comment: "# Finaliza processo usando muita memória" }
      ]
    }
  }
];