export interface TourStop {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export interface TourDetail {
  id: "rocinha" | "vidigal" | "rio-tour" | "bailes";
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  heroImageDark?: string;
  duration: string;
  meetingPoint: string;
  included: string[];
  stops: TourStop[];
}

export const toursData: Record<string, TourDetail> = {
  rocinha: {
    id: "rocinha",
    slug: "/",
    title: "Tour Rocinha",
    tagline: "Caminhada guiada por moradores para conhecer a rotina, mirantes e a vida real da maior favela do Brasil.",
    heroImage: "/image/hero_rocinha_hd.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "3 a 4 horas",
    meetingPoint: "Passarela da Rocinha (Metrô São Conrado)",
    included: [
      "Condutor local nascido e criado no morro",
      "Subida de mototáxi até o topo",
      "Acesso a todas as lajes e mirantes",
      "Parada para almoço ou lanche tradicional (opcional)"
    ],
    stops: [
      {
        id: "via-apia",
        number: 1,
        title: "Via Ápia",
        subtitle: "Ponto de encontro e centro comercial da comunidade",
        description: "A rua principal da Rocinha, onde o comércio funciona sem parar. Bancas de frutas, comida de rua, lojas e o vaivém constante dos moradores mostram o ritmo real do morro.",
        highlights: ["Comércio local", "Comida de rua", "Ponto de mototáxi"],
        images: [
          { src: "/image/esquina_casas.jpg", alt: "Comércio e movimento na Via Ápia da Rocinha", caption: "Movimento diário e comércio local" },
          { src: "/image/casasmorro-dark.jpg", alt: "Vista das ruas e casas da Rocinha", caption: "Arquitetura viva da favela" }
        ]
      },
      {
        id: "laje-moto",
        number: 2,
        title: "Laje da Moto",
        subtitle: "Ponto tradicional dos mototaxistas",
        description: "Parada clássica no meio do morro. Aqui você entende o papel do mototáxi no transporte diário da comunidade e tem a primeira vista ampla das encostas.",
        highlights: ["Cultura do mototáxi", "Primeira vista panorâmica", "Histórias da comunidade"],
        images: [
          { src: "/image/topo_light.jpg", alt: "Vista do alto da comunidade na Laje da Moto", caption: "Vista intermediária das vielas e casas" },
          { src: "/image/hero_rocinha_hd.jpg", alt: "Vista das encostas da Rocinha", caption: "Encostas da Rocinha" }
        ]
      },
      {
        id: "laje-drone",
        number: 3,
        title: "Laje do Drone",
        subtitle: "Mirante aberto para fotos panorâmicas",
        description: "Espaço no topo do morro com visão limpa de São Conrado, da Pedra da Gávea e de toda a extensão das casas descendo até o mar. O melhor ponto para fotos amplas.",
        highlights: ["Vista da Pedra da Gávea", "Fotos panorâmicas", "Visão geral da favela"],
        images: [
          { src: "/image/hero_rocinha_hd.jpg", alt: "Vista ampla da Rocinha e Pedra da Gávea", caption: "Visão panorâmica de São Conrado e Pedra da Gávea" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Visual noturno do morro", caption: "Visão noturna iluminada" }
        ]
      },
      {
        id: "mirante-novo-visual",
        number: 4,
        title: "Mirante Novo Visual",
        subtitle: "Ponto alto com vista para o mar de São Conrado",
        description: "Mirante localizado no setor alto da comunidade, de onde é possível ver o contraste entre o morro, a praia e a mata atlântica ao redor.",
        highlights: ["Vista 180° para a praia", "Brisa do mar", "Pausa para fotos e água de coco"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Mirante com vista para a costa e montanhas", caption: "Contraste entre o mar, a montanha e a favela" },
          { src: "/image/topo_light.jpg", alt: "Visual do alto da favela", caption: "Visual das casas no topo do morro" }
        ]
      },
      {
        id: "descida-vielas",
        number: 5,
        title: "Descida pela Favela",
        subtitle: "Caminhada livre pelos becos e vielas",
        description: "Descemos a pé sem pressa, passando por ruelas estreitas, murais de grafite, oficinas de arte e pequenos comércios. Uma conversa direta com quem mora aqui.",
        highlights: ["Caminhada a pé pelos becos", "Murais de arte urbana", "Conversa com comerciantes"],
        images: [
          { src: "/image/hexa.jpg", alt: "Pinturas de chão e murais coloridos", caption: "Arte de rua e chão pintado" },
          { src: "/image/crianca_futebol.jpg", alt: "Crianças jogando futebol e convivência local", caption: "Cultura e dia a dia dos moradores" }
        ]
      }
    ]
  },

  vidigal: {
    id: "vidigal",
    slug: "/vidigal",
    title: "Tour Vidigal",
    tagline: "Do mar ao topo do morro: prainha, mirantes icônicos e a melhor vista do litoral carioca.",
    heroImage: "/image/vistacristo-light.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "3 a 4 horas",
    meetingPoint: "Praça do Vidigal (Avenida Niemeyer)",
    included: [
      "Guia local experiente",
      "Subida de mototáxi ou van",
      "Paradas em todos os mirantes",
      "Dicas dos melhores bares e pontos gastronômicos"
    ],
    stops: [
      {
        id: "prainha-vidigal",
        number: 1,
        title: "Prainha do Vidigal",
        subtitle: "Praia aos pés do morro",
        description: "Ponto de partida aos pés da comunidade. Uma praia de águas claras encravada na rocha, frequentada pelos moradores locais e com vista para o Morro Dois Irmãos.",
        highlights: ["Ponto de encontro à beira-mar", "Águas limpas e pedras naturais", "Início da subida"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Orla do Vidigal e vista para o mar", caption: "Base do morro na Avenida Niemeyer" },
          { src: "/image/esquina_casas.jpg", alt: "Subida da comunidade do Vidigal", caption: "Início do acesso pelas vielas" }
        ]
      },
      {
        id: "laje-dos-cria",
        number: 2,
        title: "Laje dos Cria (Bar da Laje)",
        subtitle: "Vista frontal para o Cristo Redentor e orla do Leblon",
        description: "Um dos pontos mais famosos do Rio. Vista direta para a praia do Leblon, Ipanema e o Cristo Redentor. Lugar perfeito para tomar uma bebida gelada e registrar a paisagem.",
        highlights: ["Vista direta do Cristo", "Visual da orla de Ipanema e Leblon", "Cardápio carioca e petiscos"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Vista panorâmica com Cristo Redentor e orla", caption: "Visual privilegiado da orla da Zona Sul" },
          { src: "/image/hero_rocinha_hd.jpg", alt: "Vista panorâmica do Vidigal", caption: "Paisagem aberta para o litoral" }
        ]
      },
      {
        id: "laje-do-tony",
        number: 3,
        title: "Laje do Tony",
        subtitle: "Vista panorâmica de 360° do topo",
        description: "Localizado no alto da comunidade, oferece uma visão de 360 graus pegando a mata do Morro Dois Irmãos, a Rocinha ao fundo e a imensidão do mar.",
        highlights: ["Visão 360 graus", "Vista para o Morro Dois Irmãos", "Espaço tranquilo para descanso"],
        images: [
          { src: "/image/topo_light.jpg", alt: "Topo do morro com vista panorâmica", caption: "Visão 360° do topo do morro" },
          { src: "/image/casasmorro-dark.jpg", alt: "Arquitetura e casas do Vidigal", caption: "Encostas e vista da comunidade" }
        ]
      },
      {
        id: "mirantes-secretos-vidigal",
        number: 4,
        title: "Mirantes & Vielas do Vidigal",
        subtitle: "Explorando os caminhos e histórias do morro",
        description: "Caminhada guiada descendo pelas vielas históricas do Vidigal, conhecendo os pequenos comércios, ateliês de artistas locais e outros mirantes menos conhecidos.",
        highlights: ["Mirantes alternativos", "Ateliês e arte local", "Descida a pé com histórias do bairro"],
        images: [
          { src: "/image/hexa.jpg", alt: "Grafite e vielas do Vidigal", caption: "Cores e arte nos becos do Vidigal" },
          { src: "/image/crianca_futebol.jpg", alt: "Cultura e convivência no morro", caption: "Vida comunitária e acolhimento" }
        ]
      }
    ]
  },

  "rio-tour": {
    id: "rio-tour",
    slug: "/rio-tour",
    title: "Rio Tour Completo",
    tagline: "Os cartões-postais e a história da cidade maravilhosa vistos de perto.",
    heroImage: "/image/vistacristo-light.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "5 a 6 horas",
    meetingPoint: "Embarque no seu hotel ou ponto combinado (Zona Sul / Centro)",
    included: [
      "Transporte climatizado",
      "Guia credenciado e anfitrião local",
      "Ingressos e acessos aos mirantes",
      "Tempo livre para fotos em cada atrativo"
    ],
    stops: [
      {
        id: "mirante-dona-marta",
        number: 1,
        title: "Mirante Dona Marta",
        subtitle: "A vista clássica do Pão de Açúcar e Cristo Redentor",
        description: "A 360 metros de altitude, o Mirante Dona Marta tem uma das vistas mais completas da cidade: o Pão de Açúcar, a Baía de Guanabara, o Maracanã e o Cristo Redentor em um único enquadramento.",
        highlights: ["Vista do Pão de Açúcar e Baía", "Enquadramento perfeito do Cristo", "Acesso fácil e seguro"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Vista do Mirante Dona Marta com Cristo Redentor", caption: "Cristo Redentor e Enseada de Botafogo" },
          { src: "/image/topo_light.jpg", alt: "Mirante com vista para a baía", caption: "Panorâmica da cidade maravilhosa" }
        ]
      },
      {
        id: "escadaria-selaron",
        number: 2,
        title: "Escadaria Selarón",
        subtitle: "O mosaico a céu aberto entre Lapa e Santa Teresa",
        description: "Os 215 degraus de azulejos coloridos criados pelo artista chileno Jorge Selarón como homenagem ao povo brasileiro. Uma parada obrigatória no Centro cultural do Rio.",
        highlights: ["215 degraus de arte em azulejo", "Azulejos do mundo todo", "Conexão com a boemia da Lapa"],
        images: [
          { src: "/image/hexa.jpg", alt: "Arte e mosaicos coloridos", caption: "Detalhes dos azulejos e cores vivas" },
          { src: "/image/esquina_casas.jpg", alt: "Ruelas e casarios históricos da Lapa e Santa Teresa", caption: "Casarios tradicionais do entorno" }
        ]
      },
      {
        id: "mar-museu-amanha",
        number: 3,
        title: "Museu de Arte do Rio (MAR) & Porto Maravilha",
        subtitle: "História portuária, arte e arquitetura na Praça Mauá",
        description: "Visita à região do Boulevard Olímpico e Praça Mauá. Espaço que une o Museu de Arte do Rio (MAR), a arquitetura do Museu do Amanhã e a rica memória da Pequena África.",
        highlights: ["Praça Mauá e Boulevard Olímpico", "Museu de Arte do Rio (MAR)", "História da Pequena África"],
        images: [
          { src: "/image/hero_rocinha_hd.jpg", alt: "Arquitetura e espaço cultural da Praça Mauá", caption: "Praça Mauá e Boulevard Olímpico" },
          { src: "/image/esquina_casas.jpg", alt: "Cultura e arte carioca", caption: "Espaço cultural e exposições" }
        ]
      },
      {
        id: "maracana",
        number: 4,
        title: "Estádio do Maracanã",
        subtitle: "O templo sagrado do futebol brasileiro e mundial",
        description: "Parada na área externa e estátua do Bellini no Maracanã, com explicações sobre os momentos históricos do estádio, finais de Copa do Mundo e a paixão carioca pelo futebol.",
        highlights: ["Estátua do Bellini", "História das Copas de 1950 e 2014", "Parada para fotos oficiais"],
        images: [
          { src: "/image/crianca_futebol.jpg", alt: "Paixão pelo futebol no Rio de Janeiro", caption: "Cultura do futebol carioca" },
          { src: "/image/topo_light.jpg", alt: "Vista ampla da Zona Norte e Maracanã", caption: "Entorno e grandeza do estádio" }
        ]
      }
    ]
  },

  bailes: {
    id: "bailes",
    slug: "/bailes",
    title: "Rolé nos Bailes do RJ",
    tagline: "Viva a noite carioca e a cultura do funk nos bailes mais autênticos, sempre acompanhado por moradores.",
    heroImage: "/image/hero_rocinha_night_hd.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "4 a 6 horas (Noturno)",
    meetingPoint: "Ponto de encontro na Zona Sul com transporte de ida e volta",
    included: [
      "Anfitrião e condutor morador experiente",
      "Entrada e acesso ao camarote ou área reservada (conforme o baile)",
      "Transporte seguro de ida e volta",
      "Acompanhamento e suporte durante toda a noite"
    ],
    stops: [
      {
        id: "esquenta",
        number: 1,
        title: "Esquenta com Petiscos & Bebidas",
        subtitle: "Ponto de encontro e preparação",
        description: "Começamos em um bar tradicional com petiscos cariocas, bebidas geladas e uma conversa com o anfitrião sobre a história do funk carioca e as dinâmicas da noite.",
        highlights: ["Cerveja gelada e petiscos", "História do funk carioca", "Encontro do grupo"],
        images: [
          { src: "/image/esquina_casas.jpg", alt: "Bar carioca tradicional à noite", caption: "Convivência e clima descontraído" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Luzes da noite no morro", caption: "Início da noite carioca" }
        ]
      },
      {
        id: "chegada-baile",
        number: 2,
        title: "Chegada ao Baile com Acompanhamento",
        subtitle: "Acesso direto e seguro com quem conhece a comunidade",
        description: "Entrada tranquila no espaço do evento com apoio total do anfitrião local, garantindo que você aproveite a música e a festa com respeito e total tranquilidade.",
        highlights: ["Acesso prioritário e seguro", "Apresentação ao espaço", "Área de apoio reservada"],
        images: [
          { src: "/image/casasmorro-dark.jpg", alt: "Espaço cultural e iluminação de evento", caption: "Ambiente do evento e iluminação" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Noite no morro iluminado", caption: "Noite carioca em destaque" }
        ]
      },
      {
        id: "pista-djs",
        number: 3,
        title: "Música ao Vivo, DJs & Dança",
        subtitle: "O ritmo autêntico do funk carioca",
        description: "Aproveite os sets dos DJs locais, o passinho, as coreografias e a energia única da cultura do funk carioca do início ao fim.",
        highlights: ["DJs e MCs conceituados", "Apresentações de passinho", "Energia contagiante"],
        images: [
          { src: "/image/crianca_futebol.jpg", alt: "Ritmo, dança e cultura carioca", caption: "Expressão corporal e dança" },
          { src: "/image/hexa.jpg", alt: "Arte e cultura urbana carioca", caption: "Cultura urbana e música" }
        ]
      },
      {
        id: "retorno-seguro",
        number: 4,
        title: "Retorno Seguro",
        subtitle: "Volta acompanhada para seu hotel",
        description: "Ao final da festa, retorno acompanhado pelo anfitrião até o transporte de volta para seu hotel ou residência na Zona Sul.",
        highlights: ["Transporte garantido", "Suporte até o destino final", "Segurança em primeiro lugar"],
        images: [
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Retorno noturno com visual do Rio", caption: "Encerramento seguro da experiência" }
        ]
      }
    ]
  }
};
