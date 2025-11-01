// Objeto com todos os comandos da cheatsheet Python
export const pythonCommands = {
  // Card Variáveis e Tipos
  variaveisETipos: {
    title: '🐍 Variáveis e Tipos',
    level: 'basico',
    id: 'variaveis-tipos',
    sections: {
      'Declaração de Variáveis': [
        {
          command: 'nome = "João"',
          comment: '# String',
        },
        { command: 'idade = 25', comment: '# Inteiro' },
        { command: 'altura = 1.75', comment: '# Float' },
        { command: 'ativo = True', comment: '# Booleano' },
        { command: 'dados = None', comment: '# Nulo' },
      ],
      'Tipos Primitivos': [
        { command: 'type("texto")', comment: "# <class 'str'>" },
        { command: 'type(42)', comment: "# <class 'int'>" },
        { command: 'type(3.14)', comment: "# <class 'float'>" },
        { command: 'type(True)', comment: "# <class 'bool'>" },
        { command: 'type(None)', comment: "# <class 'NoneType'>" },
        { command: 'type([1, 2, 3])', comment: "# <class 'list'>" },
        { command: 'type((1, 2, 3))', comment: "# <class 'tuple'>" },
        { command: 'type({1, 2, 3})', comment: "# <class 'set'>" },
        { command: 'type({"a": 1})', comment: "# <class 'dict'>" },
      ],
      'Conversão de Tipos': [
        { command: 'str(123)', comment: '# Para string' },
        { command: 'int("42")', comment: '# Para inteiro' },
        { command: 'float("3.14")', comment: '# Para float' },
        { command: 'bool(1)', comment: '# Para boolean' },
        { command: 'list("abc")', comment: '# Para lista' },
        { command: 'tuple([1, 2])', comment: '# Para tupla' },
        { command: 'set([1, 2, 3])', comment: '# Para conjunto' },
        { command: 'dict([("a", 1)])', comment: '# Para dicionário' },
      ],
    },
    useCase:
      'Use quando: Declarando variáveis, trabalhando com dados ou convertendo tipos',
  },

  // Card Estruturas de Dados
  estruturasDados: {
    title: '📋 Estruturas de Dados',
    level: 'basico',
    id: 'estruturas-dados',
    sections: {
      'Listas (Arrays)': [
        { command: 'lista = [1, 2, 3, 4, 5]', comment: '# Criar lista' },
        { command: 'lista = list(range(10))', comment: '# Lista com range' },
        { command: 'lista[0]', comment: '# Acessar elemento' },
        { command: 'lista[-1]', comment: '# Último elemento' },
        { command: 'lista[1:4]', comment: '# Fatia [1:4)' },
        { command: 'lista[:3]', comment: '# Primeiros 3' },
        { command: 'lista[2:]', comment: '# Do 2 até o fim' },
        { command: 'lista[::2]', comment: '# Passo 2' },
      ],
      'Métodos de Listas': [
        { command: 'lista.append(6)', comment: '# Adicionar no fim' },
        { command: 'lista.insert(0, 0)', comment: '# Inserir na posição' },
        { command: 'lista.remove(3)', comment: '# Remover elemento' },
        { command: 'lista.pop()', comment: '# Remover último' },
        { command: 'lista.extend([7, 8])', comment: '# Estender lista' },
        { command: 'lista.sort()', comment: '# Ordenar' },
        { command: 'lista.reverse()', comment: '# Inverter' },
        { command: 'lista.count(3)', comment: '# Contar ocorrências' },
        { command: 'lista.index(3)', comment: '# Índice do elemento' },
      ],
      Tuplas: [
        { command: 'tupla = (1, 2, 3)', comment: '# Criar tupla' },
        { command: 'tupla = tuple([1, 2, 3])', comment: '# Converter lista' },
        { command: 'a, b, c = tupla', comment: '# Desempacotar' },
        { command: 'tupla[0]', comment: '# Acessar elemento' },
        { command: 'len(tupla)', comment: '# Tamanho' },
      ],
      Dicionários: [
        {
          command: 'pessoa = {"nome": "João", "idade": 25}',
          comment: '# Criar dicionário',
        },
        {
          command: 'pessoa = dict(nome="João", idade=25)',
          comment: '# Com construtor',
        },
        { command: 'pessoa["nome"]', comment: '# Acessar por chave' },
        { command: 'pessoa.get("nome")', comment: '# Acessar seguro' },
        { command: 'pessoa["idade"] = 26', comment: '# Modificar valor' },
        {
          command: 'pessoa["cidade"] = "São Paulo"',
          comment: '# Adicionar chave',
        },
        { command: 'del pessoa["idade"]', comment: '# Remover chave' },
        { command: 'pessoa.keys()', comment: '# Lista de chaves' },
        { command: 'pessoa.values()', comment: '# Lista de valores' },
        { command: 'pessoa.items()', comment: '# Lista de pares' },
      ],
    },
    useCase:
      'Use quando: Trabalhando com coleções de dados, estruturas, armazenamento',
  },

  // Card Estruturas de Controle
  estruturasControle: {
    title: '🔀 Estruturas de Controle',
    level: 'basico',
    id: 'estruturas-controle',
    sections: {
      'If/Else': [
        {
          command:
            'if idade >= 18:\n    print("Maior de idade")\nelse:\n    print("Menor de idade")',
          comment: '# Condicional simples',
        },
        {
          command:
            'if nota >= 7:\n    print("Aprovado")\nelif nota >= 5:\n    print("Recuperação")\nelse:\n    print("Reprovado")',
          comment: '# Múltiplas condições',
        },
        {
          command: 'if 18 <= idade <= 65:\n    print("Em idade trabalhativa")',
          comment: '# Condição composta',
        },
      ],
      'Loops For': [
        {
          command: 'for i in range(5):\n    print(i)',
          comment: '# Loop com range',
        },
        {
          command: 'for i in range(1, 10, 2):\n    print(i)',
          comment: '# Range com passo',
        },
        {
          command: 'for item in lista:\n    print(item)',
          comment: '# Iterar lista',
        },
        {
          command:
            'for indice, valor in enumerate(lista):\n    print(indice, valor)',
          comment: '# Com índice',
        },
        {
          command:
            'for chave, valor in dicionario.items():\n    print(chave, valor)',
          comment: '# Iterar dicionário',
        },
      ],
      'Loops While': [
        {
          command:
            'contador = 0\nwhile contador < 5:\n    print(contador)\n    contador += 1',
          comment: '# Loop condicional',
        },
        {
          command:
            'while True:\n    resposta = input("Digite \'sair\' para parar: ")\n    if resposta == "sair":\n        break',
          comment: '# Loop infinito com break',
        },
        {
          command:
            'while True:\n    try:\n        resultado = 10 / 0\n    except ZeroDivisionError:\n        print("Erro de divisão")\n        break',
          comment: '# Loop com tratamento de erro',
        },
      ],
      'Break e Continue': [
        {
          command:
            'for i in range(10):\n    if i == 5:\n        continue\n    print(i)',
          comment: '# Pular iteração',
        },
        {
          command:
            'for i in range(10):\n    if i == 7:\n        break\n    print(i)',
          comment: '# Interromper loop',
        },
      ],
    },
    useCase: 'Use quando: Controlando fluxo do programa, repetições, decisões',
  },

  // Card Funções
  funcoes: {
    title: '⚡ Funções',
    level: 'intermediario',
    id: 'funcoes',
    sections: {
      'Definição Básica': [
        {
          command: 'def saudar(nome):\n    return f"Olá, {nome}!"',
          comment: '# Função simples',
        },
        {
          command:
            'def calcular_area(base, altura):\n    return (base * altura) / 2',
          comment: '# Com parâmetros',
        },
        {
          command: 'def saudar(nome="Visitante"):\n    return f"Olá, {nome}!"',
          comment: '# Parâmetro padrão',
        },
        {
          command:
            'def processar(*args):\n    for arg in args:\n        print(arg)',
          comment: '# Argumentos variáveis',
        },
        {
          command:
            'def configurar(**kwargs):\n    for chave, valor in kwargs.items():\n        print(f"{chave}: {valor}")',
          comment: '# Argumentos nomeados',
        },
      ],
      'Funções Lambda': [
        { command: 'soma = lambda a, b: a + b', comment: '# Função anônima' },
        {
          command: 'quadrado = lambda x: x ** 2',
          comment: '# Expressão lambda',
        },
        {
          command: 'lista.sort(key=lambda x: x[1])',
          comment: '# Chave de ordenação',
        },
        {
          command: 'numeros = list(map(lambda x: x**2, range(10)))',
          comment: '# Map com lambda',
        },
        {
          command: 'pares = list(filter(lambda x: x%2==0, range(10)))',
          comment: '# Filter com lambda',
        },
      ],
      Decoradores: [
        {
          command:
            'def timer(func):\n    def wrapper(*args, **kwargs):\n        import time\n        inicio = time.time()\n        resultado = func(*args, **kwargs)\n        fim = time.time()\n        print(f"Tempo: {fim - inicio:.2f}s")\n        return resultado\n    return wrapper',
          comment: '# Decorador de timer',
        },
        {
          command: '@timer\ndef calcular_soma(n):\n    return sum(range(n))',
          comment: '# Usando decorador',
        },
        {
          command:
            'def log_chamada(func):\n    def wrapper(*args, **kwargs):\n        print(f"Chamando {func.__name__}")\n        return func(*args, **kwargs)\n    return wrapper',
          comment: '# Decorador de log',
        },
      ],
      'Funções Built-in': [
        { command: 'print("Hello, World!")', comment: '# Imprimir' },
        { command: 'len([1, 2, 3])', comment: '# Tamanho' },
        { command: 'sum([1, 2, 3, 4])', comment: '# Soma' },
        { command: 'max([1, 5, 3])', comment: '# Máximo' },
        { command: 'min([1, 5, 3])', comment: '# Mínimo' },
        { command: 'abs(-5)', comment: '# Valor absoluto' },
        { command: 'round(3.14159, 2)', comment: '# Arredondar' },
        { command: 'type(42)', comment: '# Tipo do dado' },
        { command: 'isinstance(42, int)', comment: '# Verificar tipo' },
      ],
    },
    useCase:
      'Use quando: Reutilizando código, organização lógica, modularização',
  },

  // Card Programação Orientada a Objetos
  poo: {
    title: '🏗️ Programação Orientada a Objetos',
    level: 'intermediario',
    id: 'poo',
    sections: {
      'Classes Básicas': [
        {
          command:
            'class Pessoa:\n    def __init__(self, nome, idade):\n        self.nome = nome\n        self.idade = idade\n    \n    def saudar(self):\n        return f"Olá, sou {self.nome}"',
          comment: '# Classe simples',
        },
        {
          command:
            'class Animal:\n    def __init__(self, nome):\n        self.nome = nome\n    \n    def falar(self):\n        raise NotImplementedError("Subclasses devem implementar")',
          comment: '# Classe abstrata',
        },
        {
          command:
            'class Contador:\n    def __init__(self):\n        self.valor = 0\n    \n    def incrementar(self):\n        self.valor += 1\n    \n    def __str__(self):\n        return f"Contador: {self.valor}"',
          comment: '# Com métodos',
        },
      ],
      Herança: [
        {
          command:
            'class Animal:\n    def __init__(self, nome):\n        self.nome = nome\n    \n    def falar(self):\n        pass\n\nclass Cachorro(Animal):\n    def falar(self):\n        return "Au au!"',
          comment: '# Herança simples',
        },
        {
          command:
            'class Veiculo:\n    def __init__(self, marca):\n        self.marca = marca\n\nclass Carro(Veiculo):\n    def __init__(self, marca, modelo):\n        super().__init__(marca)\n        self.modelo = modelo',
          comment: '# Chamando super()',
        },
        {
          command:
            'class A:\n    def metodo(self):\n        return "A"\nclass B(A):\n    def metodo(self):\n        return super().metodo() + "B"',
          comment: '# Usando super()',
        },
      ],
      'Métodos Especiais': [
        {
          command:
            'class Pessoa:\n    def __init__(self, nome):\n        self.nome = nome\n    \n    def __str__(self):\n        return f"Pessoa: {self.nome}"\n    \n    def __repr__(self):\n        return f"Pessoa(\'{self.nome}\')"',
          comment: '# __str__ e __repr__',
        },
        {
          command:
            'class Lista:\n    def __init__(self, itens):\n        self.itens = itens\n    \n    def __len__(self):\n        return len(self.itens)\n    \n    def __getitem__(self, indice):\n        return self.itens[indice]',
          comment: '# __len__ e __getitem__',
        },
        {
          command:
            'class Conta:\n    def __init__(self, saldo):\n        self.saldo = saldo\n    \n    def __add__(self, valor):\n        return Conta(self.saldo + valor)',
          comment: '# Sobrecarga de operador',
        },
      ],
      Propriedades: [
        {
          command:
            'class Pessoa:\n    def __init__(self, nome):\n        self._nome = nome\n    \n    @property\n    def nome(self):\n        return self._nome\n    \n    @nome.setter\n    def nome(self, valor):\n        self._nome = valor.title()',
          comment: '# Property getter/setter',
        },
        {
          command:
            'class Retangulo:\n    def __init__(self, largura, altura):\n        self._largura = largura\n        self._altura = altura\n    \n    @property\n    def area(self):\n        return self._largura * self._altura',
          comment: '# Property calculada',
        },
      ],
    },
    useCase:
      'Use quando: Modelando entidades complexas, reutilização código, organização',
  },

  // Card Módulos e Pacotes
  modulosPacotes: {
    title: '📦 Módulos e Pacotes',
    level: 'intermediario',
    id: 'modulos-pacotes',
    sections: {
      Importação: [
        { command: 'import math', comment: '# Importar módulo' },
        { command: 'import numpy as np', comment: '# Com alias' },
        {
          command: 'from math import sqrt, pi',
          comment: '# Importar específicos',
        },
        {
          command: 'from datetime import datetime, date',
          comment: '# Múltiplos',
        },
        {
          command:
            'import requests\nimport json\nfrom bs4 import BeautifulSoup',
          comment: '# Múltiplos módulos',
        },
      ],
      'Módulos Built-in': [
        {
          command: 'import math\nmath.sqrt(16)',
          comment: '# Funções matemáticas',
        },
        {
          command: 'import random\nrandom.randint(1, 100)',
          comment: '# Números aleatórios',
        },
        {
          command: 'import datetime\ndatetime.now()',
          comment: '# Data e hora',
        },
        {
          command: 'import os\nos.listdir(".")',
          comment: '# Sistema operacional',
        },
        { command: 'import sys\nsys.path', comment: '# Sistema e caminhos' },
        { command: 'import json\njson.loads(\'{"a": 1}\')', comment: '# JSON' },
        {
          command: 'import re\nre.findall(r"\\d+", "abc123")',
          comment: '# Expressões regulares',
        },
      ],
      'Criando Módulos': [
        {
          command:
            '# meu_modulo.py\ndef saudar(nome):\n    return f"Olá, {nome}!"\n\ndef calcular_area(base, altura):\n    return (base * altura) / 2',
          comment: '# Arquivo de módulo',
        },
        {
          command:
            '# main.py\nimport meu_modulo\nprint(meu_modulo.saudar("João"))\nprint(meu_modulo.calcular_area(10, 5))',
          comment: '# Usando módulo',
        },
        {
          command:
            '# __init__.py\nfrom .funcoes import saudar, calcular_area\nfrom .classes import Pessoa',
          comment: '# Pacote com __init__',
        },
      ],
      'Pip (Gerenciador de Pacotes)': [
        { command: 'pip install numpy', comment: '# Instalar pacote' },
        {
          command: 'pip install requests==2.25.1',
          comment: '# Versão específica',
        },
        { command: 'pip install -r requirements.txt', comment: '# Do arquivo' },
        { command: 'pip list', comment: '# Listar instalados' },
        { command: 'pip show numpy', comment: '# Informações do pacote' },
        { command: 'pip uninstall numpy', comment: '# Desinstalar' },
        {
          command: 'pip freeze > requirements.txt',
          comment: '# Gerar requirements',
        },
      ],
    },
    useCase:
      'Use quando: Organizando código, reutilização, gerenciando dependências',
  },

  // Card Tratamento de Erros
  tratamentoErros: {
    title: '⚠️ Tratamento de Erros',
    level: 'intermediario',
    id: 'tratamento-erros',
    sections: {
      'Try/Except': [
        {
          command:
            'try:\n    resultado = 10 / 0\nexcept ZeroDivisionError:\n    print("Erro: Divisão por zero")\nexcept Exception as e:\n    print(f"Erro genérico: {e}")',
          comment: '# Captura específica e genérica',
        },
        {
          command:
            'try:\n    numero = int(input("Digite um número: "))\n    resultado = 100 / numero\nexcept ValueError:\n    print("Erro: Digite um número válido")\nexcept ZeroDivisionError:\n    print("Erro: Não pode dividir por zero")',
          comment: '# Múltiplas exceções',
        },
        {
          command:
            'try:\n    with open("arquivo.txt", "r") as f:\n        conteudo = f.read()\nexcept FileNotFoundError:\n    print("Arquivo não encontrado")\nexcept PermissionError:\n    print("Sem permissão")',
          comment: '# Com arquivos',
        },
      ],
      Finally: [
        {
          command:
            'try:\n    arquivo = open("dados.txt", "r")\n    conteudo = arquivo.read()\nexcept FileNotFoundError:\n    print("Arquivo não encontrado")\nfinally:\n    if "arquivo" in locals():\n        arquivo.close()',
          comment: '# Sempre executa',
        },
        {
          command:
            'try:\n    conexao = conectar_banco()\n    dados = conexao.consultar()\nexcept Exception as e:\n    registrar_erro(e)\n    raise\nfinally:\n    if "conexao" in locals():\n        conexao.close()',
          comment: '# Limpeza de recursos',
        },
      ],
      'Raise Personalizadas': [
        {
          command:
            'class ErroCustomizado(Exception):\n    def __init__(self, mensagem):\n        self.mensagem = mensagem\n        super().__init__(self.mensagem)',
          comment: '# Criar exceção',
        },
        {
          command:
            'def validar_idade(idade):\n    if idade < 0:\n        raise ValueError("Idade não pode ser negativa")\n    if idade > 150:\n        raise ValueError("Idade muito alta")\n    return idade',
          comment: '# Validar com raise',
        },
        {
          command:
            'try:\n    validar_idade(-5)\nexcept ValueError as e:\n    print(f"Erro de validação: {e}")',
          comment: '# Capturar exceção',
        },
      ],
      'With Statement': [
        {
          command:
            'with open("arquivo.txt", "r") as f:\n    conteudo = f.read()\n    # Arquivo fechado automaticamente',
          comment: '# Gerenciamento automático',
        },
        {
          command:
            'import sqlite3\nwith sqlite3.connect("banco.db") as conn:\n    cursor = conn.cursor()\n    # Conexão fechada automaticamente',
          comment: '# Com banco de dados',
        },
        {
          command:
            'from contextlib import contextmanager\n\n@contextmanager\ndef temporizador():\n    import time\n    inicio = time.time()\n    yield\n    fim = time.time()\n    print(f"Tempo: {fim - inicio:.2f}s")\n\nwith temporizador():\n    # Código a ser medido',
          comment: '# Context manager personalizado',
        },
      ],
    },
    useCase: 'Use quando: Tratando erros, recursos, validações, robustez',
  },

  // Card Manipulação de Arquivos
  manipulacaoArquivos: {
    title: '📁 Manipulação de Arquivos',
    level: 'intermediario',
    id: 'manipulacao-arquivos',
    sections: {
      'Leitura de Arquivos': [
        {
          command:
            'with open("arquivo.txt", "r") as f:\n    conteudo = f.read()',
          comment: '# Ler tudo',
        },
        {
          command:
            'with open("arquivo.txt", "r") as f:\n    linhas = f.readlines()',
          comment: '# Ler linhas',
        },
        {
          command:
            'with open("arquivo.txt", "r") as f:\n    for linha in f:\n        print(linha.strip())',
          comment: '# Ler linha por linha',
        },
        {
          command:
            'with open("dados.json", "r") as f:\n    dados = json.load(f)',
          comment: '# Ler JSON',
        },
        {
          command:
            'import csv\nwith open("dados.csv", "r") as f:\n    leitor = csv.reader(f)\n    for linha in leitor:\n        print(linha)',
          comment: '# Ler CSV',
        },
      ],
      'Escrita de Arquivos': [
        {
          command:
            'with open("saida.txt", "w") as f:\n    f.write("Hello, World!")',
          comment: '# Escrever texto',
        },
        {
          command:
            'with open("linhas.txt", "w") as f:\n    f.writelines(["Linha 1\\n", "Linha 2\\n"])',
          comment: '# Escrever múltiplas linhas',
        },
        {
          command:
            'with open("dados.json", "w") as f:\n    json.dump({"nome": "João", "idade": 25}, f)',
          comment: '# Escrever JSON',
        },
        {
          command:
            'import csv\ndados = [["Nome", "Idade"], ["João", 25], ["Maria", 30]]\nwith open("dados.csv", "w", newline="") as f:\n    escritor = csv.writer(f)\n    escritor.writerows(dados)',
          comment: '# Escrever CSV',
        },
      ],
      'Manipulação de Diretórios': [
        {
          command: 'import os\nos.listdir(".")',
          comment: '# Listar arquivos',
        },
        {
          command: 'import os\nos.makedirs("novo_diretorio", exist_ok=True)',
          comment: '# Criar diretório',
        },
        {
          command: 'import os\nos.path.exists("arquivo.txt")',
          comment: '# Verificar existência',
        },
        {
          command: 'import os\nos.path.getsize("arquivo.txt")',
          comment: '# Tamanho do arquivo',
        },
        {
          command: 'import os\nos.remove("arquivo.txt")',
          comment: '# Remover arquivo',
        },
        {
          command: 'import shutil\nshutil.copy("origem.txt", "destino.txt")',
          comment: '# Copiar arquivo',
        },
        {
          command: 'import shutil\nshutil.move("antigo.txt", "novo.txt")',
          comment: '# Mover/renomear',
        },
      ],
      'Pathlib (Moderno)': [
        {
          command:
            'from pathlib import Path\narquivo = Path("dados.txt")\nconteudo = arquivo.read_text()',
          comment: '# Ler com pathlib',
        },
        {
          command:
            'from pathlib import Path\narquivo = Path("saida.txt")\narquivo.write_text("Hello!")',
          comment: '# Escrever com pathlib',
        },
        {
          command:
            'from pathlib import Path\ncaminho = Path("/home/usuario/documentos")\narquivo = caminho / "relatorio.txt"',
          comment: '# Construir caminho',
        },
        {
          command:
            'from pathlib import Path\npasta = Path(".")\narquivos_py = pasta.glob("*.py")',
          comment: '# Listar com padrão',
        },
      ],
    },
    useCase: 'Use quando: Processando arquivos, persistência de dados, I/O',
  },

  // Card List Comprehensions
  listComprehensions: {
    title: '🎯 List Comprehensions',
    level: 'avancado',
    id: 'list-comprehensions',
    sections: {
      Básicas: [
        { command: '[x**2 for x in range(10)]', comment: '# Quadrados de 0-9' },
        {
          command: '[x for x in range(20) if x % 2 == 0]',
          comment: '# Números pares',
        },
        {
          command: '[x.upper() for x in ["a", "b", "c"]]',
          comment: '# Transformar strings',
        },
        { command: '[(x, x**2) for x in range(5)]', comment: '# Tuplas' },
      ],
      Aninhadas: [
        {
          command: '[[x*y for y in range(3)] for x in range(3)]',
          comment: '# Matriz 3x3',
        },
        {
          command: '[[x, y] for x in range(3) for y in range(3) if x + y == 3]',
          comment: '# Com condição',
        },
        {
          command:
            'palavras = ["python", "java", "javascript"]\n[[letra.upper() for letra in palavra] for palavra in palavras]',
          comment: '# Processar strings',
        },
      ],
      'Com Funções': [
        {
          command:
            'import math\n[math.sqrt(x) for x in range(1, 26) if x % 5 == 0]',
          comment: '# Com função',
        },
        {
          command:
            'def eh_primo(n):\n    return n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))\n\n[ x for x in range(2, 50) if eh_primo(x) ]',
          comment: '# Números primos',
        },
      ],
    },
    useCase: 'Use quando: Processamento de dados, transformações, filtragem',
  },

  // Card Geradores e Iteradores
  geradoresIteradores: {
    title: '⚡ Geradores e Iteradores',
    level: 'avancado',
    id: 'geradores-iteradores',
    sections: {
      Geradores: [
        {
          command:
            'def contar_ate(n):\n    for i in range(n):\n        yield i\n\nfor num in contar_ate(5):\n    print(num)',
          comment: '# Gerador simples',
        },
        {
          command:
            'def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b',
          comment: '# Sequência infinita',
        },
        {
          command: 'quadrados = (x**2 for x in range(10))',
          comment: '# Generator expression',
        },
      ],
      Iteradores: [
        {
          command:
            'class Contador:\n    def __init__(self, limite):\n        self.limite = limite\n        self.atual = 0\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.atual >= self.limite:\n            raise StopIteration\n        valor = self.atual\n        self.atual += 1\n        return valor',
          comment: '# Implementar iterador',
        },
        {
          command: 'for i in Contador(5):\n    print(i)',
          comment: '# Usar iterador',
        },
      ],
      Itertools: [
        {
          command:
            'import itertools\nlist(itertools.combinations([1, 2, 3], 2))',
          comment: '# Combinações',
        },
        {
          command:
            'import itertools\nlist(itertools.permutations([1, 2, 3], 2))',
          comment: '# Permutações',
        },
        {
          command:
            'import itertools\nlist(itertools.product([1, 2], ["a", "b"]))',
          comment: '# Produto cartesiano',
        },
        {
          command: 'import itertools\nlist(itertools.cycle([1, 2, 3]))[:6]',
          comment: '# Ciclo infinito',
        },
      ],
    },
    useCase: 'Use quando: Processamento de grandes volumes, memória eficiente',
  },

  // Card Decoradores Avançados
  decoradoresAvancados: {
    title: '🎨 Decoradores Avançados',
    level: 'avancado',
    id: 'decoradores-avancados',
    sections: {
      'Decoradores com Parâmetros': [
        {
          command:
            'def repetir(vezes):\n    def decorador(func):\n        def wrapper(*args, **kwargs):\n            resultado = None\n            for _ in range(vezes):\n                resultado = func(*args, **kwargs)\n            return resultado\n        return wrapper\n    return decorador\n\n@repetir(3)\ndef saudar():\n    print("Olá!")',
          comment: '# Com parâmetros',
        },
      ],
      'Decoradores de Classe': [
        {
          command:
            'def adicionar_metodo(classe):\n    def novo_metodo(self):\n        return "Método adicionado"\n    classe.novo_metodo = novo_metodo\n    return classe\n\n@adicionar_metodo\nclass MinhaClasse:\n    pass',
          comment: '# Modificar classe',
        },
      ],
      'Property Avançada': [
        {
          command:
            'class Pessoa:\n    def __init__(self):\n        self._idade = 0\n    \n    @property\n    def idade(self):\n        return self._idade\n    \n    @idade.setter\n    def idade(self, valor):\n        if valor < 0:\n            raise ValueError("Idade não pode ser negativa")\n        self._idade = valor',
          comment: '# Com validação',
        },
      ],
      Singleton: [
        {
          command:
            'def singleton(classe):\n    instancias = {}\n    def obter_instancia(*args, **kwargs):\n        if classe not in instancias:\n            instancias[classe] = classe(*args, **kwargs)\n        return instancias[classe]\n    return obter_instancia\n\n@singleton\nclass BancoDeDados:\n    def __init__(self):\n        self.conexao = None',
          comment: '# Padrão Singleton',
        },
      ],
    },
    useCase: 'Use quando: Metaprogramação, padrões de projeto, extensibilidade',
  },

  // Card Programação Funcional
  programacaoFuncional: {
    title: '🔢 Programação Funcional',
    level: 'avancado',
    id: 'programacao-funcional',
    sections: {
      'Funções de Ordem Superior': [
        {
          command:
            'def aplicar_operacao(lista, operacao):\n    return [operacao(x) for x in lista]\n\ndobrar = lambda x: x * 2\nresultado = aplicar_operacao([1, 2, 3], dobrar)',
          comment: '# Função como parâmetro',
        },
        {
          command:
            'def criar_multiplicador(fator):\n    return lambda x: x * fator\n\ndobrar = criar_multiplicador(2)\ntriplicar = criar_multiplicador(3)',
          comment: '# Closure',
        },
      ],
      'Map, Filter, Reduce': [
        {
          command:
            'numeros = [1, 2, 3, 4, 5]\nquadrados = list(map(lambda x: x**2, numeros))',
          comment: '# Map',
        },
        {
          command:
            'numeros = [1, 2, 3, 4, 5, 6]\npares = list(filter(lambda x: x % 2 == 0, numeros))',
          comment: '# Filter',
        },
        {
          command:
            'from functools import reduce\nnumeros = [1, 2, 3, 4, 5]\nsoma = reduce(lambda x, y: x + y, numeros)',
          comment: '# Reduce',
        },
      ],
      'Funções Parciais': [
        {
          command:
            'from functools import partial\ndef potencia(base, expoente):\n    return base ** expoente\n\ndobro = partial(potencia, 2)\ncubo = partial(potencia, 3)',
          comment: '# Função parcial',
        },
      ],
      'Composição de Funções': [
        {
          command:
            'def compor(f, g):\n    return lambda x: f(g(x))\n\ndobrar = lambda x: x * 2\nincrementar = lambda x: x + 1\ndobrar_e_incrementar = compor(incrementar, dobrar)',
          comment: '# Composição',
        },
      ],
    },
    useCase: 'Use quando: Processamento de dados, pipelines, código imutável',
  },

  // Card Testes Unitários
  testesUnitarios: {
    title: '🧪 Testes Unitários',
    level: 'avancado',
    id: 'testes-unitarios',
    sections: {
      unittest: [
        {
          command:
            'import unittest\n\nclass TestCalculadora(unittest.TestCase):\n    def test_soma(self):\n        self.assertEqual(2 + 2, 4)\n    \n    def test_divisao_por_zero(self):\n        with self.assertRaises(ZeroDivisionError):\n            resultado = 10 / 0\n\nif __name__ == "__main__":\n    unittest.main()',
          comment: '# Teste básico',
        },
      ],
      pytest: [
        {
          command:
            'def test_soma():\n    assert 2 + 2 == 4\n\ndef test_lista_vazia():\n    assert len([]) == 0\n\ndef test_erro_divisao():\n    with pytest.raises(ZeroDivisionError):\n        resultado = 10 / 0',
          comment: '# Testes com pytest',
        },
      ],
      Mock: [
        {
          command:
            'from unittest.mock import Mock, patch\n\ndef test_api_request():\n    with patch("requests.get") as mock_get:\n        mock_response = Mock()\n        mock_response.json.return_value = {"status": "ok"}\n        mock_get.return_value = mock_response\n        \n        resultado = fazer_requisicao_api()\n        assert resultado["status"] == "ok"',
          comment: '# Mock de API',
        },
      ],
      Fixtures: [
        {
          command:
            '@pytest.fixture\ndef cliente_db():\n    # Configuração do banco de teste\n    conexao = conectar_banco_teste()\n    yield conexao\n    # Limpeza após o teste\n    conexao.close()\n\ndef test_inserir_usuario(cliente_db):\n    usuario = {"nome": "João", "email": "joao@email.com"}\n    resultado = cliente_db.inserir(usuario)\n    assert resultado["sucesso"] == True',
          comment: '# Fixture pytest',
        },
      ],
    },
    useCase:
      'Use quando: Desenvolvimento orientado a testes, qualidade de código',
  },

  // Card Performance e Otimização
  performanceOtimizacao: {
    title: '⚡ Performance e Otimização',
    level: 'avancado',
    id: 'performance-otimizacao',
    sections: {
      Profiling: [
        {
          command:
            'import cProfile\nimport time\n\ndef funcao_lenta():\n    time.sleep(1)\n    return "Pronto"\n\ncProfile.run("funcao_lenta()")',
          comment: '# Profile básico',
        },
        {
          command:
            'import timeit\n\ntempo = timeit.timeit(\n    "sum(range(1000))",\n    number=1000\n)\nprint(f"Tempo médio: {tempo/1000:.6f}s")',
          comment: '# Medir tempo',
        },
      ],
      Otimizações: [
        {
          command:
            '# Lento\nresultado = []\nfor i in range(10000):\n    resultado.append(i * 2)\n\n# Rápido\nresultado = [i * 2 for i in range(10000)]',
          comment: '# List comprehension',
        },
        {
          command:
            '# Lento\nif chave in dicionario:\n    valor = dicionario[chave]\nelse:\n    valor = valor_padrao\n\n# Rápido\nvalor = dicionario.get(chave, valor_padrao)',
          comment: '# get() vs in',
        },
      ],
      Memória: [
        {
          command:
            'import sys\n\nlista = list(range(1000))\nprint(f"Tamanho: {sys.getsizeof(lista)} bytes")',
          comment: '# Medir memória',
        },
        {
          command:
            'import gc\n\n# Forçar coleta de lixo\ngc.collect()\nprint(f"Objetos coletados: {gc.garbage}")',
          comment: '# Garbage collector',
        },
      ],
      'Numba e Cython': [
        {
          command:
            'from numba import jit\n\n@jit\ndef soma_rapida(n):\n    total = 0\n    for i in range(n):\n        total += i\n    return total',
          comment: '# Numba JIT',
        },
      ],
    },
    useCase:
      'Use quando: Aplicações críticas, processamento intenso, otimização',
  },
};
