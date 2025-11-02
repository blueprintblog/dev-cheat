export const cicdCommands = {
  // Nível Básico
  jenkinsBasico: {
    title: '🔧 Jenkins Básico',
    level: 'basico',
    useCase: 'Comandos essenciais do Jenkins para automação de builds',
    sections: {
      Jenkinsfile: [
        {
          command: `pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'mvn clean package'
      }
    }
  }
}`,
          comment: '# Pipeline básico com estágio de build',
        },
        {
          command: `pipeline {
  agent { docker 'maven:3.6.3-jdk-8' }
  stages {
    stage('Test') {
      steps {
        sh 'mvn test'
      }
    }
  }
}`,
          comment: '# Pipeline com agente Docker para testes',
        },
      ],
      'Comandos Jenkins CLI': [
        {
          command: 'java -jar jenkins-cli.jar -s http://jenkins:8080 list-jobs',
          comment: '# Lista jobs',
        },
        {
          command:
            'java -jar jenkins-cli.jar -s http://jenkins:8080 build job-name',
          comment: '# Executa job',
        },
        {
          command:
            'java -jar jenkins-cli.jar -s http://jenkins:8080 console job-name',
          comment: '# Logs do job',
        },
        {
          command:
            'java -jar jenkins-cli.jar -s http://jenkins:8080 safe-restart',
          comment: '# Reinicia seguro',
        },
      ],
      Plugins: [
        {
          command:
            'java -jar jenkins-cli.jar -s http://jenkins:8080 list-plugins',
          comment: '# Lista plugins',
        },
        {
          command:
            'java -jar jenkins-cli.jar -s http://jenkins:8080 install-plugin plugin.hpi',
          comment: '# Instala plugin',
        },
        {
          command: 'java -jar jenkins-cli.jar -s http://jenkins:8080 restart',
          comment: '# Reinicia Jenkins',
        },
      ],
    },
  },
  githubBasico: {
    title: '🐙 GitHub Actions Básico',
    level: 'basico',
    useCase: 'Workflows essenciais do GitHub Actions',
    sections: {
      'Workflow Básico': [
        {
          command: `name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test`,
          comment: '# Workflow básico de CI',
        },
      ],
      'Build e Deploy': [
        {
          command: `name: Build and Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build Docker image
        run: docker build -t myapp .
      - name: Push to registry
        run: docker push myregistry/myapp`,
          comment: '# Build e deploy de imagem Docker',
        },
      ],
      'Secrets e Variáveis': [
        {
          command: `jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        env:
          API_KEY: \${{ secrets.API_KEY }}
          DEPLOY_URL: \${{ secrets.DEPLOY_URL }}
        run: |
          curl -X POST $DEPLOY_URL \\
            -H "Authorization: Bearer $API_KEY"`,
          comment: '# Uso de secrets e variáveis de ambiente',
        },
      ],
    },
  },
  gitlabBasico: {
    title: '🦊 GitLab CI Básico',
    level: 'basico',
    useCase: 'Configurações essenciais do GitLab CI',
    sections: {
      '.gitlab-ci.yml Básico': [
        {
          command: `stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - echo "Building..."
    - npm run build
  artifacts:
    paths:
      - dist/

test:
  stage: test
  script:
    - npm test`,
          comment: '# Pipeline básico com build, test e deploy',
        },
      ],
      'Cache e Dependências': [
        {
          command: `variables:
  NODE_CACHE: "$CI_PROJECT_DIR/.npm"

cache:
  key: \${CI_COMMIT_REF_SLUG}
  paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline`,
          comment: '# Configuração de cache para dependências',
        },
      ],
      'Docker Build': [
        {
          command: `build:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker build -t \${CI_REGISTRY_IMAGE}:\${CI_COMMIT_SHA} .
    - docker push \${CI_REGISTRY_IMAGE}:\${CI_COMMIT_SHA}
  only:
    - main`,
          comment: '# Build e push de imagem Docker',
        },
      ],
    },
  },
  terraformBasico: {
    title: '🏗️ Terraform Básico',
    level: 'basico',
    useCase: 'Comandos fundamentais do Terraform',
    sections: {
      'Comandos Básicos': [
        {
          command: 'terraform init',
          comment: '# Inicializa projeto',
        },
        {
          command: 'terraform plan',
          comment: '# Mostra mudanças',
        },
        {
          command: 'terraform apply',
          comment: '# Aplica mudanças',
        },
        {
          command: 'terraform destroy',
          comment: '# Destrói recursos',
        },
        {
          command: 'terraform validate',
          comment: '# Valida sintaxe',
        },
        {
          command: 'terraform fmt',
          comment: '# Formata código',
        },
      ],
      'Workspace Management': [
        {
          command: 'terraform workspace new dev',
          comment: '# Cria workspace',
        },
        {
          command: 'terraform workspace select dev',
          comment: '# Seleciona workspace',
        },
        {
          command: 'terraform workspace list',
          comment: '# Lista workspaces',
        },
        {
          command: 'terraform workspace delete dev',
          comment: '# Remove workspace',
        },
      ],
    },
  },
  dockerBasico: {
    title: '🐳 Docker CI/CD Básico',
    level: 'basico',
    useCase: 'Comandos essenciais para Docker em CI/CD',
    sections: {
      Dockerfile: [
        {
          command: `FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`,
          comment: '# Dockerfile básico para aplicação Node.js',
        },
      ],
      'Build Commands': [
        {
          command: 'docker build -t myapp:latest .',
          comment: '# Build imagem',
        },
        {
          command: 'docker build -t myapp:v1.0 -t myapp:latest .',
          comment: '# Múltiplas tags',
        },
        {
          command: 'docker build --build-arg NODE_ENV=production -t myapp .',
          comment: '# Build args',
        },
        {
          command: 'docker build --no-cache -t myapp .',
          comment: '# Sem cache',
        },
      ],
      'Registry Push': [
        {
          command: 'docker login registry.example.com',
          comment: '# Login registry',
        },
        {
          command: 'docker tag myapp:latest registry.example.com/myapp:latest',
          comment: '# Tag para push',
        },
        {
          command: 'docker push registry.example.com/myapp:latest',
          comment: '# Push imagem',
        },
      ],
    },
  },
  // Nível Intermediário
  jenkinsIntermediario: {
    title: '🔧 Jenkins Intermediário',
    level: 'intermediario',
    useCase: 'Recursos intermediários do Jenkins',
    sections: {
      'Pipeline Multibranch': [
        {
          command: `pipeline {
  agent any
  triggers {
    pollSCM('H/5 * * * *')
  }
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/user/repo.git'
      }
    }
  }
}`,
          comment: '# Pipeline com trigger SCM polling',
        },
      ],
      'Parallel Stages': [
        {
          command: `pipeline {
  agent any
  stages {
    stage('Test') {
      parallel {
        stage('Unit Tests') {
          steps { sh 'mvn test' }
        }
        stage('Integration Tests') {
          steps { sh 'mvn verify' }
        }
      }
    }
  }
}`,
          comment: '# Execução paralela de estágios',
        },
      ],
      'Deploy com Parâmetros': [
        {
          command: `pipeline {
  agent any
  parameters {
    string(name: 'ENVIRONMENT', defaultValue: 'dev')
  }
  stages {
    stage('Deploy') {
      steps {
        sh "deploy.sh \${params.ENVIRONMENT}"
      }
    }
  }
}`,
          comment: '# Pipeline com parâmetros configuráveis',
        },
      ],
    },
  },
  githubIntermediario: {
    title: '🐙 GitHub Actions Intermediário',
    level: 'intermediario',
    useCase: 'Recursos intermediários do GitHub Actions',
    sections: {
      'Matrix Strategy': [
        {
          command: `jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
        os: [ubuntu-latest, windows-latest]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: \${{ matrix.node-version }}`,
          comment: '# Execução em matriz de configurações',
        },
      ],
      'Cache de Dependências': [
        {
          command: `jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Cache node modules
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            \${{ runner.os }}-node-`,
          comment: '# Cache inteligente de dependências',
        },
      ],
    },
  },
  gitlabIntermediario: {
    title: '🦊 GitLab CI Intermediário',
    level: 'intermediario',
    useCase: 'Recursos intermediários do GitLab CI',
    sections: {
      'Deploy com Ambiente': [
        {
          command: `deploy_staging:
  stage: deploy
  script:
    - echo "Deploying to staging..."
    - rsync -avz dist/ user@staging:/var/www/
  environment:
    name: staging
    url: https://staging.example.com
  only:
    - main`,
          comment: '# Deploy para ambiente staging',
        },
      ],
      'Testes Paralelos': [
        {
          command: `test:
  stage: test
  parallel: 4
  script:
    - npm run test -- --shard=\${CI_NODE_INDEX}/\${CI_NODE_TOTAL}
  artifacts:
    reports:
      junit: test-results/junit.xml`,
          comment: '# Execução paralela de testes',
        },
      ],
    },
  },
  argocdIntermediario: {
    title: '⛵ ArgoCD Intermediário',
    level: 'intermediario',
    useCase: 'Recursos intermediários do ArgoCD',
    sections: {
      'Instalação ArgoCD': [
        {
          command: 'kubectl create namespace argocd',
          comment: '# Cria namespace',
        },
        {
          command:
            'kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml',
          comment: '# Instala ArgoCD',
        },
        {
          command: 'kubectl get pods -n argocd',
          comment: '# Verifica instalação',
        },
        {
          command: 'kubectl port-forward svc/argocd-server -n argocd 8080:443',
          comment: '# Acesso UI',
        },
      ],
      'ArgoCD CLI': [
        {
          command: 'argocd login localhost:8080',
          comment: '# Login CLI',
        },
        {
          command: 'argocd app list',
          comment: '# Lista aplicações',
        },
        {
          command:
            'argocd app create guestbook --repo https://github.com/argoproj/argocd-example-apps.git --path guestbook --dest-server https://kubernetes.default.svc --dest-namespace default',
          comment: '# Cria aplicação',
        },
        {
          command: 'argocd app sync guestbook',
          comment: '# Sincroniza app',
        },
      ],
      'Application YAML': [
        {
          command: `apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/user/my-app.git
    targetRevision: HEAD
    path: manifests
  destination:
    server: https://kubernetes.default.svc
    namespace: my-app
  syncPolicy:
    automated:
      prune: true
      selfHeal: true`,
          comment: '# Definição de aplicação ArgoCD',
        },
      ],
    },
  },
  terraformIntermediario: {
    title: '🏗️ Terraform Intermediário',
    level: 'intermediario',
    useCase: 'Recursos intermediários do Terraform',
    sections: {
      'State Management': [
        {
          command: 'terraform state list',
          comment: '# Lista recursos',
        },
        {
          command: 'terraform state show aws_instance.web',
          comment: '# Mostra recurso',
        },
        {
          command: 'terraform state rm aws_instance.old',
          comment: '# Remove do state',
        },
        {
          command: 'terraform import aws_instance.web i-123456',
          comment: '# Importa recurso',
        },
      ],
      Modules: [
        {
          command: `module "vpc" {
  source = "./modules/vpc"
  cidr_block = "10.0.0.0/16"
}`,
          comment: '# Uso de módulos',
        },
        {
          command: 'terraform get',
          comment: '# Baixa modules',
        },
        {
          command: 'terraform graph',
          comment: '# Gera grafo de dependências',
        },
      ],
      'Variables e Outputs': [
        {
          command: `variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}`,
          comment: '# Definição de variável',
        },
        {
          command: `output "instance_ip" {
  description = "Public IP of EC2 instance"
  value       = aws_instance.web.public_ip
}`,
          comment: '# Definição de output',
        },
        {
          command: 'terraform apply -var="instance_type=t3.large"',
          comment: '# Variável inline',
        },
        {
          command: 'terraform apply -var-file="prod.tfvars"',
          comment: '# Arquivo de variáveis',
        },
      ],
    },
  },
  dockerIntermediario: {
    title: '🐳 Docker CI/CD Intermediário',
    level: 'intermediario',
    useCase: 'Recursos intermediários de Docker em CI/CD',
    sections: {
      'Multi-stage Build': [
        {
          command: `FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
          comment: '# Build multi-stage para otimização',
        },
      ],
      'docker-compose.yml': [
        {
          command: `version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass`,
          comment: '# Compose com aplicação e banco',
        },
      ],
      'CI/CD Commands': [
        {
          command:
            'docker-compose -f docker-compose.yml -f docker-compose.prod.yml build',
          comment: '# Build múltiplos',
        },
        {
          command: 'docker-compose up -d',
          comment: '# Start detached',
        },
        {
          command: 'docker-compose down',
          comment: '# Stop e remove',
        },
        {
          command: 'docker-compose logs -f app',
          comment: '# Logs em tempo real',
        },
      ],
    },
  },
  // Nível Avançado
  jenkinsAvancado: {
    title: '🔧 Jenkins Avançado',
    level: 'avancado',
    useCase: 'Recursos avançados do Jenkins',
    sections: {
      Notificações: [
        {
          command: `pipeline {
  agent any
  post {
    success {
      slackSend(channel: '#deployments', message: 'Deploy successful!')
    }
    failure {
      mail to: 'team@example.com', subject: 'Build Failed'
    }
  }
}`,
          comment: '# Configuração de notificações',
        },
      ],
    },
  },
  githubAvancado: {
    title: '🐙 GitHub Actions Avançado',
    level: 'avancado',
    useCase: 'Recursos avançados do GitHub Actions',
    sections: {
      'Deploy Multi-Ambiente': [
        {
          command: `name: Deploy
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Target environment'
        required: true
        default: 'staging'
        type: choice
        options:
        - staging
        - production
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to \${{ github.event.inputs.environment }}
        run: ./deploy.sh \${{ github.event.inputs.environment }}`,
          comment: '# Deploy manual com seleção de ambiente',
        },
      ],
      'Testes Automatizados': [
        {
          command: `jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test
      - name: Upload coverage
        uses: codecov/codecov-action@v1
        with:
          file: ./coverage/lcov.info`,
          comment: '# Execução de testes com upload de coverage',
        },
      ],
      'Releases Automáticos': [
        {
          command: `name: Release
on:
  push:
    tags:
      - 'v*'
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Create Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: \${{ github.ref }}
          release_name: Release \${{ github.ref }}
          draft: false
          prerelease: false`,
          comment: '# Criação automática de releases',
        },
      ],
    },
  },
  gitlabAvancado: {
    title: '🦊 GitLab CI Avançado',
    level: 'avancado',
    useCase: 'Recursos avançados do GitLab CI',
    sections: {
      'Multi-Project Pipeline': [
        {
          command: `build_api:
  stage: build
  trigger:
    project: my-group/api-project
    strategy: depend

build_frontend:
  stage: build
  script:
    - npm run build
  artifacts:
    paths:
      - dist/`,
          comment: '# Pipeline multi-projeto',
        },
      ],
      'Deploy Condicional': [
        {
          command: `deploy_production:
  stage: deploy
  script:
    - echo "Deploying to production..."
  rules:
    - if: \${CI_COMMIT_BRANCH} == \${CI_DEFAULT_BRANCH}
    - when: manual
  environment:
    name: production
    url: https://example.com`,
          comment: '# Deploy condicional com regras',
        },
      ],
      'Include Templates': [
        {
          command: `include:
  - local: '/templates/.gitlab-ci-template.yml'
  - project: 'my-group/common-ci'
    file: '/templates/node.yml'
    ref: main

variables:
  NODE_VERSION: "16"`,
          comment: '# Include de templates externos',
        },
      ],
    },
  },
  argocdAvancado: {
    title: '⛵ ArgoCD Avançado',
    level: 'avancado',
    useCase: 'Recursos avançados do ArgoCD',
    sections: {
      'App of Apps': [
        {
          command: `apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: root-app
spec:
  project: default
  source:
    repoURL: https://github.com/user/my-apps.git
    targetRevision: HEAD
    path: .
  destination:
    server: https://kubernetes.default.svc
    namespace: argocd
  syncPolicy:
    automated:
      prune: true`,
          comment: '# Padrão App of Apps para múltiplas aplicações',
        },
      ],
      'Progressive Delivery': [
        {
          command: `apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: my-app
spec:
  replicas: 5
  strategy:
    canary:
      steps:
      - setWeight: 20
      - setWeight: 40
      - setWeight: 60
      - setWeight: 80
      canaryService: my-app-canary
      stableService: my-app`,
          comment: '# Deploy progressivo com Canary',
        },
      ],
      'Sync Waves': [
        {
          command: `apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  annotations:
    argocd.argoproj.io/sync-options: CreateNamespace=true
    argocd.argoproj.io/sync-wave: "1"
spec:
  project: default
  source:
    repoURL: https://github.com/user/my-app.git
    targetRevision: HEAD
  destination:
    server: https://kubernetes.default.svc
    namespace: my-app`,
          comment: '# Sincronização com waves para ordem de deploy',
        },
      ],
      Notifications: [
        {
          command: `apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
spec:
  project: default
  source:
    repoURL: https://github.com/user/my-app.git
  destination:
    server: https://kubernetes.default.svc
  notification:
    triggers:
      - on-sync-status-unknown
      - on-sync-failed
      - on-sync-succeeded
    template:
      service: slack
      template: |
        text: |
          Application {{.app.metadata.name}} sync status is {{.app.status.sync.status}}
      recipients:
        - my-channel`,
          comment: '# Configuração de notificações',
        },
      ],
    },
  },
  terraformAvancado: {
    title: '🏗️ Terraform Avançado',
    level: 'avancado',
    useCase: 'Recursos avançados do Terraform',
    sections: {
      'Remote State': [
        {
          command: `terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}`,
          comment: '# Configuração de state remoto em S3',
        },
        {
          command: 'terraform force-unlock LOCK_ID',
          comment: '# Força unlock',
        },
        {
          command: 'terraform plan -out=tfplan',
          comment: '# Salva plano',
        },
        {
          command: 'terraform apply tfplan',
          comment: '# Aplica plano salvo',
        },
      ],
    },
  },
  dockerAvancado: {
    title: '🐳 Docker CI/CD Avançado',
    level: 'avancado',
    useCase: 'Recursos avançados de Docker em CI/CD',
    sections: {
      'Production Deploy': [
        {
          command:
            'docker-compose -f docker-compose.prod.yml up -d --remove-orphans',
          comment: '# Deploy prod',
        },
        {
          command: 'docker-compose pull',
          comment: '# Atualiza imagens',
        },
        {
          command: 'docker-compose restart app',
          comment: '# Restart serviço',
        },
        {
          command: 'docker-compose exec app npm run migrate',
          comment: '# Executa comando',
        },
      ],
      'Health Checks': [
        {
          command: `version: '3.8'
services:
  app:
    image: myapp:latest
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s`,
          comment: '# Configuração de health checks',
        },
      ],
    },
  },
};
