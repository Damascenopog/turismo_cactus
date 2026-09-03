# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA & CACTUS TURISMO

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comunidade em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

## [2026-09-02] - Remoção dos Chips de Categoria na Capa Inicial

### 1. Limpeza Visual do Hero no Portal Inicial (`PortalHero.tsx`)
- **O que foi feito:**
  - Removidos os botões em formato de chip/etiquetas de categoria ("Favela tour", "Trilhas e mirantes", "Rio tour histórico", "Vida noturna & ritmo") do componente [`PortalHero.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/portal/PortalHero.tsx).
- **Como funciona:**
  - A capa inicial concentra a atenção do usuário no título principal com efeito de revelação nas cores do Brasil, no subtítulo e nos botões primários de ação ("Explorar Passeios" e "Roteiro Personalizado").

---

## [2026-09-02] - Remoção do Título "Experiências no Rio de Janeiro"

### 1. Limpeza da Seção de Passeios no Portal Inicial (`PortalServices.tsx`)
- **O que foi feito:**
  - Removido o bloco de título e subtítulo ("Experiências no Rio de Janeiro" / "Escolha a experiência ideal...") acima da grade de cartões no componente [`PortalServices.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/portal/PortalServices.tsx).
- **Como funciona:**
  - A grade dos 4 passeios (*Tour Rocinha*, *Tour Vidigal*, *Rio Tour*, *Baile Funk*) flui diretamente após a capa e chips de navegação rápida, tornando a experiência na home ainda mais direta, focada e limpa especialmente no mobile.

---

## [2026-09-02] - Pontos Turísticos com Nomes Traduzidos e em Inglês

### 1. Exibição Bilíngue de Pontos Turísticos e Paradas (`TourRouteView.tsx`)
- **O que foi feito:**
  - Configurada a exibição dos pontos turísticos para que apresentem simultaneamente o **nome traduzido no idioma ativo** e a **referência em inglês (ou português original)**:
    - Ao selecionar **Português (`PT`)**, **Espanhol (`ES`)** ou **Alemão (`DE`)**: O cabeçalho da parada exibe o nome traduzido principal acompanhado de uma tag bilíngue com a versão em inglês (`🇺🇸 EN: ...`) e subtítulo contextual.
    - Ao selecionar **Inglês (`EN`)**: O cabeçalho exibe o nome em inglês com a referência do nome local original em português (`🇧🇷 PT: ...`).
- **Como funciona:**
  - Facilita a identificação de locais icônicos tanto para quem lê em sua língua nativa quanto para quem busca referências globais de mapas e sinalização turística.

---

## [2026-09-02] - Roteiro Oficial do Tour Rocinha com 5 Paradas

### 1. Atualização do Roteiro Oficial da Rocinha (`toursData.ts` e `/rocinha`)
- **O que foi feito:**
  - Configurado o roteiro oficial do **Tour Rocinha** com exatamente as 5 paradas especificadas:
    1. **Via Ápia:** Ponto de encontro, comércio local e centro dinâmico da comunidade.
    2. **Laje da Moto:** Ponto clássico dos mototaxistas com primeira vista panorâmica e cultura do transporte local.
    3. **Laje do Drone:** Mirante de topo aberto para fotos amplas de São Conrado, Pedra da Gávea e favela.
    4. **Mirante Novo Visual:** Ponto alto com vista privilegiada para o mar de São Conrado e contraste com a mata atlântica.
    5. **Descida da Favela:** Descer a pé conhecendo novos pontos autênticos, vielas históricas e murais, sem um roteiro rígido.
  - Sincronizado em todos os 4 idiomas suportados (`PT`, `EN`, `ES`, `DE`).
  - Integrado o componente [`TourRouteView.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/tours/TourRouteView.tsx) na página da Rocinha ([`src/app/rocinha/page.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/rocinha/page.tsx)), garantindo apresentação uniforme e padronizada com fotos, destaques e itens inclusos.
