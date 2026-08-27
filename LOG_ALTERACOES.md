# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comunidade em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

## [2026-08-27] - Otimização de Responsividade Mobile e Correção da Notificação de Idioma

### 1. Correção do Posicionamento da Notificação de Idioma no Header
- **O que foi feito:**
  - Corrigido o posicionamento da notificação flutuante de detecção de idioma em [`Navbar.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/Navbar.tsx).
  - Em telas mobile (`< 640px`), o balão agora se ajusta automaticamente entre as margens da tela (`fixed left-3 right-3 top-[4.75rem]`), com indicador em seta apontando perfeitamente para o botão de idioma, eliminando qualquer transbordo lateral ou corte de texto à esquerda em aparelhos com telas estreitas (320px a 390px).
  - Em telas desktop, permanece ancorado diretamente abaixo do botão de idioma (`sm:absolute sm:right-0 sm:w-80`).
  - Atualizada a persistência de sessão em [`LanguageContext.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/context/LanguageContext.tsx), permitindo que novos visitantes e testes recebam o convite de idioma de forma não-intrusiva, sendo dispensado com 1 toque no botão "Continuar" / "Mudar Idioma" ou no "X".
  - Aprimorados os textos da notificação nos 4 idiomas (PT, EN, ES, DE).

### 2. Validação e Ajustes de Responsividade em Telas Pequenas
- **O que foi feito:**
  - Otimizados os espaçamentos internos dos cards de seleção de tours e formulário de agendamento em [`MultiTourBookingPage.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/booking/MultiTourBookingPage.tsx) para `p-4 sm:p-8 rounded-2xl sm:rounded-3xl`.
  - Ajustados os botões rápidos de data e a grade do calendário para telas a partir de 320px de largura sem rolagem horizontal indesejada.
  - Verificados o comportamento de toque do carrossel com lightbox ([`ImageCarousel.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/ui/ImageCarousel.tsx)) e botões de ação nos banners de todos os tours.

---

## [2026-08-27] - Tradução Multilíngue Completa na Página de Agendamento (`/agendar`)

### 1. Internacionalização Reativa de Todos os Elementos de Reserva
- **O que foi feito:**
  - Adicionado o bloco de chaves `"bookingPage"` nos 4 arquivos de tradução ([`pt.json`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/locales/pt.json), [`en.json`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/locales/en.json), [`es.json`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/locales/es.json), [`de.json`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/locales/de.json)).
  - Refatorado [`MultiTourBookingPage.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/booking/MultiTourBookingPage.tsx) para utilizar `t("bookingPage.XYZ")` em todos os títulos, passos numerados, botões de seleção de pacote, cabeçalhos de calendário, rótulos de formulário, resumo ao vivo e mensagem de WhatsApp.
- **Como funciona:**
  - Ao alternar entre Português (🇧🇷), English (🇺🇸), Español (🇪🇸) e Deutsch (🇩🇪), a página `/agendar` traduz instantaneamente:
    - O cabeçalho e descrição da página.
    - Os títulos, taglines e durações dos 4 cards de tours.
    - Os botões "Selecionar Todos (Pacote Completo)" e "Desmarcar Todos".
    - Os atalhos rápidos de data (*Amanhã* / *Tomorrow* / *Mañana* / *Morgen*).
    - O resumo da reserva com contagem pluralizada de tours e pessoas.
    - O botão de confirmação e a mensagem gerada para o WhatsApp do anfitrião.

---

## [2026-08-27] - Página Própria de Agendamento com Suporte a Múltiplos Tours (`/agendar`)

### 1. Nova Rota de Agendamento Multi-Tours (`/agendar`)
- **O que foi feito:**
  - Criada a rota dedicada [`/agendar`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/app/agendar/page.tsx) e o componente interativo [`MultiTourBookingPage.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/booking/MultiTourBookingPage.tsx).
  - Implementada a seleção simultânea de múltiplos passeios: o usuário pode escolher **1, 2, 3 ou todos os 4 tours** (**Rocinha**, **Vidigal**, **Rio Tour**, **Baile Funk**), montando seu próprio pacote personalizado no Rio.
  - Suporte a pré-seleção inteligente via parâmetro de URL (ex: `/agendar?tour=vidigal`).
  - Calendário interativo de datas com atalhos rápidos (*Amanhã*, *Próximo Sábado*, *Próximo Domingo*), seletor de quantidade de pessoas, nome completo e campo opcional de observações/preferências.

