// Objeto com todos os comandos da cheatsheet Git
export const gitCommands = {
  // Card Status e Histórico
  statusHistorico: {
    title: '📊 Status e Histórico',
    level: 'basico',
    id: 'status-historico',
    sections: {
      Status: [
        { command: 'git status -s', comment: '# Status curto' },
        { command: 'git status --porcelain', comment: '# Status para scripts' },
        { command: 'git status --ignored', comment: '# Incluir ignorados' },
        { command: 'git status --branch', comment: '# Info da branch' },
        { command: 'git status --show-stash', comment: '# Mostra stashes' },
      ],
      'Histórico Avançado': [
        {
          command: 'git log --oneline --graph --all --decorate',
          comment: '# Visualização completa',
        },
        { command: 'git log --stat', comment: '# Com estatísticas' },
        { command: 'git log --patch', comment: '# Com diff completo' },
        { command: 'git log --since="2 weeks ago"', comment: '# Por período' },
        { command: 'git log --author="nome"', comment: '# Por autor' },
        { command: 'git log --grep="fix"', comment: '# Por mensagem' },
        { command: 'git log -S "função"', comment: '# Por código' },
        {
          command: 'git log --follow arquivo.txt',
          comment: '# Seguir renomeações',
        },
        {
          command:
            "git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'",
          comment: '# Log colorido',
        },
        {
          command: 'git log --oneline --decorate --graph',
          comment: '# Visualização compacta',
        },
        {
          command: 'git log --reverse',
          comment: '# Ordem cronológica inversa',
        },
      ],
      'Visualizar Mudanças': [
        { command: 'git show HEAD', comment: '# Último commit' },
        { command: 'git show HEAD~2', comment: '# 2 commits atrás' },
        { command: 'git show --name-only HEAD', comment: '# Apenas nomes' },
        { command: 'git show --stat HEAD', comment: '# Com estatísticas' },
      ],
    },
    useCase:
      'Use quando: Precisa verificar estado do repositório, histórico de mudanças ou commits específicos',
  },

  // Card Branches
  branches: {
    title: '🌿 Branches Avançadas',
    level: 'basico',
    id: 'branches',
    sections: {
      'Criar e Trocar': [
        {
          command: 'git checkout -b feature/nova-funcionalidade',
          comment: '# Criar e trocar',
        },
        {
          command: 'git switch -c feature/nova-funcionalidade',
          comment: '# Comando moderno',
        },
      ],
      'Listar Branches': [
        { command: 'git branch -a', comment: '# Todas (local + remote)' },
        { command: 'git branch -r', comment: '# Apenas remotas' },
        { command: 'git branch -v', comment: '# Com último commit' },
        { command: 'git branch --merged', comment: '# Já mergeadas' },
        { command: 'git branch --no-merged', comment: '# Não mergeadas' },
      ],
      'Deletar Branches': [
        { command: 'git branch -d feature-branch', comment: '# Delete seguro' },
        { command: 'git branch -D feature-branch', comment: '# Force delete' },
        {
          command: 'git push origin --delete feature-branch',
          comment: '# Delete remota',
        },
      ],
      'Renomear Branch': [
        {
          command: 'git branch -m old-name new-name',
          comment: '# Renomear atual',
        },
        {
          command: 'git branch -M old-name new-name',
          comment: '# Force rename',
        },
        {
          command: 'git branch --show-current',
          comment: '# Mostra branch atual',
        },
        {
          command: 'git branch --contains abc123',
          comment: '# Branches com commit',
        },
        {
          command: 'git branch --sort=-committerdate',
          comment: '# Ordena por data',
        },
      ],
    },
    useCase:
      'Use quando: Trabalhando com múltiplos recursos, correções ou ambientes',
  },

  // Card Merge e Rebase
  mergeRebase: {
    title: '🔄 Merge e Rebase',
    level: 'intermediario',
    id: 'merge-rebase',
    sections: {
      'Merge Strategies': [
        { command: 'git merge feature-branch', comment: '# Merge normal' },
        {
          command: 'git merge --no-ff feature-branch',
          comment: '# Sempre criar merge commit',
        },
        {
          command: 'git merge --squash feature-branch',
          comment: '# Squash commits',
        },
      ],
      'Rebase Interativo': [
        { command: 'git rebase -i HEAD~3', comment: '# Últimos 3 commits' },
        { command: 'git rebase -i main', comment: '# Desde main' },
        {
          command: 'git rebase --continue',
          comment: '# Continuar após conflitos',
        },
        { command: 'git rebase --abort', comment: '# Cancelar rebase' },
      ],
      'Cherry-pick': [
        {
          command: 'git cherry-pick abc123',
          comment: '# Aplicar commit específico',
        },
        {
          command: 'git cherry-pick abc123..def456',
          comment: '# Range de commits',
        },
        {
          command: 'git cherry-pick --no-commit abc123',
          comment: '# Sem criar commit',
        },
        { command: 'git cherry-pick -x abc123', comment: '# Adiciona crédito' },
        {
          command: 'git cherry-pick --signoff abc123',
          comment: '# Adiciona sign-off',
        },
        {
          command: 'git cherry-pick --abort',
          comment: '# Cancela cherry-pick',
        },
      ],
    },
    useCase:
      'Use quando: Integrando mudanças, reorganizando histórico ou aplicando commits específicos',
  },

  // Card Busca e Investigação
  buscaInvestigacao: {
    title: '🔍 Busca e Investigação',
    level: 'intermediario',
    id: 'busca-investigacao',
    sections: {
      'Buscar no Código': [
        { command: 'git grep "função"', comment: '# No working tree' },
        {
          command: 'git grep "função" HEAD~5',
          comment: '# Em commit específico',
        },
        { command: 'git grep -n "função"', comment: '# Com números de linha' },
        { command: 'git grep -i "função"', comment: '# Case insensitive' },
      ],
      'Blame e Histórico': [
        {
          command: 'git blame arquivo.txt',
          comment: '# Quem modificou cada linha',
        },
        {
          command: 'git blame -L 10,20 arquivo.txt',
          comment: '# Linhas específicas',
        },
        {
          command: 'git log -p arquivo.txt',
          comment: '# Histórico com patches',
        },
        {
          command: 'git log --follow arquivo.txt',
          comment: '# Seguir renomeações',
        },
      ],
      'Bisect para Bugs': [
        { command: 'git bisect start', comment: '# Iniciar bisect' },
        { command: 'git bisect bad HEAD', comment: '# Commit atual tem bug' },
        {
          command: 'git bisect good v1.0.0',
          comment: '# Versão boa conhecida',
        },
        {
          command: 'git bisect run npm test',
          comment: '# Automatizar com testes',
        },
        { command: 'git bisect reset', comment: '# Finalizar bisect' },
        { command: 'git bisect visualize', comment: '# Visualiza grafo' },
        { command: 'git bisect log', comment: '# Mostra log bisect' },
        {
          command: 'git bisect replay arquivo.log',
          comment: '# Repete bisect',
        },
      ],
    },
    useCase: 'Use quando: Debugging, investigando bugs ou rastreando mudanças',
  },

  // Card Tags e Releases
  tagsReleases: {
    title: '🏷️ Tags e Releases',
    level: 'intermediario',
    id: 'tags-releases',
    sections: {
      'Criar Tags': [
        { command: 'git tag v1.0.0', comment: '# Tag simples' },
        {
          command: 'git tag -a v1.0.0 -m "Release 1.0.0"',
          comment: '# Tag anotada',
        },
        {
          command: 'git tag -a v1.0.0 abc123 -m "Tag commit específico"',
          comment: '# Em commit específico',
        },
      ],
      'Listar e Gerenciar': [
        { command: 'git tag', comment: '# Listar todas' },
        { command: 'git tag -l "v1.*"', comment: '# Filtrar tags' },
        { command: 'git show v1.0.0', comment: '# Ver detalhes' },
        { command: 'git tag -d v1.0.0', comment: '# Deletar tag local' },
        {
          command: 'git push origin --delete v1.0.0',
          comment: '# Deletar tag remota',
        },
      ],
      'Push Tags': [
        { command: 'git push origin v1.0.0', comment: '# Tag específica' },
        { command: 'git push origin --tags', comment: '# Todas as tags' },
        { command: 'git tag -v v1.0.0', comment: '# Verifica assinatura' },
        {
          command: 'git tag -s v1.0.0 -m "Release"',
          comment: '# Tag assinada',
        },
        { command: 'git tag -f v1.0.0', comment: '# Força tag' },
      ],
    },
    useCase:
      'Use quando: Marcando versões, releases ou pontos importantes no projeto',
  },

  // Card Stash
  stash: {
    title: '📦 Stash Avançado',
    level: 'intermediario',
    id: 'stash',
    sections: {
      'Stash Básico': [
        { command: 'git stash', comment: '# Stash mudanças' },
        {
          command: 'git stash push -m "WIP: feature X"',
          comment: '# Com mensagem',
        },
        {
          command: 'git stash push -- arquivo.txt',
          comment: '# Arquivo específico',
        },
        {
          command: 'git stash push --include-untracked',
          comment: '# Incluir não rastreados',
        },
      ],
      'Gerenciar Stashes': [
        { command: 'git stash list', comment: '# Listar stashes' },
        { command: 'git stash show stash@{0}', comment: '# Ver mudanças' },
        {
          command: 'git stash show -p stash@{0}',
          comment: '# Ver patch completo',
        },
        {
          command: 'git stash apply stash@{0}',
          comment: '# Aplicar sem remover',
        },
        { command: 'git stash pop stash@{0}', comment: '# Aplicar e remover' },
        { command: 'git stash drop stash@{0}', comment: '# Remover stash' },
        { command: 'git stash clear', comment: '# Limpar todos' },
      ],
      'Stash Avançado': [
        {
          command: 'git stash branch nova-branch stash@{0}',
          comment: '# Criar branch do stash',
        },
        { command: 'git stash clear', comment: '# Limpa todos stashes' },
        {
          command: 'git stash save "WIP: feature"',
          comment: '# Stash com mensagem',
        },
        { command: 'git stash --keep-index', comment: '# Stash só não staged' },
      ],
    },
    useCase:
      'Use quando: Precisa mudar de branch rapidamente sem commitar mudanças',
  },

  // Card Reset e Restore
  resetRestore: {
    title: '↩️ Reset e Restore',
    level: 'avancado',
    id: 'reset-restore',
    sections: {
      'Reset (cuidado!)': [
        {
          command: 'git reset --soft HEAD~1',
          comment: '# Desfaz commit, mantém staged',
        },
        {
          command: 'git reset --mixed HEAD~1',
          comment: '# Desfaz commit e staging',
        },
        {
          command: 'git reset --hard HEAD~1',
          comment: '# APAGA TUDO! Cuidado!',
        },
      ],
      'Restore (comando moderno)': [
        {
          command: 'git restore arquivo.txt',
          comment: '# Restaurar working tree',
        },
        {
          command: 'git restore --staged arquivo.txt',
          comment: '# Unstage arquivo',
        },
        {
          command: 'git restore --source=HEAD~1 arquivo.txt',
          comment: '# Restaurar de commit específico',
        },
      ],
      'Reflog (histórico de referências)': [
        { command: 'git reflog', comment: '# Ver histórico de HEAD' },
        { command: 'git reflog show main', comment: '# Histórico de branch' },
        {
          command: 'git reset --hard HEAD@{2}',
          comment: '# Voltar usando reflog',
        },
      ],
    },
    warning:
      '⚠️ ATENÇÃO: O comando git reset --hard é irreversível e perderá todas as mudanças não commitadas. Use com extrema cautela!',
    tip: '💡 DICA: O reflog é um salva-vidas! Mesmo após um reset --hard, você pode recuperar commits perdidos usando o reflog.',
    useCase:
      'Use quando: Precisa desfazer mudanças, recuperar commits ou limpar working directory',
  },

  // Card Remote e Colaboração
  remoteColaboracao: {
    title: '☁️ Remote e Colaboração',
    level: 'avancado',
    id: 'remote-colaboracao',
    sections: {
      'Gerenciar Remotes': [
        { command: 'git remote -v', comment: '# Listar remotes' },
        {
          command: 'git remote add upstream https://...',
          comment: '# Adicionar remote',
        },
        {
          command: 'git remote set-url origin https://...',
          comment: '# Alterar URL',
        },
        { command: 'git remote remove upstream', comment: '# Remover remote' },
      ],
      'Fetch e Pull Avançado': [
        { command: 'git fetch --all', comment: '# Fetch de todos os remotes' },
        { command: 'git fetch --prune', comment: '# Remove refs deletadas' },
        { command: 'git pull --rebase', comment: '# Pull com rebase' },
        { command: 'git pull --ff-only', comment: '# Apenas fast-forward' },
      ],
      'Push Avançado': [
        {
          command: 'git push -u origin feature-branch',
          comment: '# Set upstream',
        },
        {
          command: 'git push --force-with-lease',
          comment: '# Force push seguro',
        },
        {
          command: 'git push origin :feature-branch',
          comment: '# Delete remote branch',
        },
        { command: 'git push --all origin', comment: '# Push todas branches' },
        {
          command: 'git push --mirror origin',
          comment: '# Espelha repositório',
        },
        {
          command: 'git push --tags --follow-tags',
          comment: '# Push com tags',
        },
      ],
    },
    useCase:
      'Use quando: Trabalhando em equipe, sincronizando com repositórios remotos ou gerenciando contribuições',
  },
};
