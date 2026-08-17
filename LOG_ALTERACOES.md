# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comportamento em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

## [2026-08-17] - Destaque Visual do CTA de Roteiro e Correção da Trilha SVG de Scroll

### 1. Novo Card de Alto Impacto para o Roteiro do Passeio (`BookingSection.tsx`)
- **O que foi feito:**
  - O CTA *"Quer ver o que está incluso no passeio antes de agendar?"* foi transformado em um cartão de destaque visual de alta conversão.
  - Adicionado ícone de bússola com sombra de destaque (`shadow-[var(--brand-blue)]/30`), badge *"📍 Roteiro Oficial do Tour"*, tipografia em negrito de alto contraste e botão de ação primário azul com animação de seta (`ArrowDown`).
  - Adicionada descrição clara dos pontos do passeio: mirante panorâmico 360°, arquitetura viva dos becos, murais de arte urbana e gastronomia típica.
- **Como funciona:**
  - O visitante que estiver navegando na seção de agendamento visualiza um bloco nítido e atraente convidando-o a explorar os detalhes do roteiro antes de selecionar a data, com transição suave ao clicar.
- **Modificação de Comportamento:**
  - *Antes:* O texto era um link discreto em cinza no rodapé do cartão, passando despercebido.
  - *Depois:* O bloco se tornou um componente visual de primeiro nível com gradiente, borda com brilho e botão dedicado.

### 2. Correção de Sobreposição da Linha de Trajetória SVG (`FootprintTrail.tsx`)
- **O que foi feito:**
  - Ajustado o nível de camada do componente [`FootprintTrail.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/animations/FootprintTrail.tsx) para `z-0` com `pointer-events-none`.
  - Recalibradas as coordenadas das curvas SVG no Desktop e Mobile para fluírem exclusivamente pelas margens e canaletas externas, sem cruzar caixas de texto ou cartões interativos.
  - Posicionadas as ilustrações de solas de sapato SVG estritamente nas bordas laterais (`hidden xl:block`).
- **Como funciona:**
  - A trilha animada de pegadas agora atua estritamente como background sutil e elegante no ritmo do scroll, garantindo 100% de legibilidade e nenhuma sobreposição de textos, formulários ou botões.
- **Modificação de Comportamento:**
  - *Antes:* Em certas resoluções, a linha SVG curvava sobre áreas centrais de cartões e títulos.
  - *Depois:* A linha permanece permanentemente em camada de fundo (`z-0`) nas calhas laterais.

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

---

## [2026-08-17] - Integração do Componente `DiaTextReveal` no Hero (`HeroSection.tsx`)

### 1. Efeito de Revelação de Texto com Cores da Bandeira do Brasil
- **O que foi feito:**
  - Integrado o componente [`dia-text-reveal.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/ui/dia-text-reveal.tsx) com as cores do Brasil.

---

## [2026-08-17] - Atualização da Marca no Header (`Navbar.tsx`)

### 1. Alteração da Nomenclatura no Cabeçalho
- **O que foi feito:**
  - Alterado o título da marca no cabeçalho em [`Navbar.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/Navbar.tsx) para **"Tour Cactus"** com subtítulo **"Turismo pela Rocinha • Rio"**.

---

## [2026-08-11] - Associação das Fotos Reais aos Murais (`hexa.jpg` e `crianca_futebol.jpg`)

### 1. Atualização do Mural de Arte & Cultura (`ArteSection.tsx`)
- **O que foi feito:**
  - Imagens reais vinculadas aos cartões e removidas as legendas adicionais.

---

## [2026-08-11] - Nova Seção Horizontal de Estatísticas e Métricas (`StatsSection.tsx`)

### 1. Criação do Componente `StatsSection.tsx` e Integração
- **O que foi feito:**
  - Criada a barra horizontal de estatísticas e prova social.

---

## [2026-08-10] - Nova Arquitetura Visual (Grid Zig-Zag & Trilha de Pegadas SVG)

### 1. Padrão de Layout Alternado Zig-Zag e Trilha SVG
- **O que foi feito:**
  - Grid alternado em "Z" e trilha animada de pegadas em SVG.
