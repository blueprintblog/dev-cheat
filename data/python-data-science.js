// Objeto com todos os comandos da cheatsheet Python Data Science
export const pythonDataScienceCommands = {
  // Comandos Básico - Pandas e DataFrames
  pandasDataFrames: {
    title: '🟢 Pandas e DataFrames',
    level: 'basico',
    id: 'basico',
    sections: {
      'Importação e Leitura': [
        {
          command: 'import pandas as pd',
          comment: '# Importar biblioteca Pandas',
        },
        {
          command: "df = pd.read_csv('arquivo.csv')",
          comment: '# Ler arquivo CSV para DataFrame',
        },
        {
          command: "df = pd.read_excel('arquivo.xlsx')",
          comment: '# Ler arquivo Excel',
        },
        {
          command: "df = pd.read_json('arquivo.json')",
          comment: '# Ler arquivo JSON',
        },
      ],
      'Visualização Básica': [
        { command: 'df.head()', comment: '# Exibir primeiras 5 linhas' },
        { command: 'df.tail()', comment: '# Exibir últimas 5 linhas' },
        { command: 'df.info()', comment: '# Exibir informações resumidas' },
        { command: 'df.describe()', comment: '# Estatísticas descritivas' },
        { command: 'df.shape', comment: '# Ver dimensões (linhas, colunas)' },
      ],
      'Seleção de Dados': [
        { command: "df['coluna']", comment: '# Selecionar coluna específica' },
        {
          command: "df[['col1', 'col2']]",
          comment: '# Selecionar múltiplas colunas',
        },
        { command: 'df.iloc[0]', comment: '# Selecionar por índice numérico' },
        { command: 'df.loc[0]', comment: '# Selecionar por label' },
      ],
    },
    useCase: 'Use quando: Análise exploratória de dados, manipulação básica',
  },

  // Comandos Básico - NumPy e Arrays
  numpyArrays: {
    title: '🟢 NumPy e Arrays',
    level: 'basico',
    sections: {
      'Criação de Arrays': [
        {
          command: 'import numpy as np',
          comment: '# Importar biblioteca NumPy',
        },
        {
          command: 'arr = np.array([1, 2, 3, 4, 5])',
          comment: '# Criar array NumPy',
        },
        { command: 'np.zeros((3, 4))', comment: '# Criar array de zeros 3x4' },
        { command: 'np.ones((2, 3))', comment: '# Criar array de uns 2x3' },
        { command: 'np.random.rand(3, 3)', comment: '# Array aleatório 3x3' },
      ],
      'Arrays Sequenciais': [
        {
          command: 'np.arange(0, 10, 2)',
          comment: '# Array com range [0, 2, 4, 6, 8]',
        },
        { command: 'np.linspace(0, 1, 5)', comment: '# 5 valores entre 0 e 1' },
        { command: 'np.eye(3)', comment: '# Matriz identidade 3x3' },
        { command: 'arr.shape', comment: '# Ver dimensões do array' },
      ],
      'Operações Básicas': [
        { command: 'arr + 5', comment: '# Adicionar escalar' },
        { command: 'arr * 2', comment: '# Multiplicar por escalar' },
        { command: 'arr1 + arr2', comment: '# Soma de arrays' },
        { command: 'np.sqrt(arr)', comment: '# Raiz quadrada' },
      ],
    },
    useCase: 'Use quando: Cálculos numéricos, operações matriciais',
  },

  // Comandos Básico - Matplotlib e Visualização
  matplotlibVisualizacao: {
    title: '🟢 Matplotlib e Visualização',
    level: 'basico',
    sections: {
      'Importação e Configuração': [
        {
          command: 'import matplotlib.pyplot as plt',
          comment: '# Importar biblioteca',
        },
        { command: "plt.style.use('seaborn')", comment: '# Definir estilo' },
        {
          command: 'plt.figure(figsize=(10, 6))',
          comment: '# Definir tamanho da figura',
        },
      ],
      'Gráficos Básicos': [
        { command: 'plt.plot(x, y)', comment: '# Gráfico de linhas' },
        { command: 'plt.scatter(x, y)', comment: '# Gráfico de dispersão' },
        {
          command: 'plt.bar(categories, values)',
          comment: '# Gráfico de barras',
        },
        { command: 'plt.hist(data, bins=10)', comment: '# Histograma' },
      ],
      Personalização: [
        { command: "plt.xlabel('Eixo X')", comment: '# Rótulo eixo X' },
        { command: "plt.ylabel('Eixo Y')", comment: '# Rótulo eixo Y' },
        { command: "plt.title('Título')", comment: '# Título do gráfico' },
        { command: "plt.legend(['Série 1'])", comment: '# Adicionar legenda' },
        { command: 'plt.show()', comment: '# Exibir gráfico' },
      ],
    },
    useCase: 'Use quando: Visualização de dados, exploração visual',
  },

  // Comandos Intermediário - Pandas Avançado
  pandasAvancado: {
    title: '🟡 Pandas Avançado',
    level: 'intermediario',
    id: 'intermediario',
    sections: {
      'Filtragem e Seleção': [
        {
          command: 'df.loc[condicao]',
          comment: '# Filtrar linhas por condição',
        },
        { command: "df[df['col'] > 10]", comment: '# Filtrar por valor' },
        { command: "df.query('col > 10')", comment: '# Filtrar com query' },
        { command: 'df.isnull().sum()', comment: '# Contar valores nulos' },
      ],
      Agrupamento: [
        {
          command: "df.groupby('coluna').mean()",
          comment: '# Agrupar e calcular média',
        },
        {
          command: "df.groupby('col').agg(['mean', 'sum', 'count'])",
          comment: '# Múltiplas agregações',
        },
        {
          command:
            "df.pivot_table(values='valor', index='linha', columns='coluna')",
          comment: '# Tabela dinâmica',
        },
      ],
      'Junção e Combinação': [
        {
          command: "df.merge(df2, on='chave')",
          comment: '# Mesclar DataFrames',
        },
        {
          command: 'pd.concat([df1, df2])',
          comment: '# Concatenar DataFrames',
        },
        { command: "df.join(df2, on='chave')", comment: '# Join por índice' },
      ],
    },
    useCase: 'Use quando: Análise complexa, transformação de dados',
  },

  // Comandos Intermediário - Seaborn e Visualização Avançada
  seabornVisualizacao: {
    title: '🟡 Seaborn e Visualização Avançada',
    level: 'intermediario',
    sections: {
      'Configuração e Estilo': [
        { command: 'import seaborn as sns', comment: '# Importar biblioteca' },
        { command: "sns.set_style('whitegrid')", comment: '# Definir estilo' },
        {
          command: "sns.set_palette('husl')",
          comment: '# Definir paleta de cores',
        },
      ],
      'Gráficos Estatísticos': [
        {
          command: "sns.scatterplot(data=df, x='col1', y='col2')",
          comment: '# Dispersão com Seaborn',
        },
        {
          command: "sns.boxplot(data=df, x='categoria', y='valor')",
          comment: '# Boxplot',
        },
        {
          command: "sns.violinplot(data=df, x='categoria', y='valor')",
          comment: '# Gráfico de violino',
        },
        {
          command: "sns.countplot(data=df, x='categoria')",
          comment: '# Gráfico de contagem',
        },
      ],
      'Mapas e Matrizes': [
        {
          command: 'sns.heatmap(correlation_matrix)',
          comment: '# Mapa de calor',
        },
        { command: 'sns.pairplot(df)', comment: '# Gráfico de pares' },
        {
          command: "sns.lmplot(data=df, x='x', y='y')",
          comment: '# Regressão linear',
        },
      ],
    },
    useCase:
      'Use quando: Visualização estatística, análise exploratória avançada',
  },

  // Comandos Intermediário - Data Cleaning e Preprocessing
  dataCleaning: {
    title: '🟡 Data Cleaning e Preprocessing',
    level: 'intermediario',
    sections: {
      'Tratamento de Nulos': [
        { command: 'df.isnull().sum()', comment: '# Contar valores nulos' },
        { command: 'df.dropna()', comment: '# Remover linhas com nulos' },
        { command: 'df.fillna(0)', comment: '# Preencher nulos com zero' },
        { command: 'df.fillna(df.mean())', comment: '# Preencher com média' },
      ],
      'Duplicados e Tipos': [
        { command: 'df.duplicated().sum()', comment: '# Contar duplicados' },
        { command: 'df.drop_duplicates()', comment: '# Remover duplicados' },
        { command: "df['coluna'].astype('int')", comment: '# Converter tipo' },
        { command: "pd.get_dummies(df['col'])", comment: '# One-hot encoding' },
      ],
      'Limpeza de Texto': [
        {
          command: "df['col'].str.lower()",
          comment: '# Converter para minúsculas',
        },
        { command: "df['col'].str.strip()", comment: '# Remover espaços' },
        {
          command: "df['col'].str.replace('old', 'new')",
          comment: '# Substituir texto',
        },
      ],
    },
    useCase: 'Use quando: Preparação de dados, limpeza de dataset',
  },

  // Comandos Avançado - Scikit-learn e Machine Learning
  scikitLearn: {
    title: '🔴 Scikit-learn e Machine Learning',
    level: 'avancado',
    id: 'avancado',
    sections: {
      'Preparação de Dados': [
        {
          command: 'from sklearn.model_selection import train_test_split',
          comment: '# Importar split',
        },
        {
          command:
            'X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)',
          comment: '# Dividir treino/teste',
        },
        {
          command: 'from sklearn.preprocessing import StandardScaler',
          comment: '# Importar normalização',
        },
        { command: 'scaler = StandardScaler()', comment: '# Criar scaler' },
        {
          command: 'X_scaled = scaler.fit_transform(X)',
          comment: '# Normalizar dados',
        },
      ],
      'Modelos de Regressão': [
        {
          command: 'from sklearn.linear_model import LinearRegression',
          comment: '# Importar regressão',
        },
        { command: 'model = LinearRegression()', comment: '# Criar modelo' },
        { command: 'model.fit(X_train, y_train)', comment: '# Treinar modelo' },
        {
          command: 'predictions = model.predict(X_test)',
          comment: '# Fazer previsões',
        },
      ],
      'Modelos de Classificação': [
        {
          command: 'from sklearn.ensemble import RandomForestClassifier',
          comment: '# Importar Random Forest',
        },
        { command: 'from sklearn.svm import SVC', comment: '# Importar SVM' },
        {
          command: 'model.fit(X_train, y_train)',
          comment: '# Treinar classificador',
        },
      ],
      'Métricas e Validação': [
        {
          command:
            'from sklearn.metrics import accuracy_score, mean_squared_error',
          comment: '# Importar métricas',
        },
        {
          command: 'accuracy = accuracy_score(y_test, predictions)',
          comment: '# Calcular acurácia',
        },
        {
          command: 'mse = mean_squared_error(y_test, predictions)',
          comment: '# Calcular MSE',
        },
        {
          command: 'from sklearn.model_selection import cross_val_score',
          comment: '# Importar validação cruzada',
        },
      ],
    },
    useCase: 'Use quando: Machine learning, modelagem preditiva',
  },

  // Comandos Avançado - Análise Estatística e Séries Temporais
  analiseEstatistica: {
    title: '🔴 Análise Estatística e Séries Temporais',
    level: 'avancado',
    sections: {
      'Estatística Descritiva': [
        { command: "df['col'].mean()", comment: '# Calcular média' },
        { command: "df['col'].median()", comment: '# Calcular mediana' },
        { command: "df['col'].std()", comment: '# Calcular desvio padrão' },
        { command: "df['col'].skew()", comment: '# Calcular assimetria' },
        { command: "df['col'].kurt()", comment: '# Calcular curtose' },
      ],
      'Correlação e Covariância': [
        { command: 'df.corr()', comment: '# Matriz de correlação' },
        { command: 'df.cov()', comment: '# Matriz de covariância' },
        {
          command: "df.corr()['col'].sort_values(ascending=False)",
          comment: '# Correlação com coluna',
        },
      ],
      'Séries Temporais': [
        {
          command: "df['data'] = pd.to_datetime(df['data'])",
          comment: '# Converter para datetime',
        },
        {
          command: "df.set_index('data', inplace=True)",
          comment: '# Definir como índice',
        },
        { command: "df.resample('M').mean()", comment: '# Resample mensal' },
        {
          command: 'df.rolling(window=7).mean()',
          comment: '# Média móvel 7 dias',
        },
        { command: 'df.diff()', comment: '# Diferenças consecutivas' },
        { command: 'df.pct_change()', comment: '# Variação percentual' },
      ],
    },
    useCase: 'Use quando: Análise estatística avançada, séries temporais',
  },
};
