# Changelog

Este documento registra todas as mudanças significativas implementadas no projeto de Cheatsheets.

---

## [v4.2.7] - 2025-11-11

### 🛠️ Nova Funcionalidade: Linux Troubleshooting

#### Página de Troubleshooting

- **Arquivos**: `data/troubleshooting-data.js` e `app/troubleshooting/page.js`
- **Conceito**: Formato inovador "ERRO → SOLUÇÃO" para resolver problemas Linux rapidamente
- **Conteúdo**: 20+ problemas comuns documentados com soluções diretas

#### Estrutura de Dados

- **Formato Simplificado**: `error → errorMessage → solution → commands`
- **Sem Níveis**: Foco exclusivo na resolução de problemas
- **Comandos Copiáveis**: Botão de cópia instantânea para cada comando
- **Soluções Claras**: Descrição direta do que fazer

#### Problemas Documentados

- **Montagem de Dispositivos**:
  - USB/Dispositivo não aparece
  - Permissão negada ao montar USB
  - Dispositivo ocupado/em uso
  - Sistema de arquivos não reconhecido
  - Sistema de arquivos corrompido

- **Rede e Conectividade**:
  - Sem conexão com internet
  - DNS não funciona
  - WiFi não conecta
  - Porta bloqueada pelo firewall

- **Processos e Serviços**:
  - Aplicação/processo travado
  - Serviço não inicia
  - Porta já está em uso

- **Disco e Espaço**:
  - Disco cheio
  - Permissão negada
  - Inodes esgotados
  - Disco readonly

- **Kernel e Boot**:
  - Kernel Panic
  - Boot falhou

- **Memória**:
  - Memória insuficiente

#### Design e Funcionalidades

- **Interface Direta**: Erro em vermelho, solução em verde
- **Busca Eficiente**: Barra de pesquisa para encontrar problemas rapidamente
- **Cópia Instantânea**: Feedback visual "Copiado!" ao copiar comandos
- **Layout Responsivo**: Otimizado para desktop e mobile
- **Cores Intuitivas**: Vermelho para problemas, verde para soluções
- **Estatísticas**: Contador total de problemas documentados

#### Experiência do Usuário

- **Formato Linear**: Sem categorias complexas ou navegação desnecessária
- **Solução Imediata**: Vê o erro, copia a solução, resolve o problema
- **Feedback Visual**: Confirmação visual quando comando é copiado
- **Acesso Rápido**: Página acessível via `/troubleshooting`

#### Estatísticas do Projeto

- **Novo Total**: 21 páginas funcionais (adicionada troubleshooting)
- **Formato Inovador**: Primeira página com formato ERRO → SOLUÇÃO
- **Cobertura de Problemas**: Complementa as cheatsheets existentes com soluções práticas
- **Foco em Produtividade**: Reduz tempo de diagnóstico e resolução

---

## [v4.2.6] - 2025-11-05

### 🐍 Nova Cheatsheet: Python Data Science

#### Python Data Science

- **Arquivos**: `data/python-data-science.js` e `app/python-data-science/page.js`
- **Conteúdo**:
  - **Pandas Básico**: Importação, criação de DataFrames, leitura/escrita de arquivos, seleção de dados
  - **Pandas Intermediário**: Filtros e condições, agrupamento, junção de DataFrames, manipulação de colunas
  - **Pandas Avançado**: Time series, análise estatística, visualização com pandas, performance
  - **NumPy**: Arrays básicos, operações matemáticas, indexação avançada, álgebra linear
  - **Matplotlib**: Gráficos básicos, customização, subplots, tipos de gráficos avançados
  - **Seaborn**: Visualização estatística, gráficos de distribuição, correlação, paletas de cores
  - **Scikit-learn**: Pré-processamento, modelos de classificação, regressão, clustering, métricas
