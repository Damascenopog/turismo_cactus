# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comportamento em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

## [2026-08-17] - Refinamento Profissional da Resposta de Agendamento no FAQ (`pt.json`, `en.json`, `es.json`, `de.json`)

### 1. Atualização da Resposta da Pergunta "Como funciona o agendamento e pagamento?"
- **O que foi feito:**
  - Reformulada a resposta da chave `footer.faqA3` em todos os 4 idiomas (PT, EN, ES, DE) para refletir o fluxo atual e profissional com o calendário interativo e conexão personalizada com o guia.
  - **Texto em Português:**
    > *"Basta selecionar a data desejada em nosso calendário interativo, informar seu nome e a quantidade de pessoas. Ao clicar no botão, você será conectado diretamente ao guia credenciado no WhatsApp com todos os detalhes pré-preenchidos para confirmação ágil e sem taxas antecipadas."*
  - **Texto em Inglês:**
    > *"Simply select your preferred date on our interactive calendar, enter your name, and choose the number of guests. You'll connect directly with your certified local guide via WhatsApp with all details pre-filled for quick confirmation, with no advance booking fees."*
  - **Texto em Espanhol:**
    > *"Simplemente selecciona la fecha deseada en nuestro calendario interactivo, ingresa tu nombre y la cantidad de personas. Te conectarás directamente con el guía certificado por WhatsApp con todos los datos precargados para una confirmación rápida y sin cargos por adelantado."*
  - **Texto em Alemão:**
    > *"Wähle einfach dein Wunschdatum in unserem interaktiven Kalender, gib deinen Namen und die Personenanzahl ein. Du wirst direkt per WhatsApp mit deinem zertifizierten Guide verbunden – alle Angaben sind bereits vorausgefüllt für eine schnelle Bestätigung ohne Vorauszahlungsgebühren."*
- **Como funciona:**
  - O texto do acordeão de FAQ no rodapé agora descreve exatamente a experiência digital da landing page: seleção no calendário, personalização do grupo e contato direto no WhatsApp com garantia de transparência (sem taxas antecipadas).
- **Modificação de Comportamento:**
  - *Antes:* O texto dizia genericamente *"Você escolhe o dia no WhatsApp, tira suas dúvidas diretamente com o guia e confirma sem complicações."*
  - *Depois:* O texto enfatiza o agendamento pelo calendário da página, a segurança de guias credenciados e a isenção de taxas prévias.

---

## [2026-08-17] - Destaque Visual do CTA de Roteiro e Correção da Trilha SVG de Scroll

### 1. Novo Card de Alto Impacto para o Roteiro do Passeio (`BookingSection.tsx`)
- **O que foi feito:**
  - O CTA *"Quer ver o que está incluso no passeio antes de agendar?"* foi transformado em um cartão de destaque visual de alta conversão.
  - Adicionado ícone de bússola com sombra de destaque (`shadow-[var(--brand-blue)]/30`), badge *"📍 Roteiro Oficial do Tour"*, tipografia em negrito de alto contraste e botão de ação primário azul com animação de seta (`ArrowDown`).

### 2. Correção de Sobreposição da Linha de Trajetória SVG (`FootprintTrail.tsx`)
- **O que foi feito:**
  - Ajustado o nível de camada do componente [`FootprintTrail.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/animations/FootprintTrail.tsx) para `z-0` com `pointer-events-none`.
  - Recalibradas as coordenadas das curvas SVG no Desktop e Mobile para fluírem exclusivamente pelas margens e canaletas externas, sem cruzar caixas de texto ou cartões interativos.

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
