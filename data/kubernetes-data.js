export const kubernetesCommands = {
  // Nível Básico
  clusterBasico: {
    title: '☸️ Cluster Management',
    level: 'basico',
    useCase: 'Gerenciar informações básicas do cluster Kubernetes',
    sections: {
      'Informações do Cluster': [
        { command: 'kubectl cluster-info', comment: '# Info do cluster' },
        { command: 'kubectl version', comment: '# Versões client/server' },
        { command: 'kubectl config view', comment: '# Configuração atual' },
        {
          command: 'kubectl config current-context',
          comment: '# Context atual',
        },
        { command: 'kubectl get nodes', comment: '# Lista nós do cluster' },
        {
          command: 'kubectl describe node NODE_NAME',
          comment: '# Detalhes do nó',
        },
      ],
      'Contextos e Namespaces': [
        {
          command: 'kubectl config get-contexts',
          comment: '# Lista contextos',
        },
        {
          command: 'kubectl config use-context CONTEXT_NAME',
          comment: '# Muda contexto',
        },
        { command: 'kubectl get namespaces', comment: '# Lista namespaces' },
        {
          command: 'kubectl create namespace NAME',
          comment: '# Cria namespace',
        },
        {
          command: 'kubectl -n NAMESPACE get pods',
          comment: '# Pods em namespace',
        },
      ],
    },
  },

  podsBasicos: {
    title: '☸️ Pods e Containers',
    level: 'basico',
    useCase: 'Gerenciar pods e containers básicos',
    sections: {
      'Gerenciar Pods': [
        { command: 'kubectl get pods', comment: '# Lista todos pods' },
        { command: 'kubectl get pods -o wide', comment: '# Com mais detalhes' },
        {
          command: 'kubectl get pods --all-namespaces',
          comment: '# Todos namespaces',
        },
        {
          command: 'kubectl describe pod POD_NAME',
          comment: '# Detalhes do pod',
        },
        { command: 'kubectl logs POD_NAME', comment: '# Logs do pod' },
        {
          command: 'kubectl logs -f POD_NAME',
          comment: '# Logs em tempo real',
        },
        {
          command: 'kubectl exec -it POD_NAME -- bash',
          comment: '# Acesso ao container',
        },
      ],
      'Gerenciar Containers': [
        { command: 'kubectl get containers', comment: '# Lista containers' },
        { command: 'kubectl top pods', comment: '# Uso de recursos' },
        {
          command: 'kubectl top pod POD_NAME --containers',
          comment: '# Por container',
        },
        {
          command: 'kubectl port-forward POD_NAME 8080:80',
          comment: '# Port forwarding',
        },
      ],
    },
  },

  // Nível Intermediário
  deploymentsIntermediario: {
    title: '☸️ Deployments e Services',
    level: 'intermediario',
    useCase: 'Gerenciar deployments e services para aplicações',
    sections: {
      Deployments: [
        { command: 'kubectl get deployments', comment: '# Lista deployments' },
        {
          command: 'kubectl describe deployment DEPLOY_NAME',
          comment: '# Detalhes do deployment',
        },
        {
          command: 'kubectl apply -f deployment.yaml',
          comment: '# Aplica manifesto',
        },
        {
          command: 'kubectl delete deployment DEPLOY_NAME',
          comment: '# Remove deployment',
        },
        {
          command: 'kubectl scale deployment DEPLOY_NAME --replicas=3',
          comment: '# Escala deployment',
        },
        {
          command: 'kubectl rollout status deployment DEPLOY_NAME',
          comment: '# Status do rollout',
        },
        {
          command: 'kubectl rollout undo deployment DEPLOY_NAME',
          comment: '# Reverte rollout',
        },
      ],
      Services: [
        { command: 'kubectl get services', comment: '# Lista services' },
        {
          command: 'kubectl describe service SERVICE_NAME',
          comment: '# Detalhes do service',
        },
        {
          command:
            'kubectl expose deployment DEPLOY_NAME --port=80 --type=LoadBalancer',
          comment: '# Expõe deployment',
        },
        {
          command: 'kubectl get endpoints',
          comment: '# Endpoints dos services',
        },
      ],
    },
  },

  configmapsIntermediario: {
    title: '☸️ ConfigMaps e Secrets',
    level: 'intermediario',
    useCase: 'Gerenciar configurações e segredos da aplicação',
    sections: {
      ConfigMaps: [
        { command: 'kubectl get configmaps', comment: '# Lista configmaps' },
        {
          command: 'kubectl describe configmap CONFIGMAP_NAME',
          comment: '# Detalhes do configmap',
        },
        {
          command: 'kubectl create configmap NAME --from-literal=key=value',
          comment: '# Cria configmap',
        },
        {
          command: 'kubectl create configmap NAME --from-file=config.txt',
          comment: '# Cria com arquivo',
        },
        {
          command: 'kubectl edit configmap CONFIGMAP_NAME',
          comment: '# Edita configmap',
        },
      ],
      Secrets: [
        { command: 'kubectl get secrets', comment: '# Lista secrets' },
        {
          command: 'kubectl describe secret SECRET_NAME',
          comment: '# Detalhes do secret',
        },
        {
          command:
            'kubectl create secret generic NAME --from-literal=password=secret123',
          comment: '# Cria secret',
        },
        {
          command:
            'kubectl create secret tls NAME --cert=path/to/tls.crt --key=path/to/tls.key',
          comment: '# Cria TLS secret',
        },
        {
          command: "echo -n 'mysecret' | base64",
          comment: '# Codifica secret',
        },
      ],
    },
  },

  // Nível Avançado
  helmAvancado: {
    title: '🎯 Helm - Package Manager',
    level: 'avancado',
    useCase: 'Gerenciar aplicações complexas com Helm',
    sections: {
      'Instalação e Configuração': [
        {
          command:
            'curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash',
          comment: '# Instala Helm',
        },
        { command: 'helm version', comment: '# Verifica instalação' },
        {
          command: 'helm repo add stable https://charts.helm.sh/stable',
          comment: '# Adiciona repo',
        },
        { command: 'helm repo update', comment: '# Atualiza repos' },
        { command: 'helm repo list', comment: '# Lista repos' },
        { command: 'helm search CHART_NAME', comment: '# Busca charts' },
      ],
      'Gerenciar Releases': [
        { command: 'helm list', comment: '# Lista releases' },
        {
          command: 'helm list --all-namespaces',
          comment: '# Todos namespaces',
        },
        { command: 'helm status RELEASE_NAME', comment: '# Status do release' },
        {
          command: 'helm history RELEASE_NAME',
          comment: '# Histórico do release',
        },
        {
          command: 'helm rollback RELEASE_NAME REVISION',
          comment: '# Reverte release',
        },
      ],
      'Instalar Charts': [
        {
          command: 'helm install RELEASE_NAME CHART_NAME',
          comment: '# Instala chart',
        },
        {
          command: 'helm install RELEASE_NAME CHART_NAME --namespace NAMESPACE',
          comment: '# Instala com namespace',
        },
        {
          command: 'helm install RELEASE_NAME CHART_NAME --set key=value',
          comment: '# Com valores',
        },
        {
          command: 'helm install RELEASE_NAME CHART_NAME --values values.yaml',
          comment: '# Com arquivo de valores',
        },
        {
          command: 'helm install RELEASE_NAME CHART_NAME --dry-run --debug',
          comment: '# Simulação',
        },
      ],
      'Upgrade e Uninstall': [
        {
          command: 'helm upgrade RELEASE_NAME CHART_NAME',
          comment: '# Atualiza release',
        },
        {
          command: 'helm upgrade RELEASE_NAME CHART_NAME --reuse-values',
          comment: '# Reusa valores',
        },
        { command: 'helm uninstall RELEASE_NAME', comment: '# Remove release' },
        {
          command: 'helm uninstall RELEASE_NAME --namespace NAMESPACE',
          comment: '# Remove com namespace',
        },
      ],
    },
  },

  istioAvancado: {
    title: '🔷 Istio - Service Mesh',
    level: 'avancado',
    useCase: 'Implementar service mesh com Istio',
    sections: {
      Instalação: [
        {
          command: 'curl -L https://istio.io/downloadIstio | sh -',
          comment: '# Download Istio',
        },
        { command: 'cd istio-1.x.x', comment: '# Entra no diretório' },
        {
          command: 'export PATH=$PWD/bin:$PATH',
          comment: '# Adiciona ao PATH',
        },
        {
          command: 'istioctl install --set profile=demo -y',
          comment: '# Instala demo',
        },
        {
          command: 'istioctl install --set profile=default -y',
          comment: '# Instala padrão',
        },
        {
          command: 'istioctl verify-install',
          comment: '# Verifica instalação',
        },
      ],
      Configuração: [
        {
          command: 'kubectl label namespace default istio-injection=enabled',
          comment: '# Habilita injection',
        },
        {
          command: 'istioctl manifest generate > istio.yaml',
          comment: '# Gera manifesto',
        },
        {
          command: 'kubectl apply -f istio.yaml',
          comment: '# Aplica manifesto',
        },
      ],
      'Virtual Services': [
        {
          command: 'kubectl apply -f virtual-service.yaml',
          comment: '# Cria virtual service',
        },
        {
          command: 'kubectl get virtualservices',
          comment: '# Lista virtual services',
        },
        {
          command: 'kubectl describe virtualservice VSERVICE_NAME',
          comment: '# Detalhes do vservice',
        },
        {
          command: 'kubectl delete virtualservice VSERVICE_NAME',
          comment: '# Remove virtual service',
        },
      ],
      'Destination Rules': [
        {
          command: 'kubectl apply -f destination-rule.yaml',
          comment: '# Cria destination rule',
        },
        {
          command: 'kubectl get destinationrules',
          comment: '# Lista destination rules',
        },
        {
          command: 'kubectl describe destinationrule RULE_NAME',
          comment: '# Detalhes da rule',
        },
      ],
      Gateway: [
        { command: 'kubectl apply -f gateway.yaml', comment: '# Cria gateway' },
        { command: 'kubectl get gateways', comment: '# Lista gateways' },
        {
          command: 'kubectl describe gateway GATEWAY_NAME',
          comment: '# Detalhes do gateway',
        },
      ],
    },
  },

  kustomizeAvancado: {
    title: '⚙️ Kustomize - Configuração Nativa',
    level: 'avancado',
    useCase: 'Gerenciar configurações com Kustomize',
    sections: {
      Instalação: [
        {
          command:
            'curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh" | bash',
          comment: '# Instala Kustomize',
        },
        { command: 'kustomize version', comment: '# Verifica instalação' },
        { command: 'kustomize build .', comment: '# Build do kustomization' },
        {
          command: 'kustomize build . | kubectl apply -f -',
          comment: '# Aplica direto',
        },
      ],
      'Estrutura de Diretórios': [
        { command: 'base/', comment: '# Recursos base' },
        { command: 'overlays/production/', comment: '# Customizações prod' },
        { command: 'overlays/staging/', comment: '# Customizações staging' },
        { command: 'kustomization.yaml', comment: '# Arquivo principal' },
      ],
      'Strategic Merge': [
        {
          command: 'kustomize build overlays/production',
          comment: '# Build com overlay',
        },
        {
          command: 'kustomize edit set image.nginx=nginx:1.21',
          comment: '# Edita imagem',
        },
        {
          command: 'kustomize edit add namespace production',
          comment: '# Adiciona namespace',
        },
        {
          command:
            'kustomize edit add configmap APP_CFG --from-file=config.ini',
          comment: '# Adiciona configmap',
        },
      ],
      Patches: [
        { command: 'patchesStrategicMerge:', comment: '# Merge estratégico' },
        { command: 'patchesJson6902:', comment: '# Patches JSON' },
        { command: 'patches:', comment: '# Patches simples' },
        { command: 'target:', comment: '# Alvo do patch' },
        { command: 'path: patch.yaml', comment: '# Arquivo de patch' },
      ],
    },
  },

  // Monitoramento e Troubleshooting
  monitoramentoAvancado: {
    title: '📊 Monitoramento e Observabilidade',
    level: 'avancado',
    useCase: 'Implementar monitoramento e observabilidade',
    sections: {
      Prometheus: [
        {
          command:
            'helm repo add prometheus-community https://prometheus-community.github.io/helm-charts',
          comment: '# Adiciona repo Prometheus',
        },
        {
          command:
            'helm install prometheus prometheus-community/kube-prometheus-stack',
          comment: '# Instala Prometheus',
        },
        {
          command: 'kubectl port-forward svc/prometheus-server 9090:9090',
          comment: '# Acesso local',
        },
        {
          command:
            'kubectl get --raw http://prometheus-server:9090/api/v1/query?query=up',
          comment: '# Query API',
        },
      ],
      Grafana: [
        {
          command:
            'helm repo add grafana https://grafana.github.io/helm-charts',
          comment: '# Adiciona repo Grafana',
        },
        {
          command: 'helm install grafana grafana/grafana',
          comment: '# Instala Grafana',
        },
        {
          command: 'kubectl port-forward svc/grafana 3000:3000',
          comment: '# Acesso local',
        },
        {
          command:
            "kubectl get secret grafana-admin-credentials -o jsonpath='{.data.admin-password}' | base64 -d",
          comment: '# Obtém senha',
        },
      ],
      'ELK Stack': [
        {
          command: 'helm repo add elastic https://helm.elastic.co',
          comment: '# Adiciona repo Elastic',
        },
        {
          command: 'helm install elasticsearch elastic/elasticsearch',
          comment: '# Instala Elasticsearch',
        },
        {
          command: 'helm install kibana elastic/kibana',
          comment: '# Instala Kibana',
        },
        {
          command: 'helm install logstash elastic/logstash',
          comment: '# Instala Logstash',
        },
      ],
      'Jaeger Tracing': [
        {
          command: 'kubectl create namespace observability',
          comment: '# Cria namespace',
        },
        {
          command:
            'kubectl apply -f https://raw.githubusercontent.com/jaegertracing/jaeger-kubernetes/master/all-in-one/jaeger-all-in-one-template.yml',
          comment: '# Instala Jaeger',
        },
        {
          command: 'kubectl port-forward svc/jaeger-query 16686:16686',
          comment: '# Acesso UI',
        },
        {
          command: 'istioctl install --set values.tracing.enabled=true',
          comment: '# Habilita tracing',
        },
      ],
    },
  },

  troubleshootingAvancado: {
    title: '🔧 Troubleshooting e Debug',
    level: 'avancado',
    useCase: 'Diagnosticar e resolver problemas no cluster',
    sections: {
      'Diagnóstico de Pods': [
        { command: 'kubectl get pods -o wide', comment: '# Status detalhado' },
        {
          command: 'kubectl describe pod POD_NAME',
          comment: '# Informações completas',
        },
        {
          command: 'kubectl get events --sort-by=.metadata.creationTimestamp',
          comment: '# Eventos recentes',
        },
        {
          command:
            'kubectl get events --field-selector involvedObject.name=POD_NAME',
          comment: '# Eventos do pod',
        },
        {
          command: 'kubectl logs POD_NAME --previous',
          comment: '# Logs anteriores',
        },
        {
          command: 'kubectl logs POD_NAME --tail=100',
          comment: '# Últimas 100 linhas',
        },
        {
          command: 'kubectl logs POD_NAME --since=1h',
          comment: '# Logs da última hora',
        },
        {
          command: 'kubectl exec -it POD_NAME -- /bin/sh',
          comment: '# Shell no pod',
        },
      ],
      'Problemas de Rede': [
        {
          command: 'kubectl exec -it POD_NAME -- nslookup SERVICE_NAME',
          comment: '# DNS resolution',
        },
        {
          command: 'kubectl exec -it POD_NAME -- curl SERVICE_NAME',
          comment: '# Testa conexão',
        },
        {
          command: 'kubectl exec -it POD_NAME -- telnet SERVICE_NAME 80',
          comment: '# Testa porta',
        },
        { command: 'kubectl get endpoints', comment: '# Verifica endpoints' },
        {
          command: 'kubectl get svc -o wide',
          comment: '# Detalhes dos services',
        },
        {
          command: 'kubectl get networkpolicies',
          comment: '# Lista políticas',
        },
        {
          command: 'kubectl describe networkpolicy POLICY_NAME',
          comment: '# Detalhes da política',
        },
        {
          command: 'kubectl exec -it POD_NAME -- iptables -L',
          comment: '# Regras iptables',
        },
      ],
      'Performance e Recursos': [
        { command: 'kubectl top nodes', comment: '# Uso por nó' },
        {
          command: 'kubectl top pods --containers',
          comment: '# Uso por container',
        },
        {
          command:
            'kubectl describe node NODE_NAME | grep -A 5 "Allocated resources"',
          comment: '# Recursos alocados',
        },
        {
          command:
            "kubectl get pod POD_NAME -o jsonpath='{.spec.containers[*].resources}'",
          comment: '# Limits e requests',
        },
        {
          command: 'kubectl exec -it POD_NAME -- top',
          comment: '# Processos no pod',
        },
        {
          command: 'kubectl exec -it POD_NAME -- df -h',
          comment: '# Uso de disco',
        },
        {
          command: 'kubectl exec -it POD_NAME -- free -h',
          comment: '# Uso de memória',
        },
        {
          command: 'kubectl exec -it POD_NAME -- netstat -i',
          comment: '# Conexões de rede',
        },
      ],
    },
  },
};
