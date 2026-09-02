# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA & CACTUS TURISMO

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comunidade em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

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
