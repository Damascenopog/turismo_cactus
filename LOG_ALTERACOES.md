# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comportamento em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

## [2026-08-17] - Animação Fluida de Rolagem e Centralização de Âncoras (`SmoothScrollProvider.tsx`)

### 1. Sistema de Rolagem Suave com Centralização no Viewport
- **O que foi feito:**
  - Criado o componente de contexto [`SmoothScrollProvider.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/SmoothScrollProvider.tsx) integrado globalmente no [`layout.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/layout.tsx).
  - Adicionadas regras de CSS `scroll-behavior: smooth` e `scroll-padding-top: 5.5rem` em [`globals.css`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/globals.css).
  - Interceptados todos os cliques em links de âncora internos (`a[href^="#"]`) para calcular dinamicamente a posição ideal do elemento na tela.
  - Implementado cálculo inteligente: se a seção alvo cabe confortavelmente no viewport do dispositivo, a rolagem a posiciona centralizada verticalmente; se a seção for extensa, alinha com margem de folga superior perfeita descontando a barra de navegação fixa (Navbar 84px).
  - Aplicada a atualização da URL via `window.history.pushState` sem saltos bruscos ou travamentos.
- **Como funciona:**
  - Ao clicar em qualquer link de navegação ou botão de âncora (*"Conheça o Roteiro"*, *"Escolher Data no Calendário"*, links do menu superior), o scroll transiciona com amortecimento suave e garante que o conteúdo principal da seção fique perfeitamente visível e enquadrado no centro da tela.
- **Modificação de Comportamento:**
  - *Antes:* O clique em âncoras realizava o salto padrão do navegador, que podia cobrir parte do título com a barra de navegação ou não centralizar o conteúdo.
  - *Depois:* A rolagem é ultra-fluida, desacelera suavemente e enquadra o conteúdo no centro da visão do visitante.

---

## [2026-08-17] - Adição do CTA "Conheça o Roteiro" e Ancoragem da Jornada do Tour

### 1. Botão de CTA e Navegação para o Roteiro do Tour
- **O que foi feito:**
  - Adicionado o CTA secundário **"Conheça o Roteiro"** na [`HeroSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/HeroSection.tsx) apontando para `#roteiro`.
  - Adicionada a âncora `id="roteiro"` em [`MioloSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/MioloSection.tsx), que marca o início do trajeto do passeio.
  - Adicionado um banner/link auxiliar no rodapé do cartão de agendamento em [`BookingSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/BookingSection.tsx).
  - Atualizadas as traduções da chave `ctaItinerary` em todos os 4 idiomas (PT, EN, ES, DE).

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
