// Objeto com todos os comandos da cheatsheet JavaScript
export const javascriptCommands = {
  // Card Variáveis e Tipos
  variaveisETipos: {
    title: '🔤 Variáveis e Tipos',
    level: 'basico',
    id: 'variaveis-tipos',
    sections: {
      'Declaração de Variáveis': [
        {
          command: 'const nome = "João"',
          comment: '# Constante (não pode reatribuir)',
        },
        { command: 'let idade = 25', comment: '# Variável (pode reatribuir)' },
        {
          command: 'var antigo = "evitar"',
          comment: '# Escopo de função (evitar)',
        },
      ],
      'Tipos Primitivos': [
        { command: 'typeof "texto"', comment: '# string' },
        { command: 'typeof 42', comment: '# number' },
        { command: 'typeof true', comment: '# boolean' },
        { command: 'typeof null', comment: '# object (bug histórico)' },
        { command: 'typeof undefined', comment: '# undefined' },
        { command: 'typeof Symbol()', comment: '# symbol' },
        { command: 'typeof 42n', comment: '# bigint' },
      ],
      'Conversão de Tipos': [
        { command: 'Number("123")', comment: '# Para número' },
        { command: 'String(123)', comment: '# Para string' },
        { command: 'Boolean(1)', comment: '# Para boolean' },
        { command: 'parseInt("42px")', comment: '# Extrai número' },
        { command: 'parseFloat("3.14")', comment: '# Decimal' },
      ],
    },
    useCase:
      'Use quando: Declarando variáveis, trabalhando com dados ou convertendo tipos',
  },

  // Card Arrays
  arraysEMetodos: {
    title: '📋 Arrays e Métodos',
    level: 'basico',
    id: 'arrays-metodos',
    sections: {
      'Criar Arrays': [
        { command: 'const arr = [1, 2, 3]', comment: '# Literal' },
        { command: 'const arr = new Array(1, 2, 3)', comment: '# Construtor' },
        {
          command: 'const arr = Array.of(1, 2, 3)',
          comment: '# Método estático',
        },
        {
          command: 'const arr = Array(5).fill(0)',
          comment: '# Array com valores',
        },
      ],
      'Métodos Essenciais': [
        { command: 'arr.push(4)', comment: '# Adiciona no fim' },
        { command: 'arr.pop()', comment: '# Remove do fim' },
        { command: 'arr.unshift(0)', comment: '# Adiciona no início' },
        { command: 'arr.shift()', comment: '# Remove do início' },
        { command: 'arr.slice(1, 3)', comment: '# Fatia (não modifica)' },
        { command: 'arr.splice(1, 2)', comment: '# Remove/insere (modifica)' },
      ],
      'Iteração Moderna': [
        {
          command: 'arr.forEach(item => console.log(item))',
          comment: '# Executa função',
        },
        { command: 'arr.map(item => item * 2)', comment: '# Transforma' },
        { command: 'arr.filter(item => item > 2)', comment: '# Filtra' },
        {
          command: 'arr.reduce((acc, item) => acc + item, 0)',
          comment: '# Reduz',
        },
        {
          command: 'arr.find(item => item > 2)',
          comment: '# Encontra primeiro',
        },
        {
          command: 'arr.findIndex(item => item > 2)',
          comment: '# Índice do primeiro',
        },
        { command: 'arr.some(item => item > 2)', comment: '# Algum satisfaz' },
        {
          command: 'arr.every(item => item > 0)',
          comment: '# Todos satisfazem',
        },
      ],
    },
    useCase:
      'Use quando: Trabalhando com listas de dados, processamento de arrays',
  },

  // Card Objetos
  objetosEPropriedades: {
    title: '🏗️ Objetos e Propriedades',
    level: 'basico',
    id: 'objetos-propriedades',
    sections: {
      'Criar Objetos': [
        {
          command: 'const obj = { nome: "João", idade: 25 }',
          comment: '# Literal',
        },
        { command: 'const obj = new Object()', comment: '# Construtor' },
        {
          command: 'const obj = Object.create(null)',
          comment: '# Sem protótipo',
        },
      ],
      Propriedades: [
        { command: 'obj.nome', comment: '# Notação ponto' },
        { command: 'obj["nome"]', comment: '# Notação colchete' },
        { command: 'obj.chaveDinamica', comment: '# Variável como chave' },
        { command: 'delete obj.idade', comment: '# Remove propriedade' },
      ],
      'Métodos Úteis': [
        { command: 'Object.keys(obj)', comment: '# Array de chaves' },
        { command: 'Object.values(obj)', comment: '# Array de valores' },
        { command: 'Object.entries(obj)', comment: '# Array de pares' },
        {
          command: 'Object.assign({}, obj1, obj2)',
          comment: '# Mescla objetos',
        },
        { command: '{ ...obj1, ...obj2 }', comment: '# Spread operator' },
        { command: 'Object.freeze(obj)', comment: '# Congela objeto' },
        { command: 'Object.seal(obj)', comment: '# Sela objeto' },
      ],
      'Propriedades Avançadas': [
        { command: 'const obj = {', comment: '' },
        { command: '  [chave]: "valor",', comment: '# Chave computada' },
        {
          command: '  metodo() { return "oi" },',
          comment: '# Método shorthand',
        },
        { command: '  get prop() { return this._prop },', comment: '# Getter' },
        {
          command: '  set prop(val) { this._prop = val }',
          comment: '# Setter',
        },
        { command: '}', comment: '' },
      ],
    },
    useCase: 'Use quando: Estruturando dados, modelos, configurações',
  },

  // Card Funções
  funcoesModernas: {
    title: '⚡ Funções Modernas',
    level: 'intermediario',
    id: 'funcoes-modernas',
    sections: {
      'Declaração de Funções': [
        {
          command: 'function soma(a, b) { return a + b }',
          comment: '# Function declaration',
        },
        {
          command: 'const soma = function(a, b) { return a + b }',
          comment: '# Function expression',
        },
        {
          command: 'const soma = (a, b) => a + b',
          comment: '# Arrow function',
        },
        {
          command: 'const soma = (a, b) => ({ resultado: a + b })',
          comment: '# Return objeto',
        },
      ],
      'Parâmetros Avançados': [
        {
          command: 'function soma(...numeros) {',
          comment: '# Rest parameters',
        },
        { command: '  return numeros.reduce((a, b) => a + b, 0)', comment: '' },
        { command: '}', comment: '' },
        { command: 'soma(1, 2, 3, 4)', comment: '# Chama com múltiplos' },
        { command: 'const nums = [1, 2, 3]', comment: '' },
        { command: 'soma(...nums)', comment: '# Spread operator' },
      ],
      'Parâmetros Padrão': [
        { command: 'function saudar(nome = "Visitante") {', comment: '' },
        { command: '  return `Olá, ${nome}!`', comment: '' },
        { command: '}', comment: '' },
        { command: 'saudar()', comment: '# "Olá, Visitante!"' },
        { command: 'saudar("Maria")', comment: '# "Olá, Maria!"' },
      ],
      'Higher Order Functions': [
        {
          command: 'const multiplicar = fator => num => num * fator',
          comment: '# Currying',
        },
        { command: 'const dobrar = multiplicar(2)', comment: '' },
        { command: 'dobrar(5)', comment: '# 10' },
        {
          command: 'const aplicar = (fn, valor) => fn(valor)',
          comment: '# Função de ordem superior',
        },
      ],
    },
    useCase:
      'Use quando: Reutilizando código, programação funcional, callbacks',
  },

  // Card Async/Await
  programacaoAssincrona: {
    title: '⏱️ Programação Assíncrona',
    level: 'intermediario',
    id: 'programacao-assincrona',
    sections: {
      Promises: [
        {
          command: 'const promise = new Promise((resolve, reject) => {',
          comment: '',
        },
        {
          command: '  setTimeout(() => resolve("Sucesso!"), 1000)',
          comment: '',
        },
        { command: '})', comment: '' },
        {
          command: 'promise.then(result => console.log(result))',
          comment: '# Sucesso',
        },
        {
          command: 'promise.catch(error => console.error(error))',
          comment: '# Erro',
        },
        {
          command: 'promise.finally(() => console.log("Finalizado"))',
          comment: '# Sempre',
        },
      ],
      'Async/Await': [
        { command: 'async function buscarDados() {', comment: '' },
        { command: '  try {', comment: '' },
        {
          command: "    const response = await fetch('/api/dados')",
          comment: '',
        },
        { command: '    const dados = await response.json()', comment: '' },
        { command: '    return dados', comment: '' },
        { command: '  } catch (error) {', comment: '' },
        { command: '    console.error("Erro:", error)', comment: '' },
        { command: '  }', comment: '' },
        { command: '}', comment: '' },
      ],
      'Promise Utils': [
        { command: 'Promise.all([p1, p2, p3])', comment: '# Todas resolvem' },
        {
          command: 'Promise.race([p1, p2])',
          comment: '# Primeira que resolver',
        },
        {
          command: 'Promise.allSettled([p1, p2])',
          comment: '# Todas finalizam',
        },
        { command: 'Promise.any([p1, p2])', comment: '# Primeira sucesso' },
      ],
      'Fetch API': [
        { command: "fetch('/api/users')", comment: '' },
        { command: '  .then(res => res.json())', comment: '' },
        { command: '  .then(data => console.log(data))', comment: '' },
        { command: '  .catch(err => console.error(err))', comment: '' },
      ],
    },
    useCase: 'Use quando: Requisições HTTP, operações I/O, timers, eventos',
  },

  // Card Destructuring
  destructuringESpread: {
    title: '🎯 Destructuring & Spread',
    level: 'intermediario',
    id: 'destructuring-spread',
    sections: {
      'Array Destructuring': [
        { command: 'const [a, b, c] = [1, 2, 3]', comment: '# Básico' },
        {
          command: 'const [primeiro, ...resto] = [1, 2, 3, 4]',
          comment: '# Com rest',
        },
        {
          command: 'const [, , terceiro] = [1, 2, 3]',
          comment: '# Ignorando valores',
        },
        { command: 'const [x = 0] = []', comment: '# Valor padrão' },
      ],
      'Object Destructuring': [
        {
          command: 'const { nome, idade } = { nome: "João", idade: 25 }',
          comment: '# Básico',
        },
        {
          command: 'const { nome: userName, idade: age } = obj',
          comment: '# Renomeando',
        },
        {
          command: 'const { nome = "Anônimo" } = {}',
          comment: '# Valor padrão',
        },
        {
          command: 'const { nome, ...resto } = obj',
          comment: '# Rest operator',
        },
        {
          command: 'const { usuario: { nome } } = data',
          comment: '# Aninhado',
        },
      ],
      'Spread Operator': [
        { command: 'const arr1 = [1, 2]', comment: '' },
        { command: 'const arr2 = [...arr1, 3, 4]', comment: '# Array spread' },
        { command: 'const obj1 = { a: 1, b: 2 }', comment: '' },
        {
          command: 'const obj2 = { ...obj1, c: 3 }',
          comment: '# Object spread',
        },
        { command: 'const copia = { ...original }', comment: '# Shallow copy' },
        {
          command: 'const merged = { ...obj1, ...obj2 }',
          comment: '# Merge objetos',
        },
      ],
      'Parâmetros com Destructuring': [
        { command: 'function processar({ nome, idade }) {', comment: '' },
        { command: '  console.log(`${nome} tem ${idade} anos`)', comment: '' },
        { command: '}', comment: '' },
        { command: 'processar({ nome: "Maria", idade: 30 })', comment: '' },
      ],
    },
    useCase:
      'Use quando: Extraindo valores de objetos/arrays, parâmetros de função',
  },

  // Card ES6+ Features
  es6Features: {
    title: '🚀 ES6+ Features',
    level: 'intermediario',
    id: 'es6-features',
    sections: {
      'Template Literals': [
        { command: 'const nome = "João"', comment: '' },
        {
          command: 'const mensagem = `Olá, ${nome}!`',
          comment: '# Interpolação',
        },
        { command: 'const multiline = `Linha 1', comment: '' },
        { command: 'Linha 2', comment: '' },
        { command: 'Linha 3`', comment: '# Multiline' },
      ],
      Modules: [
        { command: '// utils.js', comment: '' },
        {
          command: 'export const soma = (a, b) => a + b',
          comment: '# Named export',
        },
        {
          command: 'export default function() {}',
          comment: '# Default export',
        },
        { command: '// main.js', comment: '' },
        {
          command: "import { soma } from './utils.js'",
          comment: '# Named import',
        },
        {
          command: "import utils from './utils.js'",
          comment: '# Default import',
        },
        {
          command: "import * as utils from './utils.js'",
          comment: '# Namespace',
        },
      ],
      Classes: [
        { command: 'class Pessoa {', comment: '' },
        { command: '  constructor(nome) {', comment: '' },
        { command: '    this.nome = nome', comment: '' },
        { command: '  }', comment: '' },
        { command: '  saudar() {', comment: '' },
        { command: '    return `Olá, ${this.nome}!`', comment: '' },
        { command: '  }', comment: '' },
        { command: '}', comment: '' },
        { command: 'class Funcionario extends Pessoa {', comment: '# Herança' },
        { command: '  constructor(nome, cargo) {', comment: '' },
        { command: '    super(nome)', comment: '# Chama construtor pai' },
        { command: '    this.cargo = cargo', comment: '' },
        { command: '  }', comment: '' },
        { command: '}', comment: '' },
      ],
      'Symbols e Iterators': [
        { command: "const id = Symbol('id')", comment: '# Symbol único' },
        {
          command: 'const obj = { [id]: 123 }',
          comment: '# Propriedade symbol',
        },
        {
          command: 'obj[Symbol.iterator] = function*() {',
          comment: '# Iterator',
        },
        { command: '  yield 1; yield 2; yield 3', comment: '' },
        { command: '}', comment: '' },
        {
          command: 'for (const val of obj) console.log(val)',
          comment: '# For...of',
        },
      ],
    },
    useCase:
      'Use quando: Código moderno, organização, programação orientada a objetos',
  },

  // Card Manipulação DOM
  manipulacaoDOM: {
    title: '🌐 Manipulação DOM',
    level: 'intermediario',
    id: 'manipulacao-dom',
    sections: {
      'Selecionar Elementos': [
        { command: "document.getElementById('meu-id')", comment: '# Por ID' },
        {
          command: "document.querySelector('.classe')",
          comment: '# Primeiro match',
        },
        {
          command: "document.querySelectorAll('div')",
          comment: '# Todos matches',
        },
        {
          command: "document.getElementsByClassName('classe')",
          comment: '# Por classe',
        },
        { command: "document.getElementsByTagName('p')", comment: '# Por tag' },
      ],
      'Manipular Conteúdo': [
        { command: 'element.textContent = "Texto"', comment: '# Texto seguro' },
        {
          command: 'element.innerHTML = "<strong>HTML</strong>"',
          comment: '# Com HTML',
        },
        { command: 'element.value = "valor"', comment: '# Form inputs' },
        { command: "element.getAttribute('data-id')", comment: '# Atributo' },
        {
          command: "element.setAttribute('data-id', '123')",
          comment: '# Set atributo',
        },
      ],
      'Estilos e Classes': [
        { command: "element.style.color = 'red'", comment: '# Estilo inline' },
        {
          command: "element.classList.add('ativa')",
          comment: '# Adicionar classe',
        },
        {
          command: "element.classList.remove('ativa')",
          comment: '# Remover classe',
        },
        {
          command: "element.classList.toggle('ativa')",
          comment: '# Toggle classe',
        },
        {
          command: "element.classList.contains('ativa')",
          comment: '# Verificar classe',
        },
      ],
      'Criar e Remover Elementos': [
        {
          command: "const div = document.createElement('div')",
          comment: '# Criar',
        },
        { command: "div.textContent = 'Novo elemento'", comment: '' },
        { command: 'document.body.appendChild(div)', comment: '# Adicionar' },
        { command: 'element.remove()', comment: '# Remover elemento' },
        { command: 'parent.removeChild(child)', comment: '# Remover filho' },
      ],
      Eventos: [
        {
          command: "element.addEventListener('click', (e) => {",
          comment: '# Adicionar evento',
        },
        { command: "  console.log('Clicado!', e.target)", comment: '' },
        { command: '})', comment: '' },
        {
          command: "element.removeEventListener('click', handler)",
          comment: '# Remover evento',
        },
        {
          command: "element.dispatchEvent(new Event('custom'))",
          comment: '# Disparar evento',
        },
      ],
    },
    useCase:
      'Use quando: Interatividade web, formulários, SPAs, manipulação UI',
  },

  // Card Debugging
  debuggingEFerramentas: {
    title: '🐛 Debugging & Ferramentas',
    level: 'avancado',
    id: 'debugging-ferramentas',
    sections: {
      'Console Methods': [
        { command: "console.log('mensagem')", comment: '# Log básico' },
        { command: "console.error('erro')", comment: '# Erro' },
        { command: "console.warn('aviso')", comment: '# Aviso' },
        { command: "console.info('info')", comment: '# Informação' },
        { command: 'console.table([{a:1}, {a:2}])', comment: '# Tabela' },
        { command: "console.group('grupo')", comment: '# Agrupar logs' },
        { command: 'console.groupEnd()', comment: '# Fechar grupo' },
        { command: "console.time('timer')", comment: '# Iniciar timer' },
        { command: "console.timeEnd('timer')", comment: '# Finalizar timer' },
      ],
      'Debugger Statement': [
        { command: 'function debugar() {', comment: '' },
        { command: '  debugger', comment: '# Ponto de parada' },
        { command: "  console.log('Continuando...')", comment: '' },
        { command: '}', comment: '' },
      ],
      Performance: [
        { command: "console.time('loop')", comment: '' },
        { command: 'for (let i = 0; i < 1000000; i++) {}', comment: '' },
        { command: "console.timeEnd('loop')", comment: '# Medir tempo' },
        { command: 'performance.now()', comment: '# Timestamp preciso' },
        { command: "performance.mark('start')", comment: '# Marca' },
        { command: "performance.mark('end')", comment: '' },
        {
          command: "performance.measure('diff', 'start', 'end')",
          comment: '# Medir',
        },
      ],
      'Memory & Profiling': [
        { command: 'console.memory', comment: '# Info memória' },
        {
          command: "performance.getEntriesByType('navigation')",
          comment: '# Navigation timing',
        },
        {
          command: 'window.getComputedStyle(element)',
          comment: '# Estilos calculados',
        },
      ],
    },
    tip: '💡 Use console.table() para visualizar arrays de objetos de forma organizada. Use console.group() para organizar logs relacionados.',
    useCase: 'Use quando: Desenvolvendo, testando, otimizando performance',
  },
};