### 2. Mensagem Inteligente Formatada para o WhatsApp
- **O que foi feito:**
  - Criada a função `getMultiTourBookingWhatsAppLink` em [`whatsapp.ts`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/lib/whatsapp.ts) com o número oficial `+55 21 99042-2998`.
  - A mensagem enviada ao anfitrião lista todos os passeios selecionados em tópicos, com nome, quantidade de pessoas, data desejada e notas adicionais, traduzida automaticamente conforme o idioma do usuário (PT, EN, ES, DE).

### 3. Integração com a Navegação Global
- **O que foi feito:**
  - O botão de ação principal do Header (**"Agendar Passeio"** / **"Book Tour"**) em [`Navbar.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/Navbar.tsx) e os botões dos heroes agora direcionam diretamente para a nova página `/agendar`.
  - As páginas individuais de cada tour possuem cards que permitem agendar o roteiro pontual ou abrir a central `/agendar` com a opção pré-marcada.

---

## [2026-08-27] - Correção do Sistema de Idiomas Multilíngue (PT, EN, ES, DE)

### 1. Dinamização Completa dos Roteiros e Textos por Idioma
- **O que foi feito:**
  - Identificado que o objeto `toursData.ts` e o componente `TourRouteView.tsx` possuíam textos estáticos em português, fazendo com que as páginas dos tours não respondessem à troca de idioma.
  - Refatorado [`toursData.ts`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/data/toursData.ts) com traduções completas e humanizadas para os 4 idiomas suportados (**Português**, **English**, **Español**, **Deutsch**), expondo a função `getTourData(tourId, lang)`.
  - Atualizados [`HeroSection.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/sections/HeroSection.tsx) e [`TourRouteView.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/tours/TourRouteView.tsx) para reagir dinamicamente a `language` do [`LanguageContext.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/context/LanguageContext.tsx), traduzindo instantaneamente títulos, paradas numeradas, descrições, itens inclusos e formulários.
  - Adicionado o bloco de chaves `"route"` nos 4 arquivos de tradução ([`pt.json`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/locales/pt.json), [`en.json`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/locales/en.json), [`es.json`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/locales/es.json), [`de.json`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/locales/de.json)).
- **Como funciona:**
  - Ao clicar na cápsula de idiomas do Header e selecionar uma bandeira (🇧🇷, 🇺🇸, 🇪🇸, 🇩🇪), todo o conteúdo da página ativa (incluindo capas, paradas numeradas, legendas do carrossel, requisitos, formulários e mensagens de WhatsApp) é atualizado em tempo real.

---

## [2026-08-27] - Replicação do HeroSection Principal para Todas as Páginas de Tours

### 1. HeroSection Reutilizável e Dinâmico (`HeroSection.tsx`)
- **O que foi feito:**
  - O componente [`HeroSection.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/sections/HeroSection.tsx) foi refatorado para aceitar propriedades opcionais (`titlePrefix`, `titleHighlight`, `subtitle`, `imageDay`, `imageNight`, `bookingHref`, `itineraryHref`), mantendo como padrão os assets em alta definição (`hero_rocinha_hd.jpg` / `hero_rocinha_night_hd.jpg`), a animação com cores do Brasil ([`DiaTextReveal`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/ui/dia-text-reveal.tsx)) e a alternância dinâmica Dia/Noite (Light/Dark Mode).
- **Como funciona:**
  - As páginas [`/`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/app/page.tsx) (Rocinha), [`/vidigal`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/app/vidigal/page.tsx) (Vidigal), [`/rio-tour`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/app/rio-tour/page.tsx) (Rio Tour) e [`/bailes`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/app/bailes/page.tsx) (Baile Funk) agora compartilham exatamente a mesma estética visual marcante de capa, com seus respectivos títulos, subtítulos humanizados e botões de chamada rápida para o agendamento e roteiro de paradas.

---

## [2026-08-27] - Atualização de Nomenclatura: "Baile Funk"

### 1. Ajuste de Nome no Header e Base de Tours
- **O que foi feito:**
  - Alterada a nomenclatura da rota e do título da experiência de *"Rolé nos Bailes do RJ"* para **"Baile Funk"** em [`Navbar.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/Navbar.tsx) e [`toursData.ts`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/data/toursData.ts).
