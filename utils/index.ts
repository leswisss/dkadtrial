import IMAGE from "../public/images/footerr4.jpg";
import IMAGE2 from "../public/images/footerr7.jpg";
import IMAGE3 from "../public/images/home.jpeg";
import IMAGE4 from "../public/images/interior.jpg";
import IMAGE5 from "../public/images/exterior.jpg";
import IMAGE6 from "../public/images/supervision.jpg";
import IMAGE7 from "../public/images/landscape.jpg";
import IMAGE8 from "../public/images/project1.jpg";
import IMAGE9 from "../public/images/project2.jpg";
import IMAGE10 from "../public/images/project3.jpg";
import IMAGE11 from "../public/images/project4.jpg";
import IMAGE12 from "../public/images/project5.jpg";
import IMAGE13 from "../public/images/project6.jpg";
import IMAGE14 from "../public/images/project7.png";
import IMAGE16 from "../public/images/project8.png";
import IMAGE15 from "../public/images/services.jpg";

export const NavMenu = [
  {
    id: 1,
    name: "Projets",
    link: ["/projects", "/projets"],
  },
  {
    id: 2,
    name: "À Propos",
    link: ["/about", "/a-propos"],
  },
  {
    id: 3,
    name: "Services",
    link: ["/services", "/services"],
  },
];

export const SideMenu = [
  {
    id: 1,
    name: "Accueil",
    link: ["/", "/"],
    image: IMAGE3,
  },
  {
    id: 2,
    name: "Projets",
    link: ["/projects", "/projets"],
    image: IMAGE,
  },
  {
    id: 3,
    name: "À Propos",
    link: ["/about", "/a-propos"],
    image: IMAGE2,
  },
  {
    id: 4,
    name: "Services",
    link: ["/services", "/services"],
    image: IMAGE15,
  },
];

export const Socials = [
  {
    id: 1,
    name: "Instagram",
    link: "/",
  },
  {
    id: 2,
    name: "Facebook",
    link: "/",
  },
  {
    id: 1,
    name: "Whatsapp",
    link: "/",
  },
];

export const FooterLinks = [
  {
    id: 1,
    name: "À Propos",
    link: "/a-propos",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    name: "Projets",
    link: "/projets",
  },
];