- **Design**: Tema roxo (#9b59b6) característico de data science
- **Funcionalidades**: Sistema de filtros, busca, cópia de comandos

#### Atualizações na Página Principal

- **Novo Card**: Python Data Science adicionado à categoria "Desenvolvimento & Programação"
- **Ícone**: IoBarChart com cor característica de data science
- **Descrição**: Foco em análise de dados, machine learning e visualização
- **Navegação**: Link direto para `/python-data-science` com todas as funcionalidades

#### Atualizações na Navegação

- **Header.js**: Adicionado link para Python Data Science com ícone IoBarChart
- **Menu Completo**: Agora com 20 cheatsheets acessíveis

#### Correções Técnicas

- **useLevelFilter Hook**: Corrigido erro de hidratação ao acessar localStorage
- **Estrutura de Dados**: Padronização do formato para compatibilidade com componentes universais

#### Estatísticas do Projeto

- **Total de Cheatsheets**: 20 (adicionada Python Data Science)
- **Cobertura de Data Science**: Agora incluindo pandas, numpy, matplotlib, seaborn, scikit-learn
- **Análise de Dados**: Fortalecimento em ciência de dados e machine learning

---

## [v4.2.5] - 2025-11-05

### 🎨 Componente BackToTop Corrigido

#### Correções Implementadas

- **Arquivo**: `components/common/BackToTop.jsx` (convertido de .tsx para .jsx)
- **Ícone Corrigido**: Substituição de `BiChevronDown` por `BiChevronUp` para direção correta
- **Background Neutro**: Atualização do esquema de cores para refletir o layout atual:
  - Gradientes alterados de azul/rosa para tons de slate/cinza
  - Cores harmonizadas com o design do projeto
  - Remoção de cores vibrantes em favor de paleta neutra
- **Classes CSS Corrigidas**:
  - Correção de `w-13 h-13` para `w-12 h-12` (classe válida no Tailwind)
  - Remoção de referências a modo dark desnecessárias
- **Tooltip Melhorado**: Ajuste nas cores do tooltip para combinar com o novo tema
- **Anel Animado**: Atualização das cores do ring animado para slate

#### Melhorias Técnicas

- **Conversão para JavaScript**: Remoção de tipagens TypeScript para compatibilidade
- **Performance**: Otimização das classes CSS e remoção de estilos desnecessários
- **Consistência Visual**: Alinhamento com a paleta de cores do projeto
- **Acessibilidade**: Mantida a estrutura semântica e atributos ARIA

#### Design Responsivo

- **Layout Adaptativo**: Botão mantém funcionalidade em todos os dispositivos
- **Cores Neutras**: Esquema de cores que não compete com o conteúdo principal
- **Hover Effects**: Efeitos de hover sutis e profissionais
- **Animações**: Mantidas as animações suaves com cores apropriadas

---

## [v4.2.4] - 2025-11-03

### 📝 Nova Cheatsheet: VS Code

#### VS Code Editor

- **Arquivos**: `data/vscode-data.js` e `app/vscode/page.js`
- **Conteúdo**:
  - **Nível Básico**:
    - **Atalhos Essenciais**: Navegação e edição, seleção e movimentação, navegação rápida
    - **Integrated Terminal**: Terminal básico, gerenciamento de terminais, configurações
  - **Nível Intermediário**:
    - **Multi-Cursor e Seleção**: Multi-cursor básico, seleção colunar, edição multi-cursor
    - **Debugging e Breakpoints**: Breakpoints essenciais, navegação no debug, debug console, watch e inspect
    - **Git Integration**: Git básico no VS Code, stage e unstage, branch e merge, git history
    - **Extensions Recomendadas**: Essenciais para desenvolvimento, produtividade, themes e ícones, debugging e testing
    - **Workspace Management**: Multi-workspace, navegação entre arquivos, configurações de workspace
    - **Snippets e Templates**: Snippets essenciais, criando snippets personalizados, snippets avançados
    - **Customização e Themes**: Configurações essenciais, configurações avançadas, keybindings personalizados
  - **Nível Avançado**:
    - **Remote Development**: Remote SSH, remote containers, remote WSL, remote tunnels
- **Design**: Tema azul (#007ACC) característico do VS Code
- **Funcionalidades**: Sistema de filtros, busca, cópia de comandos

#### Atualizações na Página Principal

- **Novo Card**: VS Code adicionado à categoria "Desenvolvimento & Programação"
- **Ícone**: SiVisualstudiocode com cor característica do VS Code
- **Descrição**: Foco em produtividade, atalhos, extensões e desenvolvimento remoto
- **Navegação**: Link direto para `/vscode` com todas as funcionalidades

#### Estilos CSS Adicionados

- **Nova Classe**: `.vscode` com cor tema #007ACC
- **Integração**: Cores consistentes com o ecossistema VS Code
- **Design**: Segue o padrão visual das outras cheatsheets

#### Estatísticas do Projeto

- **Total de Cheatsheets**: 19 (adicionada VS Code)
- **Cobertura de Ferramentas**: Agora incluindo VS Code como editor principal
- **Produtividade**: Fortalecimento em ferramentas de desenvolvimento
- **Editor Universal**: Cobertura completa do editor mais popular do mundo

---

## [v4.2.3] - 2025-11-02

### 🐹 Nova Cheatsheet: Go Programming

#### Go Programming Language

- **Arquivos**: `data/go-data.js` e `app/go/page.js`
- **Conteúdo**:
  - **Instalação e Ambiente**: Setup, variáveis de ambiente, ferramentas
  - **Estrutura de Projetos**: Módulos Go, organização de diretórios, build e cross-compilation
  - **Variáveis e Tipos**: Declaração, tipos básicos, constantes, inferência
  - **Estruturas de Dados**: Arrays, slices, maps, structs
  - **Estruturas de Controle**: If/Else, loops (for), switch, break/continue
  - **Funções**: Básicas, anônimas, closures, recursão, variadic arguments
  - **Métodos e Interfaces**: Methods em structs, definição e implementação de interfaces, type assertions
  - **Goroutines e Canais**: Concorrência, comunicação, select statements, worker pools
  - **Error Handling**: Errors básicos, customizados, wrapping, panic/recover
  - **Testing**: Testes básicos, assertions, benchmarks, table-driven tests
  - **Context e Cancelamento**: Context básico, timeout, cancelamento, propagação
  - **Reflection e Generics**: Type e Value, modificação, funções genéricas, interfaces genéricas
  - **Build e Deployment**: Build options, cross-compilation, Docker, CI/CD
- **Design**: Tema ciano (#00ADD8) característico do Go
- **Funcionalidades**: Sistema de filtros, busca, cópia de comandos

#### Atualizações na Página Principal

- **Novo Card**: Go Programming adicionado à categoria "Desenvolvimento & Programação"
- **Ícone**: FaGolang com cor característica do Go
- **Descrição**: Foco em concorrência, sistemas distribuídos e cloud
- **Navegação**: Link direto para `/go` com todas as funcionalidades

#### Estatísticas do Projeto

- **Total de Cheatsheets**: 17 (adicionada Go Programming)
- **Cobertura de Linguagens**: Agora incluindo Go como linguagem moderna
- **Tecnologias Cloud**: Fortalecimento em cloud e backend
- **Concorrência**: Cobertura completa de programação concorrente

---

## [v4.2.0] - 2025-11-02

### 🎯 Melhorias na Navegação

#### Dropdowns Otimizados

- **Funcionalidade Corrigida**: Resolvido problema onde os menus dropdown fechavam ao mover o mouse para clicar nos links
- **Sistema de Timers**: Implementação de sistema de timers inteligente para evitar fechamento prematuro dos dropdowns
- **Eventos de Mouse**: Melhoria nos eventos onMouseEnter e onMouseLeave com cancelamento adequado de timers
- **Experiência do Usuário**: Navegação mais fluida e intuitiva pelos menus dropdown

#### Menu Mobile Simplificado e Funcional

- **Menu Hambúrguer Moderno**: Substituição do select por um menu hambúrguer mais intuitivo e visualmente agradável
- **Simplificação das Animações**: Remoção de animações complexas para focar na funcionalidade
- **Menu Slide-in**: Menu deslizante da direita com transição simples e direta
- **Backdrop Simples**: Overlay com opacidade fixa para fechamento ao clicar
- **Botão de Fechar Claro**: Botão X visível no cabeçalho do menu para fechamento intuitivo
- **Click Outside**: Fechamento do menu ao clicar no backdrop
- **Menu Lateral**: Menu deslizante da direita com largura fixa de 320px
- **Header do Menu**: Cabeçalho do menu com título e botão de fechar
- **Navegação por Categorias**: Organização clara das tecnologias por categorias no menu mobile
- **Ícones e Feedback Visual**: Cada item do menu mobile exibe seu ícone correspondente
- **Footer Informativo**: Adição de rodapé no menu mobile com informações do projeto
- **Botão Toggle**: Botão com ícone FaBars/FaTimes para indicar estado do menu
- **Controle de Overflow**: Desabilitação do scroll no body e html quando o menu está aberto
- **Compensação de Scroll Bar**: Adição de padding para compensar a barra de rolagem que desaparece
- **Scroll Funcional**: Implementação de overflow-y-auto para permitir scroll quando necessário
- **Layout Limpo**: Estrutura simples e funcional sem animações desnecessárias
- **Altura Adequada**: Menu com h-full para ocupar toda a altura disponível
- **Transições Suaves**: Hover effects simples com transições de cores

#### Ícones Visuais

- **Novos Ícones**: Adicionado ícone `FaBars` nos menus dropdown para melhor identificação visual
- **Consistência Visual**: Ícones padronizados seguindo o mesmo padrão do menu Home
- **Design Responsivo**: Ícones adaptados para desktop, tablet e mobile

### 🔧 Melhorias Técnicas

#### Gerenciamento de Estado

- **Timeout Control**: Implementação de estado para controle de timeouts com `useState`
- **Mobile Menu State**: Novo estado `mobileMenuOpen` para controle do menu mobile
- **Cancelamento de Timers**: Funções específicas para cancelar timers pendentes
- **Delay Otimizado**: Ajuste do delay para 200ms para melhor experiência do usuário
- **Simplified Overflow Control**: Efeito useEffect simplificado para controlar overflow do body e html
- **Scroll Bar Compensation**: Cálculo dinâmico da largura da barra de rolagem para compensação visual
- **Cleanup Function**: Função de cleanup para restaurar todos os estilos quando o componente é desmontado

#### Código Refatorado

- **Funções Especializadas**: Criação de funções específicas para cada evento de mouse
- **Mobile Functions**: Novas funções `toggleMobileMenu` e `closeMobileMenu`
- **Framer Motion Integration**: Importação e uso de motion, AnimatePresence para animações avançadas
- **Organização**: Código mais limpo e organizado com responsabilidades bem definidas
- **Performance**: Otimização no gerenciamento de eventos e estado com animações GPU-acceleradas

### 📱 Design Responsivo

#### Menu Mobile

- **Layout Adaptativo**: Menu mobile otimizado para telas pequenas
- **Slide Panel**: Menu deslizante da direita com largura responsiva (max-w-full)
- **Altura Adequada**: Menu com h-full para ocupar toda a altura disponível
- **Scroll Funcional**: Implementação de overflow-y-auto para permitir scroll quando necessário
- **Controle de Overflow da Página**: Desabilitação do scroll do body e html quando o menu está aberto
- **Compensação Visual**: Padding dinâmico para compensar a barra de rolagem que desaparece
- **Espaçamento Adequado**: Padding e margens otimizadas para toque em dispositivos móveis
- **Contraste Melhorado**: Cores e contraste otimizados para visibilidade em dispositivos móveis
- **Transições Simples**: Animações básicas focadas na usabilidade
- **Touch-Friendly**: Áreas de toque adequadas para interação em dispositivos móveis
- **Estrutura Limpa**: Layout simples e funcional sem complexidade desnecessária

### 📊 Estatísticas do Projeto

- **Total de Cheatsheets**: 16 (sem alterações)
- **Tecnologias Cobertas**: HTML5, CSS3, JavaScript, Python, Bash, PowerShell, Git, Docker, Kubernetes, CI/CD, Cloud, Linux, Filesystem, Network, DevSecOps, Scripts
- **Melhorias**: Navegação aprimorada para desktop e mobile com experiência do usuário superior

---

## [v4.1.0] - 2025-11-02

### 🌐 Novas Cheatsheets Web

#### 📄 HTML5 Cheatsheet

- **Arquivo**: `data/html-data.js` e `app/html/page.js`
- **Conteúdo**:
  - **Estrutura Básica**: DOCTYPE, head, body, metadados essenciais
  - **Elementos Semânticos**: header, nav, main, section, article, aside, footer
  - **Listas e Tabelas**: ul, ol, dl, table, thead, tbody, tfoot
  - **Formulários**: inputs, selects, textareas, validação HTML5
  - **Formulários Avançados**: date, time, color, range, file, datalist
  - **Multimídia**: audio, video, canvas, svg, picture
  - **Metadados e SEO**: meta tags, Open Graph, Twitter Cards
  - **Acessibilidade**: ARIA attributes, roles, navegação por teclado
- **Design**: Tema laranja (#e34c26) característico do HTML5
- **Funcionalidades**: Sistema de filtros, busca, cópia de comandos

#### 🎨 CSS3 Cheatsheet

- **Arquivo**: `data/css-data.js` e `app/css/page.js`
- **Conteúdo**:
  - **Seletores Básicos**: elemento, classe, ID, combinados
  - **Box Model**: width, height, margin, padding, border
  - **Tipografia**: font-family, font-size, font-weight, text-align
  - **Cores e Fundos**: cores, gradientes, imagens de fundo
  - **Layout e Posicionamento**: display, position, float, clear
  - **Flexbox**: container, itens, alinhamento, wrapping
  - **CSS Grid**: template areas, posicionamento, alinhamento
  - **Responsividade**: media queries, unidades responsivas
  - **Animações e Transições**: transform, transition, keyframes
  - **Pseudo-classes e Pseudo-elementos**: hover, active, ::before, ::after
  - **Propriedades Avançadas**: filtros, sombras, clipping
  - **CSS Custom Properties**: variáveis, fallback, temas dinâmicos
- **Design**: Tema azul (#1572b6) característico do CSS3
- **Funcionalidades**: Sistema de filtros, busca, cópia de comandos

### 🏠 Página Principal Atualizada

#### Novos Cards na Categoria "Desenvolvimento & Programação"

- **HTML5 Card**: Com ícone FaHtml5 e descrição completa
- **CSS3 Card**: Com ícone FaCss3Alt e descrição completa
- **Categorias Reorganizadas**: HTML5 e CSS3 integradas na seção de desenvolvimento web

### 🔧 Navegação Atualizada

#### Header.js Expandido

- **Novos Links**:
  - HTML5 (/html) com ícone FaHtml5
  - CSS3 (/css) com ícone FaCss3Alt
- **Menu Completo**: Agora com 16 cheatsheets acessíveis

### 📊 Estatísticas Atualizadas

- **Total de Cheatsheets**: 16 (adicionadas HTML5 e CSS3)
- **Total de Comandos**: 2500+ comandos organizados
- **Cobertura Web Completa**:
  - ✅ Estrutura (HTML5)
  - ✅ Estilização (CSS3)
  - ✅ Interatividade (JavaScript)
  - ✅ Backend (Python, Node.js)
  - ✅ Controle de Versão (Git)

---

## [v4.0.0] - 2025-11-02

### 🚀 Arquitetura Universal Refatorada

#### Novos Componentes Universais

- **CommandCard Component** (`components/universal/CommandCard.js`):

  - Sistema de cópia de comandos com fallback para navegadores antigos
  - Indicadores visuais de nível (básico, intermediário, avançado)
  - Design responsivo com efeitos hover e feedback visual
  - Suporte para modo compacto e personalização via props

- **LevelFilter Component** (`components/universal/LevelFilter.js`):

  - Filtros visuais por nível de dificuldade
  - Interface desktop com botões estilizados
  - Menu mobile responsivo com dropdown
  - Persistência de estado no localStorage
  - Indicadores visuais de filtro ativo

- **SearchBar Component** (`components/universal/SearchBar.js`):

  - Busca em tempo real com debounce configurável
  - Interface limpa com ícones intuitivos
  - Suporte a teclas de atalho (ESC para limpar)
  - Feedback visual de foco e resultados

- **ResponsiveGrid Component** (`components/universal/ResponsiveGrid.js`):
  - Grid responsivo adaptativo para diferentes telas
  - Configurações de breakpoints personalizáveis
  - Otimização para mobile e desktop

#### Hooks Personalizados

- **useLevelFilter Hook** (`hooks/useLevelFilter.js`):

  - Gerenciamento de estado para filtros por nível
  - Persistência no localStorage
  - Estatísticas de contagem por nível
  - Funções utilitárias para reset e controle

- **useSearch Hook** (`hooks/useSearch.js`):
  - Busca avançada com múltiplos campos configuráveis
  - Suporte a busca case-sensitive/insensitive
  - Estatísticas detalhadas de busca
  - Comprimento mínimo de busca configurável

### 🎨 Sistema de Design Unificado

#### Padrões Visuais Implementados

- **Cores Temáticas por Categoria**:

  - Bash: Verde (#2ecc71)
  - Git: Laranja (#e74c3c)
  - JavaScript: Amarelo (#f7df1e)
  - Docker: Azul (#3498db)
  - Python: Azul (#3776ab)
  - PowerShell: Azul (#5392ba)
  - Linux: Laranja (#d35400)
  - Scripts: Roxo (#9b59b6)

- **Bordas Personalizadas**:
  - Cada categoria tem sua borda característica nos CardHeaders
  - Classe `category-header` padronizada para todos os cabeçalhos
  - Consistência visual entre todas as páginas

#### Cards Explicativos

- **CardHeader Component** aprimorado com:
  - Descrições detalhadas de cada tecnologia
  - Seções "Onde você vai usar" com ícones e aplicações práticas
  - Grid responsivo para exibição de casos de uso
  - Cores temáticas consistentes

### 📱 Navegação e Responsividade

#### Header.js Refatorado

- **Menu Desktop**: Navegação horizontal completa com todos os links
- **Menu Mobile**: Dropdown responsivo com todas as opções
- **Links Implementados**:
  - Home (/)
  - Bash (/bash)
  - Git (/git)
  - Docker (/docker)
  - Scripts (/scripts)
  - JavaScript (/javascript)
  - Python (/python)
  - PowerShell (/powershell)
  - Linux (/linux)

#### Design Responsivo

- Breakpoints otimizados para mobile, tablet e desktop
- Componentes adaptativos com diferentes layouts
- Menu hambúrguer para dispositivos móveis
- Grids responsivos com colunas dinâmicas

### 🔧 Estrutura de Dados Padronizada

#### Formato Consistente

- **Níveis Padronizados**: "iniciante" → "básico" em todos os arquivos
- **Estrutura de Categorias**: title, useCase, level, sections, tip
- **Sections**: Organização lógica dos comandos por funcionalidade
- **Comandos**: Estrutura com command, comment, level

#### Arquivos de Dados

- `data/bash-data.js` - Comandos Bash com níveis padronizados
- `data/docker-data.js` - Docker e Docker Compose expandido
- `data/git-data.js` - Comandos Git extraídos do HTML
- `data/javascript-data.js` - JavaScript ES6+ e Node.js
- `data/linux-data.js` - Administração de sistemas Linux
- `data/powershell-data.js` - PowerShell para Windows
- `data/python-data.js` - Python 3.x e ecossistema
- `data/scripts-data.js` - Scripts utilitários extraídos do HTML

### 🌟 Funcionalidades Avançadas

#### Sistema de Filtros

- **Filtro por Nível**: Básico, Intermediário, Avançado, Todos
- **Busca em Tempo Real**: Com debounce e estatísticas
- **Combinação de Filtros**: Busca + nível simultâneos
- **Persistência**: Estado salvo no localStorage

#### Experiência do Usuário

- **Feedback Visual**: Animações, transições e estados hover
- **Cópia de Comandos**: Com feedback visual de sucesso
- **Estatísticas**: Contadores de comandos e categorias
- **Estado Vazio**: Mensagens informativas quando não há resultados

### 🏗️ Arquitetura de Componentes

#### Estrutura Modular

```
components/
├── cards/           # Cards especializados
├── layout/          # Header, Footer
└── universal/       # Componentes reutilizáveis
    ├── CommandCard.js
    ├── LevelFilter.js
    ├── SearchBar.js
    ├── ResponsiveGrid.js
    ├── Toast.js
    └── index.js     # Exportações centralizadas
```

#### Hooks Personalizados

```
hooks/
├── useLevelFilter.js    # Gerenciamento de filtros
└── useSearch.js         # Funcionalidades de busca
```

### 📊 Estatísticas do Projeto

- **Total de Cheatsheets**: 16 (Bash, Git, JavaScript, Scripts, Docker, Python, PowerShell, Linux, Kubernetes, DevSecOps, CI/CD, Cloud, Filesystem, Network, HTML5, CSS3)
- **Total de Comandos**: 2500+ comandos organizados por nível e categoria
- **Componentes Universais**: 5 componentes reutilizáveis
- **Hooks Personalizados**: 2 hooks para funcionalidades avançadas
- **Cobertura**:
  - ✅ Desenvolvimento Web Completo (HTML5, CSS3, JavaScript, Python)
  - ✅ Controle de Versão (Git)
  - ✅ Sistemas Operacionais (Bash/Linux, PowerShell)
  - ✅ DevOps/Infraestrutura (Docker, Kubernetes, CI/CD)
  - ✅ Automação (Scripts)
  - ✅ Cloud Computing (AWS, Azure, GCP)
  - ✅ Segurança (DevSecOps)
  - ✅ Redes (Network)
  - ✅ Sistemas de Arquivos (Filesystem)

### 🔄 Melhorias Técnicas

- **Performance**: Otimização de renderização com useMemo
- **Acessibilidade**: Componentes com navegação por teclado
- **Código**: Arquitetura modular e reutilizável
- **Documentação**: Componentes e hooks documentados com JSDoc

### 🌐 Novas Cheatsheets Adicionadas

#### ☸️ Kubernetes Cheatsheet

- **Arquivo**: `data/kubernetes-data.js` e `app/kubernetes/page.js`
- **Conteúdo**:
  - **Comandos Básicos**: kubectl get, describe, create, apply, delete
  - **Pods e Contêineres**: logs, exec, port-forward, top
  - **Serviços e Networking**: expose, ingress, network policies
  - **ConfigMaps e Secrets**: create, edit, from-file, from-literal
  - **Deployments**: rollout, scale, history, undo, status
  - **Volumes e Storage**: persistent volumes, storage classes
  - **Namespaces**: create, switch, context, quota
  - **Cluster Management**: cluster-info, top nodes, cordon, drain
  - **Monitoramento e Debug**: events, logs, debug, troubleshooting
  - **Helm**: install, upgrade, rollback, repo, values
- **Design**: Tema azul (#326ce5) característico do Kubernetes
- **Funcionalidades**: Sistema de filtros, busca, cópia de comandos

#### 🔒 DevSecOps Cheatsheet

- **Arquivo**: `data/devsecops-data.js` e `app/devsecops/page.js`
- **Conteúdo**:
  - **Varredura de Vulnerabilidades**: Nessus, OpenVAS, Nikto, OWASP ZAP
  - **Análise Estática**: SonarQube, ESLint, Bandit, Semgrep
  - **Segurança de Contêineres**: Trivy, Clair, Docker Bench, Falco
  - **Hardening de Sistemas**: Lynis, SSH hardening, sysctl
  - **Monitoramento de Segurança**: OSSEC, Wazuh, ELK Stack
  - **Criptografia**: GPG, OpenSSL, certificados, chaves SSH
  - **Firewall e Redes**: iptables, UFW, nftables, fail2ban
  - **Auditoria e Logs**: auditd, journalctl, log analysis
  - **Segurança em CI/CD**: GitHub Actions, GitLab CI, Jenkins
  - **Testes de Invasão**: Metasploit, Burp Suite, SQLMap
- **Design**: Tema vermelho (#e74c3c) característico de segurança
- **Funcionalidades**: Sistema de filtros, busca, cópia de comandos

#### 🔄 CI/CD Pipelines Cheatsheet

- **Arquivo**: `data/cicd-data.js` e `app/cicd/page.js`
- **Conteúdo**:
  - **Jenkins**: Pipeline, stages, steps, plugins, Blue Ocean
  - **GitHub Actions**: Workflows, actions, secrets, runners
  - **GitLab CI**: .gitlab-ci.yml, stages, jobs, artifacts
  - **Azure DevOps**: Pipelines, releases, agents, variables
  - **Docker em CI/CD**: build, push, multi-stage, caching
  - **Testes Automatizados**: unitários, integração, E2E, cobertura
  - **Deploy**: canary, blue-green, rolling, A/B testing
  - **Monitoramento**: métricas, alertas, notificações
  - **Infraestrutura como Código**: Terraform, Ansible, CloudFormation
  - **Segurança em CI/CD**: SAST, DAST, scanning de dependências
- **Design**: Tema roxo (#9b59b6) característico de automação
- **Funcionalidades**: Sistema de filtros, busca, cópia de comandos

#### ☁️ Cloud Computing Cheatsheet

- **Arquivo**: `data/cloud-data.js` e `app/cloud/page.js`
- **Conteúdo**:
  - **AWS**: EC2, S3, RDS, Lambda, CloudFormation, IAM
  - **Azure**: VMs, Storage, SQL Database, Functions, ARM Templates
  - **GCP**: Compute Engine, Cloud Storage, Cloud SQL, Cloud Functions
  - **Contêineres na Nuvem**: ECS, EKS, AKS, GKE, Container Registry
  - **Serverless**: Lambda, Functions, Cloud Run, App Engine
  - **Bancos de Dados**: RDS, DocumentDB, Cosmos DB, Cloud SQL
  - **Redes e CDN**: VPC, Load Balancers, CloudFront, CDN
  - **Monitoramento**: CloudWatch, Monitor, Stackdriver, alertas
  - **Segurança**: IAM, Security Center, IAM, VPC Security Groups
  - **Custos e Otimização**: Cost Explorer, Budgets, Reserved Instances
- **Design**: Tema laranja (#f39c12) característico de cloud
- **Funcionalidades**: Sistema de filtros, busca, cópia de comandos

#### 📁 Filesystem Cheatsheet

- **Arquivo**: `data/filesystem-data.js` e `app/filesystem/page.js`
- **Conteúdo**:
  - **Navegação**: ls, cd, pwd, find, locate, tree
  - **Criação e Remoção**: mkdir, rmdir, rm, touch, truncate
  - **Cópia e Movimentação**: cp, mv, rsync, scp
  - **Permissões**: chmod, chown, chgrp, ACL, umask
  - **Links Simbólicos**: ln, readlink, symlink
  - **Busca e Filtros**: grep, find, locate, which, whereis
  - **Compactação**: tar, gzip, zip, unzip, 7z
  - **Informações de Arquivos**: file, stat, du, df, lsblk
  - **Montagem**: mount, umount, fstab, automount
  - **Recuperação de Dados**: testdisk, photorec, fsck
- **Design**: Tema verde (#27ae60) característico de sistemas de arquivos
- **Funcionalidades**: Sistema de filtros, busca, cópia de comandos

#### 🌐 Network Cheatsheet

- **Arquivo**: `data/network-data.js` e `app/network/page.js`
- **Conteúdo**:
  - **Configuração Básica**: ip, ifconfig, netstat, ss
  - **Resolução DNS**: dig, nslookup, host, resolv.conf
  - **Conectividade**: ping, traceroute, mtr, telnet, nc
  - **Transferência de Arquivos**: scp, rsync, wget, curl, ftp
  - **Firewall**: iptables, ufw, firewalld, nftables
  - **Monitoramento**: tcpdump, wireshark, nmap, netstat
  - **Redes Sem Fio**: iwconfig, wpa_supplicant, hostapd
  - **VPN**: OpenVPN, WireGuard, IPSec, SSH tunneling
  - **HTTP/HTTPS**: curl, wget, httpie, POSTMAN
  - **Troubleshooting**: arp, route, ethtool, mtr
- **Design**: Tema azul claro (#3498db) característico de redes
- **Funcionalidades**: Sistema de filtros, busca, cópia de comandos

### 🔧 Melhorias nos Dados

#### Padrão de Comentários

- **Padronização**: Adicionado `#` antes de todos os comentários nos arquivos de dados
- **Consistência**: Todos os arquivos seguem agora o mesmo padrão de comentários
- **Arquivos Atualizados**:
  - `data/kubernetes-data.js`
  - `data/devsecops-data.js`
  - `data/cicd-data.js`
  - `data/cloud-data.js`
  - `data/filesystem-data.js`
  - `data/network-data.js`

---

## [v3.0.0] - 2025-11-01

### 🐳 Docker Cheatsheet (Expandida)

#### Novidades Implementadas

- **Docker Compose Expandido** com 8 novas categorias:
  - **Comandos Básicos**: up, down, build, scale, opções avançadas
  - **Parar e Remover**: down, stop, rm, timeout, órfãos
  - **Logs e Execução**: logs, exec, tail, since, usuário específico
  - **Build e Scale**: build, pull, config, ps, paralelo, múltiplos
  - **Variáveis de Ambiente**: inline, arquivo, configuração, verificação
  - **Volumes e Redes**: drivers, listagem, conectividade, compartilhamento
  - **Dependências e Serviços**: no-deps, restart, pause, kill, scale
  - **Configuração Avançada**: arquivos, compatibilidade, perfis, resolução
  - **Integração e CI/CD**: testes, ambiente CI, lint, migrations
  - **Docker Compose V2**: comandos modernos, watch, convert, JSON

#### Comandos Adicionados (50+ novos)

- `docker-compose up --remove-orphans` - Remove órfãos
- `docker-compose up --no-deps` - Sem dependências
- `docker-compose up --timeout 30` - Timeout customizado
- `docker-compose down --rmi all` - Remove imagens
- `docker-compose logs --tail 50 backend` - Últimas 50 linhas
- `docker-compose logs --since="1h" backend` - Última hora
- `docker-compose exec -T backend ls -la` - Sem TTY
- `docker-compose exec -u root backend bash` - Como usuário específico
- `docker-compose up -d --scale backend=3` - 3 instâncias
- `docker-compose build --parallel` - Build paralelo
- `docker-compose --profile dev up` - Perfil específico
- `docker compose version` - Versão V2
- `docker compose watch` - Modo watch
- `docker compose alpha convert` - Converter para V2

#### Melhorias Técnicas

- **Organização**: Categorias bem estruturadas e progressivas
- **Documentação**: Comentários detalhados para cada comando
- **Cobertura**: Desde básico até avançado/CI-CD
- **Compatibilidade**: Suporte para Docker Compose V1 e V2

---

## [v2.0.0] - 2025-01-30

### 🆕 Novas Cheatsheets

#### 🐍 Python Cheatsheet

- **Arquivo**: `data/python-data.js` e `app/python/page.js`
- **Conteúdo**:
  - Variáveis e Tipos (declaração, tipos primitivos, conversão)
  - Estruturas de Dados (listas, tuplas, dicionários)
  - Estruturas de Controle (if/else, loops, break/continue)
  - Funções (definição, lambda, decoradores, built-ins)
  - Programação Orientada a Objetos (classes, herança, métodos especiais)
  - Módulos e Pacotes (importação, pip, criação)
  - Tratamento de Erros (try/except, finally, exceções personalizadas)
  - Manipulação de Arquivos (leitura, escrita, pathlib)
  - List Comprehensions (básicas, aninhadas, com funções)
  - Geradores e Iteradores (geradores, iteradores, itertools)
  - Decoradores Avançados (com parâmetros, de classe, singleton)
  - Programação Funcional (funções ordem superior, map/filter/reduce)
  - Testes Unitários (unittest, pytest, mock, fixtures)
  - Performance e Otimização (profiling, otimizações, memória)
- **Design**: Tema azul (#3776ab) característico do Python
- **Funcionalidades**: Botões de cópia, cards interativos, design responsivo

#### 💻 PowerShell Cheatsheet

- **Arquivo**: `data/powershell-data.js` e `app/powershell/page.js`
- **Conteúdo**:
  - Comandos Básicos (navegação, informações do sistema, ajuda)
  - Gerenciamento de Arquivos (criação, cópia, leitura/escrita)
  - Variáveis e Tipos (declaração, arrays, hashtables)
  - Estruturas de Controle (if/else, loops, switch)
  - Funções e Scripts (definição, parâmetros, módulos)
  - Pipeline e Operadores (pipeline, comparação, lógicos, Select-Object)
  - Gerenciamento de Processos (listar, iniciar/parar, serviços)
  - Rede e Conectividade (informações, configuração, HTTP)
  - Active Directory (usuários, grupos, consultas)
  - Segurança e Permissões (políticas, certificados, ACL)
  - Automação e Agendamento (tarefas, jobs, workflows)
  - WMI e CIM (consultas, monitoramento)
- **Design**: Tema azul (#5392ba) característico do PowerShell/Windows
- **Funcionalidades**: Botões de cópia, cards interativos, design responsivo

#### 🐧 Linux Cheatsheet (Completa)

- **Arquivo**: `data/linux-data.js` e `app/linux/page.js`
- **Conteúdo**:
  - Sistema e Informações (kernel, hardware, módulos)
  - Gerenciamento de Pacotes (APT, YUM/DNF, Pacman, Snap)
  - Usuários e Permissões (gerenciamento, básicas, avançadas, ACL)
  - Processos e Serviços (gerenciamento, monitoramento, systemd)
  - Rede e Conectividade (configuração, diagnóstico, ferramentas, firewall)
  - Sistema de Arquivos (estrutura, links, montagem, quotas)
  - Compressão e Backup (tar/gzip, zip, rsync, backup completo)
  - Monitoramento e Logs (visualização, systemd, recursos, alertas)
  - Segurança (hardening, SSH, criptografia, análise)
  - Virtualização e Containers (KVM/QEMU, Docker básico/avançado, Podman)
  - Scripting e Automação (Bash, processamento texto, cron, ferramentas)
- **Design**: Tema laranja (#d35400) característico do Linux
- **Funcionalidades**: Botões de cópia, cards interativos, design responsivo

### 🏠 Página Principal Atualizada

- **Arquivo**: `app/page.js`
- **Novidades**:
  - Adicionado card **Python** com ícone e descrição
  - Adicionado card **PowerShell** com ícone e descrição
  - Reorganização dos cards em categorias claras
  - Importação dos ícones necessários (FaPython, FaWindows)

### 🧭 Navegação Atualizada

- **Arquivo**: `components/layout/Header.js`
- **Novidades**:
  - Adicionado link para **Python** (🐍)
  - Adicionado link para **PowerShell** (💻)
  - Adicionado link para **Linux** (🐧)
  - Navegação completa para todas as cheatsheets

### 🎨 Design e Funcionalidades

- **Padronização**: Todas as páginas seguem o mesmo padrão de design
- **Cores Temáticas**: Cada cheatsheet tem sua cor característica
  - Bash: Verde (#2ecc71)
  - Git: Vermelho (#e74c3c)
  - JavaScript: Amarelo (#f7df1e)
  - Docker: Azul (#3498db)
  - Python: Azul (#3776ab)
  - PowerShell: Azul (#5392ba)
  - Linux: Laranja (#d35400)
- **Funcionalidades Comuns**:
  - Botões de cópia para todos os comandos
  - Cards interativos com efeitos hover
  - Design responsivo para mobile/desktop
  - Seções introdutórias informativas
  - Grid responsivo para organização

### 📊 Estatísticas do Projeto

- **Total de Cheatsheets**: 8 (Bash, Git, JavaScript, Scripts, Docker, Python, PowerShell, Linux)
- **Total de Comandos**: 800+ comandos organizados
- **Cobertura**:
  - ✅ Desenvolvimento Web (JavaScript, Python)
  - ✅ Controle de Versão (Git)
  - ✅ Sistemas Operacionais (Bash/Linux, PowerShell)
  - ✅ DevOps/Infraestrutura (Docker)
  - ✅ Automação (Scripts)

### 🔄 Melhorias Técnicas

- **Performance**: Otimização do carregamento de dados
- **Acessibilidade**: Melhorias na navegação e usabilidade
- **Código**: Padronização de estrutura e organização
- **Documentação**: Changelog detalhado para rastreabilidade

---

## [v1.0.0] - Versão Inicial

- Cheatsheets básicas: Bash, Git, JavaScript, Scripts, Docker
- Estrutura inicial do projeto
- Design responsivo e moderno

---

## 🚧 Roadmap Futuro

### Próximas Implementações Planejadas

- [ ] Banco de Dados Cheatsheet
- [ ] Ferramentas de Monitoramento Cheatsheet
- [ ] Machine Learning Cheatsheet
- [ ] Blockchain Cheatsheet
- [ ] IoT (Internet of Things) Cheatsheet
- [ ] API Development Cheatsheet

### Melhorias Planejadas

- [ ] Sistema de busca entre comandos
- [ ] Modo escuro/claro
- [ ] Exportação de cheatsheets para PDF
- [ ] Contribuições da comunidade
- [ ] Sistema de favoritos
- [ ] Integração com ferramentas externas

---

## 🤝 Contribuição

Este projeto é open source e aceita contribuições da comunidade. Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Implemente as mudanças seguindo os padrões estabelecidos
4. Adicione entrada neste CHANGELOG
5. Abra um Pull Request

### Padrões Estabelecidos

- Estrutura de dados consistente em `data/*-data.js`
- Design padronizado com cores temáticas
- Funcionalidades obrigatórias: botões de cópia, responsividade
- Documentação adequada e comentários nos comandos

---

## 📝 Notas de Versão

- **v4.0.0**: Versão com expansão para DevOps, Cloud e Segurança
- **v3.0.0**: Versão com arquitetura universal refatorada
- **v2.1.0**: Versão com Docker Compose expandido
- **v2.0.0**: Versão de expansão com Python, PowerShell e Linux completo
- **v1.8.0**: Versão estável com cheatsheets essenciais
- **v1.0.0**: Versão inicial do projeto

Para informações detalhadas sobre cada versão, consulte as releases no GitHub.
