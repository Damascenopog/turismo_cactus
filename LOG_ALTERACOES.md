# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comportamento em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

---

## [2026-08-10] - Adição do Conjunto de Skills (antigravity-skills)

### 1. Instalação das Skills do Antigravity Vault (rmyndharis/antigravity-skills)
- **O que foi feito:**
  - Clonado e instalado o repositório [`rmyndharis/antigravity-skills`](https://github.com/rmyndharis/antigravity-skills.git) contendo mais de 300 skills especializadas para o agente Antigravity no diretório `.agents/skills/`.
- **Como funciona e Formas de Ativação:**
  1. **Ativação Automática por Contexto (Progressive Disclosure):**
     - O Antigravity lê o nome e a descrição de todas as skills instaladas em `.agents/skills/` no início de cada sessão.
     - Quando o seu prompt em linguagem natural corresponde ao propósito de uma skill (ex: *"Revise a segurança do backend"*, *"Otimize o bundle do Next.js"*, *"Escreva um pipeline CI/CD"*), o agente ativa a skill correspondente automaticamente.
  2. **Ativação Explícita no Chat:**
     - Você pode solicitar diretamente na conversa:
       `Use a skill <nome-da-skill> para <tarefa>`
       - *Exemplo:* `"Use a skill nextjs-app-router-patterns para refatorar esta rota"`
       - *Exemplo:* `"Use a skill security-auditor para analisar vulnerabilidades"`
  3. **Gerenciamento via CLI (npx):**
     - Você pode pesquisar, listar ou instalar novas skills individualmente pelo terminal:
       - Pesquisar: `npx @rmyndharis/antigravity-skills search <termo>`
       - Listar: `npx @rmyndharis/antigravity-skills list`
       - Instalar: `npx @rmyndharis/antigravity-skills install <skill-name>`

---

## [2026-08-10] - Setup Inicial, Componentes Core e Imersão Impeccable

### 1. Suporte a 4 Idiomas (i18n) e Correção de Título Dinâmico
- **O que foi feito:**
  - Criada a infraestrutura de i18n com `LanguageContext.tsx` e arquivos de tradução em JSON (`pt.json`, `en.json`, `es.json`, `de.json`).
  - Atualizada a `HeroSection.tsx` para separar o título principal nas chaves `hero.titlePrefix` e `hero.titleHighlight`.
- **Como funciona:**
  - O usuário seleciona o idioma no Navbar (`PT`, `EN`, `ES`, `DE`). O estado é salvo no `localStorage` e reflete instantaneamente em toda a página.

### 2. Tema Claro e Escuro (Dark/Light Mode) com Token "Azul Rio"
- **O que foi feito:**
  - Configurado `next-themes` e registradas as variáveis CSS no `globals.css`.
  - Adicionada a cor de destaque **Azul Rio / Ocean Blue** (`#1E40AF` / `#2563EB` no Tema Claro; `#3B82F6` no Tema Escuro).

### 3. Integração com WhatsApp Dinâmico
- **O que foi feito:**
  - Criado o utilitário `src/lib/whatsapp.ts` e o componente flutuante `WhatsAppButton.tsx`.

### 4. Análise e Auditoria de Design (Skill Impeccable)
- **O que foi feito:**
  - Instalada a skill Impeccable em `.agents/skills/impeccable`.
  - Executada auditoria de anti-patterns com o script `detect.mjs`.
