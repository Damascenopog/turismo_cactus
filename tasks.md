# BACKLOG DE TAREFAS - TOUR ROCINHA

## Fase 1: Setup e Infraestrutura
- [x] Inicializar projeto Next.js com Tailwind CSS e TypeScript.
- [x] Configurar roteamento de internacionalização (i18n) para PT, EN, ES, DE.
- [x] Criar estrutura de arquivos de tradução (`.json`).
- [x] Configurar provedor de Tema (Light/Dark Mode) no Tailwind (ex: `next-themes`).
- [x] Configurar variáveis CSS globais com a paleta de cores definida no CONTEXT.md.

## Fase 2: Componentes Core e Layout Base
- [x] Criar o Navbar responsivo com seletor de idioma e botão de troca de tema.
- [x] Criar o botão flutuante de CTA para o WhatsApp.
- [x] Configurar utilitário de link dinâmico para WhatsApp (gerando mensagem baseada no idioma selecionado).

## Fase 3: Desenvolvimento da Narrativa (Seções)
- [x] Desenvolver **Hero Section** (Topo).
- [x] Desenvolver Seção **O Miolo** (Vielas).
- [x] Desenvolver Seção **Arte & Cultura** (com componentes de pins/hotspots).
- [x] Desenvolver Seção **A Base** (Comércio e desfecho).
- [x] Desenvolver Footer com FAQ e blocos de confiabilidade/segurança.

## Fase 4: Animações de Scroll (Imersão)
- [x] Instalar GSAP/Framer Motion.
- [x] Implementar transições de opacidade e movimento atreladas ao scroll entre as 4 seções.
- [x] Garantir que o scroll parallax seja desativado ou suavizado em telas mobile menores para evitar travamentos.

## Fase 5: Refinamento e Deploy
- [x] Revisar acessibilidade (contraste do amarelo no tema claro).
- [x] Testes de layout em resolução Mobile (Mobile-first check).
- [x] Preparar configuração e realizar deploy na Vercel.