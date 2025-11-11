// Base de dados de troubleshooting Linux - ERRO → SOLUÇÃO
export const troubleshootingData = [
  // MONTAGEM DE DISPOSITIVOS
  {
    error: "USB/Dispositivo não aparece",
    errorMessage: "lsblk não mostra o dispositivo USB conectado",
    solution: {
      description: "Verificar se o sistema detectou o USB",
      commands: [
        "lsusb                    # Lista dispositivos USB",
        "sudo dmesg | tail -10    # Verifica mensagens do kernel",
        "sudo fdisk -l            # Lista todas as partições"
      ]
    }
  },
  {
    error: "Permissão negada ao montar USB",
    errorMessage: "mount: /mnt/usb: permission denied",
    solution: {
      description: "Montar com privilégios adequados",
      commands: [
        "sudo mount /dev/sdb1 /mnt/usb           # Monta com sudo",
        "sudo chown $USER:$USER /mnt/usb         # Define dono do ponto",
        "sudo usermod -aG disk $USER             # Adiciona ao grupo disk (reboot necessário)"
      ]
    }
  },
  {
    error: "Dispositivo ocupado/em uso",
    errorMessage: "umount: /mnt/usb: target is busy",
    solution: {
      description: "Identificar e liberar o dispositivo",
      commands: [
        "sudo lsof /mnt/usb                       # Mostra processos usando",
        "sudo fuser -km /mnt/usb                  # Mata processos usando",
        "sudo umount -f /mnt/usb                  # Força desmontagem",
        "sudo umount -l /mnt/usb                  # Desmontagem preguiçosa"
      ]
    }
  },
  {
    error: "Sistema de arquivos não reconhecido",
    errorMessage: "mount: unknown filesystem type 'ntfs'",
    solution: {
      description: "Instalar suporte e especificar tipo correto",
      commands: [
        "sudo apt install ntfs-3g                 # Instala suporte NTFS",
        "sudo mount -t ntfs-3g /dev/sdb1 /mnt/usb # Monta NTFS",
        "sudo mount -t vfat /dev/sdb1 /mnt/usb    # Monta FAT32",
        "sudo mount -t auto /dev/sdb1 /mnt/usb    # Detecta automaticamente"
      ]
    }
  },
  {
    error: "Sistema de arquivos corrompido",
    errorMessage: "mount: /dev/sdb1 is mounted read-only, or file system is corrupted",
    solution: {
      description: "Verificar e reparar o sistema de arquivos",
      commands: [
        "sudo fsck /dev/sdb1                      # Verifica e repara",
        "sudo fsck -y /dev/sdb1                   # Repara automaticamente (responde yes)",
        "sudo ntfsfix /dev/sdb1                   # Repara NTFS específico",
        "sudo mount -o ro /dev/sdb1 /mnt/usb      # Monta como somente leitura temporariamente"
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
        "ip link show                               # Verifica status interfaces",
        "sudo ip link set eth0 up                   # Ativa interface desativada",
        "ping 8.8.8.8                              # Testa conectividade IP",
        "ping google.com                           # Testa resolução DNS",
        "sudo dhclient eth0                        # Solicita IP via DHCP",
        "sudo systemctl restart NetworkManager     # Reinicia serviço de rede"
      ]
    }
  },
  {
    error: "DNS não funciona",
    errorMessage: "nslookup google.com falha ou sites não abrem por nome",
    solution: {
      description: "Configurar servidores DNS manualmente",
      commands: [
        "cat /etc/resolv.conf                      # Verifica DNS atual",
        "echo 'nameserver 8.8.8.8' | sudo tee /etc/resolv.conf     # Google DNS",
        "echo 'nameserver 1.1.1.1' | sudo tee -a /etc/resolv.conf   # Cloudflare DNS",
        "sudo resolvectl flush-caches              # Limpa cache DNS"
      ]
    }
  },
  {
    error: "WiFi não conecta",
    errorMessage: "Não foi possível conectar à rede WiFi ou Falha na autenticação",
    solution: {
      description: "Verificar hardware e reconectar",
      commands: [
        "rfkill list                                # Verifica se WiFi bloqueado",
        "sudo rfkill unblock wifi                   # Desbloqueia WiFi se necessário",
        "nmcli dev wifi list                        # Lista redes disponíveis",
        "nmcli dev wifi connect 'NOME_REDE' password 'SENHA'  # Conecta à rede",
        "sudo systemctl restart NetworkManager     # Reinicia serviço"
      ]
    }
  },
  {
    error: "Porta bloqueada pelo firewall",
    errorMessage: "connection refused ou timeout em porta específica",
    solution: {
      description: "Abrir porta no firewall UFW",
      commands: [
        "sudo ufw status                            # Verifica status firewall",
        "sudo ufw allow 80/tcp                      # Libera porta 80 (HTTP)",
        "sudo ufw allow 443/tcp                     # Libera porta 443 (HTTPS)",
        "sudo ufw allow 22/tcp                      # Libera porta 22 (SSH)",
        "sudo ufw disable                           # Desativa temporariamente (para teste)"
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
        "ps aux | grep nome_programa              # Encontra processo",
        "pgrep nome_programa                       # Retorna apenas o PID",
        "htop                                       # Monitor visual (use F9 para kill)",
        "kill -15 PID                               # Finaliza graciosamente",
        "kill -9 PID                                # Força kill (último recurso)",
        "killall nome_programa                      # Mata todos com mesmo nome"
      ]
    }
  },
  {
    error: "Serviço não inicia",
    errorMessage: "systemctl: Failed to start service ou Status: failed",
    solution: {
      description: "Verificar logs e reparar configuração",
      commands: [
        "systemctl status nginx                     # Verifica status detalhado",
        "sudo journalctl -u nginx -f                # Logs em tempo real",
        "sudo journalctl -u nginx -p err            # Apenas erros do serviço",
        "sudo nginx -t                              # Testa configuração nginx",
        "sudo systemctl restart nginx               # Reinicia o serviço",
        "sudo systemctl enable nginx                # Habilita início automático"
      ]
    }
  },
  {
    error: "Porta já está em uso",
    errorMessage: "Address already in use ou bind: Address already in use",
    solution: {
      description: "Identificar e liberar a porta",
      commands: [
        "sudo lsof -i :8080                        # Mostra processo na porta 8080",
        "sudo netstat -tulpn | grep :8080          # Socket listening na porta",
        "sudo ss -lptn | grep :8080                # Informações detalhadas",
        "sudo kill -15 PID                          # Finaliza processo usando porta",
        "sudo fuser -k 8080/tcp                    # Mata processo na porta"
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
        "df -h                                       # Espaço por filesystem",
        "du -sh * | sort -hr | head -10             # Maiores diretórios",
        "sudo apt clean                              # Limpa cache de pacotes",
        "sudo journalctl --vacuum-time=7d            # Remove logs antigos (7 dias)",
        "rm -rf ~/.cache/*                          # Limpa cache do usuário",
        "find / -type f -size +100M 2>/dev/null      # Arquivos >100MB"
      ]
    }
  },
  {
    error: "Permissão negada",
    errorMessage: "Permission denied ou Operação não permitida",
    solution: {
      description: "Ajustar permissões do arquivo/diretório",
      commands: [
        "ls -la /caminho/arquivo                    # Verifica permissões",
        "sudo chown usuario:grupo /caminho          # Muda dono e grupo",
        "sudo chmod 755 /caminho                    # Permissões padrão diretório",
        "sudo chmod 644 arquivo.txt                 # Permissões padrão arquivo",
        "sudo chmod +x script.sh                     # Torna executável",
        "groups $USER                               # Verifica grupos do usuário"
      ]
    }
  },
  {
    error: "Inodes esgotados",
    errorMessage: "No space left on device (mas df mostra espaço livre)",
    solution: {
      description: "Verificar e liberar inodes",
      commands: [
        "df -i                                       # Verifica inodes disponíveis",
        "sudo find /tmp -type f -delete              # Remove arquivos temporários",
        "sudo find /var/log -name '*.log.*' -delete  # Remove logs rotacionados",
        "sudo find / -type f | wc -l                 # Conta total de arquivos"
      ]
    }
  },
  {
    error: "Disco readonly",
    errorMessage: "Read-only file system ou Cannot write to filesystem",
    solution: {
      description: "Remontar como leitura/escrita",
      commands: [
        "mount | grep ' / '                         # Verifica se root está readonly",
        "sudo mount -o remount,rw /                 # Remonta como leitura/escrita",
        "sudo fsck -f /                              # Força checagem disco root",
        "sudo dmesg | grep -i error                  # Verifica erros no kernel"
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
        "sudo dmesg -T                               # Logs do kernel com timestamps",
        "sudo journalctl -k -f                       # Logs do kernel em tempo real",
        "sudo sysctl kernel.panic=60                 # Auto-reboot após panic (60s)",
        "cat /var/crash/*                            # Arquivos de crash se existirem"
      ]
    }
  },
  {
    error: "Boot falhou",
    errorMessage: "GRUB rescue mode ou Boot loader não encontrado",
    solution: {
      description: "Reparar boot e GRUB",
      commands: [
        "sudo grub-install /dev/sda                 # Reinstala GRUB",
        "sudo update-grub                            # Atualiza menu GRUB",
        "sudo efibootmgr -v                          # Verifica boot entries UEFI",
        "sudo boot-repair                            # Ferramenta de reparo (se instalada)"
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
        "free -h                                     # Uso atual de memória",
        "echo 1 | sudo tee /proc/sys/vm/drop_caches # Limpa cache de memória",
        "sudo swapoff -a && sudo swapon -a          # Reativa swap",
        "ps aux --sort=-%mem | head -10             # Top 10 processos memória",
        "kill -15 PID                                # Finaliza processo usando muita memória"
      ]
    }
  }
];