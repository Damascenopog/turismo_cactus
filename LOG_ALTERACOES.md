# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comunidade em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

## [2026-08-17] - Ampliação de Imagens e Limpeza dos Pins Flutuantes (`ArteSection.tsx` & `MioloSection.tsx`)

### 1. Remoção de Pins e Elementos Flutuantes Sobre a Imagem (`ArteSection.tsx`)
- **O que foi feito:**
  - Removidos todos os botões de pins e ícones flutuantes (paleta azul, nota musical verde, talheres laranja e botão *"Toque nos Pins 📍"*) que ficavam sobrepostos ao centro da fotografia em [`ArteSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/ArteSection.tsx).
  - A seleção das fotos reais continua 100% interativa ao clicar nos 3 cartões da esquerda (*Grafite & Murais*, *Roda de Capoeira & Hip-Hop*, *Sabor da Favela*).
  - Mantida uma apresentação fotográfica limpa com apenas o badge superior (*Passo 02 • Circuito Cultural*) e o cartão de legenda na parte inferior.
- **Como funciona:**
  - A fotografia agora é apresentada de forma pura, contínua e imersiva. Ao clicar nos cartões explicativos, a imagem transiciona suavemente entre os murais de rua, a vivência comunitária e a gastronomia local.
- **Modificação de Comportamento:**
  - *Antes:* Havia múltiplos botões circulares coloridos espalhados por cima da foto.
  - *Depois:* A imagem está 100% limpa, desobstruída e com foco na arte e fotografia real da favela.

### 2. Aumento e Padronização da Escala Visual das Fotografias (`ArteSection.tsx` & `MioloSection.tsx`)
- **O que foi feito:**
  - Aumentada a altura das molduras de imagem nas seções de narrativa ([`ArteSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/ArteSection.tsx) e [`MioloSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/MioloSection.tsx)) de `h-80/h-96` para **`h-[460px] sm:h-[520px] lg:h-[580px]`**.
  - Padronizado o estilo com bordas arredondadas `rounded-3xl`, sombras profundas `shadow-2xl` e gradientes de alto contraste para máxima legibilidade das legendas.
- **Como funciona:**
  - As imagens ganharam escala cinematográfica e imersiva em desktops, tablets e smartphones, equilibrando-se perfeitamente com os cartões laterais no padrão Zig-Zag.
- **Modificação de Comportamento:**
  - *Antes:* As imagens eram mais compactas e verticais.
  - *Depois:* As fotografias ocupam um espaço generoso e de alto impacto visual.

---

## [2026-08-17] - Remoção de Repetições e Ajuste de Terminologia Autêntica de Guias / Condutores

### 1. Eliminação de Redundâncias e Remoção de "Ministério do Turismo"
- **O que foi feito:**
  - Removida a menção a *"certificados pelo Ministério do Turismo"* no badge de confiança do rodapé em [`FooterSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/FooterSection.tsx).
  - Substituídas as repetições do termo *"Guias credenciados"* por termos mais autênticos: **"Condutores Locais"**, **"Anfitriões Nativos"** e **"Moradores que nasceram e vivem na Rocinha"**.

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
  - Criado o componente [`BookingSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/BookingSection.tsx).