- **Como funciona:**
  - O usuário navega pela timeline numerada das 5 paradas, visualizando carrosséis de fotos reais de cada local e os detalhes de cada experiência.

---

## [2026-09-02] - Centralização da Mudança de Idioma Exclusivamente no Header

### 1. Remoção do Seletor de Idioma de Dentro do Menu Mobile (`Navbar.tsx`)
- **O que foi feito:**
  - Removido o seletor duplicado de idiomas de dentro do drawer/modal mobile.
  - A troca de idiomas permanece **exclusivamente no botão do cabeçalho/navbar principal**, disponível tanto no desktop quanto no mobile.
- **Como funciona:**
  - O usuário altera o idioma diretamente pela pílula de idiomas fixada no cabeçalho. O menu mobile fica mais limpo, contendo estritamente os links de navegação dos passeios e o botão de agendamento.
- **Modificação de Comportamento:**
  - *Antes:* O seletor de idiomas aparecia duplicado dentro da gaveta do menu mobile.
  - *Depois:* O seletor de idiomas existe apenas no cabeçalho superior.

---

## [2026-09-02] - Menu Mobile em Overlay Flutuante com Backdrop

### 1. Desacoplamento do Menu Mobile do Fluxo da Página (`Navbar.tsx`)
- **O que foi feito:**
  - O menu mobile foi transformado em um **overlay flutuante independente** (`fixed inset-0 z-50`), separado do fluxo de layout do `<header>`.
  - Adicionado um backdrop translúcido escurecido com desfoque (`fixed inset-0 bg-slate-950/70 backdrop-blur-md`) que cobre completamente o conteúdo do site que está embaixo.
  - O cartão do menu flutua suavemente sobre o conteúdo com animação de slide + zoom, sem empurrar, expandir ou alterar a altura dos elementos da página.
  - Implementado bloqueio de scroll no `body` (`overflow: hidden`) enquanto o menu estiver aberto, prevenindo movimentações indesejadas de rolagem ao fundo.
- **Como funciona:**
  - Ao tocar no botão de menu hambúrguer, o menu abre como um modal/drawer suspenso sobre a tela. Tocar no botão fechar, em qualquer link ou no fundo escurecido fecha o menu imediatamente.
- **Modificação de Comportamento:**
  - *Antes:* O menu mobile era renderizado dentro do cabeçalho em fluxo normal de documento, o que fazia o cabeçalho expandir para baixo e empurrar o conteúdo da página.
  - *Depois:* O menu flutua como um overlay sobreposto, cobrindo o conteúdo de baixo com desfoque e mantendo a posição e o tamanho da página intactos.

---

## [2026-09-02] - Auditoria e Validação de Responsividade Mobile