- **Como funciona:**
  - O header agora exibe as 4 opções: **Rocinha**, **Vidigal**, **Rio Tour** e **Baile Funk**.
  - A página e o agendamento no WhatsApp refletem diretamente o título "Baile Funk".

---

## [2026-08-27] - Criação de Páginas Independentes por Tour, Paradas Numeradas, Carrosséis de Fotos e Humanizer

### 1. Instalação e Aplicação da Skill `humanizer` (`github.com/blader/humanizer`)
- **O que foi feito:**
  - Instalada a skill [`humanizer`](file:///home/damasceno/Documentos/Code/turismo_cactus/.agents/skills/humanizer/SKILL.md) e aplicada em todos os textos, descrições e títulos dos passeios.
  - Eliminados todos os clichês e vícios comuns de IA (*"stands as a testament"*, *"vibrant tapestry"*, *"nestled in the heart of"*, slogans promocionais artificiais e orações gerundistas vazias).
  - A linguagem foi adaptada para um tom autêntico, humano, acolhedor e direto de um morador anfitrião carioca.

### 2. Rotas Independentes no Next.js App Router com Páginas Dedicadas
- **O que foi feito:**
  - Criadas páginas exclusivas para cada tour com conteúdo e agendamento próprios:
    - **`Tour Rocinha` (`/`):** 5 paradas numeradas (1. Via Ápia, 2. Laje da Moto, 3. Laje do Drone, 4. Mirante Novo Visual, 5. Descida pela Favela sem pontos engessados).
    - **`Tour Vidigal` (`/vidigal`):** 4 paradas numeradas (1. Prainha do Vidigal, 2. Laje dos Cria / Bar da Laje com vista para o Cristo, 3. Laje do Tony com vista 360°, 4. Mirantes & Vielas do Vidigal).
    - **`Rio Tour Completo` (`/rio-tour`):** 4 paradas numeradas (1. Mirante Dona Marta, 2. Escadaria Selarón, 3. Museu de Arte do Rio / Praça Mauá, 4. Estádio do Maracanã).
    - **`Rolé nos Bailes do RJ` (`/bailes`):** Experiência noturna segura e guiada para curtir o funk carioca e a noite da cidade (1. Esquenta com petiscos, 2. Chegada acompanhada ao baile, 3. DJs & Dança, 4. Retorno seguro).

### 3. Componentes `TourRouteView` e `ImageCarousel` com Lightbox e Impeccable Design
- **O que foi feito:**
  - **`ImageCarousel.tsx`:** Carrossel responsivo com transição de fotos, botões táteis flutuantes em cápsula, indicadores de paginação, legendas elegantes e modal de ampliação em tela cheia (Lightbox).
  - **`TourRouteView.tsx`:** Linha do tempo vertical numerada com badges táteis (`01`, `02`...), tags de vivência e formulário de agendamento que gera mensagens contextuais direto para o WhatsApp do anfitrião.
  - **`Navbar.tsx`:** Atualizado com `next/link` e `usePathname` para transição instantânea e destaque da cápsula da página ativa.

---

## [2026-08-27] - Atualização do Logotipo Oficial no Header e Favicon da Aba do Navegador

### 1. Novo Logotipo no Header (`Navbar.tsx`)
- **O que foi feito:**
  - Integrada a nova imagem de logomarca fornecida (`logo.jfif` / `logo.png`) no cabeçalho em [`Navbar.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/Navbar.tsx).
  - A imagem foi inserida em uma moldura circular compacta com borda translúcida suave, efeito de hover e carregamento prioritário via `next/image`.
- **Como funciona:**
  - O header apresenta a nova identidade visual acompanhada do texto estilizado *"Tour Cactus"* e *"Turismo pela Rocinha • Rio"*.

### 2. Atualização do Favicon e Ícones da Aba do Navegador (`layout.tsx`)
- **O que foi feito:**
  - Gerados favicons e ícones de alta resolução (`icon.png`, `favicon.ico`, `logo.png`) derivados diretamente da nova logo oficial.
  - Atualizadas as metatags de `icons` em [`layout.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/app/layout.tsx) com suporte a navegadores desktop, mobile (iOS/Safari Apple Touch Icon) e PWA.

---

## [2026-08-27] - Centralização Perfeita do Header, Seletor de Idioma Expansível e Notificação Inteligente de Idioma do Navegador

### 1. Centralização Balanceada do Header (Layout em Grid 3-Colunas)
- **O que foi feito:**
  - O header em ilha flutuante (`Navbar.tsx`) foi refatorado para utilizar uma estrutura balanceada em 3 colunas (`grid grid-cols-2 md:grid-cols-3 items-center`).
  - A coluna central contendo a cápsula de navegação com os títulos (**Rocinha**, **Vidigal**, **Rio Tour**) agora fica **matematicamente e visualmente centralizada** em relação ao container, sem deslocamentos causados pelo tamanho do logo ou dos controles laterais.

### 2. Botão de Idioma Expansível em Popover (Dropdown Cápsula)
- **O que foi feito:**
  - O seletor de idiomas agora é um botão compacto em cápsula com bandeira, código do idioma atual e seta indicativa (`[ 🇧🇷 PT ▾ ]`).
  - Ao clicar, expande um **menu flutuante translúcido estilo iOS** exibindo todas as opções com bandeira, nome nativo e indicador de seleção ativa (`Check`), com fechamento automático ao clicar fora ou selecionar.

### 3. Detecção Automática do Idioma do Navegador e Notificação Única
- **O que foi feito:**
  - Implementada detecção automática do idioma do sistema operacional / navegador do usuário via `navigator.language`.
  - Exibição de uma **notificação em balão flutuante estilizada logo abaixo do ícone de idioma**, informando o idioma detectado (ex.: *"Detectamos seu idioma como Português (BR). Deseja alterar?"*) com botões táteis de ação rápida (*"Mudar"* ou *"Manter"*).
  - O estado de notificação é gravado no `localStorage` (`tour_cactus_lang_notified`) para ser exibido **apenas uma vez** por usuário, respeitando a experiência do visitante.

---

## [2026-08-27] - Header Estilo iPhone (Dynamic Island) e Títulos em Cápsula Segmentada (`Navbar.tsx`)

### 1. Design de Cápsula Flutuante Estilo iPhone (iOS Glassmorphism & Impeccable)
- **O que foi feito:**
  - O cabeçalho foi transformado em uma **Cápsula Flutuante Estilo iPhone / Dynamic Island** (`sticky top-3 sm:top-5`, `rounded-full`, `backdrop-blur-2xl`, bordas translúcidas sutis e sombra difusa em camadas).
  - **Títulos em Cápsula Segmentada:** Os links de navegação (**Rocinha**, **Vidigal**, **Rio Tour**) foram encapsulados em um controle segmentado estilo iOS (`rounded-full bg-slate-100/90 dark:bg-slate-800/90 shadow-inner`), onde cada item é uma cápsula interativa com micro-interação de hover e clique tátil (`active:scale-95`).
  - **Controles em Cápsulas iOS:** Seletor de idiomas, botão circular de tema e botão de CTA do WhatsApp configurados no padrão de cápsulas arredondadas (pills).
  - **Menu Mobile iOS:** Gaveta no estilo sheet card flutuante com bordas `rounded-3xl` e links em cartões tácteis com chevron.
- **Como funciona:**
  - O header flutua elegantemente acima do conteúdo com efeito de vidro fosco (frosted glass), adaptando a opacidade e profundidade dinamicamente durante a rolagem (scroll).
- **Modificação de Comportamento:**
  - *Antes:* Header em barra horizontal convencional ocupando 100% da largura superior com links em texto simples.
  - *Depois:* Header em ilha/cápsula flutuante arredondada (`rounded-full`) com seletor de títulos em cápsula segmentada no padrão de design do iPhone/iOS.

---

## [2026-08-27] - Reestruturação do Header: Logo, Rocinha, Vidigal e Rio Tour (`Navbar.tsx`)

### 1. Atualização dos Itens de Navegação do Header
- **O que foi feito:**
  - Atualizados os links principais de navegação no cabeçalho em [`Navbar.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/Navbar.tsx) para apresentar exatamente:
    - **Logo:** Logomarca *Tour Cactus* com tipografia destacada e subtítulo *Turismo pela Rocinha • Rio*.
    - **Rocinha:** Navegação para a experiência e roteiro da Rocinha (`#hero`).
    - **Vidigal:** Navegação direta para a área de reserva e agendamento de passeios (`#booking`).
    - **Rio Tour:** Navegação para a base comunitária e opções de passeios no Rio (`#base`).
  - Atualizado o menu gaveta mobile para refletir os mesmos 3 destinos principais de forma clara e acessível.
- **Como funciona:**
  - O header no desktop apresenta espaçamento otimizado (`space-x-8`) com os destinos em destaque, permitindo navegação instantânea com scroll suave para as respectivas seções.
- **Modificação de Comportamento:**
  - *Antes:* O header continha 6 links ("Início", "Agendar", "O Miolo", "Arte & Cultura", "A Base", "FAQ").
  - *Depois:* O header foca diretamente nos 3 roteiros/experiências principais ("Rocinha", "Vidigal", "Rio Tour") ao lado do Logo.

---

## [2026-08-17] - Correção de Acessibilidade (WAVE), Relação de Contraste (WCAG AA/AAA) e Estrutura Semântica

### 1. Correção de Rótulos de Formulário e Hierarquia de Cabeçalhos (WAVE Errors & Alerts)
- **O que foi feito:**
  - **Form Labels:** Adicionado `htmlFor="tourist-name-input"` no `<label>` e `id="tourist-name-input"` no `<input>` em [`BookingSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/BookingSection.tsx), eliminando os erros de *Missing form label* e *Orphaned form label*.
  - **Heading Levels (Semântica):** Corrigido o título do calendário de `<h4>` para `<h3>` e padronizados os subtítulos internos para eliminar o alerta de *Skipped heading level*.
  - **Accordion & ARIA:** Adicionados `aria-expanded`, `aria-controls` e `id` nos botões e respostas da seção de FAQ em [`FooterSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/FooterSection.tsx).

### 2. Aprimoramento Global de Contraste e Legibilidade (WCAG Contrast Errors)
- **O que foi feito:**
  - **Badges e Tags:** Substituídas cores claras por versões de alto contraste (ex.: `bg-amber-500/10 text-amber-900 dark:text-amber-300`, `bg-blue-500/10 text-blue-800 dark:text-blue-300`, `bg-emerald-500/10 text-emerald-800 dark:text-emerald-300`).
  - **Tipografia:** Eliminados textos excessivamente pequenos (`text-[10px]` e `text-[11px]`), padronizando para `text-xs` com `font-semibold` / `font-extrabold`.
  - **Logotipo e Header:** Ajustado o verde do logotipo para `text-emerald-700 dark:text-emerald-400` e o subtítulo para `text-blue-900 dark:text-blue-300` para garantir conformidade AAA no tema claro.
  - **Botões de Ação:** Aumentado o contraste dos botões primários com `bg-emerald-600 hover:bg-emerald-700` e `bg-blue-700 hover:bg-blue-800`.
  - **Verificação Impeccable:** Executado o script de detecção de design tokens e boas práticas com resultado 100% limpo (`[]`).
- **Como funciona:**
  - O site agora atinge nota de acessibilidade máxima no WAVE e conformidade com as diretrizes WCAG 2.2 AA/AAA em ambos os modos claro e escuro.

---

## [2026-08-17] - Ampliação de Imagens e Limpeza dos Pins Flutuantes (`ArteSection.tsx` & `MioloSection.tsx`)

### 1. Remoção de Pins e Elementos Flutuantes Sobre a Imagem (`ArteSection.tsx`)
- **O que foi feito:**
  - Removidos todos os botões de pins e ícones flutuantes que ficavam sobrepostos ao centro da fotografia em [`ArteSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/ArteSection.tsx).
  - Mantida uma apresentação fotográfica limpa com apenas o badge superior e o cartão de legenda na parte inferior.

### 2. Aumento e Padronização da Escala Visual das Fotografias (`ArteSection.tsx` & `MioloSection.tsx`)
- **O que foi feito:**
  - Aumentada a altura das molduras de imagem de `h-80/h-96` para **`h-[460px] sm:h-[520px] lg:h-[580px]`**.

---

## [2026-08-17] - Remoção de Repetições e Ajuste de Terminologia Autêntica de Guias / Condutores

### 1. Eliminação de Redundâncias e Remoção de "Ministério do Turismo"
- **O que foi feito:**
  - Removida a menção a *"certificados pelo Ministério do Turismo"* no badge de confiança do rodapé em [`FooterSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/FooterSection.tsx).
  - Substituídas as repetições do termo *"Guias credenciados"* por termos mais autênticos: **"Condutores Locais"**, **"Anfitriões Nativos"** e **"Moradores que nasceram e vivem na Rocinha"**.
