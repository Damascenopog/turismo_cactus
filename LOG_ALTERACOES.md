# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comportamento em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

## [2026-08-17] - Integração do Componente `DiaTextReveal` no Hero (`HeroSection.tsx`)

### 1. Efeito de Revelação de Texto com Cores da Bandeira do Brasil
- **O que foi feito:**
  - Criado o componente [`dia-text-reveal.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/ui/dia-text-reveal.tsx) baseado na especificação do Magic UI (Dia Text Reveal).
  - Integrado ao título principal do Hero em [`HeroSection.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/sections/HeroSection.tsx) percorrendo a frase *"Descubra a Rocinha com Quem Vive Aqui"*.
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
  - Alterado o título da marca no cabeçalho em [`Navbar.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/Navbar.tsx) para **"Tour Cactus"** em destaque verde (`text-emerald-500` / `dark:text-emerald-400`).
  - Alterado o subtítulo logo abaixo para **"Turismo pela Rocinha • Rio"**.
  - Removido o ícone/bloco de símbolo de cacto do cabeçalho conforme solicitação.
- **Como funciona:**
  - O cabeçalho exibe a marca com tipografia limpa "Tour Cactus" e o subtítulo explicativo "Turismo pela Rocinha • Rio".
- **Modificação de Comportamento:**
  - *Antes:* Havia um ícone/quadrado colorido com o emoji/símbolo de cacto ao lado da marca.
  - *Depois:* O ícone de cacto foi removido, exibindo a marca em texto direto de alta legibilidade.

---

## [2026-08-11] - Associação das Fotos Reais aos Murais (`hexa.jpg` e `crianca_futebol.jpg`)

### 1. Atualização do Mural de Arte & Cultura (`ArteSection.tsx`)
- **O que foi feito:**
  - Associada a imagem [`/image/hexa.jpg`](file:///home/damasceno/Documentos/Code/turismo_cactus/public/image/hexa.jpg) à categoria **"Arte pintada no chão"** (Grafite e intervenções de rua no asfalto).
  - Associada a imagem [`/image/crianca_futebol.jpg`](file:///home/damasceno/Documentos/Code/turismo_cactus/public/image/crianca_futebol.jpg) à categoria **"Cultura & Vivência"** (Futebol de rua e cotidiano da favela).
  - Associada a imagem [`/image/esquina_casas.jpg`](file:///home/damasceno/Documentos/Code/turismo_cactus/public/image/esquina_casas.jpg) à categoria **"Gastronomia & Esquinas"** e à seção [`MioloSection.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/sections/MioloSection.tsx).
  - Removidas as legendas/subtítulos (*"Arte pintada no chão"*, *"Cultura & Vivência"*, *"Sabor da Favela"*) dos cartões e tags em [`ArteSection.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/sections/ArteSection.tsx) a pedido do usuário.
  - Mantidas as fotografias reais correspondentes de fundo e ajustada a responsividade móvel de todos os componentes.
- **Como funciona:**
  - No mural interativo de [`ArteSection.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/sections/ArteSection.tsx), o layout exibe agora apenas o título limpo e a descrição traduzida de cada pin, mantendo a foto real de alta qualidade em destaque.
- **Modificação de Comportamento:**
  - *Antes:* Cada cartão possuía um badge extra com subtítulo (ex: "Arte pintada no chão").
  - *Depois:* As legendas foram removidas, deixando a apresentação mais limpa.

---

## [2026-08-11] - Nova Seção Horizontal de Estatísticas e Métricas (`StatsSection.tsx`)

### 1. Criação do Componente `StatsSection.tsx` e Integração
- **O que foi feito:**
  - Criado o componente [`StatsSection.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/sections/StatsSection.tsx) para abrigar a barra de métricas e prova social de forma 100% horizontal.
  - Removido o bloco interno de estatísticas da [`HeroSection.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/sections/HeroSection.tsx).
  - Incluída a [`StatsSection.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/sections/StatsSection.tsx) em [`page.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/app/page.tsx) logo abaixo da Hero.
- **Como funciona:**
  - Exibe os três indicadores (*"Mais de 10.000 turistas acolhidos"*, *"Guias locais certificados"*, *"Avaliação 4.9/5★"*) alinhados horizontalmente em um container de borda a borda com divisores sutis e adaptado aos temas Dark/Light.
- **Modificação de Comportamento:**
  - *Antes:* Os dados ficavam acoplados na parte inferior da HeroSection sobre a imagem de fundo.
  - *Depois:* Os dados agora possuem uma seção horizontal própria e dedicada com fundo neutro, dando maior respiro e destaque às métricas.

---

## [2026-08-11] - Substituição da Hero Section por Imagem Panorâmica com Desfoque (Referência Santorini/Guesthouse)

