export const networkCommands = {
  diagnostico: {
    title: '🔍 Diagnóstico Básico',
    level: 'basico',
    sections: {
      Conectividade: [
        {
          command: 'ping -c 4 google.com',
          comment: '# Testar conectividade (4 pacotes)',
        },
        {
          command: 'ping -i 0.5 192.168.1.1',
          comment: '# Ping rápido (intervalo 0.5s)',
        },
        {
          command: 'traceroute google.com',
          comment: '# Rota até destino',
        },
        {
          command: 'mtr google.com',
          comment: '# Traceroute contínuo',
        },
        {
          command: 'arp -a',
          comment: '# Tabela ARP',
        },
      ],
      'Informações de Interface': [
        {
          command: 'ip addr show',
          comment: '# Interfaces e IPs',
        },
        {
          command: 'ip link set eth0 up',
          comment: '# Ativar interface',
        },
        {
          command: 'ethtool eth0',
          comment: '# Detalhes da interface',
        },
        {
          command: 'ip -s link show eth0',
          comment: '# Estatísticas da interface',
        },
        {
          command: 'ss -tuln',
          comment: '# Portas abertas',
        },
      ],
      DNS: [
        {
          command: 'nslookup google.com',
          comment: '# Consulta DNS',
        },
        {
          command: 'dig google.com ANY',
          comment: '# Todos os registros',
        },
        {
          command: 'dig +trace google.com',
          comment: '# Rastrear rota DNS',
        },
        {
          command: 'host -t mx google.com',
          comment: '# Registros MX',
        },
        {
          command: 'systemd-resolve --status',
          comment: '# Status DNS do sistema',
        },
      ],
    },
    useCase:
      'Use quando: Precisa diagnosticar problemas de conectividade, verificar configurações de rede ou resolver problemas de DNS',
  },
  analise: {
    title: '📊 Análise de Tráfego',
    level: 'intermediario',
    sections: {
      tcpdump: [
        {
          command: 'sudo tcpdump -i eth0',
          comment: '# Capturar tráfego eth0',
        },
        {
          command: 'sudo tcpdump -i eth0 -n',
          comment: '# Sem resolução DNS',
        },
        {
          command: 'sudo tcpdump -i eth0 port 80',
          comment: '# Filtrar porta 80',
        },
        {
          command: 'sudo tcpdump -i eth0 host 192.168.1.100',
          comment: '# Filtrar host específico',
        },
        {
          command: 'sudo tcpdump -i eth0 -w capture.pcap',
          comment: '# Salvar para arquivo',
        },
        {
          command: 'sudo tcpdump -r capture.pcap -A',
          comment: '# Ler arquivo com ASCII',
        },
      ],
      'Wireshark CLI (tshark)': [
        {
          command: 'tshark -i eth0',
          comment: '# Captura em tempo real',
        },
        {
          command: 'tshark -r capture.pcap',
          comment: '# Analisar arquivo',
        },
        {
          command: 'tshark -r capture.pcap -Y "http.request"',
          comment: '# Filtrar requisições HTTP',
        },
        {
          command: 'tshark -r capture.pcap -T fields -e ip.src -e ip.dst',
          comment: '# Extrair IPs origem/destino',
        },
        {
          command: 'tshark -r capture.pcap -q -z conv,ip',
          comment: '# Estatísticas de conversas',
        },
      ],
      Monitoramento: [
        {
          command: 'iftop -i eth0',
          comment: '# Tráfego em tempo real',
        },
        {
          command: 'nethogs eth0',
          comment: '# Tráfego por processo',
        },
        {
          command: 'bmon',
          comment: '# Monitor de banda',
        },
        {
          command: 'iptraf-ng',
          comment: '# Estatísticas detalhadas',
        },
        {
          command: 'sar -n DEV 1 5',
          comment: '# Estatísticas de rede',
        },
      ],
    },
    useCase:
      'Use quando: Precisa analisar tráfego de rede, capturar pacotes ou monitorar atividades de rede',
  },
  firewall: {
    title: '🔒 Firewall e Segurança',
    level: 'intermediario',
    sections: {
      'UFW (Uncomplicated Firewall)': [
        {
          command: 'sudo ufw enable',
          comment: '# Ativar firewall',
        },
        {
          command: 'sudo ufw status verbose',
          comment: '# Status detalhado',
        },
        {
          command: 'sudo ufw allow 22/tcp',
          comment: '# Permitir SSH',
        },
        {
          command: 'sudo ufw deny from 192.168.1.100',
          comment: '# Bloquear IP específico',
        },
        {
          command: 'sudo ufw delete allow 80',
          comment: '# Remover regra',
        },
        {
          command: 'sudo ufw reload',
          comment: '# Recarregar regras',
        },
      ],
      iptables: [
        {
          command: 'sudo iptables -L -n -v',
          comment: '# Listar regras',
        },
        {
          command: 'sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT',
          comment: '# Permitir porta 22',
        },
        {
          command: 'sudo iptables -A INPUT -s 192.168.1.0/24 -j DROP',
          comment: '# Bloquear subnet',
        },
        {
          command: 'sudo iptables -F',
          comment: '# Limpar todas regras',
        },
        {
          command: 'sudo iptables-save > /etc/iptables/rules.v4',
          comment: '# Salvar regras',
        },
      ],
      fail2ban: [
        {
          command: 'sudo fail2ban-client status',
          comment: '# Status geral',
        },
        {
          command: 'sudo fail2ban-client status sshd',
          comment: '# Status SSH',
        },
        {
          command: 'sudo fail2ban-client set sshd unbanip 192.168.1.100',
          comment: '# Desbloquear IP',
        },
        {
          command: 'sudo fail2ban-client reload',
          comment: '# Recarregar configuração',
        },
      ],
    },
    useCase:
      'Use quando: Precisa configurar firewalls, gerenciar regras de segurança ou proteger contra ataques',
  },
  loadBalancing: {
    title: '⚖️ Load Balancing',
    level: 'avancado',
    sections: {
      HAProxy: [
        {
          command: 'haproxy -f /etc/haproxy/haproxy.cfg -c',
          comment: '# Validar configuração',
        },
        {
          command: 'sudo systemctl restart haproxy',
          comment: '# Reiniciar serviço',
        },
        {
          command: 'echo "show info" | socat stdio /var/run/haproxy.sock',
          comment: '# Informações do HAProxy',
        },
        {
          command: 'echo "show stat" | socat stdio /var/run/haproxy.sock',
          comment: '# Estatísticas',
        },
      ],
      'Nginx Load Balancer': [
        {
          command: 'nginx -t',
          comment: '# Testar configuração',
        },
        {
          command: 'sudo nginx -s reload',
          comment: '# Recarregar configuração',
        },
        {
          command: 'curl -I http://localhost/nginx_status',
          comment: '# Status do load balancer',
        },
        {
          command: 'tail -f /var/log/nginx/access.log',
          comment: '# Monitorar acessos',
        },
      ],
      'IPVS (Linux Virtual Server)': [
        {
          command: 'sudo ipvsadm -L -n',
          comment: '# Listar regras IPVS',
        },
        {
          command: 'sudo ipvsadm -A -t 192.168.1.100:80 -s rr',
          comment: '# Adicionar virtual service',
        },
        {
          command: 'sudo ipvsadm -a -t 192.168.1.100:80 -r 192.168.1.101:80 -m',
          comment: '# Adicionar real server',
        },
        {
          command: 'sudo ipvsadm -L --rate',
          comment: '# Taxa de conexões',
        },
      ],
    },
    useCase:
      'Use quando: Precisa distribuir carga entre múltiplos servidores ou configurar alta disponibilidade',
  },
  vpn: {
    title: '🔐 VPN',
    level: 'avancado',
    sections: {
      OpenVPN: [
        {
          command: 'sudo systemctl status openvpn',
          comment: '# Status do serviço',
        },
        {
          command: 'openvpn --config client.ovpn',
          comment: '# Conectar cliente',
        },
        {
          command: 'sudo openvpn --config server.conf --daemon',
          comment: '# Iniciar servidor',
        },
        {
          command: 'tail -f /var/log/openvpn.log',
          comment: '# Monitorar logs',
        },
      ],
      WireGuard: [
        {
          command: 'wg genkey | tee private.key | wg pubkey > public.key',
          comment: '# Gerar chaves',
        },
        {
          command: 'sudo wg-quick up wg0',
          comment: '# Ativar interface',
        },
        {
          command: 'sudo wg show',
          comment: '# Status da VPN',
        },
        {
          command: 'sudo wg-quick down wg0',
          comment: '# Desativar interface',
        },
      ],
      'IPSec (strongSwan)': [
        {
          command: 'sudo ipsec status',
          comment: '# Status do IPSec',
        },
        {
          command: 'sudo ipsec up connection-name',
          comment: '# Iniciar conexão',
        },
        {
          command: 'sudo ipsec down connection-name',
          comment: '# Encerrar conexão',
        },
        {
          command: 'sudo ipsec reload',
          comment: '# Recarregar configuração',
        },
      ],
    },
    useCase:
      'Use quando: Precisa criar conexões seguras entre redes ou configurar acesso remoto seguro',
  },
  performance: {
    title: '⚡ Performance e Otimização',
    level: 'avancado',
    sections: {
      'Tuning de Rede': [
        {
          command: 'sysctl net.core.rmem_max',
          comment: '# Buffer de recebimento',
        },
        {
          command: 'sysctl net.core.wmem_max',
          comment: '# Buffer de envio',
        },
        {
          command: 'sysctl net.ipv4.tcp_congestion_control',
          comment: '# Algoritmo de congestionamento',
        },
        {
          command: 'sysctl net.core.somaxconn',
          comment: '# Tamanho da fila de escuta',
        },
        {
          command: 'tc qdisc show dev eth0',
          comment: '# Fila de tráfego',
        },
      ],
      'QoS (Quality of Service)': [
        {
          command: 'sudo tc qdisc add dev eth0 root handle 1: htb default 30',
          comment: '# Criar HTB qdisc',
        },
        {
          command:
            'sudo tc class add dev eth0 parent 1: classid 1:1 htb rate 1mbit',
          comment: '# Limitar banda',
        },
        {
          command:
            'sudo tc filter add dev eth0 protocol ip parent 1:0 prio 1 u32 match ip dport 80 0xffff flowid 1:10',
          comment: '# Filtrar porta 80',
        },
        {
          command: 'sudo tc qdisc del dev eth0 root',
          comment: '# Remover QoS',
        },
      ],
      'Testes de Performance': [
        {
          command: 'iperf3 -s',
          comment: '# Iniciar servidor iperf3',
        },
        {
          command: 'iperf3 -c server_ip -t 30',
          comment: '# Teste de throughput (30s)',
        },
        {
          command: 'ping -c 100 -i 0.1 server_ip | tail -1',
          comment: '# Teste de latência',
        },
        {
          command: 'netcat -z -v server_ip 80',
          comment: '# Testar porta aberta',
        },
      ],
    },
    useCase:
      'Use quando: Precisa otimizar performance de rede, testar throughput ou configurar QoS',
  },
};
