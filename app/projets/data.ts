export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  services: string[];
  hero: string;
  accent: string;
  intro: string;
  context: string;
  challenge: string;
  concept: string;
  result: string;
  objective: string;
  scope: string;
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "maison-venus",
    name: "Maison Vénus",
    category: "Bien-être · Identité globale",
    year: "2026",
    services: ["Stratégie de marque", "Identité visuelle", "Direction artistique", "Déploiement print & digital"],
    hero: "/portfolio/maison-venus-hero.webp",
    accent: "#c98672",
    intro: "Une identité douce et structurée pour un lieu où le bien-être, le mouvement et l’accompagnement se rencontrent.",
    context: "Maison Vénus réunit Pilates, yoga, coaching et pratiques de bien-être dans un même lieu. La marque devait évoquer l’attention, la transformation et la féminité sans reprendre les codes attendus des instituts traditionnels.",
    challenge: "Créer une identité suffisamment sensible pour installer une relation de confiance, mais assez structurée pour accueillir plusieurs disciplines et se déployer durablement sur le lieu, les supports et les futurs produits.",
    concept: "Un emblème floral à quatre pétales devient le cœur du système. Il évoque l’ouverture, l’équilibre et le mouvement. Une palette poudrée et minérale, enrichie de terracotta et de vert sauge, installe un univers enveloppant et premium.",
    result: "Une marque cohérente, immédiatement identifiable et capable d’unifier l’expérience Maison Vénus, de la façade jusqu’aux supports d’accompagnement.",
    objective: "Unifier plusieurs disciplines dans une marque rassurante, premium et reconnaissable.",
    scope: "Identité globale · Du positionnement au déploiement",
    images: [
      { src: "/portfolio/maison-venus-hero.webp", alt: "Univers de marque Maison Vénus" },
      { src: "/portfolio/maison-venus-facade.webp", alt: "Application de l’identité Maison Vénus sur la façade" },
    ],
  },
  {
    slug: "green-code-solutions",
    name: "Green Code Solutions",
    category: "Tech responsable · Branding",
    year: "2026",
    services: ["Positionnement", "Logo & système visuel", "Identité digitale", "Supports de marque"],
    hero: "/portfolio/green-code-bureau-new.webp",
    accent: "#2ec4b6",
    intro: "Faire dialoguer innovation numérique et responsabilité environnementale dans une identité crédible, contemporaine et accessible.",
    context: "Green Code Solutions accompagne les entreprises vers un numérique plus responsable. Son identité devait rendre visible une expertise technique tout en portant une vision humaine et engagée.",
    challenge: "Éviter les clichés graphiques de l’écologie comme ceux de la tech, et construire un territoire capable de convaincre des interlocuteurs professionnels exigeants.",
    concept: "Le symbole fusionne le langage du code et la croissance organique. Les formes modulaires composent un motif vivant, tandis que le vert menthe et le bleu nuit équilibrent fraîcheur, sérieux et innovation.",
    result: "Un système clair et distinctif qui professionnalise la marque et assure une continuité forte entre ses prises de parole digitales, commerciales et institutionnelles.",
    objective: "Rendre l’expertise technique lisible sans tomber dans les codes convenus de la tech ou de l’écologie.",
    scope: "Branding · Identité et supports professionnels",
    images: [
      { src: "/portfolio/green-code-branding.webp", alt: "Planche d’identité et système graphique Green Code Solutions" },
      { src: "/portfolio/green-code-stationery.webp", alt: "Papeterie, cartes de visite et supports de marque Green Code Solutions" },
      { src: "/portfolio/green-code-web.webp", alt: "Déploiement digital de Green Code Solutions sur ordinateur portable" },
      { src: "/portfolio/green-code-pattern.webp", alt: "Motif géométrique de l’identité Green Code Solutions appliqué dans un espace" },
      { src: "/portfolio/green-code-wall.webp", alt: "Enseigne Green Code Solutions intégrée à un mur végétal" },
      { src: "/portfolio/green-code-digital.webp", alt: "Site et papeterie Green Code Solutions dans un environnement de travail" },
    ],
  },
  {
    slug: "metro-bowling",
    name: "Métro Bowling",
    category: "Lieu de vie · Rebranding",
    year: "2026",
    services: ["Repositionnement", "Refonte d’identité", "Signalétique", "Univers de communication"],
    hero: "/portfolio/metro-bowling-hero.webp",
    accent: "#ffd166",
    intro: "Transformer un bowling en une destination conviviale, énergique et reconnaissable, pensée autant pour jouer que pour se retrouver.",
    context: "Métro Bowling est un lieu de loisirs mêlant bowling, restauration et événements. La marque avait besoin d’une expression plus forte pour refléter la richesse de l’expérience proposée.",
    challenge: "Créer un univers populaire sans être générique, capable de vivre sur une façade, une piste, un menu ou un contenu social tout en restant lisible dans un environnement visuellement intense.",
    concept: "Une esthétique franche inspirée de l’affiche et du néon : noir profond, rouge et jaune, typographie expressive et signes graphiques directement issus du jeu. Le système privilégie l’impact et la modularité.",
    result: "Une identité énergique et cohérente qui transforme chaque point de contact en prolongement de l’expérience du lieu.",
    objective: "Faire du lieu une destination identifiable, conviviale et attractive au-delà du bowling.",
    scope: "Rebranding · Identité, communication et signalétique",
    images: [
      { src: "/portfolio/metro-bowling-hero.webp", alt: "Univers de marque Métro Bowling" },
      { src: "/portfolio/metro-bowling-bar.webp", alt: "Signalétique intérieure Métro Bowling" },
    ],
  },
  {
    slug: "tomme-et-sommets",
    name: "Tomme & Sommets",
    category: "Fromagerie artisanale · Identité",
    year: "2026",
    services: ["Naming", "Identité visuelle", "Packaging", "Univers boutique"],
    hero: "/portfolio/tomme-sommets-hero.webp",
    accent: "#123d9b",
    intro: "Une identité généreuse et contemporaine, ancrée dans les sommets ariégeois et pensée pour valoriser un savoir-faire artisanal.",
    context: "Tomme & Sommets est une fromagerie artisanale qui s’adresse aux habitants, aux visiteurs et aux épiceries fines. Son ambition : faire ressentir la qualité du produit et son attachement au territoire sans tomber dans l’imagerie rustique attendue.",
    challenge: "Concilier l’authenticité du geste, une personnalité chaleureuse et une présence suffisamment premium pour fonctionner aussi bien en boutique que sur un emballage ou un point de vente spécialisé.",
    concept: "Une chèvre attachante incarne la marque, entourée d’un vocabulaire de montagnes et de fleurs. Le bleu intense installe la confiance et l’ancrage, l’orange apporte la convivialité, tandis que le motif donne au système sa force de reconnaissance.",
    result: "Une marque vivante, immédiatement mémorisable et facilement déclinable, qui raconte l’Ariège avec fraîcheur et donne au produit une présence forte en rayon.",
    objective: "Valoriser un savoir-faire ariégeois avec une présence contemporaine, chaleureuse et premium.",
    scope: "Création de marque · Du naming au packaging",
    images: [
      { src: "/portfolio/tomme-sommets-identite.webp", alt: "Planche d’identité Tomme & Sommets" },
      { src: "/portfolio/tomme-sommets-packaging.webp", alt: "Packaging de la tomme de chèvre" },
      { src: "/portfolio/tomme-sommets-process.webp", alt: "Présentation du processus de fabrication de la tomme" },
      { src: "/portfolio/tomme-sommets-sac.webp", alt: "Sac boutique Tomme & Sommets" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