### 1. Atualização do Componente HeroSection (`HeroSection.tsx`)
- **O que foi feito:**
  - Substituídos os círculos decorativos (*glows*) abstratos do fundo da Hero pela imagem panorâmica [`/image/topo_light.jpg`](file:///home/damasceno/Documentos/Code/turismo_cactus/public/image/topo_light.jpg).
  - Adicionada a nova fotografia panorâmica de alta definição noturna da Rocinha em [`public/image/hero_rocinha_night_hd.jpg`](file:///home/damasceno/Documentos/Code/turismo_cactus/public/image/hero_rocinha_night_hd.jpg).
  - Configurada a alternância dinâmica de fundo no [`HeroSection.tsx`](file:///home/damasceno/Documentos/Code/turismo_cactus/src/components/sections/HeroSection.tsx): o **Light Mode** exibe a foto diurna (`hero_rocinha_hd.jpg`) e o **Dark Mode** exibe a foto noturna (`hero_rocinha_night_hd.jpg`).
  - Corrigido o overlay gradiente no **Light Mode**: removida a transição para `var(--bg-primary)` (que causava uma névoa/esbranquiçado forte na base da imagem), mantendo um tom escuro sutil e uniforme (`from-slate-950/50 via-slate-950/20 to-slate-950/40`) para visual 100% limpo, natural e de alto contraste.
  - Removidas as pílulas/badges superiores ("Rio de Janeiro • Favela Tour" e "Experiência Autêntica & Segura") a pedido do usuário.
  - Atualizados os cartões de estatísticas e textos para tipografia em alto contraste com efeito *glassmorphism* (`backdrop-blur-md bg-slate-900/60`).
- **Como funciona:**
  - O componente `next/image` carrega a imagem panorâmica preenchendo a tela inteira em modo `object-cover`.
  - Uma camada de overlay escuro gradiente sobrepõe a imagem para garantir a máxima legibilidade do texto e dos botões CTA.
- **Modificação de Comportamento:**
  - *Antes:* O Hero possuía pílulas/badges no topo e manchas decorativas abstratas de fundo.
  - *Depois:* O Hero agora exibe a imagem panorâmica limpa de fundo com foco direto no título, subtítulo e botões CTA.

---

## [2026-08-10] - Nova Arquitetura Visual (Grid Zig-Zag & Trilha de Pegadas SVG)

### 1. Atualização das Diretrizes de Arquitetura em CONTEXT.md e TASKS.md
- **O que foi feito:**
  - Atualizado o [`context.md`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/context.md) eliminando a dependência de vídeos contínuos de fundo ou canvas pesados.
  - Atualizado o [`tasks.md`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/tasks.md) adicionando as novas tarefas do Grid Zig-Zag, vetorização de solas de sapato SVG e animação de trilha de pegadas por `stroke-dashoffset`.

### 2. Padrão de Layout Alternado Zig-Zag (Desktop) e Empilhado (Mobile)
- **O que foi feito:**
  - Reformulados os componentes [`MioloSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/MioloSection.tsx) e [`ArteSection.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/sections/ArteSection.tsx).
- **Como funciona:**
  - **Desktop (Grid Zig-Zag em Z):** As seções alternam a posição de imagem/mídia e texto (Ex: Bloco 1 com mídia na esquerda e texto na direita; Bloco 2 com texto na esquerda e mapa na direita).
  - **Mobile:** Os blocos empilham-se automaticamente em uma coluna vertical limpa (imagem no topo, texto abaixo) mantendo o foco mobile-first.
  - **Espaço Negativo em Fotografia:** Os blocos de mídia utilizam composição com áreas livres para destaque de títulos e cartões de informação com alto contraste.
- **Modificação de Comportamento:**
  - *Antes:* As seções utilizavam apenas um grid reto centralizado de cartões.
  - *Depois:* O layout agora forma uma narrativa sequencial em "Z" (Zig-Zag) guiando o olhar do leitor.

### 3. Vetorização de Ícones de Sola de Sapato SVG e Animação de Scroll (`FootprintTrail.tsx`)
- **O que foi feito:**
  - Criado o vetor de sola de sapato minimalista em [`ShoeFootprint.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/ui/ShoeFootprint.tsx).
  - Criado o componente de trilha de scroll em [`FootprintTrail.tsx`](file:///c:/Users/arfda/Documents/Code/Projetos/turismo_cactus/src/components/animations/FootprintTrail.tsx).
- **Como funciona:**
  - O vetor do trajeto monitora o progresso do scroll do visitante e preenche a propriedade `stroke-dashoffset` dinamicamente no ritmo da rolagem da página.
  - **Desktop:** A linha de pegadas SVG forma uma curva suave conectando os blocos alternados do padrão em "Z".
  - **Mobile:** A linha de pegadas transforma-se em uma timeline vertical reta na margem esquerda.
  - As pegadas SVG em pontos-chave da página ganham opacidade e destaque à medida que o turista avança pelo tour.

---

## [2026-08-10] - Adição do Conjunto de Skills (antigravity-skills)

### 1. Instalação das Skills do Antigravity Vault (rmyndharis/antigravity-skills)
- **O que foi feito:**
  - Instalado o repositório `rmyndharis/antigravity-skills` contendo mais de 300 skills no diretório `.agents/skills/`.

---

## [2026-08-10] - Setup Inicial, Componentes Core e Imersão Impeccable

### 1. Suporte a 4 Idiomas (i18n) e Correção de Título Dinâmico
- **O que foi feito:**
  - Criada a infraestrutura de i18n com `LanguageContext.tsx` e arquivos de tradução em JSON (`pt.json`, `en.json`, `es.json`, `de.json`).

### 2. Tema Claro e Escuro (Dark/Light Mode) com Token "Azul Rio"
- **O que foi feito:**
  - Configurado `next-themes` e registradas as variáveis CSS no `globals.css` com o tom **Azul Rio / Ocean Blue** (`#1E40AF` / `#2563EB`).

### 3. Integração com WhatsApp Dinâmico
- **O que foi feito:**
  - Criado o utilitário `src/lib/whatsapp.ts` e o componente flutuante `WhatsAppButton.tsx`.

### 4. Análise e Auditoria de Design (Skill Impeccable)
- **O que foi feito:**
  - Auditoria de anti-patterns com o script `detect.mjs` (0 avisos/erros).
