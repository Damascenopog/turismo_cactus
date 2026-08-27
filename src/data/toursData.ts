import { Language } from "@/context/LanguageContext";

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
  heroTitlePrefix: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  tagline: string;
  heroImage: string;
  heroImageDark?: string;
  duration: string;
  meetingPoint: string;
  included: string[];
  stops: TourStop[];
}

const toursDataPt: Record<string, TourDetail> = {
  rocinha: {
    id: "rocinha",
    slug: "/",
    title: "Tour Rocinha",
    heroTitlePrefix: "Descubra a Rocinha com ",
    heroTitleHighlight: "Quem Vive Aqui",
    heroSubtitle: "Caminhada guiada por moradores para conhecer a rotina, mirantes e a vida real da maior favela do Brasil.",
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
    heroTitlePrefix: "Descubra o Vidigal com ",
    heroTitleHighlight: "Quem Vive Aqui",
    heroSubtitle: "Do mar ao topo do morro: prainha, mirantes icônicos e a melhor vista do litoral carioca.",
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
    heroTitlePrefix: "Conheça o Rio de Janeiro com ",
    heroTitleHighlight: "Guias Locais",
    heroSubtitle: "Os cartões-postais e a história da cidade maravilhosa vistos de perto: Mirante Dona Marta, Selarón, Porto Maravilha e Maracanã.",
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
    title: "Baile Funk",
    heroTitlePrefix: "Viva a Noite Carioca no ",
    heroTitleHighlight: "Baile Funk",
    heroSubtitle: "Acompanhamento exclusivo com moradores para curtir a noite carioca e os tradicionais bailes com segurança, respeito e acolhimento.",
    tagline: "Viva a noite carioca e a cultura do funk no baile mais autêntico, sempre acompanhado por moradores.",
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

const toursDataEn: Record<string, TourDetail> = {
  rocinha: {
    id: "rocinha",
    slug: "/",
    title: "Rocinha Tour",
    heroTitlePrefix: "Discover Rocinha with ",
    heroTitleHighlight: "Local Residents",
    heroSubtitle: "A guided walk by resident hosts to experience the real rhythm, viewpoints, and daily life of Latin America's largest community.",
    tagline: "A guided walk by resident hosts to experience the real rhythm, viewpoints, and daily life of Latin America's largest community.",
    heroImage: "/image/hero_rocinha_hd.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "3 to 4 hours",
    meetingPoint: "Rocinha Footbridge (São Conrado Metro Station)",
    included: [
      "Local resident host born and raised in Rocinha",
      "Mototaxi ride to the summit",
      "Access to all rooftop terraces & panoramic lookouts",
      "Traditional lunch or snack break (optional)"
    ],
    stops: [
      {
        id: "via-apia",
        number: 1,
        title: "Via Ápia",
        subtitle: "Meeting point & bustling commercial heart",
        description: "The main commercial artery of Rocinha where street markets, fresh fruit stalls, and daily life happen around the clock.",
        highlights: ["Local street markets", "Traditional food", "Mototaxi central stop"],
        images: [
          { src: "/image/esquina_casas.jpg", alt: "Commercial movement on Via Ápia, Rocinha", caption: "Daily street life and bustling shops" },
          { src: "/image/casasmorro-dark.jpg", alt: "View of houses and streets in Rocinha", caption: "Living community architecture" }
        ]
      },
      {
        id: "laje-moto",
        number: 2,
        title: "Mototaxi Rooftop",
        subtitle: "Traditional riders' meeting point",
        description: "A mid-hill stop revealing how mototaxis keep the community connected daily, paired with a wide opening view over the slopes.",
        highlights: ["Mototaxi culture", "First panoramic vista", "Resident stories"],
        images: [
          { src: "/image/topo_light.jpg", alt: "View from the hill at Mototaxi Rooftop", caption: "Mid-slope view over alleyways" },
          { src: "/image/hero_rocinha_hd.jpg", alt: "Slopes of Rocinha", caption: "Rocinha hill slopes" }
        ]
      },
      {
        id: "laje-drone",
        number: 3,
        title: "Drone Rooftop",
        subtitle: "Open terrace for panoramic photography",
        description: "Top lookout offering clear views of São Conrado, Pedra da Gávea, and the full cascade of colorful houses down to the Atlantic ocean.",
        highlights: ["Pedra da Gávea backdrop", "Wide photos", "Panoramic overview"],
        images: [
          { src: "/image/hero_rocinha_hd.jpg", alt: "Wide view of Rocinha and Pedra da Gávea", caption: "Panoramic vista of São Conrado & Pedra da Gávea" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Night hill illumination", caption: "Illuminated evening vista" }
        ]
      },
      {
        id: "mirante-novo-visual",
        number: 4,
        title: "Novo Visual Viewpoint",
        subtitle: "High lookout over São Conrado beach",
        description: "A high-altitude viewpoint highlighting the contrast between the vibrant community, the turquoise ocean, and the surrounding rainforest.",
        highlights: ["180° ocean view", "Sea breeze", "Fresh coconut water break"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Viewpoint overlooking coast and mountains", caption: "Contrast between ocean, rainforest, and hill" },
          { src: "/image/topo_light.jpg", alt: "View from community top", caption: "Rooftops at the summit" }
        ]
      },
      {
        id: "descida-vielas",
        number: 5,
        title: "Descent Through the Alleys",
        subtitle: "Relaxed stroll through community pathways",
        description: "We walk down through winding alleyways, street art murals, and local craft shops with plenty of time for genuine conversations.",
        highlights: ["Walk through narrow alleys", "Street art & graffiti", "Conversations with shopkeepers"],
        images: [
          { src: "/image/hexa.jpg", alt: "Painted street and colorful murals", caption: "Street art and decorated alleys" },
          { src: "/image/crianca_futebol.jpg", alt: "Children playing soccer and local life", caption: "Community culture & daily warmth" }
        ]
      }
    ]
  },

  vidigal: {
    id: "vidigal",
    slug: "/vidigal",
    title: "Vidigal Tour",
    heroTitlePrefix: "Discover Vidigal with ",
    heroTitleHighlight: "Local Residents",
    heroSubtitle: "From the beach to the hilltop: scenic cove, iconic viewpoints, and the finest ocean panorama in Rio.",
    tagline: "From the beach to the hilltop: scenic cove, iconic viewpoints, and the finest ocean panorama in Rio.",
    heroImage: "/image/vistacristo-light.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "3 to 4 hours",
    meetingPoint: "Praça do Vidigal (Avenida Niemeyer)",
    included: [
      "Experienced resident guide",
      "Mototaxi or van ride to top",
      "Visits to all signature lookouts",
      "Top local dining & bar recommendations"
    ],
    stops: [
      {
        id: "prainha-vidigal",
        number: 1,
        title: "Vidigal Beach Cove",
        subtitle: "Scenic shoreline at the foot of the hill",
        description: "A tranquil cove carved into the rock, favored by local residents and framing the Morro Dois Irmãos mountains above.",
        highlights: ["Oceanfront meeting point", "Crystal clear waters", "Ascent starting point"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Vidigal coast and sea view", caption: "Hill base on Niemeyer Avenue" },
          { src: "/image/esquina_casas.jpg", alt: "Vidigal ascent", caption: "Starting access into alleyways" }
        ]
      },
      {
        id: "laje-dos-cria",
        number: 2,
        title: "Laje dos Cria (Bar da Laje)",
        subtitle: "Direct panorama of Christ the Redeemer & Leblon beach",
        description: "One of Rio's most famous spots, facing Leblon, Ipanema, and the Christ statue across the bay. Great place for a cold beverage and photos.",
        highlights: ["Direct Christ statue view", "Ipanema & Leblon coastline", "Authentic Rio appetizers"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Panoramic view with Christ the Redeemer and coast", caption: "South Zone coastline vista" },
          { src: "/image/hero_rocinha_hd.jpg", alt: "Vidigal panorama", caption: "Open seascape" }
        ]
      },
      {
        id: "laje-do-tony",
        number: 3,
        title: "Tony's Rooftop",
        subtitle: "360-degree hilltop panorama",
        description: "Located high on the ridge, providing a 360-degree sweep across Two Brothers peaks, neighboring Rocinha, and the vast Atlantic ocean.",
        highlights: ["360° circular vista", "Morro Dois Irmãos backdrop", "Peaceful rest stop"],
        images: [
          { src: "/image/topo_light.jpg", alt: "Summit with panoramic vista", caption: "360° vista from hilltop" },
          { src: "/image/casasmorro-dark.jpg", alt: "Vidigal architecture", caption: "Houses and hillsides" }
        ]
      },
      {
        id: "mirantes-secretos-vidigal",
        number: 4,
        title: "Hidden Lookouts & Alleys",
        subtitle: "Exploring secret trails and artistic lanes",
        description: "Guided descent through Vidigal's charming passages, stopping by local art studios, neighborhood cafes, and secluded vista terraces.",
        highlights: ["Alternative lookouts", "Artisan studios", "Heritage walking descent"],
        images: [
          { src: "/image/hexa.jpg", alt: "Graffiti and alleys in Vidigal", caption: "Colors and art in Vidigal lanes" },
          { src: "/image/crianca_futebol.jpg", alt: "Community life and warmth", caption: "Friendly community spirit" }
        ]
      }
    ]
  },

  "rio-tour": {
    id: "rio-tour",
    slug: "/rio-tour",
    title: "Complete Rio Tour",
    heroTitlePrefix: "Explore Rio de Janeiro with ",
    heroTitleHighlight: "Local Guides",
    heroSubtitle: "Postcard landmarks and deep historical roots seen up close: Dona Marta, Selarón Steps, Port Boulevard, and Maracanã.",
    tagline: "Postcard landmarks and deep historical roots seen up close.",
    heroImage: "/image/vistacristo-light.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "5 to 6 hours",
    meetingPoint: "Hotel pickup or designated central meeting spot (South Zone / Centro)",
    included: [
      "Air-conditioned transportation",
      "Licensed guide and local host",
      "All viewpoint entries & permits",
      "Dedicated photo stops at each landmark"
    ],
    stops: [
      {
        id: "mirante-dona-marta",
        number: 1,
        title: "Dona Marta Viewpoint",
        subtitle: "The classic shot of Sugarloaf and Christ the Redeemer",
        description: "At 360 meters elevation, Dona Marta offers Rio's most complete frame: Sugarloaf Mountain, Guanabara Bay, Maracanã, and Christ in one vista.",
        highlights: ["Sugarloaf & Bay vista", "Christ the Redeemer framing", "Safe & easy access"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Dona Marta view with Christ the Redeemer", caption: "Christ the Redeemer & Botafogo Bay" },
          { src: "/image/topo_light.jpg", alt: "Viewpoint overlooking bay", caption: "Breathtaking panorama of the city" }
        ]
      },
      {
        id: "escadaria-selaron",
        number: 2,
        title: "Selarón Steps",
        subtitle: "Open-air mosaic connecting Lapa and Santa Teresa",
        description: "The 215 vibrant tiled steps crafted by Chilean artist Jorge Selarón as a tribute to the Brazilian people. A must-see cultural masterpiece.",
        highlights: ["215 ceramic tiled steps", "Tiles from across the globe", "Lapa bohemian quarter link"],
        images: [
          { src: "/image/hexa.jpg", alt: "Color mosaic tiles", caption: "Handmade ceramic details" },
          { src: "/image/esquina_casas.jpg", alt: "Historic alleys around Lapa & Santa Teresa", caption: "Heritage facades nearby" }
        ]
      },
      {
        id: "mar-museu-amanha",
        number: 3,
        title: "Rio Art Museum (MAR) & Porto Maravilha",
        subtitle: "Maritime heritage, art, and modern port revival",
        description: "Explore Praça Mauá and Olympic Boulevard, linking the Rio Art Museum (MAR), futuristic architecture, and the heritage of Little Africa.",
        highlights: ["Praça Mauá waterfront", "Rio Art Museum (MAR)", "Little Africa heritage"],
        images: [
          { src: "/image/hero_rocinha_hd.jpg", alt: "Architecture at Praça Mauá", caption: "Praça Mauá and Olympic Boulevard" },
          { src: "/image/esquina_casas.jpg", alt: "Cultural spaces", caption: "Art and urban culture" }
        ]
      },
      {
        id: "maracana",
        number: 4,
        title: "Maracanã Stadium",
        subtitle: "The historic temple of Brazilian and world soccer",
        description: "External stop at Bellini's statue with insights into World Cup finals, legendary matches, and the profound Carioca passion for football.",
        highlights: ["Bellini Captain Statue", "1950 & 2014 World Cup legacy", "Photo stop"],
        images: [
          { src: "/image/crianca_futebol.jpg", alt: "Football culture in Rio", caption: "Passion for the beautiful game" },
          { src: "/image/topo_light.jpg", alt: "Wide North Zone view", caption: "Grandeur of the stadium grounds" }
        ]
      }
    ]
  },

  bailes: {
    id: "bailes",
    slug: "/bailes",
    title: "Baile Funk",
    heroTitlePrefix: "Experience Rio by Night at a ",
    heroTitleHighlight: "Baile Funk",
    heroSubtitle: "Exclusive local hosting to experience Rio's authentic funk nightlife with safety, respect, and warm guidance.",
    tagline: "Experience Rio's nightlife and genuine funk culture with friendly local hosts.",
    heroImage: "/image/hero_rocinha_night_hd.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "4 to 6 hours (Night)",
    meetingPoint: "South Zone meeting point with round-trip transportation",
    included: [
      "Experienced resident host & coordinator",
      "Entry & reserved lounge access (depending on event)",
      "Safe round-trip transport",
      "Dedicated support throughout the entire night"
    ],
    stops: [
      {
        id: "esquenta",
        number: 1,
        title: "Warm-up Drinks & Appetizers",
        subtitle: "Meeting point and evening briefing",
        description: "We gather at a classic Carioca bar for cold drinks, traditional snacks, and a friendly conversation about the roots of funk culture.",
        highlights: ["Chilled drinks & snacks", "History of Rio funk", "Group intro"],
        images: [
          { src: "/image/esquina_casas.jpg", alt: "Traditional evening bar in Rio", caption: "Relaxed welcome atmosphere" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Night lights on the hillside", caption: "Rio nightlife begins" }
        ]
      },
      {
        id: "chegada-baile",
        number: 2,
        title: "Accompanied Arrival at the Party",
        subtitle: "Direct, smooth entry with local community hosts",
        description: "Smooth entry into the event space alongside our resident hosts, ensuring you feel completely welcome and at ease from the first minute.",
        highlights: ["Priority access", "Venue introduction", "Host support area"],
        images: [
          { src: "/image/casasmorro-dark.jpg", alt: "Event space lighting", caption: "Venue atmosphere and stage lights" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Night hillside", caption: "Vibrant community night" }
        ]
      },
      {
        id: "pista-djs",
        number: 3,
        title: "Live DJs, MCs & Dance",
        subtitle: "The true rhythm and pulse of Rio funk",
        description: "Enjoy high-energy sets from celebrated local DJs, passinho dance crews, and the unmatched musical power of Carioca culture.",
        highlights: ["Top resident DJs & MCs", "Passinho dance choreography", "Electric rhythm"],
        images: [
          { src: "/image/crianca_futebol.jpg", alt: "Rhythm and dance expression", caption: "Dance culture and rhythm" },
          { src: "/image/hexa.jpg", alt: "Urban cultural expression", caption: "Vibrant street music" }
        ]
      },
      {
        id: "retorno-seguro",
        number: 4,
        title: "Safe Return",
        subtitle: "Accompanied transfer back to your accommodation",
        description: "At the end of the night, our host accompanies you back to the private transport returning directly to your South Zone hotel.",
        highlights: ["Guaranteed return transport", "Host accompany until destination", "Safety first"],
        images: [
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Night return with view of Rio", caption: "Safe conclusion of the experience" }
        ]
      }
    ]
  }
};

const toursDataEs: Record<string, TourDetail> = {
  rocinha: {
    id: "rocinha",
    slug: "/",
    title: "Tour Rocinha",
    heroTitlePrefix: "Descubre la Rocinha con ",
    heroTitleHighlight: "Quienes Viven Aquí",
    heroSubtitle: "Caminata guiada por anfitriones locales para conocer la rutina, miradores y la vida real de la favela más grande de América Latina.",
    tagline: "Caminata guiada por anfitriones locales para conocer la rutina, miradores y la vida real de la favela más grande de América Latina.",
    heroImage: "/image/hero_rocinha_hd.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "3 a 4 horas",
    meetingPoint: "Pasarela de la Rocinha (Metro São Conrado)",
    included: [
      "Guía local nacido y criado en la favela",
      "Subida en mototaxi hasta la cumbre",
      "Acceso a todas las terrazas y miradores",
      "Parada para almuerzo o refrigerio típico (opcional)"
    ],
    stops: [
      {
        id: "via-apia",
        number: 1,
        title: "Via Ápia",
        subtitle: "Punto de encuentro y corazón comercial",
        description: "La calle principal de la Rocinha, donde el comercio no para. Fruterías, comida callejera y el movimiento diario muestran el ritmo auténtico.",
        highlights: ["Comercio local", "Comida típica", "Parada de mototaxis"],
        images: [
          { src: "/image/esquina_casas.jpg", alt: "Comercio en Via Ápia, Rocinha", caption: "Movimiento diario y tiendas locales" },
          { src: "/image/casasmorro-dark.jpg", alt: "Casas y calles de Rocinha", caption: "Arquitectura viva de la comunidad" }
        ]
      },
      {
        id: "laje-moto",
        number: 2,
        title: "Terraza de la Moto",
        subtitle: "Punto tradicional de los mototaxistas",
        description: "Parada a mitad de la colina. Conoce el papel del mototaxi en el transporte diario junto a la primera vista amplia de las laderas.",
        highlights: ["Cultura del mototaxi", "Primera vista panorámica", "Historias locales"],
        images: [
          { src: "/image/topo_light.jpg", alt: "Vista desde la terraza", caption: "Vista intermedia de callejones" },
          { src: "/image/hero_rocinha_hd.jpg", alt: "Laderas de Rocinha", caption: "Laderas de la favela" }
        ]
      },
      {
        id: "laje-drone",
        number: 3,
        title: "Terraza del Drone",
        subtitle: "Mirador abierto para fotos panorámicas",
        description: "Espacio en la cima con vista limpia de São Conrado, la Pedra da Gávea y la extensión de casas bajando hasta el mar.",
        highlights: ["Vista a Pedra da Gávea", "Fotos panorámicas", "Visión general"],
        images: [
          { src: "/image/hero_rocinha_hd.jpg", alt: "Vista amplia de Rocinha y Pedra da Gávea", caption: "Panorámica de São Conrado y Pedra da Gávea" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Vista nocturna iluminada", caption: "Noche iluminada en la colina" }
        ]
      },
      {
        id: "mirante-novo-visual",
        number: 4,
        title: "Mirador Novo Visual",
        subtitle: "Vista alta hacia la playa de São Conrado",
        description: "Mirador en el sector alto donde se aprecia el contraste entre la favela, el océano y la selva atlántica alrededor.",
        highlights: ["Vista 180° al mar", "Brisa marina", "Agua de coco y fotos"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Mirador con vista a la costa", caption: "Contraste entre mar, selva y colina" },
          { src: "/image/topo_light.jpg", alt: "Casas en la cumbre", caption: "Tejados de la cumbre" }
        ]
      },
      {
        id: "descida-vielas",
        number: 5,
        title: "Descenso por los Callejones",
        subtitle: "Paseo tranquilo por los pasajes interiores",
        description: "Descendemos a pie sin prisa por callejones históricos, murales de arte urbano y talleres artesanales con amables charlas.",
        highlights: ["Paseo por callejones", "Murales y grafiti", "Charlas con comerciantes"],
        images: [
          { src: "/image/hexa.jpg", alt: "Murales coloridos", caption: "Arte urbano en las calles" },
          { src: "/image/crianca_futebol.jpg", alt: "Fútbol y convivencia local", caption: "Cultura y calidez comunitaria" }
        ]
      }
    ]
  },

  vidigal: {
    id: "vidigal",
    slug: "/vidigal",
    title: "Tour Vidigal",
    heroTitlePrefix: "Descubre el Vidigal con ",
    heroTitleHighlight: "Quienes Viven Aquí",
    heroSubtitle: "Del mar a la cumbre: playita, miradores icónicos y la mejor vista de la costa carioca.",
    tagline: "Del mar a la cumbre: playita, miradores icónicos y la mejor vista de la costa carioca.",
    heroImage: "/image/vistacristo-light.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "3 a 4 horas",
    meetingPoint: "Praça do Vidigal (Avenida Niemeyer)",
    included: [
      "Guía local experimentado",
      "Subida en mototaxi o van",
      "Visitas a todos los miradores",
      "Recomendaciones gastronómicas y bares"
    ],
    stops: [
      {
        id: "prainha-vidigal",
        number: 1,
        title: "Playita del Vidigal",
        subtitle: "Playa a los pies de la colina",
        description: "Punto de partida junto al mar. Una cala de aguas claras entre rocas con vista frontal al Morro Dois Irmãos.",
        highlights: ["Encuentro frente al mar", "Aguas cristalinas", "Inicio del ascenso"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Costa del Vidigal", caption: "Base en Avenida Niemeyer" },
          { src: "/image/esquina_casas.jpg", alt: "Subida al Vidigal", caption: "Acceso a callejones" }
        ]
      },
      {
        id: "laje-dos-cria",
        number: 2,
        title: "Laje dos Cria (Bar da Laje)",
        subtitle: "Vista frontal al Cristo Redentor y playa de Leblon",
        description: "Uno de los miradores más famosos de Río. Vista directa a Ipanema, Leblon y el Cristo Redentor.",
        highlights: ["Vista directa al Cristo", "Litoral de Ipanema y Leblon", "Aperitivos cariocas"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Panorámica con Cristo y costa", caption: "Vista privilegiada de la Zona Sur" },
          { src: "/image/hero_rocinha_hd.jpg", alt: "Panorámica de Vidigal", caption: "Paisaje abierto al océano" }
        ]
      },
      {
        id: "laje-do-tony",
        number: 3,
        title: "Terraza de Tony",
        subtitle: "Vista panorámica de 360° en la cima",
        description: "Mirador alto con visión circular hacia el Morro Dois Irmãos, la Rocinha y la inmensidad del océano.",
        highlights: ["Visión 360 grados", "Fondo Morro Dois Irmãos", "Espacio tranquilo"],
        images: [
          { src: "/image/topo_light.jpg", alt: "Cumbre con vista 360°", caption: "Vista panorámica desde la cima" },
          { src: "/image/casasmorro-dark.jpg", alt: "Arquitectura del Vidigal", caption: "Laderas y casas" }
        ]
      },
      {
        id: "mirantes-secretos-vidigal",
        number: 4,
        title: "Miradores y Callejones Secretos",
        subtitle: "Recorriendo senderos y arte local",
        description: "Caminata guiada descendiendo por los pasajes históricos del Vidigal, visitando talleres artísticos y terrazas panorámicas.",
        highlights: ["Miradores alternativos", "Talleres de arte", "Descenso a pie"],
        images: [
          { src: "/image/hexa.jpg", alt: "Murales en Vidigal", caption: "Colores y arte en Vidigal" },
          { src: "/image/crianca_futebol.jpg", alt: "Vida comunitaria", caption: "Convivencia y hospitalidad" }
        ]
      }
    ]
  },

  "rio-tour": {
    id: "rio-tour",
    slug: "/rio-tour",
    title: "Rio Tour Completo",
    heroTitlePrefix: "Conoce Río de Janeiro con ",
    heroTitleHighlight: "Guías Locales",
    heroSubtitle: "Las postales y la historia de la ciudad maravillosa vistas de cerca: Mirador Dona Marta, Selarón, Puerto y Maracanã.",
    tagline: "Las postales y la historia de la ciudad maravillosa vistas de cerca.",
    heroImage: "/image/vistacristo-light.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "5 a 6 horas",
    meetingPoint: "Recogida en hotel o punto convenido (Zona Sur / Centro)",
    included: [
      "Transporte con aire acondicionado",
      "Guía acreditado y anfitrión local",
      "Accesos a todos los miradores",
      "Tiempo libre para fotos en cada atracción"
    ],
    stops: [
      {
        id: "mirante-dona-marta",
        number: 1,
        title: "Mirador Dona Marta",
        subtitle: "La vista clásica de Pan de Azúcar y Cristo Redentor",
        description: "A 360 metros de altura, ofrece el encuadre más completo de Río con el Pan de Azúcar, la bahía y el Cristo.",
        highlights: ["Vista a Pan de Azúcar y bahía", "Encuadre perfecto del Cristo", "Acceso seguro y fácil"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Vista Dona Marta con Cristo", caption: "Cristo Redentor y bahía de Botafogo" },
          { src: "/image/topo_light.jpg", alt: "Mirador hacia la bahía", caption: "Panorámica de la ciudad maravillosa" }
        ]
      },
      {
        id: "escadaria-selaron",
        number: 2,
        title: "Escalera de Selarón",
        subtitle: "El mosaico al aire libre entre Lapa y Santa Teresa",
        description: "Los 215 escalones de azulejos creados por Jorge Selarón como tributo a Brasil. Parada cultural obligada.",
        highlights: ["215 escalones de azulejos", "Cerámicas del mundo entero", "Conexión bohemia con Lapa"],
        images: [
          { src: "/image/hexa.jpg", alt: "Mosaicos coloridos", caption: "Detalles en azulejos de colores" },
          { src: "/image/esquina_casas.jpg", alt: "Casas históricas de Lapa", caption: "Casas coloniales alrededor" }
        ]
      },
      {
        id: "mar-museu-amanha",
        number: 3,
        title: "Museo de Arte de Río (MAR) y Puerto Maravilla",
        subtitle: "Historia portuaria, arte y arquitectura en Praça Mauá",
        description: "Visita al Boulevard Olímpico y Praça Mauá, integrando museos modernos y la memoria de la Pequeña África.",
        highlights: ["Praça Mauá y Boulevard", "Museo de Arte de Río (MAR)", "Historia de Pequeña África"],
        images: [
          { src: "/image/hero_rocinha_hd.jpg", alt: "Arquitectura en Praça Mauá", caption: "Praça Mauá y Boulevard Olímpico" },
          { src: "/image/esquina_casas.jpg", alt: "Espacio cultural", caption: "Cultura y exposiciones" }
        ]
      },
      {
        id: "maracana",
        number: 4,
        title: "Estadio Maracanã",
        subtitle: "El templo sagrado del fútbol brasileño y mundial",
        description: "Parada exterior en la estatua de Bellini con relatos de finales de Copas del Mundo y la pasión carioca por el fútbol.",
        highlights: ["Estatua de Bellini", "Historia de Mundiales", "Parada para fotos"],
        images: [
          { src: "/image/crianca_futebol.jpg", alt: "Pasión por el fútbol", caption: "Cultura futbolística carioca" },
          { src: "/image/topo_light.jpg", alt: "Vista amplia de Zona Norte", caption: "Grandeza del estadio" }
        ]
      }
    ]
  },

  bailes: {
    id: "bailes",
    slug: "/bailes",
    title: "Baile Funk",
    heroTitlePrefix: "Vive la Noche Carioca en el ",
    heroTitleHighlight: "Baile Funk",
    heroSubtitle: "Acompañamiento exclusivo con anfitriones locales para disfrutar la noche carioca y el funk con seguridad, respeto y calidez.",
    tagline: "Vive la noche carioca y la cultura del funk con anfitriones locales de confianza.",
    heroImage: "/image/hero_rocinha_night_hd.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "4 a 6 horas (Nocturno)",
    meetingPoint: "Punto de encuentro en Zona Sur con transporte de ida y vuelta",
    included: [
      "Anfitrión y guía local experimentado",
      "Entrada y acceso a zona reservada / camarote",
      "Transporte seguro de ida y vuelta",
      "Soporte y acompañamiento durante toda la noche"
    ],
    stops: [
      {
        id: "esquenta",
        number: 1,
        title: "Previa con Bebidas y Aperitivos",
        subtitle: "Punto de encuentro y bienvenida",
        description: "Comenzamos en un bar tradicional con aperitivos típicos, bebidas frías y charla sobre la historia y cultura del funk.",
        highlights: ["Bebidas frías y aperitivos", "Historia del funk carioca", "Presentación del grupo"],
        images: [
          { src: "/image/esquina_casas.jpg", alt: "Bar carioca tradicional", caption: "Ambiente relajado de bienvenida" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Luces de la noche en la colina", caption: "Comienza la noche carioca" }
        ]
      },
      {
        id: "chegada-baile",
        number: 2,
        title: "Llegada Acompañada al Evento",
        subtitle: "Acceso directo y seguro con anfitriones locales",
        description: "Ingreso tranquilo y fluido al espacio del evento con el apoyo de nuestro anfitrión para que disfrutes de la fiesta.",
        highlights: ["Acceso prioritario y seguro", "Presentación del lugar", "Zona de apoyo"],
        images: [
          { src: "/image/casasmorro-dark.jpg", alt: "Iluminación del evento", caption: "Ambiente del evento" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Noche iluminada", caption: "Noche carioca destacada" }
        ]
      },
      {
        id: "pista-djs",
        number: 3,
        title: "Música en Vivo, DJs y Danza",
        subtitle: "El ritmo auténtico del funk carioca",
        description: "Disfruta de las sesiones de los mejores DJs, coreografías de passinho y la vibrante energía de la música urbana de Río.",
        highlights: ["DJs y MCs destacados", "Coreografías de passinho", "Energía contagiosa"],
        images: [
          { src: "/image/crianca_futebol.jpg", alt: "Ritmo y danza", caption: "Expresión cultural y baile" },
          { src: "/image/hexa.jpg", alt: "Cultura urbana", caption: "Música y arte callejero" }
        ]
      },
      {
        id: "retorno-seguro",
        number: 4,
        title: "Retorno Seguro",
        subtitle: "Regreso acompañado a tu hotel",
        description: "Al terminar el evento, regreso acompañado por el anfitrión hasta el transporte directo a tu alojamiento en la Zona Sur.",
        highlights: ["Transporte garantizado", "Acompañamiento hasta destino", "Seguridad prioritaria"],
        images: [
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Retorno nocturno con vista de Río", caption: "Cierre seguro de la experiencia" }
        ]
      }
    ]
  }
};

const toursDataDe: Record<string, TourDetail> = {
  rocinha: {
    id: "rocinha",
    slug: "/",
    title: "Rocinha Tour",
    heroTitlePrefix: "Entdecke Rocinha mit ",
    heroTitleHighlight: "Einheimischen",
    heroSubtitle: "Geführter Rundgang mit Bewohnern, um den Alltag, Aussichtspunkte und das echte Leben in Brasiliens größter Favela kennenzulernen.",
    tagline: "Geführter Rundgang mit Bewohnern, um den Alltag, Aussichtspunkte und das echte Leben in Brasiliens größter Favela kennenzulernen.",
    heroImage: "/image/hero_rocinha_hd.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "3 bis 4 Stunden",
    meetingPoint: "Rocinha-Fußgängerbrücke (U-Bahn São Conrado)",
    included: [
      "Einheimischer Guide, geboren und aufgewachsen in Rocinha",
      "Mototaxi-Fahrt zum Gipfel",
      "Zugang zu allen Dachterrassen und Aussichtspunkten",
      "Traditionelle Imbisspause (optional)"
    ],
    stops: [
      {
        id: "via-apia",
        number: 1,
        title: "Via Ápia",
        subtitle: "Treffpunkt und geschäftiges Handelszentrum",
        description: "Die Hauptstraße von Rocinha mit Obstständen, Straßenküchen und regem Treiben rund um die Uhr.",
        highlights: ["Lokale Märkte", "Traditionelle Küche", "Mototaxi-Station"],
        images: [
          { src: "/image/esquina_casas.jpg", alt: "Treiben auf der Via Ápia in Rocinha", caption: "Alltagsleben und Geschäfte" },
          { src: "/image/casasmorro-dark.jpg", alt: "Gassen und Häuser in Rocinha", caption: "Lebendige Architektur" }
        ]
      },
      {
        id: "laje-moto",
        number: 2,
        title: "Mototaxi-Terrasse",
        subtitle: "Traditioneller Fahrertreffpunkt",
        description: "Zwischenstopp am Hang, der die Rolle der Mototaxis im Alltag zeigt, verbunden mit weitem Panoramablick.",
        highlights: ["Mototaxi-Kultur", "Erster Panoramablick", "Geschichten der Bewohner"],
        images: [
          { src: "/image/topo_light.jpg", alt: "Blick von der Terrasse", caption: "Blick über die Hanggassen" },
          { src: "/image/hero_rocinha_hd.jpg", alt: "Hänge von Rocinha", caption: "Hänge der Favela" }
        ]
      },
      {
        id: "laje-drone",
        number: 3,
        title: "Drohnen-Dachterrasse",
        subtitle: "Offener Aussichtspunkt für Panoramen",
        description: "Freier Blick auf São Conrado, den Felsen Pedra da Gávea und das Meer.",
        highlights: ["Blick auf Pedra da Gávea", "Panoramakulisse", "Gesamtüberblick"],
        images: [
          { src: "/image/hero_rocinha_hd.jpg", alt: "Weitblick über Rocinha", caption: "Panorama von São Conrado" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Nachtbeleuchtung am Hang", caption: "Beleuchtete Favela bei Nacht" }
        ]
      },
      {
        id: "mirante-novo-visual",
        number: 4,
        title: "Novo Visual Aussichtspunkt",
        subtitle: "Aussicht auf den Strand von São Conrado",
        description: "Kontrast zwischen bunter Favela, türkisblauem Meer und dem umgebenden Atlantischen Regenwald.",
        highlights: ["180°-Meerblick", "Meeresbrise", "Frische Kokosnuss & Fotopause"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Aussichtspunkt auf Küste und Berge", caption: "Kontrast Meer, Wald und Hang" },
          { src: "/image/topo_light.jpg", alt: "Dächer am Gipfel", caption: "Dachlandschaft oben" }
        ]
      },
      {
        id: "descida-vielas",
        number: 5,
        title: "Abstieg durch die Gassen",
        subtitle: "Entspannter Spaziergang durch die Passagen",
        description: "Wir gehen zu Fuß durch historische Gassen, Graffiti-Motive und Kunstwerkstätten mit herzlichen Begegnungen.",
        highlights: ["Fußweg durch enge Gassen", "Street-Art & Wandmalerei", "Gespräche mit Anwohnern"],
        images: [
          { src: "/image/hexa.jpg", alt: "Bunte Wandgemälde", caption: "Straßenkunst in den Gassen" },
          { src: "/image/crianca_futebol.jpg", alt: "Fußball und Gemeinschaft", caption: "Kultur und herzliche Gastfreundschaft" }
        ]
      }
    ]
  },

  vidigal: {
    id: "vidigal",
    slug: "/vidigal",
    title: "Vidigal Tour",
    heroTitlePrefix: "Entdecke Vidigal mit ",
    heroTitleHighlight: "Einheimischen",
    heroSubtitle: "Vom Strand bis zum Gipfel: Meeresbucht, ikonische Aussichtspunkte und Rio's schönster Küstenblick.",
    tagline: "Vom Strand bis zum Gipfel: Meeresbucht, ikonische Aussichtspunkte und Rio's schönster Küstenblick.",
    heroImage: "/image/vistacristo-light.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "3 bis 4 Stunden",
    meetingPoint: "Praça do Vidigal (Avenida Niemeyer)",
    included: [
      "Erfahrener einheimischer Guide",
      "Fahrt mit Mototaxi oder Van zum Gipfel",
      "Besuch aller Aussichtsterrassen",
      "Tipps für die besten Bars & Restaurants"
    ],
    stops: [
      {
        id: "prainha-vidigal",
        number: 1,
        title: "Vidigal Strandbucht",
        subtitle: "Malerische Bucht am Fuße des Hügels",
        description: "Ruhige Bucht mit klarem Wasser und Blick auf die Zwillingsberge Morro Dois Irmãos.",
        highlights: ["Treffpunkt am Meer", "Klares Wasser", "Start des Aufstiegs"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Küste von Vidigal", caption: "Basis an der Niemeyer-Allee" },
          { src: "/image/esquina_casas.jpg", alt: "Aufstieg nach Vidigal", caption: "Einstieg in die Gassen" }
        ]
      },
      {
        id: "laje-dos-cria",
        number: 2,
        title: "Laje dos Cria (Bar da Laje)",
        subtitle: "Direkter Blick auf Christusstatue & Leblon-Küste",
        description: "Einer der berühmtesten Aussichtspunkte mit direktem Blick auf Ipanema, Leblon und den Corcovado.",
        highlights: ["Blick auf Christusstatue", "Küste von Ipanema & Leblon", "Traditionelle Snacks"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Panorama mit Christusstatue", caption: "Blick über die Südzone" },
          { src: "/image/hero_rocinha_hd.jpg", alt: "Panorama von Vidigal", caption: "Offener Blick auf das Meer" }
        ]
      },
      {
        id: "laje-do-tony",
        number: 3,
        title: "Tony's Dachterrasse",
        subtitle: "360-Grad-Rundumblick am Gipfel",
        description: "Hochgelegener Aussichtspunkt mit 360-Grad-Panoramablick über die Bergkette und das weite Meer.",
        highlights: ["360°-Rundumblick", "Zwillingsberge-Kulisse", "Ruhiger Rastplatz"],
        images: [
          { src: "/image/topo_light.jpg", alt: "Gipfel mit 360°-Blick", caption: "Panoramablick vom Gipfel" },
          { src: "/image/casasmorro-dark.jpg", alt: "Architektur in Vidigal", caption: "Hänge und Bauten" }
        ]
      },
      {
        id: "mirantes-secretos-vidigal",
        number: 4,
        title: "Versteckte Aussichtspunkte & Gassen",
        subtitle: "Auf den Spuren von Kunst und Geschichte",
        description: "Geführter Abstieg durch Vidigals geschichtsträchtige Gassen mit Ateliers lokaler Künstler und idyllischen Terrassen.",
        highlights: ["Alternative Aussichtspunkte", "Kunsthandwerk", "Kulturspaziergang"],
        images: [
          { src: "/image/hexa.jpg", alt: "Graffiti in Vidigal", caption: "Farben und Kunst in den Gassen" },
          { src: "/image/crianca_futebol.jpg", alt: "Gemeinschaftliches Leben", caption: "Herzliche Gastfreundschaft" }
        ]
      }
    ]
  },

  "rio-tour": {
    id: "rio-tour",
    slug: "/rio-tour",
    title: "Komplette Rio Tour",
    heroTitlePrefix: "Entdecke Rio de Janeiro mit ",
    heroTitleHighlight: "Lokalen Guides",
    heroSubtitle: "Postkarten-Highlights und reiche Stadtgeschichte aus nächster Nähe: Dona Marta, Selarón, Hafen & Maracanã.",
    tagline: "Postkarten-Highlights und reiche Stadtgeschichte aus nächster Nähe.",
    heroImage: "/image/vistacristo-light.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "5 bis 6 Stunden",
    meetingPoint: "Abholung am Hotel oder vereinbarter Treffpunkt (Südzone / Zentrum)",
    included: [
      "Klimatisierter Transport",
      "Zertifizierter Guide & lokaler Ansprechpartner",
      "Eintritte zu allen Aussichtspunkten",
      "Fotopausen an jedem Highlight"
    ],
    stops: [
      {
        id: "mirante-dona-marta",
        number: 1,
        title: "Mirante Dona Marta",
        subtitle: "Der klassische Blick auf Zuckerhut & Christusstatue",
        description: "Auf 360 Metern Höhe bietet Dona Marta Rio's vollkommenste Aussicht auf Zuckerhut, Bucht und Christusstatue in einem Rahmen.",
        highlights: ["Zuckerhut- & Buchtblick", "Perfekter Christusblick", "Sicherer Zugang"],
        images: [
          { src: "/image/vistacristo-light.jpg", alt: "Dona Marta mit Christusstatue", caption: "Christusstatue & Botafogo-Bucht" },
          { src: "/image/topo_light.jpg", alt: "Aussichtspunkt über der Bucht", caption: "Panorama der Traumstadt" }
        ]
      },
      {
        id: "escadaria-selaron",
        number: 2,
        title: "Selarón-Treppe",
        subtitle: "Das bunte Freiluft-Mosaik zwischen Lapa & Santa Teresa",
        description: "Die 215 bunten Keramikstufen von Jorge Selarón als Hommage an das brasilianische Volk. Ein kulturelles Pflichtprogramm.",
        highlights: ["215 bunte Kachelstufen", "Kacheln aus aller Welt", "Verbindung zur Künstlerszene Lapas"],
        images: [
          { src: "/image/hexa.jpg", alt: "Bunte Kachelmosaike", caption: "Farbige handgefertigte Kacheln" },
          { src: "/image/esquina_casas.jpg", alt: "Historische Häuser in Lapa", caption: "Koloniale Fassaden" }
        ]
      },
      {
        id: "mar-museu-amanha",
        number: 3,
        title: "Kunstmuseum Rio (MAR) & Porto Maravilha",
        subtitle: "Hafengeschichte, Kunst & Architektur am Praça Mauá",
        description: "Besuch am Praça Mauá und Olympischen Boulevard mit Kunstmuseum (MAR) und dem geschichtsträchtigen Erbe von Pequena África.",
        highlights: ["Praça Mauá & Uferboulevard", "Kunstmuseum Rio (MAR)", "Geschichte von Pequena África"],
        images: [
          { src: "/image/hero_rocinha_hd.jpg", alt: "Architektur am Praça Mauá", caption: "Praça Mauá & Olympischer Boulevard" },
          { src: "/image/esquina_casas.jpg", alt: "Kulturareal", caption: "Ausstellungen & Stadtkultur" }
        ]
      },
      {
        id: "maracana",
        number: 4,
        title: "Maracanã-Stadion",
        subtitle: "Der legendäre Tempel des Weltfußballs",
        description: "Fotostopp an der Bellini-Statue mit Erklärungen zu historischen WM-Momenten und der tiefen Fußballleidenschaft in Rio.",
        highlights: ["Bellini-Kapitänsstatue", "WM-Geschichte von 1950 & 2014", "Offizielle Fotopause"],
        images: [
          { src: "/image/crianca_futebol.jpg", alt: "Fußballbegeisterung in Rio", caption: "Kariokische Fußballkultur" },
          { src: "/image/topo_light.jpg", alt: "Weitblick über die Nordzone", caption: "Größe des Traditionsstadions" }
        ]
      }
    ]
  },

  bailes: {
    id: "bailes",
    slug: "/bailes",
    title: "Baile Funk",
    heroTitlePrefix: "Erlebe das Nachtleben im ",
    heroTitleHighlight: "Baile Funk",
    heroSubtitle: "Exklusive Begleitung durch Bewohner, um das pulsierende Nachtleben und den traditionellen Carioca-Funk sicher zu erleben.",
    tagline: "Erlebe das Nachtleben und die Funk-Kultur mit vertrauensvollen einheimischen Gastgebern.",
    heroImage: "/image/hero_rocinha_night_hd.jpg",
    heroImageDark: "/image/hero_rocinha_night_hd.jpg",
    duration: "4 bis 6 Stunden (Nacht)",
    meetingPoint: "Treffpunkt in der Südzone mit Hin- und Rückfahrt",
    included: [
      "Erfahrener einheimischer Begleiter",
      "Eintritt & Zugang zum VIP-/Loungebereich",
      "Sicherer Transfer hin und zurück",
      "Begleitung und Betreuung die ganze Nacht"
    ],
    stops: [
      {
        id: "esquenta",
        number: 1,
        title: "Warm-up mit Drinks & Häppchen",
        subtitle: "Treffpunkt und Einführung in den Abend",
        description: "Wir starten in einer traditionellen Bar mit Snacks, kalten Getränken und einem Gespräch über die Wurzeln der Funk-Kultur.",
        highlights: ["Kühle Drinks & Snacks", "Geschichte des Funk Carioca", "Gruppeneinführung"],
        images: [
          { src: "/image/esquina_casas.jpg", alt: "Traditionelle Abendbar in Rio", caption: "Entspannte Begrüßungsrunde" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Lichter der Favela bei Nacht", caption: "Auftakt in die Nacht" }
        ]
      },
      {
        id: "chegada-baile",
        number: 2,
        title: "Begleitete Ankunft beim Baile",
        subtitle: "Direkter, sicherer Einlass mit Einheimischen",
        description: "Reibungsloser Einlass mit unserem Begleiter, damit du die Party und Musik vollkommen entspannt und respektvoll genießen kannst.",
        highlights: ["Bevorzugter Einlass", "Orientierung vor Ort", "Betreuungsbereich"],
        images: [
          { src: "/image/casasmorro-dark.jpg", alt: "Eventbeleuchtung", caption: "Atmosphäre & Bühnenlichter" },
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Nachtansicht der Favela", caption: "Rio bei Nacht" }
        ]
      },
      {
        id: "pista-djs",
        number: 3,
        title: "Live-DJs, MCs & Tanz",
        subtitle: "Der authentische Beat des Funk Carioca",
        description: "Erlebe mitreißende Sets der besten lokalen DJs, Passinho-Tanzchoregraphen und die unverwechselbare Energie der Carioca-Musik.",
        highlights: ["Bekannte DJs & MCs", "Passinho-Tänzer", "Mitreißende Rhythmen"],
        images: [
          { src: "/image/crianca_futebol.jpg", alt: "Rhythmus und Tanz", caption: "Körpergefühl und Tanzkultur" },
          { src: "/image/hexa.jpg", alt: "Urbane Kunst", caption: "Urbane Musik und Kultur" }
        ]
      },
      {
        id: "retorno-seguro",
        number: 4,
        title: "Sicherer Rücktransfer",
        subtitle: "Begleitete Rückfahrt zu deinem Hotel",
        description: "Nach der Party bringt dich unser Gastgeber sicher zum Rücktransfer direkt zu deiner Unterkunft in der Südzone.",
        highlights: ["Garantierter Transfer", "Begleitung bis ans Ziel", "Sicherheit steht an erster Stelle"],
        images: [
          { src: "/image/hero_rocinha_night_hd.jpg", alt: "Rückfahrt mit Blick auf Rio", caption: "Sicherer Abschluss des Erlebnisses" }
        ]
      }
    ]
  }
};

const toursByLanguage: Record<Language, Record<string, TourDetail>> = {
  pt: toursDataPt,
  en: toursDataEn,
  es: toursDataEs,
  de: toursDataDe
};

export const toursData = toursDataPt;

export function getTourData(tourId: string, lang: Language = "pt"): TourDetail {
  const langSet = toursByLanguage[lang] || toursDataPt;
  return langSet[tourId] || toursDataPt[tourId] || toursDataPt.rocinha;
}

export function getAllTours(lang: Language = "pt"): Record<string, TourDetail> {
  return toursByLanguage[lang] || toursDataPt;
}
