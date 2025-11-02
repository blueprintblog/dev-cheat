export const devsecopsCommands = {
  // Nível Básico
  sshBasico: {
    title: '🔑 SSH Hardening',
    level: 'basico',
    useCase: 'Configurar acesso remoto seguro e hardening de servidores SSH',
    sections: {
      'Hardening Básico': [
        {
          command: 'sudo nano /etc/ssh/sshd_config',
          comment: '# Edita configuração',
        },
        { command: 'Port 2222', comment: '# Muda porta padrão' },
        { command: 'PermitRootLogin no', comment: '# Bloqueia root' },
        {
          command: 'PasswordAuthentication no',
          comment: '# Desabilita senhas',
        },
        { command: 'PubkeyAuthentication yes', comment: '# Habilita chaves' },
        { command: 'Protocol 2', comment: '# Força protocolo 2' },
        {
          command: 'sudo systemctl restart sshd',
          comment: '# Reinicia serviço',
        },
      ],
      'Chaves SSH': [
        {
          command: 'ssh-keygen -t ed25519 -b 4096',
          comment: '# Gera chave forte',
        },
        {
          command: 'ssh-copy-id -i ~/.ssh/id_ed25519.pub user@host',
          comment: '# Copia chave',
        },
        {
          command: 'chmod 600 ~/.ssh/id_ed25519',
          comment: '# Protege chave privada',
        },
        {
          command: 'chmod 644 ~/.ssh/id_ed25519.pub',
          comment: '# Permissão pública',
        },
      ],
    },
  },

  sslBasico: {
    title: '🔐 SSL/TLS Management',
    level: 'basico',
    useCase: 'Gerenciar certificados SSL/TLS para comunicação segura',
    sections: {
      'OpenSSL - Gerar Certificados': [
        {
          command: 'openssl genrsa -out private.key 2048',
          comment: '# Gera chave privada',
        },
        {
          command: 'openssl rsa -in private.key -pubout -out public.key',
          comment: '# Extrai pública',
        },
        {
          command: 'openssl req -new -key private.key -out certificate.csr',
          comment: '# Gera CSR',
        },
        {
          command:
            'openssl x509 -req -days 365 -in certificate.csr -signkey private.key -out certificate.crt',
          comment: '# Gera certificado',
        },
        {
          command: 'openssl genrsa -aes256 -out private-encrypted.key 2048',
          comment: '# Chave criptografada',
        },
      ],
      'Verificação de Certificados': [
        {
          command: 'openssl x509 -in certificate.crt -text -noout',
          comment: '# Detalhes do cert',
        },
        {
          command: 'openssl rsa -in private.key -check',
          comment: '# Valida chave',
        },
        {
          command: 'openssl req -in certificate.csr -text -noout',
          comment: '# Detalhes CSR',
        },
        {
          command: 'openssl verify certificate.crt',
          comment: '# Verifica cert',
        },
      ],
      "Let's Encrypt": [
        {
          command: 'sudo apt install certbot python3-certbot-nginx',
          comment: '# Instala certbot',
        },
        {
          command: 'sudo certbot --nginx -d example.com -d www.example.com',
          comment: '# Gera cert',
        },
        {
          command: 'sudo certbot renew --dry-run',
          comment: '# Testa renovação',
        },
        { command: 'sudo crontab -e', comment: '# Agenda renovação' },
      ],
    },
  },

  // Nível Intermediário
  firewallIntermediario: {
    title: '🛡️ Firewall e Network Security',
    level: 'intermediario',
    useCase: 'Configurar firewalls e proteger a rede contra ataques',
    sections: {
      'Configuração Básica': [
        { command: 'sudo ufw enable', comment: '# Habilita firewall' },
        { command: 'sudo ufw disable', comment: '# Desabilita firewall' },
        { command: 'sudo ufw status', comment: '# Status do firewall' },
        { command: 'sudo ufw status verbose', comment: '# Status detalhado' },
        {
          command: 'sudo ufw default deny incoming',
          comment: '# Bloqueia entrada',
        },
        {
          command: 'sudo ufw default allow outgoing',
          comment: '# Permite saída',
        },
      ],
      'Regras de Portas': [
        { command: 'sudo ufw allow 22/tcp', comment: '# Permite SSH' },
        { command: 'sudo ufw allow 80/tcp', comment: '# Permite HTTP' },
        { command: 'sudo ufw allow 443/tcp', comment: '# Permite HTTPS' },
        { command: 'sudo ufw allow 2222/tcp', comment: '# SSH customizado' },
        { command: 'sudo ufw deny 23/tcp', comment: '# Bloqueia Telnet' },
      ],
      'Regras Avançadas': [
        {
          command: 'sudo ufw allow from 192.168.1.0/24',
          comment: '# Permite rede',
        },
        {
          command: 'sudo ufw allow from 1.2.3.4 to any port 22',
          comment: '# IP específico',
        },
        { command: 'sudo ufw delete allow 80/tcp', comment: '# Remove regra' },
        { command: 'sudo ufw reset', comment: '# Reseta firewall' },
      ],
    },
  },

  scanIntermediario: {
    title: '🔍 Vulnerability Scanning',
    level: 'intermediario',
    useCase: 'Identificar vulnerabilidades e realizar testes de segurança',
    sections: {
      'Varredura Básica': [
        { command: 'nmap -sS target.com', comment: '# SYN scan' },
        { command: 'nmap -sV target.com', comment: '# Detecta versões' },
        { command: 'nmap -O target.com', comment: '# Detecta OS' },
        { command: 'nmap -p 1-65535 target.com', comment: '# Todas portas' },
        { command: 'nmap -A target.com', comment: '# Scan agressivo' },
      ],
      'Varredura Avançada': [
        {
          command: 'nmap -sS -sV -O -p- target.com',
          comment: '# Scan completo',
        },
        { command: 'nmap -T4 -A target.com', comment: '# Timing agressivo' },
        {
          command: 'nmap --script vuln target.com',
          comment: '# Scan vulnerabilidades',
        },
        {
          command: 'nmap -oN scan.txt target.com',
          comment: '# Salva resultado',
        },
      ],
      'Scripts NSE': [
        {
          command: 'nmap --script smb-vuln-ms17-010 target.com',
          comment: '# EternalBlue',
        },
        {
          command: 'nmap --script ssl-heartbleed target.com',
          comment: '# Heartbleed',
        },
        {
          command: 'nmap --script http-sql-injection target.com',
          comment: '# SQL Injection',
        },
      ],
      'Nikto - Web Scanner': [
        { command: 'nikto -h http://target.com', comment: '# Scan básico' },
        {
          command: 'nikto -h https://target.com -ssl',
          comment: '# Scan HTTPS',
        },
        {
          command: 'nikto -h target.com -o scan.txt',
          comment: '# Salva resultado',
        },
        {
          command: 'nikto -h target.com -Tuning 9',
          comment: '# Testes específicos',
        },
      ],
    },
  },

  // Nível Avançado
  sshAvancado: {
    title: '🔑 Segurança Avançada SSH',
    level: 'avancado',
    useCase: 'Implementar proteções avançadas contra ataques SSH',
    sections: {
      'Limitações de Acesso': [
        { command: 'AllowUsers user1 user2', comment: '# Usuários permitidos' },
        { command: 'AllowGroups sshusers', comment: '# Grupos permitidos' },
        { command: 'DenyUsers root admin', comment: '# Usuários bloqueados' },
        { command: 'MaxAuthTries 3', comment: '# Tentativas máximas' },
        { command: 'MaxSessions 2', comment: '# Sessões simultâneas' },
      ],
      'Timeout e Segurança': [
        { command: 'ClientAliveInterval 300', comment: '# Keep-alive 5min' },
        { command: 'ClientAliveCountMax 2', comment: '# Desconecta inativos' },
        { command: 'LoginGraceTime 60', comment: '# Tempo de login' },
        { command: 'UsePAM yes', comment: '# Autenticação PAM' },
      ],
      'Fail2Ban Integration': [
        { command: 'sudo apt install fail2ban', comment: 'Instala fail2ban' },
        {
          command: 'sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local',
          comment: 'Copia config',
        },
        { command: 'sudo nano /etc/fail2ban/jail.local', comment: 'Configura' },
        {
          command: 'sudo systemctl restart fail2ban',
          comment: 'Reinicia serviço',
        },
      ],
    },
  },

  sslAvancado: {
    title: '🔐 Testes SSL/TLS',
    level: 'avancado',
    useCase: 'Validar configurações SSL e testar segurança HTTPS',
    sections: {
      'Testes de Conectividade': [
        {
          command: 'openssl s_client -connect example.com:443',
          comment: '# Conexão SSL',
        },
        {
          command:
            'openssl s_client -connect example.com:443 -servername example.com',
          comment: '# SNI',
        },
        {
          command:
            'echo | openssl s_client -connect example.com:443 2>/dev/null | openssl x509 -noout -dates',
          comment: '# Validade cert',
        },
        {
          command: 'openssl s_client -connect example.com:443 -showcerts',
          comment: '# Mostra cadeia',
        },
      ],
      'Verificação de Segurança': [
        {
          command: 'nmap --script ssl-enum-ciphers -p 443 example.com',
          comment: '# Ciphers suportados',
        },
        {
          command: 'testssl.sh https://example.com',
          comment: '# Teste completo',
        },
        { command: 'curl -I https://example.com', comment: '# Headers HTTPS' },
        {
          command: 'curl -v --insecure https://example.com',
          comment: '# Debug SSL',
        },
      ],
      'Configuração Web Server': [
        { command: 'sudo a2enmod ssl', comment: '# Apache SSL' },
        {
          command: 'sudo a2ensite default-ssl',
          comment: '# Habilita site SSL',
        },
        { command: 'sudo nginx -t', comment: '# Testa config Nginx' },
        {
          command: 'sudo systemctl reload nginx',
          comment: '# Recarrega Nginx',
        },
      ],
    },
  },

  auditAvancado: {
    title: '📋 Security Auditing',
    level: 'avancado',
    useCase: 'Monitorar atividades suspeitas e investigar incidentes',
    sections: {
      'Logs de Segurança': [
        {
          command: 'sudo tail -f /var/log/auth.log',
          comment: '# Logs de autenticação',
        },
        {
          command: 'sudo tail -f /var/log/secure',
          comment: '# Logs CentOS/RHEL',
        },
        {
          command: 'sudo journalctl -u sshd -f',
          comment: '# Logs SSH systemd',
        },
        {
          command: 'sudo grep "Failed password" /var/log/auth.log',
          comment: '# Falhas de login',
        },
      ],
      'Análise de Logs': [
        { command: 'sudo lastb', comment: '# Logins falhos' },
        { command: 'sudo last', comment: '# Últimos logins' },
        { command: 'sudo lastlog', comment: '# Último login por usuário' },
        {
          command: 'sudo ausearch -k USER_LOGIN',
          comment: '# Auditoria auditd',
        },
      ],
      'Monitoramento em Tempo Real': [
        {
          command: 'sudo auditctl -w /etc/passwd -p wa -k passwd_changes',
          comment: '# Monitora passwd',
        },
        {
          command: 'sudo auditctl -w /etc/shadow -p wa -k shadow_changes',
          comment: '# Monitora shadow',
        },
        {
          command: 'sudo ausearch -k passwd_changes',
          comment: '# Busca eventos',
        },
        { command: 'sudo aureport -m', comment: '# Relatório de modificações' },
      ],
      'Integridade de Arquivos': [
        { command: 'sudo apt install aide', comment: '# Instala AIDE' },
        { command: 'sudo aide --init', comment: '# Inicializa banco' },
        {
          command: 'sudo mv /var/lib/aide/aide.db.new /var/lib/aide/aide.db',
          comment: '# Ativa banco',
        },
        { command: 'sudo aide --check', comment: '# Verifica integridade' },
        { command: 'sudo aide --update', comment: '# Atualiza banco' },
      ],
      'Permissões e SUID': [
        { command: 'find / -perm -4000 -type f', comment: '# Arquivos SUID' },
        { command: 'find / -perm -2000 -type f', comment: '# Arquivos SGID' },
        {
          command: 'find / -type f -perm /6000 -ls',
          comment: '# SUID/SGID detalhado',
        },
        {
          command:
            'find / -writable -type f ! -path "/proc/*" ! -path "/sys/*"',
          comment: '# Arquivos graváveis',
        },
      ],
    },
  },

  cryptoAvancado: {
    title: '🔐 Encryption Tools',
    level: 'avancado',
    useCase: 'Proteger dados sensíveis com criptografia forte',
    sections: {
      'GPG - Gerar Chaves': [
        { command: 'gpg --full-generate-key', comment: '# Gera par de chaves' },
        { command: 'gpg --list-keys', comment: '# Lista chaves públicas' },
        {
          command: 'gpg --list-secret-keys',
          comment: '# Lista chaves privadas',
        },
        {
          command: 'gpg --armor --export user@email.com',
          comment: '# Exporta pública',
        },
        {
          command: 'gpg --armor --export-secret-keys user@email.com',
          comment: '# Exporta privada',
        },
      ],
      'Criptografar e Descriptografar': [
        {
          command: 'gpg --encrypt --recipient user@email.com file.txt',
          comment: '# Criptografa',
        },
        { command: 'gpg --decrypt file.txt.gpg', comment: '# Descriptografa' },
        { command: 'gpg --sign file.txt', comment: '# Assina arquivo' },
        {
          command: 'gpg --verify file.txt.sig',
          comment: '# Verifica assinatura',
        },
        {
          command: 'gpg --symmetric file.txt',
          comment: '# Criptografia simétrica',
        },
      ],
      'Gerenciamento de Chaves': [
        { command: 'gpg --import public.key', comment: '# Importa chave' },
        {
          command: 'gpg --delete-key user@email.com',
          comment: '# Remove pública',
        },
        {
          command: 'gpg --delete-secret-key user@email.com',
          comment: '# Remove privada',
        },
        { command: 'gpg --edit-key user@email.com', comment: '# Edita chave' },
      ],
      'OpenSSL Crypto': [
        {
          command: 'openssl enc -aes-256-cbc -in file.txt -out file.enc',
          comment: '# Criptografa AES',
        },
        {
          command: 'openssl enc -d -aes-256-cbc -in file.enc -out file.txt',
          comment: '# Descriptografa',
        },
        { command: 'openssl dgst -sha256 file.txt', comment: '# Hash SHA256' },
        {
          command:
            'openssl rsautl -encrypt -pubin -inkey public.pem -in data.txt -out encrypted.dat',
          comment: '# RSA encrypt',
        },
      ],
      'Hash e Verificação': [
        { command: 'sha256sum file.txt', comment: '# Hash SHA256' },
        { command: 'sha512sum file.txt', comment: '# Hash SHA512' },
        { command: 'md5sum file.txt', comment: '# Hash MD5' },
        {
          command: 'sha256sum *.txt > checksums.txt',
          comment: '# Gera checksums',
        },
        {
          command: 'sha256sum -c checksums.txt',
          comment: '# Verifica integridade',
        },
      ],
    },
  },

  iptablesAvancado: {
    title: '🛡️ iptables Avançado',
    level: 'avancado',
    useCase: 'Configurar firewall granular e proteção contra ataques',
    sections: {
      'Regras Básicas': [
        { command: 'sudo iptables -L', comment: '# Lista regras' },
        { command: 'sudo iptables -L -n -v', comment: '# Lista detalhada' },
        { command: 'sudo iptables -F', comment: '# Limpa regras' },
        { command: 'sudo iptables -X', comment: '# Remove chains' },
        {
          command: 'sudo iptables -P INPUT DROP',
          comment: '# Política padrão',
        },
      ],
      'Regras de Entrada': [
        {
          command: 'sudo iptables -A INPUT -i lo -j ACCEPT',
          comment: '# Aceita localhost',
        },
        {
          command:
            'sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT',
          comment: '# Conexões estabelecidas',
        },
        {
          command: 'sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT',
          comment: '# Permite SSH',
        },
        {
          command: 'sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT',
          comment: '# Permite HTTP',
        },
        {
          command: 'sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT',
          comment: '# Permite HTTPS',
        },
      ],
      'Proteção e Logging': [
        {
          command:
            'sudo iptables -A INPUT -m limit --limit 5/min -j LOG --log-prefix "iptables: "',
          comment: '# Logging limitado',
        },
        {
          command:
            'sudo iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW -m recent --set',
          comment: '# Track SSH',
        },
        {
          command:
            'sudo iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW -m recent --update --seconds 60 --hitcount 4 -j DROP',
          comment: '# Proteção brute force',
        },
        {
          command: 'sudo iptables-save > /etc/iptables/rules.v4',
          comment: '# Salva regras',
        },
      ],
    },
  },
};
