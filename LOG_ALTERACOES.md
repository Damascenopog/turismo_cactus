# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA & CACTUS TURISMO

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comunidade em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

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
