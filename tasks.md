# BACKLOG DE TAREFAS - TOUR ROCINHA & CACTUS TURISMO

## Fase 1: Setup e Infraestrutura
- [x] Inicializar projeto Next.js com Tailwind CSS e TypeScript.
- [x] Configurar roteamento de internacionalização (i18n) para PT, EN, ES, DE.
- [x] Criar estrutura de arquivos de tradução (`.json`).
- [x] Configurar provedor de Tema (Light/Dark Mode) no Tailwind (ex: `next-themes`).
- [x] Configurar variáveis CSS globais com a paleta de cores definida no CONTEXT.md.

## Fase 2: Componentes Core e Layout Base
- [x] Criar o Navbar responsivo com seletor de idioma e botão de troca de tema.
- [x] Atualizar Navbar para exibir: Logo, Rocinha, Vidigal e Rio Tour.
- [x] Criar o botão flutuante de CTA para o WhatsApp.
- [x] Configurar utilitário de link dinâmico para WhatsApp (gerando mensagem baseada no idioma selecionado).

## Fase 3: Desenvolvimento da Narrativa (Seções em Padrão Zig-Zag)
- [x] Desenvolver **Hero Section** (Topo) com fotografia HD dia/noite e animação DiaTextReveal.
- [x] Adicionar CTA **"Conheça o Roteiro"** ancorando nas seções do tour (`#roteiro`).
- [x] Desenvolver **Seção de Agendamento Interativo** com Calendário de Datas, Nome do Turista e WhatsApp Dinâmico.
- [x] Desenvolver Seção de Estatísticas Horizontal (**StatsSection**).
- [x] Desenvolver grid alternado (Zig-Zag) para as seções do Miolo, Cultura e Base (Desktop) e empilhado (Mobile).
- [x] Desenvolver Seção **O Miolo** (Vielas).
- [x] Desenvolver Seção **Arte & Cultura** (com componentes de pins/hotspots e fotos reais).
- [x] Desenvolver Seção **A Base** (Comércio e desfecho).
- [x] Desenvolver Footer com FAQ e blocos de confiabilidade/segurança.

## Fase 4: Animações de Scroll & Pegadas SVG (Imersão)
- [x] Instalar GSAP/Framer Motion.
- [x] Vetorizar ícones minimalistas de sola de sapato em SVG respeitando o Design System.
- [x] Criar a animação SVG do caminho das pegadas utilizando GSAP ScrollTrigger / Framer Motion e a manipulação da propriedade stroke-dashoffset (curvo no Desktop, timeline vertical no Mobile).
- [x] Implementar animação fluida para âncoras com enquadramento centralizado no viewport (`SmoothScrollProvider.tsx`).
- [x] Garantir que a animação de scroll seja desativada ou suavizada em preferências de reduced-motion para evitar travamentos.

## Fase 5: Portal Inicial Multi-Serviços (Mobile-First Hub)
- [x] Criar a nova página inicial em `/` (`src/app/page.tsx`) com foco prioritário em dispositivos móveis.
- [x] Preservar integralmente a página detalhada e interativa do Tour Rocinha em `/rocinha` (`src/app/rocinha/page.tsx`).
- [x] Desenvolver vitrine resumida de 4 serviços (`PortalServices.tsx`): Tour Rocinha, Tour Vidigal & Dois Irmãos, Rio Tour Completo e Baile Funk Carioca.
- [x] Desenvolver Hero Section do Portal com chips rápidos de categoria (`PortalHero.tsx`).
- [x] Desenvolver seção de diferenciais da marca e banner de roteiro personalizado (`PortalWhyUs.tsx`).
- [x] Desenvolver FAQ global e rodapé corporativo (`PortalFooter.tsx`).
- [x] Adaptar navegação contextual no `Navbar.tsx` para suporte dinâmico a rotas `/` e `/rocinha`.
- [x] Adicionar suporte aos 4 idiomas (PT, EN, ES, DE) para todos os novos componentes do portal.

## Fase 6: Refinamento, Acessibilidade e Deploy
- [x] Revisar acessibilidade (contraste WCAG 2.2 AA/AAA e conformidade WAVE).
- [x] Auditoria com a skill Impeccable (0 anti-patterns).
- [x] Testes de layout em resolução Mobile (Mobile-first check).
- [x] Deploy e sincronização no GitHub.