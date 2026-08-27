# CONTEXTO DO PROJETO - TOUR ROCINHA (CACTUS TURISMO)

## Visão Geral
Landing page imersiva para o **Tour Rocinha** da Cactus Turismo. O objetivo é apresentar a experiência autêntica, segura e cultural do passeio na Rocinha, oferecendo agendamento direto via WhatsApp para turistas locais e internacionais.

## Público-Alvo e UX Mobile-First
- Turistas brasileiros e internacionais visitando o Rio de Janeiro.
- Acesso predominantemente via smartphones em conexões móveis -> Foco total em **Performance Mobile-First**, carregamento rápido e micro-interações fluidas.

## Diretrizes de Arquitetura Visual e Layout (Zig-Zag & Fotografia)
1. **Hero Section Panorâmica:** Exibe fotografia panorâmica HD dinâmica (foto diurna no Light Mode e noturna no Dark Mode) com overlay escuro sutil e uniforme (sem névoa esbranquiçada inferior no modo claro) e tipografia de alto contraste.
1.1 **Header & Navegação (`Navbar.tsx`):** Exibe a marca (*Tour Cactus | Turismo pela Rocinha • Rio*) e foca nos 3 destinos principais: **Rocinha**, **Vidigal** e **Rio Tour**, além dos controles de idioma, tema e CTA direto para WhatsApp.
1.2 **Seção Horizontal de Estatísticas (`StatsSection.tsx`):** Localizada logo abaixo da Hero Section, exibe os 3 indicadores de prova social de forma 100% horizontal com divisores elegantes e ícones com micro-animação de hover.
2. **Seção Arte & Cultura (`ArteSection.tsx`):** Mural interativo que exibe fotografias reais associadas a cada modalidade: [`hexa.jpg`](file:///home/damasceno/Documentos/Code/turismo_cactus/public/image/hexa.jpg) em **"Arte pintada no chão"** e [`crianca_futebol.jpg`](file:///home/damasceno/Documentos/Code/turismo_cactus/public/image/crianca_futebol.jpg) em **"Cultura & Vivência"**.
3. **Responsividade Mobile:** No mobile, os blocos são empilhados em uma única coluna vertical limpa (imagem acima, texto abaixo).
4. **Fotografia com Espaço Negativo:** As imagens e ilustrações utilizam forte "espaço negativo" (áreas vazias, como céu, mar ou asfalto) para alocação de textos e títulos com contraste elevado e máxima legibilidade.
5. **Trilha de Pegadas SVG (Animação de Scroll):**
   - O indicador de progresso do tour ao longo da página é representado por ilustrações minimalistas de "solas de sapato" vetorizadas (SVG).
   - **Desktop:** As pegadas criam um trajeto curvo interligando os blocos alternados em "Z".
   - **Mobile:** As pegadas formam uma linha reta alinhada na margem esquerda (timeline vertical).
   - **Comportamento:** O preenchimento do vetor/trilha (`stroke-dashoffset`) ocorre dinamicamente no ritmo do scroll do visitante.

## Internacionalização (i18n) - 4 Idiomas
1. **PT** - Português (Brasil) [Default]
2. **EN** - English
3. **ES** - Español
4. **DE** - Deutsch

## Paleta de Cores e Temas (Light / Dark Mode)

### Variáveis e Tokens de Design
- **Amarelo Sol / Gold (Brand Primary):**
  - Light Mode: `#D97706` (Ajustado para alto contraste sobre fundos claros)
  - Dark Mode: `#FBBF24` (Amarelo vibrante e vivo sobre fundos escuros)
- **Azul Rio / Deep Ocean Blue (Brand Accent Blue):**
  - Light Mode: `#1E40AF` (Royal Ocean Blue) / `#2563EB` (Bright Cobalt Accent)
  - Dark Mode: `#60A5FA` / `#3B82F6` (Sky / Electric Blue)
- **Verde Mata / Esmeralda (Secondary):**
  - Light Mode: `#047857`
  - Dark Mode: `#10B981`
- **Terracota / Coral (Accent):**
  - Light Mode: `#BE123C`
  - Dark Mode: `#F43F5E`

### Fundos e Superfícies
- **Dark Mode:**
  - Background Principal: `#0B0F17` (Obsidian Night)
  - Superfícies / Cards: `#161F30` (Deep Blue Slate)
  - Bordas / Divisores: `#1E293B`
  - Texto Primário: `#F8FAFC`
  - Texto Secundário: `#94A3B8`

- **Light Mode:**
  - Background Principal: `#FAF8F5` (Warm Sand Canvas)
  - Superfícies / Cards: `#FFFFFF` (Pure White)
  - Bordas / Divisores: `#E2E8F0`
  - Texto Primário: `#0F172A` (Navy Slate)
  - Texto Secundário: `#475569`
