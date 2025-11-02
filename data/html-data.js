// Objeto com todos os comandos da cheatsheet HTML5
export const htmlCommands = {
  // Card Estrutura Básica
  estruturaBasica: {
    title: '🏗️ Estrutura Básica',
    level: 'basico',
    id: 'estrutura-basica',
    sections: {
      'Estrutura do Documento': [
        {
          command: '<!DOCTYPE html>',
          comment: '# Declaração do tipo de documento HTML5',
        },
        {
          command: '<html lang="pt-BR">',
          comment: '# Elemento raiz com atributo de idioma',
        },
        {
          command: '<head>',
          comment: '# Contém metadados sobre o documento',
        },
        {
          command: '<body>',
          comment: '# Contém o conteúdo visível da página',
        },
        {
          command: '<meta charset="UTF-8">',
          comment: '# Define a codificação de caracteres',
        },
        {
          command:
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
          comment: '# Configuração para responsividade',
        },
      ],
      'Títulos e Parágrafos': [
        {
          command: '<h1> a <h6>',
          comment: '# Títulos de diferentes níveis (h1 é o mais importante)',
        },
        {
          command: '<p>',
          comment: '# Parágrafo de texto',
        },
        {
          command: '<br>',
          comment: '# Quebra de linha',
        },
        {
          command: '<hr>',
          comment: '# Linha horizontal',
        },
      ],
      'Formatação de Texto': [
        {
          command: '<strong>',
          comment: '# Texto importante (negrito)',
        },
        {
          command: '<em>',
          comment: '# Texto enfatizado (itálico)',
        },
        {
          command: '<mark>',
          comment: '# Texto destacado',
        },
        {
          command: '<small>',
          comment: '# Texto menor',
        },
        {
          command: '<del>',
          comment: '# Texto deletado',
        },
        {
          command: '<ins>',
          comment: '# Texto inserido',
        },
      ],
      'Links e Imagens': [
        {
          command: '<a href="url">',
          comment: '# Link para outra página ou recurso',
        },
        {
          command: '<a href="url" target="_blank">',
          comment: '# Link que abre em nova aba',
        },
        {
          command: '<img src="caminho" alt="descrição">',
          comment: '# Imagem com texto alternativo',
        },
        {
          command: '<picture>',
          comment: '# Container para múltiplas fontes de imagem',
        },
      ],
    },
    useCase: 'Use quando: Criando a estrutura fundamental de uma página HTML',
    tip: 'Sempre use atributos alt em imagens para acessibilidade e SEO.',
  },

  // Card Elementos Semânticos
  elementosSemanticos: {
    title: '🎯 Elementos Semânticos',
    level: 'intermediario',
    id: 'elementos-semanticos',
    sections: {
      'Estrutura Semântica': [
        {
          command: '<header>',
          comment: '# Cabeçalho da página ou seção',
        },
        {
          command: '<nav>',
          comment: '# Navegação principal',
        },
        {
          command: '<main>',
          comment: '# Conteúdo principal da página',
        },
        {
          command: '<section>',
          comment: '# Seção temática do conteúdo',
        },
        {
          command: '<article>',
          comment: '# Conteúdo independente e autossuficiente',
        },
        {
          command: '<aside>',
          comment: '# Conteúdo secundário ou relacionado',
        },
        {
          command: '<footer>',
          comment: '# Rodapé da página ou seção',
        },
      ],
      'Elementos de Texto Semântico': [
        {
          command: '<blockquote>',
          comment: '# Citação longa',
        },
        {
          command: '<cite>',
          comment: '# Título de obra',
        },
        {
          command: '<code>',
          comment: '# Código de computador',
        },
        {
          command: '<pre>',
          comment: '# Texto pré-formatado',
        },
        {
          command: '<abbr>',
          comment: '# Abreviação',
        },
        {
          command: '<address>',
          comment: '# Informações de contato',
        },
      ],
      'Mídia e Conteúdo Embutido': [
        {
          command: '<figure>',
          comment: '# Container para figura e legenda',
        },
        {
          command: '<figcaption>',
          comment: '# Legenda da figura',
        },
        {
          command: '<iframe>',
          comment: '# Container para conteúdo externo',
        },
        {
          command: '<embed>',
          comment: '# Conteúdo externo (não HTML)',
        },
        {
          command: '<object>',
          comment: '# Objeto multimídia',
        },
      ],
    },
    useCase: 'Use quando: Criando estrutura semântica e acessível para SEO',
    tip: 'Use elementos semânticos para melhorar a acessibilidade e SEO do seu site.',
  },

  // Card Listas e Tabelas
  listasETabelas: {
    title: '📋 Listas e Tabelas',
    level: 'intermediario',
    id: 'listas-tabelas',
    sections: {
      'Tipos de Listas': [
        {
          command: '<ul>',
          comment: '# Lista não ordenada',
        },
        {
          command: '<ol>',
          comment: '# Lista ordenada',
        },
        {
          command: '<li>',
          comment: '# Item de lista',
        },
        {
          command: '<dl>',
          comment: '# Lista de definição',
        },
        {
          command: '<dt>',
          comment: '# Termo de definição',
        },
        {
          command: '<dd>',
          comment: '# Descrição de definição',
        },
      ],
      'Atributos de Listas': [
        {
          command: '<ol type="1">',
          comment: '# Lista numerada (padrão)',
        },
        {
          command: '<ol type="A">',
          comment: '# Lista com letras maiúsculas',
        },
        {
          command: '<ol type="a">',
          comment: '# Lista com letras minúsculas',
        },
        {
          command: '<ol type="I">',
          comment: '# Lista com algarismos romanos',
        },
        {
          command: '<ol start="5">',
          comment: '# Lista começa do número 5',
        },
        {
          command: '<ul style="list-style-type: none;">',
          comment: '# Lista sem marcadores',
        },
      ],
      'Estrutura de Tabelas': [
        {
          command: '<table>',
          comment: '# Container da tabela',
        },
        {
          command: '<thead>',
          comment: '# Cabeçalho da tabela',
        },
        {
          command: '<tbody>',
          comment: '# Corpo da tabela',
        },
        {
          command: '<tfoot>',
          comment: '# Rodapé da tabela',
        },
        {
          command: '<tr>',
          comment: '# Linha da tabela',
        },
        {
          command: '<th>',
          comment: '# Célula de cabeçalho',
        },
        {
          command: '<td>',
          comment: '# Célula de dados',
        },
      ],
      'Atributos de Tabelas': [
        {
          command: '<table border="1">',
          comment: '# Tabela com borda',
        },
        {
          command: '<td colspan="2">',
          comment: '# Célula ocupa 2 colunas',
        },
        {
          command: '<td rowspan="3">',
          comment: '# Célula ocupa 3 linhas',
        },
        {
          command: '<th scope="col">',
          comment: '# Cabeçalho de coluna',
        },
        {
          command: '<th scope="row">',
          comment: '# Cabeçalho de linha',
        },
      ],
    },
    useCase: 'Use quando: Organizando dados em listas ou tabelas estruturadas',
  },

  // Card Formulários
  formularios: {
    title: '📝 Formulários',
    level: 'intermediario',
    id: 'formularios',
    sections: {
      'Estrutura do Formulário': [
        {
          command: '<form>',
          comment: '# Container para elementos de formulário',
        },
        {
          command: '<form action="/submit" method="post">',
          comment: '# Formulário com ação e método',
        },
        {
          command: '<fieldset>',
          comment: '# Grupo de campos relacionados',
        },
        {
          command: '<legend>',
          comment: '# Legenda para fieldset',
        },
        {
          command: '<label for="id">',
          comment: '# Rótulo associado a um campo',
        },
      ],
      'Campos de Entrada Básicos': [
        {
          command: '<input type="text">',
          comment: '# Campo de entrada de texto',
        },
        {
          command: '<input type="email">',
          comment: '# Campo para endereço de e-mail',
        },
        {
          command: '<input type="password">',
          comment: '# Campo para senha',
        },
        {
          command: '<input type="number">',
          comment: '# Campo para números',
        },
        {
          command: '<input type="tel">',
          comment: '# Campo para telefone',
        },
        {
          command: '<input type="url">',
          comment: '# Campo para URL',
        },
      ],
      'Campos de Seleção': [
        {
          command: '<input type="checkbox">',
          comment: '# Caixa de seleção',
        },
        {
          command: '<input type="radio">',
          comment: '# Botão de rádio',
        },
        {
          command: '<select>',
          comment: '# Lista suspensa',
        },
        {
          command: '<option>',
          comment: '# Opção da lista suspensa',
        },
        {
          command: '<optgroup>',
          comment: '# Grupo de opções',
        },
        {
          command: '<textarea>',
          comment: '# Área de texto multilinha',
        },
      ],
      'Botões e Controles': [
        {
          command: '<button type="submit">',
          comment: '# Botão de envio',
        },
        {
          command: '<button type="reset">',
          comment: '# Botão de reset',
        },
        {
          command: '<button type="button">',
          comment: '# Botão genérico',
        },
        {
          command: '<input type="submit">',
          comment: '# Botão de envio (input)',
        },
        {
          command: '<input type="reset">',
          comment: '# Botão de reset (input)',
        },
      ],
    },
    useCase: 'Use quando: Criando formulários interativos para coleta de dados',
  },

  // Card Formulários Avançados
  formulariosAvancados: {
    title: '🚀 Formulários Avançados',
    level: 'avancado',
    id: 'formularios-avancados',
    sections: {
      'Campos HTML5 Modernos': [
        {
          command: '<input type="date">',
          comment: '# Seletor de data',
        },
        {
          command: '<input type="time">',
          comment: '# Seletor de hora',
        },
        {
          command: '<input type="datetime-local">',
          comment: '# Seletor de data e hora local',
        },
        {
          command: '<input type="month">',
          comment: '# Seletor de mês',
        },
        {
          command: '<input type="week">',
          comment: '# Seletor de semana',
        },
        {
          command: '<input type="color">',
          comment: '# Seletor de cor',
        },
        {
          command: '<input type="range">',
          comment: '# Controle deslizante',
        },
        {
          command: '<input type="file">',
          comment: '# Upload de arquivos',
        },
      ],
      'Validação de Formulários': [
        {
          command: 'required',
          comment: '# Campo obrigatório',
        },
        {
          command: 'pattern="[A-Za-z]{3}"',
          comment: '# Padrão de validação',
        },
        {
          command: 'minlength="3"',
          comment: '# Comprimento mínimo',
        },
        {
          command: 'maxlength="50"',
          comment: '# Comprimento máximo',
        },
        {
          command: 'min="0"',
          comment: '# Valor mínimo',
        },
        {
          command: 'max="100"',
          comment: '# Valor máximo',
        },
        {
          command: 'step="5"',
          comment: '# Incremento',
        },
      ],
      'Elementos Auxiliares': [
        {
          command: '<datalist>',
          comment: '# Lista de opções predefinidas',
        },
        {
          command: '<output>',
          comment: '# Resultado de um cálculo ou ação',
        },
        {
          command: '<progress>',
          comment: '# Barra de progresso',
        },
        {
          command: '<meter>',
          comment: '# Medidor escalar',
        },
        {
          command: '<keygen>',
          comment: '# Geração de chaves (obsoleto)',
        },
      ],
    },
    useCase: 'Use quando: Criando formulários modernos com validação nativa',
    warning:
      'Alguns elementos HTML5 como <keygen> foram depreciados. Verifique a compatibilidade antes de usar.',
  },

  // Card Multimídia
  multimidia: {
    title: '🎬 Multimídia',
    level: 'avancado',
    id: 'multimidia',
    sections: {
      'Áudio e Vídeo': [
        {
          command: '<audio controls>',
          comment: '# Reprodutor de áudio',
        },
        {
          command: '<video controls>',
          comment: '# Reprodutor de vídeo',
        },
        {
          command: '<source src="file.mp4" type="video/mp4">',
          comment: '# Fonte de mídia com tipo específico',
        },
        {
          command: '<track kind="subtitles" src="subtitles.vtt">',
          comment: '# Trilha de legendas ou legendas ocultas',
        },
        {
          command: '<video autoplay loop muted>',
          comment: '# Vídeo com reprodução automática',
        },
        {
          command: '<video poster="poster.jpg">',
          comment: '# Imagem de pôster do vídeo',
        },
      ],
      'Gráficos e Canvas': [
        {
          command: '<canvas>',
          comment: '# Elemento para desenho gráfico via JavaScript',
        },
        {
          command: '<svg>',
          comment: '# Gráfico vetorial escalável',
        },
        {
          command: '<canvas width="300" height="150">',
          comment: '# Canvas com dimensões',
        },
        {
          command: '<svg viewBox="0 0 100 100">',
          comment: '# SVG com viewBox',
        },
      ],
      'Elementos Gráficos': [
        {
          command: '<map>',
          comment: '# Mapa de imagem',
        },
        {
          command: '<area>',
          comment: '# Área clicável em mapa',
        },
        {
          command: '<canvas id="myCanvas">',
          comment: '# Canvas com ID para JavaScript',
        },
        {
          command: '<svg xmlns="http://www.w3.org/2000/svg">',
          comment: '# SVG com namespace',
        },
      ],
    },
    useCase:
      'Use quando: Adicionando conteúdo multimídia e gráficos interativos',
    tip: 'Forneça sempre alternativas para conteúdo multimídia para garantir acessibilidade.',
  },

  // Card Metadados e SEO
  metadadosSEO: {
    title: '🔍 Metadados e SEO',
    level: 'avancado',
    id: 'metadados-seo',
    sections: {
      'Metadados Essenciais': [
        {
          command: '<meta name="description" content="...">',
          comment: '# Descrição da página para SEO',
        },
        {
          command: '<meta name="keywords" content="...">',
          comment: '# Palavras-chave para SEO',
        },
        {
          command: '<meta name="author" content="...">',
          comment: '# Autor da página',
        },
        {
          command: '<meta name="robots" content="index, follow">',
          comment: '# Diretivas para robôs de busca',
        },
        {
          command:
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
          comment: '# Configuração para responsividade',
        },
      ],
      'Open Graph': [
        {
          command: '<meta property="og:title" content="...">',
          comment: '# Título para compartilhamento',
        },
        {
          command: '<meta property="og:description" content="...">',
          comment: '# Descrição para compartilhamento',
        },
        {
          command: '<meta property="og:image" content="...">',
          comment: '# Imagem para compartilhamento',
        },
        {
          command: '<meta property="og:url" content="...">',
          comment: '# URL canônica',
        },
        {
          command: '<meta property="og:type" content="website">',
          comment: '# Tipo de conteúdo',
        },
      ],
      'Twitter Cards': [
        {
          command: '<meta name="twitter:card" content="summary">',
          comment: '# Tipo de card do Twitter',
        },
        {
          command: '<meta name="twitter:title" content="...">',
          comment: '# Título para Twitter',
        },
        {
          command: '<meta name="twitter:description" content="...">',
          comment: '# Descrição para Twitter',
        },
        {
          command: '<meta name="twitter:image" content="...">',
          comment: '# Imagem para Twitter',
        },
      ],
      'Otimização de Performance': [
        {
          command: '<link rel="preload" href="...">',
          comment: '# Pré-carregamento de recursos',
        },
        {
          command: '<link rel="prefetch" href="...">',
          comment: '# Pré-busca de recursos',
        },
        {
          command: '<link rel="dns-prefetch" href="...">',
          comment: '# Pré-resolução DNS',
        },
        {
          command: '<link rel="canonical" href="...">',
          comment: '# URL canônica para SEO',
        },
      ],
    },
    useCase: 'Use quando: Otimizando para motores de busca e redes sociais',
    tip: 'Use o validador de dados estruturados do Google para verificar sua implementação.',
  },

  // Card Acessibilidade
  acessibilidade: {
    title: '♿ Acessibilidade',
    level: 'avancado',
    id: 'acessibilidade',
    sections: {
      'ARIA Attributes': [
        {
          command: 'aria-label="descrição"',
          comment: '# Rótulo acessível para elementos',
        },
        {
          command: 'aria-describedby="id"',
          comment: '# Elemento que descreve outro',
        },
        {
          command: 'aria-expanded="true"',
          comment: '# Estado expandido/colapsado',
        },
        {
          command: 'aria-hidden="true"',
          comment: '# Esconde de tecnologias assistivas',
        },
        {
          command: 'aria-live="polite"',
          comment: '# Região de atualização dinâmica',
        },
      ],
      'Roles Semânticos': [
        {
          command: 'role="navigation"',
          comment: '# Role semântico para navegação',
        },
        {
          command: 'role="main"',
          comment: '# Conteúdo principal',
        },
        {
          command: 'role="complementary"',
          comment: '# Conteúdo complementar',
        },
        {
          command: 'role="search"',
          comment: '# Área de busca',
        },
        {
          command: 'role="alert"',
          comment: '# Alerta importante',
        },
      ],
      'Navegação por Teclado': [
        {
          command: 'tabindex="0"',
          comment: '# Torna elemento focável',
        },
        {
          command: 'tabindex="-1"',
          comment: '# Focável programaticamente',
        },
        {
          command: 'accesskey="s"',
          comment: '# Tecla de atalho',
        },
        {
          command: 'autofocus',
          comment: '# Foco automático no carregamento',
        },
      ],
      'Conteúdo Alternativo': [
        {
          command: '<img src="..." alt="Descrição detalhada">',
          comment: '# Texto alternativo para imagens',
        },
        {
          command: '<img src="..." alt="" role="presentation">',
          comment: '# Imagem decorativa',
        },
        {
          command: '<longdesc="descricao.html">',
          comment: '# Descrição longa',
        },
        {
          command: '<figure aria-labelledby="caption1">',
          comment: '# Figura com legenda',
        },
      ],
    },
    useCase: 'Use quando: Garantindo acessibilidade para todos os usuários',
    warning:
      'Sempre teste a acessibilidade do seu HTML com leitores de tela e ferramentas de validação.',
    tip: 'Use o validador W3C para garantir que seu HTML está conforme os padrões.',
  },
};