### 1. Otimizações de Layout e Tipografia para Telas Pequenas (320px a 768px)
- **O que foi feito:**
  - Realizada auditoria sistemática em todas as rotas e componentes:
    - **Header & Drawer Mobile ([`Navbar.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/Navbar.tsx)):** Pílulas no topo recolhidas no breakpoint `md:hidden`, abrindo gaveta móvel fluida com botões táteis de 48px de altura mínima e dropdown de idiomas com bounding box seguro (`max-w-[calc(100vw-2rem)]`).
    - **Portal Inicial ([`PortalHero.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/portal/PortalHero.tsx) e [`PortalServices.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/portal/PortalServices.tsx)):** Grid de badges adaptativo (`grid-cols-1 xs:grid-cols-2`), métricas sociais com quebra responsiva (`flex-wrap gap-2 sm:gap-4`) e cards de serviços com imagens em altura proporcional (`h-56 sm:h-64`).
    - **Roteiros & Paradas ([`TourRouteView.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/tours/TourRouteView.tsx)):** Linha do tempo de paradas numeradas com carrossel tátil, sem quebra de containers ou overflow horizontal.
    - **Página de Reservas ([`MultiTourBookingPage.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/booking/MultiTourBookingPage.tsx)):** Calendário interativo responsivo em grid com células quadradas táteis, inputs com `text-base` para evitar auto-zoom indesejado no iOS Safari.
- **Como funciona:**
  - O layout se adapta dinamicamente sem rolagem horizontal indesejada em larguras desde 320px (smartphones compactos) até 4K, garantindo experiência fluida e veloz.

---

## [2026-09-02] - Centralização Exclusiva do Agendamento na Página `/agendar`

### 1. Remoção de Formulários e Seções de Agendamento Inline das Telas de Conteúdo
- **O que foi feito:**
  - Removida a seção de agendamento inline com calendário (`BookingSection.tsx`) da página da Rocinha ([`src/app/rocinha/page.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/rocinha/page.tsx)).
  - Removido o formulário de agendamento inline (`<section id="agendamento">` com inputs de nome, data, pessoas e envio) do componente de paradas dos tours ([`src/components/tours/TourRouteView.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/tours/TourRouteView.tsx)), utilizado nas páginas do Vidigal, Rio Tour e Baile Funk.
  - Substituído por um banner de chamada limpo e elegante com botão que direciona o usuário diretamente para a central de agendamento oficial ([`/agendar?tour=ID`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/agendar/page.tsx)).
- **Como funciona:**
  - Toda e qualquer seleção de datas, escolha de número de pessoas e preenchimento de dados de reserva agora ocorre **exclusivamente na página dedicada de agendamento** ([`/agendar`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/agendar/page.tsx)).
  - As páginas dos passeios tornaram-se 100% focadas na narrativa, fotos, história, pontos de parada e roteiro detalhado.
- **Modificação de Comportamento:**
  - *Antes:* Cada página de tour continha formulários ou calendários de reserva duplicados embutidos no meio ou final do conteúdo.
  - *Depois:* As páginas de tours focam exclusivamente na apresentação da experiência, com botões de CTA direcionando para a central de agendamento unificada em `/agendar`.

---

## [2026-09-02] - Perguntas Frequentes (FAQ) Fechadas por Padrão

### 1. Inicialização do Acordeão de FAQ em Estado Recolhido (`PortalFooter.tsx` e `FooterSection.tsx`)
- **O que foi feito:**
  - Alterado o estado inicial do acordeão de FAQ (`openFaq`) de `0` para `null` nos componentes [`PortalFooter.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/portal/PortalFooter.tsx) e [`FooterSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/FooterSection.tsx).
- **Como funciona:**
  - Ao carregar a página, todas as perguntas do FAQ aparecem fechadas/recolhidas por padrão. O usuário pode clicar em qualquer pergunta para expandi-la sob demanda e ler a resposta.
- **Modificação de Comportamento:**
  - *Antes:* A primeira pergunta do FAQ ("Como funcionam as reservas e o pagamento?") vinha aberta por padrão ao abrir o site.
  - *Depois:* Todas as perguntas iniciam fechadas, deixando o visual da seção mais compacto, limpo e organizado.

---

## [2026-09-02] - Pílulas Individuais para Cada Destino no Header (`Navbar.tsx`)

### 1. Botões em Pílula Independentes por Texto
- **O que foi feito:**
  - Configurado para que cada item de navegação (**Início**, **Rocinha**, **Vidigal**, **Rio Tour**, **Baile Funk**) seja uma **pílula individual e independente**, com espaçamento próprio, bordas arredondadas (`rounded-full`), fundo translúcido e `whitespace-nowrap`.
  - Eliminado o confinamento dos 5 links dentro de uma única sub-cápsula espremida, permitindo que cada botão respire visualmente sem quebra de linhas indesejada em *"Rio Tour"* ou *"Baile Funk"*.
- **Como funciona:**
  - Cada destino possui seu próprio botão em pílula tátil com efeito de hover. A pílula da página ativa recebe destaque escuro/verde contrastante, enquanto as demais permanecem com visual translúcido suave.

---

## [2026-09-02] - Restauração do Header Estilo Pílula (Dynamic Island) e Links Fixos

### 1. Header com Logo e Botões Estilo Pílula (`Navbar.tsx`)
- **O que foi feito:**
  - Restaurado o design de **Cápsula Flutuante / Dynamic Island** estilo iPhone no cabeçalho:
    - **Logo oficial** à esquerda em moldura circular com efeito de hover (`/logo.png`) e tipografia de marca (*Tour Cactus | Turismo pela Rocinha • Rio*).
    - **Controle central em cápsula segmentada com botões estilo pílula** contendo exatamente os destinos fixos:
      - **Início** (`/`)
      - **Rocinha** (`/rocinha`)
      - **Vidigal** (`/vidigal`)
      - **Rio Tour** (`/rio-tour`)
      - **Baile Funk** (`/bailes`)
    - **Controles à direita em pílula:**
      - Dropdown expansível com bandeiras dos 4 idiomas (`PT 🇧🇷`, `EN 🇺🇸`, `ES 🇪🇸`, `DE 🇩🇪`) e notificação inteligente de idioma nativo.
      - Botão circular de alternância de tema (Sol / Lua).
      - Botão de ação em pílula verde (*"Agendar"* → `/agendar`).
  - Menu gaveta mobile em estilo cartão suspenso iOS com os mesmos 5 links em cartões táteis com setas.
- **Como funciona:**
  - Os links de navegação permanecem **100% fixos e consistentes em todas as páginas** (Início, Rocinha, Vidigal, Rio Tour, Baile Funk), sem alternar para âncoras locais (`#roteiro`, `#arte`, etc.). O indicador da pílula ativa (`bg-white` / `bg-slate-700`) atualiza dinamicamente para a página correspondente.
- **Modificação de Comportamento:**
  - *Antes:* O header trocava seus links internos dependendo de qual página o usuário estava visitando (ex: ao entrar na Rocinha, exibia âncoras da página).
  - *Depois:* O header mantém sua identidade visual de pílula flutuante e a lista fixa de destinos e páginas principais em todo o site.

---

## [2026-09-02] - Cards da Vitrine Linkando Exclusivamente para as Páginas dos Tours

### 1. Navegação Exclusiva para Páginas de Detalhes (`PortalServices.tsx`)
- **O que foi feito:**
  - Atualizados todos os 4 cards da vitrine de serviços para terem um único botão de ação claro (*"Conhecer o Tour"*) que direciona o visitante para a página específica de cada passeio:
    - **Tour Rocinha** → [`/rocinha`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/rocinha/page.tsx)
    - **Tour Vidigal & Morro Dois Irmãos** → [`/vidigal`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/vidigal/page.tsx)
    - **Rio Tour Completo** → [`/rio-tour`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/rio-tour/page.tsx)
    - **Baile Funk** → [`/bailes`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/bailes/page.tsx)
  - Tornou-se também a imagem e o título dos cards totalmente clicáveis com navegação suave para a respectiva página.
  - Removidos os botões de WhatsApp diretos dos cards da vitrine na página inicial.
- **Como funciona:**
  - O usuário acessa a página inicial, lê o resumo e, ao clicar no card ou no botão *"Conhecer o Tour"*, é levado à página detalhada daquele tour com fotos, roteiro passo a passo, pontos de parada e o formulário de agendamento próprio.
- **Modificação de Comportamento:**
  - *Antes:* Alguns cards possuíam botões diretos para o WhatsApp e outros botões divididos.
  - *Depois:* Todos os 4 cards possuem um padrão visual idêntico e consistente, com botão único *"Conhecer o Tour"* direcionando para a página dedicada do passeio.

---

## [2026-09-02] - Remoção da Seção "Diferenciais" da Página Inicial

### 1. Simplificação do Fluxo da Página Inicial (`src/app/page.tsx` e `Navbar.tsx`)
- **O que foi feito:**
  - Removida a seção de diferenciais/pilares (*"Turismo Autêntico, Seguro e Consciente"* / `PortalWhyUs.tsx`) da página inicial (`src/app/page.tsx`).
  - Removido o link correspondente *"Diferenciais"* da barra de navegação superior (`src/components/Navbar.tsx`).
- **Como funciona:**
  - A página inicial agora é ainda mais enxuta, focada diretamente no catálogo de passeios e no FAQ/Contato para atendimento ágil pelo WhatsApp.
- **Modificação de Comportamento:**
  - *Antes:* A página inicial continha a seção de 4 cards de diferenciais e banner de roteiro sob medida após a vitrine de passeios.
  - *Depois:* A vitrine de passeios conecta-se diretamente ao rodapé/FAQ global, tornando a navegação mais rápida e concisa no mobile.

---

## [2026-09-02] - Remoção de Títulos e Tags Flutuantes nos Cards de Serviços

### 1. Limpeza Visual dos Cards de Passeios (`PortalServices.tsx`)
- **O que foi feito:**
  - Removidas as tags flutuantes sobre as imagens dos cards (*"Vida Noturna & Ritmo"*, *"Mais Procurado • Imersão Cultural"*, *"Aventura & Vista Panorâmica"*, *"Cidade Maravilhosa • Clássicos"*).
  - Simplificados os títulos dos passeios nos 4 idiomas para torná-los diretos, limpos e sem poluição visual (*"Tour Rocinha"*, *"Tour Vidigal & Morro Dois Irmãos"*, *"Rio Tour Completo"*, *"Baile Funk"*).
- **Como funciona:**
  - Os cards agora exibem a imagem panorâmica limpa com o ícone temático no canto superior direito e o título principal em destaque na base da foto, deixando o layout mais moderno, espaçoso e rápido de ler.
- **Modificação de Comportamento:**
  - *Antes:* Cada foto possuía uma tag/etiqueta colorida no topo (ex: "Vida Noturna & Ritmo").
  - *Depois:* As tags foram eliminadas, mantendo o foco total no nome do tour, na fotografia e nos benefícios listados.

---

## [2026-09-02] - Implementação do Portal Inicial Multi-Serviços (Mobile-First) e Preservação da Página Rocinha

### 1. Criação do Portal Hub na Raiz (`/` - `src/app/page.tsx`)
- **O que foi feito:**
  - A rota principal (`/`) foi transformada em um portal multi-serviços da **Cactus Turismo**, apresentando de forma direta e visualmente atraente todos os 4 serviços da empresa com foco prioritário em dispositivos móveis.
  - Desenvolvidos os componentes modulares em `src/components/portal/`:
    - [`PortalHero.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/portal/PortalHero.tsx): Hero com título animado, chips rápidos de categorias (*Favela Tours*, *Trilhas & Mirantes*, *City Tour*, *Noite Carioca*) e métricas de confiança.
    - [`PortalServices.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/portal/PortalServices.tsx): Vitrine com 4 cartões de leitura rápida contendo fotos, tags de destaque, bullet points e botões de ação:
      1. **Tour Rocinha (Favela Experience):** Imersão cultural na maior favela do Brasil → Botão *"Ver Roteiro Rocinha"* (leva para `/rocinha`) + *"Agendar no WhatsApp"*.
      2. **Tour Vidigal & Trilha Morro Dois Irmãos:** Subida de moto-táxi e vista 360° da Zona Sul → Botão *"Agendar Trilha no WhatsApp"*.
      3. **Rio Tour Completo (City Tour):** Cristo Redentor, Escadaria Selarón, Santa Teresa, Arcos da Lapa e praias → Botão *"Agendar City Tour no WhatsApp"*.
      4. **Baile Funk Carioca Experience:** Vivência autêntica e segura com anfitrião local e área VIP → Botão *"Reservar Baile no WhatsApp"*.
    - [`PortalWhyUs.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/portal/PortalWhyUs.tsx): 4 pilares de confiança (Condutores Nativos, Segurança em 1º Lugar, Impacto Social Direto, Atendimento Direto sem Taxas Ocultas) e banner para criação de roteiro personalizado.
    - [`PortalFooter.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/portal/PortalFooter.tsx): FAQ global abrangendo dúvidas de pagamento, segurança, combinação de pacotes e idiomas.
- **Como funciona:**
  - Ao acessar o site pela primeira vez (especialmente pelo celular), o visitante entende instantaneamente todos os serviços oferecidos pela empresa logo na primeira dobra e rolagem rápida.
- **Modificação de Comportamento:**
  - *Antes:* A página inicial (`/`) exibia exclusivamente a narrativa detalhada do Tour Rocinha.
  - *Depois:* A página inicial (`/`) é o hub de todos os passeios do Rio de Janeiro da Cactus Turismo.

### 2. Preservação Integral da Página Dedicada da Rocinha (`/rocinha` - `src/app/rocinha/page.tsx`)
- **O que foi feito:**
  - Criada a rota [`/rocinha`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/rocinha/page.tsx) contendo 100% da experiência detalhada e interativa anteriormente desenvolvida: calendário interativo com seletor de datas e entrada de nome, narrativa em Z (O Miolo, Arte e A Base), trilha SVG animada, badges e FAQ dedicado da Rocinha.
- **Como funciona:**
  - O usuário que clica em *"Ver Roteiro Rocinha"* no portal ou acessa diretamente `/rocinha` navega pela experiência aprofundada da favela sem nenhuma perda de funcionalidade ou design.

### 3. Atualização da Barra de Navegação Adaptativa ([`Navbar.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/Navbar.tsx))
- **O que foi feito:**
  - O componente de navegação agora detecta dinamicamente a rota ativa (`/`, `/rocinha` e `/agendar`), exibindo os links contextuais adequados e permitindo transitar entre os serviços e o tour específico.

### 4. Internacionalização em 4 Idiomas e Links de WhatsApp Dinâmicos
- **O que foi feito:**
  - Adicionadas chaves de tradução completas do portal em [`pt.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/pt.json), [`en.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/en.json), [`es.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/es.json) e [`de.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/de.json).
  - Adicionada a função helper `getTourWhatsAppLink(tour, lang)` em [`src/lib/whatsapp.ts`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/lib/whatsapp.ts) com mensagens pré-formatadas para cada experiência.

---

## [2026-08-27] - Otimização de Responsividade Mobile e Correção da Notificação de Idioma

### 1. Correção do Posicionamento da Notificação de Idioma no Header
- **O que foi feito:**
  - Corrigido o posicionamento da notificação flutuante de detecção de idioma em [`Navbar.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/Navbar.tsx).
  - Em telas mobile (`< 640px`), o balão se ajusta automaticamente entre as margens da tela (`fixed left-3 right-3 top-[4.75rem]`).
  - Atualizada a persistência de sessão em [`LanguageContext.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/context/LanguageContext.tsx).

---

## [2026-08-27] - Tradução Multilíngue Completa na Página de Agendamento (`/agendar`)
- Adicionado o bloco de chaves `"bookingPage"` nos 4 arquivos de tradução.

---

## [2026-08-27] - Página Própria de Agendamento com Suporte a Múltiplos Tours (`/agendar`)
- Criada a rota dedicada [`/agendar`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/agendar/page.tsx) e componente [`MultiTourBookingPage.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/booking/MultiTourBookingPage.tsx).

---

## [2026-08-17] - Correção de Acessibilidade (WAVE), Relação de Contraste (WCAG AA/AAA) e Estrutura Semântica
- Correção de labels de formulário, hierarquia de cabeçalhos e cores de contraste no modo claro e escuro.
