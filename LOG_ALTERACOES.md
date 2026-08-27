# LOG DE ALTERAÇÕES E FUNCIONAMENTO - TOUR ROCINHA

## Regra de Documentação
> **Importante:** Qualquer nova tarefa, funcionalidade extra ou alteração de comunidade em relação ao planejamento original deve ser registrada neste documento e nos arquivos do projeto (`tasks.md`, `context.md`), detalhando **o que foi feito**, **como funciona** e **quais comportamentos anteriores foram modificados**.

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
