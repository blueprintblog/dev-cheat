export const cloudCommands = {
  awsBasico: {
    title: '🟠 AWS Básico',
    level: 'basico',
    useCase: 'Comandos essenciais da Amazon Web Services',
    sections: {
      'AWS CLI - Configuração': [
        {
          command:
            'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"',
          comment: '# Download AWS CLI',
        },
        {
          command: 'unzip awscliv2.zip',
          comment: '# Extrai arquivo',
        },
        {
          command: 'sudo ./aws/install',
          comment: '# Instala AWS CLI',
        },
        {
          command: 'aws --version',
          comment: '# Verifica instalação',
        },
        {
          command: 'aws configure',
          comment: '# Configuração interativa',
        },
        {
          command: 'aws configure --profile dev',
          comment: '# Perfil específico',
        },
        {
          command: 'aws configure list',
          comment: '# Lista configurações',
        },
        {
          command: 'aws configure list-profiles',
          comment: '# Lista perfis',
        },
        {
          command: 'export AWS_PROFILE=dev',
          comment: '# Define perfil',
        },
      ],
      'EC2 - Instâncias Básicas': [
        {
          command: 'aws ec2 describe-instances',
          comment: '# Lista todas instâncias',
        },
        {
          command:
            'aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId,State.Name,Tags[?Key==\'Name\'].Value]"',
          comment: '# Lista com formato customizado',
        },
        {
          command:
            'aws ec2 describe-instances --filters Name=instance-state-name,Values=running',
          comment: '# Lista instâncias ativas',
        },
        {
          command: 'aws ec2 start-instances --instance-ids i-1234567890abcdef0',
          comment: '# Inicia instância',
        },
        {
          command: 'aws ec2 stop-instances --instance-ids i-1234567890abcdef0',
          comment: '# Para instância',
        },
        {
          command:
            'aws ec2 reboot-instances --instance-ids i-1234567890abcdef0',
          comment: '# Reinicia instância',
        },
        {
          command:
            'aws ec2 terminate-instances --instance-ids i-1234567890abcdef0',
          comment: '# Termina instância',
        },
      ],
      'S3 - Storage Básico': [
        {
          command: 'aws s3 ls',
          comment: '# Lista buckets',
        },
        {
          command: 'aws s3 mb s3://my-bucket-name',
          comment: '# Cria bucket',
        },
        {
          command: 'aws s3 rb s3://my-bucket-name',
          comment: '# Remove bucket vazio',
        },
        {
          command: 'aws s3 rb s3://my-bucket-name --force',
          comment: '# Remove com conteúdo',
        },
        {
          command: 'aws s3 ls s3://my-bucket/',
          comment: '# Lista arquivos',
        },
        {
          command: 'aws s3 cp file.txt s3://my-bucket/',
          comment: '# Upload',
        },
        {
          command: 'aws s3 cp s3://my-bucket/file.txt .',
          comment: '# Download',
        },
        {
          command: 'aws s3 mv s3://old/file.txt s3://new/file.txt',
          comment: '# Move',
        },
        {
          command: 'aws s3 rm s3://my-bucket/file.txt',
          comment: '# Remove arquivo',
        },
      ],
    },
  },
  azureBasico: {
    title: '🔵 Azure Básico',
    level: 'basico',
    useCase: 'Comandos essenciais do Microsoft Azure',
    sections: {
      'Azure CLI - Configuração': [
        {
          command: 'curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash',
          comment: '# Instala Azure CLI',
        },
        {
          command: 'az --version',
          comment: '# Verifica instalação',
        },
        {
          command: 'az upgrade',
          comment: '# Atualiza CLI',
        },
        {
          command: 'az login',
          comment: '# Login interativo',
        },
        {
          command: 'az account list',
          comment: '# Lista contas',
        },
        {
          command: 'az account set --subscription "Subscription Name"',
          comment: '# Define assinatura',
        },
        {
          command: 'az account show',
          comment: '# Mostra conta atual',
        },
        {
          command: 'az configure',
          comment: '# Configuração interativa',
        },
        {
          command:
            'az configure --defaults group=myResourceGroup location=eastus',
          comment: '# Define padrões',
        },
      ],
      'Virtual Machines': [
        {
          command: 'az group create --name myResourceGroup --location eastus',
          comment: '# Cria resource group',
        },
        {
          command: 'az group list',
          comment: '# Lista grupos',
        },
        {
          command: 'az group show --name myResourceGroup',
          comment: '# Mostra grupo',
        },
        {
          command: 'az group delete --name myResourceGroup --yes',
          comment: '# Remove grupo',
        },
        {
          command:
            'az vm create --resource-group myResourceGroup --name myVM --image UbuntuLTS --admin-username azureuser --generate-ssh-keys',
          comment: '# Cria VM',
        },
        {
          command: 'az vm list --resource-group myResourceGroup',
          comment: '# Lista VMs',
        },
        {
          command: 'az vm start --resource-group myResourceGroup --name myVM',
          comment: '# Inicia VM',
        },
        {
          command: 'az vm stop --resource-group myResourceGroup --name myVM',
          comment: '# Para VM',
        },
      ],
      Storage: [
        {
          command:
            'az storage account create --name mystorageaccount --resource-group myResourceGroup --location eastus --sku Standard_LRS',
          comment: '# Cria storage account',
        },
        {
          command: 'az storage account list --resource-group myResourceGroup',
          comment: '# Lista storage accounts',
        },
        {
          command:
            'az storage container create --name mycontainer --account-name mystorageaccount',
          comment: '# Cria container',
        },
        {
          command: 'az storage container list --account-name mystorageaccount',
          comment: '# Lista containers',
        },
        {
          command:
            'az storage blob upload --file myfile.txt --container-name mycontainer --name blobname.txt --account-name mystorageaccount',
          comment: '# Upload arquivo',
        },
        {
          command:
            'az storage blob download --container-name mycontainer --name blobname.txt --file downloaded.txt --account-name mystorageaccount',
          comment: '# Download arquivo',
        },
      ],
    },
  },
  gcpBasico: {
    title: '🔵 GCP Básico',
    level: 'basico',
    useCase: 'Comandos essenciais do Google Cloud Platform',
    sections: {
      'gcloud CLI - Configuração': [
        {
          command: 'curl https://sdk.cloud.google.com | bash',
          comment: '# Instala gcloud CLI',
        },
        {
          command: 'exec -l $SHELL',
          comment: '# Reinicia shell',
        },
        {
          command: 'gcloud --version',
          comment: '# Verifica instalação',
        },
        {
          command: 'gcloud components update',
          comment: '# Atualiza',
        },
        {
          command: 'gcloud auth login',
          comment: '# Login no browser',
        },
        {
          command: 'gcloud auth application-default login',
          comment: '# Credenciais app',
        },
        {
          command: 'gcloud config list',
          comment: '# Mostra configuração',
        },
        {
          command: 'gcloud config set project my-project-id',
          comment: '# Define projeto',
        },
        {
          command: 'gcloud config set compute/region us-central1',
          comment: '# Define região',
        },
      ],
      'Compute Engine': [
        {
          command:
            'gcloud compute instances create my-vm --machine-type=e2-medium --image-family=ubuntu-2004-lts --image-project=ubuntu-os-cloud',
          comment: '# Cria VM',
        },
        {
          command: 'gcloud compute instances list',
          comment: '# Lista VMs',
        },
        {
          command: 'gcloud compute instances describe my-vm',
          comment: '# Descreve VM',
        },
        {
          command: 'gcloud compute instances start my-vm',
          comment: '# Inicia VM',
        },
        {
          command: 'gcloud compute instances stop my-vm',
          comment: '# Para VM',
        },
        {
          command: 'gcloud compute instances reset my-vm',
          comment: '# Reinicia VM',
        },
        {
          command: 'gcloud compute instances delete my-vm',
          comment: '# Remove VM',
        },
      ],
      'Cloud Storage': [
        {
          command: 'gsutil mb gs://my-bucket-name',
          comment: '# Cria bucket',
        },
        {
          command: 'gsutil ls',
          comment: '# Lista buckets',
        },
        {
          command: 'gsutil ls gs://my-bucket/',
          comment: '# Lista conteúdo',
        },
        {
          command: 'gsutil rb gs://my-bucket-name',
          comment: '# Remove bucket vazio',
        },
        {
          command: 'gsutil cp file.txt gs://my-bucket/',
          comment: '# Upload',
        },
        {
          command: 'gsutil cp gs://my-bucket/file.txt .',
          comment: '# Download',
        },
        {
          command: 'gsutil mv gs://old/file.txt gs://new/file.txt',
          comment: '# Move',
        },
        {
          command: 'gsutil rm gs://my-bucket/file.txt',
          comment: '# Remove',
        },
      ],
    },
  },
  contaboBasico: {
    title: '🟢 Contabo Básico',
    level: 'basico',
    useCase: 'Comandos essenciais para gerenciamento de servidores Contabo',
    sections: {
      'SSH e Acesso': [
        {
          command: 'ssh root@YOUR_SERVER_IP',
          comment: '# Conexão básica',
        },
        {
          command: 'ssh -p 22 root@YOUR_SERVER_IP',
          comment: '# Porta específica',
        },
        {
          command: 'ssh -i ~/.ssh/private_key root@YOUR_SERVER_IP',
          comment: '# Com chave SSH',
        },
        {
          command: 'scp file.txt root@YOUR_SERVER_IP:/root/',
          comment: '# Upload',
        },
        {
          command: 'scp root@YOUR_SERVER_IP:/root/file.txt .',
          comment: '# Download',
        },
        {
          command: 'scp -r ./folder root@YOUR_SERVER_IP:/root/',
          comment: '# Upload pasta',
        },
        {
          command: 'rsync -avz ./local/ root@YOUR_SERVER_IP:/remote/',
          comment: '# Sync eficiente',
        },
      ],
      'Informações do Sistema': [
        {
          command: 'uname -a',
          comment: '# Info completa do sistema',
        },
        {
          command: 'cat /etc/os-release',
          comment: '# Distribuição Linux',
        },
        {
          command: 'free -h',
          comment: '# Uso de memória',
        },
        {
          command: 'df -h',
          comment: '# Espaço em disco',
        },
        {
          command: 'lscpu',
          comment: '# Info da CPU',
        },
        {
          command: 'top',
          comment: '# Processos em tempo real',
        },
        {
          command: 'htop',
          comment: '# Top melhorado',
        },
      ],
    },
  },
  awsIntermediario: {
    title: '🟠 AWS Intermediário',
    level: 'intermediario',
    useCase: 'Recursos intermediários da Amazon Web Services',
    sections: {
      'EC2 - Recursos Intermediários': [
        {
          command:
            'aws ec2 run-instances --image-id ami-12345678 --instance-type t2.micro --key-name my-key',
          comment: '# Cria instância',
        },
        {
          command:
            'aws ec2 run-instances --image-id ami-12345678 --instance-type t2.micro --security-group-ids sg-903004f8 --subnet-id subnet-6e7f829e --user-data file://script.sh',
          comment: '# Cria com configurações avançadas',
        },
        {
          command:
            'aws ec2 monitor-instances --instance-ids i-1234567890abcdef0',
          comment: '# Ativa monitoring',
        },
        {
          command:
            'aws ec2 unmonitor-instances --instance-ids i-1234567890abcdef0',
          comment: '# Desativa monitoring',
        },
      ],
      'S3 - Recursos Intermediários': [
        {
          command: 'aws s3 sync ./local-folder s3://my-bucket/',
          comment: '# Sincroniza',
        },
        {
          command: 'aws s3 sync s3://my-bucket/ ./local-folder',
          comment: '# Download sync',
        },
        {
          command: 'aws s3 sync ./local s3://bucket --delete',
          comment: '# Remove extras',
        },
      ],
      'Lambda - Serverless': [
        {
          command: 'aws lambda list-functions',
          comment: '# Lista funções',
        },
        {
          command: 'aws lambda get-function --function-name my-function',
          comment: '# Obtém função',
        },
        {
          command:
            'aws lambda create-function --function-name my-function --runtime nodejs18.x --role arn:aws:iam::123456789012:role/lambda-role --handler index.handler --zip-file fileb://function.zip',
          comment: '# Cria função',
        },
        {
          command:
            'aws lambda update-function-code --function-name my-function --zip-file fileb://function.zip',
          comment: '# Atualiza código',
        },
        {
          command: 'aws lambda invoke --function-name my-function output.txt',
          comment: '# Invoca função',
        },
        {
          command: 'aws lambda delete-function --function-name my-function',
          comment: '# Remove função',
        },
      ],
    },
  },
  azureIntermediario: {
    title: '🔵 Azure Intermediário',
    level: 'intermediario',
    useCase: 'Recursos intermediários do Microsoft Azure',
    sections: {
      'Azure Functions': [
        {
          command:
            'az functionapp create --resource-group myResourceGroup --consumption-plan-location eastus --runtime node --runtime-version 18 --functions-version 4 --name myfunctionapp --storage-account mystorageaccount',
          comment: '# Cria function app',
        },
        {
          command: 'az functionapp list --resource-group myResourceGroup',
          comment: '# Lista functions',
        },
        {
          command:
            'az functionapp show --name myfunctionapp --resource-group myResourceGroup',
          comment: '# Mostra function',
        },
        {
          command:
            'az functionapp deployment source config-zip --resource-group myResourceGroup --name myfunctionapp --src myfunction.zip',
          comment: '# Deploy ZIP',
        },
        {
          command:
            'az functionapp config appsettings set --name myfunctionapp --resource-group myResourceGroup --settings "MySetting=Value"',
          comment: '# Configura app settings',
        },
      ],
      'Storage - Recursos Avançados': [
        {
          command:
            'az storage account show-connection-string --name mystorageaccount --resource-group myResourceGroup',
          comment: '# Mostra connection string',
        },
        {
          command:
            'az storage account keys list --account-name mystorageaccount --resource-group myResourceGroup',
          comment: '# Lista chaves',
        },
        {
          command:
            'az storage blob list --container-name mycontainer --account-name mystorageaccount',
          comment: '# Lista blobs',
        },
      ],
    },
  },
  gcpIntermediario: {
    title: '🔵 GCP Intermediário',
    level: 'intermediario',
    useCase: 'Recursos intermediários do Google Cloud Platform',
    sections: {
      'Cloud Functions': [
        {
          command:
            'gcloud functions deploy my-function --runtime nodejs18 --trigger-http --allow-unauthenticated --entry-point helloWorld',
          comment: '# Deploy função',
        },
        {
          command: 'gcloud functions list',
          comment: '# Lista funções',
        },
        {
          command: 'gcloud functions describe my-function',
          comment: '# Descreve função',
        },
        {
          command: 'gcloud functions delete my-function',
          comment: '# Remove função',
        },
        {
          command:
            'gcloud functions call my-function --data \'{"name":"World"}\'',
          comment: '# Invoca função',
        },
      ],
      'Compute Engine - Recursos Avançados': [
        {
          command: 'gcloud compute ssh my-vm',
          comment: '# Conecta via SSH',
        },
        {
          command: 'gcloud compute scp local-file my-vm:~/remote-file',
          comment: '# Copia arquivo',
        },
        {
          command: 'gcloud compute scp my-vm:~/remote-file local-file',
          comment: '# Download arquivo',
        },
        {
          command:
            'gcloud compute firewall-rules create allow-http --allow tcp:80 --description "Allow HTTP traffic"',
          comment: '# Cria regra firewall',
        },
        {
          command: 'gcloud compute firewall-rules list',
          comment: '# Lista regras firewall',
        },
      ],
    },
  },
  contaboIntermediario: {
    title: '🟢 Contabo Intermediário',
    level: 'intermediario',
    useCase: 'Recursos intermediários para gerenciamento Contabo',
    sections: {
      'Gerenciamento via API': [
        {
          command: 'curl -X POST "https://api.contabo.com/v1/users/login" \\',
          comment: '# Login API',
        },
        {
          command: '  -H "Content-Type: application/json" \\',
          comment: '# Header JSON',
        },
        {
          command:
            '  -d \'{"email":"your@email.com","password":"yourpassword"}\'',
          comment: '# Dados login',
        },
        {
          command: 'curl -X GET "https://api.contabo.com/v1/instances" \\',
          comment: '# Lista instâncias',
        },
        {
          command: '  -H "Authorization: Bearer YOUR_TOKEN"',
          comment: '# Header autorização',
        },
        {
          command:
            'curl -X POST "https://api.contabo.com/v1/instances/INSTANCE_ID/restart" \\',
          comment: '# Reinicia instância',
        },
      ],
      Monitoramento: [
        {
          command: 'iotop',
          comment: '# I/O de disco',
        },
        {
          command: 'nethogs',
          comment: '# Uso de rede por processo',
        },
        {
          command: 'journalctl -f',
          comment: '# Logs do sistema em tempo real',
        },
        {
          command: 'tail -f /var/log/syslog',
          comment: '# Logs do sistema',
        },
        {
          command: 'tail -f /var/log/auth.log',
          comment: '# Logs de autenticação',
        },
        {
          command: 'dmesg | tail',
          comment: '# Mensagens do kernel',
        },
      ],
    },
  },
  multiCloud: {
    title: '🟣 Multi-Cloud',
    level: 'avancado',
    useCase: 'Ferramentas e estratégias multi-cloud',
    sections: {
      'Comparação de Serviços': [
        {
          command: 'AWS: EC2',
          comment: '# Instâncias virtuais',
        },
        {
          command: 'Azure: Virtual Machines',
          comment: '# VMs na Azure',
        },
        {
          command: 'GCP: Compute Engine',
          comment: '# VMs no Google',
        },
        {
          command: 'AWS: S3',
          comment: '# Object storage',
        },
        {
          command: 'Azure: Blob Storage',
          comment: '# Armazenamento de blobs',
        },
        {
          command: 'GCP: Cloud Storage',
          comment: '# Object storage',
        },
        {
          command: 'AWS: Lambda',
          comment: '# Funções serverless',
        },
        {
          command: 'Azure: Functions',
          comment: '# Funções serverless',
        },
        {
          command: 'GCP: Cloud Functions',
          comment: '# Funções serverless',
        },
      ],
      'Ferramentas Multi-Cloud': [
        {
          command: 'terraform init',
          comment: '# Inicia projeto',
        },
        {
          command: 'terraform plan',
          comment: '# Preview mudanças',
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
          command: 'pulumi up',
          comment: '# Deploy recursos',
        },
        {
          command: 'pulumi preview',
          comment: '# Preview mudanças',
        },
        {
          command: 'pulumi destroy',
          comment: '# Remove recursos',
        },
        {
          command: 'kubectl get nodes',
          comment: '# Lista nós',
        },
        {
          command: 'kubectl get pods',
          comment: '# Lista pods',
        },
        {
          command: 'kubectl apply -f deployment.yaml',
          comment: '# Aplica config',
        },
      ],
    },
  },
  terraformCloud: {
    title: '🏗️ Terraform Multi-Cloud',
    level: 'avancado',
    useCase: 'Infraestrutura como código para múltiplos provedores',
    sections: {
      'Terraform AWS': [
        {
          command: `provider "aws" {
  region = "us-east-1"
}`,
          comment: '# Provider AWS',
        },
        {
          command: `resource "aws_instance" "web" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
}`,
          comment: '# Instância EC2',
        },
        {
          command: `resource "aws_s3_bucket" "storage" {
  bucket = "my-unique-bucket-name"
}`,
          comment: '# Bucket S3',
        },
        {
          command: 'terraform fmt',
          comment: '# Formata código',
        },
        {
          command: 'terraform validate',
          comment: '# Valida sintaxe',
        },
      ],
      'Terraform Azure': [
        {
          command: `provider "azurerm" {
  features {}
}`,
          comment: '# Provider Azure',
        },
        {
          command: `resource "azurerm_resource_group" "main" {
  name     = "my-resources"
  location = "East US"
}`,
          comment: '# Resource Group',
        },
        {
          command: `resource "azurerm_virtual_machine" "main" {
  name                  = "my-vm"
  location              = azurerm_resource_group.main.location
  resource_group_name   = azurerm_resource_group.main.name
}`,
          comment: '# Virtual Machine',
        },
        {
          command: `terraform {
  backend "azurerm" {
    resource_group_name  = "storage-account-resource-group"
    storage_account_name = "storageaccountname"
    container_name       = "containername"
    key                  = "terraform.tfstate"
  }
}`,
          comment: '# Backend remoto',
        },
      ],
    },
  },
  kubernetesCloud: {
    title: '⚓ Kubernetes Multi-Cloud',
    level: 'avancado',
    useCase: 'Orquestração de containers em múltiplos provedores',
    sections: {
      'EKS (AWS)': [
        {
          command:
            'aws eks create-cluster --name my-cluster --role-arn arn:aws:iam::123456789012:role/eks-service-role --resources-vpc-config subnetIds=subnet-12345,subnet-67890',
          comment: '# Cria cluster EKS',
        },
        {
          command:
            'aws eks update-kubeconfig --name my-cluster --region us-east-1',
          comment: '# Atualiza kubeconfig',
        },
        {
          command: 'aws eks list-clusters',
          comment: '# Lista clusters',
        },
        {
          command: 'aws eks describe-cluster --name my-cluster',
          comment: '# Descreve cluster',
        },
        {
          command:
            'aws eks create-nodegroup --cluster-name my-cluster --nodegroup-name my-nodegroup --scaling-config minSize=1,maxSize=3,desiredSize=2 --subnets subnet-12345,subnet-67890',
          comment: '# Cria node group',
        },
      ],
      'AKS (Azure)': [
        {
          command:
            'az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 1 --enable-addons monitoring --generate-ssh-keys',
          comment: '# Cria cluster AKS',
        },
        {
          command:
            'az aks get-credentials --resource-group myResourceGroup --name myAKSCluster',
          comment: '# Obtém credenciais',
        },
        {
          command: 'az aks list --resource-group myResourceGroup',
          comment: '# Lista clusters',
        },
        {
          command:
            'az aks scale --resource-group myResourceGroup --name myAKSCluster --node-count 3',
          comment: '# Escala cluster',
        },
      ],
      'GKE (GCP)': [
        {
          command:
            'gcloud container clusters create my-cluster --num-nodes=1 --zone=us-central1-a',
          comment: '# Cria cluster GKE',
        },
        {
          command:
            'gcloud container clusters get-credentials my-cluster --zone=us-central1-a',
          comment: '# Obtém credenciais',
        },
        {
          command: 'gcloud container clusters list',
          comment: '# Lista clusters',
        },
        {
          command:
            'gcloud container clusters resize my-cluster --node-pool=default-pool --num-nodes=3 --zone=us-central1-a',
          comment: '# Redimensiona cluster',
        },
      ],
    },
  },
};
