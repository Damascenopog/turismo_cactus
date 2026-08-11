# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comportamento em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

---

## [2026-08-10] - Setup Inicial, Componentes Core e Imersão Impeccable

### 1. Suporte a 4 Idiomas (i18n) e Correção de Título Dinâmico
- **O que foi feito:**
  - Criada a infraestrutura de i18n com `LanguageContext.tsx` e arquivos de tradução em JSON (`pt.json`, `en.json`, `es.json`, `de.json`).
  - Atualizada a `HeroSection.tsx` para separar o título principal nas chaves `hero.titlePrefix` e `hero.titleHighlight`.
- **Como funciona:**
  - O usuário seleciona o idioma no Navbar (`PT`, `EN`, `ES`, `DE`). O estado é salvo no `localStorage` e reflete instantaneamente em toda a página (textos principais, badges, estatísticas, botões e mensagens do WhatsApp).
- **Modificação de Comportamento:**
  - *Antes:* O título da Hero Section possuía texto estático em português ("Descubra a Rocinha com Quem Vive Aqui").
  - *Depois:* O título agora é 100% dinâmico e traduzível para os 4 idiomas.

### 2. Tema Claro e Escuro (Dark/Light Mode) com Token "Azul Rio"
- **O que foi feito:**
  - Configurado `next-themes` e registradas as variáveis CSS no `globals.css`.
  - Adicionada a cor de destaque **Azul Rio / Ocean Blue** (`#1E40AF` / `#2563EB` no Tema Claro; `#3B82F6` no Tema Escuro).
- **Como funciona:**
  - Alternância manual pelo ícone de Sol/Lua no Navbar ou sincronização automática com as preferências do sistema operacional.
- **Modificação de Comportamento:**
  - *Antes:* O tema claro utilizava apenas preto/cinza e amarelo.
  - *Depois:* O tema claro agora inclui a cor Azul Rio em badges de localização, no texto em destaque do título, no card do Mirante do Laboriaux (representando a vista 360° do oceano), nos pins do mapa e nos destaques do FAQ.

### 3. Integração com WhatsApp Dinâmico
- **O que foi feito:**
  - Criado o utilitário `src/lib/whatsapp.ts` e o componente flutuante `WhatsAppButton.tsx`.
- **Como funciona:**
  - Ao clicar no botão flutuante ou nos botões de CTA, uma conversa do WhatsApp é aberta com mensagem pré-preenchida no idioma ativo do usuário.

### 4. Análise e Auditoria de Design (Skill Impeccable)
- **O que foi feito:**
  - Instalada a skill Impeccable em `.agents/skills/impeccable`.
  - Executada auditoria de anti-patterns com o script `detect.mjs`.
- **Modificação de Comportamento:**
  - *Antes:* O título da Hero utilizava um gradiente de texto (`bg-clip-text text-transparent`).
  - *Depois:* O gradiente foi removido conforme a regra de anti-patterns do Impeccable, substituído pela cor sólida **Azul Rio** para maior contraste e autoridade visual.