export const ProjectsContent = [
  {
    id: 1,
    slug: "sunset-sanctuary-retreat",
    name: "Sunset Sanctuary Retreat",
    year: 2023,
    images: [
      {
        image: IMAGE8,
        description: {
          en: "Modern two-story house with wooden accents, large windows, and greenery seamlessly integrated into the overall design.",
          fr: "Maison moderne à deux étages avec accents en bois, grandes fenêtres, et verdure intégrée parfaitement dans le design global.",
        },
      },
      {
        image: IMAGE9,
        description: {
          en: "Elegant residential architecture highlighting simplicity, functionality, and harmony with nature, enhancing the living experience.",
          fr: "Architecture résidentielle élégante soulignant la simplicité, la fonctionnalité et l'harmonie avec la nature, améliorant l'expérience de vie.",
        },
      },
      {
        image: IMAGE10,
        description: {
          en: "A modern, stylish living room with a white sofa, wooden coffee table, and large windows.",
          fr: "Un salon moderne et élégant avec un canapé blanc, une table basse en bois et de grandes fenêtres.",
        },
      },
      {
        image: IMAGE11,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
      {
        image: IMAGE12,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
      {
        image: IMAGE14,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
    ],
    services: {
      en: ["Interior", "Exterior", "Supervision", "Landscaping"],
      fr: ["Intérieur", "Extérieur", "Supervision", "Aménagement Paysager"],
    },
    serviceslug: {
      en: ["interior", "exterior", "supervision", "landscaping"],
      fr: ["intérieur", "extérieur", "supervision", "aménagement-paysager"],
    },
    location: {
      en: "Douala, Cameroon",
      fr: "Douala, Cameroun",
    },
    introDescription: {
      en: "Harmonious blend of modern architecture and natural beauty, the Sunset Sanctuary Retreat offers a tranquil and luxurious living experience amidst lush vegetation and serene landscapes.",
      fr: "Mélange harmonieux d'architecture moderne et de beauté naturelle, le Sunset Sanctuary Retreat offre une expérience de vie tranquille et luxueuse au milieu d'une végétation luxuriante et de paysages sereins.",
    },
    aboutProject: {
      en: [
        "Sunset Sanctuary Retreat is a testament to architectural innovation and sustainable design. Nestled in the heart of nature, this two-level structure is equipped with large bay windows that offer residents a breathtaking view of the surrounding greenery. The upper level, characterized by wooden slats, adds an element of privacy while enhancing the aesthetic appeal.",
        "The open garage on the ground floor offers convenience without compromising on design. The use of durable materials and seamless integration into the environment underline our commitment to an environmentally friendly lifestyle.",
      ],
      fr: [
        "Sunset Sanctuary Retreat est un témoignage de l'innovation architecturale et de la conception durable. Nichée au cœur de la nature, cette structure à deux niveaux est dotée de grandes baies vitrées qui offrent aux résidents une vue imprenable sur la verdure environnante. Le niveau supérieur, caractérisé par des lattes de bois, ajoute un élément d'intimité tout en rehaussant l'attrait esthétique.",
        "Le garage ouvert au rez-de-chaussée offre une commodité sans compromis sur le design. L'utilisation de matériaux durables et l'intégration transparente dans l'environnement soulignent notre engagement en faveur d'un mode de vie respectueux de l'environnement.",
      ],
    },
    projectInfo: {
      en: {
        style: "Modern, Ecological",
        environment: "Lush Greenery, Serene Landscapes",
        features:
          "Large bay windows, Wooden slats on the upper floor, Open garage",
      },
      fr: {
        style: "Moderne, Écologique",
        environment: "Verdure luxuriante, Paysages sereins",
        features:
          "Grandes baies vitrées, Lamelles en bois à l'étage, Garage ouvert",
      },
    },
  },
  {
    id: 2,
    slug: "maison-kalafatas",
    name: "Maison Kalafatas",
    year: 2019,
    images: [
      {
        image: IMAGE12,
        description: {
          en: "Modern two-story house with wooden accents, large windows, and greenery seamlessly integrated into the overall design.",
          fr: "Maison moderne à deux étages avec accents en bois, grandes fenêtres, et verdure intégrée parfaitement dans le design global.",
        },
      },
      {
        image: IMAGE13,
        description: {
          en: "Elegant residential architecture highlighting simplicity, functionality, and harmony with nature, enhancing the living experience.",
          fr: "Architecture résidentielle élégante soulignant la simplicité, la fonctionnalité et l'harmonie avec la nature, améliorant l'expérience de vie.",
        },
      },
      {
        image: IMAGE10,
        description: {
          en: "A modern, stylish living room with a white sofa, wooden coffee table, and large windows.",
          fr: "Un salon moderne et élégant avec un canapé blanc, une table basse en bois et de grandes fenêtres.",
        },
      },
      {
        image: IMAGE11,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
      {
        image: IMAGE8,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
      {
        image: IMAGE9,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
    ],
    services: {
      en: ["Exterior", "Supervision", "Landscaping"],
      fr: ["Extérieur", "Supervision", "Aménagement Paysager"],
    },
    serviceslug: {
      en: ["exterior", "supervision", "landscaping"],
      fr: ["extérieur", "supervision", "aménagement-paysager"],
    },
    location: {
      en: "Conakry, Guinea",
      fr: "Conakry, Guinée",
    },
    introDescription: {
      en: "Harmonious blend of modern architecture and natural beauty, the Sunset Sanctuary Retreat offers a tranquil and luxurious living experience amidst lush vegetation and serene landscapes.",
      fr: "Mélange harmonieux d'architecture moderne et de beauté naturelle, le Sunset Sanctuary Retreat offre une expérience de vie tranquille et luxueuse au milieu d'une végétation luxuriante et de paysages sereins.",
    },
    aboutProject: {
      en: [
        "Maison Kalafatas is a testament to architectural innovation and sustainable design. Nestled in the heart of nature, this two-level structure is equipped with large bay windows that offer residents a breathtaking view of the surrounding greenery. The upper level, characterized by wooden slats, adds an element of privacy while enhancing the aesthetic appeal.",
        "The open garage on the ground floor offers convenience without compromising on design. The use of durable materials and seamless integration into the environment underline our commitment to an environmentally friendly lifestyle.",
      ],
      fr: [
        "Maison Kalafatas est un témoignage de l'innovation architecturale et de la conception durable. Nichée au cœur de la nature, cette structure à deux niveaux est dotée de grandes baies vitrées qui offrent aux résidents une vue imprenable sur la verdure environnante. Le niveau supérieur, caractérisé par des lattes de bois, ajoute un élément d'intimité tout en rehaussant l'attrait esthétique.",
        "Le garage ouvert au rez-de-chaussée offre une commodité sans compromis sur le design. L'utilisation de matériaux durables et l'intégration transparente dans l'environnement soulignent notre engagement en faveur d'un mode de vie respectueux de l'environnement.",
      ],
    },
    projectInfo: {
      en: {
        style: "Modern, Ecological",
        environment: "Lush Greenery, Serene Landscapes",
        features:
          "Large bay windows, Wooden slats on the upper floor, Open garage",
      },
      fr: {
        style: "Moderne, Écologique",
        environment: "Verdure luxuriante, Paysages sereins",
        features:
          "Grandes baies vitrées, Lamelles en bois à l'étage, Garage ouvert",
      },
    },
  },
  {
    id: 3,
    slug: "delemo-residence",
    name: "Delemo Residence",
    year: 2020,
    images: [
      {
        image: IMAGE10,
        description: {
          en: "Modern two-story house with wooden accents, large windows, and greenery seamlessly integrated into the overall design.",
          fr: "Maison moderne à deux étages avec accents en bois, grandes fenêtres, et verdure intégrée parfaitement dans le design global.",
        },
      },
      {
        image: IMAGE11,
        description: {
          en: "Elegant residential architecture highlighting simplicity, functionality, and harmony with nature, enhancing the living experience.",
          fr: "Architecture résidentielle élégante soulignant la simplicité, la fonctionnalité et l'harmonie avec la nature, améliorant l'expérience de vie.",
        },
      },
      {
        image: IMAGE10,
        description: {
          en: "A modern, stylish living room with a white sofa, wooden coffee table, and large windows.",
          fr: "Un salon moderne et élégant avec un canapé blanc, une table basse en bois et de grandes fenêtres.",
        },
      },
      {
        image: IMAGE11,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
      {
        image: IMAGE12,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
      {
        image: IMAGE13,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
    ],
    services: {
      en: ["Interior", "Exterior", "Supervision"],
      fr: ["Intérieur", "Extérieur", "Supervision"],
    },
    serviceslug: {
      en: ["interior", "exterior", "supervision"],
      fr: ["intérieur", "extérieur", "supervision"],
    },
    location: {
      en: "Lagos, Nigeria",
      fr: "Lagos, Nigeria",
    },
    introDescription: {
      en: "Harmonious blend of modern architecture and natural beauty, the Sunset Sanctuary Retreat offers a tranquil and luxurious living experience amidst lush vegetation and serene landscapes.",
      fr: "Mélange harmonieux d'architecture moderne et de beauté naturelle, le Sunset Sanctuary Retreat offre une expérience de vie tranquille et luxueuse au milieu d'une végétation luxuriante et de paysages sereins.",
    },
    aboutProject: {
      en: [
        "Delemo Residence is a testament to architectural innovation and sustainable design. Nestled in the heart of nature, this two-level structure is equipped with large bay windows that offer residents a breathtaking view of the surrounding greenery. The upper level, characterized by wooden slats, adds an element of privacy while enhancing the aesthetic appeal.",
        "The open garage on the ground floor offers convenience without compromising on design. The use of durable materials and seamless integration into the environment underline our commitment to an environmentally friendly lifestyle.",
      ],
      fr: [
        "Delemo Residence est un témoignage de l'innovation architecturale et de la conception durable. Nichée au cœur de la nature, cette structure à deux niveaux est dotée de grandes baies vitrées qui offrent aux résidents une vue imprenable sur la verdure environnante. Le niveau supérieur, caractérisé par des lattes de bois, ajoute un élément d'intimité tout en rehaussant l'attrait esthétique.",
        "Le garage ouvert au rez-de-chaussée offre une commodité sans compromis sur le design. L'utilisation de matériaux durables et l'intégration transparente dans l'environnement soulignent notre engagement en faveur d'un mode de vie respectueux de l'environnement.",
      ],
    },
    projectInfo: {
      en: {
        style: "Modern, Ecological",
        environment: "Lush Greenery, Serene Landscapes",
        features:
          "Large bay windows, Wooden slats on the upper floor, Open garage",
      },
      fr: {
        style: "Moderne, Écologique",
        environment: "Verdure luxuriante, Paysages sereins",
        features:
          "Grandes baies vitrées, Lamelles en bois à l'étage, Garage ouvert",
      },
    },
  },
  {
    id: 4,
    slug: "hotel-marina",
    name: "Hotel Marina",
    year: 2021,
    images: [
      {
        image: IMAGE14,
        description: {
          en: "Modern two-story house with wooden accents, large windows, and greenery seamlessly integrated into the overall design.",
          fr: "Maison moderne à deux étages avec accents en bois, grandes fenêtres, et verdure intégrée parfaitement dans le design global.",
        },
      },
      {
        image: IMAGE16,
        description: {
          en: "Elegant residential architecture highlighting simplicity, functionality, and harmony with nature, enhancing the living experience.",
          fr: "Architecture résidentielle élégante soulignant la simplicité, la fonctionnalité et l'harmonie avec la nature, améliorant l'expérience de vie.",
        },
      },
      {
        image: IMAGE10,
        description: {
          en: "A modern, stylish living room with a white sofa, wooden coffee table, and large windows.",
          fr: "Un salon moderne et élégant avec un canapé blanc, une table basse en bois et de grandes fenêtres.",
        },
      },
      {
        image: IMAGE11,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
      {
        image: IMAGE12,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
      {
        image: IMAGE14,
        description: {
          en: "A modern living space with wooden interiors, neutral-toned furniture, and unique pendant lights.",
          fr: "Espace de vie moderne, intérieurs en bois, meubles neutres, lumières suspendues uniques.",
        },
      },
    ],
    services: {
      en: ["Interior", "Exterior", "Supervision", "Landscaping"],
      fr: ["Intérieur", "Extérieur", "Supervision", "Aménagement Paysager"],
    },
    serviceslug: {
      en: ["interior", "exterior", "supervision", "landscaping"],
      fr: ["intérieur", "extérieur", "supervision", "aménagement-paysager"],
    },
    location: {
      en: "Yaounde, Cameroon",
      fr: "Yaoundé, Cameroun",
    },
    introDescription: {
      en: "Harmonious blend of modern architecture and natural beauty, the Sunset Sanctuary Retreat offers a tranquil and luxurious living experience amidst lush vegetation and serene landscapes.",
      fr: "Mélange harmonieux d'architecture moderne et de beauté naturelle, le Sunset Sanctuary Retreat offre une expérience de vie tranquille et luxueuse au milieu d'une végétation luxuriante et de paysages sereins.",
    },
    aboutProject: {
      en: [
        "Hotel Marina is a testament to architectural innovation and sustainable design. Nestled in the heart of nature, this two-level structure is equipped with large bay windows that offer residents a breathtaking view of the surrounding greenery. The upper level, characterized by wooden slats, adds an element of privacy while enhancing the aesthetic appeal.",
        "The open garage on the ground floor offers convenience without compromising on design. The use of durable materials and seamless integration into the environment underline our commitment to an environmentally friendly lifestyle.",
      ],
      fr: [
        "Hotel Marina est un témoignage de l'innovation architecturale et de la conception durable. Nichée au cœur de la nature, cette structure à deux niveaux est dotée de grandes baies vitrées qui offrent aux résidents une vue imprenable sur la verdure environnante. Le niveau supérieur, caractérisé par des lattes de bois, ajoute un élément d'intimité tout en rehaussant l'attrait esthétique.",
        "Le garage ouvert au rez-de-chaussée offre une commodité sans compromis sur le design. L'utilisation de matériaux durables et l'intégration transparente dans l'environnement soulignent notre engagement en faveur d'un mode de vie respectueux de l'environnement.",
      ],
    },
    projectInfo: {
      en: {
        style: "Modern, Ecological",
        environment: "Lush Greenery, Serene Landscapes",
        features:
          "Large bay windows, Wooden slats on the upper floor, Open garage",
      },
      fr: {
        style: "Moderne, Écologique",
        environment: "Verdure luxuriante, Paysages sereins",
        features:
          "Grandes baies vitrées, Lamelles en bois à l'étage, Garage ouvert",
      },
    },
  },
];



export const swiperSettings = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    350: {
      slidesPerView: 1.1,
    },

    400: {
      slidesPerView: 1.2,
    },

    430: {
      slidesPerView: 1.3,
    },

    460: {
      slidesPerView: 1.4,
    },

    490: {
      slidesPerView: 1.5,
    },

    520: {
      slidesPerView: 1.6,
    },

    590: {
      slidesPerView: 1.8,
    },

    660: {
      slidesPerView: 1.8,
    },

    720: {
      slidesPerView: 1.9,
    },

    765: {
      slidesPerView: 2.1,
    },

    830: {
      slidesPerView: 2.3,
    },

    900: {
      slidesPerView: 2.5,
    },

    970: {
      slidesPerView: 2.7,
    },

    1024: {
      slidesPerView: 2.8,
    },

    1080: {
      slidesPerView: 2.8,
      spaceBetween: 10,
    },

    1150: {
      slidesPerView: 2.95,
      spaceBetween: 10,
    },

    1230: {
      slidesPerView: 3.2,
      spaceBetween: 10,
    },

    1290: {
      slidesPerView: 3.4,
      spaceBetween: 10,
    },

    1350: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },

    1410: {
      slidesPerView: 3.6,
    },

    1450: {
      slidesPerView: 4,
      spaceBetween: 14,
    },
  },
};
