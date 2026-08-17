# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comportamento em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

## [2026-08-17] - Remoção de Repetições e Ajuste de Terminologia Autêntica de Guias / Condutores

### 1. Eliminação de Redundâncias e Remoção de "Ministério do Turismo"
- **O que foi feito:**
  - Removida a menção a *"certificados pelo Ministério do Turismo"* no badge de confiança do rodapé em [`FooterSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/FooterSection.tsx), substituindo pelo termo **"Condutores Nativos"** (*"Moradores experientes que nasceram e vivem na Rocinha"*).
  - Substituídas as repetições excessivas do termo *"Guias credenciados"* ao longo de toda a interface por uma linguagem mais humana, autêntica e variada: **"Condutores Locais"**, **"Anfitriões Nativos"** e **"Moradores que nasceram e vivem na Rocinha"**.
  - Ajustadas as traduções em [`pt.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/pt.json), [`en.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/en.json), [`es.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/es.json) e [`de.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/de.json).
  - Executada auditoria de anti-patterns com o script `detect.mjs` da skill **Impeccable** (0 avisos/erros encontrados).
- **Como funciona:**
  - O texto da landing page agora soa natural, comunitário e acolhedor, evitando jargões burocráticos repetitivos e valorizando o protagonismo dos moradores locais.
- **Modificação de Comportamento:**
  - *Antes:* A expressão "Guias credenciados / certificados pelo Ministério do Turismo" aparecia repetidas vezes em múltiplos cartões, gerando redundância.
  - *Depois:* Cada seção utiliza termos naturais e complementares ("Condutores Locais", "Anfitrião Nativo", "Moradores da Rocinha").

---

## [2026-08-17] - Destaque Visual do CTA de Roteiro e Correção da Trilha SVG de Scroll

### 1. Novo Card de Alto Impacto para o Roteiro do Passeio (`BookingSection.tsx`)
- **O que foi feito:**
  - O CTA *"Quer ver o que está incluso no passeio antes de agendar?"* foi transformado em um cartão de destaque visual de alta conversão.

### 2. Correção de Sobreposição da Linha de Trajetória SVG (`FootprintTrail.tsx`)
- **O que foi feito:**
  - Ajustado o nível de camada do componente [`FootprintTrail.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/animations/FootprintTrail.tsx) para `z-0` com `pointer-events-none`.

---

## [2026-08-17] - Animação Fluida de Rolagem e Centralização de Âncoras (`SmoothScrollProvider.tsx`)

### 1. Sistema de Rolagem Suave com Centralização no Viewport
- **O que foi feito:**
  - Criado o componente de contexto [`SmoothScrollProvider.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/SmoothScrollProvider.tsx).
  - Adicionadas regras de CSS `scroll-behavior: smooth` e `scroll-padding-top: 5.5rem` em [`globals.css`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/globals.css).

---

## [2026-08-17] - Adição do CTA "Conheça o Roteiro" e Ancoragem da Jornada do Tour

### 1. Botão de CTA e Navegação para o Roteiro do Tour
- **O que foi feito:**
  - Adicionado o CTA secundário **"Conheça o Roteiro"** na [`HeroSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/HeroSection.tsx).

---

## [2026-08-17] - Seção Interativa de Agendamento com Calendário e Nome (`BookingSection.tsx`)

### 1. Criação da Seção de Agendamento com Calendário e Entrada de Nome
- **O que foi feito:**
  - Criado o componente [`BookingSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/BookingSection.tsx) com calendário de datas, seleção de quantidade de pessoas e campo de nome do turista.
  - Criado o gerador de link dinâmico [`getBookingWhatsAppLink`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/lib/whatsapp.ts).
