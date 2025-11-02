import CardContribuete from '@/components/cards/CardContribuete';
import CardTitle from '@/components/cards/CardTitle';
import { IoLibrary } from 'react-icons/io5';
import { FaLinux } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaDocker } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import { SiKubernetes } from 'react-icons/si';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { SiGnubash } from 'react-icons/si';
import { TiCloudStorage } from 'react-icons/ti';
import { TbWorldWww } from 'react-icons/tb';
import { MdOutlineSecurity } from 'react-icons/md';
import { GoFileSubmodule } from 'react-icons/go';
import { FaPython } from 'react-icons/fa';
import { FaWindows } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <CardTitle
        icon={<IoLibrary className="inline-block mr-2" />}
        title={'Cheatsheets Hub'}
        subtitle={
          'Central de referências rápidas para desenvolvedores e sysadmins'
        }
      />

      <div className="grid-cards-hub">
        <div className="col-span-full w-full text-center border-b border-gray-600/50">
          <span className="inline-block text-4xl text-gray-100 mb-7 mt-10">
            Desenvolvimento & Programação
          </span>
        </div>
        <div
          className="cheatsheet-card bash"
          data-category="development"
          data-tags="bash terminal linux">
          <span className="text-5xl block mb-5">
            <SiGnubash className="text-[#2ecc71]" />
          </span>
          <h3 className="card-hub-title">Bash</h3>
          <p className="card-description">
            Comandos essenciais do terminal Linux do iniciante ao avançado
          </p>
          <ul className="card-features">
            <li>Navegação e arquivos</li>
            <li>Processos e monitoramento</li>
            <li>Scripts e automação</li>
            <li>Rede e conectividade</li>
          </ul>
          <Link href="/bash" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>
        <div
          className="cheatsheet-card powershell"
          data-category="development"
          data-tags="powershell windows automacao">
          <span className="text-5xl block mb-5">
            <FaWindows className="text-[#007ACC]" />
          </span>
          <h3 className="card-hub-title">PowerShell</h3>
          <p className="card-description">
            Automação e administração para ambientes Windows e Azure
          </p>
          <ul className="card-features">
            <li>Scripts e automação</li>
            <li>Active Directory</li>
            <li>Gerenciamento de sistema</li>
            <li>Cloud e DevOps</li>
          </ul>
          <Link href="/powershell" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>
        <div
          className="cheatsheet-card git"
          data-category="development"
          data-tags="git versionamento controle">
          <span className="text-5xl block mb-5">
            <FaGitAlt className="text-[#e74c3c]" />
          </span>
          <h3 className="card-hub-title">Git</h3>
          <p className="card-description">
            Controle de versão e colaboração em projetos de software
          </p>
          <ul className="card-features">
            <li>Branches e merge</li>
            <li>Rebase e cherry-pick</li>
            <li>Stash e tags</li>
            <li>Colaboração remota</li>
          </ul>
          <Link href="/git" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>

        <div
          className="cheatsheet-card scripts"
          data-category="development"
          data-tags="scripts automacao bash">
          <span className="text-5xl block mb-5">
            <MdDescription className="text-[#9b59b6]" />
          </span>
          <h3 className="card-hub-title">Scripts</h3>
          <p className="card-description">
            Automação e scripts para produtividade no terminal
          </p>
          <ul className="card-features">
            <li>Scripts de backup</li>
            <li>Automação de tarefas</li>
            <li>Utilitários personalizados</li>
            <li>Integração com APIs</li>
          </ul>
          <Link href="/scripts" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>
        <div
          className="cheatsheet-card javascript"
          data-category="development"
          data-tags="javascript es6 frontend backend">
          <span className="text-5xl block mb-5">
            <IoLogoJavascript className="text-[#f1c40f]" />
          </span>
          <h3 className="card-hub-title">JavaScript</h3>
          <p className="card-description">
            Guia completo de JavaScript ES6+ para desenvolvimento moderno
          </p>
          <ul className="card-features">
            <li>ES6+ Features</li>
            <li>Async/Await</li>
            <li>Manipulação DOM</li>
            <li>Arrays e objetos</li>
          </ul>
          <Link href="/javascript" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>
        <div
          className="cheatsheet-card python"
          data-category="development"
          data-tags="python programacao data science">
          <span className="text-5xl block mb-5">
            <FaPython className="text-[#3776ab]" />
          </span>
          <h3 className="card-hub-title">Python</h3>
          <p className="card-description">
            Linguagem versátil para desenvolvimento web, ciência de dados e
            automação
          </p>
          <ul className="card-features">
            <li>Estruturas de dados</li>
            <li>Programação orientada a objetos</li>
            <li>Bibliotecas científicas</li>
            <li>Web e automação</li>
          </ul>
          <Link href="/python" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>
        <div
          className="cheatsheet-card html"
          data-category="development"
          data-tags="html web frontend">
          <span className="text-5xl block mb-5">
            <FaHtml5 className="text-[#e34c26]" />
          </span>
          <h3 className="card-hub-title">HTML5</h3>
          <p className="card-description">
            Estrutura semântica e elementos modernos para desenvolvimento web
          </p>
          <ul className="card-features">
            <li>Estrutura básica</li>
            <li>Elementos semânticos</li>
            <li>Formulários avançados</li>
            <li>Multimídia e acessibilidade</li>
          </ul>
          <Link href="/html" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>
        <div
          className="cheatsheet-card css"
          data-category="development"
          data-tags="css web frontend design">
          <span className="text-5xl block mb-5">
            <FaCss3Alt className="text-[#1572b6]" />
          </span>
          <h3 className="card-hub-title">CSS3</h3>
          <p className="card-description">
            Estilização moderna, layouts responsivos e animações avançadas
          </p>
          <ul className="card-features">
            <li>Seletores e box model</li>
            <li>Flexbox e Grid</li>
            <li>Animações e transições</li>
            <li>Design responsivo</li>
          </ul>
          <Link href="/css" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>
      </div>

      <div className="grid-cards-hub">
        <div className="col-span-full text-center  border-b border-gray-600/50 ">
          <span className="inline-block text-4xl text-gray-100 mb-7 mt-10 ">
            DevOps & Infraestrutura
          </span>
        </div>
        <div
          className="cheatsheet-card docker"
          data-category="devops"
          data-tags="docker containers devops">
          <span className="title-icon-card">
            <FaDocker className="text-[#3498db]" />
          </span>
          <h3 className="card-hub-title">Docker</h3>
          <p className="card-description">
            Containers e orquestração para desenvolvimento moderno
          </p>
          <ul className="card-features">
            <li>Comandos essenciais</li>
            <li>Dockerfile e imagens</li>
            <li>Redes e volumes</li>
            <li>Docker Compose</li>
          </ul>
          <Link href="/docker" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>
        <div
          className="cheatsheet-card kubernetes"
          data-category="devops"
          data-tags="kubernetes k8s orquestracao">
          <span className="title-icon-card">
            <SiKubernetes className="text-[#2980b9]" />
          </span>
          <h3 className="card-hub-title">Kubernetes</h3>
          <p className="card-description">
            Orquestração de containers em escala
          </p>
          <ul className="card-features">
            <li>Pods e serviços</li>
            <li>Deployments</li>
            <li>Ingress e networking</li>
            <li>Monitoramento</li>
          </ul>
          <Link href="/kubernetes" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>
        <div
          className="cheatsheet-card cicd"
          data-category="devops"
          data-tags="cicd pipelines automacao">
          <span className="title-icon-card">
            <AiOutlineDeploymentUnit className="text-[#95a5a6]" />
          </span>
          <h3 className="card-hub-title">CI/CD</h3>
          <p className="card-description">
            Integração contínua e deploy automatizado
          </p>
          <ul className="card-features">
            <li>Pipelines GitHub Actions</li>
            <li>GitLab CI/CD</li>
            <li>Jenkins</li>
            <li>Best practices</li>
          </ul>
          <Link href="/cicd" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>
        <div
          className="cheatsheet-card cloud"
          data-category="devops"
          data-tags="cloud aws azure gcp">
          <span className="title-icon-card">
            <TiCloudStorage className="text-[#e74c3c]" />
          </span>
          <h3 className="card-Hub-title">Cloud Computing</h3>
          <p className="card-description">
            Serviços em nuvem para aplicações modernas
          </p>
          <ul className="card-features">
            <li>AWS essentials</li>
            <li>Azure services</li>
            <li>Google Cloud Platform</li>
            <li>Serverless</li>
          </ul>
          <Link href="/cloud" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>
      </div>

      <div className="grid-cards-hub">
        <div className="col-span-full text-center  border-b border-gray-600/50">
          <span className="inline-block text-4xl text-gray-100 mb-7 mt-10">
            Sistema & Segurança
          </span>
        </div>
        <div
          className="cheatsheet-card linux"
          data-category="system"
          data-tags="linux sistema administracao">
          <span className="title-icon-card">
            <FaLinux className="text-[#d35400]" />
          </span>
          <h3 className="card-hub-title">Linux</h3>
          <p className="card-description">
            Administração e gerenciamento de sistemas Linux
          </p>
          <ul className="card-features">
            <li>Gerenciamento de pacotes</li>
            <li>Usuários e permissões</li>
            <li>Serviços e daemons</li>
            <li>Monitoramento</li>
          </ul>
          <Link href="/linux" className="card-button">
            Acessar Cheatsheet →
          </Link>
        </div>

        <div
          className="cheatsheet-card files"
          data-category="system"
          data-tags="arquivos sistema gerenciamento">
          <span className="title-icon-card">
            <GoFileSubmodule className="text-[#f1c40f]" />
          </span>
          <h3 className="card-hub-title">Sistema &amp; Arquivos</h3>
          <p className="card-description">
            Gerenciamento avançado de arquivos e diretórios
          </p>
          <ul className="card-features">
            <li>Permissões e ownership</li>
            <li>Links simbólicos</li>
            <li>Compressão</li>
            <li>Backup e restore</li>
          </ul>
          <a href="/filesystem" className="card-button">
            Acessar Cheatsheet →
          </a>
        </div>

        <div
          className="cheatsheet-card network"
          data-category="system"
          data-tags="rede networking tcpip">
          <span className="title-icon-card">
            <TbWorldWww className="text-[#3498db]" />
          </span>
          <h3 className="card-hub-title">Rede Avançada</h3>
          <p className="card-description">
            Configuração e troubleshooting de redes
          </p>
          <ul className="card-features">
            <li>Configuração TCP/IP</li>
            <li>Ferramentas de diagnóstico</li>
            <li>Firewall e segurança</li>
            <li>VPN e túneis</li>
          </ul>
          <a href="/network" className="card-button">
            Acessar Cheatsheet →
          </a>
        </div>

        <div
          className="cheatsheet-card security"
          data-category="system"
          data-tags="seguranca devsecops criptografia">
          <span className="title-icon-card">
            <MdOutlineSecurity className="text-[#e67e22]" />
          </span>
          <h3 className="card-hub-title">Segurança</h3>
          <p className="card-description">
            DevSecOps e melhores práticas de segurança
          </p>
          <ul className="card-features">
            <li>Hardening de sistemas</li>
            <li>Criptografia</li>
            <li>Scan de vulnerabilidades</li>
            <li>Monitoramento</li>
          </ul>
          <a href="/devsecops" className="card-button">
            Acessar Cheatsheet →
          </a>
        </div>
      </div>

      <CardContribuete />
    </>
  );
}
