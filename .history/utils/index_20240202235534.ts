import IMAGE from "../public/images/architecture.jpg"
import IMAGE2 from "../public/images/construction.jpg"
import IMAGE3 from "../public/images/home.jpg"
import IMAGE4 from "../public/images/interior.jpg"
import IMAGE5 from "../public/images/exterior.jpg"
import IMAGE6 from "../public/images/supervision.jpg"
import IMAGE7  from "../public/images/landscape.jpg"
import IMAGE8 from "../public/images/project1.jpg"
import IMAGE9 from "../public/images/project2.jpg"
import IMAGE10 from "../public/images/project3.jpg"
import IMAGE11 from "../public/images/project4.jpg"
import IMAGE12 from "../public/images/project5.jpg"
import IMAGE13  from "../public/images/project6.jpg"
import IMAGE14 from "../public/images/project7.png"
import IMAGE15 from "../public/images/project8.png"


export const NavMenu = [
  {
    id: 1,
    name: "Projets",
    link: "/projets"
  },
  {
    id: 2,
    name: "À Propos",
    link: "/a-propos"
  },
  {
    id: 3,
    name: "Services",
    link: "/services"
  }
]

export const SideMenu = [
  {
    id: 1,
    name: "Accueil",
    link: "/",
    image: IMAGE3
  },
  {
    id: 2,
    name: "Projets",
    link: "/projets",
    image: IMAGE
  },
  {
    id: 3,
    name: "À Propos",
    link: "/a-propos",
    image: IMAGE2
  },
  {
    id: 4,
    name: "Services",
    link: "/services",
    image: IMAGE4
  }
]

export const Socials = [
  {
    id: 1,
    name: "Instagram",
    link: "/"
  },
  {
    id: 2,
    name: "Facebook",
    link: "/"
  },
  {
    id: 1,
    name: "Whatsapp",
    link: "/"
  }
]

export const FooterLinks = [
  {
    id: 1,
    name: "À Propos",
    link: "/a-propos"
  },
  {
    id: 2,
    name: "Services",
    link: "/services"
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact"
  },
  {
    id: 4,
    name: "Projets",
    link: "/projets"
  }
]

export const Solutions = [
  {
    id: 1,
    title: "Interieur",
    text: "Nous vous accompagnons dans le choix des couleurs, l'agencement des meubles et la création d'espaces qui reflètent votre style de vie unique.",
    text2: "En tenant compte de vos préférences et de votre style de vie, nous vous aidons à créer un espace qui est à la fois fonctionnel et esthétiquement agréable. Ensemble, nous créons un espace qui est un reflet de vous, un lieu où vous pouvez vous détendre et vous sentir vraiment chez vous.",
    image: IMAGE4,
  },
  {
    id: 2,
    title: "Exterieur",
    text: "Nous créons des extérieurs durables qui sont plus que des structures. Ce sont des chefs-d'œuvre de résilience qui mettent en valeur votre espace et font de chaque retour à la maison un enchantement.",
    text2: "Chaque élément est soigneusement conçu pour résister aux éléments, tout en ajoutant une beauté intemporelle à votre propriété. Chaque fois que vous rentrez chez vous, vous êtes accueilli par un paysage qui est à la fois beau et fonctionnel, un véritable enchantement pour les sens.",
    image: IMAGE5,
  },
  {
    id: 3,
    title: "Supervision",
    text: "Nous ne nous contentons pas de suivre les plans, nous veillons à ce qu'ils soient parfaitement exécutés. Notre engagement envers la qualité est évident dans chaque projet que nous supervisons.",
    text2: "Chaque détail, chaque finition, chaque élément est soigneusement examiné pour s'assurer qu'il répond à nos normes élevées. Nous travaillons en étroite collaboration avec nos clients à chaque étape du processus pour garantir que le résultat final dépasse leurs attentes.",
    image: IMAGE6,
  },
]

export const Landscape = {
    id: 1,
    title: "Amenagement Paysager",
    text: "Fusionner la conception et la nature pour un developpement durable.",
    text2: "En tenant compte de vos préférences et de votre style de vie, nous vous aidons à créer un espace qui est à la fois fonctionnel et esthétiquement agréable. Ensemble, nous créons un espace qui est un reflet de vous, un lieu où vous pouvez vous détendre et vous sentir vraiment chez vous.",
    image: IMAGE7,
}


export const ProjectsContent = [
  {
    id: 1,
    name: "Sunset Sanctuary Retreat",
    image: IMAGE8,
    image2: IMAGE9,
    services: ["Interieur", "Exterieur", "Supervision", "Amenagement Paysager"],
    location: "Douala, Cameroon"
  },
  {
    id: 2,
    name: "La Maison Kalafatas",
    image: IMAGE10,
    image2: IMAGE11,
    services: ["Exterieur", "Supervision", "Amenagement Paysager"],
    location: "Banana Island, Nigeria"
  },
  {
    id: 3,
    name: "Concrete Cascade Creation",
    image: IMAGE12,
    image2: IMAGE13,
    services: ["Interieur", "Supervision"],
    location: "Konakry, Guinea"
  },
  {
    id: 4,
    name: "Sculpted Skyline Silhouette",
    image: IMAGE8,
    image2: IMAGE9,
    services: ["Interieur", "Exterieur", "Amenagement Paysager"],
    location: "Yoaunde, Cameroon"
  },
  {
    id: 5,
    name: "The Marble Monolith",
    image: IMAGE8,
    image2: IMAGE9,
    services: ["Interieur", "Exterieur", "Supervision"],
    location: "Libreville, Gabon"
  }

]