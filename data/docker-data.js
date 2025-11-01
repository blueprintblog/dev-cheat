// Objeto com todos os comandos da cheatsheet Docker
export const dockerCommands = {
  // Card Informações Básicas
  informacoesBasicas: {
    title: 'ℹ️ Informações Básicas',
    level: 'basico',
    id: 'info',
    sections: {
      'Versão e Sistema': [
        { command: 'docker --version', comment: '# Versão Docker' },
        { command: 'docker info', comment: '# Informações do sistema' },
        { command: 'docker system info', comment: '# Info detalhada' },
        { command: 'docker system df', comment: '# Uso de espaço' },
      ],
      Verificação: [
        { command: 'docker version', comment: '# Versão client/server' },
        { command: 'docker system events', comment: '# Eventos em tempo real' },
        {
          command: 'docker system events --since 1h',
          comment: '# Eventos última hora',
        },
        {
          command: 'docker system prune --filter until=24h',
          comment: '# Limpa recentes',
        },
      ],
    },
    useCase:
      'Use quando: Precisa verificar status do Docker, versões ou informações do sistema',
  },

  // Card Containers
  containers: {
    title: '📦 Containers',
    level: 'basico',
    id: 'containers',
    sections: {
      'Listar Containers': [
        { command: 'docker ps', comment: '# Containers rodando' },
        { command: 'docker ps -a', comment: '# Todos containers' },
        { command: 'docker ps -q', comment: '# Apenas IDs' },
        {
          command:
            'docker ps --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}"',
          comment: '# Formatado',
        },
      ],
      'Executar Containers': [
        {
          command: 'docker run -p 3001:3001 blueprint-backend',
          comment: '# Mapear porta',
        },
        {
          command:
            'docker run -d --name backend -p 3001:3001 blueprint-backend',
          comment: '# Detached',
        },
        {
          command: 'docker run -it --rm alpine sh',
          comment: '# Interativo + remove',
        },
        {
          command: 'docker run -e NODE_ENV=production app',
          comment: '# Com variáveis',
        },
        {
          command: 'docker run -v $(pwd):/app -w /app node npm install',
          comment: '# Com volume',
        },
        {
          command: 'docker run --restart unless-stopped app',
          comment: '# Reinicia automático',
        },
        {
          command: 'docker run --memory="256m" app',
          comment: '# Limita memória',
        },
        { command: 'docker run --cpus="0.5" app', comment: '# Limita CPU' },
      ],
      'Gerenciar Containers': [
        { command: 'docker stop container_name', comment: '# Parar container' },
        { command: 'docker stop $(docker ps -q)', comment: '# Parar todos' },
        { command: 'docker rm container_name', comment: '# Remover container' },
        { command: 'docker rm $(docker ps -aq)', comment: '# Remover todos' },
        { command: 'docker restart container_name', comment: '# Reiniciar' },
        {
          command: 'docker pause container_name',
          comment: '# Pausa container',
        },
        {
          command: 'docker unpause container_name',
          comment: '# Despausa container',
        },
        { command: 'docker kill container_name', comment: '# Força parada' },
      ],
    },
    useCase:
      'Use quando: Gerenciando ciclo de vida de containers, deploy ou debugging',
  },

  // Card Imagens
  imagens: {
    title: '🖼️ Imagens',
    level: 'basico',
    id: 'images',
    sections: {
      'Listar Imagens': [
        { command: 'docker images', comment: '# Listar imagens' },
        { command: 'docker images -a', comment: '# Incluir intermediárias' },
        {
          command:
            'docker images --format "table {{.Repository}}\\t{{.Tag}}\\t{{.Size}}"',
          comment: '# Formatado',
        },
      ],
      'Build de Imagens': [
        {
          command: 'docker build -t blueprint-backend ./backend',
          comment: '# Build básico',
        },
        {
          command: 'docker build -t blueprint-frontend ./frontend',
          comment: '# Build frontend',
        },
        {
          command: 'docker build --no-cache -t app:latest .',
          comment: '# Sem cache',
        },
        {
          command: 'docker build --target production -t app:prod .',
          comment: '# Multi-stage',
        },
        {
          command: 'docker build --build-arg NODE_ENV=production -t app .',
          comment: '# Com args',
        },
        {
          command: 'docker build --progress=plain -t app .',
          comment: '# Build detalhado',
        },
        {
          command: 'docker build --squash -t app .',
          comment: '# Squash layers',
        },
        {
          command: 'docker build --label version=1.0 -t app .',
          comment: '# Com labels',
        },
      ],
      'Gerenciar Imagens': [
        { command: 'docker rmi image_name', comment: '# Remover imagem' },
        {
          command: 'docker rmi $(docker images -q)',
          comment: '# Remover todas',
        },
        { command: 'docker image prune', comment: '# Imagens não usadas' },
        { command: 'docker image prune -a', comment: '# Todas órfãs' },
        {
          command: 'docker tag source:latest target:1.0',
          comment: '# Renomeia imagem',
        },
        {
          command: 'docker push registry.com/app:latest',
          comment: '# Push registry',
        },
        {
          command: 'docker pull registry.com/app:latest',
          comment: '# Pull registry',
        },
      ],
    },
    useCase: 'Use quando: Criando, gerenciando ou limpando imagens Docker',
  },

  // Card Logs e Monitoramento
  logsMonitoramento: {
    title: '📊 Logs e Monitoramento',
    level: 'intermediario',
    id: 'logs',
    sections: {
      'Logs de Containers': [
        { command: 'docker logs container_name', comment: '# Ver logs' },
        { command: 'docker logs -f container_name', comment: '# Follow logs' },
        {
          command: 'docker logs --tail 50 container_name',
          comment: '# Últimas 50 linhas',
        },
        {
          command: 'docker logs --since="2h" container_name',
          comment: '# Últimas 2 horas',
        },
        {
          command: 'docker logs --timestamps container_name',
          comment: '# Com timestamps',
        },
      ],
      Monitoramento: [
        { command: 'docker stats', comment: '# Estatísticas em tempo real' },
        {
          command: 'docker stats container_name',
          comment: '# Container específico',
        },
        {
          command: 'docker top container_name',
          comment: '# Processos no container',
        },
        {
          command: 'docker stats --no-stream',
          comment: '# Estatísticas estáticas',
        },
        {
          command:
            'docker stats --format "table {{.Container}}\\t{{.CPUPerc}}"',
          comment: '# Formatado',
        },
        { command: 'docker events', comment: '# Eventos Docker' },
      ],
      Inspeção: [
        {
          command: 'docker inspect container_name',
          comment: '# Detalhes container',
        },
        { command: 'docker inspect image_name', comment: '# Detalhes imagem' },
      ],
    },
    useCase: 'Use quando: Debugging, monitoramento ou análise de problemas',
  },

  // Card Execução e Interação
  execucaoInteracao: {
    title: '⚡ Execução e Interação',
    level: 'intermediario',
    id: 'execution',
    sections: {
      'Executar Comandos': [
        {
          command: 'docker exec -it container_name bash',
          comment: '# Shell no container',
        },
        {
          command: 'docker exec -it container_name sh',
          comment: '# Shell básico',
        },
        {
          command: 'docker exec container_name ls -la /app',
          comment: '# Comando específico',
        },
      ],
      'Copiar Arquivos': [
        {
          command: 'docker cp file.txt container_name:/app/',
          comment: '# Host → Container',
        },
        {
          command: 'docker cp container_name:/app/logs ./logs',
          comment: '# Container → Host',
        },
      ],
      'Portas e Rede': [
        { command: 'docker port container_name', comment: '# Portas mapeadas' },
        { command: 'docker run -p 8080:80 nginx', comment: '# Mapear porta' },
        { command: 'docker run -P nginx', comment: '# Mapear automático' },
        {
          command: 'docker exec -u root container bash',
          comment: '# Como root',
        },
        {
          command: 'docker exec -d container sleep 60',
          comment: '# Background',
        },
        {
          command: 'docker exec -it container --env VAR=value cmd',
          comment: '# Com variáveis',
        },
      ],
    },
    useCase:
      'Use quando: Precisa interagir com containers em execução ou transferir arquivos',
  },

  // Card Limpeza e Manutenção
  limpezaManutencao: {
    title: '🧹 Limpeza e Manutenção',
    level: 'intermediario',
    id: 'cleanup',
    sections: {
      'Limpeza Geral': [
        {
          command: 'docker system prune',
          comment: '# Remove dados não usados',
        },
        {
          command: 'docker system prune -a',
          comment: '# Remove tudo não usado',
        },
        {
          command: 'docker system prune --volumes',
          comment: '# Inclui volumes',
        },
      ],
      'Limpeza Específica': [
        { command: 'docker container prune', comment: '# Containers parados' },
        { command: 'docker image prune', comment: '# Imagens órfãs' },
        { command: 'docker volume prune', comment: '# Volumes não usados' },
        { command: 'docker network prune', comment: '# Redes não usadas' },
        { command: 'docker system df -v', comment: '# Detalhado' },
        {
          command: 'docker system events --filter type=container',
          comment: '# Filtra eventos',
        },
        { command: 'docker builder prune', comment: '# Limpa cache build' },
      ],
      'Verificar Espaço': [
        { command: 'docker system df', comment: '# Uso de espaço' },
        {
          command:
            'docker images --format "table {{.Repository}}\\t{{.Tag}}\\t{{.Size}}"',
          comment: '# Tamanho imagens',
        },
      ],
    },
    warning:
      '⚠️ ATENÇÃO: O comando docker system prune -a --volumes removerá TODOS os dados não utilizados, incluindo volumes. Use com extrema cautela!',
    useCase:
      'Use quando: Precisa liberar espaço em disco ou limpar ambiente Docker',
  },

  // Card Docker Compose
  dockerCompose: {
    title: '🔧 Docker Compose',
    level: 'intermediario',
    id: 'compose',
    sections: {
      'Comandos Básicos': [
        { command: 'docker-compose --version', comment: '# Versão Compose' },
        {
          command: 'docker-compose up',
          comment: '# Subir serviços (foreground)',
        },
        { command: 'docker-compose up -d', comment: '# Subir (background)' },
        {
          command: 'docker-compose up backend',
          comment: '# Serviço específico',
        },
        { command: 'docker-compose up --build', comment: '# Rebuild antes' },
        {
          command: 'docker-compose up --force-recreate',
          comment: '# Recriar containers',
        },
        { command: 'docker-compose up --remove-orphans', comment: '# Remove órfãos' },
        { command: 'docker-compose up --no-deps', comment: '# Sem dependências' },
        { command: 'docker-compose up --timeout 30', comment: '# Timeout customizado' },
      ],
      'Parar e Remover': [
        {
          command: 'docker-compose down',
          comment: '# Para e remove containers',
        },
        { command: 'docker-compose down -v', comment: '# Inclui volumes' },
        { command: 'docker-compose stop', comment: '# Apenas para' },
        {
          command: 'docker-compose stop backend',
          comment: '# Serviço específico',
        },
        { command: 'docker-compose down --rmi all', comment: '# Remove imagens' },
        { command: 'docker-compose down --timeout 10', comment: '# Timeout customizado' },
        { command: 'docker-compose rm -f', comment: '# Força remoção' },
        { command: 'docker-compose down --remove-orphans', comment: '# Remove órfãos' },
      ],
      'Logs e Execução': [
        { command: 'docker-compose logs', comment: '# Logs todos serviços' },
        { command: 'docker-compose logs -f', comment: '# Follow logs' },
        {
          command: 'docker-compose logs backend',
          comment: '# Serviço específico',
        },
        {
          command: 'docker-compose exec backend bash',
          comment: '# Shell no container',
        },
        {
          command: 'docker-compose exec backend cargo build',
          comment: '# Comando específico',
        },
        { command: 'docker-compose logs --tail 50 backend', comment: '# Últimas 50 linhas' },
        { command: 'docker-compose logs --since="1h" backend', comment: '# Última hora' },
        { command: 'docker-compose exec -T backend ls -la', comment: '# Sem TTY' },
        { command: 'docker-compose exec -u root backend bash', comment: '# Como usuário específico' },
      ],
      'Build e Scale': [
        { command: 'docker-compose build', comment: '# Build todos serviços' },
        {
          command: 'docker-compose build backend',
          comment: '# Build específico',
        },
        { command: 'docker-compose build --no-cache', comment: '# Sem cache' },
        {
          command: 'docker-compose up -d --scale backend=3',
          comment: '# 3 instâncias',
        },
        { command: 'docker-compose pull', comment: '# Atualiza imagens' },
        { command: 'docker-compose config', comment: '# Valida configuração' },
        { command: 'docker-compose ps', comment: '# Status serviços' },
        { command: 'docker-compose build --parallel', comment: '# Build paralelo' },
        { command: 'docker-compose build --progress=plain', comment: '# Build detalhado' },
        { command: 'docker-compose up --scale web=2 --scale db=1', comment: '# Múltiplos serviços' },
      ],
      'Variáveis de Ambiente': [
        { command: 'docker-compose run --env VAR=value backend', comment: '# Variável inline' },
        { command: 'docker-compose run --env-file .env backend', comment: '# Arquivo .env' },
        { command: 'docker-compose config --services', comment: '# Ver configuração' },
        { command: 'docker-compose --env-file prod.env up', comment: '# Ambiente específico' },
        { command: 'docker-compose run --rm backend env', comment: '# Ver variáveis' },
        { command: 'docker-compose exec backend printenv', comment: '# Variáveis no container' },
        { command: 'docker-compose --project-name projeto up', comment: '# Nome do projeto' },
      ],
      'Volumes e Redes': [
        { command: 'docker-compose up -d --volume-driver local', comment: '# Driver de volume' },
        { command: 'docker-compose exec backend ls /data', comment: '# Listar volume' },
        { command: 'docker-compose run --rm backend ls /shared', comment: '# Volume compartilhado' },
        { command: 'docker-compose up --network-alias web', comment: '# Alias na rede' },
        { command: 'docker-compose exec backend ping database', comment: '# Conectividade' },
        { command: 'docker-compose down --volumes', comment: '# Remove volumes' },
        { command: 'docker volume ls | grep projeto', comment: '# Volumes do projeto' },
        { command: 'docker network ls | grep projeto', comment: '# Redes do projeto' },
      ],
      'Dependências e Serviços': [
        { command: 'docker-compose up --no-deps backend', comment: '# Sem dependências' },
        { command: 'docker-compose up --force-recreate --no-deps', comment: '# Recriar sem deps' },
        { command: 'docker-compose restart backend', comment: '# Reiniciar serviço' },
        { command: 'docker-compose restart', comment: '# Reiniciar todos' },
        { command: 'docker-compose pause backend', comment: '# Pausar serviço' },
        { command: 'docker-compose unpause backend', comment: '# Despausar serviço' },
        { command: 'docker-compose kill backend', comment: '# Matar serviço' },
        { command: 'docker-compose up --scale backend=0', comment: '# Escala para zero' },
      ],
      'Configuração Avançada': [
        { command: 'docker-compose -f docker-compose.prod.yml up', comment: '# Arquivo específico' },
        { command: 'docker-compose -f docker-compose.yml -f docker-compose.override.yml up', comment: '# Múltiplos arquivos' },
        { command: 'docker-compose --compatibility up', comment: '# Modo compatibilidade' },
        { command: 'docker-compose --verbose up', comment: '# Output detalhado' },
        { command: 'docker-compose --no-ansi up', comment: '# Sem cores' },
        { command: 'docker-compose --profile dev up', comment: '# Perfil específico' },
        { command: 'docker-compose --profile dev --profile test up', comment: '# Múltiplos perfis' },
        { command: 'docker-compose config --resolve-env-vars', comment: '# Resolver variáveis' },
      ],
      'Integração e CI/CD': [
        { command: 'docker-compose -f docker-compose.test.yml up --abort-on-container-exit', comment: '# Testes automatizados' },
        { command: 'docker-compose -f docker-compose.ci.yml up --build', comment: '# Ambiente CI' },
        { command: 'docker-compose run --rm backend npm test', comment: '# Executar testes' },
        { command: 'docker-compose run --rm backend flake8 .', comment: '# Lint de código' },
        { command: 'docker-compose run --rm backend python manage.py migrate', comment: '# Migrations Django' },
        { command: 'docker-compose exec backend python manage.py collectstatic', comment: '# Arquivos estáticos' },
        { command: 'docker-compose down && docker-compose up --build', comment: '# Reciclar ambiente' },
      ],
      'Docker Compose V2': [
        { command: 'docker compose version', comment: '# Versão V2' },
        { command: 'docker compose up', comment: '# Comando V2' },
        { command: 'docker compose watch', comment: '# Modo watch' },
        { command: 'docker compose alpha convert', comment: '# Converter para V2' },
        { command: 'docker compose config --format json', comment: '# Config JSON' },
        { command: 'docker compose run --rm backend bash', comment: '# Executar V2' },
        { command: 'docker compose up --wait', comment: '# Esperar saúde' },
        { command: 'docker compose up --attach dependencies', comment: '# Anexar dependências' },
        { command: 'docker compose cp backend:/app ./local', comment: '# Copiar arquivos V2' },
        { command: 'docker compose down --timeout 30', comment: '# Timeout V2' },
      ],
    },
    useCase:
      'Use quando: Trabalhando com aplicações multi-container ou ambientes de desenvolvimento',
  },

  // Card Redes e Volumes
  redesEVolumes: {
    title: '🌐 Redes e Volumes',
    level: 'avancado',
    id: 'networks',
    sections: {
      'Gerenciar Redes': [
        { command: 'docker network ls', comment: '# Listar redes' },
        {
          command: 'docker network inspect bridge',
          comment: '# Inspecionar rede',
        },
        {
          command: 'docker network create --driver bridge blueprint-net',
          comment: '# Criar rede',
        },
        {
          command: 'docker network rm network_name',
          comment: '# Remover rede',
        },
      ],
      'Gerenciar Volumes': [
        { command: 'docker volume ls', comment: '# Listar volumes' },
        {
          command: 'docker volume inspect volume_name',
          comment: '# Inspecionar volume',
        },
        {
          command: 'docker volume rm volume_name',
          comment: '# Remover volume',
        },
        {
          command: 'docker run -v nome_volume:/data alpine',
          comment: '# Usar volume',
        },
      ],
      Conectividade: [
        {
          command: 'docker exec -it container1 ping container2',
          comment: '# Testar conexão',
        },
        {
          command: 'docker exec frontend curl http://backend:3001/health',
          comment: '# Testar API',
        },
        {
          command: 'docker network connect bridge container',
          comment: '# Conecta rede',
        },
        {
          command: 'docker network disconnect bridge container',
          comment: '# Desconecta rede',
        },
        {
          command: 'docker volume create --name data',
          comment: '# Cria volume',
        },
      ],
    },
    useCase:
      'Use quando: Configurando comunicação entre containers ou persistência de dados',
  },

  // Card Troubleshooting
  troubleshooting: {
    title: '🔧 Troubleshooting',
    level: 'avancado',
    id: 'troubleshoot',
    sections: {
      'Verificar Status': [
        { command: 'docker version', comment: '# Verificar instalação' },
        {
          command: 'systemctl status docker',
          comment: '# Status serviço (Linux)',
        },
        {
          command: 'Get-Service docker',
          comment: '# Status serviço (Windows)',
        },
      ],
      'Problemas Comuns': [
        {
          command: 'sudo usermod -aG docker $USER',
          comment: '# Permissão Docker',
        },
        { command: 'newgrp docker', comment: '# Aplicar grupo' },
      ],
      'Problemas de Espaço': [
        { command: 'docker system df', comment: '# Ver uso espaço' },
        { command: 'docker system prune -a', comment: '# Limpar tudo' },
      ],
      'Problemas de Rede': [
        { command: 'docker network ls', comment: '# Listar redes' },
        {
          command: 'docker network inspect bridge',
          comment: '# Inspecionar rede',
        },
      ],
      'Logs do Docker': [
        {
          command: 'journalctl -u docker.service',
          comment: '# Logs Docker (Linux)',
        },
        {
          command: 'Get-EventLog -LogName Application -Source Docker',
          comment: '# Logs (Windows)',
        },
        { command: 'docker context ls', comment: '# Lista contextos' },
        {
          command: 'docker context use my-context',
          comment: '# Muda contexto',
        },
        {
          command: 'docker trust inspect image:tag',
          comment: '# Verifica assinatura',
        },
      ],
    },
    tip: '💡 DICA: Se um container não inicia, verifique os logs com docker logs container_name e inspecione com docker inspect container_name',
    useCase:
      'Use quando: Encontrando problemas com containers, redes ou instalação Docker',
  },
};
