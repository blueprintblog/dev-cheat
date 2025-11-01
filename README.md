# 🚀 Dev Cheat - Cheatsheet Interativa para Desenvolvedores

Uma cheatsheet moderna e interativa construída com Next.js, React e Tailwind CSS, featuring design neon e experiência mobile-first.

## ✨ Funcionalidades

### 🎯 **Filtros Inteligentes**

- **Filtro por Nível**: Básico, Intermediário, Avançado
- **Busca em Tempo Real**: Encontre comandos instantaneamente
- **Combinação de Filtros**: Busca + filtro por nível simultâneos
- **Estatísticas Dinâmicas**: Contagem de comandos por categoria

### 📱 **Design Mobile-First**

- **Layout Responsivo**: 1 coluna (mobile) → 4 colunas (desktop)
- **Touch Optimized**: Áreas de toque mínimas de 44px
- **Menu Hambúrguer**: Filtros compactados em dispositivos móveis
- **Performance**: Lazy loading para conexões móveis

### 🎨 **Experiência Visual**

- **Design Neon**: Estética cyberpunk com gradientes vibrantes
- **Animações Suaves**: Transições CSS3 e micro-interações
- **Feedback Visual**: Estados hover, loading e sucesso
- **Ícones Consistentes**: React Icons em toda interface

### 📋 **Tecnologias Suportadas**

- **🐚 Bash**: Comandos Unix/Linux
- **🐳 Docker**: Containers e imagens
- **📜 JavaScript**: ES6+, Node.js
- **🐍 Python**: Scripts e automação
- **⚡ PowerShell**: Windows e Azure
- **🐧 Linux**: Sistema e administração

## 🛠️ **Arquitetura**

### **Componentes Universais**

```
components/universal/
├── CommandCard.js      # Card de comando com cópia
├── LevelFilter.js       # Filtro por nível
├── SearchBar.js        # Barra de busca
├── ResponsiveGrid.js   # Grid responsivo
├── Toast.js           # Notificações
└── index.js           # Exportações
```

### **Hooks Personalizados**

```
hooks/
├── useLevelFilter.js   # Gerenciamento de filtros
└── useSearch.js        # Busca com debounce
```

### **Estrutura de Dados**

```javascript
{
  categoriaKey: {
    title: "🟢 Título da Categoria",
    level: "basico|intermediario|avancado",
    useCase: "Use quando: descrição",
    sections: {
      "Nome da Seção": [
        {
          command: "comando exemplo",
          comment: "# descrição do comando"
        }
      ]
    },
    warning: "⚠️ Aviso opcional",
    tip: "💡 Dica opcional"
  }
}
```

## 🚀 **Getting Started**

### **Pré-requisitos**

- Node.js 18+
- npm ou yarn
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### **Instalação**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dev-cheat.git

# Entre na pasta
cd dev-cheat

# Instale dependências
npm install

# Ou com yarn
yarn install
```

### **Desenvolvimento**

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:3000
open http://localhost:3000
```

## 📁 **Estrutura do Projeto**

```
dev-cheat/
├── app/                    # Páginas Next.js
│   ├── bash/            # Cheatsheet Bash
│   ├── docker/           # Cheatsheet Docker
│   ├── javascript/        # Cheatsheet JavaScript
│   ├── globals.css        # Estilos globais
│   ├── layout.js          # Layout principal
│   └── page.js           # Home
├── components/             # Componentes React
│   ├── universal/         # Componentes reutilizáveis
│   ├── cards/           # Cards específicos
│   └── layout/           # Layout components
├── data/                  # Dados das cheatsheets
│   ├── bash-data.js      # Comandos Bash
│   ├── docker-data.js     # Comandos Docker
│   ├── javascript-data.js # Comandos JavaScript
│   └── ...              # Outras tecnologias
├── hooks/                 # Hooks personalizados
│   ├── useLevelFilter.js  # Hook de filtros
│   └── useSearch.js       # Hook de busca
├── public/                # Assets estáticos
└── lib/                   # Utilitários
```

## 🎨 **Guia de Estilos**

### **Cores Temáticas**

```css
/* Neon Green */
--neon-green: #10b981;
--neon-green-glow: rgba(16, 185, 129, 0.3);

/* Neon Blue */
--neon-blue: #3b82f6;
--neon-blue-glow: rgba(59, 130, 246, 0.3);

/* Neon Purple */
--neon-purple: #8b5cf6;
--neon-purple-glow: rgba(139, 92, 246, 0.3);
```

