// Objeto com todos os comandos da cheatsheet CSS3
export const cssCommands = {
  // Card Seletores Básicos
  seletoresBasicos: {
    title: '🎯 Seletores Básicos',
    level: 'basico',
    id: 'seletores-basicos',
    sections: {
      'Seletores de Elemento': [
        {
          command: 'p { color: blue; }',
          comment: '# Seleciona todos os parágrafos',
        },
        {
          command: 'h1 { font-size: 2em; }',
          comment: '# Seleciona todos os h1',
        },
        {
          command: 'div { margin: 10px; }',
          comment: '# Seleciona todas as divs',
        },
        {
          command: 'span { display: inline; }',
          comment: '# Seleciona todos os spans',
        },
      ],
      'Seletores de Classe': [
        {
          command: '.classe { color: red; }',
          comment: '# Seleciona elementos com classe',
        },
        {
          command: '.btn-primary { background: blue; }',
          comment: '# Botão primário',
        },
        {
          command: '.text-center { text-align: center; }',
          comment: '# Texto centralizado',
        },
        { command: '.hidden { display: none; }', comment: '# Elemento oculto' },
      ],
      'Seletores de ID': [
        {
          command: '#header { position: fixed; }',
          comment: '# Elemento com ID específico',
        },
        {
          command: '#main-content { max-width: 1200px; }',
          comment: '# Conteúdo principal',
        },
        { command: '#sidebar { width: 300px; }', comment: '# Barra lateral' },
        { command: '#footer { margin-top: 50px; }', comment: '# Rodapé' },
      ],
      'Seletores Combinados': [
        {
          command: 'div.container { width: 100%; }',
          comment: '# Div com classe específica',
        },
        {
          command: 'ul.nav li { display: inline; }',
          comment: '# Li dentro de ul com classe',
        },
        {
          command: '#header .logo { float: left; }',
          comment: '# Elemento com classe dentro de ID',
        },
        {
          command: 'article.post h2 { color: #333; }',
          comment: '# H2 dentro de article com classe',
        },
      ],
    },
    useCase:
      'Use quando: Precisa selecionar e estilizar elementos HTML básicos',
  },

  // Card Box Model
  boxModel: {
    title: '📦 Box Model',
    level: 'basico',
    id: 'box-model',
    sections: {
      Dimensões: [
        { command: 'width: 300px;', comment: '# Largura' },
        { command: 'height: 200px;', comment: '# Altura' },
        { command: 'max-width: 100%;', comment: '# Largura máxima' },
        { command: 'min-height: 100vh;', comment: '# Altura mínima' },
        {
          command: 'box-sizing: border-box;',
          comment: '# Inclui padding e border',
        },
      ],
      'Margin (Espaço Externo)': [
        { command: 'margin: 10px;', comment: '# Todos os lados' },
        {
          command: 'margin: 10px 20px;',
          comment: '# Vertical 10px, horizontal 20px',
        },
        {
          command: 'margin: 10px 15px 20px 25px;',
          comment: '# Top, right, bottom, left',
        },
        { command: 'margin-top: 20px;', comment: '# Apenas topo' },
        { command: 'margin: 0 auto;', comment: '# Centraliza horizontalmente' },
      ],
      'Padding (Espaço Interno)': [
        { command: 'padding: 15px;', comment: '# Todos os lados' },
        {
          command: 'padding: 10px 20px;',
          comment: '# Vertical 10px, horizontal 20px',
        },
        {
          command: 'padding: 5px 10px 15px 20px;',
          comment: '# Top, right, bottom, left',
        },
        { command: 'padding-left: 30px;', comment: '# Apenas esquerda' },
        { command: 'padding: 1em;', comment: '# Unidade relativa' },
      ],
      'Border (Borda)': [
        { command: 'border: 1px solid #ccc;', comment: '# Borda completa' },
        { command: 'border-radius: 5px;', comment: '# Bordas arredondadas' },
        { command: 'border-radius: 50%;', comment: '# Forma circular' },
        { command: 'border-top: 2px dashed red;', comment: '# Borda superior' },
        { command: 'border: none;', comment: '# Remove borda' },
      ],
    },
    useCase:
      'Use quando: Precisa controlar espaçamento, dimensões e bordas dos elementos',
  },

  // Card Tipografia
  tipografia: {
    title: '📝 Tipografia',
    level: 'basico',
    id: 'tipografia',
    sections: {
      Fontes: [
        {
          command: 'font-family: Arial, sans-serif;',
          comment: '# Família de fontes',
        },
        {
          command: 'font-family: "Helvetica Neue", Helvetica;',
          comment: '# Fontes com espaços',
        },
        {
          command: 'font-family: "Times New Roman", serif;',
          comment: '# Fonte serif',
        },
        {
          command: 'font-family: "Courier New", monospace;',
          comment: '# Fonte monoespaçada',
        },
        {
          command: 'font-family: Georgia, "Times New Roman", serif;',
          comment: '# Fontes alternativas',
        },
      ],
      'Tamanho e Peso': [
        { command: 'font-size: 16px;', comment: '# Tamanho em pixels' },
        { command: 'font-size: 1em;', comment: '# Tamanho relativo ao pai' },
        { command: 'font-size: 1rem;', comment: '# Tamanho relativo à raiz' },
        { command: 'font-weight: bold;', comment: '# Negrito' },
        { command: 'font-weight: 300;', comment: '# Peso da fonte (100-900)' },
      ],
      'Estilo e Decoração': [
        { command: 'font-style: italic;', comment: '# Itálico' },
        { command: 'text-decoration: underline;', comment: '# Sublinhado' },
        {
          command: 'text-decoration: none;',
          comment: '# Remove decoração (links)',
        },
        { command: 'text-transform: uppercase;', comment: '# Maiúsculas' },
        {
          command: 'text-transform: capitalize;',
          comment: '# Primeiras letras maiúsculas',
        },
      ],
      'Alinhamento e Espaçamento': [
        { command: 'text-align: center;', comment: '# Centraliza texto' },
        { command: 'text-align: justify;', comment: '# Justifica texto' },
        { command: 'line-height: 1.5;', comment: '# Altura da linha' },
        {
          command: 'letter-spacing: 1px;',
          comment: '# Espaçamento entre letras',
        },
        {
          command: 'word-spacing: 2px;',
          comment: '# Espaçamento entre palavras',
        },
      ],
    },
    useCase: 'Use quando: Precisa estilizar texto, fontes e tipografia',
  },

  // Card Cores e Fundos
  coresFundos: {
    title: '🎨 Cores e Fundos',
    level: 'basico',
    id: 'cores-fundos',
    sections: {
      'Cores do Texto': [
        { command: 'color: #333333;', comment: '# Cor hexadecimal' },
        { command: 'color: rgb(51, 51, 51);', comment: '# Cor RGB' },
        {
          command: 'color: rgba(51, 51, 51, 0.8);',
          comment: '# Cor RGB com transparência',
        },
        { command: 'color: hsl(0, 0%, 20%);', comment: '# Cor HSL' },
        { command: 'color: inherit;', comment: '# Herda cor do pai' },
      ],
      'Cores de Fundo': [
        {
          command: 'background-color: #f5f5f5;',
          comment: '# Cor de fundo sólida',
        },
        {
          command: 'background: linear-gradient(to right, #ff7e5f, #feb47b);',
          comment: '# Gradiente linear',
        },
        {
          command: 'background: radial-gradient(circle, #ff7e5f, #feb47b);',
          comment: '# Gradiente radial',
        },
        {
          command: 'background: url("image.jpg");',
          comment: '# Imagem de fundo',
        },
        {
          command: 'background-size: cover;',
          comment: '# Imagem cobre todo elemento',
        },
      ],
      'Propriedades de Fundo': [
        {
          command: 'background-repeat: no-repeat;',
          comment: '# Não repete imagem',
        },
        {
          command: 'background-position: center center;',
          comment: '# Posiciona imagem no centro',
        },
        {
          command: 'background-attachment: fixed;',
          comment: '# Fundo fixo ao rolar',
        },
        {
          command: 'background-blend-mode: multiply;',
          comment: '# Modo de mistura de fundos',
        },
        { command: 'opacity: 0.8;', comment: '# Transparência do elemento' },
      ],
      'Cores Modernas': [
        { command: 'color: currentColor;', comment: '# Cor atual do elemento' },
        { command: 'fill: #333;', comment: '# Cor de preenchimento (SVG)' },
        { command: 'stroke: #666;', comment: '# Cor da borda (SVG)' },
        { command: 'filter: brightness(1.2);', comment: '# Ajuste de brilho' },
        { command: 'filter: saturate(1.5);', comment: '# Saturação' },
      ],
    },
    useCase: 'Use quando: Precisa definir cores, fundos e efeitos visuais',
  },

  // Card Layout e Posicionamento
  layoutPosicionamento: {
    title: '📐 Layout e Posicionamento',
    level: 'intermediario',
    id: 'layout-posicionamento',
    sections: {
      Display: [
        { command: 'display: block;', comment: '# Elemento em bloco' },
        { command: 'display: inline;', comment: '# Elemento em linha' },
        {
          command: 'display: inline-block;',
          comment: '# Elemento em linha com bloco',
        },
        { command: 'display: none;', comment: '# Oculta elemento' },
        { command: 'display: flex;', comment: '# Container flexbox' },
        { command: 'display: grid;', comment: '# Container grid' },
      ],
      Position: [
        { command: 'position: static;', comment: '# Posicionamento padrão' },
        { command: 'position: relative;', comment: '# Relativo ao seu lugar' },
        {
          command: 'position: absolute;',
          comment: '# Relativo ao pai posicionado',
        },
        { command: 'position: fixed;', comment: '# Fixo na viewport' },
        {
          command: 'position: sticky;',
          comment: '# Fixo ao rolar até certo ponto',
        },
      ],
      'Posicionamento com Coordenadas': [
        { command: 'top: 0;', comment: '# Distância do topo' },
        { command: 'right: 0;', comment: '# Distância da direita' },
        { command: 'bottom: 0;', comment: '# Distância da base' },
        { command: 'left: 0;', comment: '# Distância da esquerda' },
        { command: 'z-index: 100;', comment: '# Empilhamento de elementos' },
      ],
      'Float e Clear': [
        { command: 'float: left;', comment: '# Flutua à esquerda' },
        { command: 'float: right;', comment: '# Flutua à direita' },
        { command: 'clear: both;', comment: '# Limpa floats anteriores' },
        { command: 'clear: left;', comment: '# Limpa float à esquerda' },
        { command: 'overflow: hidden;', comment: '# Contém floats (clearfix)' },
      ],
    },
    useCase:
      'Use quando: Precisa controlar o layout e posicionamento dos elementos',
  },

  // Card Flexbox
  flexbox: {
    title: '🔧 Flexbox',
    level: 'intermediario',
    id: 'flexbox',
    sections: {
      'Container Flexbox': [
        { command: 'display: flex;', comment: '# Cria container flex' },
        {
          command: 'flex-direction: row;',
          comment: '# Direção dos itens (padrão)',
        },
        { command: 'flex-direction: column;', comment: '# Direção vertical' },
        { command: 'flex-wrap: wrap;', comment: '# Permite quebra de linha' },
        {
          command: 'justify-content: center;',
          comment: '# Alinhamento horizontal',
        },
        { command: 'align-items: center;', comment: '# Alinhamento vertical' },
      ],
      'Justify Content': [
        {
          command: 'justify-content: flex-start;',
          comment: '# Alinha ao início',
        },
        { command: 'justify-content: flex-end;', comment: '# Alinha ao fim' },
        { command: 'justify-content: center;', comment: '# Centraliza' },
        {
          command: 'justify-content: space-between;',
          comment: '# Espaça entre itens',
        },
        {
          command: 'justify-content: space-around;',
          comment: '# Espaça ao redor dos itens',
        },
        {
          command: 'justify-content: space-evenly;',
          comment: '# Espaçamento igual',
        },
      ],
      'Align Items e Content': [
        {
          command: 'align-items: stretch;',
          comment: '# Estica para preencher',
        },
        { command: 'align-items: flex-start;', comment: '# Alinha ao topo' },
        { command: 'align-items: flex-end;', comment: '# Alinha à base' },
        {
          command: 'align-items: center;',
          comment: '# Centraliza verticalmente',
        },
        {
          command: 'align-items: baseline;',
          comment: '# Alinha na linha base',
        },
        {
          command: 'align-content: center;',
          comment: '# Alinha linhas (com wrap)',
        },
      ],
      'Itens Flexbox': [
        { command: 'flex: 1;', comment: '# Item flexível cresce igualmente' },
        { command: 'flex: 2;', comment: '# Item flexível cresce 2x mais' },
        { command: 'flex-grow: 1;', comment: '# Capacidade de crescer' },
        { command: 'flex-shrink: 0;', comment: '# Não encolhe' },
        { command: 'flex-basis: 200px;', comment: '# Tamanho base' },
        { command: 'align-self: center;', comment: '# Alinhamento individual' },
      ],
    },
    useCase: 'Use quando: Precisa criar layouts flexíveis e responsivos',
  },

  // Card CSS Grid
  cssGrid: {
    title: '🔲 CSS Grid',
    level: 'intermediario',
    id: 'css-grid',
    sections: {
      'Container Grid': [
        { command: 'display: grid;', comment: '# Cria container grid' },
        {
          command: 'grid-template-columns: 1fr 1fr 1fr;',
          comment: '# 3 colunas iguais',
        },
        {
          command: 'grid-template-columns: 200px 1fr;',
          comment: '# Coluna fixa + flexível',
        },
        {
          command: 'grid-template-columns: repeat(3, 1fr);',
          comment: '# Repete colunas',
        },
        {
          command: 'grid-template-rows: auto 1fr auto;',
          comment: '# Linhas do grid',
        },
        { command: 'gap: 20px;', comment: '# Espaçamento entre itens' },
      ],
      'Grid Template Areas': [
        { command: 'grid-template-areas:', comment: '# Define áreas do grid' },
        { command: '  "header header header"', comment: '# Primeira linha' },
        { command: '  "sidebar main main"', comment: '# Segunda linha' },
        { command: '  "footer footer footer";', comment: '# Terceira linha' },
        { command: 'grid-area: header;', comment: '# Área do elemento' },
      ],
      'Posicionamento Grid': [
        { command: 'grid-column: 1 / 3;', comment: '# Ocupa colunas 1-2' },
        { command: 'grid-row: 2 / 4;', comment: '# Ocupa linhas 2-3' },
        { command: 'grid-column: span 2;', comment: '# Ocupa 2 colunas' },
        { command: 'grid-row: span 3;', comment: '# Ocupa 3 linhas' },
        { command: 'grid-area: 1 / 1 / 3 / 4;', comment: '# Posição completa' },
      ],
      'Alinhamento Grid': [
        {
          command: 'justify-items: center;',
          comment: '# Alinha itens horizontalmente',
        },
        {
          command: 'align-items: center;',
          comment: '# Alinha itens verticalmente',
        },
        {
          command: 'justify-content: center;',
          comment: '# Alinha grid horizontalmente',
        },
        {
          command: 'align-content: center;',
          comment: '# Alinha grid verticalmente',
        },
        { command: 'place-items: center;', comment: '# Alinha ambos' },
      ],
    },
    useCase: 'Use quando: Precisa criar layouts complexos bidimensionais',
  },

  // Card Responsividade
  responsividade: {
    title: '📱 Responsividade',
    level: 'intermediario',
    id: 'responsividade',
    sections: {
      'Media Queries': [
        {
          command: '@media (max-width: 768px) {',
          comment: '# Dispositivos móveis',
        },
        {
          command: '  .container { width: 100%; }',
          comment: '# Ajuste para mobile',
        },
        { command: '}', comment: '# Fecha media query' },
        {
          command: '@media (min-width: 769px) {',
          comment: '# Dispositivos maiores',
        },
        {
          command: '  .container { width: 750px; }',
          comment: '# Ajuste para desktop',
        },
        { command: '}', comment: '# Fecha media query' },
      ],
      'Breakpoints Comuns': [
        {
          command: '@media (max-width: 576px) { }',
          comment: '# Extra small (xs)',
        },
        { command: '@media (max-width: 768px) { }', comment: '# Small (sm)' },
        { command: '@media (max-width: 992px) { }', comment: '# Medium (md)' },
        { command: '@media (max-width: 1200px) { }', comment: '# Large (lg)' },
        {
          command: '@media (max-width: 1400px) { }',
          comment: '# Extra large (xl)',
        },
      ],
      'Técnicas Responsivas': [
        { command: 'max-width: 100%;', comment: '# Imagem responsiva' },
        { command: 'height: auto;', comment: '# Mantém proporção' },
        {
          command: 'font-size: calc(16px + 0.5vw);',
          comment: '# Fonte fluida',
        },
        { command: 'width: 100vw;', comment: '# Largura da viewport' },
        { command: 'height: 100vh;', comment: '# Altura da viewport' },
      ],
      'Unidades Responsivas': [
        { command: 'width: 50vw;', comment: '# 50% da viewport width' },
        { command: 'height: 100vh;', comment: '# 100% da viewport height' },
        { command: 'font-size: 4vw;', comment: '# 4% da viewport width' },
        { command: 'margin: 2vh;', comment: '# 2% da viewport height' },
        { command: 'min-width: 320px;', comment: '# Largura mínima' },
      ],
    },
    useCase:
      'Use quando: Precisa criar layouts que se adaptam a diferentes telas',
  },

  // Card Animações e Transições
  animacoesTransicoes: {
    title: '✨ Animações e Transições',
    level: 'avancado',
    id: 'animacoes-transicoes',
    sections: {
      Transições: [
        { command: 'transition: all 0.3s ease;', comment: '# Transição suave' },
        {
          command: 'transition: color 0.5s linear;',
          comment: '# Transição de cor',
        },
        {
          command: 'transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);',
          comment: '# Curva de animação',
        },
        {
          command: 'transition-delay: 0.2s;',
          comment: '# Atraso na transição',
        },
        {
          command: 'transition-duration: 0.5s;',
          comment: '# Duração da transição',
        },
      ],
      'Transformações 2D': [
        {
          command: 'transform: translateX(50px);',
          comment: '# Move horizontalmente',
        },
        {
          command: 'transform: translateY(20px);',
          comment: '# Move verticalmente',
        },
        { command: 'transform: rotate(45deg);', comment: '# Rotaciona' },
        { command: 'transform: scale(1.2);', comment: '# Aumenta tamanho' },
        {
          command: 'transform: skewX(15deg);',
          comment: '# Inclina horizontalmente',
        },
      ],
      'Transformações 3D': [
        {
          command: 'transform: rotateX(45deg);',
          comment: '# Rotaciona no eixo X',
        },
        {
          command: 'transform: rotateY(45deg);',
          comment: '# Rotaciona no eixo Y',
        },
        {
          command: 'transform: rotateZ(45deg);',
          comment: '# Rotaciona no eixo Z',
        },
        {
          command: 'transform: perspective(1000px) rotateX(45deg);',
          comment: '# Perspectiva 3D',
        },
        {
          command: 'transform-style: preserve-3d;',
          comment: '# Mantém contexto 3D',
        },
      ],
      Animações: [
        { command: '@keyframes slideIn {', comment: '# Define animação' },
        {
          command: '  from { transform: translateX(-100%); }',
          comment: '# Estado inicial',
        },
        {
          command: '  to { transform: translateX(0); }',
          comment: '# Estado final',
        },
        { command: '}', comment: '# Fecha keyframe' },
        {
          command: 'animation: slideIn 0.5s ease-in-out;',
          comment: '# Aplica animação',
        },
      ],
    },
    useCase:
      'Use quando: Precisa adicionar movimento e interatividade aos elementos',
  },

  // Card Pseudo-classes e Pseudo-elementos
  pseudoClassesElementos: {
    title: '🔍 Pseudo-classes e Pseudo-elementos',
    level: 'avancado',
    id: 'pseudo-classes-elementos',
    sections: {
      'Pseudo-classes de Estado': [
        {
          command: ':hover { color: blue; }',
          comment: '# Mouse sobre elemento',
        },
        {
          command: ':active { transform: scale(0.95); }',
          comment: '# Elemento sendo clicado',
        },
        {
          command: ':focus { outline: 2px solid blue; }',
          comment: '# Elemento focado',
        },
        {
          command: ':visited { color: purple; }',
          comment: '# Link já visitado',
        },
        { command: ':link { color: blue; }', comment: '# Link não visitado' },
      ],
      'Pseudo-classes Estruturais': [
        {
          command: ':first-child { font-weight: bold; }',
          comment: '# Primeiro filho',
        },
        {
          command: ':last-child { margin-bottom: 0; }',
          comment: '# Último filho',
        },
        {
          command: ':nth-child(odd) { background: #f0f0f0; }',
          comment: '# Filhos ímpares',
        },
        {
          command: ':nth-child(even) { background: #fff; }',
          comment: '# Filhos pares',
        },
        {
          command: ':nth-child(3) { color: red; }',
          comment: '# Terceiro filho',
        },
      ],
      'Pseudo-classes de Formulário': [
        {
          command: ':checked { transform: scale(1.2); }',
          comment: '# Checkbox/radio marcado',
        },
        {
          command: ':disabled { opacity: 0.5; }',
          comment: '# Elemento desabilitado',
        },
        {
          command: ':enabled { cursor: pointer; }',
          comment: '# Elemento habilitado',
        },
        {
          command: ':required { border: 2px solid red; }',
          comment: '# Campo obrigatório',
        },
        {
          command: ':valid { border-color: green; }',
          comment: '# Campo válido',
        },
      ],
      'Pseudo-elementos': [
        {
          command: '::before { content: "→"; }',
          comment: '# Antes do conteúdo',
        },
        {
          command: '::after { content: "←"; }',
          comment: '# Depois do conteúdo',
        },
        {
          command: '::first-line { font-weight: bold; }',
          comment: '# Primeira linha',
        },
        {
          command: '::first-letter { font-size: 2em; }',
          comment: '# Primeira letra',
        },
        {
          command: '::selection { background: yellow; }',
          comment: '# Texto selecionado',
        },
      ],
    },
    useCase:
      'Use quando: Precisa estilizar estados específicos ou adicionar conteúdo dinâmico',
  },

  // Card Propriedades Avançadas
  propriedadesAvancadas: {
    title: '🚀 Propriedades Avançadas',
    level: 'avancado',
    id: 'propriedades-avancadas',
    sections: {
      'Filtros e Efeitos': [
        { command: 'filter: blur(5px);', comment: '# Desfoque' },
        { command: 'filter: brightness(1.2);', comment: '# Brilho' },
        { command: 'filter: contrast(1.5);', comment: '# Contraste' },
        { command: 'filter: grayscale(100%);', comment: '# Escala de cinza' },
        { command: 'filter: sepia(50%);', comment: '# Efeito sépia' },
        {
          command: 'filter: hue-rotate(90deg);',
          comment: '# Rotação de matiz',
        },
      ],
      Sombreamento: [
        {
          command: 'box-shadow: 0 2px 4px rgba(0,0,0,0.1);',
          comment: '# Sombra suave',
        },
        {
          command: 'box-shadow: 0 4px 8px rgba(0,0,0,0.2);',
          comment: '# Sombra média',
        },
        {
          command: 'box-shadow: 0 8px 16px rgba(0,0,0,0.3);',
          comment: '# Sombra forte',
        },
        {
          command: 'text-shadow: 2px 2px 4px rgba(0,0,0,0.3);',
          comment: '# Sombra no texto',
        },
        {
          command: 'box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);',
          comment: '# Sombra interna',
        },
      ],
      'Gradientes Avançados': [
        {
          command: 'background: linear-gradient(45deg, #ff7e5f, #feb47b);',
          comment: '# Gradiente diagonal',
        },
        {
          command: 'background: radial-gradient(circle, #ff7e5f, #feb47b);',
          comment: '# Gradiente radial',
        },
        {
          command:
            'background: conic-gradient(from 0deg, #ff7e5f, #feb47b, #ff7e5f);',
          comment: '# Gradiente cônico',
        },
        {
          command:
            'background: repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px);',
          comment: '# Gradiente repetido',
        },
      ],
      'Clipping e Masking': [
        { command: 'clip-path: circle(50%);', comment: '# Recorte circular' },
        {
          command: 'clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);',
          comment: '# Recorte poligonal',
        },
        {
          command: 'clip-path: ellipse(50% 40% at 50% 50%);',
          comment: '# Recorte elíptico',
        },
        {
          command: 'mask-image: url("mask.png");',
          comment: '# Máscara de imagem',
        },
        {
          command: 'backdrop-filter: blur(5px);',
          comment: '# Desfoque do fundo',
        },
      ],
    },
    useCase: 'Use quando: Precisa criar efeitos visuais avançados e modernos',
  },

  // CSS Custom Properties (Variáveis)
  variaveisCSS: {
    title: '🎨 CSS Custom Properties',
    level: 'avancado',
    id: 'variaveis-css',
    sections: {
      'Declaração de Variáveis': [
        { command: ':root {', comment: '# Declaração global' },
        { command: '  --primary-color: #3498db;', comment: '# Cor primária' },
        {
          command: '  --secondary-color: #2ecc71;',
          comment: '# Cor secundária',
        },
        { command: '  --font-size-base: 16px;', comment: '# Tamanho base' },
        {
          command: '  --spacing-unit: 8px;',
          comment: '# Unidade de espaçamento',
        },
        { command: '}', comment: '# Fecha declaração' },
      ],
      'Uso de Variáveis': [
        {
          command: 'color: var(--primary-color);',
          comment: '# Usa variável de cor',
        },
        {
          command: 'font-size: var(--font-size-base);',
          comment: '# Usa variável de tamanho',
        },
        {
          command: 'margin: var(--spacing-unit);',
          comment: '# Usa variável de espaçamento',
        },
        {
          command: 'padding: calc(var(--spacing-unit) * 2);',
          comment: '# Calcula com variável',
        },
      ],
      'Variáveis com Fallback': [
        {
          command: 'color: var(--primary-color, #333);',
          comment: '# Com valor padrão',
        },
        {
          command: 'font-size: var(--font-size-base, 16px);',
          comment: '# Com fallback',
        },
        {
          command: 'background: var(--bg-color, var(--white, #fff));',
          comment: '# Fallback aninhado',
        },
      ],
      'Variáveis Dinâmicas': [
        {
          command: '@media (prefers-color-scheme: dark) {',
          comment: '# Modo escuro',
        },
        {
          command: '  --primary-color: #5dade2;',
          comment: '# Cor para modo escuro',
        },
        {
          command: '  --bg-color: #1a1a1a;',
          comment: '# Fundo para modo escuro',
        },
        { command: '}', comment: '# Fecha media query' },
      ],
    },
    useCase:
      'Use quando: Precisa criar temas, manter consistência ou facilitar manutenção',
  },
};
