# 📋 Backlog – Jogo Rápido

Este documento lista todas as tarefas planejadas para o MVP do app **Jogo Rápido**, organizado por épicos, com títulos, descrições e critérios de aceite.

---

## 🟢 Épico A – Fundamentos

### A1. Setup do projeto Expo + TypeScript + lint/prettier/husky

Configurar ambiente inicial de qualidade: ESLint, Prettier, Husky (pre-commit com lint-staged).  
**Critérios de Aceite:**

- `npm run lint` e `npm run format` funcionam.
- Commits bloqueados se lint falhar.
- Projeto abre sem warnings críticos no Expo.

---

### A2. Estado global e persistência (Zustand + AsyncStorage)

Criar store global com Zustand + persistência em AsyncStorage.  
**Critérios de Aceite:**

- Store `useSessionStore` com `winsByTeamColor`, `matchesPlayed`, `resetSession`.
- Dados persistem entre reinícios do app.

---

## ⚽ Épico B – Configuração e Sorteio

### B1. Tela de Setup: número de jogadores e times

Criar tela inicial onde usuário define quantidade de jogadores e times.  
**Critérios de Aceite:**

- Inputs numéricos com validação (mínimo 2 jogadores, mínimo 2 times).
- Botão “Continuar” só habilita se valores forem válidos.

---

### B2. Sorteio por toque anônimo

Implementar lógica onde cada jogador pressiona a tela e recebe a cor/time atribuído.  
**Critérios de Aceite:**

- Sorteio por toques únicos, sem duplicação além da capacidade.
- Feedback visual (animação simples) ao sortear.
- Bloqueio de múltiplos toques simultâneos.

---

## 📋 Épico C – Ordem de Jogos

### C1. Geração da ordem dos times

Definir lógica para gerar sequência de jogos conforme modo escolhido (pontos corridos ou mata-mata).  
**Critérios de Aceite:**

- Algoritmo gera fila correta de confrontos.

---

### C2. Tela “Fila de Jogos”

Exibir visualmente os confrontos na ordem gerada.  
**Critérios de Aceite:**

- Lista de confrontos clara.
- Botão “Iniciar partida” inicia confronto do topo da lista.

---

## ⏱️ Épico D – Partida (Landscape)

### D1. Forçar orientação horizontal na tela de partida

**Critérios de Aceite:**

- Todas as telas em retrato, apenas tela de partida em landscape.

---

### D2. Cronômetro regressivo (10/15/20 + custom)

**Critérios de Aceite:**

- Start/Pause/Reset.
- Edição manual de tempo.
- Persistir tempo atual ao pausar.

---

### D3. Beep sonoro ao fim do tempo

**Critérios de Aceite:**

- Emitir beep quando cronômetro chegar a 0.

---

### D4. Placar e Faltas (botões +/-)

**Critérios de Aceite:**

- Botões “+” e “−” por time.
- Atualização imediata.
- Nunca permitir valores negativos.

---

### D5. Ações: Encerrar jogo / Zerar tempo

**Critérios de Aceite:**

- Botão “Encerrar jogo” abre modal de confirmação.
- Botão “Zerar tempo” reseta cronômetro para valor inicial.

---

## 🏆 Épico E – Encerramento e Ranking

### E1. Modal de confirmação do vencedor e placar

**Critérios de Aceite:**

- Modal pede seleção do time vencedor.
- Usuário confirma placar final antes de salvar.

---

### E2. Tela “Estatísticas da Sessão”

**Critérios de Aceite:**

- Mostrar vitórias por cor e total de jogos.
- Botão “Reset sessão” limpa dados locais.

---

### E3. Reset de sessão

**Critérios de Aceite:**

- Limpar todas as estatísticas salvas no AsyncStorage.
- Usuário deve confirmar antes.

---

## 🎨 Épico F – Polimento (P1)

### F1. Tema inicial voltado ao futebol (cores fixas + tokens)

**Critérios de Aceite:**

- Paleta de cores pré-definidas para os times.

---

### F2. Seleção de cores entre opções pré-definidas

**Critérios de Aceite:**

- Usuário pode escolher entre cores padrão para times.

---

### F3. Acessibilidade mínima (labels, foco, área de toque)

**Critérios de Aceite:**

- Labels em botões.
- Áreas de toque maiores para acessibilidade.

---

### F4. Testes básicos (sorteio → partida → ranking)

**Critérios de Aceite:**

- Testar fluxo principal ponta-a-ponta.
- Garantir que sorteio → fila → partida → ranking funciona sem travar.

---

# 🔖 Labels recomendados

- **Prioridade:** P0, P1
- **Tipo:** type:feature, type:chore, type:test
- **Área:** area:setup, area:sorteio, area:fila, area:partida, area:ranking, area:polimento
