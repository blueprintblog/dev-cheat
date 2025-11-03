// Objeto com todos os comandos da cheatsheet Go Programming
export const goCommands = {
  // Card Instalação e Ambiente
  instalacaoAmbiente: {
    title: '🚀 Instalação e Ambiente',
    level: 'basico',
    id: 'instalacao-ambiente',
    sections: {
      Instalação: [
        {
          command: '# Instalar Go (Linux/macOS)',
          comment: '# Baixar e instalar',
        },
        {
          command: 'wget https://golang.org/dl/go1.21.0.linux-amd64.tar.gz',
          comment: '# Download do Go',
        },
        {
          command: 'sudo tar -C /usr/local -xzf go1.21.0.linux-amd64.tar.gz',
          comment: '# Extrair para /usr/local',
        },
        {
          command: 'export PATH=$PATH:/usr/local/go/bin',
          comment: '# Adicionar ao PATH',
        },
        {
          command: "echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc",
          comment: '# Persistir no bashrc',
        },
        {
          command: '# Instalar Go (Windows)',
          comment: '# Download do instalador',
        },
        {
          command: '# Visit: https://golang.org/dl/',
          comment: '# Baixar instalador .msi',
        },
      ],
      'Variáveis de Ambiente': [
        { command: 'go version', comment: '# Verificar versão instalada' },
        { command: 'go env', comment: '# Ver todas as variáveis de ambiente' },
        { command: 'go env GOPATH', comment: '# Ver GOPATH' },
        { command: 'go env GOROOT', comment: '# Ver GOROOT' },
        { command: 'go env GOOS', comment: '# Ver sistema operacional' },
        { command: 'go env GOARCH', comment: '# Ver arquitetura' },
        { command: 'export GOPATH=$HOME/go', comment: '# Configurar GOPATH' },
        {
          command: 'export PATH=$PATH:$GOPATH/bin',
          comment: '# Adicionar GOPATH/bin ao PATH',
        },
      ],
      Ferramentas: [
        { command: 'go help', comment: '# Ajuda geral do Go' },
        {
          command: 'go help command',
          comment: '# Ajuda de comando específico',
        },
        { command: 'go tool', comment: '# Listar ferramentas disponíveis' },
        { command: 'go doc', comment: '# Documentação local' },
        { command: 'go fmt', comment: '# Formatador de código' },
        { command: 'go vet', comment: '# Analisador estático' },
        { command: 'go mod', comment: '# Gerenciador de módulos' },
      ],
    },
    useCase:
      'Use quando: Configurando ambiente Go, instalando ferramentas, configurando variáveis',
  },

  // Card Estrutura de Projetos
  estruturaProjetos: {
    title: '📁 Estrutura de Projetos',
    level: 'basico',
    id: 'estrutura-projetos',
    sections: {
      'Módulos Go': [
        {
          command: 'go mod init example.com/myproject',
          comment: '# Iniciar novo módulo',
        },
        {
          command: 'go mod init github.com/user/project',
          comment: '# Módulo no GitHub',
        },
        { command: 'go mod tidy', comment: '# Organizar dependências' },
        { command: 'go mod download', comment: '# Baixar dependências' },
        { command: 'go mod verify', comment: '# Verificar dependências' },
        {
          command: 'go mod why example.com/pkg',
          comment: '# Por que pacote é necessário',
        },
        { command: 'go list -m all', comment: '# Listar todos os módulos' },
        { command: 'go mod graph', comment: '# Gráfico de dependências' },
      ],
      'Estrutura de Diretórios': [
        { command: 'mkdir -p cmd/myapp', comment: '# Aplicações principais' },
        {
          command: 'mkdir -p pkg/utils',
          comment: '# Bibliotecas reutilizáveis',
        },
        { command: 'mkdir -p internal/config', comment: '# Código interno' },
        { command: 'mkdir -p api/proto', comment: '# Definições de API' },
        { command: 'mkdir -p web/static', comment: '# Assets web' },
        { command: 'mkdir -p deployments', comment: '# Configurações deploy' },
        { command: 'mkdir -p scripts', comment: '# Scripts utilitários' },
        { command: 'mkdir -p docs', comment: '# Documentação' },
      ],
      'Build e Execução': [
        { command: 'go run main.go', comment: '# Executar diretamente' },
        { command: 'go run .', comment: '# Executar pacote atual' },
        {
          command: 'go run cmd/myapp/main.go',
          comment: '# Executar aplicação específica',
        },
        { command: 'go build', comment: '# Compilar para binário' },
        {
          command: 'go build -o myapp',
          comment: '# Compilar com nome customizado',
        },
        {
          command: 'go build -o myapp main.go',
          comment: '# Compilar arquivo específico',
        },
        {
          command: 'go install',
          comment: '# Compilar e instalar em GOPATH/bin',
        },
        { command: 'go clean', comment: '# Limpar arquivos de build' },
      ],
      'Cross-compilation': [
        { command: 'GOOS=linux go build', comment: '# Build para Linux' },
        { command: 'GOOS=windows go build', comment: '# Build para Windows' },
        { command: 'GOOS=darwin go build', comment: '# Build para macOS' },
        {
          command: 'GOOS=linux GOARCH=arm64 go build',
          comment: '# Build para ARM64',
        },
        {
          command: 'GOOS=windows GOARCH=amd64 go build',
          comment: '# Build Windows 64-bit',
        },
        { command: 'go build -ldflags="-s -w"', comment: '# Build otimizado' },
        {
          command: 'go build -tags netgo -installsuffix netgo',
          comment: '# Build com CGO desabilitado',
        },
      ],
    },
    useCase:
      'Use quando: Criando novos projetos, organizando código, gerenciando dependências',
  },

  // Card Variáveis e Tipos
  variaveisTipos: {
    title: '📋 Variáveis e Tipos',
    level: 'basico',
    id: 'variaveis-tipos',
    sections: {
      'Declaração de Variáveis': [
        {
          command: 'var nome string = "João"',
          comment: '# Declaração completa',
        },
        { command: 'var idade int = 25', comment: '# Tipo inteiro' },
        { command: 'var altura float64 = 1.75', comment: '# Ponto flutuante' },
        { command: 'var ativo bool = true', comment: '# Booleano' },
        {
          command: 'nome := "Maria"',
          comment: '# Inferência de tipo (short declaration)',
        },
        { command: 'idade := 30', comment: '# Inferência para inteiro' },
        {
          command: 'var preco = 19.99',
          comment: '# Inferência sem tipo explícito',
        },
        {
          command: 'var cidade string',
          comment: '# Declaração sem valor (zero value)',
        },
      ],
      'Tipos Básicos': [
        { command: 'var nome string', comment: '# String' },
        { command: 'var idade int', comment: '# Inteiro' },
        { command: 'var preco float64', comment: '# Float 64-bit' },
        { command: 'var flag bool', comment: '# Booleano' },
        { command: 'var byteVar byte', comment: '# Byte (uint8)' },
        { command: 'var runeVar rune', comment: '# Rune (int32)' },
        { command: 'var erro error', comment: '# Tipo error' },
        { command: 'var ptr *int', comment: '# Ponteiro para inteiro' },
      ],
      'Tipos Numéricos': [
        { command: 'var i int', comment: '# Inteiro (depende da arquitetura)' },
        { command: 'var i8 int8', comment: '# Inteiro 8-bit' },
        { command: 'var i16 int16', comment: '# Inteiro 16-bit' },
        { command: 'var i32 int32', comment: '# Inteiro 32-bit' },
        { command: 'var i64 int64', comment: '# Inteiro 64-bit' },
        { command: 'var u uint', comment: '# Unsigned int' },
        { command: 'var u32 uint32', comment: '# Unsigned 32-bit' },
        { command: 'var u64 uint64', comment: '# Unsigned 64-bit' },
        { command: 'var f32 float32', comment: '# Float 32-bit' },
        { command: 'var f64 float64', comment: '# Float 64-bit' },
      ],
      Constantes: [
        { command: 'const PI = 3.14159', comment: '# Constante numérica' },
        { command: 'const nome = "Go"', comment: '# Constante string' },
        { command: 'const ativo = true', comment: '# Constante booleana' },
        {
          command: 'const (\n    A = 1\n    B = 2\n    C = 3\n)',
          comment: '# Bloco de constantes',
        },
        {
          command: 'const (\n    Segunda = iota\n    Terça\n    Quarta\n)',
          comment: '# iota (auto-incremento)',
        },
      ],
    },
    useCase:
      'Use quando: Declarando variáveis, trabalhando com tipos básicos, definindo constantes',
  },

  // Card Estruturas de Dados
  estruturasDados: {
    title: '🏗️ Estruturas de Dados',
    level: 'basico',
    id: 'estruturas-dados',
    sections: {
      Arrays: [
        { command: 'var numeros [5]int', comment: '# Array de 5 inteiros' },
        {
          command: 'numeros := [5]int{1, 2, 3, 4, 5}',
          comment: '# Array com valores',
        },
        {
          command: 'numeros := [...]int{1, 2, 3, 4, 5}',
          comment: '# Array com tamanho automático',
        },
        { command: 'primeiro := numeros[0]', comment: '# Acessar elemento' },
        { command: 'len(numeros)', comment: '# Tamanho do array' },
        {
          command: 'var matriz [3][4]int',
          comment: '# Array multidimensional',
        },
      ],
      Slices: [
        { command: 'var slice []int', comment: '# Slice vazio' },
        {
          command: 'slice := []int{1, 2, 3, 4, 5}',
          comment: '# Slice com valores',
        },
        { command: 'slice := make([]int, 5)', comment: '# Slice com make()' },
        { command: 'slice := make([]int, 5, 10)', comment: '# Com capacidade' },
        {
          command: 'slice = append(slice, 6)',
          comment: '# Adicionar elemento',
        },
        {
          command: 'slice = append(slice, 7, 8, 9)',
          comment: '# Adicionar múltiplos',
        },
        { command: 'subslice := slice[1:4]', comment: '# Fatiar slice' },
        {
          command: 'subslice := slice[:3]',
          comment: '# Primeiros 3 elementos',
        },
        { command: 'subslice := slice[2:]', comment: '# Do 2 até o fim' },
      ],
      Maps: [
        { command: 'var m map[string]int', comment: '# Map vazio' },
        {
          command: 'm := make(map[string]int)',
          comment: '# Criar map com make()',
        },
        {
          command: 'm := map[string]int{"a": 1, "b": 2}',
          comment: '# Map com valores',
        },
        { command: 'm["chave"] = 42', comment: '# Adicionar/alterar valor' },
        { command: 'valor := m["chave"]', comment: '# Acessar valor' },
        {
          command: 'valor, ok := m["chave"]',
          comment: '# Acessar com verificação',
        },
        { command: 'delete(m, "chave")', comment: '# Remover chave' },
        { command: 'len(m)', comment: '# Número de elementos' },
      ],
      Structs: [
        {
          command: 'type Pessoa struct {\n    Nome string\n    Idade int\n}',
          comment: '# Definir struct',
        },
        {
          command: 'p := Pessoa{Nome: "João", Idade: 25}',
          comment: '# Criar instância',
        },
        {
          command: 'p := Pessoa{"Maria", 30}',
          comment: '# Criar sem nome de campos',
        },
        { command: 'var p Pessoa', comment: '# Struct vazia (zero values)' },
        { command: 'p.Nome = "Carlos"', comment: '# Acessar campo' },
        { command: 'nome := p.Nome', comment: '# Ler campo' },
        {
          command:
            'type Endereco struct {\n    Rua, Cidade string\n    CEP int\n}',
          comment: '# Campos combinados',
        },
      ],
    },
    useCase:
      'Use quando: Trabalhando com coleções de dados, estruturas complexas, armazenamento',
  },

  // Card Estruturas de Controle
  estruturasControle: {
    title: '🔀 Estruturas de Controle',
    level: 'basico',
    id: 'estruturas-controle',
    sections: {
      'If/Else': [
        {
          command: 'if idade >= 18 {\n    fmt.Println("Maior de idade")\n}',
          comment: '# If simples',
        },
        {
          command:
            'if nota >= 7 {\n    fmt.Println("Aprovado")\n} else {\n    fmt.Println("Reprovado")\n}',
          comment: '# If/Else',
        },
        {
          command:
            'if nota >= 7 {\n    fmt.Println("Aprovado")\n} else if nota >= 5 {\n    fmt.Println("Recuperação")\n} else {\n    fmt.Println("Reprovado")\n}',
          comment: '# If/Else If/Else',
        },
        {
          command:
            'if valor := calcular(); valor > 0 {\n    fmt.Println("Positivo:", valor)\n}',
          comment: '# If com inicialização',
        },
      ],
      'Loops For': [
        {
          command: 'for i := 0; i < 5; i++ {\n    fmt.Println(i)\n}',
          comment: '# For tradicional',
        },
        {
          command: 'for i := 1; i <= 10; i += 2 {\n    fmt.Println(i)\n}',
          comment: '# For com passo',
        },
        {
          command: 'i := 0\nfor i < 5 {\n    fmt.Println(i)\n    i++\n}',
          comment: '# For como while',
        },
        {
          command:
            'slice := []int{1, 2, 3}\nfor i, valor := range slice {\n    fmt.Println(i, valor)\n}',
          comment: '# Range em slice',
        },
        {
          command:
            'm := map[string]int{"a": 1, "b": 2}\nfor chave, valor := range m {\n    fmt.Println(chave, valor)\n}',
          comment: '# Range em map',
        },
        {
          command: 'for i := range 5 {\n    fmt.Println(i)\n}',
          comment: '# Range simples',
        },
        {
          command: 'for {\n    // loop infinito\n}',
          comment: '# Loop infinito',
        },
      ],
      Switch: [
        {
          command:
            'switch dia {\ncase "segunda":\n    fmt.Println("Início da semana")\ncase "sexta":\n    fmt.Println("Final da semana")\ndefault:\n    fmt.Println("Meio da semana")\n}',
          comment: '# Switch básico',
        },
        {
          command:
            'switch nota {\ncase 10:\n    fmt.Println("Perfeito")\ncase 9, 8:\n    fmt.Println("Ótimo")\ncase 7, 6:\n    fmt.Println("Bom")\ndefault:\n    fmt.Println("Precisa melhorar")\n}',
          comment: '# Múltiplos casos',
        },
        {
          command:
            'x := 10\nswitch {\ncase x > 10:\n    fmt.Println("Maior que 10")\ncase x == 10:\n    fmt.Println("Igual a 10")\ndefault:\n    fmt.Println("Menor que 10")\n}',
          comment: '# Switch sem expressão',
        },
      ],
      'Break e Continue': [
        {
          command:
            'for i := 0; i < 10; i++ {\n    if i == 5 {\n        continue\n    }\n    fmt.Println(i)\n}',
          comment: '# Continue - pular iteração',
        },
        {
          command:
            'for i := 0; i < 10; i++ {\n    if i == 7 {\n        break\n    }\n    fmt.Println(i)\n}',
          comment: '# Break - sair do loop',
        },
        {
          command:
            'Loop:\n    for i := 0; i < 3; i++ {\n        for j := 0; j < 3; j++ {\n            if i == j {\n                break Loop\n            }\n            fmt.Println(i, j)\n        }\n    }',
          comment: '# Break com label',
        },
      ],
    },
    useCase:
      'Use quando: Controlando fluxo do programa, repetições, decisões condicionais',
  },

  // Card Funções
  funcoes: {
    title: '⚡ Funções',
    level: 'intermediario',
    id: 'funcoes',
    sections: {
      'Funções Básicas': [
        {
          command:
            'func saudar(nome string) {\n    fmt.Println("Olá,", nome)\n}',
          comment: '# Função simples',
        },
        {
          command: 'func soma(a, b int) int {\n    return a + b\n}',
          comment: '# Função com retorno',
        },
        {
          command:
            'func calcula(base, altura float64) (float64, float64) {\n    area := base * altura\n    perimetro := 2 * (base + altura)\n    return area, perimetro\n}',
          comment: '# Múltiplos retornos',
        },
        {
          command:
            'func saudar(nome string, idade ...int) {\n    fmt.Println("Olá,", nome)\n    for _, i := range idade {\n        fmt.Println(i)\n    }\n}',
          comment: '# Variadic arguments',
        },
      ],
      'Funções Anônimas': [
        {
          command:
            'soma := func(a, b int) int {\n    return a + b\n}\nresultado := soma(3, 4)',
          comment: '# Função anônima',
        },
        {
          command:
            'func executor(f func(int) int, valor int) {\n    fmt.Println(f(valor))\n}\nquadrado := func(x int) int { return x * x }\nexecutor(quadrado, 5)',
          comment: '# Função como parâmetro',
        },
        {
          command: 'func() {\n    fmt.Println("Executando imediatamente")\n}()',
          comment: '# IIFE (Immediately Invoked)',
        },
      ],
      Closures: [
        {
          command:
            'func contador() func() int {\n    i := 0\n    return func() int {\n        i++\n        return i\n    }\n}\nc := contador()\nfmt.Println(c()) // 1\nfmt.Println(c()) // 2',
          comment: '# Closure simples',
        },
        {
          command:
            'func multiplicador(fator int) func(int) int {\n    return func(x int) int {\n        return x * fator\n    }\n}\ndobrar := multiplicador(2)\ntriplicar := multiplicador(3)',
          comment: '# Closure factory',
        },
      ],
      Recursão: [
        {
          command:
            'func fatorial(n int) int {\n    if n <= 1 {\n        return 1\n    }\n    return n * fatorial(n-1)\n}',
          comment: '# Função recursiva',
        },
        {
          command:
            'func fibonacci(n int) int {\n    if n <= 1 {\n        return n\n    }\n    return fibonacci(n-1) + fibonacci(n-2)\n}',
          comment: '# Fibonacci recursivo',
        },
        {
          command:
            'func fibonacciIterativo(n int) int {\n    a, b := 0, 1\n    for i := 0; i < n; i++ {\n        a, b = b, a+b\n    }\n    return a\n}',
          comment: '# Versão iterativa (mais eficiente)',
        },
      ],
    },
    useCase:
      'Use quando: Reutilizando código, organização lógica, modularização, closures',
  },

  // Card Métodos e Interfaces
  metodosInterfaces: {
    title: '🔧 Métodos e Interfaces',
    level: 'intermediario',
    id: 'metodos-interfaces',
    sections: {
      Métodos: [
        {
          command:
            'type Retangulo struct {\n    Largura, Altura float64\n}\n\nfunc (r Retangulo) Area() float64 {\n    return r.Largura * r.Altura\n}',
          comment: '# Método em struct',
        },
        {
          command:
            'func (r *Retangulo) SetLargura(l float64) {\n    r.Largura = l\n}',
          comment: '# Método com ponteiro',
        },
        {
          command:
            'type Celsius float64\n\nfunc (c Celsius) Fahrenheit() float64 {\n    return float64(c)*9/5 + 32\n}',
          comment: '# Método em tipo básico',
        },
        {
          command:
            'type Contador int\n\nfunc (c *Contador) Incrementar() {\n    *c++\n}',
          comment: '# Método em tipo customizado',
        },
      ],
      Interfaces: [
        {
          command:
            'type Forma interface {\n    Area() float64\n    Perimetro() float64\n}',
          comment: '# Definir interface',
        },
        {
          command:
            'type Escritor interface {\n    Escrever() error\n}\n\ntype Arquivo struct{}\n\nfunc (a Arquivo) Escrever() error {\n    // implementação\n    return nil\n}',
          comment: '# Implementar interface',
        },
        {
          command:
            'type InterfaceVazia interface{}\n\nfunc QualquerCoisa(valor interface{}) {\n    // aceita qualquer tipo\n}',
          comment: '# Interface vazia (any)',
        },
        {
          command: 'var w Escritor = Arquivo{}\nw.Escrever()',
          comment: '# Usar interface',
        },
      ],
      'Type Assertions': [
        {
          command:
            'var x interface{} = "hello"\nif s, ok := x.(string); ok {\n    fmt.Println("String:", s)\n}',
          comment: '# Type assertion com verificação',
        },
        {
          command: 'valor := x.(string)',
          comment: '# Type assertion direto (pode panicar)',
        },
        {
          command:
            'switch v := x.(type) {\ncase string:\n    fmt.Println("String:", v)\ncase int:\n    fmt.Println("Int:", v)\ndefault:\n    fmt.Println("Tipo desconhecido")\n}',
          comment: '# Type switch',
        },
      ],
      'Interfaces Comuns': [
        {
          command: 'type Stringer interface {\n    String() string\n}',
          comment: '# Interface Stringer',
        },
        {
          command: 'type Error interface {\n    Error() string\n}',
          comment: '# Interface Error',
        },
        {
          command:
            'func (e ErroCustom) Error() string {\n    return "Erro: " + e.mensagem\n}',
          comment: '# Implementar Error',
        },
        {
          command: 'fmt.Println(erroCustom)',
          comment: '# Print chama String() ou Error()',
        },
      ],
    },
    useCase:
      'Use quando: Polimorfismo, abstração, padrões de projeto, design flexível',
  },

  // Card Goroutines e Canais
  goroutinesCanais: {
    title: '🚀 Goroutines e Canais',
    level: 'intermediario',
    id: 'goroutines-canais',
    sections: {
      Goroutines: [
        {
          command:
            'go func() {\n    fmt.Println("Executando em goroutine")\n}()',
          comment: '# Goroutine anônima',
        },
        {
          command:
            'func tarefa(id int) {\n    fmt.Println("Tarefa", id)\n}\n\nfor i := 0; i < 3; i++ {\n    go tarefa(i)\n}',
          comment: '# Múltiplas goroutines',
        },
        {
          command:
            'func tarefaLonga() {\n    time.Sleep(2 * time.Second)\n    fmt.Println("Pronto")\n}\n\nfmt.Println("Iniciando")\ngo tarefaLonga()\nfmt.Println("Continuando")\ntime.Sleep(3 * time.Second)',
          comment: '# Goroutine com delay',
        },
        {
          command:
            'var wg sync.WaitGroup\n\nfor i := 0; i < 3; i++ {\n    wg.Add(1)\n    go func(id int) {\n        defer wg.Done()\n        fmt.Println("Tarefa", id)\n    }(i)\n}\nwg.Wait()',
          comment: '# WaitGroup para sincronização',
        },
      ],
      'Canais Básicos': [
        { command: 'ch := make(chan int)', comment: '# Criar canal' },
        { command: 'ch <- 42', comment: '# Enviar para canal' },
        { command: 'valor := <-ch', comment: '# Receber do canal' },
        {
          command: 'ch := make(chan string, 10)',
          comment: '# Canal com buffer',
        },
        { command: 'close(ch)', comment: '# Fechar canal' },
        { command: 'valor, ok := <-ch', comment: '# Receber com verificação' },
      ],
      Select: [
        {
          command:
            'select {\ncase msg1 := <-ch1:\n    fmt.Println("Recebido:", msg1)\ncase msg2 := <-ch2:\n    fmt.Println("Recebido:", msg2)\ncase ch3 <- mensagem:\n    fmt.Println("Enviado")\ndefault:\n    fmt.Println("Nenhum canal pronto")\n}',
          comment: '# Select com múltiplos casos',
        },
        {
          command:
            'select {\ncase <-time.After(2 * time.Second):\n    fmt.Println("Timeout")\ncase valor := <-ch:\n    fmt.Println("Recebido:", valor)\n}',
          comment: '# Select com timeout',
        },
        {
          command:
            'ticker := time.NewTicker(1 * time.Second)\nfor {\n    select {\n    case <-ticker.C:\n        fmt.Println("Tick")\n    case <-done:\n        return\n    }\n}',
          comment: 'Select com ticker',
        },
      ],
      'Padrões de Concorrência': [
        {
          command:
            'func worker(jobs <-chan int, results chan<- int) {\n    for j := range jobs {\n        results <- j * 2\n    }\n}',
          comment: '# Worker pool pattern',
        },
        {
          command:
            'jobs := make(chan int, 100)\nresults := make(chan int, 100)\nfor w := 0; w < 3; w++ {\n    go worker(jobs, results)\n}\nfor j := 0; j < 5; j++ {\n    jobs <- j\n}\nclose(jobs)',
          comment: '# Usando worker pool',
        },
        {
          command:
            'func fanIn(input1, input2 <-chan string) <-chan string {\n    output := make(chan string)\n    go func() {\n        for {\n            select {\n            case s := <-input1:\n                output <- s\n            case s := <-input2:\n                output <- s\n            }\n        }\n    }()\n    return output\n}',
          comment: '# Fan-in pattern',
        },
      ],
    },
    useCase:
      'Use quando: Processamento concorrente, paralelismo, comunicação entre goroutines',
  },

  // Card Error Handling
  errorHandling: {
    title: '⚠️ Error Handling',
    level: 'intermediario',
    id: 'error-handling',
    sections: {
      'Errors Básicos': [
        {
          command:
            'func dividir(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, errors.New("divisão por zero")\n    }\n    return a / b, nil\n}',
          comment: '# Função que retorna error',
        },
        {
          command:
            'resultado, err := dividir(10, 0)\nif err != nil {\n    fmt.Println("Erro:", err)\n    return\n}\nfmt.Println("Resultado:", resultado)',
          comment: '# Tratamento de error',
        },
        {
          command: 'import "errors"\nerr := errors.New("erro customizado")',
          comment: '# Criar error simples',
        },
        {
          command: 'err := fmt.Errorf("valor %d inválido", valor)',
          comment: '# Error formatado',
        },
      ],
      'Errors Customizados': [
        {
          command:
            'type ErroValidacao struct {\n    Campo string\n    Valor interface{}\n}\n\nfunc (e ErroValidacao) Error() string {\n    return fmt.Sprintf("campo %s inválido: %v", e.Campo, e.Valor)\n}',
          comment: '# Struct de error customizado',
        },
        {
          command:
            'type ErroNegocio struct {\n    Code    int\n    Message string\n}\n\nfunc (e ErroNegocio) Error() string {\n    return fmt.Sprintf("Erro %d: %s", e.Code, e.Message)\n}',
          comment: '# Error de negócio',
        },
        {
          command:
            'func validarIdade(idade int) error {\n    if idade < 0 {\n        return ErroValidacao{"idade", idade}\n    }\n    return nil\n}',
          comment: '# Usar error customizado',
        },
      ],
      'Wrapping Errors': [
        {
          command:
            'func processarArquivo(arquivo string) error {\n    data, err := os.ReadFile(arquivo)\n    if err != nil {\n        return fmt.Errorf("falha ao ler arquivo %s: %w", arquivo, err)\n    }\n    // processar data\n    return nil\n}',
          comment: '# Error wrapping',
        },
        {
          command:
            'err := processarArquivo("dados.txt")\nif err != nil {\n    if errors.Is(err, os.ErrNotExist) {\n        fmt.Println("Arquivo não existe")\n    } else {\n        fmt.Println("Outro erro:", err)\n    }\n}',
          comment: '# Verificar error com errors.Is',
        },
        {
          command:
            'var pathError *os.PathError\nif errors.As(err, &pathError) {\n    fmt.Println("Erro de caminho:", pathError.Path)\n}',
          comment: 'Extrair tipo específico com errors.As',
        },
      ],
      'Panic e Recover': [
        {
          command: 'panic("algo deu muito errado!")',
          comment: '# Disparar panic',
        },
        {
          command:
            'func dangerous() {\n    defer func() {\n        if r := recover(); r != nil {\n            fmt.Println("Recuperado do panic:", r)\n        }\n    }()\n    panic("problema!")\n}',
          comment: '# Recover de panic',
        },
        {
          command:
            'func devePanic(t *testing.T) {\n    defer func() {\n        if r := recover(); r == nil {\n            t.Errorf("Esperava panic")\n        }\n    }()\n    funcaoQueDevePanicar()\n}',
          comment: '# Testar panic em unit tests',
        },
      ],
    },
    useCase:
      'Use quando: Tratamento de erros robusto, validação, recuperação de panics',
  },

  // Card Testing
  testing: {
    title: '🧪 Testing',
    level: 'intermediario',
    id: 'testing',
    sections: {
      'Testes Básicos': [
        {
          command:
            'func TestSoma(t *testing.T) {\n    resultado := soma(2, 3)\n    esperado := 5\n    if resultado != esperado {\n        t.Errorf("soma(2, 3) = %d; esperado %d", resultado, esperado)\n    }\n}',
          comment: '# Teste básico',
        },
        { command: 'go test', comment: '# Executar todos os testes' },
        { command: 'go test -v', comment: '# Executar com verbosidade' },
        {
          command: 'go test -run TestSoma',
          comment: '# Executar teste específico',
        },
        {
          command: 'go test ./...',
          comment: '# Executar testes em todos os pacotes',
        },
      ],
      Assertions: [
        {
          command:
            'func TestDivisao(t *testing.T) {\n    t.Run("divisão normal", func(t *testing.T) {\n        resultado, err := dividir(10, 2)\n        if resultado != 5 {\n            t.Errorf("Esperado 5, obteve %f", resultado)\n        }\n        if err != nil {\n            t.Errorf("Não deveria ter erro: %v", err)\n        }\n    })\n}',
          comment: '# Subtestes',
        },
        {
          command:
            'if !reflect.DeepEqual(resultado, esperado) {\n    t.Errorf("Resultados diferentes")\n}',
          comment: '# Comparar structs complexas',
        },
        {
          command:
            'if len(slices) != 3 {\n    t.Errorf("Esperado 3 elementos, obteve %d", len(slices))\n}',
          comment: '# Verificar tamanho',
        },
      ],
      'Teste de Erros': [
        {
          command:
            'func TestDivisaoPorZero(t *testing.T) {\n    _, err := dividir(10, 0)\n    if err == nil {\n        t.Error("Esperava erro de divisão por zero")\n    }\n    if err.Error() != "divisão por zero" {\n        t.Errorf("Mensagem de erro inesperada: %s", err.Error())\n    }\n}',
          comment: '# Testar erro',
        },
        {
          command:
            'func TestErroCustomizado(t *testing.T) {\n    err := processar(-1)\n    var erroValidacao ErroValidacao\n    if !errors.As(err, &erroValidacao) {\n        t.Errorf("Esperava ErroValidacao, obteve %T", err)\n    }\n}',
          comment: '# Testar error customizado',
        },
      ],
      Benchmark: [
        {
          command:
            'func BenchmarkSoma(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        soma(100, 200)\n    }\n}',
          comment: '# Benchmark de performance',
        },
        { command: 'go test -bench=.', comment: '# Executar benchmarks' },
        {
          command: 'go test -bench=BenchmarkSoma -benchmem',
          comment: '# Benchmark com memória',
        },
        {
          command: 'go test -bench=. -cpuprofile=cpu.prof',
          comment: '# Profile de CPU',
        },
        {
          command: 'go test -bench=. -memprofile=mem.prof',
          comment: '# Profile de memória',
        },
      ],
      'Table-driven Tests': [
        {
          command:
            'func TestCalculadora(t *testing.T) {\n    casos := []struct {\n        nome     string\n        a, b     int\n        esperado int\n    }{\n        {"soma positiva", 2, 3, 5},\n        {"soma negativa", -2, -3, -5},\n        {"soma zero", 0, 5, 5},\n    }\n    \n    for _, c := range casos {\n        t.Run(c.nome, func(t *testing.T) {\n            resultado := soma(c.a, c.b)\n            if resultado != c.esperado {\n                t.Errorf("%s: soma(%d, %d) = %d; esperado %d",\n                    c.nome, c.a, c.b, resultado, c.esperado)\n            }\n        })\n    }\n}',
          comment: '# Table-driven test',
        },
      ],
    },
    useCase:
      'Use quando: Desenvolvimento orientado a testes, garantia de qualidade, regressão',
  },

  // Card Context e Cancelamento
  contextCancelamento: {
    title: '⏱️ Context e Cancelamento',
    level: 'avancado',
    id: 'context-cancelamento',
    sections: {
      'Context Básico': [
        {
          command: 'import "context"\n\nctx := context.Background()',
          comment: '# Context raiz',
        },
        { command: 'ctx := context.TODO()', comment: '# Context placeholder' },
        {
          command:
            'ctx, cancel := context.WithCancel(context.Background())\ndefer cancel()',
          comment: '# Context com cancelamento',
        },
        {
          command:
            'ctx := context.WithValue(context.Background(), "userID", 123)',
          comment: '# Context com valores',
        },
      ],
      Timeout: [
        {
          command:
            'ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)\ndefer cancel()\n\nselect {\ncase <-ctx.Done():\n    fmt.Println("Timeout:", ctx.Err())\ncase resultado := <-longaOperacao():\n    fmt.Println("Sucesso:", resultado)\n}',
          comment: '# Context com timeout',
        },
        {
          command:
            'func operacaoLonga(ctx context.Context) error {\n    select {\n    case <-time.After(10 * time.Second):\n        return nil\n    case <-ctx.Done():\n        return ctx.Err()\n    }\n}',
          comment: '# Função que respeita context',
        },
      ],
      Cancelamento: [
        {
          command:
            'ctx, cancel := context.WithCancel(context.Background())\n\ngo func() {\n    time.Sleep(2 * time.Second)\n    cancel() // cancela após 2 segundos\n}()\n\nselect {\ncase <-ctx.Done():\n    fmt.Println("Cancelado:", ctx.Err())\n}',
          comment: '# Cancelamento manual',
        },
        {
          command:
            'func worker(ctx context.Context) {\n    for {\n        select {\n        case <-ctx.Done():\n            fmt.Println("Worker encerrado")\n            return\n        default:\n            // fazer trabalho\n            time.Sleep(100 * time.Millisecond)\n        }\n    }\n}',
          comment: '# Worker com cancelamento',
        },
      ],
      'Propagação de Context': [
        {
          command:
            'func handler(ctx context.Context) error {\n    ctx = context.WithValue(ctx, "requestID", "12345")\n    return servico(ctx)\n}\n\nfunc servico(ctx context.Context) error {\n    requestID := ctx.Value("requestID").(string)\n    fmt.Println("Request ID:", requestID)\n    return nil\n}',
          comment: '# Propagar valores',
        },
        {
          command:
            'func servidorHTTP(w http.ResponseWriter, r *http.Request) {\n    ctx := r.Context()\n    ctx = context.WithValue(ctx, "userID", getUserID(r))\n    processarRequisicao(ctx)\n}',
          comment: '# Context em HTTP',
        },
      ],
      Deadline: [
        {
          command:
            'ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(5*time.Second))\ndefer cancel()',
          comment: '# Context com deadline',
        },
        {
          command:
            'if deadline, ok := ctx.Deadline(); ok {\n    fmt.Println("Deadline:", deadline)\n    tempoRestante := time.Until(deadline)\n    fmt.Println("Tempo restante:", tempoRestante)\n}',
          comment: '# Verificar deadline',
        },
        {
          command:
            'func tarefaComDeadline(ctx context.Context) error {\n    if deadline, ok := ctx.Deadline(); ok {\n        fmt.Println("Precisa terminar antes:", deadline)\n    }\n    // executar tarefa\n    return nil\n}',
          comment: '# Tarefa com deadline',
        },
      ],
    },
    useCase:
      'Use quando: Operações longas, cancelamento propagação, timeouts em APIs',
  },

  // Card Reflection e Generics
  reflectionGenerics: {
    title: '🔍 Reflection e Generics',
    level: 'avancado',
    id: 'reflection-generics',
    sections: {
      'Reflection Básica': [
        {
          command:
            'import "reflect"\n\nx := 42\ntipo := reflect.TypeOf(x)\nvalor := reflect.ValueOf(x)\nfmt.Println("Tipo:", tipo)\nfmt.Println("Valor:", valor)',
          comment: '# Type e Value',
        },
        {
          command:
            'var i int = 42\nv := reflect.ValueOf(i)\nif v.Kind() == reflect.Int {\n    fmt.Println("É um inteiro")\n}',
          comment: '# Verificar kind',
        },
        {
          command:
            'pessoa := Pessoa{Nome: "João", Idade: 25}\nv := reflect.ValueOf(pessoa)\ncampo := v.FieldByName("Nome")\nfmt.Println("Nome:", campo.String())',
          comment: '# Acessar campos',
        },
      ],
      'Modificação com Reflection': [
        {
          command:
            'x := 42\nv := reflect.ValueOf(&x).Elem()\nif v.CanSet() {\n    v.SetInt(100)\n    fmt.Println("x agora é:", x)\n}',
          comment: '# Modificar valor',
        },
        {
          command:
            'slice := []int{1, 2, 3}\nv := reflect.ValueOf(slice)\nv.SetLen(5)\nfmt.Println("Novo tamanho:", len(slice))',
          comment: '# Modificar slice',
        },
        {
          command:
            'm := make(map[string]int)\nv := reflect.ValueOf(m)\nv.SetMapIndex(reflect.ValueOf("chave"), reflect.ValueOf(42))',
          comment: '# Modificar map',
        },
      ],
      Generics: [
        {
          command: 'func Generico[T any](valor T) T {\n    return valor\n}',
          comment: '# Função genérica simples',
        },
        {
          command:
            'type Pilha[T any] struct {\n    elementos []T\n}\n\nfunc (p *Pilha[T]) Push(elemento T) {\n    p.elementos = append(p.elementos, elemento)\n}\n\nfunc (p *Pilha[T]) Pop() T {\n    ultimo := p.elementos[len(p.elementos)-1]\n    p.elementos = p.elementos[:len(p.elementos)-1]\n    return ultimo\n}',
          comment: '# Struct genérica',
        },
        {
          command:
            'func Maior[T constraints.Ordered](a, b T) T {\n    if a > b {\n        return a\n    }\n    return b\n}',
          comment: '# Generics com constraints',
        },
      ],
      'Interfaces Genéricas': [
        {
          command:
            'type Container[T any] interface {\n    Add(T)\n    Get() T\n}',
          comment: '# Interface genérica',
        },
        {
          command:
            'type Comparavel interface {\n    Compare(outro interface{}) int\n}\n\nfunc Max[T Comparavel](slice []T) T {\n    max := slice[0]\n    for _, v := range slice[1:] {\n        if v.Compare(max) > 0 {\n            max = v\n        }\n    }\n    return max\n}',
          comment: '# Interface com generics',
        },
      ],
      'Reflection e Generics': [
        {
          command:
            'func ImprimirTipo[T any](valor T) {\n    t := reflect.TypeOf(valor)\n    v := reflect.ValueOf(valor)\n    fmt.Printf("Tipo: %s, Valor: %v\\n", t, v)\n}',
          comment: '# Reflection em genéricos',
        },
        {
          command:
            'func CriarSlice[T any](tipo T, tamanho int) []T {\n    t := reflect.TypeOf(tipo)\n    slice := reflect.MakeSlice(reflect.SliceOf(t), tamanho, tamanho)\n    return slice.Interface().([]T)\n}',
          comment: '# Criar slices dinamicamente',
        },
      ],
    },
    useCase:
      'Use quando: Frameworks, bibliotecas genéricas, metaprogramação, serialização',
  },

  // Card Build e Deployment
  buildDeployment: {
    title: '🏗️ Build e Deployment',
    level: 'avancado',
    id: 'build-deployment',
    sections: {
      'Build Options': [
        {
          command: 'go build -ldflags="-s -w"',
          comment: '# Strip symbols (binário menor)',
        },
        {
          command: 'go build -ldflags="-X main.Version=1.0.0"',
          comment: '# Injetar variáveis',
        },
        { command: 'go build -tags "production"', comment: '# Build tags' },
        { command: 'go build -race', comment: '# Detector de race conditions' },
        {
          command: 'go build -gcflags="-m"',
          comment: '# Mostrar optimizations do compilador',
        },
        {
          command: 'go build -asmflags="-I ."',
          comment: '# Flags para assembler',
        },
      ],
      'Cross-compilation': [
        {
          command: 'GOOS=linux GOARCH=amd64 go build',
          comment: '# Linux 64-bit',
        },
        {
          command: 'GOOS=windows GOARCH=amd64 go build -o app.exe',
          comment: '# Windows 64-bit',
        },
        {
          command: 'GOOS=darwin GOARCH=amd64 go build',
          comment: '# macOS Intel',
        },
        {
          command: 'GOOS=darwin GOARCH=arm64 go build',
          comment: '# macOS Apple Silicon',
        },
        {
          command: 'GOOS=linux GOARCH=arm64 go build',
          comment: '# Linux ARM64',
        },
        { command: 'GOOS=freebsd GOARCH=amd64 go build', comment: '# FreeBSD' },
      ],
      Docker: [
        {
          command:
            '# Multi-stage build\nFROM golang:1.21-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o main .\n\nFROM alpine:latest\nRUN apk --no-cache add ca-certificates\nWORKDIR /root/\nCOPY --from=builder /app/main .\nCMD ["./main"]',
          comment: '# Docker multi-stage',
        },
        {
          command:
            'FROM golang:1.21-alpine AS builder\nRUN go mod download\nCOPY . .\nRUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .',
          comment: '# Build para Alpine',
        },
      ],
      'CI/CD': [
        {
          command:
            "name: Test and Build\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - uses: actions/setup-go@v4\n      with:\n        go-version: '1.21'\n    - run: go test ./...",
          comment: '# GitHub Actions',
        },
        {
          command:
            'build:\n    stage: build\n    image: golang:1.21\n    script:\n      - go mod download\n      - go build -o app\n    artifacts:\n      paths:\n        - app',
          comment: '# GitLab CI',
        },
        {
          command:
            'pipeline:\n  agent:\n    docker:\n      image: golang:1.21\n  steps:\n    - checkout\n    - task: Test\n      script:\n        - go test ./...',
          comment: '# Bamboo',
        },
      ],
      Deployment: [
        {
          command: 'systemctl start myapp.service',
          comment: '# Systemd service',
        },
        { command: 'docker-compose up -d', comment: '# Docker Compose' },
        {
          command: 'kubectl apply -f deployment.yaml',
          comment: '# Kubernetes',
        },
        {
          command: 'docker build -t myapp:latest .',
          comment: '# Docker image',
        },
        {
          command: 'docker push registry.com/myapp:latest',
          comment: '# Push para registry',
        },
      ],
    },
    useCase:
      'Use quando: Produção, CI/CD, Docker, deployment em diferentes plataformas',
  },
};