### **Animações**

```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide In Right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

## 🔧 **Desenvolvimento**

### **Adicionando Nova Tecnologia**

1. **Criar Arquivo de Dados**

```javascript
// data/nova-tecnologia-data.js
export const novaTecnologiaCommands = {
  categoriaBasico: {
    title: '🟢 Categoria Básica',
    level: 'basico',
    useCase: 'Use quando: iniciando',
    sections: {
      'Comandos Fundamentais': [{ command: 'comando', comment: '# descrição' }],
    },
  },
};
```

2. **Criar Página**

```javascript
// app/nova-tecnologia/page.js
import { novaTecnologiaCommands } from '@/data/nova-tecnologia-data';
import {
  CommandCard,
  LevelFilter,
  useLevelFilter,
} from '@/components/universal';

export default function PageNovaTecnologia() {
  const { activeFilter, filteredData, handleFilterChange } = useLevelFilter(
    novaTecnologiaCommands
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <LevelFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      {/* Renderizar categorias e comandos */}
    </div>
  );
}
```

### **Personalizando Componentes**

```javascript
// Modificando CommandCard
<CommandCard
  command={command}
  comment={comment}
  level="basico"
  showLevel={true}
  compact={false}
  className="custom-class"
/>
```

## 📱 **Mobile-First**

### **Breakpoints**

- **xs**: 0-639px (telefone)
- **sm**: 640-767px (telefone grande)
- **md**: 768-1023px (tablet)
- **lg**: 1024-1279px (notebook)
- **xl**: 1280px+ (desktop)

### **Otimizações**

- **Áreas de Toque**: Mínimo 44px × 44px
- **Scroll Horizontal**: Para filtros em mobile
- **Lazy Loading**: Carregamento progressivo
- **Touch Feedback**: Feedback visual ao tocar

## 🚀 **Deploy**

### **Vercel (Recomendado)**

```bash
# Build para produção
npm run build

# Deploy para Vercel
npm install -g vercel
vercel --prod
```

### **Outras Plataformas**

- **Netlify**: `netlify deploy --prod --dir=.next`
- **Railway**: `railway up`
- **Digital Ocean**: `npx @digitalocean/appkit deploy`

## 🧪 **Testes**

### **Testes Manuais**

1. **Testar Responsividade**: Chrome DevTools → Device Mode
2. **Testar Touch**: Em dispositivos móveis reais
3. **Testar Performance**: Lighthouse → Performance
4. **Testar Acessibilidade**: axe DevTools

### **Testes Automáticos**

```bash
# Rodar testes
npm test

# Testar acessibilidade
npm run test:a11y

# Testar performance
npm run test:perf
```

## 📊 **Performance**

### **Métricas Alvo**

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

### **Otimizações**

- **Code Splitting**: Lazy loading por rota
- **Image Optimization**: WebP + lazy loading
- **Bundle Analysis**: webpack-bundle-analyzer
- **Cache Strategy**: SWR + localStorage

## 🔐 **Segurança**

### **Boas Práticas**

- **Validação de Input**: Sanitização de busca
- **XSS Prevention**: React já protege
- **HTTPS Only**: Em produção
- **CSP Headers**: Content Security Policy

## 🤝 **Contribuição**

### **Como Contribuir**

1. **Fork** o repositório
2. **Criar Branch**: `git checkout -b feature/nova-funcionalidade`
3. **Commit**: `git commit -m "Add: nova funcionalidade"`
4. **Push**: `git push origin feature/nova-funcionalidade`
5. **Pull Request**: Abrir PR no GitHub

### **Padrões de Código**

- **Convenções**: ESLint + Prettier
- **Commits**: Conventional Commits
- **Branches**: Git Flow
- **Reviews**: Code review obrigatória

## 📄 **Licença**

MIT License - Livre para uso comercial e pessoal

## 🙏 **Créditos**

- **Next.js**: Framework React full-stack
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Biblioteca de ícones
- **Fira Code**: Fonte monoespaçada
- **Nunito Sans**: Fonte legível

---

**🚀 Desenvolvido com ❤️ para a comunidade de desenvolvedores**

**📧 Contribuições são bem-vindas!**

**📧 Issues e sugestões: [GitHub Issues](https://github.com/seu-usuario/dev-cheat/issues)**
