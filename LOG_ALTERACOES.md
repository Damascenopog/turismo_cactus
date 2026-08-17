# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comportamento em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

## [2026-08-17] - Adição do CTA "Conheça o Roteiro" e Ancoragem da Jornada do Tour

### 1. Botão de CTA e Navegação para o Roteiro do Tour
- **O que foi feito:**
  - Adicionado o CTA secundário **"Conheça o Roteiro"** na [`HeroSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/HeroSection.tsx) com ícone de seta/exploração, apontando para a âncora `#roteiro`.
  - Adicionada a âncora `id="roteiro"` em [`MioloSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/MioloSection.tsx), que marca o início do trajeto do passeio (O Miolo -> Arte & Cultura -> A Base).
  - Adicionado um banner/link auxiliar no rodapé do cartão de agendamento em [`BookingSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/BookingSection.tsx) (*"Quer ver o que está incluso no passeio antes de agendar? Conheça o Roteiro Completo ↓"*).
  - Atualizadas as traduções da chave `ctaItinerary` em todos os idiomas:
    - **PT:** *"Conheça o Roteiro"*
    - **EN:** *"Explore the Itinerary"*
    - **ES:** *"Conoce el Itinerario"*
    - **DE:** *"Reiseplan entdecken"*
- **Como funciona:**
  - Ao clicar no botão *"Conheça o Roteiro"*, a página faz uma rolagem suave direto para o início da narrativa do tour (Vielas, Mirante do Laboriaux, Arte e Gastronomia), permitindo que o visitante compreenda toda a experiência antes de fechar a data.
- **Modificação de Comportamento:**
  - *Antes:* O botão secundário do Hero apontava para `#miolo` com o texto genérico *"Conhecer a Experiência"*.
  - *Depois:* O botão agora traz a chamada explícita e intuitiva *"Conheça o Roteiro"* ancorando suavemente no início da apresentação do tour.

---

## [2026-08-17] - Seção Interativa de Agendamento com Calendário e Nome (`BookingSection.tsx`)

### 1. Criação da Seção de Agendamento com Calendário e Entrada de Nome
- **O que foi feito:**
  - Criado o componente [`BookingSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/BookingSection.tsx) posicionado logo após a `HeroSection.tsx`.
  - Desenvolvido um calendário mensal interativo com navegação entre meses, seleção de dias, desativação de datas passadas e botões de atalho rápido (*"Amanhã"*, *"Próximo Sábado"*, *"Próximo Domingo"*).
  - Adicionado campo de entrada de nome completo do turista com ícone temático.
  - Adicionado seletor de contagem de hóspedes/participantes (1 a 20 pessoas).
  - Criado o helper [`getBookingWhatsAppLink`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/lib/whatsapp.ts) com mensagens formatadas dinamicamente nos 4 idiomas (PT, EN, ES, DE) incluindo o nome do cliente, data selecionada e total de pessoas.
  - Adicionadas as traduções da seção em todos os arquivos de idioma ([`pt.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/pt.json), [`en.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/en.json), [`es.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/es.json), [`de.json`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/locales/de.json)).
  - Adicionado o link de navegação `#booking` no menu do [`Navbar.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/Navbar.tsx).
- **Como funciona:**
  - O usuário informa seu nome, ajusta a quantidade de pessoas e clica na data desejada no calendário. O cartão de resumo atualiza em tempo real e o botão de WhatsApp gera um link direto já preenchido com a mensagem personalizada no idioma do visitante.
- **Modificação de Comportamento:**
  - *Antes:* O agendamento ocorria apenas por botões genéricos de CTA que abriam o WhatsApp com mensagem padrão sem data nem nome.
  - *Depois:* O usuário agora escolhe o dia exato no calendário e informa seu nome diretamente na landing page, enviando uma solicitação completa e profissional para o guia local.

---

## [2026-08-17] - Integração do Componente `DiaTextReveal` no Hero (`HeroSection.tsx`)

### 1. Efeito de Revelação de Texto com Cores da Bandeira do Brasil
- **O que foi feito:**
  - Criado o componente [`dia-text-reveal.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/ui/dia-text-reveal.tsx) baseado na especificação do Magic UI (Dia Text Reveal).
  - Integrado ao título principal do Hero em [`HeroSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/HeroSection.tsx) percorrendo a frase *"Descubra a Rocinha com Quem Vive Aqui"*.
  - Configurada a paleta com as cores oficiais da bandeira do Brasil: Verde Brasil (`#009c3b`), Amarelo Canário (`#ffdf00`), Branco (`#ffffff`) e Azul Celeste (`#002776`).
  - Configurada a animação para execução única (`repeat: false`) e configurada a transição para que, ao finalizar a passagem do gradiente, a frase mantenha *"Descubra a Rocinha com "* em branco e *"Quem Vive Aqui"* na sua cor amarela original de destaque (`var(--brand-yellow)`).
- **Como funciona:**
  - O gradiente das cores da bandeira do Brasil percorre todo o título uma única vez quando a página é carregada/visualizada. Assim que o efeito de sweep se conclui, o componente transiciona suavemente para o estado final com a tipografia estilizada e o trecho *"Quem Vive Aqui"* destacado em amarelo vibrante.
- **Modificação de Comportamento:**
  - *Antes:* A animação repetia em loop contínuo e fixava todo o texto em branco uniforme.
  - *Depois:* A animação executa uma única vez e restaura o destaque colorido do texto ("Quem Vive Aqui" em amarelo).

---

## [2026-08-17] - Atualização da Marca no Header (`Navbar.tsx`)

### 1. Alteração da Nomenclatura no Cabeçalho
- **O que foi feito:**
  - Alterado o título da marca no cabeçalho em [`Navbar.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/Navbar.tsx) para **"Tour Cactus"** em destaque verde (`text-emerald-500` / `dark:text-emerald-400`).
  - Alterado o subtítulo logo abaixo para **"Turismo pela Rocinha • Rio"**.
  - Removido o ícone/bloco de símbolo de cacto do cabeçalho conforme solicitação.

---

## [2026-08-11] - Associação das Fotos Reais aos Murais (`hexa.jpg` e `crianca_futebol.jpg`)

### 1. Atualização do Mural de Arte & Cultura (`ArteSection.tsx`)
- **O que foi feito:**
  - Associada a imagem [`/image/hexa.jpg`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/public/image/hexa.jpg) à categoria **"Arte pintada no chão"**.
  - Associada a imagem [`/image/crianca_futebol.jpg`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/public/image/crianca_futebol.jpg) à categoria **"Cultura & Vivência"**.
  - Associada a imagem [`/image/esquina_casas.jpg`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/public/image/esquina_casas.jpg) à categoria **"Gastronomia & Esquinas"** e à seção [`MioloSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/MioloSection.tsx).
  - Removidas as legendas/subtítulos dos cartões em [`ArteSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/ArteSection.tsx).

---

## [2026-08-11] - Nova Seção Horizontal de Estatísticas e Métricas (`StatsSection.tsx`)

### 1. Criação do Componente `StatsSection.tsx` e Integração
- **O que foi feito:**
  - Criado o componente [`StatsSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/StatsSection.tsx) para abrigar a barra de métricas e prova social de forma 100% horizontal.
  - Removido o bloco interno de estatísticas da [`HeroSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/HeroSection.tsx).
  - Incluída a [`StatsSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/StatsSection.tsx) em [`page.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/app/page.tsx) logo abaixo da Hero.

---

## [2026-08-10] - Nova Arquitetura Visual (Grid Zig-Zag & Trilha de Pegadas SVG)

### 1. Padrão de Layout Alternado Zig-Zag e Trilha SVG
- **O que foi feito:**
  - Grid alternado em "Z" em [`MioloSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/MioloSection.tsx) e [`ArteSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/ArteSection.tsx).
  - Trilha animada de pegadas em [`FootprintTrail.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/animations/FootprintTrail.tsx) com vetor [`ShoeFootprint.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/ui/ShoeFootprint.tsx).
