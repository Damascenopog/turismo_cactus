# CONTEXTO DO PROJETO - CACTUS TURISMO & TOUR ROCINHA

## Visão Geral
Portal institucional e de vendas para a **Cactus Turismo** no Rio de Janeiro. A plataforma opera como um ecossistema integrado:
1. **Página Inicial / Hub Multi-Serviços (`/`):** Apresenta de forma resumida, ágil e focada em dispositivos móveis todos os passeios e serviços oferecidos pela empresa no Rio de Janeiro.
2. **Página Dedicada Tour Rocinha (`/rocinha`):** Experiência narrativa completa e imersiva com calendário interativo, trilha de pegadas SVG animada, seções Zig-Zag e detalhes culturais da maior favela da América Latina.
3. **Página de Agendamento Central (`/agendar`):** Página de reserva multi-tours com seleção combinada de pacotes.

## Catálogo de Serviços Apresentados no Portal
- 🎨 **1. Tour Rocinha (Favela Experience):** Imersão cultural nas vielas, mirante 360°, murais de grafite e gastronomia local com condutores nativos. Link dedicado para `/rocinha`.
- 🏔️ **2. Tour Vidigal & Trilha Morro Dois Irmãos:** Subida autêntica de moto-táxi pelo Vidigal seguida de caminhada guiada com vista panorâmica da Zona Sul.
- 🏛️ **3. Rio Tour Completo (City Tour & Clássicos):** Cristo Redentor, Escadaria Selarón, Santa Teresa, Arcos da Lapa e praias em transporte privativo confortável.
- 🎶 **4. Baile Funk Carioca Experience:** Vivência autêntica e segura com anfitrião local, acesso VIP seguro e imersão na cultura musical comunitária.

## Público-Alvo e UX Mobile-First
- Turistas brasileiros e internacionais visitando o Rio de Janeiro.
- Acesso predominantemente via smartphones em conexões móveis -> Foco total em **Performance Mobile-First**, carregamento rápido, cartões de leitura instantânea e CTAs diretos via WhatsApp.

## Diretrizes de Arquitetura Visual e Layout
1. **Página Inicial (`/`):**
   - **Hero Mobile-First:** Fotografia panorâmica dinâmica com chips rápidos de navegação.
   - **Vitrine de Serviços:** Cartões compactos de alto contraste com badges de duração, destaques e botões de ação.
   - **Pilares de Confiança:** Condutores nativos, segurança, impacto social direto e atendimento sem taxas ocultas.
   - **FAQ Global & Banner Personalizado:** Agendamento rápido e tira-dúvidas.
2. **Página Tour Rocinha (`/rocinha`):**
   - **Narrativa em Zig-Zag & Trilha de Pegadas SVG:** Animação dinâmica vinculada ao scroll que conecta os blocos narrativos.
   - **Agendamento Interativo:** Calendário dinâmico com seleção de data, contagem de pessoas e entrada de nome com geração de mensagem no WhatsApp.
3. **Página Central de Agendamento (`/agendar`):**
   - Seleção interativa de 1 ou múltiplos tours com cálculo e pré-preenchimento para o WhatsApp.

## Internacionalização (i18n) - 4 Idiomas
1. **PT** - Português (Brasil) [Default]
2. **EN** - English
3. **ES** - Español
4. **DE** - Deutsch

## Paleta de Cores e Temas (Light / Dark Mode)
- **Amarelo Sol / Gold (Brand Primary):**
  - Light Mode: `#D97706` (Alto contraste WCAG AA/AAA sobre fundos claros)
  - Dark Mode: `#FBBF24` (Amarelo vibrante sobre fundos escuros)
- **Azul Rio / Deep Ocean Blue (Brand Accent Blue):**
  - Light Mode: `#1E40AF` / `#2563EB`
  - Dark Mode: `#60A5FA` / `#3B82F6`
- **Verde Mata / Esmeralda (Secondary):**
  - Light Mode: `#047857` / `#059669`
  - Dark Mode: `#10B981`
